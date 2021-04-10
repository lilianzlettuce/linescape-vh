'use strict';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            numLayers: 1,
            numScribbles: 1,
        }
    }

    render() {
        return (
            <div>
                <svg className="" id="canvas" width="700" height="500">
                    <Path s="" number="1" color="black" strokeWidth="2" d="" />
                    <Path s="s-" number="1" color="black" strokeWidth="1" d="" />
                </svg>
                <div id="section">
                    <div id="filler"></div>
                    <div id="right-column">
                        <div id="add-btns-container">
                            <button id="addLayerBtn">Add Layer</button>
                            <button id="addScribbleBtn">Add Scribble</button>
                        </div>
                        <List items={this.state.items} numL={this.state.numLayers} numS={this.state.numScribbles} />
                    </div>
                </div>
            </div>
        )
    }
}

function Path(props) {
    return (
        <path id={props.s + "path" + props.number} className="draw" stroke={props.color} strokeLinecap="round" strokeWidth={props.strokeWidth} fill="transparent" d={props.d} />
    )
}

function List(props) {
    return (
        <div id="layers-container">
            <Layer number={props.numL} />
            <Scribble number={props.numS} />
        </div>
    )
}

function Layer(props) {
    return (
        <div id={"layer" + props.number} className="layer">
            <button className="reset" id={"resetBtn" + props.number}>Reset</button>
            <button className="animate" id={"animateBtn" + props.number}>Animate</button>
            <button className="hide" id={"hideLayerBtn" + props.number}>Hide Layer</button>
            <button className="remove" id={"removeLayerBtn" + props.number}>Remove Layer</button>
            <h2>Layer #{props.number}</h2>
            <input type="text" id="color-input1" placeholder="Color" />
            <input type="number" id="strokeWidth-input1" placeholder="Stroke width" />
            <input type="number" id="animation-input1" placeholder="Animation Speed" />
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
                <textarea readOnly id="text-display1" name="paragraph_text" cols="50" rows="10" ></textarea>
            </div>
        </div>
    )
}

function Scribble(props) {
    return (
        <div id={"scribble" + props.number} className="layer">
            <button id="genNew2">Generate New Scribble</button>
            <button id="hideLayerBtn2">Hide Scribble</button>
            <button className="remove" id="removeLayerBtn2">Remove Scribble</button>
            <button id="animateBtn2">Animate</button>
            <div className="length-container">
                <div className="length-heading">
                    <h3>Stroke Length</h3>
                    <button className="copyLength" id="copyLengthBtn2"><i className="far fa-copy"></i></button>
                </div>
                <input readOnly type = "number" id="strokeLength2" className="length-input" />
            </div>
            <div className="coords-container">
                <div className="coords-heading">
                    <h3>SVG Coordinates</h3>
                    <button className="copyCoords" id="copyCoordsBtn2"><i className="fas fa-copy"></i></button>
                </div>
                <textarea readOnly id="text-display2" name="paragraph_text" cols="50" rows="10" ></textarea>
            </div>
            <input type="text" id="color-input2" placeholder="Color" />
            <input type="number" id="strokeWidth-input2" placeholder="Stroke width" />
            <input type="number" id="animation-input2" placeholder="Animation Speed" />
            <input type="number" id="size-input2" placeholder="Size" />
        </div>
    )
}








const domContainer = document.querySelector('#main')
ReactDOM.render(<Main />, domContainer)