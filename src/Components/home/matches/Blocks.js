import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

import MatchesBlock from '../../ui/matches_block';

class Blocks extends Component {
  state = {
    matches: []
  };

  componentDidMount(){

  }

  showMatches = (matches) => (
    matches ? 
    matches.map( (match) => (
      <Slide bottom key={id}>
        <div className="item">
          <div className="wrapper">
            <MatchesBlock match={match}/>
          </div>
        </div>
      </Slide>
    )) :
    null 
  );

  render() {
    console.log(this.state);

    return (
      <div className="home_matches">
        { this.showMatches(this.state.matches) }
      </div>
    );
  }
}

export default Blocks;