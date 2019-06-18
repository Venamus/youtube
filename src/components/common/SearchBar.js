import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hello: 'from SearchBar'
        };
    }

    render(){
        return (
            <div>
                Hello From SearchBar
            </div>
        );
    }
}

export { SearchBar };
