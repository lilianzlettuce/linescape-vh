'use strict';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            layers: [{
                number: 1,
                path: '',
            }],
            paths: [{
                number: '',
                d: ''
            }],
            currentPath: '',
            numLayers: 1,
            saved: [],
            numSaved: 0,
        }
        this.addLayer = this.addLayer.bind(this)
        this.canvasClicked = this.canvasClicked.bind(this)
    }

    render() {
        return (
            <div>
                <svg className="" id="canvas" onClick={this.canvasClicked} width="700" height="500">
                    {this.state.paths.map(path => (
                        <Path key={"path" + path.number} number={path.number} color="black" strokeWidth="2" d={path.d} />
                    ))}
                </svg>
                <div id="section">
                    <div id="filler"></div>
                    <div id="right-column">
                        <div id="col-header">
                            <button id="addLayerBtn" onClick={this.addLayer}>Add Layer</button>
                            <div>
                                <button className="tab clicked" id="layers-tab">Layers</button>
                                <button className="tab" id="saved-tab">Saved</button>
                            </div>
                        </div>
                        <List layers={this.state.layers} />
                    </div>
                </div>
            </div>
        )
    }

    canvasClicked() {
        this.setState({ currentPath: document.querySelector('#path').getAttribute('d') })
    }

    addLayer() {
        const oldLayer = {
            number: this.state.numLayers,
            path: document.querySelector('#path').getAttribute('d'),
        }
        const newLayer = {
            number: this.state.numLayers + 1,
            path: '',
        }

        const oldPath = {
            number: this.state.numLayers,
            d: document.querySelector('#path').getAttribute('d'),
        }
        const newPath = {
            number: '',
            d: '',
        }

        this.state.layers.pop()
        this.state.paths.pop()
        this.setState(state => ({
            layers: state.layers.concat(oldLayer).concat(newLayer),
            paths: state.paths.concat(oldPath).concat(newPath),
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

function List(props) {
    return (
        <div id="layers-container">
            {props.layers.map(layer => (
                <Layer key={"layer" + layer.number} number={layer.number} />
            ))}
        </div>
    )
}

class Layer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hideClicked: false,
        }
        this.saveLayer = this.saveLayer.bind(this)
        this.hideLayer = this.hideLayer.bind(this)
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
                        <button className="animate" id={"animateBtn" + this.props.number}>Animate</button>
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
                        <button className="copyLength" id={"copyLengthBtn" + this.props.number}><i className="far fa-copy"></i></button>
                    </div>
                    <input readOnly type = "number" id={"strokeLength" + this.props.number} className="length-input" />
                </div>
    
                <div className="coords-container">
                    <div className="coords-heading">
                        <h3>SVG Coordinates</h3>
                        <button className="copyCoords" id={"copyCoordsBtn" + this.props.number}><i className="fas fa-copy"></i></button>
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
            document.querySelector('#path').style.opacity = '0%'
            document.querySelector("#hideBtn" + this.props.number).style.backgroundColor = 'rgb(92, 92, 92)'
            document.querySelector("#hideBtn" + this.props.number).style.color = 'white'
            this.setState({ hideClicked: true })
        } else {
            document.querySelector('#path').style.opacity = '100%'
            document.querySelector("#hideBtn" + this.props.number).style.backgroundColor = 'white'
            document.querySelector("#hideBtn" + this.props.number).style.color = 'rgb(92, 92, 92)'
            this.setState({ hideClicked: false })
        }
    }

}






const domContainer = document.querySelector('#main')
ReactDOM.render(<Main />, domContainer)