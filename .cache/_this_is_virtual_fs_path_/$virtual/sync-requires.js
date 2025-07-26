
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/snehamaheshwari/my-portfolio/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/snehamaheshwari/my-portfolio/src/pages/404.js")),
  "component---src-pages-archive-js": preferDefault(require("/Users/snehamaheshwari/my-portfolio/src/pages/archive.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/snehamaheshwari/my-portfolio/src/pages/index.js"))
}

