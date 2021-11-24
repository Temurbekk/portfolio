exports.id = "component---src-pages-experience-tsx";
exports.ids = ["component---src-pages-experience-tsx"];
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

/***/ "./src/data/Edu.ts":
/*!*************************!*\
  !*** ./src/data/Edu.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  id: 1,
  name: "CUNY Brooklyn College",
  major: "Computer Science",
  degree: "Bachelor"
}]);

/***/ }),

/***/ "./src/data/Experience.ts":
/*!********************************!*\
  !*** ./src/data/Experience.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  id: 6,
  name: "Fidelity Investments",
  designation: "Associate Software Engineer",
  dated: "January 2021 - Present",
  logo: "https://pbs.twimg.com/profile_images/1278360830367674368/SfqcgSVD_400x400.jpg",
  companyLink: "https://www.fidelity.com/",
  description: `<p>Worked on internal tool to display Angular components in isolation.</p>
      <p>Currently on an iOS team working with Swift. Testing backend services with Postman. Pushing out features and handling bugfixes for Fidelity Investments app and Spire app.</p>`
}, {
  id: 5,
  name: "Acme Pro Academy",
  designation: "Course Instructor",
  dated: "August 2020 - Present",
  logo: "https://i.pinimg.com/originals/ee/ae/12/eeae128c67a6f0a902a27bc8e9af7bea.png",
  companyLink: "#",
  description: `<p>Teaching 5 students in a small course to become QA engineers. Taught them the fundamentals and as well as Object Oriented aspects of Java. 
      Taught them fundamentals and advanced techniques in MySQL. Taught them a whole month of Selenium for automation testing.</p>`
}, {
  id: 4,
  name: "Tech Talent Pipeline",
  designation: "Teaching Assistant",
  dated: "January 2020 - February 2020",
  logo: "https://images.squarespace-cdn.com/content/v1/54d3a0dee4b026182d00678f/1477579015890-A21YLPBJ52JTDMJEYYKT/ke17ZwdGBToddI8pDm48kMrxTVJ4vssYFCaBUhrMT2FZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxODIjmcyD-jB-T7UjYJQJhf-Q_u2gKr-wXFg9D30Krwf2CLL-Ve3p5dxzA2c9S6Q4/image-asset.png",
  companyLink: "https://www.techtalentpipeline.nyc/",
  description: `<p>Worked as a Teaching Assistant in a classroom with 30+ students. Was on call to answer any student confusion and unblock them asap. 
      Graded assignments and provided students with academic and professional feedback.</p>`
}, {
  id: 3,
  name: "Errunds",
  designation: "Frontend Developer Intern",
  dated: "June 2020 - September 2020",
  logo: "data:image/jpeg;base64,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",
  companyLink: "https://errundsonline.com/",
  description: `<p>Worked in a team with another intern to create the admin site for the company to manage their businesses and customers. 
      Used React functional components to create the web app. Used Material UI to design and make it responsive. Fetched data from the backend using Apollo GraphQL.</p>`
}, {
  id: 2,
  name: "Keko Box",
  designation: "Full Stack Software Engineer Intern",
  dated: "March 2020 - June 2020",
  logo: "https://static1.squarespace.com/static/5bb124000b77bded2a903f2b/t/5d025b32b3126d0001c196c2/1594922257848/",
  companyLink: "https://www.kekobox.com/",
  description: `<p>Worked alongside CTO to build and manage company web application. 
    Added feature to allow customers fulfil their recent orders and view the history of recently fulfilled orders. Also, implemented par level endpoints on the backend.</p>`
}, {
  id: 1,
  name: "StableBio",
  designation: "Frontend Developer Intern",
  dated: "January 2020 - April 2020",
  logo: "https://images.squarespace-cdn.com/content/v1/5ae9b1b45417fcbd24516e44/1548834623748-WX3Q8ZT3W4CVYRGM1G4N/ke17ZwdGBToddI8pDm48kAO3tlx4zAn9kqiOyDBfKg0UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcJjo5ZxlmN4Z7QydhlY1d2whRJ3xkybXHe2YAZiHo5XjVnbcm0RsvzpMjNAekx_K6/IMG_3691.jpeg",
  companyLink: "https://stablebio.com/",
  description: `<p>Worked alongside CEO and CTO of the company to create a cross-platform mobile application using React Native.</p>
      <p>Created the user interface according to the CEO's design. Implemented navigation and responsiveness or the application. User APIs to fetch medical stats.</p>`
}]);

/***/ }),

/***/ "./src/data/Interests.ts":
/*!*******************************!*\
  !*** ./src/data/Interests.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  id: 1,
  name: "Traveling"
}, {
  id: 2,
  name: "Teaching"
}, {
  id: 3,
  name: "Trading Stocks"
}, {
  id: 4,
  name: "Cryptocurrency/Blockchain"
}]);

/***/ }),

/***/ "./src/data/Language.ts":
/*!******************************!*\
  !*** ./src/data/Language.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  id: 1,
  name: "English"
}, {
  id: 2,
  name: "Russian"
}, {
  id: 3,
  name: "Uzbek"
}, {
  id: 4,
  name: "Tajik"
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

/***/ "./src/data/Tech.ts":
/*!**************************!*\
  !*** ./src/data/Tech.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  id: 1,
  name: "Languages: Java, Javascript/TypeScript, HTML/CSS, Go, Swift, Python, Dart"
}, {
  id: 2,
  name: "Technologies: Git/Github, Jira, VSCode, XCode, Docker, Firebase, Node.js, Selenium WebDriver, GR Mustache"
}, {
  id: 3,
  name: "Frameworks: React(CLI, Gatsby), React Native, Flutter, Express, Spring Boot, Apollo"
}, {
  id: 4,
  name: "Databases: PostgreSQL, MySQL, GraphQL"
}, {
  id: 5,
  name: "Others: Content Management System, Microservices, Cognitive Computing, Splunk"
}]);

/***/ }),

/***/ "./src/pages/experience.tsx":
/*!**********************************!*\
  !*** ./src/pages/experience.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_stepper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/stepper.css */ "./src/styles/stepper.css");
/* harmony import */ var _styles_stepper_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_stepper_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_Experience__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/Experience */ "./src/data/Experience.ts");
/* harmony import */ var _data_Edu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/Edu */ "./src/data/Edu.ts");
/* harmony import */ var _data_Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/Language */ "./src/data/Language.ts");
/* harmony import */ var _data_Tech__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/Tech */ "./src/data/Tech.ts");
/* harmony import */ var _data_Interests__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/Interests */ "./src/data/Interests.ts");
/* harmony import */ var _styles_ExperienceStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/ExperienceStyles */ "./src/styles/ExperienceStyles.tsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.tsx");










const AboutPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    pageTitle: "About Me"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ExperienceStyles__WEBPACK_IMPORTED_MODULE_7__.ExperienceWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ExperienceStyles__WEBPACK_IMPORTED_MODULE_7__.WorkWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Work Experience"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "experience-stepper"
  }, _data_Experience__WEBPACK_IMPORTED_MODULE_2__["default"].map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: item.id,
    className: "step"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "circle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "line"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ExperienceStyles__WEBPACK_IMPORTED_MODULE_7__.Stepper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ExperienceStyles__WEBPACK_IMPORTED_MODULE_7__.StepperHead, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, item.designation), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: item.companyLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, item.dated)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ExperienceStyles__WEBPACK_IMPORTED_MODULE_7__.LogoLink, {
    href: item.companyLink
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: item.logo,
    alt: "company",
    width: "175px"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ExperienceStyles__WEBPACK_IMPORTED_MODULE_7__.StepperDesc, {
    dangerouslySetInnerHTML: {
      __html: item.description
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ExperienceStyles__WEBPACK_IMPORTED_MODULE_7__.EdWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Education"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ExperienceStyles__WEBPACK_IMPORTED_MODULE_7__.EdContent, null, _data_Edu__WEBPACK_IMPORTED_MODULE_3__["default"].map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: item.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Graduated with a ", item.degree, "'s Degree majored in", " ", item.major, " from ", item.name, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Tech Stack"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ExperienceStyles__WEBPACK_IMPORTED_MODULE_7__.EdContent, null, _data_Tech__WEBPACK_IMPORTED_MODULE_5__["default"].map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: item.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, item.name)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Interests"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ExperienceStyles__WEBPACK_IMPORTED_MODULE_7__.EdContent, null, _data_Interests__WEBPACK_IMPORTED_MODULE_6__["default"].map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: item.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, item.name)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Language"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ExperienceStyles__WEBPACK_IMPORTED_MODULE_7__.EdContent, null, _data_Language__WEBPACK_IMPORTED_MODULE_4__["default"].map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: item.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, item.name)))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);

/***/ }),

/***/ "./src/styles/ExperienceStyles.tsx":
/*!*****************************************!*\
  !*** ./src/styles/ExperienceStyles.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienceWrapper": () => (/* binding */ ExperienceWrapper),
/* harmony export */   "WorkWrapper": () => (/* binding */ WorkWrapper),
/* harmony export */   "EdWrapper": () => (/* binding */ EdWrapper),
/* harmony export */   "EdContent": () => (/* binding */ EdContent),
/* harmony export */   "Stepper": () => (/* binding */ Stepper),
/* harmony export */   "StepperHead": () => (/* binding */ StepperHead),
/* harmony export */   "LogoLink": () => (/* binding */ LogoLink),
/* harmony export */   "StepperDesc": () => (/* binding */ StepperDesc)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const ExperienceWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ExperienceStyles__ExperienceWrapper"
})(["align-items:flex-start;display:flex;color:#eeeeee;padding:5% 0;@media (max-width:700px){flex-direction:column;}"]);
const WorkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ExperienceStyles__WorkWrapper"
})(["flex:2;margin-right:8%;h1{font-weight:300;padding-bottom:35px;margin-bottom:35px;border-bottom:solid 1px #ffffff;}@media (max-width:700px){margin-right:0;}"]);
const EdWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ExperienceStyles__EdWrapper"
})(["flex:1;h1{font-weight:300;padding-bottom:35px;margin-bottom:35px;border-bottom:solid 1px #ffffff;}@media (max-width:700px){margin:40px 0;}"]);
const EdContent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ExperienceStyles__EdContent"
})(["font-weight:300;margin-bottom:100px;@media (max-width:700px){margin:0 0 40px 0;}"]);
const Stepper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ExperienceStyles__Stepper"
})(["padding-left:50px;width:100%;@media (max-width:700px){padding:10px;}"]);
const StepperHead = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ExperienceStyles__StepperHead"
})(["display:flex;align-items:center;justify-content:space-between;h3{margin:2px;font-weight:300;}a{font-size:23px;font-weight:300;color:#eeeeee;text-decoration:none;}@media (max-width:700px){flex-direction:column;align-items:flex-start;}"]);
const LogoLink = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a.withConfig({
  displayName: "ExperienceStyles__LogoLink"
})(["display:block;img{padding:2%;display:flex;}"]);
const StepperDesc = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ExperienceStyles__StepperDesc"
})(["max-width:80%;p{font-size:16px;font-weight:300;margin:5px;}li{font-size:16px;font-weight:300;margin:5px;}@media (max-width:700px){max-width:100%;}"]);

/***/ }),

/***/ "./src/components/layout.css":
/*!***********************************!*\
  !*** ./src/components/layout.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/stepper.css":
/*!********************************!*\
  !*** ./src/styles/stepper.css ***!
  \********************************/
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
//# sourceMappingURL=component---src-pages-experience-tsx.js.map