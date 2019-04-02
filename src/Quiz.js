import React from 'react';

class Quiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            content: props.content,
            quiz: props.content.split(' ')[0],
            answer: props.content.split(' ')[1]
        };
    }

    onQuestionMarkClick = (e) => {
        this.setState({hidden: false});
    }

    render() {
        const blank = this.state.hidden == true ? <a onClick={this.onQuestionMarkClick}>??</a> : this.state.answer;
        return (
            <div>
                {this.state.quiz}
                &nbsp;
                {blank}
            </div>
        );
    }
}

Quiz.defaultProps = {
    quiz : '',
    answer : '',
    content : "엑스 박스",
};

export default Quiz;