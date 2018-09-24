import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'

import { firebaseMatches } from '../../firebase';
import { firebaseLooper, reverseArray } from '../ui/misc';

class TheMatches extends Component {
  state = {
    loading: true,
    matches:[],
    filterMatches:[],
    playedFilter:'All',
    resultFilter:'All'
  };

  componentDidMount() {
    firebaseMatches.once('value')
      .then(snapshot => {

      });
  }

  render() {
    const state = this.state;

    return (
      <div className="the_matches_container">
        <div className="the_matches_wrapper">
          <div className="left">
          
          </div>
        </div>
      </div>
    );
  }
}

export default TheMatches;