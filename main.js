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
                name: 'among Us orange!',
                path: 'M 180 233 Q 206 145, 294 178 Q 335 194, 368 232 Q 389 253, 429 286 Q 449 303, 418 332 Q 404 345, 350 302 Q 320 332, 299 331 Q 311 330, 323 325 Q 344 346, 359 360 Q 371 374, 348 394 Q 336 406, 283 372 Q 237 334, 211 298 Q 266 271, 280 237 Q 264 217, 222 226 Q 194 235, 195 273 Q 195 292, 211 298 Q 198 291, 194 274 Q 178 256, 181 231 Q 190 183, 234 171 Q 266 168, 296 180 Q 350 147, 391 189 Q 401 204, 398 218 Q 398 235, 387 248 Q 342 209, 320 191 Q 299 181, 291 176 Q 215 177, 245 76 Q 209 141, 206 139 Q 194 145, 179 79 Q 174 152, 177 155 Q 176 172, 130 115 Q 154 181, 167 198 Q 185 177, 206 161 Q 221 150, 242 155 Q 225 176, 167 198',
                length: '2260.47705078125',
                strokeWidth: '2',
                color: 'orange',
                number: 99,
                isScribble: false,
                animTime: 5
            }, {
                name: 'Large Scribble',
                path: 'M 450 300 Q 455 305, 445 300 T 450 300 T 455 305 T 450 300 T 449.75 300.25 T 449.5 299.5 T 449.25 299.25 T 451 301 T 451.25 301.25 T 448.5 301.5 T 448.25 301.75 T 448 302 T 447.75 302.25 T 452.5 297.5 T 447.25 302.75 T 453 303 T 453.25 303.25 T 453.5 296.5 T 453.75 303.75 T 446 296 T 454.25 295.75 T 454.5 295.5 T 445.25 295.25 T 455 305 T 455.25 305.25 T 455.5 305.5 T 444.25 305.75 T 456 306 T 443.75 306.25 T 443.5 293.5 T 456.75 293.25 T 457 293 T 457.25 292.75 T 442.5 307.5 T 442.25 307.75 T 442 292 T 441.75 308.25 T 441.5 291.5 T 441.25 308.75 T 459 309 T 459.25 290.75 T 459.5 309.5 T 459.75 309.75 T 440 310 T 439.75 289.75 T 460.5 310.5 T 460.75 310.75 T 439 311 T 461.25 288.75 T 461.5 311.5 T 438.25 311.75 T 462 312 T 437.75 312.25 T 462.5 287.5 T 462.75 287.25 T 463 287 T 463.25 313.25 T 463.5 286.5 T 463.75 313.75 T 436 286 T 464.25 314.25 T 435.5 285.5 T 435.25 285.25 T 465 285 T 434.75 315.25 T 434.5 284.5 T 465.75 284.25 T 434 284 T 466.25 316.25 T 433.5 316.5 T 466.75 316.75 T 467 317 T 432.75 317.25 T 432.5 317.5 T 432.25 317.75 T 468 282 T 431.75 281.75 T 468.5 318.5 T 431.25 281.25 T 469 319 T 469.25 280.75 T 430.5 280.5 T 469.75 280.25 T 430 320 T 429.75 320.25 T 429.5 320.5 T 470.75 320.75 T 429 321 T 471.25 278.75 T 471.5 321.5 T 428.25 278.25 T 472 322 T 427.75 277.75 T 427.5 322.5 T 472.75 277.25 T 427 323 T 473.25 276.75 T 473.5 276.5 T 473.75 323.75 T 426 276 T 425.75 324.25 T 425.5 275.5 T 425.25 275.25 T 425 325 T 475.25 274.75 T 424.5 274.5 T 475.75 325.75 T 424 326 T 476.25 326.25 T 476.5 273.5 T 423.25 273.25 T 477 273 T 422.75 272.75 T 477.5 272.5 T 477.75 272.25 T 422 272 T 478.25 328.25 T 478.5 271.5 T 478.75 328.75 T 421 329 T 479.25 270.75 T 420.5 270.5 T 479.75 270.25 T 480 270 T 419.75 330.25 T 480.5 269.5 T 419.25 330.75 T 481 331 T 418.75 331.25 T 418.5 331.5 T 418.25 331.75 T 482 332 T 482.25 332.25 T 417.5 332.5 T 482.75 332.75 T 417 267 T 416.75 266.75 T 483.5 333.5 T 416.25 266.25 T 416 334 T 415.75 265.75 T 415.5 265.5 T 415.25 334.75 T 415 335 T 485.25 264.75 T 414.5 264.5 T 485.75 264.25 T 414 336 T 413.75 336.25 T 486.5 336.5 T 413.25 336.75 T 413 263 T 487.25 337.25 T 487.5 262.5 ',
                length: '30393.787109375',
                strokeWidth: '2',
                color: 'black',
                number: 98,
                isScribble: true,
                animTime: 3
            }, {
                name: 'Wolf',
                path: 'M 506 470 Q 413 343, 475 290  Q 532 253, 482 218    Q 471 208, 498 211  Q 515 212, 524 199  Q 525 190, 546 192  Q 551 192, 566 163    Q 575 168, 576 179  Q 576 199, 574 199  Q 587 195, 588 186  Q 589 182, 594 190  Q 595 194, 591 201      Q 581 213, 566 233  Q 549 254, 564 296  Q 590 350, 551 426  Q 543 448, 568 500    Q 485 264, 306 500              Q 303 438, 331 401  Q 354 361, 349 342  Q 341 320, 313 330    Q 294 341, 269 345  Q 228 347, 208 324      Q 272 431, 344 333  Q 367 308, 388 302  Q 418 295, 433 325  Q 440 351, 398 406  Q 374 446, 362 451 Q 364 477, 382 491 ',
                length: '1989.8394775390625',
                strokeWidth: '1',
                color: 'black',
                number: 97,
                isScribble: false,
                animTime: 5
            }, {
                name: '',
                path: '',
                length: '',
                strokeWidth: '',
                color: '',
                number: 96,
                isScribble: false,
                animTime: 5
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
                React.createElement(LoginPage, null),
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

function LoginPage(props) {
    return React.createElement(
        'div',
        { id: 'login-page' },
        React.createElement('div', { id: 'circle' }),
        React.createElement(
            'svg',
            { className: 'canvas', id: 'canvas3', width: '600', height: '600' },
            React.createElement('path', { id: 'line', className: 'draw', stroke: 'white', strokeLinecap: 'round', strokeWidth: '20', fill: 'transparent', d: 'M 768 368 Q 627 237, 554 329          Q 507 393, 454 431    Q 355 492, 340 325  Q 335 213, 295 189  Q 260 173, 219 240        Q 193 288, 149 327    Q 101 362, 61 347      Q 22 323, 6 349 ' })
        ),
        React.createElement(
            'div',
            { id: 'login-box' },
            React.createElement(
                'h1',
                { id: 'login-title' },
                'Sign in to LineScape'
            ),
            React.createElement('input', { type: 'email', placeholder: 'Email', className: 'login-input', id: 'email' }),
            React.createElement('input', { type: 'password', placeholder: 'Password', className: 'login-input', id: 'password' }),
            React.createElement(
                'button',
                { id: 'loginBtn', className: 'button' },
                '\u2192'
            ),
            React.createElement(
                'p',
                { id: 'create-acct' },
                'Create an account'
            )
        )
    );
}

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
                return React.createElement(Saved, { key: "saved" + thing.number, number: thing.number, name: thing.name, path: thing.path, strokeWidth: thing.strokeWidth, length: thing.length, color: thing.color, isScribble: thing.isScribble, animTime: thing.animTime });
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
                        { className: 'hide', id: "hideBtn" + this.props.number, onClick: this.hideLayer },
                        'Hide'
                    ),
                    React.createElement(
                        'button',
                        { className: 'save', id: "saveLayerBtn" + this.props.number },
                        'Save'
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
        _this3.deanimate = _this3.deanimate.bind(_this3);
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
                        { className: 'longer-h2' },
                        this.props.name
                    ),
                    React.createElement(
                        'div',
                        { className: 'btn-box2' },
                        React.createElement(
                            'button',
                            { className: 'show', id: "ani" + this.props.number, onClick: this.animate },
                            'Show'
                        ),
                        React.createElement(
                            'button',
                            { className: 'genNew', id: "ani" + this.props.number, onClick: this.deanimate },
                            'Hide'
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
                    React.createElement('path', { id: "p" + this.props.number, className: 'draw saved-path', stroke: this.props.color, strokeLinecap: 'round', strokeWidth: this.props.strokeWidth, fill: 'transparent', d: this.props.path })
                )
            );
        }
    }, {
        key: 'animate',
        value: function animate() {
            var _this4 = this;

            var path = document.querySelector('#p' + this.props.number);
            path.style.opacity = '100%';
            if (!this.props.isScribble) {
                path.style.strokeDasharray = this.props.length;
                path.style.strokeDashoffset = this.props.length;
                path.style.transition = '';
                setTimeout(function () {
                    path.style.transition = 'stroke-dashoffset ' + _this4.props.animTime + 's linear';
                    path.style.strokeDashoffset = 0;
                }, 100);
                setTimeout(function () {
                    path.style.transition = '';
                }, this.props.animTime * 1000);
            } else {
                path.style.strokeDasharray = this.props.length / 13;
                path.style.strokeDashoffset = this.props.length;
                path.style.animation = 'scribble ' + this.props.animTime * 6 + 's linear infinite alternate';
            }
        }
    }, {
        key: 'deanimate',
        value: function deanimate() {
            var _this5 = this;

            var path = document.querySelector('#p' + this.props.number);
            if (!this.props.isScribble) {
                path.style.transition = '';
                setTimeout(function () {
                    path.style.transition = 'stroke-dashoffset ' + _this5.props.animTime + 's linear';
                    path.style.strokeDashoffset = _this5.props.length;
                }, 100);
                setTimeout(function () {
                    path.style.transition = '';
                }, this.props.animTime * 1000);
            } else {
                path.style.opacity = '0%';
            }
        }

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