"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = exports.LayoutImpl = void 0;
const gatsby_1 = require("gatsby");
const react_1 = __importDefault(require("react"));
const react_helmet_1 = require("react-helmet");
const Layout_module_scss_1 = __importDefault(require("./Layout.module.scss"));
const bind_1 = __importDefault(require("classnames/bind"));
const cx = bind_1.default.bind(Layout_module_scss_1.default);
const LayoutImpl = ({ children, data }) => {
    const title = data?.site?.siteMetadata?.title ?? "Austin Chiang";
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_helmet_1.Helmet, null,
            react_1.default.createElement("meta", { charSet: "utf-8" }),
            react_1.default.createElement("title", null, title)),
        react_1.default.createElement("div", { className: cx({ layout: true }) },
            react_1.default.createElement("div", { className: Layout_module_scss_1.default["layout__left"] }, children))));
};
exports.LayoutImpl = LayoutImpl;
const Layout = (props) => (react_1.default.createElement(gatsby_1.StaticQuery, { query: gatsby_1.graphql `
      query LayoutQuery {
        site {
          siteMetadata {
            author {
              name
            }
            title
          }
        }
      }
    `, render: data => react_1.default.createElement(exports.LayoutImpl, Object.assign({}, props, { data: data })) }));
exports.Layout = Layout;
exports.default = exports.Layout;
//# sourceMappingURL=Layout.js.map