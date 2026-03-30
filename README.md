# NeevShaktiSanstha Website

A modern, accessible, mobile-first NGO website built with Next.js for an organization supporting people with disabilities.

## Tech Stack

- Next.js App Router
- React
- Modern CSS with custom design system
- Semantic HTML and accessible patterns shjo

## Project Structure

```text
app/
  about/page.js
  contact/page.js
  donate/page.js
  get-involved/page.js
  mission-vision/page.js
  programs/page.js
  stories/page.js
  videos/page.js
  globals.css
  layout.js
  page.js
  robots.js
  sitemap.js
components/
  ContactForm.js
  CtaBanner.js
  Footer.js
  Header.js
  ImpactStats.js
  PageHero.js
  ProgramCard.js
  Reveal.js
  ScrollToTop.js
  SectionIntro.js
  TestimonialCard.js
  VideoGrid.js
data/
  siteContent.js
public/
  favicon.svg
```

## Editing Content

Most editable NGO content lives in `data/siteContent.js`.

Update this file to change:

- Navigation labels and footer links
- Hero copy and impact counters
- Programs and initiatives
- Testimonials and success stories
- YouTube testimonial URLs
- Donation and contact information

### Add a new YouTube video

Add another object to `videoTestimonials` in `data/siteContent.js`:

```js
{
  title: "Video title",
  description: "Short summary",
  url: "https://www.youtube.com/watch?v=..."
}
```

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`

## Production Build

```bash
npm run build
npm run start
```

## Deploy on Vercel

1. Push this project to GitHub, GitLab, or Bitbucket.
2. Import the repository into Vercel.
3. Vercel should detect Next.js automatically.
4. Deploy with the default settings.

## Notes

- The contact form is currently a frontend-ready placeholder and can be connected later to a Next.js API route, Formspree, Resend, or another backend workflow.
- The donation page includes a clean placeholder area for payment gateway integration.
- Placeholder media panels can be replaced later with real NGO photos, maps, and campaign visuals.
