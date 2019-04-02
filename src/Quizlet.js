import React from 'react';
import Quiz from './Quiz';

class Quizlet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {current: -1, hidden: true};
    }

    onClickNext = (e) => {
        e.preventDefault();
        if (this.state.current < 4)
            this.setState({current: this.state.current + 1, hidden: true});
    }

    onClickPrev = (e) => {
        e.preventDefault();
        if (this.state.current > 0)
            this.setState({current: this.state.current - 1, hidden: true});
    }

    renderNavbar() {
        return (
            <nav className="nav nav-masthead justify-content-center">
                <a className="nav-link" href="" onClick={this.onClickPrev}>&lt;</a>
                <a className="nav-link" href="" onClick={this.onClickNext}>&gt;</a>
            </nav>
        );
    }

    render() {
        if (this.state.current < 0) {
            return <h1 className="cover-heading" onClick={e => this.setState({current: 0})}> {this.props.round} 라운드 시작! </h1>
        } else {
            return (
                <div onKeyDown={this.onKeyPress}>
                    <Quiz content={this.props.quizlet[this.state.current]} hidden={this.state.hidden} />
                    <p/>
                    <h2 > {this.state.current + 1} / 5 </h2>
                    <p/>
                    {this.renderNavbar()}
                </div>
            );
        }
    }

    componentWillReceiveProps(props) {
        this.setState({current: -1, hidden: true});
    }

    componentDidMount() {
        window.addEventListener('keydown', this.onKeyPress);
    }  
    componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyPress);
    }

    onKeyPress = (e) => {
        console.log(e);
        
        if (e.key == "ArrowRight") {
            this.onClickNext(e);
        } else if (e.key == "ArrowLeft") {
            this.onClickPrev(e);
        } else if (e.key == " ") {
            e.preventDefault();
            this.setState({hidden: false});
        }
    }
}

export default Quizlet;