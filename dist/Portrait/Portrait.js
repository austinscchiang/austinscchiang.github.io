"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portrait = exports.PortraitImpl = void 0;
const gatsby_1 = require("gatsby");
const react_1 = __importDefault(require("react"));
const Portrait_module_scss_1 = __importDefault(require("./Portrait.module.scss"));
const ContactLinks_1 = __importDefault(require("../ContactLinks"));
const bind_1 = __importDefault(require("classnames/bind"));
const cx = bind_1.default.bind(Portrait_module_scss_1.default);
const PortraitImpl = ({ data }) => {
    const portraitLink = data?.site?.siteMetadata?.author?.portrait ?? "";
    return (react_1.default.createElement("div", { className: Portrait_module_scss_1.default["portrait__container"] },
        react_1.default.createElement("div", { className: Portrait_module_scss_1.default["portrait__wrapper"] },
            react_1.default.createElement("img", { src: portraitLink }),
            react_1.default.createElement(ContactLinks_1.default, null))));
};
exports.PortraitImpl = PortraitImpl;
const Portrait = (props) => (react_1.default.createElement(gatsby_1.StaticQuery, { query: gatsby_1.graphql `
      query PortraitQuery {
        site {
          siteMetadata {
            author {
              portrait
            }
          }
        }
      }
    `, render: data => react_1.default.createElement(exports.PortraitImpl, Object.assign({}, props, { data: data })) }));
exports.Portrait = Portrait;
exports.default = exports.Portrait;
//# sourceMappingURL=Portrait.js.map