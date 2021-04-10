'use strict';

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

function Canvas(props) {
    return (
        <div>
            <svg className="" id={props.id} width="600" height="400">
                <path stroke={props.color} strokeLinecap="round" strokeWidth={props.strokeWidth} fill="transparent" d="" />
            </svg>
        </div>
    )
}

const domContainer = document.querySelector('#main')
ReactDOM.render(<Main />, domContainer)