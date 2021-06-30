"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIZES = exports.COLORS = void 0;
var react_native_1 = require("react-native");
var _a = react_native_1.Dimensions.get('window'), width = _a.width, height = _a.height;
exports.COLORS = {
    primary: '#FC6D3F',
    secondary: '#CDCDD2',
    transparent: 'transparent',
};
exports.SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,
    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,
    // app dimensions
    width: width,
    height: height,
};
var appTheme = { COLORS: exports.COLORS, SIZES: exports.SIZES };
exports.default = appTheme;
