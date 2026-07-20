# Flow works — website

A static marketing site for **Flow works**, an AI-assisted web-build agency (mockup concept). Plain HTML/CSS/JS — no build step, no dependencies to install.

```
flow-works-site/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── README.md
```

## Run it locally

Just open `index.html` in a browser. Or, for a local server (needed if you add more pages later):

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## Deploy on GitHub Pages

1. Create a new repository on GitHub (e.g. `flow-works-site`) and push these files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Save. GitHub gives you a URL shortly after, usually:
   `https://<your-username>.github.io/<repo-name>/`

That's it — no server, no build tool. Every push to `main` updates the live site within a minute or two.

## About the contact form

GitHub Pages only serves static files — there's no backend to receive form submissions. Right now the form (`js/main.js`) opens the visitor's email client with the message pre-filled, so it works with zero setup.

If you'd rather have messages land directly (no email client popup), swap in a free form service — takes about five minutes:

**Option: [Formspree](https://formspree.io)**
1. Sign up, create a form, copy your form endpoint (`https://formspree.io/f/xxxxxxx`).
2. In `index.html`, change:
   ```html
   <form class="contact-form" id="contact-form" novalidate>
   ```
   to:
   ```html
   <form class="contact-form" id="contact-form" action="https://formspree.io/f/xxxxxxx" method="POST">
   ```
3. Remove the `e.preventDefault()` line in `js/main.js`'s submit handler (or delete the JS handler entirely) so the form posts normally.

## Editing content

- Copy and section content: `index.html`
- Colors, fonts, spacing: `css/styles.css` (all tokens are CSS variables at the top of the file)
- Mobile menu, scroll animations, form behavior: `js/main.js`

## Notes

- Fonts load from Google Fonts via `@import` in `styles.css` — no local font files needed, but it does require an internet connection to render as designed.
- The company name, projects, and blog posts are placeholder content from the original mockup brief — replace with real details before using this for an actual business.
