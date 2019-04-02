import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './Quiz'
import PagedMenu from './PagedMenu';
import PlayButtons from './PlayButtons';
import QuizData from './QuizData';

class App extends React.Component {

    state = {round: -1};

    onRoundChange = (round) => {
        console.log(round);
        this.setState({round: round});
    }

    render() {
        const title = <div onClick={e => {this.setState({round: 1})}}>네글자 게임</div>;
        const game = <div><PagedMenu onChange={this.onRoundChange} /><Quiz /><PlayButtons /></div>;

        const body = this.state.round < 0 ? title : game;
        return (
            <div className="ui container">
                {body}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);