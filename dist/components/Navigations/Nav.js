"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nav = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var Nav = function (_a) {
    var id = _a.id, className = _a.className, appendClassname = _a.appendClassname, children = _a.children;
    return react_1.default.createElement("div", { id: id, className: (className !== null && className !== void 0 ? className : 'storybook-navigation-nav') + " " + appendClassname }, children);
};
exports.Nav = Nav;
exports.Nav.propTypes = {
    /**
     * The id of the Nav
     */
    id: prop_types_1.default.string,
    /**
     * Use a different className
     */
    className: prop_types_1.default.string,
    /**
     * Add more classnames
     */
    appendClassname: prop_types_1.default.string,
    /**
     * The HTML inside of the NavLink
     */
    children: prop_types_1.default.node.isRequired
};
exports.Nav.defaultProps = {
    appendClassname: ''
};
