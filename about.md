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

{{ site.author.intro }}

I'm currently an **{{ site.author.role }}** at **{{ site.author.company }}**, based in {{ site.author.location }}. This site is my working notebook — a place to slow down at the end of the day and turn what I did into something I actually understand. Less a portfolio, more a thinking-out-loud.

## Why I write here

[EDIT ME — a few honest sentences on what reflection does for you. e.g. "I find that the act of writing forces me to notice the gap between 'I saw this work' and 'I understand why it works.' If I can't explain a thing here, I didn't really learn it."]

## What I'm focused on right now

- [EDIT ME — a current area you're going deep on, e.g. "Getting fluent in the codebase I work in"]
- [EDIT ME — a skill you're deliberately practicing]
- [EDIT ME — something outside work you're learning]

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
