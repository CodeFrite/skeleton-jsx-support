/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/** @jsx transpileJSX */
var appendChild = function appendChild(parent, child) {
  parent.appendChild(child);
};
var transpileJSX = function transpileJSX(type, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }
  console.log(children);
  var elem = document.createElement(type);
  // add props
  if (props) {
    for (var key in props.keys) {
      elem.setAttribute(key, props[key]);
    }
  }
  // add children
  if (children) {
    children.forEach(function (child) {
      if (typeof child == "string") {
        appendChild(elem, document.createTextNode(child));
      } else if (Array.isArray(child)) {}
    });
  }
  return elem;
};
var title = transpileJSX("h1", null, "Hello, World!");
var link = transpileJSX("a", {
  href: "https://www.google.com"
}, title);
document.body.appendChild(link);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSxJQUFNQSxXQUFXLEdBQUMsU0FBWkEsV0FBV0EsQ0FBRUMsTUFBVyxFQUFDQyxLQUFVLEVBQUk7RUFDM0NELE1BQU0sQ0FBQ0QsV0FBVyxDQUFDRSxLQUFLLENBQUM7QUFDM0IsQ0FBQztBQUVELElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxJQUFXLEVBQUNDLEtBQUssRUFBbUM7RUFBQSxTQUFBQyxJQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQUEvQkMsUUFBMkIsT0FBQUMsS0FBQSxDQUFBSixJQUFBLE9BQUFBLElBQUEsV0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtJQUEzQkYsUUFBMkIsQ0FBQUUsSUFBQSxRQUFBSixTQUFBLENBQUFJLElBQUE7RUFBQTtFQUNwRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLFFBQVEsQ0FBQztFQUVyQixJQUFJSyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDWixJQUFJLENBQUM7RUFDdkM7RUFDQSxJQUFJQyxLQUFLLEVBQUM7SUFDUixLQUFLLElBQUlZLEdBQUcsSUFBSVosS0FBSyxDQUFDYSxJQUFJLEVBQUM7TUFDekJKLElBQUksQ0FBQ0ssWUFBWSxDQUFDRixHQUFHLEVBQUNaLEtBQUssQ0FBQ1ksR0FBRyxDQUFDLENBQUM7OztFQUlyQztFQUNBLElBQUlSLFFBQVEsRUFBQztJQUNYQSxRQUFRLENBQUNXLE9BQU8sQ0FBQyxVQUFBbEIsS0FBSyxFQUFHO01BQ3ZCLElBQUksT0FBT0EsS0FBTSxJQUFJLFFBQVEsRUFBQztRQUM1QkYsV0FBVyxDQUFDYyxJQUFJLEVBQUNDLFFBQVEsQ0FBQ00sY0FBYyxDQUFDbkIsS0FBSyxDQUFDLENBQUM7T0FDakQsTUFBTSxJQUFHUSxLQUFLLENBQUNZLE9BQU8sQ0FBQ3BCLEtBQUssQ0FBQyxFQUFDO0lBR2pDLENBQUMsQ0FBQzs7RUFHSixPQUFPWSxJQUFJO0FBQ2IsQ0FBQztBQUVELElBQUlTLEtBQUssR0FBQ3BCLFlBQUEsYUFBSSxlQUFhLENBQUs7QUFDaEMsSUFBSXFCLElBQUksR0FBQ3JCLFlBQUE7RUFBR3NCLElBQUksRUFBQztBQUF3QixHQUFFRixLQUFLLENBQUs7QUFDckRSLFFBQVEsQ0FBQ1csSUFBSSxDQUFDMUIsV0FBVyxDQUFDd0IsSUFBSSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWJlbC8uL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCB0cmFuc3BpbGVKU1ggKi9cbmNvbnN0IGFwcGVuZENoaWxkPShwYXJlbnQ6Tm9kZSxjaGlsZDpOb2RlKSA9PiB7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG59XG5cbmNvbnN0IHRyYW5zcGlsZUpTWCA9ICh0eXBlOnN0cmluZyxwcm9wcywuLi5jaGlsZHJlbjpBcnJheTxIVE1MRWxlbWVudD4pID0+IHtcbiAgY29uc29sZS5sb2coY2hpbGRyZW4pO1xuICBcbiAgbGV0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAvLyBhZGQgcHJvcHNcbiAgaWYgKHByb3BzKXtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvcHMua2V5cyl7XG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZShrZXkscHJvcHNba2V5XSk7XG4gICAgfVxuICB9XG5cbiAgLy8gYWRkIGNoaWxkcmVuXG4gIGlmIChjaGlsZHJlbil7XG4gICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBpZiAodHlwZW9mKGNoaWxkKSA9PSBcInN0cmluZ1wiKXtcbiAgICAgICAgYXBwZW5kQ2hpbGQoZWxlbSxkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCkpO1xuICAgICAgfSBlbHNlIGlmKEFycmF5LmlzQXJyYXkoY2hpbGQpKXtcbiAgICAgICAgXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbTtcbn1cblxubGV0IHRpdGxlPTxoMT5IZWxsbywgV29ybGQhPC9oMT47XG5sZXQgbGluaz08YSBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbVwiPnt0aXRsZX08L2E+O1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTsiXSwibmFtZXMiOlsiYXBwZW5kQ2hpbGQiLCJwYXJlbnQiLCJjaGlsZCIsInRyYW5zcGlsZUpTWCIsInR5cGUiLCJwcm9wcyIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjaGlsZHJlbiIsIkFycmF5IiwiX2tleSIsImNvbnNvbGUiLCJsb2ciLCJlbGVtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwia2V5Iiwia2V5cyIsInNldEF0dHJpYnV0ZSIsImZvckVhY2giLCJjcmVhdGVUZXh0Tm9kZSIsImlzQXJyYXkiLCJ0aXRsZSIsImxpbmsiLCJocmVmIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=