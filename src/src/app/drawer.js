import React from 'react';
import ReactDOM from 'react-dom';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import {Menu, MenuItem} from 'material-ui/Menu';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FilterIcon from 'material-ui/svg-icons/content/filter-list';
import CustIcon from 'material-ui/svg-icons/action/supervisor-account';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import Avatar from 'material-ui/Avatar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Toggle from 'material-ui/Toggle';
import Event from 'material-ui/svg-icons/action/event';
import Settings from 'material-ui/svg-icons/action/settings';
import Image from 'material-ui/svg-icons/image/image';
import AccessTime from 'material-ui/svg-icons/device/access-time';
import Navigation from 'material-ui/svg-icons/maps/navigation';
import Phone from 'material-ui/svg-icons/communication/phone';
import About from 'material-ui/svg-icons/alert/error-outline';
import AvailableAppointmentsCard from './AvailableAppointmentsCard';
import EmpAndCustPage from './EmpAndCustPage';
import Pics from './openGallery';
import Navigate from './navigate';
import GoogleMapTest from './clickableMarkers';
import AddAppointmentCircle from './addAppointmentCircle';
import AppointmentTableModel from './AppointmentsList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import DatePicker from 'material-ui/DatePicker/DatePickerDialog';
import AvailableHours from './availhours';
import SetAppForm from './setAppForm';
import DropDownMenu from 'material-ui/DropDownMenu';
import {white, blue500, red500, greenA200} from 'material-ui/styles/colors';
import DateRange from './FilterBar';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import SearchIcon from 'material-ui/svg-icons/action/search';



const styles = {

    picsPage: {
            paddingTop: '17px',
            maxWidth:900,
            float: 'none',
            margin: '0 auto',
        },
    card: {
        // textAlign: 'center',
        height: 128,
        boxShadow: '0',
        backgroundImage:'url("http://media.rockstargames.com/rockstargames/img/global/news/upload/gtav_details09122014_006.jpg")',
        backgroundSize: 'contain',
    },
    hr:{
        display: 'block',
        borderStyle: 'inset',
        borderWidth: '7px',

    },
    cardimage: {
        // textAlign: 'center',
        // margingTop: 20,
        marginTop: 32,
    },
    cardheader: {
        // textAlign: 'center',
        // margingTop: 20,
        marginLeft: 11,
        color: 'white'
    },
    cardspacer: {
        // textAlign: 'center',
        // margingTop: 20,
       height:5
    },
    menulist: {
        // textAlign: 'center',
        // margingTop: 20,
       fontSize: '14px',
        paddingLeft: 55,
    },
    appbar: {
        // textAlign: 'center',
        // margingTop: 20,
       position:'fixed'
    },
    toppad: {
        // textAlign: 'center',
        // margingTop: 20,
       paddingTop: 64,
    },
    toppad1: {
        // textAlign: 'center',
        // margingTop: 20,
       paddingTop: 60,
    },
    h2: {
        // textAlign: 'center',
        // margingTop: 20,
       fontWeight: 400,
    },
    pageTitle: {
        // textAlign: 'center',
        // margingTop: 20,
       fontWeight: 500,
        color: '#00888c',
        margin: 0,
        paddingLeft: 16,
        paddingTop:34,
        fontSize: '16px',
    },
    h1: {
        // textAlign: 'center',
        // margingTop: 20,
       fontWeight: 400,
        color: 'cadetblue',
        marginLeft: '23%',
    },
    h1center: {
        float: 'none',
        margin: '0 auto',
    },
    carddd: {
        // textAlign: 'center',
        // margingTop: 20,
       maxWidth:650,
    },
    root: {
        // display: 'flex',
        // flexWrap: 'wrap',
        // justifyContent: 'space-around',
        maxWidth:650,
    },
    ohcard: {
        // display: 'flex',
        // flexWrap: 'wrap',
        // justifyContent: 'space-around',
        backgroundColor: 'rgb(226, 226, 226)',
        maxWidth:650,
        float: 'none',
        margin: '0 auto',
    },
    customWidth: {
        width: 700,
        maxWidth: '99%',
        fontSize: '23px',
        fontWeight: 'lighter',
    },
    inScroll: {
        position: 'fixed',
        width: '100%',
        zIndex: '10',
        backgroundColor: 'white'
    },
    fixedblock: {
        height: '120px',
    },
    containerTop: {
        paddingTop: '5px',
        paddingBottom: '15px',
        width:'100%',
        float: 'none',
        margin: '0 auto',
    },
    container: {
        paddingTop: 17,
        width: 1200,
        maxWidth:'95%',
        float: 'none',
        margin: '0 auto',
    },
    containerWithoutPadding: {
        width: 1200,
        maxWidth:'95%',
        float: 'none',
        margin: '0 auto',
    },
    editTextWidth:{
        width: '400px',
        maxWidth:'75%'
    },
    searchIcon:{
        height: '30px',
        width: '30px',
        marginTop: 13
    },

    centerDiv:{
        float: 'none',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center'
    },

};

var _this;

export default class DrawerUndockedExample extends React.Component {

    constructor(props) {
        super(props);
        // alert();

        // this.state = {open: false};
        this.state = {
            open: this.props.drawerState,
            headerTitle: "Scheduler",
            filterVisibility: false,
            opene: false,
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
        // this.state = {headerTitle: "Scheduler"};
        // this.state = {filterVisibility: "Scheduler"};
        // // this.state = {notificationsToggle: "Enabled"};
        // this.state = {opene: false};
        // this.state = {leftIcon: <IconMenu
        //     iconButtonElement={
        //   <IconButton><MoreVertIcon /></IconButton>
        // }
        //     targetOrigin={{horizontal: 'right', vertical: 'top'}}
        //     anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        // >
        //     <MenuItem primaryText="Sign out" />
        //     <MenuItem primaryText="Settings" />
        //     <MenuItem primaryText="About" />
        // </IconMenu>};



        this.handleToggle = this.handleToggle.bind(this);
        // this.handleNotificationsToggle = this.handleNotificationsToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleAccept = this.handleAccept.bind(this);
        this._handleStuff = this._handleStuff.bind(this);
        this.openSettingsPage = this.openSettingsPage.bind(this);
        // this.handleAAPCircleClick = this.handleAAPCircleClick.bind(this);
        // this.renderStuff= this.renderStuff.bind(this);

        // this.openSetAppointmentPaged = this.openSetAppointmentPaged.bind(this);
        this.openPicsPage = this.openPicsPage.bind(this);
        this.openNavigatePage = this.openNavigatePage.bind(this);
        this.openOHPage = this.openOHPage.bind(this);
        this.openEmployeesPage = this.openEmployeesPage.bind(this);
        this.openSetAppointmentPage = this.openSetAppointmentPage.bind(this);
        this.openAppointmentsPage = this.openAppointmentsPage.bind(this);
        this.openAppointmentTableModel = this.openAppointmentTableModel.bind(this);
        this.onBackButtonEvent = this.onBackButtonEvent.bind(this);


    }

    onBackButtonEvent(e) {
    e.preventDefault();
        alert();
    // this.goBack();
    }

    componentDidMount()  {
    window.onpopstate = this.onBackButtonEvent;
    }

    handleToggle(){

        this.setState({open: !this.state.open});
    }


    handleClose(){

        this.setState({open: false});
        // document.getElementById("app").innerHTML = "";
        window.scrollTo(0, 0);

    }

    openPicsPage()
    {
        this.setState({open: false});
        this.setState({headerTitle: "Pics"});
        this.handleClose();

        ReactDOM.render(
            <MuiThemeProvider>
                <div>
                    <div style={styles.toppad}></div>
                    <div style={styles.picsPage}>
                    <Pics />
                        </div>
                </div>
            </MuiThemeProvider>
            , document.getElementById('app'));
    }

    openNavigatePage()
    {
        this.setState({open: false});
        this.setState({headerTitle: "Navigate"});
        this.handleClose();

        ReactDOM.render(
           
                    <GoogleMapTest />

            , document.getElementById('app'));
    }

    // handleNotificationsToggle()
    // {
    //     alert(this.state.notificationsToggle);
    //
    //     if(this.state.notificationsToggle == "Enabled") {
    //         alert("shubidubi");
    //         this.setState({notificationsToggle: "Disabled"});
    //     }
    //     else if(this.state.notificationsToggle == "Disabled") {
    //         this.setState({notificationsToggle: "Enabled"});
    //     }
    //
    //
    // }

    openSettingsPage()
    {
        this.setState({open: false});
        this.setState({headerTitle: "Settings"});
        this.handleClose();
        this.setState({notificationsToggle: "Disabled"});

        ReactDOM.render(
            <MuiThemeProvider>
            <SettingsPage/>
                </MuiThemeProvider>

            , document.getElementById('app'));
    }

    openOHPage()
    {
        this.setState({open: false});
        this.setState({headerTitle: "Opening Hours"});
        this.handleClose();
        _this = this;


        // <div>
        //     <div style={styles.toppad}></div>
        //     <div style={styles.h1center}>
        //         <h2 style={styles.h1}>We're Available at This times...</h2>
        //     </div>
        //     <Card style={styles.ohcard}>
        //         <List style={{padding: '8px'}}>
        //             <ListItem   primaryText="Sunday" style={{backgroundColor: 'aliceblue'}}><div style={{float: 'right'}}>9:00-16:00</div></ListItem>
        //             <ListItem   primaryText="Monday" style={{backgroundColor: 'powderblue'}}><div style={{float: 'right'}}>9:00-16:00</div></ListItem>
        //             <ListItem   primaryText="Tuesday" style={{backgroundColor: 'aliceblue'}}><div style={{float: 'right'}}>9:00-16:00</div></ListItem>
        //             <ListItem   primaryText="Wednesday" style={{backgroundColor: 'powderblue'}}><div style={{float: 'right'}}>9:00-16:00</div></ListItem>
        //             <ListItem   primaryText="Thursday" style={{backgroundColor: 'aliceblue'}}><div style={{float: 'right'}}>9:00-16:00</div></ListItem>
        //             <ListItem   primaryText="Friday" style={{backgroundColor: 'powderblue'}}><div style={{float: 'right'}}>Closed</div></ListItem>
        //             <ListItem   primaryText="Saturday"style={{backgroundColor: 'aliceblue'}}><div style={{float: 'right'}}>Closed</div></ListItem>
        //         </List>
        //     </Card>
        // </div>
        ReactDOM.render(
            <MuiThemeProvider>
               <OpeningHoursPage/>
            </MuiThemeProvider>
            , document.getElementById('app')); 
    }

    openEmployeesPage()
    {
        this.setState({open: false});
        this.setState({headerTitle: "Employees"});
        this.handleClose();
        _this = this;


        // <div>
        //     <div style={styles.toppad}></div>
        //     <div style={styles.h1center}>
        //         <h2 style={styles.h1}>We're Available at This times...</h2>
        //     </div>
        //     <Card style={styles.ohcard}>
        //         <List style={{padding: '8px'}}>
        //             <ListItem   primaryText="Sunday" style={{backgroundColor: 'aliceblue'}}><div style={{float: 'right'}}>9:00-16:00</div></ListItem>
        //             <ListItem   primaryText="Monday" style={{backgroundColor: 'powderblue'}}><div style={{float: 'right'}}>9:00-16:00</div></ListItem>
        //             <ListItem   primaryText="Tuesday" style={{backgroundColor: 'aliceblue'}}><div style={{float: 'right'}}>9:00-16:00</div></ListItem>
        //             <ListItem   primaryText="Wednesday" style={{backgroundColor: 'powderblue'}}><div style={{float: 'right'}}>9:00-16:00</div></ListItem>
        //             <ListItem   primaryText="Thursday" style={{backgroundColor: 'aliceblue'}}><div style={{float: 'right'}}>9:00-16:00</div></ListItem>
        //             <ListItem   primaryText="Friday" style={{backgroundColor: 'powderblue'}}><div style={{float: 'right'}}>Closed</div></ListItem>
        //             <ListItem   primaryText="Saturday"style={{backgroundColor: 'aliceblue'}}><div style={{float: 'right'}}>Closed</div></ListItem>
        //         </List>
        //     </Card>
        // </div>
        ReactDOM.render(
            <MuiThemeProvider>
               <EmployeesPage/>
            </MuiThemeProvider>
            , document.getElementById('app'));
    }
    _handleStuff()
    {
        alert();
        console.log(this);


        // _this.setState({filterVisibility: true});
        // console.log(this);
        // alert(this.state.filterVisibility);
    }

    openAppointmentTableModel()
    {
        // this._handleStuff();
        // this.setState({filterVisibility: "Settings"});
        // alert(this.state.filterVisibility);

        // alert();
        _this = this;
        // console.log(this);
    //     const fd = (<div><IconButton onTouchTap={ (e) => {e.preventDefault(); this._handleStuff();}}><FilterIcon color={white}/></IconButton><IconMenu
    //     iconButtonElement={
    //       <IconButton><MoreVertIcon color={white}/></IconButton>
    //     }
    //     targetOrigin={{horizontal: 'right', vertical: 'top'}}
    //     anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    // >
    //     <MenuItem primaryText="Sign out" />
    //     <MenuItem primaryText="Settings" />
    //     <MenuItem primaryText="About" />
    // </IconMenu></div>);
    //
    //     this.setState({leftIcon: fd});
        ReactDOM.render(
            <MuiThemeProvider>
                <Search/>
            </MuiThemeProvider>
            , document.getElementById('app'));
    }
    openSetAppointmentPage()
    {


        this.setState({open: false});
        this.setState({headerTitle: "Set Appointment"});
        this.handleClose();


        ReactDOM.render(
            <MuiThemeProvider>
                <SetAppointmentPage/>
            </MuiThemeProvider>
            , document.getElementById('app'));
    }

    openAppointmentsPage()
    {

        this.setState({open: false});
        this.setState({headerTitle: "Appointments"});
        // this.handleClose();

        this.props.onRequestChange();
    //     const dateAndHours = () => (
    //         <div>
    //             <DatePicker open={this.state.opene}
    //             ref='dialogWindow'
    //             container='dialog'
    //             firstDayOfWeek={0}
    //             onAccept={this.handleAccept}/>
    //            <AvailableHours ref="AHDialog"/>
    //         </div>
    // );

        // ReactDOM.render(
        //     <MuiThemeProvider>
        //         <div>
        //             <div style={styles.toppad}></div>
        //             <div style={styles.h1center}>
        //             <h2 style={styles.h1}>Closest Available Hours</h2>
        //             </div>
        //             <AvailableAppointmentsCard />
        //             <AvailableAppointmentsCard />
        //             <AvailableAppointmentsCard />
        //             <AvailableAppointmentsCard />
        //             <AvailableAppointmentsCard />
        //             <AvailableAppointmentsCard />
        //             <AvailableAppointmentsCard />
        //             <AvailableAppointmentsCard />
        //             <AvailableAppointmentsCard />
        //             <AddAppointmentCircle handleAAPCircleClick={this.handleAAPCircleClick}/>
        //             <SetAppForm ref="setAppForm"/>
        //
        //         </div>
        //     </MuiThemeProvider>
        //     , document.getElementById('app'));

        const AppBarExampleIcon = () => (
            <AppBar
                style={styles.appbar}
                title={"Appointments"}
                // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={this.handleToggle}
                iconElementRight={
                <IconMenu
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
                }
            />
        );

        ReactDOM.render(
            <MuiThemeProvider>
                <div>
                <AppBarExampleIcon/>
                <div style={styles.toppad}></div>
                <List style={{padding: "12px"}}>
                    <ListItem   style={{padding: "9px 0"}} primaryText="Appointments" onTouchTap={this.openAppointmentTableModel.bind(this)}/>
                    <Divider/>
                    <ListItem   style={{padding: "9px 0"}} primaryText="By Employee" onTouchTap={this.openAppointmentTableModel.bind(this)}/>
                    <Divider/>
                    <ListItem   style={{padding: "9px 0"}} primaryText="By Customer" onTouchTap={this.openAppointmentTableModel.bind(this)}/>
                    <Divider/>
                    <ListItem   style={{padding: "9px 0"}} primaryText="History" onTouchTap={this.openSetAppointmentPage.bind(this)}/>
                    <Divider/>
                    <ListItem   style={{padding: "9px 0"}} primaryText="Today's Appointments" onTouchTap={this.openSetAppointmentPage.bind(this)}/>
                    <Divider/>
                </List>
                    <AddAppointmentCircle circleIcon={true} handleAAPCircleClick={this.openSetAppointmentPage.bind(this)}/>
                </div>
            </MuiThemeProvider>
            , document.getElementById('app'));
    }

    handleAAPCircljbeClick (event){


        // this.setState({open: !this.state.open});
        // alert("float click");
        // console.log(this);
        // this.refs.setAppForm.show();

    }

    handleAccept(date) {
        this.refs.AHDialog.show(date);
    }
    handleDrawerClose(date) {

    }

// <MenuItem innerDivStyle={styles.menulist} onTouchTap={this.openPicsPage} leftIcon={<About/>}>About</MenuItem>*/
// <MenuItem innerDivStyle={styles.menulist} onTouchTap={this.openPicsPage}  leftIcon={<Settings/>}>Settings</MenuItem>
    render() {
        const CardExampleWithAvatar = () => (
            <Card style={styles.card}>
                <div style={styles.cardheader}>
                <Avatar
                    src="http://www.material-ui.com/images/uxceo-128.jpg"
                    style={styles.cardimage}
                /><br/>
                <b>Aviya Omesi</b><br/>
                <b>aviyaomesi@gmail.com</b>
                </div>
            </Card>
        );
        const AppBarExampleIcon = () => (
            <AppBar
                style={styles.appbar}
                title={this.state.headerTitle}
                // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={this.handleToggle}
                iconElementRight={this.state.leftIcon}
            />
        );
        return (
            <div>
                <Drawer
                    docked={false}
                    width={250}
                    open={this.props.drawerState}
                    onRequestChange={this.props.onRequestChange}
                >
                    <CardExampleWithAvatar/>
                    <div style={styles.cardspacer}></div>
                    <MenuItem innerDivStyle={styles.menulist} onTouchTap={this.openAppointmentsPage.bind(this)} leftIcon={<Event/>}>Appointments</MenuItem>
                    <MenuItem innerDivStyle={styles.menulist} onTouchTap={this.openEmployeesPage.bind(this)} leftIcon={<CustIcon/>}>Employees</MenuItem>
                    <MenuItem innerDivStyle={styles.menulist} onTouchTap={this.openEmployeesPage.bind(this)} leftIcon={<CustIcon/>}>Customers</MenuItem>
                    <MenuItem innerDivStyle={styles.menulist} onTouchTap={this.openOHPage.bind(this)} leftIcon={<AccessTime/>}>Opening Hours</MenuItem>
                    <MenuItem innerDivStyle={styles.menulist} onTouchTap={this.openPicsPage.bind(this)} leftIcon={<Image/>}>Pictures</MenuItem>
                    <MenuItem innerDivStyle={styles.menulist} onTouchTap={this.openNavigatePage} leftIcon={<Navigation/>}>Navigate</MenuItem>
                    <MenuItem innerDivStyle={styles.menulist} onTouchTap={this.openPicsPage} leftIcon={<Phone/>}>Contact Us</MenuItem>

                    <Divider />
                        <MenuItem primaryText="Settings" onTouchTap={this.openSettingsPage.bind(this)}/>
                        <MenuItem primaryText="About" />
                </Drawer>
             

            </div>
        );
    }
}

var Search = React.createClass({
    getInitialState: function() {
        return { showResults: false };
    },
    componentDidMount: function() {
        const filterAndMenuBtn = (<div><IconButton onTouchTap={ (e) => {/*e.preventDefault();*/ this.onClick();}}><FilterIcon color={white}/></IconButton><IconMenu
            iconButtonElement={
          <IconButton><MoreVertIcon color={white}/></IconButton>
        }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
            <MenuItem primaryText="Sign out" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="About" />
        </IconMenu></div>);

        _this.setState({leftIcon: filterAndMenuBtn});
        // console.log(this._child.someMethod()); // Prints 'bar'
    },
    onClick: function() {
        if(this.state.showResults)
        this.setState({ showResults: false });
        else this.setState({ showResults: true });
    },
    render: function() {
        return (
            <div>
                <div style={styles.toppad}></div>
                { this.state.showResults ? <FilterBar onFilter={this.onClick}/> : null }
                <AppointmentTableModel/>

            </div>
        );
    }
});

const tilesData = [
    {
        strDay: 'Sunday',
        fromHour: '9:00',
        toHour: '16:00'
    },
    {
        strDay: 'Monday',
        fromHour: '9:00',
        toHour: '16:00'
    },
    {
        strDay: 'Tuesday',
        fromHour: '9:00',
        toHour: '16:00'
    },
    {
        strDay: 'Wednesday',
        fromHour: '9:00',
        toHour: '16:00'
    },
    {
        strDay: 'Thursday',
        fromHour: '9:00',
        toHour: '16:00'
    },
    {
        strDay: 'Friday',
        fromHour: null,
        toHour: null
    },
    {
        strDay: 'Saturday',
        fromHour: null,
        toHour: null
    },

];

var OpeningHoursPage = React.createClass({
    getInitialState: function() {

        return { showResults: true };
    },
    componentDidMount: function() {
        const filterAndMenuBtn = (<div><IconButton onTouchTap={ (e) => {/*e.preventDefault();*/ this.onClick();}}><EditIcon color={white}/></IconButton><IconMenu
            iconButtonElement={
          <IconButton><MoreVertIcon color={white}/></IconButton>
        }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
            <MenuItem primaryText="Sign out" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="About" />
        </IconMenu></div>);

        _this.setState({leftIcon: filterAndMenuBtn});
        // console.log(this._child.someMethod()); // Prints 'bar'
    },
    onClick: function() {
        if(this.state.showResults)
        this.setState({ showResults: false });
        else this.setState({ showResults: true });
    },
    render: function() {
        return (
            <div>
                <div style={styles.toppad}></div>
                <div style={styles.h1center}>
                    <h2 style={styles.h1}>We're Available at This times...</h2>
                </div>
                <Card style={styles.ohcard}>

                        <List style={{padding: '8px'}}>
                            {tilesData.map((tile) => (
                                <ListItem

                                    style={{width:'100%', backgroundColor: 'aliceblue',paddingRight: 15, paddingLeft: 15}}
                                >
                                    <i style={{width: '50%', display: 'table-cell',fontWeight: 400, fontSize: '18px'}}>{tile.strDay}</i>
                                    <span style={{width: '200px', display: 'table-cell'}}/>
                                    { this.state.showResults ? <i style={{width: '30%', display: 'table-cell', textAlign: 'right'}}>{tile.fromHour + "-" + tile.toHour}</i> :  <div><TimePicker
                                        hintText="from"
                                        autoOk={true}
                                    /> <TimePicker
                                        hintText="to"
                                        autoOk={true}
                                        /></div>}
                                </ListItem>
                            ))}
                        </List>
                    { this.state.showResults ? null : <RaisedButton primary={true} label="Submit" fullWidth={true} /> }
                </Card>

            </div>
        );
    }
});


var EmployeesPage = React.createClass({
    getInitialState: function() {

        return { showResults: false,
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
    },
    componentDidMount: function() {
        // const filterAndMenuBtn = (<div><IconButton onTouchTap={ (e) => {/*e.preventDefault();*/ this.onClick();}}><SearchIcon color={white}/></IconButton><IconMenu
        //     iconButtonElement={
        //   <IconButton><MoreVertIcon color={white}/></IconButton>
        // }
        //     targetOrigin={{horizontal: 'right', vertical: 'top'}}
        //     anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        // >
        //     <MenuItem primaryText="Sign out" />
        //     <MenuItem primaryText="Settings" />
        //     <MenuItem primaryText="About" />
        // </IconMenu></div>);
        //
        // _this.setState({leftIcon: filterAndMenuBtn});
        // console.log(this._child.someMethod()); // Prints 'bar'
    },
    onClick: function() {
        if(this.state.showResults)
        this.setState({ showResults: false });
        else this.setState({ showResults: true });
    },
    render: function() {
        const AppBarExampleIcon = () => (
            <AppBar
                style={styles.appbar}
                title={this.state.headerTitle}
                // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={this.handleToggle}
                iconElementRight={this.state.leftIcon}
            />
        );
        return (
            <div>
                <div style={styles.toppad}></div>
                { this.state.showResults ? <FilterBar onFilter={this.onClick}/> : null }

                <EmpAndCustPage handleCardClick={this.handleCardClick} />
                <AddAppointmentCircle circleIcon={true} handleAAPCircleClick={this.handleAAPCircleClick}/>
                <SetAppForm ref="setAppForm"/>
                <AppBarExampleIcon/>

            </div>
        );
    }
});

var AppByCustPage = React.createClass({
    getInitialState: function() {

        return { showResults: false };
    },
    componentDidMount: function() {
        const filterAndMenuBtn = (<div><IconButton onTouchTap={ (e) => {/*e.preventDefault();*/ this.onClick();}}><FilterIcon color={white}/></IconButton><IconMenu
            iconButtonElement={
          <IconButton><MoreVertIcon color={white}/></IconButton>
        }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
            <MenuItem primaryText="Sign out" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="About" />
        </IconMenu></div>);

        _this.setState({leftIcon: filterAndMenuBtn});
        // console.log(this._child.someMethod()); // Prints 'bar'
    },
    onClick: function() {
        if(this.state.showResults)
        this.setState({ showResults: false });
        else this.setState({ showResults: true });
    },
    render: function() {
        return (
            <div>
                <div style={styles.toppad}></div>
                { this.state.showResults ? <FilterBar onFilter={this.onClick}/> : null }

                <EmpAndCustPage handleCardClick={this.handleCardClick} />
                <AddAppointmentCircle circleIcon={true} handleAAPCircleClick={this.handleAAPCircleClick}/>
                <SetAppForm ref="setAppForm"/>

            </div>
        );
    }
});

var FilterBar = React.createClass({
    render: function() {
        return (
            <div>
            <Card zDepth={5} style={{padding:"16px", backgroundColor: "white",position:"fixed", zIndex:1, width: '100%'}}>
                <div style={styles.containerWithoutPadding}>
                <DateRange onFilter={this.props.onFilter}/>
                </div>
            </Card>

            </div>
        );
    }
});

var SetAppointmentPage = React.createClass({
    handleAAPCircleClick: function() {
        console.log("new component");
        this.refs.setAppForm.show();
    },
    handleCardClick: function(date,time) {
        // alert(bla);
        console.log("new component");
        this.refs.setAppForm.show(date,time);
    },
    getInitialState: function() {
        return {data: this.props.data,
                value:1};
    },
    handleChange: function(event, index, value) {
        this.setState({value});
    },
    render: function() {
        return (
            <div>
            <div style={styles.toppad}></div>
                <div style={styles.inScroll}>

               
                    <Card zDepth={3}
                          style={styles.containerTop}>

                        <div style={styles.h1center}>
                            <h2 style={styles.h1}>Closest Available Hours</h2>
                        </div>
                        <DropDownMenu
                            value={this.state.value}
                            onChange={this.handleChange}
                            style={styles.customWidth}
                            autoWidth={false}
                        >
                            <MenuItem value={1} primaryText="All Employees" />
                            <MenuItem value={2} primaryText="Every Night" />
                            <MenuItem value={3} primaryText="Weeknights" />
                            <MenuItem value={4} primaryText="Weekends" />
                            <MenuItem value={5} primaryText="Weekly" />
                        </DropDownMenu>
                    </Card>
                </div>
                <div style={styles.fixedblock}></div>
            <AvailableAppointmentsCard handleCardClick={this.handleCardClick} />
            <AddAppointmentCircle circleIcon={false} handleAAPCircleClick={this.handleAAPCircleClick}/>
            <SetAppForm ref="setAppForm"/>

        </div>
        );
    }
});

var AppointmentsList = React.createClass({
    handleAAPCircleClick: function() {
        console.log("new component");
        this.refs.setAppForm.show();
    },
    handleCardClick: function(date,time) {
        // alert(bla);
        console.log("new component");
        this.refs.setAppForm.show(date,time);
    },
    getInitialState: function() {
        return {data: this.props.data,
                value:1};
    },
    handleChange: function(event, index, value) {
        this.setState({value});
    },
    render: function() {
        return (
            <div>

                <div style={styles.inScroll}>
            <div style={styles.h1center}>
                <h2 style={styles.h1}>Closest Available Hours</h2>
            </div>

                    <Card zDepth={3}
                          style={styles.containerTop}>
                        <DropDownMenu
                            value={this.state.value}
                            onChange={this.handleChange}
                            style={styles.customWidth}
                            autoWidth={false}
                        >
                            <MenuItem value={1} primaryText="Custom width" />
                            <MenuItem value={2} primaryText="Every Night" />
                            <MenuItem value={3} primaryText="Weeknights" />
                            <MenuItem value={4} primaryText="Weekends" />
                            <MenuItem value={5} primaryText="Weekly" />
                        </DropDownMenu>
                    </Card>
                </div>
                <div style={styles.fixedblock}></div>
            <AvailableAppointmentsCard handleCardClick={this.handleCardClick} />
            <AddAppointmentCircle handleAAPCircleClick={this.handleAAPCircleClick}/>
            <SetAppForm ref="setAppForm"/>

        </div>
        );
    }
});

var SettingsPage = React.createClass({
    handleNotificationsToggle()
    {
        // alert(this.state.notificationsToggle);

        if(this.state.notificationsToggle == "Enabled") {
            this.setState({notificationsToggle: "Disabled"});
        }
        else if(this.state.notificationsToggle == "Disabled") {
            this.setState({notificationsToggle: "Enabled"});
        }


    },
    handleNightModeToggle()
    {
        // alert(this.state.notificationsToggle);

        if(this.state.nightModeToggle == "On") {
            this.setState({nightModeToggle: "Off"});
        }
        else if(this.state.nightModeToggle == "Off") {
            this.setState({nightModeToggle: "On"});
        }


    },
    getInitialState: function() {
        return {
            data: this.props.data,
            notificationsToggle: "Enabled",
            nightModeToggle: "Off",
        };
    },
    render: function() {
        return (
        <div>
        <div style={styles.toppad}></div>
        <List>
        <h2 style={styles.pageTitle}>General</h2>
        <ListItem primaryText="Theme color" secondaryText="Blue"/>
        <Divider/>
        <ListItem  secondaryText={this.state.nightModeToggle}>
            <Toggle
                label="Night mode"
                defaultToggled={true}
                onToggle={this.handleNightModeToggle}
            />
        </ListItem>
        <h2 style={styles.pageTitle}>Notifications</h2>
        <ListItem  secondaryText={this.state.notificationsToggle}> <Toggle
        label="Show/Hide notifications"
        defaultToggled={true}
        onToggle={this.handleNotificationsToggle}
        /></ListItem>
        <h2 style={styles.pageTitle}>Account</h2>
        <ListItem primaryText="Guest mode"
        secondaryText="Let a friend connect as guest"/>
        <Divider/>
        <ListItem primaryText="Log out"
        secondaryText=""/>
        </List>
        </div>
        );
    }
});