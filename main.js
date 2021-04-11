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
            tab: 1,
            layers: [{
                number: 1,
                path: ''
            }],
            paths: [{
                number: '',
                d: ''
            }],
            currentPath: '',
            numLayers: 1,
            saved: [{
                name: 'Among Us',
                path: 'M 180 233 Q 206 145, 294 178 Q 335 194, 368 232 Q 389 253, 429 286 Q 449 303, 418 332 Q 404 345, 350 302 Q 320 332, 299 331 Q 311 330, 323 325 Q 344 346, 359 360 Q 371 374, 348 394 Q 336 406, 283 372 Q 237 334, 211 298 Q 266 271, 280 237 Q 264 217, 222 226 Q 194 235, 195 273 Q 195 292, 211 298 Q 198 291, 194 274 Q 178 256, 181 231 Q 190 183, 234 171 Q 266 168, 296 180 Q 350 147, 391 189 Q 401 204, 398 218 Q 398 235, 387 248 Q 342 209, 320 191 Q 299 181, 291 176 Q 215 177, 245 76 Q 209 141, 206 139 Q 194 145, 179 79 Q 174 152, 177 155 Q 176 172, 130 115 Q 154 181, 167 198 Q 185 177, 206 161 Q 221 150, 242 155 Q 225 176, 167 198',
                length: '2260.47705078125',
                strokeWidth: '2',
                color: 'orange',
                number: 99
            }, {
                name: '',
                path: '',
                length: '',
                strokeWidth: '',
                color: '',
                number: 98
            }, {
                name: '',
                path: '',
                length: '',
                strokeWidth: '',
                color: '',
                number: 97
            }, {
                name: '',
                path: '',
                length: '',
                strokeWidth: '',
                color: '',
                number: 96
            }],
            numSaved: 0
        };
        _this.addLayer = _this.addLayer.bind(_this);
        _this.canvasClicked = _this.canvasClicked.bind(_this);
        _this.toLayers = _this.toLayers.bind(_this);
        _this.toSaved = _this.toSaved.bind(_this);
        _this.deleteLayer = _this.deleteLayer.bind(_this);
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
                    { className: 'canvas', id: 'canvas1', onClick: this.canvasClicked, width: '700', height: '500' },
                    this.state.layers.map(function (layer) {
                        return React.createElement(Path, { key: "path" + layer.number, number: layer.number, color: 'black', strokeWidth: '2', d: layer.path });
                    })
                ),
                React.createElement(
                    'div',
                    { id: 'section' },
                    React.createElement(
                        'div',
                        { id: 'filler' },
                        React.createElement(
                            'div',
                            { id: 'heading' },
                            React.createElement(
                                'button',
                                { id: 'addLayerBtn', onClick: this.addLayer },
                                'Add Layer'
                            ),
                            React.createElement(
                                'button',
                                { id: 'selectBtn' },
                                'Select Newest'
                            ),
                            React.createElement(
                                'button',
                                { className: 'animate', id: 'animateBtn' },
                                'Animate'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'right-column' },
                        React.createElement(
                            'div',
                            { id: 'col-header' },
                            React.createElement(
                                'div',
                                { id: 'tab-container' },
                                React.createElement(
                                    'button',
                                    { onClick: this.toLayers, className: 'tab clicked', id: 'layers-tab' },
                                    'Layers'
                                ),
                                React.createElement(
                                    'button',
                                    { onClick: this.toSaved, className: 'tab', id: 'saved-tab' },
                                    'Saved'
                                )
                            )
                        ),
                        React.createElement(LayerList, { tab: this.state.tab, layers: this.state.layers, saved: this.state.saved })
                    )
                )
            );
        }
    }, {
        key: 'toLayers',
        value: function toLayers() {
            this.setState({ tab: 1 });
        }
    }, {
        key: 'toSaved',
        value: function toSaved() {
            this.setState({ tab: 2 });
        }
    }, {
        key: 'canvasClicked',
        value: function canvasClicked() {
            this.setState({ currentPath: document.querySelector('#path' + this.state.numLayers).getAttribute('d') });
        }
    }, {
        key: 'addLayer',
        value: function addLayer() {
            var oldLayer = {
                number: this.state.numLayers,
                path: document.querySelector('#path' + this.state.numLayers).getAttribute('d')
            };
            var newLayer = {
                number: this.state.numLayers + 1,
                path: ''
            };

            this.state.layers.pop();
            this.setState(function (state) {
                return {
                    layers: state.layers.concat(oldLayer).concat(newLayer),
                    numLayers: state.numLayers + 1,
                    currentPath: ''
                };
            });
            console.log(this.state.layers);
        }
    }, {
        key: 'deleteLayer',
        value: function deleteLayer(num) {
            var half1 = this.state.layers.slice(0, num - 1);
            var half2 = this.state.layers.slice(num);
            this.setState(function (state) {
                return {
                    layers: half1.concat(half2),
                    numLayers: state.numLayers + 1,
                    currentPath: ''
                };
            });
        }
    }]);

    return Main;
}(React.Component);

function Path(props) {
    return React.createElement('path', { id: "path" + props.number, className: 'draw', stroke: props.color, strokeLinecap: 'round', strokeWidth: props.strokeWidth, fill: 'transparent', d: props.d });
}

function LayerList(props) {
    if (props.tab === 1) {
        return React.createElement(
            'div',
            { className: 'layers-container' },
            props.layers.map(function (layer) {
                return React.createElement(Layer, { key: "layer" + layer.number, number: layer.number, deleteLayer: props.deleteLayer });
            })
        );
    } else {
        return React.createElement(
            'div',
            { className: 'layers-container' },
            props.saved.map(function (thing) {
                return React.createElement(Saved, { key: "saved" + thing.number, number: thing.number, name: thing.name, path: thing.path, strokeWidth: thing.strokeWidth, length: thing.length, color: thing.color });
            })
        );
    }
}

var Layer = function (_React$Component2) {
    _inherits(Layer, _React$Component2);

    function Layer(props) {
        _classCallCheck(this, Layer);

        var _this2 = _possibleConstructorReturn(this, (Layer.__proto__ || Object.getPrototypeOf(Layer)).call(this, props));

        _this2.state = {
            hideClicked: false
        };
        _this2.saveLayer = _this2.saveLayer.bind(_this2);
        _this2.hideLayer = _this2.hideLayer.bind(_this2);
        _this2.copyCoords = _this2.copyCoords.bind(_this2);
        _this2.copyLength = _this2.copyLength.bind(_this2);
        return _this2;
    }

    _createClass(Layer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: "layer" + this.props.number, className: 'layer' },
                React.createElement(
                    'div',
                    { className: 'btn-box btn-box-top' },
                    React.createElement(
                        'button',
                        { className: 'reset', id: "resetBtn" + this.props.number },
                        'Reset'
                    ),
                    React.createElement(
                        'button',
                        { className: 'save', id: "saveLayerBtn" + this.props.number, onClick: this.saveLayer },
                        'Save'
                    ),
                    React.createElement(
                        'button',
                        { className: 'hide', id: "hideBtn" + this.props.number, onClick: this.hideLayer },
                        'Hide'
                    ),
                    React.createElement(
                        'button',
                        { className: 'remove', id: "removeBtn" + this.props.number },
                        'Remove'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'btn-box' },
                    React.createElement('input', { className: 'h2-input', defaultValue: "Layer #" + this.props.number, type: 'text' }),
                    React.createElement(
                        'div',
                        { className: 'btn-box2' },
                        React.createElement(
                            'button',
                            { className: 'genNew', id: "genNewBtn" + this.props.number },
                            'New Scribble'
                        )
                    )
                ),
                React.createElement('input', { type: 'text', id: "color-input" + this.props.number, placeholder: 'Color' }),
                React.createElement('input', { type: 'number', id: "strokeWidth-input" + this.props.number, placeholder: 'Stroke width' }),
                React.createElement('input', { type: 'number', id: "animation-input" + this.props.number, placeholder: 'Animation Speed' }),
                React.createElement('input', { type: 'number', id: "size-input" + this.props.number, placeholder: 'Scribble size' }),
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
                            { className: 'copyLength', onClick: this.copyLength, id: "copyLengthBtn" + this.props.number },
                            React.createElement('i', { className: 'far fa-copy' })
                        )
                    ),
                    React.createElement('input', { readOnly: true, type: 'number', id: "strokeLength" + this.props.number, className: 'length-input' })
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
                            { className: 'copyCoords', onClick: this.copyCoords, id: "copyCoordsBtn" + this.props.number },
                            React.createElement('i', { className: 'fas fa-copy' })
                        )
                    ),
                    React.createElement('textarea', { id: "text-display" + this.props.number, name: 'paragraph_text', cols: '50', rows: '10' })
                )
            );
        }
    }, {
        key: 'saveLayer',
        value: function saveLayer() {}
    }, {
        key: 'hideLayer',
        value: function hideLayer() {
            if (!this.state.hideClicked) {
                document.querySelector('#path' + this.props.number).style.opacity = '0%';
                document.querySelector("#hideBtn" + this.props.number).style.backgroundColor = 'rgb(92, 92, 92)';
                document.querySelector("#hideBtn" + this.props.number).style.color = 'white';
                this.setState({ hideClicked: true });
            } else {
                document.querySelector('#path' + this.props.number).style.opacity = '100%';
                document.querySelector("#hideBtn" + this.props.number).style.backgroundColor = 'white';
                document.querySelector("#hideBtn" + this.props.number).style.color = 'rgb(92, 92, 92)';
                this.setState({ hideClicked: false });
            }
        }

        //copy path coords

    }, {
        key: 'copyCoords',
        value: function copyCoords() {
            document.querySelector("#text-display" + this.props.number).select();
            document.execCommand("copy");
        }

        //copy path length

    }, {
        key: 'copyLength',
        value: function copyLength() {
            document.querySelector("#strokeLength" + this.props.number).select();
            document.execCommand("copy");
        }
    }]);

    return Layer;
}(React.Component);

var Saved = function (_React$Component3) {
    _inherits(Saved, _React$Component3);

    function Saved(props) {
        _classCallCheck(this, Saved);

        var _this3 = _possibleConstructorReturn(this, (Saved.__proto__ || Object.getPrototypeOf(Saved)).call(this, props));

        _this3.state = {};
        _this3.copyCoords = _this3.copyCoords.bind(_this3);
        _this3.copyLength = _this3.copyLength.bind(_this3);
        _this3.animate = _this3.animate.bind(_this3);
        return _this3;
    }

    _createClass(Saved, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: "saved" + this.props.number, className: 'layer saveLayer' },
                React.createElement(
                    'div',
                    { className: 'btn-box' },
                    React.createElement(
                        'h2',
                        { className: '' },
                        this.props.name
                    ),
                    React.createElement(
                        'div',
                        { className: 'btn-box2' },
                        React.createElement(
                            'button',
                            { className: 'animate', id: "ani" + this.props.number, onClick: this.animate },
                            'Animate'
                        )
                    )
                ),
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
                            { className: 'copyLength', onClick: this.copyLength, id: "clBtn" + this.props.number },
                            React.createElement('i', { className: 'far fa-copy' })
                        ),
                        React.createElement(
                            'h3',
                            { className: 'h3-margin-left' },
                            'SVG Coordinates'
                        ),
                        React.createElement(
                            'button',
                            { className: 'copyCoords', onClick: this.copyCoords, id: "ccBtn" + this.props.number },
                            React.createElement('i', { className: 'fas fa-copy' })
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'coords-container' },
                    React.createElement(
                        'div',
                        { className: 'coords-heading' },
                        React.createElement('input', { readOnly: true, value: this.props.length, className: 'small-input', id: "CL" + this.props.number }),
                        React.createElement('input', { readOnly: true, value: this.props.path, className: 'small-input', id: "CC" + this.props.number })
                    )
                ),
                React.createElement(
                    'svg',
                    { className: 'canvas', id: 'canvas2', width: '600', height: '600' },
                    React.createElement('path', { id: "p" + this.props.number, className: 'draw', stroke: this.props.color, strokeLinecap: 'round', strokeWidth: this.props.strokeWidth, fill: 'transparent', d: this.props.path })
                )
            );
        }
    }, {
        key: 'animate',
        value: function animate() {}

        //copy path coords

    }, {
        key: 'copyCoords',
        value: function copyCoords() {
            document.querySelector("#CC" + this.props.number).select();
            document.execCommand("copy");
        }

        //copy path length

    }, {
        key: 'copyLength',
        value: function copyLength() {
            document.querySelector("#CL" + this.props.number).select();
            document.execCommand("copy");
        }
    }]);

    return Saved;
}(React.Component);

var domContainer = document.querySelector('#main');
ReactDOM.render(React.createElement(Main, null), domContainer);