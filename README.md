# Tyler Gan — reflections & learning blog

A personal blog where the **repository is the database**. Each entry is a
Markdown file; GitHub Pages turns it into a styled page automatically. No
backend, no build server to babysit — just write Markdown and push.

Built with [Jekyll](https://jekyllrb.com/) on GitHub Pages. Warm-magazine
design with a few technical touches (typing animation, scroll reveals,
light/dark toggle).

🔗 **Live site:** https://tylergan.github.io/boamm/ *(after you enable Pages — see below)*

---

## ✍️ Adding a new entry (the important part)

1. Create a file in [`_posts/`](_posts) named:

   ```
   YYYY-MM-DD-a-short-slug.md
   ```

   e.g. `2026-07-01-what-i-learned-about-caching.md`

2. Paste this at the top (the bit between the `---` lines is "front matter"):

   ```markdown
   ---
   title: "What I learned about caching"
   subtitle: "An optional one-line hook."
   date: 2026-07-01
   tags: [reflection, caching, engineering]
   ---

   Write your reflection here in normal Markdown.

   ## A heading

   - bullet points
   - **bold**, *italic*, `inline code`, [links](https://example.com)
   ```

3. Commit and push. That's it — the post appears on the home page, newest
   first, with a reading-time estimate and tag chips, all styled for you.

> **Tip:** to draft without publishing, put the file in a `_drafts/` folder
> (no date in the filename). Run `bundle exec jekyll serve --drafts` to preview
> drafts locally; they won't appear on the live site.

---

## 🎨 Making it yours

| What | Where |
|------|-------|
| Your name, role, company, location | [`_config.yml`](_config.yml) → `author:` |
| Hero typing phrases | [`_config.yml`](_config.yml) → `author.typed` |
| Social links (GitHub / LinkedIn / email) | [`_config.yml`](_config.yml) → `social:` |
| About-page bio & "why I write" | [`about.md`](about.md) — look for `[EDIT ME]` |
| Experience timeline | [`_data/experience.yml`](_data/experience.yml) |
| Colours, fonts, spacing | [`assets/css/main.scss`](assets/css/main.scss) → `:root` |

Anything wrapped in `[SQUARE BRACKETS]` is a placeholder waiting for you —
the About page in particular is scaffolded for you to paste in your LinkedIn
details.

---

## 👀 Preview locally (optional)

You don't need this — GitHub builds the site on push — but to see changes
before pushing:

```bash
bundle install                       # first time only
bundle exec jekyll serve --livereload
# open http://localhost:4000/boamm/
```

---

## 🚀 Turning on the live site

1. Push this branch and merge it into `master` (or whichever branch you serve).
2. On GitHub: **Settings → Pages → Build and deployment**.
3. Source: **Deploy from a branch** → Branch: `master` → `/ (root)` → **Save**.
4. Wait ~1 minute, then visit **https://tylergan.github.io/boamm/**.

### Want the cleaner root URL (`tylergan.github.io`)?

Create a repo named **`tylergan.github.io`**, copy these files into it, and
change one line in [`_config.yml`](_config.yml):

```yaml
baseurl: ""        # was "/boamm"
```

Everything else just works — all links use Jekyll's `relative_url`, so the
site is portable between the two URLs.
