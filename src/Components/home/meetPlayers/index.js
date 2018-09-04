import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';

import Stripes from '../../../Resources/images/stripes.png';
import { Tag } from '../../ui/misc';
class MeetPlayers extends Component {
  state = {
    show: false
  };

  render() {
    return (
      <Reveal>
        <div
          className="home_meetplayers"
          style={{ background: `#ffffff url(${Stripes})` }}
        >
          <div className="container">
            <div className="home_meetplayers_wrapper">
            
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
}

export default MeetPlayers;