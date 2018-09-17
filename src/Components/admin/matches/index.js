import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AdminLayout from '../../../Hoc/AdminLayout';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

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
              <TableHead></TableHead>
              <TableBody></TableBody>
            </Table>
          </Paper>
        </div>
      </AdminLayout>
    );
  }
}

export default AdminMatches;