import React from 'react';

class Quiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hidden: true
        };
    }

    onQuestionMarkClick = (e) => {
        this.setState({hidden: false});
    }

    render() {
        const quiz = this.props.content.split(' ')[0];
        const answer = this.props.content.split(' ')[1];
        const blank = this.state.hidden == true ? <a onClick={this.onQuestionMarkClick}>??</a> : answer;
        return (
                <h1 className="cover-heading">
                    {quiz}
                    &nbsp;
                    {blank}
                </h1>
        );
    }
    
    componentWillReceiveProps(props) {
        this.setState({hidden: props.hidden});
    }   
}

export default Quiz;