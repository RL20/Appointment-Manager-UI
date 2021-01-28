import React from 'react';
import {Link} from 'react-router-dom'

import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import {MenuItem} from 'material-ui/Menu';
import CustIcon from 'material-ui/svg-icons/action/supervisor-account';
import Event from 'material-ui/svg-icons/action/event';
import Image from 'material-ui/svg-icons/image/image';
import AccessTime from 'material-ui/svg-icons/device/access-time';
import Navigation from 'material-ui/svg-icons/maps/navigation';
import Phone from 'material-ui/svg-icons/communication/phone';
import HomeIcon from 'material-ui/svg-icons/action/home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

import AbsenceIcon from 'material-ui/svg-icons/notification/event-busy';
import EmployeesIcon from 'material-ui/svg-icons/communication/contact-mail';
import InfoIcon from 'material-ui/svg-icons/action/info';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import {styles, muiTheme, themeColor} from './Styles';
import isMobile from './IsMobile';
import SiteURL from './site-url';



var NavigationDrawer = React.createClass({
    handleAAPCircleClick: function() {
        console.log("new component");
        this.refs.setAppForm.show();
    },
    handleCardClick: function(date,time) {
        ////alert(bla);
        console.log("new component");
        this.refs.setAppForm.show(date,time);
    },
    getInitialState: function() {
        //TODO move strings.setLanguage to a proper location
        console.log(window);
        // window.strings.setLanguage('he');
        // this.setState({});

        return {
            data: this.props.data,
            value:1
        };
    },
    handleChange: function(event, index, value) {
        this.setState({value});
    },
    getOnRequestChange: function() {
        if (isMobile.any()) {

            this.props.onRequestChange();
        }
    },
    userProfileClick: function() {
        //alert();
    },
    render: function() {
        var percentage = themeColor;
        const UserCard = () => (
            <Link onTouchTap={this.getOnRequestChange} to="/userprofile" style={{textDecoration: 'none'}}>
                <Card className="themeColor"
                      style={{
                          paddingTop: 40,
                          height: 128,
                          boxShadow: '0',
                          backgroundColor: 'none'}}>
                    <div style={styles.cardheader}>
                        <div
                            style={{
                                backgroundImage:'url(' + (this.props.userPhoto == undefined ? SiteURL.url + 'Assets/user-photo-stub.png' : this.props.userPhoto) + ')',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '50%',
                                width: 40,
                                height: 40
                            }}
                        ></div>
                        <b>{this.props.userName}</b><br/>
                        <a>{this.props.userEmail}</a>
                    </div>
                </Card>
            </Link>
        );

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Drawer
                    containerStyle={this.props.isDrawerDocked ? {zIndex: 1100} : {zIndex: 1300}}
                    docked={this.props.isDrawerDocked}
                    width={250}
                    openSecondary={this.props.openSecondary}
                    open={this.props.drawerState}
                    onRequestChange={this.props.onRequestChange}
                >
                    {this.props.isDrawerDocked ? <div style={styles.toppad}></div> :null}

                    <UserCard/>
                    <div style={styles.cardspacer}></div>
                    <MenuItem innerDivStyle={styles.menulist} onTouchTap={this.getOnRequestChange} containerElement={<Link to="/"/>} leftIcon={<HomeIcon/>}>{window.strings.navigationDrawer.home}</MenuItem>
                    <MenuItem innerDivStyle={styles.menulist} onTouchTap={this.getOnRequestChange} containerElement={<Link to="/appointments"/>} leftIcon={<Event/>}>{window.strings.navigationDrawer.appointments}</MenuItem>
                    <MenuItem innerDivStyle={styles.menulist} onTouchTap={this.getOnRequestChange} containerElement={<Link to="/absences"/>} leftIcon={<AbsenceIcon/>}>{window.strings.navigationDrawer.absences}</MenuItem>
                    <MenuItem innerDivStyle={styles.menulist} onTouchTap={this.getOnRequestChange} containerElement={<Link to="/employees"/>} leftIcon={<EmployeesIcon/>}>{window.strings.navigationDrawer.employees}</MenuItem>
                    <MenuItem innerDivStyle={styles.menulist} onTouchTap={this.getOnRequestChange} containerElement={<Link to="/customers"/>} leftIcon={<CustIcon/>}>{window.strings.navigationDrawer.customers}</MenuItem>
                    <MenuItem innerDivStyle={styles.menulist} onTouchTap={this.getOnRequestChange} containerElement={<Link to="/openinghours"/>} leftIcon={<AccessTime/>}>{window.strings.navigationDrawer.openingHours}</MenuItem>
                    <MenuItem innerDivStyle={styles.menulist} onTouchTap={this.getOnRequestChange} containerElement={<Link to="/pictures"/>} leftIcon={<Image/>}>{window.strings.navigationDrawer.pictures}</MenuItem>
                    <MenuItem innerDivStyle={styles.menulist} onTouchTap={this.getOnRequestChange} containerElement={<Link to="/navigate"/>} leftIcon={<Navigation/>}>{window.strings.navigationDrawer.navigate}</MenuItem>
                    <MenuItem innerDivStyle={styles.menulist} onTouchTap={this.getOnRequestChange} containerElement={<Link to="/contactus"/>} leftIcon={<Phone/>}>{window.strings.navigationDrawer.contactUs}</MenuItem>

                    <Divider />
                    <MenuItem innerDivStyle={styles.menulist} primaryText={window.strings.navigationDrawer.settings} onTouchTap={this.getOnRequestChange} containerElement={<Link to="/settings"/>} leftIcon={<SettingsIcon/>}/>
                    <MenuItem innerDivStyle={styles.menulist} primaryText={window.strings.navigationDrawer.about} onTouchTap={this.getOnRequestChange} containerElement={<Link to="/about"/>} leftIcon={<InfoIcon/>}/>
                </Drawer>
            </MuiThemeProvider>
        );
    }
});

export default NavigationDrawer;

