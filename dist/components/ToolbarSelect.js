"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   *  Copyright (c) Facebook, Inc.
                                                                                                                                                                                                                                                                   *  All rights reserved.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   *  This source code is licensed under the license found in the
                                                                                                                                                                                                                                                                   *  LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                   */

exports.ToolbarSelect = ToolbarSelect;
exports.ToolbarSelectOption = ToolbarSelectOption;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ToolbarSelect
 *
 * A select-option style button to use within the Toolbar.
 *
 * Note that, like React's <select>, this component is stateless and expects you
 * to re-render with a new selected={} condition on the child options.
 */
function ToolbarSelect(_ref) {
  var onSelect = _ref.onSelect,
      title = _ref.title,
      children = _ref.children;

  var selectedChild = void 0;
  var optionChildren = _react2.default.Children.map(children, function (child, i) {
    if (!selectedChild || child.props.selected) {
      selectedChild = child;
    }
    var onChildSelect = child.props.onSelect || onSelect && onSelect.bind(null, child.props.value, i);
    return _react2.default.createElement(ToolbarSelectOption, _extends({}, child.props, { onSelect: onChildSelect }));
  });

  return _react2.default.createElement(
    "a",
    {
      className: "toolbar-select toolbar-button",
      onMouseDown: preventDefault,
      title: title },
    selectedChild.props.label,
    _react2.default.createElement(
      "svg",
      { width: "13", height: "10" },
      _react2.default.createElement("path", { fill: "#666", d: "M 5 5 L 13 5 L 9 1 z" }),
      _react2.default.createElement("path", { fill: "#666", d: "M 5 6 L 13 6 L 9 10 z" })
    ),
    _react2.default.createElement(
      "ul",
      { className: "toolbar-select-options" },
      optionChildren
    )
  );
}

ToolbarSelect.propTypes = {
  onSelect: _react.PropTypes.func,
  title: _react.PropTypes.string
};

function ToolbarSelectOption(_ref2) {
  var onSelect = _ref2.onSelect,
      label = _ref2.label,
      selected = _ref2.selected;

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
      onMouseUp: onSelect },
    label,
    selected && _react2.default.createElement(
      "svg",
      { width: "13", height: "13" },
      _react2.default.createElement("polygon", { points: "4.851,10.462 0,5.611 2.314,3.297 4.851,5.835 10.686,0 13,2.314 4.851,10.462"
      })
    )
  );
}

ToolbarSelectOption.propTypes = {
  onSelect: _react.PropTypes.func,
  selected: _react.PropTypes.bool,
  label: _react.PropTypes.string,
  value: _react.PropTypes.any
};

function preventDefault(e) {
  e.preventDefault();
}