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
                    React.createElement(Path, { id: "path1", color: "black", strokeWidth: "2", d: "" })
                ),
                React.createElement("div", { id: "layers-container" })
            );
        }
    }]);

    return Main;
}(React.Component);

function Path(props) {
    return React.createElement(
        "div",
        null,
        React.createElement("path", { id: props.id, stroke: props.color, strokeLinecap: "round", strokeWidth: props.strokeWidth, fill: "transparent", d: props.d })
    );
}

function Layer(props) {
    return React.createElement(
        "div",
        { id: "layer1", className: "layer" },
        React.createElement(
            "button",
            { id: "removeLayerBtn" },
            "Remove Layer"
        ),
        React.createElement(
            "button",
            { id: "hideLayerBtn" },
            "Hide Layer"
        ),
        React.createElement(
            "button",
            { id: "animateBtn" },
            "Animate"
        ),
        React.createElement(
            "button",
            { id: "copyCoordsBtn" },
            "Copy"
        ),
        React.createElement(
            "button",
            { id: "copyLengthBtn" },
            "Copy"
        ),
        React.createElement(
            "button",
            { id: "restartBtn" },
            "Restart"
        ),
        React.createElement("textarea", { id: "text-display1", name: "paragraph_text", cols: "50", rows: "10", placeholder: "SVG coordinates" }),
        React.createElement("input", { type: "text", id: "color-input1", placeholder: "Color" }),
        React.createElement("input", { type: "number", id: "strokeWidth-input1", placeholder: "Stroke width" }),
        React.createElement("input", { type: "number", id: "animation-input1", placeholder: "Animation Speed" }),
        React.createElement("input", { type: "number", id: "strokeLength", placeholder: "Stroke Length" })
    );
}

function Scribble(props) {
    return React.createElement(
        "div",
        { id: "scribble1", className: "layer" },
        React.createElement(
            "button",
            { id: "removeLayerBtn2" },
            "Remove Scribble"
        ),
        React.createElement(
            "button",
            { id: "hideLayerBtn2" },
            "Hide Scribble"
        ),
        React.createElement(
            "button",
            { id: "animateBtn2" },
            "Animate"
        ),
        React.createElement(
            "button",
            { id: "copyCoordsBtn2" },
            "Copy"
        ),
        React.createElement(
            "button",
            { id: "genNew2" },
            "Generate New Scribble"
        ),
        React.createElement("textarea", { id: "text-display1", name: "paragraph_text2", cols: "50", rows: "10", placeholder: "SVG coordinates" }),
        React.createElement("input", { type: "text", id: "color-input2", placeholder: "Color" }),
        React.createElement("input", { type: "number", id: "strokeWidth-input2", placeholder: "Stroke width" }),
        React.createElement("input", { type: "number", id: "animation-input2", placeholder: "Animation Speed" }),
        React.createElement("input", { type: "number", id: "size-input2", placeholder: "Size" }),
        React.createElement("input", { type: "number", id: "strokeLength2", placeholder: "Stroke Length" })
    );
}

var domContainer = document.querySelector('#main');
ReactDOM.render(React.createElement(Main, null), domContainer);