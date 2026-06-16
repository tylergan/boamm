---
title: "My first month at Canva"
subtitle: "What I expected, what surprised me, and what I'm carrying forward."
date: 2026-06-02
tags: [reflection, onboarding, canva]
---

> This is a sample entry to show how a reflection reads on the site. Edit or delete it once you've written your own.

A month in, the thing I keep coming back to is how much of engineering is *reading* rather than writing. I came in expecting to spend my days producing code. Instead, most of my best days have been spent slowly building a mental model of a system someone else designed years ago.

## What surprised me

The codebase is bigger than anything I touched at university — and that's the point. Nobody holds all of it in their head. The skill isn't memorising it; it's knowing how to find the one file that matters and ignore the other ten thousand.

A few habits that have already paid off:

- **Following the data, not the function names.** When I'm lost, I stop reading top-down and instead ask "where does this value come from, and where does it go?"
- **Writing down questions before asking them.** Half the time, writing the question out answers it.
- **Pairing early.** Watching how a senior engineer navigates is worth a day of solo flailing.

## What I'm carrying forward

I want to get faster at the loop of *confusion → small experiment → understanding*. The reflex to feel embarrassed about not knowing something is the enemy here. The faster I can say "I don't get this yet," the faster I learn.

```python
# The mental model I'm trying to internalise:
def learn(task):
    while not understood(task):
        guess = form_hypothesis(task)
        result = run_small_experiment(guess)
        update_model(result)   # being wrong quickly > being right slowly
    return understood(task)
```

Next month I want to ship something end-to-end on my own — not because the code will be hard, but because owning the whole loop is where the real learning is.
