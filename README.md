## Documentation used to create this project

- [Material-UI: Gatsby.js example repository](https://github.com/mui-org/material-ui/tree/master/examples/gatsby)
- [Gatsby.js documentation](https://www.gatsbyjs.com/docs/)
- [Gatsby.js plugin library](https://www.gatsbyjs.com/plugins)
- [Gatsby.js plugin: gatsby-material-ui](https://www.gatsbyjs.com/plugins/gatsby-theme-material-ui/?=gatsby-theme-material-ui)
- [MUI JSS Rendering](https://galenwong.github.io/blog/2020-02-27-mui-jss-rendering/)

## Issues and Solutions during development

# Set HTML id for markdown headings for page navigation

# Gatsby and the Window object

By running the `gatsby develop` command Gatsby runs in the browser. But when building the application with `gatsby build` it happens server-side, so the window object doesn't exist. This causes the build process to fail.

I used a simple if check to determine if the window is defined and add the scroll event listener function.

The following article helped me overcome this issue and learn more about it: [Gatsby-the window is not defined error, what and how to fix it?](https://blog.greenroots.info/gatsby-the-window-is-not-defined-error-what-and-how-to-fix-it)
