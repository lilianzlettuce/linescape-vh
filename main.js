'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main(props) {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));
    }

    _createClass(Main, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "section" },
                React.createElement(
                    "svg",
                    { className: "", id: "canvas", width: "700", height: "500" },
                    React.createElement(Path, { number: "1", color: "black", strokeWidth: "2", d: "" }),
                    React.createElement(Path, { number: "2", color: "black", strokeWidth: "1", d: "" })
                ),
                React.createElement(
                    "div",
                    { id: "right-column" },
                    React.createElement(
                        "div",
                        { id: "add-btns-container" },
                        React.createElement(
                            "button",
                            { id: "addLayerBtn" },
                            "Add Layer"
                        ),
                        React.createElement(
                            "button",
                            { id: "addScribbleBtn" },
                            "Add Scribble"
                        )
                    ),
                    React.createElement(
                        "div",
                        { id: "layers-container" },
                        React.createElement(Layer, { number: "1" }),
                        React.createElement(Scribble, { number: "1" })
                    )
                )
            );
        }
    }]);

    return Main;
}(React.Component);

function Path(props) {
    return React.createElement("path", { id: "path" + props.number, className: "draw", stroke: props.color, strokeLinecap: "round", strokeWidth: props.strokeWidth, fill: "transparent", d: props.d });
}

function Layer(props) {
    return React.createElement(
        "div",
        { id: "layer" + props.number, className: "layer" },
        React.createElement(
            "button",
            { id: "restartBtn" },
            "Reset"
        ),
        React.createElement(
            "button",
            { id: "hideLayerBtn" },
            "Hide Layer"
        ),
        React.createElement(
            "button",
            { className: "remove", id: "removeLayerBtn" },
            "Remove Layer"
        ),
        React.createElement(
            "button",
            { id: "animateBtn" },
            "Animate"
        ),
        React.createElement(
            "div",
            { className: "coords-container" },
            React.createElement(
                "div",
                { className: "coords-btn-container" },
                React.createElement(
                    "h3",
                    null,
                    "SVG Coordinates"
                ),
                React.createElement(
                    "button",
                    { className: "copyCoords", id: "copyCoordsBtn" },
                    React.createElement("i", { className: "fas fa-copy" })
                )
            ),
            React.createElement("textarea", { readOnly: true, id: "text-display1", name: "paragraph_text", cols: "50", rows: "10" })
        ),
        React.createElement("input", { type: "text", id: "color-input1", placeholder: "Color" }),
        React.createElement("input", { type: "number", id: "strokeWidth-input1", placeholder: "Stroke width" }),
        React.createElement("input", { type: "number", id: "animation-input1", placeholder: "Animation Speed" }),
        React.createElement(
            "button",
            { className: "copyLength", id: "copyLengthBtn" },
            React.createElement("i", { className: "far fa-copy" })
        ),
        React.createElement("input", { readOnly: true, type: "number", id: "strokeLength", placeholder: "Stroke Length" })
    );
}

function Scribble(props) {
    return React.createElement(
        "div",
        { id: "scribble" + props.number, className: "layer" },
        React.createElement(
            "button",
            { id: "genNew2" },
            "Generate New Scribble"
        ),
        React.createElement(
            "button",
            { id: "hideLayerBtn2" },
            "Hide Scribble"
        ),
        React.createElement(
            "button",
            { className: "remove", id: "removeLayerBtn2" },
            "Remove Scribble"
        ),
        React.createElement(
            "button",
            { id: "animateBtn2" },
            "Animate"
        ),
        React.createElement(
            "div",
            { className: "coords-container" },
            React.createElement(
                "div",
                { className: "coords-btn-container" },
                React.createElement(
                    "h3",
                    null,
                    "SVG Coordinates"
                ),
                React.createElement(
                    "button",
                    { className: "copyCoords", id: "copyCoordsBtn2" },
                    React.createElement("i", { className: "fas fa-copy" })
                )
            ),
            React.createElement("textarea", { readOnly: true, id: "text-display1", name: "paragraph_text2", cols: "50", rows: "10" })
        ),
        React.createElement("input", { type: "text", id: "color-input2", placeholder: "Color" }),
        React.createElement("input", { type: "number", id: "strokeWidth-input2", placeholder: "Stroke width" }),
        React.createElement("input", { type: "number", id: "animation-input2", placeholder: "Animation Speed" }),
        React.createElement("input", { type: "number", id: "size-input2", placeholder: "Size" }),
        React.createElement(
            "button",
            { className: "copyLength", id: "copyLengthBtn" },
            React.createElement("i", { className: "far fa-copy" })
        ),
        React.createElement("input", { readOnly: true, type: "number", id: "strokeLength2", placeholder: "Stroke Length" })
    );
}

var domContainer = document.querySelector('#main');
ReactDOM.render(React.createElement(Main, null), domContainer);