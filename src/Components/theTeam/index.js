import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Promise } from 'core-js';

import PlayerCard from '../ui/playerCard';
import Stripes from '../../Resources/images/stripes.png';

import { firebasePlayers, firebase } from '../../firebase';
import { firebaseLooper } from '../ui/misc';

class TheTeam extends Component {
  state= {
    loading: true,
    players: []
  };

  componentDidMount() {
    firebasePlayers.once('value')
      .then(snapshot => {

      })
  }

  render(){
    return (
      <div 
        className="the_team_container"
        style={{ background:`url(${Stripes}) repeat` }}
      >
        {
          this.state.loading ?
          <div>
          
          </div> :
          null
        }
      </div>
    );
  }
}

export default TheTeam;