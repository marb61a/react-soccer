import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

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
        </Toolbar>
      </AppBar>
    );
  }
}