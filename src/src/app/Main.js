/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Menu, MenuItem} from 'material-ui/Menu';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Drawer from 'material-ui/Drawer';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      open: false,
      headerTitle: "Scheduler",
      leftIcon: <IconMenu
          iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Sign out" />
        <MenuItem primaryText="Settings" />
        <MenuItem primaryText="About" />
      </IconMenu>
    };
  }

  // handleToggle(){
  //
  //   // this.setState({open: !this.state.open});
  //   //   alert();
  //   this.props.changeDrawerState();
  // }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }


  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    const AppBarExampleIcon = () => (
        <AppBar
            style={styles.appbar}
            title={this.state.headerTitle}
            // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
            iconElementRight={this.state.leftIcon}
        />
    );
    // const AppBarExampleIcon = () => (
    //     <AppBar
    //         title="Title"
    //         iconClassNameRight="muidocs-icon-navigation-expand-more"
    //     />
    // );

    // return (
    //   <MuiThemeProvider muiTheme={muiTheme}>
    //     <div style={styles.container}>
    //       <div >
    //       <Dialog
    //         open={this.state.open}
    //         title="Super Secret Password"
    //         actions={standardActions}
    //         onRequestClose={this.handleRequestClose}
    //       >
    //         1-2-3-4-5
    //       </Dialog>
    //       <h1>Material-UI</h1>
    //       <h2>example project</h2>
    //       <RaisedButton
    //         label="Super Secret Password"
    //         secondary={true}
    //         onTouchTap={this.handleTouchTap}
    //       />
    //     </div></div>
    //   </MuiThemeProvider>
    // );
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
        
          <Drawer
              docked={false}
              width={200}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
            <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
          </Drawer>
        <AppBarExampleIcon/>
        <div style={styles.container}>
          <div >
          <Dialog
            open={this.state.open}
            title="Super Secret Password"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            1-2-3-4-5
          </Dialog>
          <h1>Material-UI</h1>
          <h2>example project</h2>
          <RaisedButton
            label="Super Secret Password"
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />
        </div></div></div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
