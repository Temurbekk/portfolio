exports.id = "component---src-pages-contact-tsx";
exports.ids = ["component---src-pages-contact-tsx"];
exports.modules = {

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/63159454.json */ "./public/page-data/sq/d/63159454.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");


/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */




const Seo = ({
  description,
  lang,
  meta,
  title
}) => {
  var _site$siteMetadata, _site$siteMetadata2;

  const {
    site
  } = _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = (_site$siteMetadata = site.siteMetadata) === null || _site$siteMetadata === void 0 ? void 0 : _site$siteMetadata.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__.Helmet, {
    htmlAttributes: {
      lang
    },
    title: title,
    titleTemplate: defaultTitle ? `%s | ${defaultTitle}` : null,
    meta: [{
      name: `description`,
      content: metaDescription
    }, {
      property: `og:title`,
      content: title
    }, {
      property: `og:description`,
      content: metaDescription
    }, {
      property: `og:type`,
      content: `website`
    }, {
      name: `twitter:card`,
      content: `summary`
    }, {
      name: `twitter:creator`,
      content: ((_site$siteMetadata2 = site.siteMetadata) === null || _site$siteMetadata2 === void 0 ? void 0 : _site$siteMetadata2.author) || ``
    }, {
      name: `twitter:title`,
      content: title
    }, {
      name: `twitter:description`,
      content: metaDescription
    }].concat(meta)
  });
};

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};
Seo.propTypes = {
  description: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  lang: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  meta: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./src/components/Contact/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Contact/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


const ContactWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Contact__ContactWrapper"
})(["margin-bottom:20px;img{margin:0 20px 0 0;}@media (max-width:700px){img{margin:10% 0;}}"]);
const ContactLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Contact__ContactLink"
})(["display:flex;align-items:center;text-decoration:none;p{font-size:30px;color:#ffffff;margin:0;}@media (max-width:700px){flex-direction:column;p{font-size:20px;}}"]);
const ContactBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Contact__ContactBox"
})(["display:flex;align-items:center;p{font-size:30px;color:#ffffff;margin:0;}@media (max-width:700px){flex-direction:column;p{font-size:20px;}}"]);

const SocialContact = ({
  info
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContactWrapper, null, info.linkTo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContactLink, {
  href: info.path
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  alt: "contact link Temurbek",
  src: info.icon
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, info.title)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContactBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  alt: "contact link Temurbek",
  src: info.icon
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, info.title)));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialContact);

/***/ }),

/***/ "./src/components/Footer/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Footer/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



const Footer = ({
  footerClass
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: `defaultFooter ${footerClass}`
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "View site source on", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/Temurbekk/portfolio",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Github"), " ", "| Designed and Developed by", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/Temurbekk",
  target: "_blank",
  rel: "noopener noreferrer"
}, "Temurbek Sabirov")));

Footer.propTypes = {
  footerClass: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/Navbar/Links.tsx":
/*!*****************************************!*\
  !*** ./src/components/Navbar/Links.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");



const NavItem = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link).withConfig({
  displayName: "Links__NavItem"
})(["color:#ffffff;margin-right:35px;transition:color 0.2s ease-out;text-decoration:none;:hover{color:#7fa1e8;transition:color 0.2s;}&.active{color:#7fa1e8;}transition:all 200ms ease-in;position:relative;:after{position:absolute;bottom:0;left:0;right:0;width:0%;content:\".\";color:transparent;background:goldenrod;height:1px;transition:all 0.4s ease-in;}@media (max-width:768px){padding:8px 0;z-index:6;}"]);

const Links = ({
  info
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavItem, {
    to: info.path,
    exact: "true",
    activeClassName: "active"
  }, info.label);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Links);

/***/ }),

/***/ "./src/components/Navbar/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Navbar/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _Links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Links */ "./src/components/Navbar/Links.tsx");
/* harmony import */ var _data_NavLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/NavLinks */ "./src/data/NavLinks.ts");




const Navigation = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].nav.withConfig({
  displayName: "Navbar__Navigation"
})(["display:flex;position:relative;@media (max-width:768px){height:6vh;top:0;left:0;right:0;left:0;}"]);
const Toggle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Navbar__Toggle"
})(["display:none;height:100%;cursor:pointer;@media (max-width:768px){display:flex;z-index:10;}"]);
const Navbox = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Navbar__Navbox"
})(["display:flex;height:100%;justify-content:flex-end;align-items:center;@media (max-width:768px){flex-direction:column;position:fixed;width:100%;z-index:9;justify-content:flex-start;background-color:#060144;transition:all 0.3s ease-in;left:", ";padding-top:20%;top:0;}"], props => props.open ? "-100%" : "0");
const Hamburger = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Navbar__Hamburger"
})(["background-color:#ffffff;width:32px;height:2px;transition:all 0.3s linear;align-self:center;position:relative;transform:", ";::before,::after{width:32px;height:2px;background-color:#ffffff;content:\"\";position:absolute;transition:all 0.3s linear;}::before{transform:", ";top:-10px;}::after{opacity:", ";transform:", ";top:10px;}"], props => props.open ? "rotate(-45deg)" : "inherit", props => props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)", props => props.open ? "0" : "1", props => props.open ? "rotate(90deg) " : "rotate(0deg)");

const Navbar = () => {
  const {
    0: navbarOpen,
    1: setNavbarOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Navigation, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Toggle, {
    navbarOpen: navbarOpen,
    onClick: () => setNavbarOpen(!navbarOpen)
  }, navbarOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Hamburger, {
    open: true
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Hamburger, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Navbox, {
    open: !navbarOpen
  }, _data_NavLinks__WEBPACK_IMPORTED_MODULE_2__["default"].map(navItem => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Links__WEBPACK_IMPORTED_MODULE_1__["default"], {
    info: navItem,
    key: navItem.label
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./src/components/layout.tsx":
/*!***********************************!*\
  !*** ./src/components/layout.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.css */ "./src/components/layout.css");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navbar___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar/ */ "./src/components/Navbar/index.tsx");
/* harmony import */ var _Footer___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer/ */ "./src/components/Footer/index.tsx");
/* harmony import */ var _seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seo */ "./src/components/seo.js");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @reach/router */ "./node_modules/@gatsbyjs/reach-router/es/index.js");


 // import favicon from "../assets/images/rash-favicon.png";






const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "layout__Wrapper"
})(["background-color:#060144;width:100%;background-repeat:no-repeat;background-size:cover;min-height:100vh;height:auto;background-position:bottom;padding:5% 8%;position:relative;@media (max-width:700px){min-height:100vh;height:auto;}"]);

const Layout = ({
  children,
  pageTitle
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_seo__WEBPACK_IMPORTED_MODULE_5__["default"], {
  title: pageTitle
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_reach_router__WEBPACK_IMPORTED_MODULE_6__.Location, null, ({
  location
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, {
    className: location.pathname === "/" ? "cutBackground" : ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navbar___WEBPACK_IMPORTED_MODULE_3__["default"], null), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer___WEBPACK_IMPORTED_MODULE_4__["default"], {
    footerClass: location.pathname === "/" ? "footerInitial" : "footerAbsolute"
  }));
}));

Layout.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/data/Contact.ts":
/*!*****************************!*\
  !*** ./src/data/Contact.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  id: 1,
  title: "Github",
  linkTo: true,
  icon: "https://raw.githubusercontent.com/Temurbekk/portfolio/ac558d9f3a7b45c36ebd1e7ac0c97282c8418bb0/src/images/github.svg",
  path: "https://github.com/Temurbekk"
}, {
  id: 2,
  title: "LinkedIn",
  linkTo: true,
  icon: "https://raw.githubusercontent.com/Temurbekk/portfolio/ac558d9f3a7b45c36ebd1e7ac0c97282c8418bb0/src/images/linkedin.svg",
  path: "https://www.linkedin.com/in/temursabirov"
}]);

/***/ }),

/***/ "./src/data/NavLinks.ts":
/*!******************************!*\
  !*** ./src/data/NavLinks.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  label: "About",
  path: "/"
}, {
  label: "Experience",
  path: "/experience"
}, {
  label: "Projects",
  path: "/projects"
}, {
  label: "Contact",
  path: "/contact"
}]);

/***/ }),

/***/ "./src/pages/contact.tsx":
/*!*******************************!*\
  !*** ./src/pages/contact.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Contact___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Contact/ */ "./src/components/Contact/index.tsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.tsx");
/* harmony import */ var _data_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/Contact */ "./src/data/Contact.ts");
/* harmony import */ var _styles_ContactStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/ContactStyles */ "./src/styles/ContactStyles.tsx");






const ContactPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pageTitle: "Contact Page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ContactStyles__WEBPACK_IMPORTED_MODULE_4__.ContactWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ContactStyles__WEBPACK_IMPORTED_MODULE_4__.ContactHeader, null, "Get in touch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ContactStyles__WEBPACK_IMPORTED_MODULE_4__.ContactDetails, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ContactStyles__WEBPACK_IMPORTED_MODULE_4__.ContactBox, null, _data_Contact__WEBPACK_IMPORTED_MODULE_3__["default"].map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Contact___WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: item.id,
    info: item
  })))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactPage);

/***/ }),

/***/ "./src/styles/ContactStyles.tsx":
/*!**************************************!*\
  !*** ./src/styles/ContactStyles.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactWrapper": () => (/* binding */ ContactWrapper),
/* harmony export */   "ContactHeader": () => (/* binding */ ContactHeader),
/* harmony export */   "ContactDetails": () => (/* binding */ ContactDetails),
/* harmony export */   "ContactBox": () => (/* binding */ ContactBox)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const ContactWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ContactStyles__ContactWrapper"
})(["margin:10% auto;@media (max-width:700px){margin:15% auto;}"]);
const ContactHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1.withConfig({
  displayName: "ContactStyles__ContactHeader"
})(["text-align:CENTER;color:#7fa1e8;margin-bottom:5%;font-weight:300;"]);
const ContactDetails = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ContactStyles__ContactDetails"
})(["display:flex;align-items:baseline;justify-content:center;@media (max-width:700px){flex-direction:column;align-items:center;}"]);
const ContactBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ContactStyles__ContactBox"
})(["display:flex;align-items:center;flex-direction:column;font-weight:300;@media (max-width:700px){flex-direction:column;}"]);

/***/ }),

/***/ "./src/components/layout.css":
/*!***********************************!*\
  !*** ./src/components/layout.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./public/page-data/sq/d/63159454.json":
/*!*********************************************!*\
  !*** ./public/page-data/sq/d/63159454.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Temur","description":"Temur\' personal website portfolio","author":"Temurbek Sabirov"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-contact-tsx.js.map