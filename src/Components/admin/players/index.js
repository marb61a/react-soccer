import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import AdminLayout from '../../../Hoc/AdminLayout';
import { firebasePlayers } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../ui/misc';

class AdminPlayers extends Component {
  state = {
    isLoading: true,
    players: []
  };

  componentDidMount(){

  }

  render(){
    return (
      <AdminLayout>
        <div>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>First name</TableCell>
                  <TableCell>Last name</TableCell>
                  <TableCell>Number</TableCell>
                  <TableCell>Position</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              
              </TableBody>
            </Table>
          </Paper>
        </div>
      </AdminLayout>
    )
  }
}

export default AdminPlayers;