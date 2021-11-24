
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/temur/Desktop/vsCode/portfolio/.cache/dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("/Users/temur/Desktop/vsCode/portfolio/src/pages/404.tsx")),
  "component---src-pages-about-tsx": preferDefault(require("/Users/temur/Desktop/vsCode/portfolio/src/pages/about.tsx")),
  "component---src-pages-contact-tsx": preferDefault(require("/Users/temur/Desktop/vsCode/portfolio/src/pages/contact.tsx")),
  "component---src-pages-experience-tsx": preferDefault(require("/Users/temur/Desktop/vsCode/portfolio/src/pages/experience.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/temur/Desktop/vsCode/portfolio/src/pages/index.tsx")),
  "component---src-pages-projects-tsx": preferDefault(require("/Users/temur/Desktop/vsCode/portfolio/src/pages/projects.tsx"))
}

