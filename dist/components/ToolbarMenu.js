"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarMenu = ToolbarMenu;
exports.ToolbarMenuItem = ToolbarMenuItem;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ToolbarMenu
 *
 * A menu style button to use within the Toolbar.
 */
function ToolbarMenu(_ref) {
  var title = _ref.title,
      label = _ref.label,
      children = _ref.children;

  return _react2.default.createElement(
    "a",
    {
      className: "toolbar-menu toolbar-button",
      onMouseDown: preventDefault,
      title: title },
    label,
    _react2.default.createElement(
      "svg",
      { width: "14", height: "8" },
      _react2.default.createElement("path", { fill: "#666", d: "M 5 1.5 L 14 1.5 L 9.5 7 z" })
    ),
    _react2.default.createElement(
      "ul",
      { className: "toolbar-menu-items" },
      children
    )
  );
} /**
   *  Copyright (c) Facebook, Inc.
   *  All rights reserved.
   *
   *  This source code is licensed under the license found in the
   *  LICENSE file in the root directory of this source tree.
   */

ToolbarMenu.propTypes = {
  title: _react.PropTypes.string,
  label: _react.PropTypes.string
};

function ToolbarMenuItem(_ref2) {
  var onSelect = _ref2.onSelect,
      title = _ref2.title,
      label = _ref2.label;

  return _react2.default.createElement(
    "li",
    {
      onMouseOver: function onMouseOver(e) {
        e.target.className = 'hover';
      },
      onMouseOut: function onMouseOut(e) {
        e.target.className = null;
      },
      onMouseDown: preventDefault,
      onMouseUp: onSelect,
      title: title },
    label
  );
}

ToolbarMenuItem.propTypes = {
  onSelect: _react.PropTypes.func,
  title: _react.PropTypes.string,
  label: _react.PropTypes.string
};

function preventDefault(e) {
  e.preventDefault();
}