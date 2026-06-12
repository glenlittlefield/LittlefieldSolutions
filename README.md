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
- Contact form Web3Forms Access Key in `script.js`

The current form sends email notifications using Web3Forms with your Access Key:

```text
5776d154-027a-4e0c-95df-a2b89c89264c
```

To change the target email or get a new key, register at [web3forms.com](https://web3forms.com/) and replace the `WEB3FORMS_ACCESS_KEY` constant in `script.js`.

## Receiving Project Requests

The contact forms submit details to **Web3Forms** using a background API request (`fetch`). Submissions are processed instantly, and you will receive an email containing the form data.

As a safety net, if the Web3Forms API fails (e.g. network timeout or invalid key), the form automatically falls back to a `mailto:` link, which opens the visitor's local mail client with the details pre-filled. This ensures you never miss a lead.

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
