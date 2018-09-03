import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

import { UtdLogo } from '../ui/icons';

class Header extends Component {
  render(){
    return (
      <AppBar
        position="fixed"
        style={{

        }}
      >
        <Toolbar style={{display:'flex'}}>
          <div style={{ flexGrow: 1 }}>
            <div className="header_logo">
            
            </div>
          </div>

          <Link to="/the_team">
            <Button color="inherit">The team</Button>
          </Link>
          <Link to="/the_matches">
            <Button color="inherit">Matches</Button>
          </Link>
          
        </Toolbar>
      </AppBar>
    );
  }
}