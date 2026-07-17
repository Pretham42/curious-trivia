/* ============================================================
   THE STORY BEHIND — app logic
   Depends on questions.js which defines a global QUESTIONS array.
   ============================================================ */
(function () {
  "use strict";

  /* ---- Category presentation (emoji, accent colour, blurb) ---- */
  var CATEGORY_META = {
    "Technology":        { emoji: "💻", color: "#7dd3fc", desc: "Bugs, keyboards, and happy accidents that shaped computing." },
    "Biology":           { emoji: "🧬", color: "#86efac", desc: "Proteins, evolution, cancer, and the weirdness of being alive." },
    "Logic & Puzzles":   { emoji: "🧩", color: "#c4b5fd", desc: "Brain-benders where the intuitive answer is usually wrong." },
    "Pop Culture":       { emoji: "🎬", color: "#f0abfc", desc: "Hidden sounds, secret codes, and film-set legends." },
    "Chemistry":         { emoji: "⚗️", color: "#5eead4", desc: "Elements with backstories and reactions that changed history." },
    "History":           { emoji: "📜", color: "#fcd34d", desc: "The strange, true events they skipped in class." },
    "Indian History":    { emoji: "🛕", color: "#ff9933", desc: "Chola bronzes, Sangam poets and mighty empires — with a Tamil Nadu tilt." },
    "Internet":          { emoji: "🌐", color: "#93c5fd", desc: "First messages, first memes, and how the web really began." },
    "Ancient History":   { emoji: "🏺", color: "#fdba74", desc: "Lost tech and early civilizations that were way ahead of us." },
    "Space":             { emoji: "🪐", color: "#a5b4fc", desc: "Diamond rain, dead stars, and the scale of the cosmos." },
    "Finance":           { emoji: "💰", color: "#fde047", desc: "Bubbles, crashes, and where money's habits came from." },
    "Politics":          { emoji: "🗳️", color: "#f9a8d4", desc: "Odd origins of the systems that govern us." },
    "General Knowledge": { emoji: "💡", color: "#fca5a5", desc: "Delightful facts that sound made up but aren't." },
    "Transportation":    { emoji: "🚂", color: "#67e8f9", desc: "Why we travel the way we do — often for accidental reasons." },
    "Language":          { emoji: "🔤", color: "#6ee7b7", desc: "Where everyday words secretly came from." },
    "Mathematics":       { emoji: "🔢", color: "#f0a5c0", desc: "Numbers, infinities, and beautiful counter-intuition." },
    "Food & Drink":      { emoji: "🍽️", color: "#fbbf72", desc: "The surprising history hiding in your kitchen." },
    "Psychology":        { emoji: "🧠", color: "#d8b4fe", desc: "How your mind fools you — with names for each trick." }
  };

  /* Display order: the user's requested categories first, bonuses after */
  var CATEGORY_ORDER = [
    "Technology", "Biology", "Logic & Puzzles", "Pop Culture", "Chemistry",
    "History", "Indian History", "Internet", "Ancient History", "Space",
    "Finance", "Politics", "General Knowledge", "Transportation", "Language",
    "Mathematics", "Food & Drink", "Psychology"
  ];

  var QUIZ_LEN_CATEGORY = 10;
  var QUIZ_LEN_MIXED = 12;
  var LETTERS = ["A", "B", "C", "D", "E"];

  /* ---- State ---- */
  var state = {
    queue: [],
    index: 0,
    score: 0,
    seen: 0,
    streak: 0,
    answered: false,
    label: "",
    replaySource: null // { type: 'category'|'mixed', name }
  };

  /* ---- Element helpers ---- */
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  /* Allow **highlighted** phrases in stories, safely */
  function formatStory(s) {
    return escapeHTML(s).replace(/\*\*(.+?)\*\*/g, '<span class="hl">$1</span>');
  }
  function meta(cat) {
    return CATEGORY_META[cat] || { emoji: "❓", color: "#ffcf6b", desc: "" };
  }

  /* ---- Views ---- */
  function showView(name) {
    ["home", "quiz", "results"].forEach(function (v) {
      var node = $(v);
      if (node) node.hidden = (v !== name);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---- Home ---- */
  function buildHome() {
    var total = QUESTIONS.length;
    var cats = countByCategory();
    var catCount = Object.keys(cats).length;

    $("heroStats").innerHTML =
      stat(total, "questions") + stat(catCount, "categories") + stat("100%", "with a story");

    var grid = $("categoryGrid");
    grid.innerHTML = "";
    CATEGORY_ORDER.forEach(function (cat) {
      if (!cats[cat]) return;
      var m = meta(cat);
      var card = el("button", "cat-card");
      card.style.setProperty("--cat", m.color);
      card.setAttribute("data-cat", cat);
      card.innerHTML =
        '<span class="cat-emoji">' + m.emoji + "</span>" +
        '<h3 class="cat-name">' + escapeHTML(cat) + "</h3>" +
        '<p class="cat-desc">' + escapeHTML(m.desc) + "</p>" +
        '<span class="cat-count">' + cats[cat] + " questions</span>";
      card.addEventListener("click", function () { startCategory(cat); });
      grid.appendChild(card);
    });
  }
  function stat(num, lbl) {
    return '<div class="hero-stat"><span class="num">' + num + '</span><span class="lbl">' + lbl + "</span></div>";
  }
  function countByCategory() {
    var c = {};
    QUESTIONS.forEach(function (q) { c[q.category] = (c[q.category] || 0) + 1; });
    return c;
  }

  /* ---- Start a run ---- */
  function startCategory(cat) {
    var pool = QUESTIONS.filter(function (q) { return q.category === cat; });
    state.replaySource = { type: "category", name: cat };
    beginRun(shuffle(pool).slice(0, QUIZ_LEN_CATEGORY), cat);
  }
  function startMixed() {
    state.replaySource = { type: "mixed" };
    beginRun(shuffle(QUESTIONS).slice(0, QUIZ_LEN_MIXED), "Random mix");
  }
  function replay() {
    if (!state.replaySource) return startMixed();
    if (state.replaySource.type === "category") startCategory(state.replaySource.name);
    else startMixed();
  }
  function beginRun(queue, label) {
    state.queue = queue;
    state.index = 0;
    state.score = 0;
    state.seen = 0;
    state.streak = 0;
    state.label = label;
    showView("quiz");
    renderQuestion();
  }

  /* ---- Render a question ---- */
  function renderQuestion() {
    var q = state.queue[state.index];
    state.answered = false;
    var m = meta(q.category);

    var badge = $("quizCatBadge");
    badge.textContent = m.emoji + "  " + q.category;
    badge.style.setProperty("--cat", m.color);
    $("progressFill").style.setProperty("--cat", m.color);

    $("qDifficulty").textContent = q.difficulty || "";
    $("qText").innerHTML = escapeHTML(q.question);
    $("quizCount").textContent = (state.index + 1) + " / " + state.queue.length;
    $("progressFill").style.width = (state.index / state.queue.length) * 100 + "%";

    updateScoreboard();

    /* Build shuffled options while tracking the correct one */
    var opts = q.options.map(function (text, i) {
      return { text: text, correct: i === q.answer };
    });
    opts = shuffle(opts);

    var wrap = $("options");
    wrap.innerHTML = "";
    opts.forEach(function (opt, i) {
      var b = el("button", "option");
      b.type = "button";
      b.setAttribute("data-correct", opt.correct ? "1" : "0");
      b.innerHTML =
        '<span class="opt-key">' + LETTERS[i] + "</span>" +
        '<span class="opt-label">' + escapeHTML(opt.text) + "</span>" +
        '<span class="opt-mark"></span>';
      b.addEventListener("click", function () { choose(b, opt.correct, q); });
      wrap.appendChild(b);
    });

    var panel = $("storyPanel");
    panel.hidden = true;
  }

  /* ---- Answer handling ---- */
  function choose(btn, correct, q) {
    if (state.answered) return;
    state.answered = true;
    state.seen++;

    var buttons = $("options").querySelectorAll(".option");
    buttons.forEach(function (b) {
      b.disabled = true;
      var isRight = b.getAttribute("data-correct") === "1";
      var mark = b.querySelector(".opt-mark");
      if (isRight) {
        b.classList.add("correct");
        mark.textContent = "✓";
      } else if (b === btn) {
        b.classList.add("incorrect");
        mark.textContent = "✗";
      } else {
        b.classList.add("dimmed");
      }
    });

    if (correct) {
      state.score++;
      state.streak++;
    } else {
      state.streak = 0;
    }
    updateScoreboard();

    var verdict = $("verdict");
    verdict.className = "verdict " + (correct ? "right" : "wrong");
    verdict.textContent = correct
      ? pick(["Correct! ✨", "Nailed it. ✅", "Spot on. 🎯", "Yes! 🙌"])
      : pick(["Not quite. 🤔", "Nope — but a great one to learn.", "Wrong, but you'll remember it now."]);

    $("storyText").innerHTML = formatStory(q.story);
    var panel = $("storyPanel");
    panel.hidden = false;

    var isLast = state.index >= state.queue.length - 1;
    $("nextBtn").textContent = isLast ? "See results →" : "Next question →";

    $("progressFill").style.width = ((state.index + 1) / state.queue.length) * 100 + "%";
  }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function updateScoreboard() {
    $("scoreValue").textContent = state.score;
    $("scoreSeen").textContent = state.seen;
    $("streakValue").textContent = state.streak;
    var chip = document.querySelector(".score-chip.streak");
    if (chip) chip.classList.toggle("hot", state.streak >= 3);
  }

  /* ---- Next / results ---- */
  function next() {
    if (!state.answered) return;
    if (state.index >= state.queue.length - 1) return showResults();
    state.index++;
    renderQuestion();
  }

  function showResults() {
    showView("results");
    var total = state.queue.length;
    var pct = total ? Math.round((state.score / total) * 100) : 0;

    var emoji, title, blurb;
    if (pct === 100) { emoji = "🏆"; title = "Flawless!"; blurb = "A perfect run. You didn't just guess — you knew."; }
    else if (pct >= 80) { emoji = "🌟"; title = "Seriously sharp."; blurb = "You clearly collect interesting facts. Respect."; }
    else if (pct >= 60) { emoji = "🎉"; title = "Well played."; blurb = "Solid instincts — and a few new stories in your pocket."; }
    else if (pct >= 40) { emoji = "📚"; title = "Learning as you go."; blurb = "Half the fun is the stories you didn't see coming."; }
    else { emoji = "🌱"; title = "Everyone starts here."; blurb = "You just picked up a pile of great stories. Run it back."; }

    $("resultsEmoji").textContent = emoji;
    $("resultsTitle").textContent = title;
    $("resultsScore").textContent = "You scored " + state.score + " / " + total + "  (" + pct + "%)";
    $("resultsBlurb").textContent = blurb;
  }

  /* ---- Theme ---- */
  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem("tsb-theme"); } catch (e) {}
    var theme = saved || "dark";
    applyTheme(theme);
    $("themeToggle").addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme") || "dark";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var icon = document.querySelector(".theme-icon");
    if (icon) icon.textContent = theme === "dark" ? "🌙" : "☀️";
    try { localStorage.setItem("tsb-theme", theme); } catch (e) {}
  }

  /* ---- Global actions & keyboard ---- */
  function initActions() {
    document.addEventListener("click", function (e) {
      var t = e.target.closest("[data-action]");
      if (!t) return;
      var action = t.getAttribute("data-action");
      if (action === "home") { e.preventDefault(); buildHome(); showView("home"); }
      else if (action === "start-mixed") { e.preventDefault(); startMixed(); }
      else if (action === "scroll-categories") { e.preventDefault(); document.getElementById("categories").scrollIntoView({ behavior: "smooth" }); }
      else if (action === "next") { next(); }
      else if (action === "replay") { replay(); }
    });

    document.addEventListener("keydown", function (e) {
      if ($("quiz").hidden) return;
      var key = e.key.toLowerCase();
      if (!state.answered) {
        var idx = -1;
        if (key >= "a" && key <= "d") idx = key.charCodeAt(0) - 97;
        else if (key >= "1" && key <= "4") idx = parseInt(key, 10) - 1;
        if (idx >= 0) {
          var buttons = $("options").querySelectorAll(".option");
          if (buttons[idx]) { buttons[idx].click(); e.preventDefault(); }
        }
      } else if (key === "enter" || key === " " || e.key === "ArrowRight") {
        next(); e.preventDefault();
      }
    });
  }

  /* ---- Boot ---- */
  function boot() {
    if (typeof QUESTIONS === "undefined" || !QUESTIONS.length) {
      document.getElementById("app").innerHTML =
        '<p style="text-align:center;padding:60px;color:var(--text-dim)">Could not load questions. Please refresh.</p>';
      return;
    }
    initTheme();
    initActions();
    buildHome();
    showView("home");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
