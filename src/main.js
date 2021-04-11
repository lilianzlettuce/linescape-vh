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
                    name: 'among us',
                    path: '',
                    length: '',
                }
            ],
            numSaved: 0,
        }
        this.addLayer = this.addLayer.bind(this)
        this.canvasClicked = this.canvasClicked.bind(this)
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
                                <button className="tab clicked" id="layers-tab">Layers</button>
                                <button className="tab" id="saved-tab">Saved</button>
                            </div>
                        </div>
                        <LayerList layers={this.state.layers} />
                    </div>
                </div>
            </div>
        )
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

}


function Path(props) {
    return (
        <path id={"path" + props.number} className="draw" stroke={props.color} strokeLinecap="round" strokeWidth={props.strokeWidth} fill="transparent" d={props.d} />
    )
}

function LayerList(props) {
    if (1 === 1) {
        return (
            <div className="layers-container">
                {props.layers.map(layer => (
                    <Layer key={"layer" + layer.number} number={layer.number} />
                ))}
            </div>
        )
    } else {
        return (
            <div className="layers-container">
                {props.layers.map(layer => (
                    <Layer key={"layer" + layer.number} number={layer.number} />
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
                    <h2>Layer #{this.props.number}</h2>
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
            <div id={"saved" + this.props.number} className="layer">
                <div className="btn-box">
                    <h2>{this.props.name}</h2>
                    <div className="btn-box2">
                        <button className="animate" id={"ani" + this.props.number} onClick={this.animate}>Animate</button>
                    </div>
                </div>
    
                <div className="length-container">
                    <div className="length-heading">
                        <h3>Stroke Length</h3>
                        <button className="copyLength" onClick={this.copyLength} id={"copyLengthBtn" + this.props.number}><i className="far fa-copy"></i></button>
                    </div>
                </div>
    
                <div className="coords-container">
                    <div className="coords-heading">
                        <h3>SVG Coordinates</h3>
                        <button className="copyCoords" onClick={this.copyCoords} id={"copyCoordsBtn" + this.props.number}><i className="fas fa-copy"></i></button>
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
        document.querySelector("#text-display" + this.props.number).select()
        document.execCommand("copy")
    }

    //copy path length
    copyLength() {
        document.querySelector("#strokeLength" + this.props.number).select()
        document.execCommand("copy")
    }

}








const domContainer = document.querySelector('#main')
ReactDOM.render(<Main />, domContainer)