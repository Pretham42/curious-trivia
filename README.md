# 💡 The Story Behind — Trivia Worth Knowing

A trivia game where **every answer unlocks the strange, true story behind it**. Guess
the answer, then read *why* — why airplane windows are round, how a moth caused the
first computer "bug," why it rains diamonds on Neptune.

Built as a fast, self-contained static site: no build step, no frameworks, no tracking.

**▶️ Live site:** https://pretham42.github.io/curious-trivia/

## What makes it different

Most trivia asks you to recall a fact and moves on. Here the fact is just the doorway —
the reward is the **story**. Questions were hand-picked so the explanation is genuinely
worth reading, and the science leans toward the fascinating (Peto's paradox, relativistic
gold, tardigrades in space) rather than dry general knowledge.

## Features

- **278 questions** across **18 categories**
- A detailed, fact-checked **story reveal** after every question
- Randomised question *and* answer order — every run is different
- Score + streak tracking and a results screen
- Full keyboard support (A–D / 1–4 to answer, Enter / → for next)
- Light & dark themes (remembers your choice)
- Responsive down to small phones; respects reduced-motion

## Categories

Technology · Biology · Logic & Puzzles · Pop Culture · Chemistry · History ·
Indian History (with a Tamil Nadu emphasis) · Internet · Ancient History · Space ·
Finance · Politics · General Knowledge · Transportation · Language · Mathematics ·
Food & Drink · Psychology

## Run it locally

It's plain HTML/CSS/JS, so any static server works:

```bash
python3 -m http.server 8099
# then open http://localhost:8099
```

## Project structure

```
index.html      # markup + views (home / quiz / results)
style.css       # design system, light + dark themes
app.js          # quiz logic, scoring, theme, keyboard
questions.js    # the question bank (edit this to add questions)
```

## Adding a question

Append an object to the `window.QUESTIONS` array in `questions.js`:

```js
{
  category: "Space",
  difficulty: "medium",
  question: "Your question…",
  options: ["Correct answer", "Wrong", "Wrong", "Wrong"],
  answer: 0,                       // index of the correct option
  story: "The fascinating **why**, with **highlighted** phrases."
}
```

The `category` just has to match one already in the file to get its icon and colour.
Answer order is shuffled at runtime, so `answer` simply points at the right option in
your list.
