import React, { Component } from 'react';


class LinkItem extends Component {
    render() {
        const { name, number } = this.props;

        return (
            <div className="link-item">
                <div className="">{name}</div>
                <div>{number}</div>
            </div>
        );
    }
}

export default LinkItem;
