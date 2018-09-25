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
    <NodeGroup
      data={this.state.matchesList}
      keyAccessor={(d) => d.id}
      start={() => ({
        opacity: 0,
        x: -200
      })}

    >
      {(nodes) => (
        <div>
          {nodes.map(({key, data, state:{ x, opacity}}) => (
            <div
              key={key}
              className="match_box_big"
              style={{
                opacity,
                transform: `translate(${x}px)`
              }}
            >
              <div className="block_wrapper">
                <div className="block">
                
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
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