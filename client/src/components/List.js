import React, { Component } from 'react';
import LinkItem from './ListItem';

class List extends Component {
    render() {
        const { data } = this.props;

        return (
            <div>
                {data ? (
                    data.map((val, i) => <LinkItem key={i} {...data} />)
                ) : (
                        <p> not found</p>
                    )}
            </div>
        )
    }
}

export default List