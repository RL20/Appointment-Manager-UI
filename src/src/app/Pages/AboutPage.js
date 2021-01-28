import React from 'react';
import Event from 'material-ui/svg-icons/action/event';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';
import {styles, muiTheme} from '../Styles';


var AboutPage = React.createClass({
    getInitialState: function() {
        return {
            value:1};
    },
    render: function() {
        const DefaultAppBar = () => (
            <AppBar
                 titleStyle={this.props.isDrawerDocked ? styles.appbarTitle : styles.appbarTitleOpenedDrawer}                 style={styles.appbar}                 iconStyleLeft={styles.appbarIconStyle}                 iconStyleRight={styles.appbarIconStyle}
                title={'About'}
                // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={this.props.openDrawer}
                //         iconElementRight={         //         <IconMenu         //         iconButtonElement={         //   <IconButton><MoreVertIcon /></IconButton>         // }         //         targetOrigin={{horizontal: 'right', vertical: 'top'}}         //         anchorOrigin={{horizontal: 'right', vertical: 'top'}}         //     >         //         <MenuItem primaryText="Sign out" />         //         <MenuItem primaryText="Settings" />         //         <MenuItem primaryText="About" />         //     </IconMenu>         //         }
            />
        );
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <DefaultAppBar/>
                    <div style={this.props.isDrawerDocked ? window.strings.css.pushContent :null}>
                        <div style={styles.toppad}></div>
                        <ListItem
                            style={{backgroundColor: muiTheme.palette.primary1Color, height: 96,display: 'flex', justifyContent: 'center'}}
                            disabled={true}
                        >
                            <List>
                                <ListItem style={{marginTop: '-20px', padding: 0, display: 'flex', justifyContent: 'center'}}
                                          disabled={true}>
                                    <IconButton iconStyle={styles.smallIcon}
                                                style={styles.small}
                                    >
                                        <Event color={'white'}/>

                                    </IconButton></ListItem>
                                <ListItem style={{padding: 0, display: 'flex', justifyContent: 'center'}} disabled={true}>
                                    <a style={{color:'white'}}>Appointments Manager</a>
                                </ListItem>
                                <ListItem style={{padding: 3, display: 'flex', justifyContent: 'center'}} disabled={true}>
                                    <a style={{color:'white', fontSize: 10}}>Version 0.1</a>
                                </ListItem>
                            </List>


                        </ListItem>
                        <div style={{maxWidth:700, float: 'none', margin: '0 auto'}}>
                            <div>
                                <List>
                                    <ListItem primaryText="Contact" onTouchTap={()=>(this.changeTheme("blue"))} />
                                    <ListItem primaryText="Feedback" onTouchTap={()=>(this.changeTheme("blue"))} />
                                    <ListItem primaryText="Rate Us on Google Play" onTouchTap={()=>(this.changeTheme("blue"))} />
                                </List>
                            </div>
                        </div>

                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
});

export default AboutPage;