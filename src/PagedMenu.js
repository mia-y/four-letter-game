import React from 'react';

class PagedMenu extends React.Component {
    
    state = { start: 1, end: 10, current: 1 }

    onClickMenu = (event) => {
        const index = event.target.getAttribute('index')
        this.setState({current: index});
        this.props.onChange(index);
    }

    render() {
        const menu = [];
        for (var i = this.state.start; i <= this.state.end; i++) {
            const active = this.state.current == i ? 'active' : '';
            menu.push(<a className={`item ${active}`} key={i} index={i} onClick={this.onClickMenu}>{i}</a>);
        }
        return (
            <div className="ui pagination menu">
                {menu}
            </div>
        );
    }
}

export default PagedMenu;