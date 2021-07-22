## Documentation used to create this project

- [Material-UI: Gatsby.js example repository](https://github.com/mui-org/material-ui/tree/master/examples/gatsby)
- [Gatsby.js documentation](https://www.gatsbyjs.com/docs/)
- [Gatsby.js plugin library](https://www.gatsbyjs.com/plugins)
- [Gatsby.js plugin: gatsby-material-ui](https://www.gatsbyjs.com/plugins/gatsby-theme-material-ui/?=gatsby-theme-material-ui)
- [MUI JSS Rendering](https://galenwong.github.io/blog/2020-02-27-mui-jss-rendering/)

## Issues and Solutions during development

# Set HTML id for markdown headings for page navigation

# Gatsby and the Window object

Using the `gatsby develop` command Gatsby runs in the browser. But when building the application with `gatsby build` it happens server-side, so the window object doesn't exist. This causes the build process to fail.

The `gatsby-browser.js` file "...gives you control over Gatsby’s behavior in the browser. For example, responding to a user changing routes, or calling a function when the user first opens any page."[^1]

To overcome this issue:

1. I added a `gatsby-brower.js` file to the root folder.
2. Created the `class ScrollToTopBtn` which when initialized adds event listeners to the window object (which now will always exist) and the button added to the `project-details.js` template with the id of `scroll-btn`.
3. If the HTML element with the id given is present on the page, the class is initialized and the event listeners are added. All done by the exported `onRouteUpdate()` which runs when the user initially loads the page or changes routes.

The following articles and documentation helped me overcome this issue:

- [Scroll to top button in Gatsby](https://pakjiddat.netlify.app/posts/adding-scroll-to-top-button-to-gatsby-website)
- [Gatsby Documentation: onRouteUpdate function](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/)
- [^1]: [Gatsby Documentation: API Files](https://www.gatsbyjs.com/docs/api-files/#gatsby-skip-here)
