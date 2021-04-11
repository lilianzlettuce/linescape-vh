'use strict';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            layers: [
                {
                    number: 1,
                    d: '',
                },
            ],
            numLayers: 1,
            saved: [

            ],
            numSaved: 0,
        }
        this.addLayer = this.addLayer.bind(this)
    }

    render() {
        return (
            <div>
                <svg className="" id="canvas" width="700" height="500">
                    {this.state.layers.map(layer => (
                        <Path key={"path" + layer.number} number={layer.number} color="black" strokeWidth="2" d="" />
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

    addLayer() {
        numPaths++
        const newLayer = {
            number: this.state.numLayers + 1,
            d: ''
        }
        this.setState(state => ({
            layers: state.layers.concat(newLayer),
            numLayers: state.numLayers + 1
        }))
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
        this.reset = this.reset.bind(this)
    }

    render() {
        return (
            <div id={"layer" + this.props.number} className="layer">
                <div className="btn-box btn-box-top">
                    <button className="reset" id={"resetBtn" + this.props.number} onClick={this.reset}>Reset</button>
                    <button className="save" id={"saveLayerBtn" + this.props.number}>Save</button>
                    <button className="hide" id={"hideBtn" + this.props.number}>Hide</button>
                    <button className="remove" id={"removeBtn" + this.props.number}>Remove</button>
                </div>
                <div className="btn-box">
                    <h2>Layer #{this.props.number}</h2>
                    <div className="btn-box2">
                        <button className="animate" id={"animateBtn" + this.props.number}>Animate</button>
                        <button className="genNew" id={"genNewBtn" + this.props.number}>New Scribble</button>
                    </div>
                </div>
    
                <input type="text" id="color-input1" placeholder="Color" />
                <input type="number" id="strokeWidth-input1" placeholder="Stroke width" />
                <input type="number" id="animation-input1" placeholder="Animation Speed" />
                <input type="number" id="size-input1" placeholder="Scribble size" />
    
                <div className="length-container">
                    <div className="length-heading">
                        <h3>Stroke Length</h3>
                        <button className="copyLength" id="copyLengthBtn"><i className="far fa-copy"></i></button>
                    </div>
                    <input readOnly type = "number" id="strokeLength" className="length-input" />
                </div>
    
                <div className="coords-container">
                    <div className="coords-heading">
                        <h3>SVG Coordinates</h3>
                        <button className="copyCoords" id="copyCoordsBtn"><i className="fas fa-copy"></i></button>
                    </div>
                    <textarea id="text-display1" name="paragraph_text" cols="50" rows="10" ></textarea>
                </div>
            </div>
        )
    }

    reset() {
        /**firstClick = true
        numLines = 0
        down = false
        text.value = ''
        lengthText.value = '' 
        path.setAttribute('d', '')

        updateVals()
        if (color != '') {
            path.style.stroke = color
        }
        if (width != '') {
            path.style.strokeWidth = width
        } **/
        document.querySelector('#path1').setAttribute('d', '')
    }

}






const domContainer = document.querySelector('#main')
ReactDOM.render(<Main />, domContainer)