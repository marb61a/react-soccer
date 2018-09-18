import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import { firebaseMatches } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../ui/misc';
import AdminLayout from '../../../Hoc/AdminLayout';

class AdminMatches extends Component {
  state = {
    isloading: true,
    matches:[]
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
                  <TableCell>Date</TableCell>
                  <TableCell>Match</TableCell>
                  <TableCell>Result</TableCell>
                  <TableCell>Final</TableCell>
                </TableRow>
              </TableHead>
              <TableBody></TableBody>
            </Table>
          </Paper>
          <div className="admin_progress">
            {
              this.state.isloading ?
              <CircularProgress 
                thickness={7}
                style={{color:'#98c5e9'}}
              /> : ''
            }
          </div>
        </div>
      </AdminLayout>
    );
  }
}

export default AdminMatches;