"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageQuery = void 0;
const react_1 = __importDefault(require("react"));
const gatsby_1 = require("gatsby");
const Layout_1 = __importDefault(require("../Layout"));
const Portrait_1 = __importDefault(require("../Portrait"));
// NOTE: this should really be a template instead of a single component,
// but static query rendering doesn't seem to play nice with
// markdownRemark: https://github.com/gatsbyjs/gatsby/issues/6350.
// We're using a page component here instead for geting markdown-rendered-HTML
// from HTML, but page components with non-static graphql queries can't be
// templates.
function About({ data }) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    return (react_1.default.createElement(Layout_1.default, null,
        react_1.default.createElement(Portrait_1.default, null),
        react_1.default.createElement("div", { dangerouslySetInnerHTML: { __html: html } })));
}
exports.default = About;
exports.pageQuery = gatsby_1.graphql `
  query AboutQuery {
    markdownRemark(frontmatter: { slug: { eq: "/about" } }) {
      html
      frontmatter {
        slug
      }
    }
  }
`;
//# sourceMappingURL=About.js.map