import React, { Component } from 'react';

class Skill extends Component {
    render() {
        return (
            <div class="column">
                {this.props.name}
            </div>
        );
    }
}

export default Skill;