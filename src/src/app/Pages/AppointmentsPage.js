import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch, Route, Link,Redirect} from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import History from 'history';
// import k from 'path-dirname';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import {Menu, MenuItem} from 'material-ui/Menu';
import CustIcon from 'material-ui/svg-icons/action/supervisor-account';
import Event from 'material-ui/svg-icons/action/event';
import UpIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import DownIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import Image from 'material-ui/svg-icons/image/image';
import AccessTime from 'material-ui/svg-icons/device/access-time';
import Navigation from 'material-ui/svg-icons/maps/navigation';
import Phone from 'material-ui/svg-icons/communication/phone';
import HomeIcon from 'material-ui/svg-icons/action/home';
import EventAvailableIcon from 'material-ui/svg-icons/notification/event-available';
import LocationIcon from 'material-ui/svg-icons/communication/location-on';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Drawer1 from '../drawer1';

import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationIcon from 'material-ui/svg-icons/navigation/menu';
import FilterIcon from 'material-ui/svg-icons/content/filter-list';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import CallIcon from 'material-ui/svg-icons/communication/call';
import TextIcon from 'material-ui/svg-icons/communication/textsms';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import AppointmentsIcon from 'material-ui/svg-icons/notification/event-note';
import FlatButton from 'material-ui/FlatButton';
import SearchAndChooseDialog from '../SearchAndChooseDialog';
import FontIcon from 'material-ui/FontIcon';
import Settings from 'material-ui/svg-icons/action/settings';
// import About from 'material-ui/svg-icons/alert/error-outline';
import AvailableAppointmentsCard from '../AvailableAppointmentsCard';
import EmpAndCustPage from '../EmpAndCustPage';
import Pics from '../openGallery';
import Navigate from '../navigate';
import GoogleMapTest from '../clickableMarkers';
// import AddAppointmentCircle from './addAppointmentCircle';
// import AppointmentTableModel from './AppointmentTableModel';
import AppointmentsList from '../AppointmentsList';
import TableModel from '../TableModel';
import {List, ListItem} from 'material-ui/List';
import DatePicker from 'material-ui/DatePicker/DatePickerDialog';
import AvailableHours from '../availhours';
import SetAppForm from '../setAppForm';
import DropDownMenu from 'material-ui/DropDownMenu';
import {black, white, cyan500,grey900,blue500, red500, greenA200,orange500} from 'material-ui/styles/colors';
import DateRange from '../FilterBar';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import SearchIcon from 'material-ui/svg-icons/action/search';
import Checkbox from 'material-ui/Checkbox';
import CallButton from 'material-ui/svg-icons/communication/call';
import AbsenceIcon from 'material-ui/svg-icons/notification/event-busy';
import EmployeesIcon from 'material-ui/svg-icons/communication/contact-mail';
import EmailButton from 'material-ui/svg-icons/communication/email';
import InfoIcon from 'material-ui/svg-icons/action/info';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import FacebookButton from '../../SVG/FacebookIcon/Facebook';
import {GridList, GridTile} from 'material-ui/GridList';
import SiteURL from '../site-url';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import DateRangeIcon from 'material-ui/svg-icons/action/date-range';
import moment from 'moment'
import ReactUploadFile from '../uploadFile';
import CircularProgress from 'material-ui/CircularProgress';


import NavigationDrawer from '../NavigationDrawer';
import SettingsPage from './SettingsPage';
import NavigatePage from './NavigatePage';
import ContactUsPage from './ContactUsPage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import {PersonsPage, SetNewPersonPage} from './PersonsPage';
import UserProfilePage from './UserProfilePage';
import FloatingButton from '../FloatingButton';
import {styles, style, textColor, icons, muiTheme, setTheme} from '../Styles';
import isMobile from '../IsMobile';
import {superagent, setAjaxAuthHeader} from '../SuperAgent';







var AppointmentsPage = React.createClass({
    handleAAPCircleClick: function(e){
        // e.preventDefault(); e.stopPropagation();
        this.props.history.push('/setappointment');
    },
    render: function() {
        const DefaultAppBar = () => (
            <AppBar
                 titleStyle={this.props.isDrawerDocked ? styles.appbarTitle : styles.appbarTitleOpenedDrawer}
                 style={styles.appbar}
                 iconStyleLeft={styles.appbarIconStyle}
                 iconStyleRight={styles.appbarIconStyle}
                 title={window.strings.appointmentsPage.appbar.title}
                 // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                 onLeftIconButtonTouchTap={this.props.openDrawer}
                //         iconElementRight={         //         <IconMenu         //         iconButtonElement={         //   <IconButton><MoreVertIcon /></IconButton>         // }         //         targetOrigin={{horizontal: 'right', vertical: 'top'}}         //         anchorOrigin={{horizontal: 'right', vertical: 'top'}}         //     >         //         <MenuItem primaryText="Sign out" />         //         <MenuItem primaryText="Settings" />         //         <MenuItem primaryText="About" />         //     </IconMenu>         //         }
            />
        );
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <DefaultAppBar/>
                    <div style={this.props.isDrawerDocked ? window.strings.css.pushContent : null}>
                        <div style={styles.toppad}></div>
                        <div style={{maxWidth:700, float: 'none', margin: '0 auto'}}>
                            <List style={{padding: "12px", marginTop: 30}}>
                                <ListItem   style={{padding: "9px 0"}} primaryText={window.strings.appointmentsPage.listTitle.appointments}  onTouchTap={this.props.onRequestChange} containerElement={<Link to="/appointmentslist"/>}/>
                                <Divider/>
                                <ListItem   style={{padding: "9px 0"}} primaryText={window.strings.appointmentsPage.listTitle.byCustomer} onTouchTap={this.props.onRequestChange} containerElement={<Link to="/appointmentslistbycustomer"/>}/>
                                <Divider/>
                                <ListItem   style={{padding: "9px 0"}} primaryText={window.strings.appointmentsPage.listTitle.byEmployee} onTouchTap={this.props.onRequestChange} containerElement={<Link to="/appointmentslistbyemployee"/>}/>
                                <Divider/>
                                <ListItem   style={{padding: "9px 0"}} primaryText={window.strings.appointmentsPage.listTitle.history} onTouchTap={this.props.onRequestChange} containerElement={<Link to="/appointmentslisthistory"/>}/>
                                <Divider/>
                                <ListItem   style={{padding: "9px 0"}} primaryText={window.strings.appointmentsPage.listTitle.todaysAppointments} onTouchTap={this.props.onRequestChange} containerElement={<Link to="/appointmentslisttoday"/>}/>
                                <Divider/>
                            </List>
                        </div>
                        <FloatingButton circleIcon={true}  handleAAPCircleClick={this.handleAAPCircleClick} />
                    </div></div>
            </MuiThemeProvider>
        );
    }
});


var SetAppointmentPage = React.createClass({
    handleAAPCircleClick: function() {
        console.log("new component");


        this.refs.setAppForm.show();
    },
    handleCardClick: function(appointment) {
        ////alert(bla);
        console.log("new component");
        this.refs.setAppForm.show(appointment);
    },
    getInitialState: function() {
        var personList=[];
        var _this = this;
        // var urlEnd = this.props.personType == 'Employee' ? 'showEmployees': 'showCustomers';
        // console.log("url: ",urlEnd);


        superagent
            .get(SiteURL.get + "showEmployees")
            .set('Accept', 'application/json')
            .end(function(err, res){
                if (err) {
                    console.log('error: ' , err);
                    console.log('response: ' , res);
                    _this.setState({personList : []});
                    _this.setState({allPersonsList : []});
                    //alert('Error!');
                    // reject(err);
                } else {
                    console.log('response: ' , res.text);
                    var data = JSON.parse(res.text);
                    _this.setState({personList : data});
                    _this.setState({allPersonsList : data});
                    // resolve(res.text);
                }
            });
        // fetch(SiteURL.get + "showEmployees")
        //     .then((response) => {
        //             if (response.status !== 200) {
        //                 console.log('Looks like there was a problem. Status Code: ' +
        //                     response.status);
        //                 this.setState({personList : []});
        //                 this.setState({allPersonsList : []});
        //                 return;
        //             }
        //
        //             // console.log(response.json());
        //             // Examine the text in the response
        //
        //             response.json().then((data)  => {
        //                 console.log(data);
        //                 this.setState({personList : data});
        //                 this.setState({allPersonsList : data});
        //             });
        //         }
        //     )
        //     .catch(function(err) {
        //         console.log('Fetch Error :-S', err);
        //     });
        return {
            data: this.props.data,
            value:1,
            // employeesList: this.getEmployees,
            personType: "employee",
            allPersonsList: [],
            personList: [],
            selectedPerson: window.strings.setAppointmentPage.selectEmployeeButtonAll
        };
    },
    getEmployees: function() {

        fetch(SiteURL.get + "showEmployees")
            .then((response) => {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);

                        return;
                    }

                    // console.log(response.json());
                    // Examine the text in the response

                    response.json().then((data)  => {
                        console.log(data);
                        return data;
                    });
                }
            )
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });
    },
    handleChange: function(event, index, value) {
        this.setState({value});
    },
    handleListClick: function(obj) {
        ////alert(obj.name);
        console.log("employee selected:",obj);
        this.setState({
            selectedPerson: window.strings.setAppointmentPage.selectEmployeeButton + obj.obj.name,
        });

        this.refs.availableAppointmentsCard.handleEmpSelected(obj.obj);
    },
    showChooseCustDialog: function(event) {

        this.setState({
            chooseDailog: true,
        });

        console.log(event.namespace);
        // this.setState({
        //     personType: "employee",
        // });
    },
    closeChooseCustDialog: function(event) {


        this.setState({
            chooseDailog: false,
        });

    },
    // filterList: function(event){
    //     this.setState({isFirstTime: false});
    //     ////alert(event.target.value.toLowerCase());
    //     var updatedList = this.state.employeesList;
    //     updatedList = updatedList.filter(function(item){
    //         return item.name.toLowerCase().search(
    //                 event.target.value.toLowerCase()) !== -1 || item.phone.toLowerCase().search(
    //                 event.target.value.toLowerCase()) !== -1
    //     });
    //     this.setState({
    //         personList: updatedList
    //     });
    // },
    render: function() {
        const DefaultAppBar = () => (
            <AppBar
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle : styles.appbarTitleOpenedDrawer}
                style={styles.appbar}
                iconStyleLeft={styles.appbarIconStyle}
                iconStyleRight={styles.appbarIconStyle}
                title={window.strings.setAppointmentPage.appbar.title}
                // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={this.props.openDrawer}
                //         iconElementRight={         //         <IconMenu         //         iconButtonElement={         //   <IconButton><MoreVertIcon /></IconButton>         // }         //         targetOrigin={{horizontal: 'right', vertical: 'top'}}         //         anchorOrigin={{horizontal: 'right', vertical: 'top'}}         //     >         //         <MenuItem primaryText="Sign out" />         //         <MenuItem primaryText="Settings" />         //         <MenuItem primaryText="About" />         //     </IconMenu>         //         }
            />
        );
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <DefaultAppBar/>
                    <div style={this.props.isDrawerDocked ? window.strings.css.pushContent : null}>
                        <div style={styles.toppad}></div>
                        <div style={{
                             position: 'fixed',
                             width: '100%',
                             right: this.props.isDrawerDocked ? '125px' : null,
                             // left: this.props.isDrawerDocked ? 250 : 0,
                             zIndex: '10'

                        }}>


                            <div style={styles.containerTop}>
                                <div style={styles.h1center}>
                                    <h2 style={styles.h1}>{window.strings.setAppointmentPage.h2Title}</h2>
                                    <br/>
                                </div>
                                <div style={styles.h1center}>
                                    <FlatButton backgroundColor={muiTheme.palette.canvasColor} onTouchTap={this.showChooseCustDialog} label={this.state.selectedPerson}/>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div style={styles.fixedblock}></div>
                        <AvailableAppointmentsCard superagent={superagent} ref="availableAppointmentsCard" handleCardClick={this.handleCardClick} />
                        <FloatingButton circleIcon={false} handleAAPCircleClick={this.handleAAPCircleClick}/>
                        <SetAppForm superagent={superagent} ref="setAppForm"/>
                        <SearchAndChooseDialog isAll={true} personList={this.state.personList} personType={'employee'} handleListClick={(obj) => {this.handleListClick(obj);}} open={this.state.chooseDailog} close={this.closeChooseCustDialog} />
                    </div></div>
            </MuiThemeProvider>
        );
    }
});


exports.SetAppointmentPage = SetAppointmentPage;
// exports.AppointmentsPage = AppointmentsPage;
export default AppointmentsPage;