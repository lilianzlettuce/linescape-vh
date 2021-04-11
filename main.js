'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main(props) {
        _classCallCheck(this, Main);

        var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

        _this.state = {
            layers: [{
                number: 1,
                d: ''
            }],
            numLayers: 1,
            saved: [],
            numSaved: 0
        };
        _this.addLayer = _this.addLayer.bind(_this);
        return _this;
    }

    _createClass(Main, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'svg',
                    { className: '', id: 'canvas', width: '700', height: '500' },
                    this.state.layers.map(function (layer) {
                        return React.createElement(Path, { key: "path" + layer.number, number: layer.number, color: 'black', strokeWidth: '2', d: '' });
                    })
                ),
                React.createElement(
                    'div',
                    { id: 'section' },
                    React.createElement('div', { id: 'filler' }),
                    React.createElement(
                        'div',
                        { id: 'right-column' },
                        React.createElement(
                            'div',
                            { id: 'col-header' },
                            React.createElement(
                                'button',
                                { id: 'addLayerBtn', onClick: this.addLayer },
                                'Add Layer'
                            ),
                            React.createElement(
                                'div',
                                null,
                                React.createElement(
                                    'button',
                                    { className: 'tab clicked', id: 'layers-tab' },
                                    'Layers'
                                ),
                                React.createElement(
                                    'button',
                                    { className: 'tab', id: 'saved-tab' },
                                    'Saved'
                                )
                            )
                        ),
                        React.createElement(List, { layers: this.state.layers })
                    )
                )
            );
        }
    }, {
        key: 'addLayer',
        value: function addLayer() {
            var newLayer = {
                number: this.state.numLayers + 1,
                d: ''
            };
            this.setState(function (state) {
                return {
                    layers: state.layers.concat(newLayer),
                    numLayers: state.numLayers + 1
                };
            });
            console.log(this.state.numLayers);
            console.log(this.state.layers);
        }
    }]);

    return Main;
}(React.Component);

function Path(props) {
    return React.createElement('path', { id: "path" + props.number, className: 'draw', stroke: props.color, strokeLinecap: 'round', strokeWidth: props.strokeWidth, fill: 'transparent', d: props.d });
}

function List(props) {
    return React.createElement(
        'div',
        { id: 'layers-container' },
        props.layers.map(function (layer) {
            return React.createElement(Layer, { key: "layer" + layer.number, number: layer.number });
        })
    );
}

function Layer(props) {
    return React.createElement(
        'div',
        { id: "layer" + props.number, className: 'layer' },
        React.createElement(
            'div',
            { className: 'btn-box btn-box-top' },
            React.createElement(
                'button',
                { className: 'reset', id: "resetBtn" + props.number },
                'Reset'
            ),
            React.createElement(
                'button',
                { className: 'save', id: "saveLayerBtn" + props.number },
                'Save'
            ),
            React.createElement(
                'button',
                { className: 'hide', id: "hideBtn" + props.number },
                'Hide'
            ),
            React.createElement(
                'button',
                { className: 'remove', id: "removeBtn" + props.number },
                'Remove'
            )
        ),
        React.createElement(
            'div',
            { className: 'btn-box' },
            React.createElement(
                'h2',
                null,
                'Layer #',
                props.number
            ),
            React.createElement(
                'div',
                { className: 'btn-box2' },
                React.createElement(
                    'button',
                    { className: 'animate', id: "animateBtn" + props.number },
                    'Animate'
                ),
                React.createElement(
                    'button',
                    { className: 'genNew', id: "genNewBtn" + props.number },
                    'New Scribble'
                )
            )
        ),
        React.createElement('input', { type: 'text', id: 'color-input1', placeholder: 'Color' }),
        React.createElement('input', { type: 'number', id: 'strokeWidth-input1', placeholder: 'Stroke width' }),
        React.createElement('input', { type: 'number', id: 'animation-input1', placeholder: 'Animation Speed' }),
        React.createElement('input', { type: 'number', id: 'size-input1', placeholder: 'Scribble size' }),
        React.createElement(
            'div',
            { className: 'length-container' },
            React.createElement(
                'div',
                { className: 'length-heading' },
                React.createElement(
                    'h3',
                    null,
                    'Stroke Length'
                ),
                React.createElement(
                    'button',
                    { className: 'copyLength', id: 'copyLengthBtn' },
                    React.createElement('i', { className: 'far fa-copy' })
                )
            ),
            React.createElement('input', { readOnly: true, type: 'number', id: 'strokeLength', className: 'length-input' })
        ),
        React.createElement(
            'div',
            { className: 'coords-container' },
            React.createElement(
                'div',
                { className: 'coords-heading' },
                React.createElement(
                    'h3',
                    null,
                    'SVG Coordinates'
                ),
                React.createElement(
                    'button',
                    { className: 'copyCoords', id: 'copyCoordsBtn' },
                    React.createElement('i', { className: 'fas fa-copy' })
                )
            ),
            React.createElement('textarea', { id: 'text-display1', name: 'paragraph_text', cols: '50', rows: '10' })
        )
    );
}

var domContainer = document.querySelector('#main');
ReactDOM.render(React.createElement(Main, null), domContainer);