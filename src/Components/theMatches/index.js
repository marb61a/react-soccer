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

  showResult = (result) => {
    const list = this.state.matches.filter((match)=>{
      return match.result === result
    });
  
    this.setState({
      filterMatches: result === 'All' ? this.state.matches : list,
      playedFilter: 'All',
      resultFilter: result
    });
  }

  render() {
    const state = this.state;

    return (
      <div className="the_matches_container">
        <div className="the_matches_wrapper">
          <div className="left">
            <div className="match_filters">
              <div className="match_filters_box">
                <div className="tag">
                  Show Match
                </div>
                <div className="cont">
                  <div
                    className={`option ${state.playedFilter === 'All' ? 'active': ''}`}
                    onClick={() => this.showPlayed('All')}
                  >
                    All
                  </div>
                  <div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TheMatches;