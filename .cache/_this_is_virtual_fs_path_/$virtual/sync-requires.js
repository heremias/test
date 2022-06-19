
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-tsx": preferDefault(require("/Users/jeremyevans/test/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/jeremyevans/test/src/pages/index.tsx")),
  "component---src-templates-node-default-tsx": preferDefault(require("/Users/jeremyevans/test/src/templates/NodeDefault.tsx")),
  "component---src-templates-page-default-tsx": preferDefault(require("/Users/jeremyevans/test/src/templates/PageDefault.tsx"))
}

