!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@material-ui/core"),require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["@material-ui/core","classnames","noop","object-assign","prop-types","react","react-dom"],t):"object"==typeof exports?exports.ReactMuiChipGroup=t(require("@material-ui/core"),require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom")):e.ReactMuiChipGroup=t(e["@material-ui/core"],e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react,e["react-dom"])}(this,function(e,t,r,n,o,a,u){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=n(o);t.default=a.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,l,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(7),d=n(f),v=r(8),b=(n(v),r(6)),h=n(b),m=r(3),y=n(m),g=r(4),_=n(g),x=r(5),j=(n(x),r(2)),C=(l=c=function(e){function t(e){a(this,t);var r=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._onDelete=function(e,t){var n=r.state.value,o=n.indexOf(e);o>-1&&n.splice(o,1),r.change(n)},r._onClick=function(e){var t=r.props.onClick;t({target:{value:e}})},r.state={value:e.value},r}return i(t,e),p(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.value;t!==this.props.value&&this.change(t)}},{key:"change",value:function(e){var t=this.props.onChange;this.setState({value:e},function(){t({target:{value:e}})})}},{key:"render",value:function(){var e=this,t=this.props,r=t.className,n=t.value,a=t.editable,u=(t.onClick,t.onChange,o(t,["className","value","editable","onClick","onChange"])),i=a?this._onDelete.bind(this,item):null;return d.default.createElement("section",s({className:(0,y.default)("react-mui-chip-group",r)},u),n.length>0&&n.map(function(t,r){var n=(t.value,t.label),a=o(t,["value","label"]);return d.default.createElement(j.Chip,s({className:"react-mui-chip-group-item",key:r,label:n,onDelete:i,onClick:e._onClick.bind(e,t)},a))}))}}]),t}(f.Component),c.propTypes={className:h.default.string,value:h.default.array,onChange:h.default.func,onClick:h.default.func,editable:h.default.bool},c.defaultProps={value:[],onChange:_.default,onClick:_.default,editable:!1},l);t.default=C},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=a},function(e,t){e.exports=u}])});
//# sourceMappingURL=react-mui-chip-group.js.map