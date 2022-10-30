var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Formulario = function (_React$Component) {
  _inherits(Formulario, _React$Component);

  function Formulario(props) {
    _classCallCheck(this, Formulario);

    var _this = _possibleConstructorReturn(this, (Formulario.__proto__ || Object.getPrototypeOf(Formulario)).call(this, props));

    _this.state = {

      Efectivo: true,
      Tarjeta: false,
      numberoDeProductos: 1
    };

    _this.handleInputChange = _this.handleInputChange.bind(_this);
    return _this;
  }

  _createClass(Formulario, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var target = event.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var name = target.name;

      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        null,
        React.createElement("img", { src: "./img/ropa.webp", alt: "foto_ropa", "class": "bg-danger bg-gradient d-inline-blok rounded-circle mb-3 ", width: "100", height: "100" }),
        React.createElement(
          "a",
          { href: "#" },
          React.createElement(
            "h3",
            { "class": "text-capitalize" },
            "Subir foto"
          )
        ),
        React.createElement(
          "label",
          null,
          "Nombre:",
          React.createElement("input", {
            type: "text", value: this.state.value }),
          React.createElement("br", null),
          "Efectivo:",
          React.createElement("input", {
            name: "Efectivo ",
            type: "checkbox",
            checked: this.state.isGoing,
            onChange: this.handleInputChange }),
          React.createElement("p", null),
          "Tarjeta:",
          React.createElement("input", {
            name: "Tarjeta ",
            type: "checkbox",
            checked: this.state.isGoing,
            onChange: this.handleInputChange })
        ),
        React.createElement("br", null),
        React.createElement(
          "label",
          null,
          "Numbero de productos:",
          React.createElement("p", null),
          React.createElement("input", {
            name: "numberoDeProductos",
            type: "number",
            value: this.state.numberOfGuests,
            onChange: this.handleInputChange })
        ),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(
          "button",
          null,
          "Subir producto"
        )
      );
    }
  }]);

  return Formulario;
}(React.Component);

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Formulario, null));