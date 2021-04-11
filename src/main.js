'use strict';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: 1,
            layers: [
                {
                    number: 1,
                    path: '',
                }
            ],
            paths: [
                {
                    number: '',
                    d: ''
                }
            ],
            currentPath: '',
            numLayers: 1,
            saved: [
                {
                    name: 'Among Us',
                    path: 'M 180 233 Q 206 145, 294 178 Q 335 194, 368 232 Q 389 253, 429 286 Q 449 303, 418 332 Q 404 345, 350 302 Q 320 332, 299 331 Q 311 330, 323 325 Q 344 346, 359 360 Q 371 374, 348 394 Q 336 406, 283 372 Q 237 334, 211 298 Q 266 271, 280 237 Q 264 217, 222 226 Q 194 235, 195 273 Q 195 292, 211 298 Q 198 291, 194 274 Q 178 256, 181 231 Q 190 183, 234 171 Q 266 168, 296 180 Q 350 147, 391 189 Q 401 204, 398 218 Q 398 235, 387 248 Q 342 209, 320 191 Q 299 181, 291 176 Q 215 177, 245 76 Q 209 141, 206 139 Q 194 145, 179 79 Q 174 152, 177 155 Q 176 172, 130 115 Q 154 181, 167 198 Q 185 177, 206 161 Q 221 150, 242 155 Q 225 176, 167 198',
                    length: '2260.47705078125',
                    strokeWidth: '2',
                    color: 'orange',
                    number: 99
                },
                {
                    name: '',
                    path: '',
                    length: '',
                    strokeWidth: '',
                    color: '',
                    number: 98
                },
                {
                    name: '',
                    path: '',
                    length: '',
                    strokeWidth: '',
                    color: '',
                    number: 97
                },
                {
                    name: '',
                    path: '',
                    length: '',
                    strokeWidth: '',
                    color: '',
                    number: 96
                }
            ],
            numSaved: 0,
        }
        this.addLayer = this.addLayer.bind(this)
        this.canvasClicked = this.canvasClicked.bind(this)
        this.toLayers = this.toLayers.bind(this)
        this.toSaved = this.toSaved.bind(this)
        this.deleteLayer = this.deleteLayer.bind(this)
    }

    render() {
        return (
            <div>
                <svg className="canvas" id="canvas1" onClick={this.canvasClicked} width="700" height="500">
                    {this.state.layers.map(layer => (
                        <Path key={"path" + layer.number} number={layer.number} color="black" strokeWidth="2" d={layer.path} />
                    ))}
                </svg>
                <div id="section">
                    <div id="filler">
                        <div id="heading">
                            <button id="addLayerBtn" onClick={this.addLayer}>Add Layer</button>
                            <button id="selectBtn">Select Newest</button>
                            <button className="animate" id="animateBtn">Animate</button>
                        </div>
                    </div>
                    <div className="right-column">
                        <div id="col-header">
                            <div id="tab-container">
                                <button onClick={this.toLayers} className="tab clicked" id="layers-tab">Layers</button>
                                <button onClick={this.toSaved} className="tab" id="saved-tab">Saved</button>
                            </div>
                        </div>
                        <LayerList tab={this.state.tab} layers={this.state.layers} saved={this.state.saved} />
                    </div>
                </div>
            </div>
        )
    }

    toLayers() {
        this.setState( {tab: 1} )
    }

    toSaved() {
        this.setState( {tab: 2} )
    }

    canvasClicked() {
        this.setState({ currentPath: document.querySelector(`#path${this.state.numLayers}`).getAttribute('d') })
    }

    addLayer() {
        const oldLayer = {
            number: this.state.numLayers,
            path: document.querySelector(`#path${this.state.numLayers}`).getAttribute('d'),
        }
        const newLayer = {
            number: this.state.numLayers + 1,
            path: '',
        }

        this.state.layers.pop()
        this.setState(state => ({
            layers: state.layers.concat(oldLayer).concat(newLayer),
            numLayers: state.numLayers + 1,
            currentPath: ''
        }))
        console.log(this.state.layers)
    }

    deleteLayer(num) {
        let half1 = this.state.layers.slice(0, num - 1)
        let half2 = this.state.layers.slice(num)
        this.setState(state => ({
            layers: half1.concat(half2),
            numLayers: state.numLayers + 1,
            currentPath: ''
        }))
    }

}


function Path(props) {
    return (
        <path id={"path" + props.number} className="draw" stroke={props.color} strokeLinecap="round" strokeWidth={props.strokeWidth} fill="transparent" d={props.d} />
    )
}

function LayerList(props) {
    if (props.tab === 1) {
        return (
            <div className="layers-container">
                {props.layers.map(layer => (
                    <Layer key={"layer" + layer.number} number={layer.number} deleteLayer={props.deleteLayer} />
                ))}
            </div>
        )
    } else {
        return (
            <div className="layers-container">
                {props.saved.map(thing => (
                    <Saved key={"saved" + thing.number} number={thing.number} name={thing.name} path={thing.path} strokeWidth={thing.strokeWidth} length={thing.length} color={thing.color} />
                ))}
            </div>
        )
    }
}

class Layer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hideClicked: false,
        }
        this.saveLayer = this.saveLayer.bind(this)
        this.hideLayer = this.hideLayer.bind(this)
        this.copyCoords = this.copyCoords.bind(this)
        this.copyLength = this.copyLength.bind(this)
    }

    render() {
        return (
            <div id={"layer" + this.props.number} className="layer">
                <div className="btn-box btn-box-top">
                    <button className="reset" id={"resetBtn" + this.props.number} >Reset</button>
                    <button className="save" id={"saveLayerBtn" + this.props.number} onClick={this.saveLayer}>Save</button>
                    <button className="hide" id={"hideBtn" + this.props.number} onClick={this.hideLayer}>Hide</button>
                    <button className="remove" id={"removeBtn" + this.props.number}>Remove</button>
                </div>
                <div className="btn-box">
                    <input className="h2-input" defaultValue={"Layer #" + this.props.number} type="text" />
                    <div className="btn-box2">
                        <button className="genNew" id={"genNewBtn" + this.props.number}>New Scribble</button>
                    </div>
                </div>
    
                <input type="text" id={"color-input" + this.props.number} placeholder="Color" />
                <input type="number" id={"strokeWidth-input" + this.props.number} placeholder="Stroke width" />
                <input type="number" id={"animation-input" + this.props.number} placeholder="Animation Speed" />
                <input type="number" id={"size-input" + this.props.number} placeholder="Scribble size" />
    
                <div className="length-container">
                    <div className="length-heading">
                        <h3>Stroke Length</h3>
                        <button className="copyLength" onClick={this.copyLength} id={"copyLengthBtn" + this.props.number}><i className="far fa-copy"></i></button>
                    </div>
                    <input readOnly type = "number" id={"strokeLength" + this.props.number} className="length-input" />
                </div>
    
                <div className="coords-container">
                    <div className="coords-heading">
                        <h3>SVG Coordinates</h3>
                        <button className="copyCoords" onClick={this.copyCoords} id={"copyCoordsBtn" + this.props.number}><i className="fas fa-copy"></i></button>
                    </div>
                    <textarea id={"text-display" + this.props.number} name="paragraph_text" cols="50" rows="10" ></textarea>
                </div>
            </div>
        )
    }

    saveLayer() {

    }

    hideLayer() {
        if (!this.state.hideClicked) {
            document.querySelector('#path' + this.props.number).style.opacity = '0%'
            document.querySelector("#hideBtn" + this.props.number).style.backgroundColor = 'rgb(92, 92, 92)'
            document.querySelector("#hideBtn" + this.props.number).style.color = 'white'
            this.setState({ hideClicked: true })
        } else {
            document.querySelector('#path' + this.props.number).style.opacity = '100%'
            document.querySelector("#hideBtn" + this.props.number).style.backgroundColor = 'white'
            document.querySelector("#hideBtn" + this.props.number).style.color = 'rgb(92, 92, 92)'
            this.setState({ hideClicked: false })
        }
    }

    //copy path coords
    copyCoords() {
        document.querySelector("#text-display" + this.props.number).select()
        document.execCommand("copy")
    }

    //copy path length
    copyLength() {
        document.querySelector("#strokeLength" + this.props.number).select()
        document.execCommand("copy")
    }

}

class Saved extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
        this.copyCoords = this.copyCoords.bind(this)
        this.copyLength = this.copyLength.bind(this)
        this.animate = this.animate.bind(this)
    }

    render() {
        return (
            <div id={"saved" + this.props.number} className="layer saveLayer">
                <div className="btn-box">
                    <h2 className="">{this.props.name}</h2>
                    <div className="btn-box2">
                        <button className="animate" id={"ani" + this.props.number} onClick={this.animate}>Animate</button>
                    </div>
                </div>
    
                <div className="length-container">
                    <div className="length-heading">
                        <h3>Stroke Length</h3>
                        <button className="copyLength" onClick={this.copyLength} id={"clBtn" + this.props.number}><i className="far fa-copy"></i></button>
                        <h3 className="h3-margin-left">SVG Coordinates</h3>
                        <button className="copyCoords" onClick={this.copyCoords} id={"ccBtn" + this.props.number}><i className="fas fa-copy"></i></button>
                    </div>
                </div>
    
                <div className="coords-container">
                    <div className="coords-heading">
                        <input readOnly value={this.props.length} className="small-input" id={"CL" + this.props.number} />
                        <input readOnly value={this.props.path} className="small-input" id={"CC" + this.props.number} />
                    </div>
                </div>

                <svg className="canvas" id="canvas2" width="600" height="600">
                    <path id={"p" + this.props.number} className="draw" stroke={this.props.color} strokeLinecap="round" strokeWidth={this.props.strokeWidth} fill="transparent" d={this.props.path} />
                </svg>
            </div>
        )
    }

    animate() {

    }

    //copy path coords
    copyCoords() {
        document.querySelector("#CC" + this.props.number).select()
        document.execCommand("copy")
    }

    //copy path length
    copyLength() {
        document.querySelector("#CL" + this.props.number).select()
        document.execCommand("copy")
    }

}








const domContainer = document.querySelector('#main')
ReactDOM.render(<Main />, domContainer)