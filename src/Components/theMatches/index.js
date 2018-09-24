import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { firebaseMatches } from '../../firebase';
import { firebaseLooper, reverseArray } from '../ui/misc';

import LeagueTable from './table';
import MatchesList from './matchesList';
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
        const matches = firebaseLooper(snapshot);

        this.setState({
          loading: false,
          matches: reverseArray(matches),
          filterMatches: reverseArray(matches)
        });
      });
  }

  showPlayed = (played) => {
    const list = this.state.matches.filter((match) => {
      return match.final === played;
    });

    this.setState({
      filterMatches: played === 'All' ? this.state.matches : list,
      playedFilter: played,
      resultFilter: 'All'
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