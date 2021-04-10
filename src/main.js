'use strict';

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="section">
                <svg className="" id="canvas" width="700" height="500">
                    <Path number="1" color="black" strokeWidth="2" d="" />
                    <Path number="2" color="black" strokeWidth="1" d="" />
                </svg>
                <div id="right-column">
                    <div id="add-btns-container">
                        <button id="addLayerBtn">Add Layer</button>
                        <button id="addScribbleBtn">Add Scribble</button>
                    </div>
                    <div id="layers-container">
                        <Layer number="1" />
                        <Scribble number="1" />
                    </div>
                </div>
            </div>
        )
    }
}

function Path(props) {
    return (
        <path id={"path" + props.number} className="draw" stroke={props.color} strokeLinecap="round" strokeWidth={props.strokeWidth} fill="transparent" d={props.d} />
    )
}

function Layer(props) {
    return (
        <div id={"layer" + props.number} className="layer">
            <button id="restartBtn">Reset</button>
            <button id="hideLayerBtn">Hide Layer</button>
            <button className="remove" id="removeLayerBtn">Remove Layer</button>
            <button id="animateBtn">Animate</button>
            <div className="coords-container">
                <div className="coords-btn-container">
                    <h3>SVG Coordinates</h3>
                    <button className="copyCoords" id="copyCoordsBtn"><i className="fas fa-copy"></i></button>
                </div>
                <textarea readOnly id="text-display1" name="paragraph_text" cols="50" rows="10" ></textarea>
            </div>
            <input type="text" id="color-input1" placeholder="Color" />
            <input type="number" id="strokeWidth-input1" placeholder="Stroke width" />
            <input type="number" id="animation-input1" placeholder="Animation Speed" />
            <button className="copyLength" id="copyLengthBtn"><i className="far fa-copy"></i></button>
            <input readOnly type = "number" id="strokeLength" placeholder="Stroke Length"/>
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
            <div className="coords-container" >
                <div className="coords-btn-container">
                    <h3>SVG Coordinates</h3>
                    <button className="copyCoords" id="copyCoordsBtn2"><i className="fas fa-copy"></i></button>
                </div>
                <textarea readOnly id="text-display1" name="paragraph_text2" cols="50" rows="10"></textarea>
            </div>
            <input type="text" id="color-input2" placeholder="Color" />
            <input type="number" id="strokeWidth-input2" placeholder="Stroke width" />
            <input type="number" id="animation-input2" placeholder="Animation Speed" />
            <input type="number" id="size-input2" placeholder="Size" />
            <button className="copyLength" id="copyLengthBtn"><i className="far fa-copy"></i></button>
            <input readOnly type = "number" id="strokeLength2" placeholder="Stroke Length"/>
        </div>
    )
}

const domContainer = document.querySelector('#main')
ReactDOM.render(<Main />, domContainer)