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
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Drawer from './drawer1';

// import DrawerSimpleExample from './drawer';

const styles = {
    container: {
        // textAlign: 'center',
        // paddingTop: 200,
    },
    drawer: {
        // textAlign: 'center',
        // paddingTop: 200,
        //  transform: 'translate(-266px, 0px)',
         // overflow: 'auto',
         // transition: 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    },
};


const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

export default class Header extends Component {
    constructor(props, context) {
        super(props, context);

        // this.handleRequestClose = this.handleRequestClose.bind(this);
        // this.handleTouchTap = this.handleTouchTap.bind(this);

        this.state = {
            open: false,
        };
        //
        // this.handleToggle = this.handleToggle.bind(this);
    }

    // handleToggle(){
    //     // alert(this.state);
    //     // this.setState({open: !this.state.open});
    // }

    // handleTouchTap() {
    //     this.setState({
    //         open: true,
    //     });
    // }

    render() {


        // const DrawerOpen = () => (
        //     <Drawer/>
        //     //     ref="mydrawer"
        //     //     docked={false}
        //     //     width={250}
        //     //     open={this.state.open}
        //     //     onRequestChange={(open) => this.setState({open})}
        //     // >
        //     //     <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
        //     //     <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        //     // </Drawer>
        // );
    //     const AppBarExampleIcon = () => (
    //         <AppBar
    //     title="Scheduler"
    //     // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    //     onLeftIconButtonTouchTap={this.handleToggle}
    //     iconElementRight={
    //     <IconMenu
    //         iconButtonElement={
    //       <IconButton><MoreVertIcon /></IconButton>
    //     }
    //         targetOrigin={{horizontal: 'right', vertical: 'top'}}
    //         anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    //     >
    //         <MenuItem primaryText="Refresh" />
    //         <MenuItem primaryText="Help" />
    //         <MenuItem primaryText="Sign out" />
    //     </IconMenu>
    // }
    // />
    //     );

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <Drawer onRequestChange={this.props.onRequestChange} drawerState={this.props.drawerState}/>
                </div>
            </MuiThemeProvider>
        );
    }
}


  