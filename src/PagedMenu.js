import React from 'react';

class PagedMenu extends React.Component {
    
    state = { start: 1, end: 10, current: 1 }

    onClickMenu = (event) => {
        event.preventDefault();
        const index = event.target.getAttribute('index')
        this.setState({current: index});
        this.props.onChange(index);
    }

    render() {
        const menus = [];
        for (var i = this.state.start; i <= this.state.end; i++) {
            const active = i == this.state.current ? 'active': ''
            const menu = <a className={`nav-link ${active}`} href="" key={i} index={i} onClick={this.onClickMenu}>{i}</a>;
            menus.push(menu);
        }

        return (
            <nav className="nav nav-masthead justify-content-center">
                {menus}
            </nav>
        );
    }

    render2() {
        const buttons = [];
        for (var i = this.state.start; i <= this.state.end; i++) {
            const button = <button type="button" className="btn btn-dark" key={i} index={i} onClick={this.onClickMenu}>{i}</button>;
            buttons.push(button);
        }
        return (
            <div className="btn-group" role="group" aria-label="Index">
                {buttons}
            </div>
        );
    }
}

export default PagedMenu;