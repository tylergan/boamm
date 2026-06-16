---
layout: page
title: About
subtitle: Who I am, where I've been, and why this page exists.
permalink: /about/
---

<!--
  ──────────────────────────────────────────────────────────────
  EDIT ME: Everything in this file with [SQUARE BRACKETS] is a
  placeholder. Paste in details from your LinkedIn to make it
  yours. The experience timeline reads from _data/experience.yml.
  ──────────────────────────────────────────────────────────────
-->

I'm currently a **Software Engineer at Canva**, with prior software engineering experience at **TikTok** and **Goldman Sachs**, and strategy/fintech roles at **Accenture**, **American Express**, **EY**, and **Humm**. I have a strong interest in finance and technology, and I try to stay current with both emerging tech and macro trends.

Outside of work, I like to go to the gym, get outdoors, and eat the occasional cheesecake. 🍰

This site is my working notebook — a place to slow down at the end of the day and turn what I did into something I actually understand. Less a portfolio, more a thinking-out-loud.

## Why I write here

Reflection is how I check that I'm actually learning, not just busy. Writing an entry forces me to notice the gap between "I saw this work" and "I understand *why* it works" — and if I can't explain a thing here, that's a signal I haven't really learned it yet. <!-- EDIT ME — make this yours -->

## What I'm focused on right now

- Changing how Canva writes and dispatches configuration, and building analytics for our PaaS platform.
- Getting deeply fluent in a large, mature codebase — reading before writing.
- Connecting the engineering I do day-to-day to the finance and macro trends I follow. <!-- EDIT ME — tweak freely -->

## Experience

<div class="timeline">
{% for job in site.data.experience %}
  <div class="timeline-item reveal">
    <div class="timeline-when mono">{{ job.when }}</div>
    <div class="timeline-body">
      <h3 class="timeline-role">{{ job.role }} <span class="timeline-at">· {{ job.org }}</span></h3>
      {% if job.summary %}<p class="timeline-summary">{{ job.summary }}</p>{% endif %}
      {% if job.points %}
      <ul class="timeline-points">
        {% for point in job.points %}<li>{{ point }}</li>{% endfor %}
      </ul>
      {% endif %}
    </div>
  </div>
{% endfor %}
</div>

## Find me

<p class="about-links">
  {% if site.social.github and site.social.github != "" %}<a href="https://github.com/{{ site.social.github }}" target="_blank">GitHub ↗</a>{% endif %}
  {% if site.social.linkedin and site.social.linkedin != "" %}<a href="https://www.linkedin.com/in/{{ site.social.linkedin }}" target="_blank">LinkedIn ↗</a>{% endif %}
  {% if site.social.email and site.social.email != "" %}<a href="mailto:{{ site.social.email }}">Email ↗</a>{% endif %}
</p>
