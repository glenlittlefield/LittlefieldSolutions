# Littlefield Web Solutions

A complete static business website for Littlefield Web Solutions, an affordable website design and redesign service for local small businesses.

The site is built with only HTML, CSS, and vanilla JavaScript, so it can be deployed directly to GitHub Pages with no backend, database, package manager, or build process.

## Files

- `index.html` - Main website content and SEO metadata
- `plumbing-template.html` - Standalone plumbing website template preview
- `hvac-template.html` - Standalone HVAC website template preview
- `physical-therapy-template.html` - Standalone physical therapy website template preview
- `styles.css` - Responsive styling, layout, animations, and visual system
- `script.js` - Mobile navigation, scroll effects, reveal animations, and mailto contact form
- `README.md` - Project notes and GitHub Pages deployment instructions

## Editing Content

Open `index.html` in a code editor and update the text directly inside each section.

Common sections to edit:

- Hero headline and subheadline
- About cards
- Services
- Pricing package details
- Template showcase content
- Testimonials
- FAQ answers
- Contact form email address

## Customizing Pricing

Pricing appears in the `#pricing` section of `index.html`.

Current packages:

- Basic: `$150 USD`
- Standard: `$250 USD`
- Premium: `$500 USD`

To change pricing, update both the visible price in the pricing cards and the matching package options inside the contact form.

## Changing Business Information

Business name, tagline, navigation labels, footer text, and SEO metadata are all in `index.html`.

Important places to update:

- `<title>`
- `<meta name="description">`
- Header brand text
- Hero copy
- Contact section
- Footer copyright
- Contact form mailto email in `script.js`

The current form sends to:

```text
LittlefieldSolutions2026@outlook.com
```

Replace that email in `script.js` with the preferred business email address.

## Receiving Project Requests

The contact forms use `mailto:` because GitHub Pages is static and does not run backend code.

When a visitor submits the form, their email app opens with the project details filled in. You receive the request only after they send that email.

For a more reliable embedded form inbox on a static site, connect the form to a static form service such as Formspree, Basin, Getform, or Netlify Forms. Those services provide a form endpoint that can collect submissions without building your own backend.

## Image Credits

The website uses remote placeholder images from Unsplash. Replace image URLs in `index.html` if you want different visuals.

## Deploying to GitHub Pages

1. Create a new GitHub repository.
2. Add these files to the repository root:
   - `index.html`
   - `plumbing-template.html`
   - `hvac-template.html`
   - `physical-therapy-template.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Commit and push the files to GitHub.
4. Open the repository on GitHub.
5. Go to **Settings**.
6. In the left menu, click **Pages**.
7. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
8. Choose the `main` branch and `/ (root)` folder.
9. Click **Save**.
10. GitHub will publish the website and show the live GitHub Pages URL.

The site requires no build step. Once GitHub Pages is enabled, changes pushed to the selected branch will automatically update the live website.

## Local Preview

You can preview the site by opening `index.html` directly in a browser.

For the most accurate local test, run a simple static server from this folder:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```
