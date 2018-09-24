import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { firebaseDB } from '../../firebase';
import { firebaseLooper } from '../ui/misc';

const style ={
  cell:{
    padding: '4px 16px 4px 11px',
    borderBottom: '1px solid #ffffff',
    color: '#ffffff',
    textAlign: 'center'
  }
};

class LeagueTable extends Component {
  state = {
    positions: []
  };

  componentDidMount(){
    firebaseDB.ref('positions').once('value')
      .then()
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default LeagueTable;