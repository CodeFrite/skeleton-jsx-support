"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsx = exports.transpileJSX = void 0;
var add = function (parent, child) {
    parent.appendChild((child === null || child === void 0 ? void 0 : child.nodeType) ? child : document.createTextNode(child));
};
var appendChild = function (parent, child) {
    if (Array.isArray(child)) {
        child.forEach(function (nestedChild) { return appendChild(parent, nestedChild); });
    }
    else {
        add(parent, child);
    }
};
var transpileJSX = function (type, props) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    console.log(type, props, children);
    console.log(typeof (type));
    var elem;
    if (typeof type === 'function') {
        elem = new type(props, children);
        return elem.render();
    }
    else if (typeof type === 'string') {
        elem = document.createElement(type);
    }
    // add props
    if (props) {
        for (var key in props) {
            if (key.substring(0, 2) !== "on") {
                elem.setAttribute(key, props[key]);
            }
            else {
                elem.addEventListener(key.substring(2).toLowerCase(), props[key]);
            }
        }
    }
    // add children
    appendChild(elem, children);
    return elem;
};
exports.transpileJSX = transpileJSX;
exports.jsx = exports.transpileJSX;
