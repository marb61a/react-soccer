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
        const players = firebaseLooper(snapshot);
        let promises = [];

        for(let key in players) {
          promises.push(
            new Promise((resolve, reject) => {
              firebase.storage().ref('players')
                .child(players[key].image).getDownloadURL()
                .then(url => {
                  players[key].url = url;
                  resolve();
                });
            })
          )
        }

        Promise.all(promises)
          .then(() => {
            this.setState({
              loading: false,
              players
            });
          });
      })
  }

  showPlayersByCategory = (category) => (
    this.state.players ?
    this.state.players.map(
      
    ) :
    null
  )

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