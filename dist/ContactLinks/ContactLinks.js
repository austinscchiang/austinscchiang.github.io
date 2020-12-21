"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactLinks = exports.ContactLinksImpl = void 0;
const gatsby_1 = require("gatsby");
const react_1 = __importDefault(require("react"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
const fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
fontawesome_svg_core_1.library.add(free_brands_svg_icons_1.faGithub, free_brands_svg_icons_1.faLinkedinIn, free_brands_svg_icons_1.faTwitter, free_brands_svg_icons_1.faInstagram);
const ContactLinks_module_scss_1 = __importDefault(require("./ContactLinks.module.scss"));
const bind_1 = __importDefault(require("classnames/bind"));
const cx = bind_1.default.bind(ContactLinks_module_scss_1.default);
const ContactLinksImpl = ({ data }) => {
    const contactLinks = data?.site?.siteMetadata?.author?.contactLinks ?? [];
    const contactLinksRendered = contactLinks.map(contactLink => (react_1.default.createElement("a", { href: contactLink.href, title: contactLink.name },
        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: ["fab", contactLink.fontAwesomeClass] }))));
    return (react_1.default.createElement("div", { className: cx({ contactLinks: true }) }, contactLinksRendered));
};
exports.ContactLinksImpl = ContactLinksImpl;
const ContactLinks = (props) => (react_1.default.createElement(gatsby_1.StaticQuery, { query: gatsby_1.graphql `
      query ContactLinksQuery {
        site {
          siteMetadata {
            author {
              contactLinks {
                name
                href
                fontAwesomeClass
              }
            }
          }
        }
      }
    `, render: data => react_1.default.createElement(exports.ContactLinksImpl, Object.assign({}, props, { data: data })) }));
exports.ContactLinks = ContactLinks;
exports.default = exports.ContactLinks;
//# sourceMappingURL=ContactLinks.js.map