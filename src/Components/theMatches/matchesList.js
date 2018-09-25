import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import NodeGroup from 'react-move/NodeGroup';

class MatchesList extends Component {
  state = {
    matchesList: []
  };

  static getDerivedStateFromProps(props, state) {
    return state = {
      matcheslist: props.matches
    };
  }

  showMatches = () => (
    this.state.matcheslist ?
    <NodeGroup>
    
    </NodeGroup> :
    null
  )

  render() {
    console.log(this.state.matcheslist);

    return (
      <div>
        { this.showMatches() }
      </div>
    );
  }
}

export default MatchesList;