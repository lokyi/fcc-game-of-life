class GameOfLife extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            width: 20,
            height: 15,
            board: generateBoard(20, 15)
        };
    }

    render () {
        return (
            <div>
                <Grid {...this.state}/>
            </div>
        );
    }
}

class Grid extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        console.log(this.props)
        return (
            <div className="grid" style={{width: this.props.width * 21 + 1}}>
                {this.props.board.map((row, i) => {
                    return (
                        <div className="row" key={'row-' + i}>
                            {row.map((cell, j) => <div className={"cell" + (cell ? " live" : "")} key={'cell-' + i + '-' + j}></div>)}
                        </div>
                    );
                })}
            </div>
        );
    }
}

ReactDOM.render(
        <GameOfLife />,
    document.getElementById('app')
);

function generateBoard(width, height) {
    var board = [];
    for (let i = 0; i < height; i++) {
        board.push([]);
        for (let j = 0; j < width; j++) {
            board[i].push(Math.random() > 0.5);
        }
    }
    return board;
}