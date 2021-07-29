This project is my Web Development portfolio.

## Deployed on Netlify

Access the live version of my portfolio under [https://diana-vitanyi.netlify.app/](https://diana-vitanyi.netlify.app/).

## Running this project locally

1. Clone this repository and open it in your Code Editor of choice.

2. Open the terminal in your Code Editor.

3. Install the packages required to run the project by running:

```bash
npm install

```

4. After installation run the development server with:

```bash
npm run develop

```

5. The live site is running on [http://localhost:8000](http://localhost:8000).

6. You can start editing the page by modifying the files in `src/pages`. The page auto-updates as you edit the file.

## Technology used

This app is

- created using the Gatbsy.js `gatsby-cli`,
- styled using a custom MaterialUI theme,
- the project documentations are loaded from markdown files,
- the content is distributed using the Gatsby content Mesh and GraphQL.

The project runs client-side Javascript from `gatsby-browser.js`.

## Issues and Solutions during development

### Set HTML id for markdown headings for page navigation

In this project I have used markdown files as my content source (src/projects). Each `.md` file contains information about a portfolio project with the same structure:

- metadata about the project in the frontmatter,
- Table of Contents with the list of topics found in the documentation and the links to them on the page using ids,
- documentation text each topic starting with an `<hr/>` tag and a header.

To give the Gatsby GraphQl layer access to the files in the filesystem I have used a source plugin, `gatsby-source-filesystem` and configured it in `gatsby-config.js`.

Using GraphQl queries I dynamically added this data to the `index.js` page and queried based on a unique slug for the project details page.

To add a Table of Contents linked to the topics I needed a dynamic id for each header generated automatically based on the text of the heading. Using the syntax provided by the official [Markdown documentation](https://www.markdownguide.org/extended-syntax/#heading-ids) Gatsby failed to add the ids to the headers.

To overcome this issue I replaced each heading with a link and placed the header element inside. The `<a/>` rendered from the markdown files with this change had the ids needed.

When configuring the `jsx` generated from the markdown using the `markdown-to-jsx` npm package I could no longer add the `target="__blank"` prop to all the `<a/>` on the project details page, else the Table of Contents links would also open new pages. Therefore, I have added logic to the `gatsby-browser.js`, which gets executed when the app is running in a browser and adds the correct `target` attribute to the clicked link based on the `href`.

To overcome this issue I used the following resources:

- [Discussion: Anchors in Markdown](https://talk.commonmark.org/t/anchors-in-markdown/247)
- [Markdown.org Documentation](https://www.markdownguide.org/extended-syntax/#heading-ids)

### Gatsby and the Window object

To implement the scroll-to-top button feature on the project details page I needed to access the `window` object on the client side.

Using the `gatsby develop` command Gatsby runs in the browser. But when building the application with `gatsby build` it happens server-side, so the window object doesn't exist. This causes the build process to fail.

The `gatsby-browser.js` file "...gives you control over Gatsby’s behavior in the browser. For example, responding to a user changing routes, or calling a function when the user first opens any page."[1]

To overcome this issue:

1. I added a `gatsby-brower.js` file to the root folder.
2. Created the `class ScrollToTopBtn` which when initialized adds event listeners to the window object (which now will always exist) and the button added to the `project-details.js` template with the id of `scroll-btn`.
3. If the HTML element with the id given is present on the page, the class is initialized and the event listeners are added. All done by the exported `onRouteUpdate()` which runs when the user initially loads the page or changes routes.

The following articles and documentation helped me overcome this issue:

- [Scroll to top button in Gatsby](https://pakjiddat.netlify.app/posts/adding-scroll-to-top-button-to-gatsby-website)
- [Gatsby Documentation: onRouteUpdate function](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/)
- [1]: [Gatsby Documentation: API Files](https://www.gatsbyjs.com/docs/api-files/#gatsby-skip-here)

## Documentation used to create this project

- [Material-UI: Gatsby.js example repository](https://github.com/mui-org/material-ui/tree/master/examples/gatsby)
- [Gatsby.js documentation](https://www.gatsbyjs.com/docs/)
- [Gatsby.js plugin library](https://www.gatsbyjs.com/plugins)
- [Gatsby.js plugin: gatsby-material-ui](https://www.gatsbyjs.com/plugins/gatsby-theme-material-ui/?=gatsby-theme-material-ui)
- [MUI JSS Rendering](https://galenwong.github.io/blog/2020-02-27-mui-jss-rendering/)
- [Netlify: Submit JavaScript-rendered forms with AJAX](https://docs.netlify.com/forms/setup/)
