import React from 'react';
import ReactDOM from 'react-dom';
// import Quiz from './Quiz'
import PagedMenu from './PagedMenu';
import PlayButtons from './PlayButtons';
import QuizData from './QuizData';
import Quizlet from './Quizlet';
import './index.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {round: -1};
    }

    onRoundChange = (round) => {
        console.log(round);
        this.setState({round: round});
    }

    renderHeader() {
        return (
            <header className="masthead mb-auto">
                <div className="inner">
                {this.state.round < 0 ? '' : <PagedMenu onChange={this.onRoundChange} />}
                </div>
            </header>
        );
    }

    renderFooter() {
        return (
            <footer className="mastfoot mt-auto">
                <div className="inner">
                </div>
            </footer>
        );
    }

    renderTitle() {
        return (<div>
                <h1 className="cover-heading">네글자 게임</h1>
                <p />
                <p className="lead">
                <a href="" onClick={e => {e.preventDefault();this.setState({round: 1})}} className="btn btn-lg btn-secondary">시작하기</a>
                </p>
            </div>
        );
    }

    getQuizlet(round) {
        if (round < 0)
            return [];
        const base = (round-1) * 5;
        return QuizData.slice(base, base+5);
    }

    renderQuizlet(round) {
        const quizlet = <Quizlet round={round} quizlet={this.getQuizlet(round)}/>;
        this.quizlet = quizlet;
        return quizlet;
    }

    render() {
        const body = this.state.round < 0 ? this.renderTitle() : this.renderQuizlet(this.state.round);
        return (
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
               {this.renderHeader()}

                <main role="main" className="inner cover">
                    {body}
                </main>

                {this.renderFooter()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);