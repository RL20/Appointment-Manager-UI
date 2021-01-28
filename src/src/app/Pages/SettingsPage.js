import React from 'react';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Toggle from 'material-ui/Toggle';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import {black, white, cyan500,grey900,blue500, red500, greenA200,orange500} from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';


import {styles, style, themeColor, textColor, icons, muiTheme, muiThemeWhite, setTheme, setThemeMode, darkBaseTheme, lightBaseTheme} from '../Styles';


const colorName = {
    'Black': black,
    'White': white,
    'Blue': cyan500,
    'Blue1': blue500,
    'Red': red500,
    'Green': greenA200,
    'Orange': orange500
};
var SettingsPage = React.createClass({
    handleNotificationsToggle()
    {
        ////alert(this.state.notificationsToggle);

        if(this.state.notificationsToggle == "Enabled") {
            this.setState({notificationsToggle: "Disabled"});
        }
        else if(this.state.notificationsToggle == "Disabled") {
            this.setState({notificationsToggle: "Enabled"});
        }


    },
    handleNightModeToggle()
    {
        ////alert(this.state.notificationsToggle);
        var theme = window.localStorage.getItem('theme');

        theme = theme != null ?  JSON.parse(theme) : {};

        console.log(theme);
        // theme.isDarkMode = 'dsvsdvsdv';

        if(this.state.isDarkMode) {
            theme.isDarkMode = 0;
            this.setState({isDarkMode: false,
                           nightModeToggle: "Off"});
            setThemeMode(lightBaseTheme);
        }
        else {
            theme.isDarkMode = 1;
            this.setState({isDarkMode: true,
                           nightModeToggle: "On"});
            setThemeMode(darkBaseTheme);

        }

        this.props.updateNavigationDrawer();
        window.localStorage.setItem('theme', JSON.stringify(theme));
        // document.querySelector('#themeColorCss').innerHTML = ".themeColor ,body{ background-color:" + muiTheme.palette.canvasColor + "}";


    },
    handleClose(){
        this.setState({open: false});
    },
    handleThemeColorClose(){
        this.setState({themeColorOpen: false});
    },
    setLanguage(lang){
        window.strings.setLanguage(lang);
        this.setState({open:false});
        if(window.strings.isRTL){
            ////alert('rtl');
            document.querySelector('body').dir = "rtl";
            this.props.switchToRTL("rtl");
        }
        else{
            ////alert('rtl');
            document.querySelector('body').dir = "ltr";
            this.props.switchToRTL("ltr");
        }
        window.localStorage.setItem("lang", lang);
        this.props.history.push('/settings');
    },
    changeTheme(color){
        ////alert(color);
        this.setState({themeColorOpen: false,
            themeColor: color.charAt(0).toUpperCase() + color.slice(1)
        });
        let theme = window.localStorage.getItem("theme");

        let isDarkMode;
        if(theme != null){
            theme = JSON.parse(theme);
            isDarkMode =  theme.isDarkMode == 1;
            theme.color = colorName[color];
        }
        else {
            theme = {color: colorName[color]};
            isDarkMode = false;
        }

        if(isDarkMode != null && isDarkMode)
        {
            setTheme(colorName[color], darkBaseTheme);
        }
        else{
            setTheme(colorName[color], lightBaseTheme);
        }
        // console.log(colorName['black']);
        // document.querySelector('#themeColorCss').innerHTML = ".themeColor ,body{ background-color:" + muiTheme.palette.canvasColor + "}";

        window.localStorage.setItem("theme", JSON.stringify(theme));

    },
    getInitialState: function() {
        var theme = window.localStorage.getItem('theme');
        var isDarkMode;
        var color;
        if(theme != null){
            theme = JSON.parse(theme);
         isDarkMode = theme.isDarkMode != 0 ;
         color = Object.keys(colorName).find(key => colorName[key] === theme.color);
        }
        else{
             isDarkMode = false;
             color = 'Blue';
        }
        return {
            data: this.props.data,
            notificationsToggle: "Enabled",
            nightModeToggle: isDarkMode ? "On" : "Off",
            themeColor: color,
            themeColorOpen: false,
            open: false,
            isDarkMode: isDarkMode
        };
    },
    logOut: function() {
        window.localStorage.removeItem('hello');
        window.localStorage.removeItem('user');
        window.localStorage.removeItem('token');
        window.location.href = "/";
    },
    render: function() {
        const SettingsAppBar = () => (
            <AppBar
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle : styles.appbarTitleOpenedDrawer}
                style={styles.appbar}
                iconStyleLeft={styles.appbarIconStyle}
                iconStyleRight={styles.appbarIconStyle}
                title={window.strings.settingsPage.appbar.title}
                // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={this.props.openDrawer}
                //         iconElementRight={         //         <IconMenu         //         iconButtonElement={         //   <IconButton><MoreVertIcon /></IconButton>         // }         //         targetOrigin={{horizontal: 'right', vertical: 'top'}}         //         anchorOrigin={{horizontal: 'right', vertical: 'top'}}         //     >         //         <MenuItem primaryText="Sign out" />         //         <MenuItem primaryText="Settings" />         //         <MenuItem primaryText="About" />         //     </IconMenu>         //         }
            />
        );
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />
        ];
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <SettingsAppBar/>
                    <div style={this.props.isDrawerDocked ? window.strings.css.pushContent :null}>
                        <div style={styles.toppad}></div>
                        <div style={{maxWidth: 700, float: 'none', margin: '0 auto'}}>
                            <List>
                                <h2 style={styles.pageTitle}>{window.strings.settingsPage.general.h2Title}</h2>
                                <ListItem primaryText={window.strings.settingsPage.general.themeColor} secondaryText={this.state.themeColor} onTouchTap={()=>(this.setState({themeColorOpen: true}))}/>
                                <ListItem primaryText={window.strings.settingsPage.general.language} secondaryText={this.state.lang} onTouchTap={()=>(this.setState({open: true}))}/>
                                <Divider/>
                                <ListItem  secondaryText={this.state.nightModeToggle}>
                                    <Toggle
                                        label="Dark mode"
                                        toggled={this.state.isDarkMode}
                                        onToggle={this.handleNightModeToggle}
                                    />
                                </ListItem>
                                <h2 style={styles.pageTitle}>{window.strings.settingsPage.notifications.h2Title}</h2>
                                <ListItem  secondaryText={this.state.notificationsToggle}> <Toggle
                                    label="Show/Hide notifications"
                                    toggled={true}
                                    onToggle={this.handleNotificationsToggle}
                                /></ListItem>
                                <h2 style={styles.pageTitle}>{window.strings.settingsPage.account.h2Title}</h2>
                                <ListItem primaryText="Guest mode"
                                          secondaryText="Let a friend connect as guest"/>
                                <Divider/>
                                <ListItem primaryText="Log out"
                                          secondaryText=""
                                          onTouchTap={this.logOut}
                                />
                            </List></div></div>
                    <Dialog
                        title="Theme Color"
                        modal={false}
                        open={this.state.themeColorOpen}
                        onRequestClose={this.handleThemeColorClose}
                        autoScrollBodyContent={true}
                    >
                        <List>
                            {Object.keys(colorName).map((row, index) => {
                               return <ListItem primaryText={row} onTouchTap={()=>(this.changeTheme(row))} leftIcon={<Avatar  style={{backgroundColor: colorName[row]}} />}/>
                            })}
                        </List>
                    </Dialog>
                    <Dialog
                        title="Language"
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        autoScrollBodyContent={true}
                    >
                        <List>
                            <ListItem primaryText="English" onTouchTap={()=>{this.setLanguage('en')}}  />
                            <ListItem primaryText="Hebrew" onTouchTap={()=>{this.setLanguage('he')}}  />
                            <ListItem primaryText="Arabic" onTouchTap={()=>{this.setLanguage('en')}} />
                            <ListItem primaryText="Russian" onTouchTap={()=>{this.setLanguage('en')}}  />
                        </List>
                    </Dialog>
                </div>
            </MuiThemeProvider>
        );
    }
});

export default SettingsPage;