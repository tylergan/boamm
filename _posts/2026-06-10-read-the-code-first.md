---
title: "Read the code before you write the code"
subtitle: "A small rule that's saved me from a lot of wrong turns."
date: 2026-06-10
tags: [habits, engineering, reflection]
---

> Sample entry — replace with your own thinking.

I had a ticket this week that *looked* like a fresh feature. My instinct was to open a blank file and start. I'm glad I didn't.

Instead I spent the first hour reading how three similar features were already built. By the end, two things were obvious:

1. There was already a helper that did 80% of what I needed.
2. The "obvious" approach I'd have written would have broken an assumption the rest of the system relies on.

## The lesson

The blank file is seductive because it feels like progress. But in a mature codebase, *the answer usually already exists in some form*. My job is more archaeology than invention.

I'm trying to make this a rule:

> Before writing new code, find the closest thing that already exists and understand why it's shaped the way it is.

It's slower for the first hour and much faster for the next ten.

## A note to future me

When I feel the urge to skip the reading and "just start," that urge is almost always anxiety, not insight. Slow down. Read first.
