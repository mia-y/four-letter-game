import React from 'react';

class PlayButtons extends React.Component {

    render () {
        return (
            <div className="ui buttons">
                <button className="ui labeled icon button">
                    <i className="left chevron icon"></i>
                    Back
                </button>
                <button className="ui button">
                    <i className="stop icon"></i>
                    1
                </button>
                <button className="ui right labeled icon button">
                    Forward
                    <i className="right chevron icon"></i>
                </button>
            </div>
        );
    }
}

export default PlayButtons;