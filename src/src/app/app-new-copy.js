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
import Drawer1 from './drawer1';

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
import SearchAndChooseDialog from './SearchAndChooseDialog';
import FontIcon from 'material-ui/FontIcon';
import Settings from 'material-ui/svg-icons/action/settings';
// import About from 'material-ui/svg-icons/alert/error-outline';
import AvailableAppointmentsCard from './AvailableAppointmentsCard';
import EmpAndCustPage from './EmpAndCustPage';
import Pics from './openGallery';
import Navigate from './navigate';
import GoogleMapTest from './clickableMarkers';
// import AddAppointmentCircle from './addAppointmentCircle';
// import AppointmentTableModel from './AppointmentTableModel';
import AppointmentsList from './AppointmentsList';
import TableModel from './TableModel';
import {List, ListItem} from 'material-ui/List';
import DatePicker from 'material-ui/DatePicker/DatePickerDialog';
import AvailableHours from './availhours';
import SetAppForm from './setAppForm';
import DropDownMenu from 'material-ui/DropDownMenu';
import {black, white, cyan500,grey900,blue500, red500, greenA200,orange500} from 'material-ui/styles/colors';
import DateRange from './FilterBar';
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
import FacebookButton from '../SVG/FacebookIcon/Facebook';
import {GridList, GridTile} from 'material-ui/GridList';
import SiteURL from './site-url';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import DateRangeIcon from 'material-ui/svg-icons/action/date-range';
import moment from 'moment'
import ReactUploadFile from './uploadFile';
import CircularProgress from 'material-ui/CircularProgress';



var pathname = location.pathname;
// var isCheckAuthDone = false;
injectTapEventPlugin();


var defaults = require('superagent-defaults');

// Create a defaults context
var superagent = defaults();
function setAjaxAuthHeader(){
try {
    var token = JSON.parse(window.localStorage.getItem('token')).token;

// Setup some defaults

    superagent
        .set({'Accept': 'application/json', 'Authorization': token})
        .on('request', function (req) {
            console.log(req.url);
        });
}
catch(e)
{
    superagent
        .set({'Accept': 'application/json'})
        .on('request', function (req) {
            console.log(req.url);
        });
}
}

////alert(location.pathname);
// checkAuth();
function checkAuth(){
    console.log(pathname);
    if(window.localStorage.getItem('token') == null && pathname !== '/login'){
        window.location.href = "http://localhost:8899/login";
    }
    else if(pathname !== '/login')
    {
        // if(window.localStorage.getItem('user') == null) {
            // var token = JSON.parse( window.localStorage.getItem('token')).token;

            // var _ReactDOM = ReactDOM;
            getUser().then(function (user) {
                var serverToken = user;

                window.localStorage.setItem("user", user);

                console.log('user:', JSON.parse(user));

                // isCheckAuthDone = true;lkmlkm
                run();
            });
        // }

    }
    // else {
    //
    //      }
}

function setTheme(color)
{
    themeColor = color;
    muiTheme = getMuiTheme({
        palette: {
            accentColor: themeColor
        },
        appBar: {
            textColor: textColor,
            color: themeColor
        },
        tabs:{
            backgroundColor: themeColor,
            textColor: textColor
        }
    });
    document.querySelector('#themeColorCss').innerHTML = ".themeColor { background-color:" + themeColor + "}";

}
function run()
{
    // ReactDOM.render(
    //     <BasicExample />,
    //     document.getElementById('header')
    // );
}

function getUser() {
//               //alert('/login');
    return new Promise(function (resolve, reject) {

        superagent
            .get(SiteURL.url + 'userinfo')
            // .set('Authorization', JSON.parse( window.localStorage.getItem('token')).token)
            .end(function(err, res){
                if (err) {
                    console.log('error: ' , err);
                    console.log('response: ' , res);

                    window.localStorage.removeItem('token');
                    // window.location.href = "http://localhost:8899/login";

                    reject(err);
                } else {
                    console.log('response: ' , res.text);
                    resolve(res.text);
                }
            });
    });
}

// var BrowserHistory = require('react-router/lib/BrowserHistory').default;
// import {
//     blue300,
//     indigo900,
//     orange200,
//     deepOrange300,
//     pink400,
//     purple500,
// } from 'material-ui/styles/colors';

var textColor = white;
var themeColor = cyan500;
let muiTheme = getMuiTheme({
    palette: {
        accentColor: themeColor,
    },
    appBar: {
        textColor: textColor,
        color: themeColor
    },
    tabs:{
        backgroundColor: themeColor,
        textColor: textColor
    }
});
const muiThemeWhite = getMuiTheme({
    palette: {
        accentColor: grey900,
    },
    appBar: {
        textColor: grey900,
        color: white
    },
});
const icons = {
    smallIcon: {
        width: 36,
        height: 36,
    },
    mediumIcon: {
        width: 48,
        height: 48,
        color: 'rgb(118, 118, 118)',
    },
    largeIcon: {
        width: 70,
        height: 70,
        color: '#e91e63',
        display: 'flex',
        justifyContent: 'center'
    },
    small: {
        width: 72,
        height: 72,
        padding: 16,
    },
    medium: {
        width: 96,
        height: 96,
        padding: 24,
    },
    large: {
        width: 100,
        height: 100,
        padding: 15,
        // padding: 30,
        fontSize: 14
    },
    largeMargin: {
        width: 120,
        height: 120,
        padding: 30,
        fontSize: 14,
        marginRight: '13px'
    },
};
const style = {margin: 5};
const styles = {
    divheader: {
        backgroundColor: 'rgb(232, 232, 232)',
        // padding: 10 ,
        fontWeight:400,
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        color: 'darkcyan',
        padding: 12
    },
    picsPage: {
        paddingTop: '17px',
        maxWidth:900,
        float: 'none',
        margin: '0 auto',
    },
    p: {
        fontSize: '29px',
        color: 'rgb(218, 218, 218)',
        fontWeight: '500',
        float: 'none',
        margin: '0 auto',
        textShadow: 'rgb(185, 185, 185) 0.3px 1.3px',
        width: '500px',
        paddingTop: '140px'
    },
    card: {
        // textAlign: 'center',
        height: 128,
        boxShadow: '0',
        // backgroundImage:'url("http://media.rockstargames.com/rockstargames/img/global/news/upload/gtav_details09122014_006.jpg")',
        // backgroundSize: 'contain',
        backgroundColor: 'none',
        // cursor: 'pointer'
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
        fontSize:14,
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
    appbarHome: {
        // textAlign: 'center',
        // margingTop: 20,
        // position:'fixed'
        position:'fixed',
        boxShadow: 'none'
    },
    appbarTitle: {
        // textAlign: 'center',
        // margingTop: 20,
        marginLeft: 194,
        fontSize: 31
    },
    pushContent: {
        // textAlign: 'center',
        // margingTop: 20,
        marginLeft: 250
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
    homePageTitle: {
        // textAlign: 'center',
        // margingTop: 20,
        fontWeight: 500,
        color: '#00888c',
        margin: 0,
        padding: '6px 16px',
        fontSize: '16px',
        // backgroundColor: 'burlywood'
    },
    h1: {
        // textAlign: 'center',
        // margingTop: 20,
        fontWeight: 400,
        color: 'cadetblue',
    },
    h1center: {
        display: 'flex',
        justifyContent: 'center'
    },
    editTextWidth1:{
        width: '400px',
        maxWidth:'75%'
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

        maxWidth:650,
        float: 'none',
        margin: '0 auto',
        marginTop: 20,
    },
    customWidth: {
        width: 700,
        maxWidth: '99%',
        fontSize: '23px',
        fontWeight: 'lighter',
    },
    inScroll: {
        position: 'fixed',
        right: 0,
        left: 0,
        zIndex: '10',
        background: '#afafaf'
    },
    fixedblock: {
        height: '136px',
    },
    containerTop: {
        paddingTop: '10px',
        paddingBottom: '10px',
        width:'100%',
        float: 'none',
        margin: '0 auto',
        backgroundColor: 'white'
    },
    container: {
        paddingTop: 17,
        width: 1200,
        maxWidth:'95%',
        float: 'none',
        margin: '0 auto',
    },
    containerWithoutPadding: {
        width: 626,
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
    container11: {
        // textAlign: 'center',
        // paddingTop: 200,
    },
    container111: {
        // textAlign: 'center',
        // paddingTop: 200,
        maxWidth:700,
        float: 'none',
        margin: '0 auto',
        height: '150pt',
        padding: 10,
        paddingBottom: 40,
        boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
        borderRadius: '2px'
    },
    checkbox: {
        marginLeft: 10,
        marginBottom: 8,
    },
    button: {
        margin: 12,
    },
    exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
    },
    smallIcon: {
        width: 46,
        height: 46,
    },
    smallestIcon: {
        width: 36,
        height: 36,
    },
    smallerIcon: {
        width: 30,
        height: 30,
    },
    mediumIcon: {
        width: 48,
        height: 48,
    },
    mediumIcon1: {
        height: 42,
        width: 42,
        color: 'white'
    },
    largeIcon: {
        width: 60,
        height: 60,
    },
    small: {
        width: 72,
        height: 72,
        padding: 16,
        display: 'inline-flex'
    },
    smallest: {
        width: 72,
        height: 72,
        padding: 16,
        display: 'inline-flex',
        top: '2px',
        left: '2px'
    },
    smaller: {
        width: 52,
        height: 52,
        padding:11,
        display: 'inline-flex'
    },
    medium: {
        width: 76,
        height: 80,
        padding: 0,
    },
    mediumWithMargin: {
        width: '100%',
        height: 113,
        padding: 0,
        verticalAlign: 'middle'
    },
    large: {
        width: 100,
        height: 100,
        padding: 30,
    },
    facebookLogin: {
        width: 45,
        height: 45,
        padding: 0,
        marginBottom: 5,
        marginLeft: 5
    },
    root1: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',

    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
    },
    gridList1: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        margin: '-2px auto',
        width: '91%',
        // backgroundColor: 'white'
    },
    gridList11: {
        width: '100%',
        // height: 450,
        margin: 0,
        overflowY: 'none',
    },
    BName: {
        fontSize: 36,
        position: 'absolute',
        margin: 15,
        fontWeight: 600
    },
    Address: {
        fontSize: 28,
        position: 'absolute',
        margin: 15,
        width: 500,
        maxWidth: '90%',
        wordWrap: 'break-word',
        color: 'darkgoldenrod'
    },
    ATitle: {
        fontSize: 22,
        verticalAlign: 'top',
        // position: 'absolute',
        // marginTop: 19,

    },
    underlineStyle: {
        borderColor: blue500,
    },

};


var BasicExample = React.createClass({
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
        document.querySelector('#themeColorCss').innerHTML = ".themeColor { background-color:" + muiTheme.palette.accentColor + "}";

        return {data: this.props.data,
            value:1,
            drawerState: !isMobile.any(),
            isDrawerDocked: !isMobile.any(),
            openSecondary: false,
            userEmail: '',
            userName: '',
            isLoggedIn: false
        };
    },
    handleChange: function(event, index, value) {
        this.setState({value});
    },
    componentWillMount: function() {
        let lang = window.localStorage.getItem('lang');
        if(lang != null){
            var langSet = window.strings.setLanguage(lang);

            // Promise.all(langSet).then(function(results) {
            //    //alert(window.strings.isRTL);
            if(window.strings.isRTL){
                // alert(window.css.pushContent);
                styles.pushContent = {marginRight : window.strings.css.pushContent};
                document.querySelector('body').dir = "rtl";
                this.setState({
                    openSecondary: true});

            }
            else window.css = {pushContent: 250};
            // });
        }
        let theme = window.localStorage.getItem('theme');
        if(theme != null){
            setTheme(theme);
        }
        if(window.localStorage.getItem("token") !== null && window.localStorage.getItem("user") !== null && pathname == "/login")
        {
            pathname = "/";
            this.context.History.push('/');
        }
        document.body.style.overflow = 'auto';
    },
    changeDrawerState: function() {

        if(!isMobile.any()) {
            this.setState({
                isDrawerDocked: !this.state.isDrawerDocked,
                drawerState: !this.state.isDrawerDocked});

        }
        else this.setState({drawerState: !this.state.drawerState});



    },
    switchToRTL: function() {

        this.setState({openSecondary: true});

    },
    setUser: function(name, email){
        this.setState({
            userEmail: email,
            userName: name
        });
    },
    setIsLoggedIn: function(isLoggedIn){
        //alert('setIsLoggedIn');
        this.setState({
            isLoggedIn: isLoggedIn
        });
    },
    render: function() {

        return (

            <Router history={History}>
                <div style={styles.container11}>
                    {this.state.isLoggedIn ?
                        <NavigationDrawer  openSecondary={this.state.openSecondary} onRequestChange={this.changeDrawerState} isDrawerDocked={this.state.isDrawerDocked} drawerState={this.state.drawerState} userEmail={this.state.userEmail} userName={this.state.userName}/>
                        :null}



                    <Switch>
                        <PropsRoute  exact path="/" component={checkAuth1} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} setUser={this.setUser} setIsLoggedIn={this.setIsLoggedIn}/>
                        <Route exact path="/first" component={test}/>
                        <PropsRoute path='/settings' component={SettingsPage} isDrawerDocked={this.state.isDrawerDocked} switchToRTL={this.switchToRTL} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/userprofile' component={UserProfilePage} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/absenceslist' superagent={superagent} component={TableModel} listType={3} isMobile={true} muiTheme={muiTheme} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/employees' component={EmployeesPage}  personType="Employee" isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/customers' component={EmployeesPage}  personType="Customer" isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/setnewcustomer' component={SetNewPersonPage} personType={'Customer'} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/setnewemployee' component={SetNewPersonPage} personType={'Employee'} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/appointments' component={AppointmentsPage} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/absences' component={AbsencesPage} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/openinghours' component={OpeningHoursPage} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/appointmentslist' superagent={superagent} component={AppointmentsList} listType={0} isMobile={true} muiTheme={muiTheme} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/appointmentslistbyemployee' superagent={superagent} component={AppointmentsList} listType={1} isMobile={true} muiTheme={muiTheme} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/appointmentslistbycustomer' superagent={superagent} component={AppointmentsList} listType={2} isMobile={true} muiTheme={muiTheme} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/appointmentslisthistory' superagent={superagent} component={AppointmentsList} listType={3} isMobile={true} muiTheme={muiTheme} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/appointmentslisttoday' superagent={superagent} component={AppointmentsList} listType={4} isMobile={true} muiTheme={muiTheme} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/appointmentsemployee' superagent={superagent} component={AppointmentsList} listType={1} isMobile={true} muiTheme={muiTheme} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/setappointment' component={SetAppointmentPage} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/navigate' component={NavigatePage} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/contactus' component={ContactUsPage} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/pictures' component={PicturesPage} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute exact path="/about" isDrawerDocked={this.state.isDrawerDocked} component={AboutPage} openDrawer={this.changeDrawerState}/>
                        <PropsRoute exact path="/login" component={SocialLogin} openDrawer={this.changeDrawerState}/>
                        <Route exact path="/topics" isDrawerDocked={this.state.isDrawerDocked} component={Topics}/>
                        <PropsRoute path="/courses" component={harta} />
                        <PropsRoute path="/redirect" component={harta} />
                        <Redirect path="/*" to="/" />
                    </Switch>
                </div>
            </Router>
        );
    }


});

// const DefaultAppBar = () => (
//     <AppBar
//         style={styles.appbar}
//         title={"Appointments"}
//         // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
//         onLeftIconButtonTouchTap={this.props.onRequestChange}
//         iconElementRight={
//                 <IconMenu
//                 iconButtonElement={
//           <IconButton><MoreVertIcon /></IconButton>
//         }
//                 targetOrigin={{horizontal: 'right', vertical: 'top'}}
//                 anchorOrigin={{horizontal: 'right', vertical: 'top'}}
//             >
//                 <MenuItem primaryText="Sign out" />
//                 <MenuItem primaryText="Settings" />
//                 <MenuItem primaryText="About" />
//             </IconMenu>
//                 }
//     />
// );

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)


function kaka(){}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


// let strings = new LocalizedStrings(myData);

var isMobileStatus = isMobile.any();
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
            value:1,
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
            <Card className="themeColor"  style={styles.card} >
                <div style={styles.cardheader}>
                    <Avatar
                        src="http://www.material-ui.com/images/uxceo-128.jpg"
                        style={styles.cardimage}
                    /><br/>
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
                    <MenuItem innerDivStyle={styles.menulist} primaryText={window.strings.navigationDrawer.settings} onTouchTap={this.getOnRequestChange} containerElement={<Link to="/settings"/>} leftIcon={<SettingsIcon/>}></MenuItem>
                    <MenuItem innerDivStyle={styles.menulist} primaryText={window.strings.navigationDrawer.about} onTouchTap={this.getOnRequestChange} containerElement={<Link to="/about"/>} leftIcon={<InfoIcon/>}></MenuItem>
                </Drawer>
            </MuiThemeProvider>
        );
    }
});

// const Drawerr = () => (
//     <Drawer
//         docked={false}
//         width={250}
//         open={true}
//         onRequestChange={kaka}
//     >
//
//         <CardExampleWithAvatar/>
//         <div style={styles.cardspacer}></div>
//         <MenuItem innerDivStyle={styles.menulist} containerElement={<Link to="/first"/>} leftIcon={<Event/>}>Appointments</MenuItem>
//         <MenuItem innerDivStyle={styles.menulist} containerElement={<Link to="/first"/>} leftIcon={<CustIcon/>}>Employees</MenuItem>
//         <MenuItem innerDivStyle={styles.menulist} containerElement={<Link to="/first"/>} leftIcon={<CustIcon/>}>Customers</MenuItem>
//         <MenuItem innerDivStyle={styles.menulist} containerElement={<Link to="/first"/>} leftIcon={<AccessTime/>}>Opening Hours</MenuItem>
//         <MenuItem innerDivStyle={styles.menulist} containerElement={<Link to="/first"/>} leftIcon={<Image/>}>Pictures</MenuItem>
//         <MenuItem innerDivStyle={styles.menulist} containerElement={<Link to="/first"/>} leftIcon={<Navigation/>}>Navigate</MenuItem>
//         <MenuItem innerDivStyle={styles.menulist} containerElement={<Link to="/first"/>} leftIcon={<Phone/>}>Contact Us</MenuItem>
//
//         <Divider />
//         <MenuItem primaryText="Settings" containerElement={<Link to="/first"/>}/>
//         <MenuItem primaryText="About" />
//     </Drawer>
// )

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const test = () => (
    <div>
        <h2>Abosjdfbhskdjfsnkdjnfksdjfnksdjfksdjfnut</h2>
        <h2>Abosjdfbhskdjfsnkdjnfksdjfnksdjfksdjfnut</h2>
        <h2>Abosjdfbhskdjfsnkdjnfksdjfnksdjfksdjfnut</h2>
        <h2>Abosjdfbhskdjfsnkdjnfksdjfnksdjfksdjfnut</h2>
        <h2>Abosjdfbhskdjfsnkdjnfksdjfnksdjfksdjfnut</h2>
        <h2>Abosjdfbhskdjfsnkdjnfksdjfnksdjfksdjfnut</h2>
        <h2>Abosjdfbhskdjfsnkdjnfksdjfnksdjfksdjfnut</h2>
        <h2>Abosjdfbhskdjfsnkdjnfksdjfnksdjfksdjfnut</h2>
        <h2>Abosjdfbhskdjfsnkdjnfksdjfnksdjfksdjfnut</h2>
        <h2>Abosjdfbhskdjfsnkdjnfksdjfnksdjfksdjfnut</h2>
        <h2>Abosjdfbhskdjfsnkdjnfksdjfnksdjfksdjfnut</h2>
    </div>
)


const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)


const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
    </div>
);

const colorName = {
    'black': black,
    'white': white,
    'blue': cyan500,
    'blue1': blue500,
    'red': red500,
    'green': greenA200,
    'orange': orange500
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

        if(this.state.nightModeToggle == "On") {
            this.setState({nightModeToggle: "Off"});
        }
        else if(this.state.nightModeToggle == "Off") {
            this.setState({nightModeToggle: "On"});
        }


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
            this.props.switchToRTL();

        }
        window.localStorage.setItem("lang", lang);
        this.props.history.push('/settings');
    },
    changeTheme(color){
        ////alert(color);
        this.setState({themeColorOpen: false,
                       themeColor: color.charAt(0).toUpperCase() + color.slice(1)
        });
        // console.log(colorName['black']);
        setTheme(colorName[color]);
        window.localStorage.setItem("theme", colorName[color]);

    },
    getInitialState: function() {
        return {
            data: this.props.data,
            notificationsToggle: "Enabled",
            nightModeToggle: "Off",
            themeColor: 'Blue',
            themeColorOpen: false,
            open: false
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
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle :null}
                style={styles.appbar}
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
                <div style={this.props.isDrawerDocked ? styles.pushContent :null}>
                <div style={styles.toppad}></div>
                <div style={{maxWidth: 700, float: 'none', margin: '0 auto'}}>
                <List>
                    <h2 style={styles.pageTitle}>{window.strings.settingsPage.general.h2Title}</h2>
                    <ListItem primaryText={window.strings.settingsPage.general.themeColor} secondaryText={this.state.themeColor} onTouchTap={()=>(this.setState({themeColorOpen: true}))}/>
                    <ListItem primaryText={window.strings.settingsPage.general.language} secondaryText={this.state.lang} onTouchTap={()=>(this.setState({open: true}))}/>
                    <Divider/>
                    <ListItem  secondaryText={this.state.nightModeToggle}>
                        <Toggle
                            label="Night mode"
                            defaultToggled={true}
                            onToggle={this.handleNightModeToggle}
                        />
                    </ListItem>
                    <h2 style={styles.pageTitle}>{window.strings.settingsPage.notifications.h2Title}</h2>
                    <ListItem  secondaryText={this.state.notificationsToggle}> <Toggle
                        label="Show/Hide notifications"
                        defaultToggled={true}
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
                        <ListItem primaryText="Blue" onTouchTap={()=>(this.changeTheme("blue"))} leftIcon={<Avatar  style={{backgroundColor: 'rgb(0, 188, 212)'}}/>} />
                        <ListItem primaryText="Red" onTouchTap={()=>(this.changeTheme('red'))} leftIcon={<Avatar style={{backgroundColor: 'red'}}/>} />
                        <ListItem primaryText="Orange" onTouchTap={()=>(this.changeTheme('orange'))} leftIcon={<Avatar style={{backgroundColor: 'orange'}}/>} />
                        <ListItem primaryText="Yellow" onTouchTap={()=>(this.changeTheme('green'))} leftIcon={<Avatar style={{backgroundColor: 'yellow'}}/>} />
                        <ListItem primaryText="Black" onTouchTap={()=>(this.changeTheme('black'))} leftIcon={<Avatar style={{backgroundColor: 'black'}}/>} />
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
import MuiGeoSuggest from 'material-ui-geosuggest';
var NavigatePage = React.createClass({
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
            isCoordinatesChecked: false,
            latitudeFieldValue: '',
            longitudeFieldValue: '',
            lat: null,
            lng: null,
            editNav: false
        };
    },
    componentWillMount: function()
    {
        var _this = this;
        superagent
            .get(SiteURL.get + "showCoordinates")
            .set('Accept', 'application/json')
            .end(function(err, res){
                if (err) {
                    console.log('error: ' , err);
                    console.log('response: ' , res);
                   //alert('Error!');
                    // reject(err);
                } else {
                    console.log('response: ' , res.text);
                    var data = JSON.parse(res.text);
                    // resolve(res.text);
                    _this.setState({lat: data.latitude, lng: data.longitude, address: data.address});
                    _this.refs.Navigate.reRender(data.latitude, data.longitude);
                }
            });
        // var co = this.refs.Navigate.getCoordinates();
        // var string = "https://www.google.com/maps/dir/Current+Location/" + co.lat + "," + co.lng;
        // return string;

    },
    onPlacesChanged: function(e) {
        // const places = this._searchBox.getPlaces();

        ////alert(e.geometry.location);
        this.refs.Navigate.handlePlacesChanged(e);
    },
    findByCoordinates: function() {
        // const places = this._searchBox.getPlaces();
        // this.state.longitudeFieldValue;
        // this.state.latitudeFieldValue;


       const places =  {
           geometry:{
               location: {
                   lat: parseFloat(this.state.latitudeFieldValue),
                   lng: parseFloat(this.state.longitudeFieldValue)
               }
           },
           name: `1232dcd`
        };
        // const places = [e];

        // Add a marker for each place returned from search bar
        // const markers = places.map(place => ({
        //     position: place.geometry.location,
        //     key: place.name,
        // }));
        console.log("findByCoordinates", );

        this.refs.Navigate.handlePlacesChanged(places);
    },
    findByGeoLocation: function() {
        this.refs.Navigate.findByGeoLocation();
    },
    getCoordinates: function() {
        var co = this.refs.Navigate.getCoordinates();
        // var string = "https://www.google.com/maps/dir/Current+Location/" + co.lat + "," + co.lng;
        // return string;
        this.setState({lat: co.lat, lng: co.lng});
        ////alert(JSON.stringify(this.refs.Navigate.getCoordinates()));
    },
    _handleLatitudeFieldChange: function(e) {
        this.setState({
            latitudeFieldValue: e.target.value
        });
    },
    _handleLongitudeFieldChange: function(e) {
        this.setState({
            longitudeFieldValue: e.target.value
        });
    },
    render: function() {
        const NavigateAppBar = () => (
            <AppBar
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle :null}
                style={styles.appbar}
                title={window.strings.navigatePage.appbar.title}
                // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={this.props.openDrawer}
                iconElementRight={
                <IconButton onTouchTap={ (e) => {/*e.preventDefault();*/ this.setState({editNav: !this.state.editNav})}}><EditIcon color={white}/></IconButton>
            }
            />
        );
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <NavigateAppBar/>
                <div style={this.props.isDrawerDocked ? styles.pushContent :null}>
                <div style={styles.toppad}></div>
                    {this.state.editNav ? <div style={{maxWidth: 700, float: 'none', margin: '0 auto'}}>

                    <ListItem
                        style={{height: 50}}
                        disabled={true}
                    >


                        <MuiGeoSuggest
                            style={{maxWidth:'65%'}}
                            hintText={window.strings.navigatePage.GeoSuggest.hintText}
                            floatingLabelText={window.strings.navigatePage.GeoSuggest.title}
                            floatingLabelFixed={true}
                            onPlaceChange={this.onPlacesChanged}
                        />

                    </ListItem>
                    <ListItem
                        style={{height: 0}}
                        disabled={true}
                    >
                        <Checkbox
                            label={window.strings.navigatePage.checkboxLabel}
                            style={styles.checkbox}
                            onCheck={() => this.setState({isCoordinatesChecked: !this.state.isCoordinatesChecked})}
                        /></ListItem>

                    {this.state.isCoordinatesChecked ?
                        <ListItem
                            style={{height: 40,display: 'flex', justifyContent: 'flex-start'}}
                            disabled={true}
                        >
                            <TextField
                                style={{width: '150px', maxWidth:'65%'}}
                                hintText={window.strings.navigatePage.longitudeHintText}
                                floatingLabelText={window.strings.navigatePage.longitude}
                                floatingLabelFixed={true}
                                value={this.state.longitudeFieldValue}
                                onChange={this._handleLongitudeFieldChange}

                            />
                            <TextField
                                style={{ marginLeft: 20, width: '150px', maxWidth:'65%'}}
                                hintText={window.strings.navigatePage.latitudeHintText}
                                floatingLabelText={window.strings.navigatePage.latitude}
                                floatingLabelFixed={true}
                                value={this.state.latitudeFieldValue}
                                onChange={this._handleLatitudeFieldChange}
                            /></ListItem>:null}
                    <ListItem
                        style={{height: 30}}
                        disabled={true}
                    >
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <RaisedButton style={{marginLeft: 20}} primary={true} onTouchTap={this.findByCoordinates} label={window.strings.navigatePage.findButton} />
                        </div>
                    </ListItem>
                    <div style={{padding: '0 10px'}}>
                    <Divider/>
                    </div>
                    <ListItem
                        style={{height: 30}}
                        disabled={true}
                    >
                    <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                    <RaisedButton
                        target="_blank"
                        label={window.strings.navigatePage.findMyLocationButton}
                        secondary={true}
                        icon={<LocationIcon/>}
                        onTouchTap={this.findByGeoLocation}

                    /></div></ListItem>

                </div>:<div style={{marginTop: 235}}></div>}
                <div style={styles.container111}>
                <Navigate ref="Navigate" />
                    {this.state.editNav ? null:
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <FlatButton
                                target="_blank"
                                label={window.strings.navigatePage.navigateButton}
                                style={{marginTop: 3}}
                                secondary={true}
                                icon={<Navigation/>}
                                href={"https://www.google.com/maps/dir/?api=1&destination=" + this.state.lng + "," + this.state.lat}

                            />
                            <i style={{fontSize: 17, marginTop: 12}}>{this.state.address}</i>
                        </div>}
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                    {this.state.editNav ? <div style={{maxWidth: 700, float: 'none', margin: '0 auto'}}>
                <RaisedButton labelStyle={{fontSize:20}} style={{height: 50}} label={window.strings.navigatePage.doneButton} secondary={true} fullWidth={true} /></div>:null}
            </div></div>
            </MuiThemeProvider>
        );
    }
});

var iconName = {

    1: <CallButton/>,
    2: <FacebookButton/>,
    3: <CallButton/>,
    4: <CallButton/>,
    5: <CallButton/>,
    6: <CallButton/>,
    7: <CallButton/>,
    8: <CallButton/>,
    9: <CallButton/>,
    10: <CallButton/>,
    11: <CallButton/>
};

const tilessData = [
    {
        url: null,
        name: 'qweqweqwe',
        id: 1,
    },{
        url: 'images/grid-list/00-52-29-429_640.jpg',
        name: 'Breakfast',
        id: 2,
    },{
        url: 'images/grid-list/00-52-29-429_640.jpg',
        name: 'Breakfast',
        id: 1,
    },{
        url: 'images/grid-list/00-52-29-429_640.jpg',
        name: 'Breakfast',
        id: 2,
    },{
        url: 'images/grid-list/00-52-29-429_640.jpg',
        name: 'Breakfast',
        id: 2,
    },{
        url: 'images/grid-list/00-52-29-429_640.jpg',
        name: 'Breakfast',
        id: 1,
    },
];
var ssi = 1

var ContactUsPage = React.createClass({
    getInitialState: function() {

        return {
            showResults: false,
            email: null,
            phone:null,
            logo:null,
            businessName: null,
            address: null
        };
    },
    componentDidMount: function() {

        var _this = this;
        console.log('ContactUsPage');
        superagent
            .get('http://localhost:8888/api/getContactUs')
            .set('Accept', 'application/json')
            .end(function(err, res){
                if (err) {
                    console.log('error: ' , err);
                    console.log('response: ' , res);

                   //alert('Error!');
                } else {
                    console.log('response: ' , res.text);
                    var data = JSON.parse(res.text);
                    ////alert(data.logo);
                    _this.setState({
                        email: data.email,
                        phone: data.phone1,
                        logo: data.logoSrc,
                        businessName: data.businessName,
                        address: data.address,
                        facebook: data.facebook,
                        whatsapp: data.whatsapp

                    })
                }
            });

    },
    render: function() {

        const DefaultAppBar = () => (
            <AppBar
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle :null}
                style={styles.appbar}
                title={window.strings.contactUsPage.appbar.title}
                // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={this.props.openDrawer}
                //         iconElementRight={         //         <IconMenu         //         iconButtonElement={         //   <IconButton><MoreVertIcon /></IconButton>         // }         //         targetOrigin={{horizontal: 'right', vertical: 'top'}}         //         anchorOrigin={{horizontal: 'right', vertical: 'top'}}         //     >         //         <MenuItem primaryText="Sign out" />         //         <MenuItem primaryText="Settings" />         //         <MenuItem primaryText="About" />         //     </IconMenu>         //         }
            />
        );
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <DefaultAppBar/>
                <div style={this.props.isDrawerDocked ? styles.pushContent :null}>
                <div style={{maxWidth: 700, float: 'none', margin: '0 auto'}}>
                <div style={styles.toppad}></div>
                <div style={styles.toppad}></div>
                <Card zDepth={1}>
                    <CardHeader
                        style={styles.cardheader}
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <div
                        style={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        margin: '-2px',
                        overflowX: 'auto'
                        }}
                    >
                        <div style={{
                        boxSizing: 'border-box',
                        padding: '2px',
                        width: '50%'}}>
                                <img style={{width: '100%'}} src={this.state.logo} />
                            </div>
                        <div style={{borderLeft: '1px solid rgb(224, 224, 224)'}}></div>
                        <div style={{
                        marginTop: '33px',
                        boxSizing: 'border-box',
                        padding: '2px',
                        width: '50%'}}>
                                <ListItem
                                    primaryText={this.state.businessName}
                                    secondaryText={this.state.address}
                                />
                            <div style={{
                                marginTop: '103px'}}>
                            <ListItem
                                leftCheckbox={<IconButton iconStyle={styles.smallestIcon}
                                style={styles.smallest}><CallButton/></IconButton>}
                                primaryText={this.state.phone}
                                secondaryText="Allow notifications"
                            />
                            <Divider inset={true} />
                            <ListItem
                                leftCheckbox={<IconButton iconStyle={styles.smallestIcon}
                                style={styles.smallest}><EmailButton/></IconButton>}
                                primaryText={this.state.email}
                                secondaryText="Allow notifications"
                            />
                            </div>
                            </div>
                    </div>

                </Card>

                <br/>
                <div style={{paddingLeft: 5, paddingRight: 5}} >
                    <div style={styles.root1}>
                        <GridList style={styles.gridList} cols={1} cellHeight="auto">
                            {tilessData.map((tile) => (
                                    <GridTile
                                    key={tile.url + ssi++}>
                                    <IconButton iconStyle={styles.smallIcon}
                                                style={styles.small}
                                                containerElement={<Link to={{
                                                          pathname: (tile.url),
                                                          state: {
                                                          employeeId: '345'
                                                          }}}/>}
                                    >
                                        {iconName[tile.id]}

                                    </IconButton>
                                </GridTile>
                            ))}

                        </GridList>
                    </div>
                    <Divider/>
                </div><br/>

              </div></div>
            </div>
            </MuiThemeProvider>
        );
    }
});

import ActionAndroid from 'material-ui/svg-icons/action/android';

var LoginPage = React.createClass({
    getInitialState: function() {

        return {
            showResults: false,
            isLogin: false,
            passwordFieldValue: '',
            emailFieldValue: '',
        };
    },
    componentDidMount: function() {

    },
    _handlePasswordFieldChange: function(e) {
        this.setState({
            passwordFieldValue: e.target.value
        });
    },
    _handleEmailFieldChange: function(e) {
        this.setState({
            emailFieldValue: e.target.value
        });
    },
    signIn: function() {

        // this.setState({
        //     isLogin: true
        // });

    //     curl -v "http://localhost:8081/lockdin/token" \
    // -d "grant_type=password&client_id=demoapp&client_secret=demopass&username=demouser&password=testpass"


        var cred = {
            email: this.state.emailFieldValue,
            password: this.state.passwordFieldValue
        };
        fetch("http://localhost:8899/oauth/login",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(cred)
            })
            .then((response) => {

                if (response.status == 500) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);

                    response.json().then((data)=>{
                        console.log(data);
                       //alert("message: " + data.message + "    code: " + data.code);
                    });

                    return;
                }

                console.log("http://localhost:8899/oauth/login");

                // this.props.history.push("http://localhost:8899/auth/my_service");
                window.location.href = "http://localhost:8899/auth/my_service";

                // fetch("http://localhost:8899/auth/my_service")
                //     .then((response) => {
                //             if (response.status !== 200) {
                //                 console.log('Looks like there was a problem. Status Code: ' +
                //                     response.status);
                //             }
                //         }
                //     )
                //     .catch(function(err) {
                //         console.log('Fetch Error :-S', err);
                //     });
                // console.log(response.json());
                // Examine the text in the response

                // response.json().then((data)  => {
                //     console.log(data);
                //
                // });
            })
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });
        // fetch("http://localhost:8081/lockdin/token",
        //     {
        //         headers: {
        //             // 'Accept': 'application/json',
        //             'Content-Type': 'application/x-www-form-urlencoded'
        //         },
        //         method: "POST",
        //         body: "grant_type=password&client_id=demoapp&client_secret=demopass&username=demouser&password=testpass"
        //     })
        //     .then((response) => {
        //
        //         if (response.status == 500) {
        //             console.log('Looks like there was a problem. Status Code: ' +
        //                 response.status);
        //
        //             response.json().then((data)=>{
        //                 console.log(data);
        //                //alert("message: " + data.message + "    code: " + data.code);
        //             });
        //
        //             return;
        //         }
        //
        //         // console.log(response.json());
        //         // Examine the text in the response
        //
        //         response.json().then((data)  => {
        //             console.log(data);
        //
        //         });
        //     })
        //     .catch(function(err) {
        //         console.log('Fetch Error :-S', err);
        //     });
        ////alert();
        // SiteURL.get.slice(0,-5) + "/auth/my_service"
    },
    render: function() {

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={this.props.isDrawerDocked ? styles.pushContent :null}>

                {this.state.isLogin ?
                    <object style={{
                    width: '100%',
                    height: '100vh',
                }} type="text/html" data={SiteURL.get.slice(0,-5) + "/auth/my_service"} ></object>:
<div>
                    <ListItem
                    style={{height: 130,display: 'flex', justifyContent: 'center'}}
                    disabled={true}
                >



                   </ListItem><ListItem
                    style={{height: 30,display: 'flex', justifyContent: 'center'}}
                    disabled={true}
                >
                    <TextField
                        style={{width: '300px', maxWidth:'85%', margin: 'auto 0'}}
                        hintText="E-mail"
                        value={this.state.longitudeFieldValue}
                        onChange={this._handleEmailFieldChange}

                    />
                   </ListItem>
                <ListItem
                    style={{height: 55,display: 'flex', justifyContent: 'center'}}
                    disabled={true}
                >
                    <TextField
                        style={{width: '300px', maxWidth:'85%', margin: 'auto 0'}}
                        hintText="Password"
                        value={this.state.latitudeFieldValue}
                        onChange={this._handlePasswordFieldChange}
                        type="password"
                    /></ListItem>
                <ListItem
                    style={{height: 35,display: 'flex', justifyContent: 'center'}}
                    disabled={true}
                >


                <RaisedButton
                    label={<a style={{color:'white'}}>Sign-in</a>}
                    style={{width:300, height:50}}
                    backgroundColor= "#c7c7c7"
                    onTouchTap={(e)=>{e.preventDefault(); this.signIn();}}
                />

                   </ListItem>
                <ListItem
                    style={{height: 35,display: 'flex', justifyContent: 'center'}}
                    disabled={true}
                >


                <RaisedButton
                    label={<a style={{color:'white'}}>Login with facebook</a>}
                    labelPosition="before"
                    icon={<FacebookButton style={styles.facebookLogin}/>}
                    style={{width:300, height:50}}
                    backgroundColor= "#3b5998"
                    href= {SiteURL.get.slice(0,-5) + "/auth/facebook"}
                />

                   </ListItem>
                <ListItem
                    style={{height: 35,display: 'flex', justifyContent: 'center'}}
                    disabled={true}
                >
                <RaisedButton
                    label={<a style={{color:'white', marginRight: '8px'}}>Login with  google+</a>}
                    labelPosition="before"
                    icon={<ActionAndroid color={'white'} />}
                    style={{width:300, height:50,color:'white'}}
                    backgroundColor= "#db4437"
                    color="white"

                /></ListItem></div>}
            </div>
            </MuiThemeProvider>
        );
    }
});

import Tabs, { Tab } from 'material-ui/Tabs';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { LabelCheckbox } from 'material-ui/Checkbox';
import SwipeableViews from 'react-swipeable-views';
const stylles = {
    slide: {
        padding: 32,
        minHeight: '70%',
        color: '#fff',
    },
    slide1: {
        // background: '#FEA900',
    },
    slide2: {
        background: '#B3DC4A',
    },
    slide3: {
        background: '#6AC0FF',
    },
};

const muiTheme1 = getMuiTheme({
    palette: {
        accent1Color: blue500,
    },
    appBar: {
        textColor: black,
        color: white
    },
    tabs:{
        backgroundColor: white,
        textColor: black
    },
    tab:{
        // backgroundColor: white,
        textColor: black
    }
});
var checkAuth1 = React.createClass({
    getInitialState: function() {
        return { showResults: false,
            isLogged: false};
    },
    componentWillMount: function() {


      if(window.localStorage.getItem('token') !== null){
        this.setState({isLogged: true});
          if(window.localStorage.getItem('user') !== null){
              var userObj = JSON.parse(window.localStorage.getItem('user'));
              this.setUserAndAllowAccess(userObj);
              setAjaxAuthHeader();
          }
          else
          {
             this.loadUser();
          }
      }
      // this.props.history.push(pathname);
    },
    handleChange: function(value) {
    this.setState({
        index: value,
    });
    },
    loadUser: function() {
        setAjaxAuthHeader();
        var _this = this;
        getUser().then(function(user){
            var serverToken = user;

            window.localStorage.setItem("user", user);
            console.log(user);
            var userObj = JSON.parse(user);
            _this.setUserAndAllowAccess(userObj);
        });
    },
    setUserAndAllowAccess: function(userObj) {

        this.props.setUser(userObj.user.name, userObj.user.email);
        this.setIsLoggedIn(true);
    },
    setIsLoggedIn: function(bool) {
    this.props.setIsLoggedIn(bool);
        this.setState({isLogged: true});
    },

    handleChangeIndex: function(index){
        this.setState({
            index: index
        });
    },
    openDrawer: function(index){
        this.props.openDrawer();
    },
    render: function() {

      if(this.state.isLogged)
        return (

          <HomePage  isDrawerDocked={this.props.isDrawerDocked} openDrawer={this.openDrawer}/>


        );
      else return (
        <SocialLogin loadUser={this.loadUser}/>
      );
    }
});

const tilesDate = [
    {
        date: 'Wednesday, December 21st 2016',
        obj: [
            {

                time: '9:00',
            },
            {
                time: '9:15',
            },
            {
                time: '9:30',
            },
            {

                time: '9:00',
            },
            {
                time: '9:15',
            },
            {
                time: '9:30',
            },
        ]

    },
    {
        date: 'Wednesday, December 21st 2017',
        obj: [
            {

                time: '9:sfvsvds',
            },
            {
                time: '9:15',
            },
            {
                time: '9:30',
            },
            {

                time: '9:00',
            },
            {
                time: '9:15',
            },
            {
                time: '9:30',
            },
        ]
    },
    {
        date: 'Wednesday, December 21st 2018',
        obj: [
            {

                time: '9:00',
            },
            {
                time: '9:15',
            },
            {
                time: '9:30',
            },
            {

                time: '9:00',
            },
            {
                time: '9:15',
            },
            {
                time: '9:30',
            },
        ]
    },
    {
        date: 'Wednesday, December 21st 2016',
        obj: [
            {

                time: '9:00',
            },
            {
                time: '9:15',
            },
            {
                time: '9:30',
            },
            {

                time: '9:00',
            },
            {
                time: '9:15',
            },
            {
                time: '9:30',
            },
        ]
    },
    {
        date: 'Wednesday, December 21st 2017',
        obj: [
            {

                time: '9:00',
            },
            {
                time: '9:15',
            },
            {
                time: '9:30',
            },
            {

                time: '9:00',
            },
            {
                time: '9:15',
            },
            {
                time: '9:30',
            },
        ]
    },
    {
        date: 'Wednesday, December 21st 2018',
        obj: [
            {

                time: '9:00',
            },
            {
                time: '9:15',
            },
            {
                time: '9:30',
            },
            {

                time: '9:00',
            },
            {
                time: '9:15',
            },
            {
                time: '9:30',
            },
        ]
    },
];
var HomePage = React.createClass({
    getInitialState: function() {
        return { showResults: false,
            index: 0};
    },
    componentDidMount: function() {

        ////alert(pathname);
        // this.props.history.push(pathname);
    },
    handleChange: function(value) {
    this.setState({
        index: value,
    });
    },

    handleChangeIndex: function(index){
        this.setState({
            index: index
        });
    },
    render: function() {
        const DefaultAppBar = () => (
            <AppBar
                containerStyle={{boxShadow: 'none'}}
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle :null}
                style={styles.appbar}
                title={window.strings.homePage.appbar.title}
                // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={(e)=>{e.preventDefault(); this.props.openDrawer();}}
                //         iconElementRight={         //         <IconMenu         //         iconButtonElement={         //   <IconButton><MoreVertIcon /></IconButton>         // }         //         targetOrigin={{horizontal: 'right', vertical: 'top'}}         //         anchorOrigin={{horizontal: 'right', vertical: 'top'}}         //     >         //         <MenuItem primaryText="Sign out" />         //         <MenuItem primaryText="Settings" />         //         <MenuItem primaryText="About" />         //     </IconMenu>         //         }
            />
        );
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>

                    <DefaultAppBar/>
                    <div style={this.props.isDrawerDocked ? styles.pushContent :null}>
                        <div style={styles.toppad}></div>
                        <div style={{maxWidth: 700, float: 'none', margin: '0 auto'}}>
                    <div>
                        <div>
                            {tilesDate.map((data,index) => (
                                <div  style={styles.container}>
                                    <Card key={index} zDepth={1}>
                                        <CardHeader
                                            style={styles.cardheader}
                                            title={'asdas'}
                                            actAsExpander={false}
                                            showExpandableButton={false}
                                        />

                                        <List>
                                            {data.obj.map((tile, index) => (
                                                console.log("tile:  " + tile),
                                                    <ListItem
                                                        key={index}
                                                        primaryText={''}
                                                        leftIcon={<AccessTime />}
                                                        onTouchTap={(e) =>{e.preventDefault()}}
                                                    >

                                                    </ListItem>
                                            ))}
                                        </List>

                                    </Card>
                                </div>
                            ))}
                            <div style={{display: 'flex', justifyContent: 'center', marginTop: 15}}>
                                <CircularProgress size={80} thickness={5} />
                            </div>
                        </div>
                    </div>
                        </div></div>
            </div>
            </MuiThemeProvider>
            );

    },
    renderOriginal: function() {


        const {
            index,
        } = this.state;

        const Tabss = () => (
            <Tabs value={index} style={{marginTop: 63, position: 'fixed',width: '100%', zIndex: 2,
                boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
            }} inkBarStyle={{backgroundColor: 'white'}} onChange={this.handleChange}>
                <Tab style={{color: 'black'}} icon={<Event/>} value={0}/>
                <Tab style={{color: 'black'}} icon={<CustIcon/>} value={1}/>
                <Tab style={{color: 'black'}} icon={<CustIcon/>} value={2}/>
                <Tab style={{color: 'black'}} icon={<AccessTime/>} value={3}/>
                <Tab style={{color: 'black'}} icon={<Image/>} value={4}/>
                <Tab style={{color: 'black'}} icon={<Navigation/>} value={5}/>
                <Tab style={{color: 'black'}} icon={<Phone/>} value={6}/>
            </Tabs>
        );

        const Tiles = () => (
            <GridList style={styles.gridList11} cols={2} cellHeight="auto">
                {tilessData.map((tile) => (

                    <GridTile
                        key={tile.url + ssi++}
                        style={{marginBottom: 30, marginLeft: 20}}
                    >
                        <Card zDepth={2} style={{width:'95%'}}>
                            <ListItem >
                                <IconButton
                                    disableTouchRipple={true}
                                    iconStyle={styles.largeIcon}
                                    style={styles.mediumWithMargin}>
                                    {iconName[tile.id]}
                                </IconButton>
                                <div style={{width: '100%',textAlign: 'center'}}>
                                    <a>new customer</a>
                                </div>
                            </ListItem>
                        </Card>


                    </GridTile>
                ))}

            </GridList>
        );
        const DefaultAppBar = () => (
            <AppBar
                containerStyle={{boxShadow: 'none'}}
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle :null}
                style={styles.appbar}
                title={window.strings.homePage.appbar.title}
                // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={(e)=>{e.preventDefault(); this.props.openDrawer();}}
                //         iconElementRight={         //         <IconMenu         //         iconButtonElement={         //   <IconButton><MoreVertIcon /></IconButton>         // }         //         targetOrigin={{horizontal: 'right', vertical: 'top'}}         //         anchorOrigin={{horizontal: 'right', vertical: 'top'}}         //     >         //         <MenuItem primaryText="Sign out" />         //         <MenuItem primaryText="Settings" />         //         <MenuItem primaryText="About" />         //     </IconMenu>         //         }
            />
        );
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>

                    <DefaultAppBar/>

                    <div style={this.props.isDrawerDocked ? styles.pushContent :null}>
                        <Tabss/>
                        <div style={{height: 112}}></div>
                    <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                        <div style={Object.assign({}, stylles.slide, stylles.slide1)}>
                            <div style={{maxWidth: 700, width: '99%',float: 'none', margin: '0 auto'}}>

                            </div>
                        </div>
                        <div style={Object.assign({}, stylles.slide, stylles.slide1)}>
                            <div style={{maxWidth: 700, width: '99%',float: 'none', margin: '0 auto'}}>

                            </div>
                        </div>
                        <div style={Object.assign({}, stylles.slide, stylles.slide1)}>
                            <div style={{maxWidth: 700, width: '99%',float: 'none', margin: '0 auto'}}>

                            </div>
                        </div>
                        <div style={Object.assign({}, stylles.slide, stylles.slide1)}>
                            <div style={{maxWidth: 700, width: '99%',float: 'none', margin: '0 auto'}}>


                            </div>
                        </div>
                        <div style={Object.assign({}, stylles.slide, stylles.slide1)}>
                            <div style={{maxWidth: 700, width: '99%',float: 'none', margin: '0 auto'}}>

                                <Tiles/>
                            </div>
                        </div>
                        <div style={Object.assign({}, stylles.slide, stylles.slide1)}>
                            <div style={{maxWidth: 700, width: '99%',float: 'none', margin: '0 auto'}}>

                                <Tiles/>
                            </div>
                        </div>
                        <div style={Object.assign({}, stylles.slide, stylles.slide1)}>
                            <div style={{maxWidth: 700, width: '99%',float: 'none', margin: '0 auto'}}>

                                <Tiles/>
                            </div>
                        </div>
                    </SwipeableViews>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
});
var HomePage1 = React.createClass({
    getInitialState: function() {

        return { showResults: false,
            selectedIndex: 0};
    },
    componentDidMount: function() {

    },
    render: function() {

        var select = (index) => this.setState({selectedIndex: index});
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
            <div style={{backgroundColor: 'floralwhite'}}>
                <IconButton onTouchTap={this.props.openDrawer} iconStyle={styles.smallerIcon}
                            style={styles.smaller}><NavigationIcon/></IconButton>
                <div style={this.props.isDrawerDocked ? styles.pushContent :null}>

                    <SwipeableViews>
                        <div style={Object.assign({}, stylles.slide, stylles.slide1)}>
                            <div style={{maxWidth: 700, width: '99%',float: 'none', margin: '0 auto'}}>
                                <div style={styles.toppad}></div>
                                {tilessData.map((tile) => (
                                    <div>
                                        <h2 style={styles.homePageTitle}>General</h2>


                                        <GridList style={styles.gridList1} cols={1} cellHeight="auto">
                                            {tilessData.map((tile) => (

                                                <GridTile
                                                    key={tile.url + ssi++}

                                                >
                                                    <ListItem innerDivStyle={{padding: 0}}>

                                                        <IconButton
                                                            disableTouchRipple={true}
                                                            iconStyle={styles.largeIcon}
                                                            style={styles.medium}>
                                                            {iconName[tile.id]}
                                                        </IconButton>
                                                        <a>new customer</a>
                                                    </ListItem>


                                                </GridTile>
                                            ))}

                                        </GridList>
                                        <br/>
                                        <Divider/>

                                    </div>
                                ))}

                            </div>
                        </div>
                        <div style={Object.assign({}, stylles.slide, stylles.slide2)}>
                            slide n°2
                        </div>
                        <div style={Object.assign({}, stylles.slide, stylles.slide3)}>
                            slide n°3
                        </div>
                    </SwipeableViews></div>

            </div>
            </MuiThemeProvider>
        );
    }
});
var UserProfilePage = React.createClass({
    getInitialState: function() {

        return {

            showResults: false,
            editUser: false,
            personType: "employee",
            phone: '052-345348273',
            email:'aviyamlsf@sdf.com',
            name:'asfasd asdasda',
            obj: {
                id: null,
                name: null,
                address: 'vrvrt',
                phone:null,
                email:null,
                password: '768768686',
            },
            toolsBar: true
        };
    },
    componentDidMount: function() {

    },
    cancelEdit: function() {
        this.setState({editUser: false});
    },
    render: function() {
        const UserProfileAppBar = () => (
            <AppBar
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle :null}
                style={styles.appbar}
                title={"User Profile"}
                // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={this.props.openDrawer}
                iconElementRight={
               <IconButton onTouchTap={ (e) => {/*e.preventDefault();*/ this.setState({editUser: !this.state.editUser})}}><EditIcon color={white}/></IconButton>
                }
            />
        );

        const style = {

            bottomCard1: {
                position: 'fixed',
                width: this.props.isDrawerDocked? '86%':'100%',
                bottom: 0
            },
            bottomCard2: {
                position: 'fixed',
                width: this.props.isDrawerDocked? '86%':'100%',
                bottom: 0,
                height: '37px'
            }};
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <UserProfileAppBar/>
                    <div style={this.props.isDrawerDocked ? styles.pushContent :null}>
                        <div style={styles.toppad}></div>
                        <PersonShowAndEdit isDrawerDocked={this.props.isDrawerDocked} editUser={this.state.editUser} obj={this.state.obj} personType={"customer"} pushEdit={this.pushEdit} cancelEdit={this.cancelEdit}/>
                        <div style={this.state.toolsBar ? style.bottomCard1 : style.bottomCard2}>
                            <Card zDepth={5} style={{backgroundColor:'white', height: 200, width: 950, maxWidth: '103%', float: 'none',margin: '0 auto'}}>
                                <ListItem onTouchTap={(e)=>{e.preventDefault(); this.setState({toolsBar: !this.state.toolsBar})}}  innerDivStyle={{ padding: 9}}><div style={{display:'flex',justifyContent: 'center'}}>{this.state.toolsBar ? <DownIcon/> : <UpIcon/>}</div></ListItem>
                                <ListItem
                                    style={{display: 'flex', justifyContent: 'center', width: 700, maxWidth: '95%', float: 'none',margin: '0 auto',padding:0}}
                                    disabled={true}
                                >



                                    <IconButton iconStyle={icons.mediumIcon}
                                                containerElement={<Link to={{
                                                          pathname: '/employeeappointments',
                                                          state: {
                                                          employeeId: '345'
                                                          }}}/>}
                                                style={icons.small}>
                                        <AppointmentsIcon/>
                                        <a style={{height:'none'}}>Appointments</a>
                                    </IconButton>
                                    <IconButton iconStyle={icons.mediumIcon}
                                                containerElement={<Link to={{
                                                          pathname: '/employeeabsence',
                                                          state: {
                                                          employeeId: '345',
                                                          isEmployee: true
                                                          }}}/>}
                                                style={icons.small}>
                                        <EditIcon/>
                                        <a style={{height:'none'}}>Absence</a>
                                    </IconButton> <IconButton iconStyle={icons.mediumIcon}
                                                containerElement={<Link to={{
                                                          pathname: '/employeeappointments',
                                                          state: {
                                                          employeeId: '345'
                                                          }}}/>}
                                                style={icons.small}>
                                        <AppointmentsIcon/>
                                        <a style={{height:'none'}}>Appointments</a>
                                    </IconButton>
                                    <IconButton iconStyle={icons.mediumIcon}
                                                containerElement={<Link to={{
                                                          pathname: '/employeeabsence',
                                                          state: {
                                                          employeeId: '345',
                                                          isEmployee: true
                                                          }}}/>}
                                                style={icons.small}>
                                        <EditIcon/>
                                        <a style={{height:'none'}}>Absence</a>
                                    </IconButton>
                                </ListItem></Card></div>
                    </div>
            </div>
            </MuiThemeProvider>
        );
    }
});
var PersonShowAndEdit = React.createClass({
    getInitialState: function() {

        console.log("PersonShowAndEdit");
        console.log(this.props.obj);
        return {
                 showResults: false,
                 editUser: false,
                 phone: this.props.obj.phone,
                 email:this.props.obj.email,
                 name: this.props.obj.name,
                 address: this.props.obj.address,
                 hover: false,
                 newPhone: '',
                 newEmail: '',
                 newName: '',
                 newAddress: ''
        };
    },
    componentDidMount: function() {

        if(!this.props.isNew)
        {
            this.setState({
                newPhone: this.props.obj.phone,
                newEmail: this.props.obj.email,
                newName: this.props.obj.name,
                newAddress: this.props.personType == 'Employee' ? null : this.props.obj.address
            });
        }
    },
    _handleNameTextFieldChange: function(e) {
        this.setState({
            newName: e.target.value
        });
    },
    _handlePhoneTextFieldChange: function(e) {
        this.setState({
            newPhone: e.target.value
        });
    },
    _handleEmailTextFieldChange: function(e) {
        this.setState({
            newEmail: e.target.value
        });
    },
    _handleAddressTextFieldChange: function(e) {
        this.setState({
            newAddress: e.target.value
        });
    },
    pushEdit: function() {
        var personObj = Object.assign({}, this.props.obj);


        personObj.name = this.state.newName;
        personObj.phone = this.state.newPhone;
        personObj.email = this.state.newEmail;
        personObj.address = this.state.newAddress;


        this.props.pushEdit(personObj)
    },
    onMouseEnterHandler: function() {
        this.setState({
            hover: true
        });
        console.log('enter');
    },
    onMouseLeaveHandler: function() {
        this.setState({
            hover: false
        });
        console.log('leave');
    },
    render: function() {


        return (
            <div style={{background: '#C1D1D0', height: isMobile.any() ? '372px':'480px',position: 'fixed', width: this.props.isDrawerDocked? '86%':'100%' , float: 'none',margin: '0 auto'}}>
                <ListItem
                    style={{display:'flex',justifyContent: 'center'}}
                    disabled={true}
                >
                    {this.props.editUser ?
                        <div
                            onMouseEnter={this.onMouseEnterHandler}
                            onMouseLeave={this.onMouseLeaveHandler}
                            className=""
                            style={{
                                        backgroundImage:'url("http://www.material-ui.com/images/uxceo-128.jpg")',
                                        borderRadius: '50%',
                                        marginTop: '5.2px',
                                        marginRight: '5px',
                                        marginLeft: '4.2px',
                                        backgroundRepeat: 'round'}}
                        >
                            <IconButton
                                iconStyle={styles.mediumIcon1}
                                style={{
                                width: 100,
                                height: 100,
                                padding: 30,
                                borderRadius: '50%',
                                background: this.state.hover ? 'rgba(228, 228, 228, 0.74)':'none'
                                }}
                                onTouchTap={(e) => {e.preventDefault(); this.refs.UploadDialog.handleOpen()}}
                            >

                                <ContentAdd />
                            </IconButton></div>

                        :
                        <Avatar
                            src="http://www.material-ui.com/images/uxceo-128.jpg"
                            size={100}
                            style={style}
                        />}

                    {this.props.isNew ?
                        <div style={{display:'block', marginTop: '28px', marginLeft: '12px'}}>
                            <a style={{padding: '0px 0px',fontSize:17}}>{window.strings.personShowAndEdit.name}</a><br/>{this.props.editUser ? null:<br/>}
                        <TextField ref="phoneTextField" style={{width: '164px'}} underlineStyle={styles.underlineStyle} value={this.state.newName} onChange={this._handleNameTextFieldChange}  /> </div>:<a style={{padding: '40px 25px',fontSize:28}}>{this.state.name}</a>}
                </ListItem><br/>
                <ListItem
                    style={{display:'flex',justifyContent: 'space-between',maxWidth: 700, float: 'none',margin: '0 auto'}}
                    disabled={true}
                >

                    <div style={{display:'block'}}>
                        <a style={{padding: '0px 0px',fontSize:17}}>{window.strings.personShowAndEdit.phone}</a><br/>{this.props.editUser ? null:<br/>}
                        {this.props.editUser ? <TextField ref="phoneTextField" style={{width: '164px'}} underlineStyle={styles.underlineStyle} value={this.state.newPhone} onChange={this._handlePhoneTextFieldChange}  />
                            :<a style={{color:'blue', textDecoration:'underline', cursor: 'pointer', padding: '0px 0px',fontSize:16}}>{this.state.phone}</a>}
                    </div>


                    <div style={{display:'block',marginRight: '10px'}}>
                        <a style={{padding: '0px 8px',fontSize:17}}>{window.strings.personShowAndEdit.email}</a><br/>{this.props.editUser ? null:<br/>}
                        {this.props.editUser ? <TextField ref="emailTextField" style={{width: '157px',paddingLeft: '8px'}} underlineStyle={styles.underlineStyle} value={this.state.newEmail} onChange={this._handleEmailTextFieldChange}  />
                            :<a style={{color:'blue', textDecoration:'underline', cursor: 'pointer', padding: '0px 8px',fontSize:17}}>{this.state.email}</a>}
                    </div>
                </ListItem>
                <ListItem
                    style={{display:'flex',justifyContent: 'flex-start',maxWidth: 700, float: 'none',margin: '0 auto'}}
                    disabled={true}
                >

                    <div style={{display:'block'}}>
                        <a style={{padding: '0px 0px',fontSize:17}}>{window.strings.personShowAndEdit.address}</a><br/>{this.props.editUser ? null:<br/>}
                        {this.props.editUser ? <TextField ref="phoneTextField" style={{width: '164px'}} underlineStyle={styles.underlineStyle} value={this.state.newAddress} onChange={this._handleAddressTextFieldChange}   />
                            :<a style={{color:'blue', padding: '0px 0px',fontSize:16}}>{this.state.address}</a>}
                    </div>

                </ListItem>

                <div  style={{padding: '0 7px', maxWidth: 750, float: 'none',margin: '0 auto'}}>
                    <br/>
                    {this.props.editUser ? <Divider style={{backgroundColor: '#bdbdbd'}}/>:null}
                    <br/>
                </div>
                <div  style={{padding: '0 7px', maxWidth: 700, float: 'none',margin: '0 auto',display: 'flex',justifyContent: 'flex-end'}}>
                    {this.props.editUser ? <div><RaisedButton style={{width: '164px', marginRight: 8}} label={window.strings.cancel} onTouchTap={(e)=>{e.preventDefault(); this.props.cancelEdit()}} primary={true} /><RaisedButton onTouchTap={(e)=>{e.preventDefault(); this.pushEdit()}}  style={{width: '164px'}} label={window.strings.done} primary={true} /></div>:null}
                </div>
                <br/>
                <ReactUploadFile ref="UploadDialog" />
            </div>
        );
    }
});

var AbsencesShowAndEdit = React.createClass({
    getInitialState: function() {

        console.log("AbsencesShowAndEdit");
        console.log(this.props.obj);
        return {
                 showResults: false,
                 editUser: false,
                 phone: this.props.obj.phone,
                 email:this.props.obj.email,
                 name: this.props.obj.name,
                 address: this.props.obj.address,
                 hover: false,
                 newPhone: '',
                 newEmail: '',
                 newName: '',
                 newAddress: ''
        };
    },
    componentDidMount: function() {

        if(!this.props.isNew)
        {
            this.setState({
                newPhone: this.props.obj.phone,
                newEmail: this.props.obj.email,
                newName: this.props.obj.name,
                newAddress: this.props.obj.address
            });
        }
    },
    _handleNameTextFieldChange: function(e) {
        this.setState({
            newName: e.target.value
        });
    },
    _handlePhoneTextFieldChange: function(e) {
        this.setState({
            newPhone: e.target.value
        });
    },
    _handleEmailTextFieldChange: function(e) {
        this.setState({
            newEmail: e.target.value
        });
    },
    _handleAddressTextFieldChange: function(e) {
        this.setState({
            newAddress: e.target.value
        });
    },
    pushEdit: function() {
        var personObj = Object.assign({}, this.props.obj);


        personObj.name = this.state.newName;
        personObj.phone = this.state.newPhone;
        personObj.email = this.state.newEmail;
        personObj.address = this.state.newAddress;


        this.props.pushEdit(personObj)
    },
    onMouseEnterHandler: function() {
        this.setState({
            hover: true
        });
        console.log('enter');
    },
    onMouseLeaveHandler: function() {
        this.setState({
            hover: false
        });
        console.log('leave');
    },
    render: function() {


        return (
            <div style={{background: 'cadetblue', height: isMobile.any() ? '372px':'480px',position: 'fixed', width: this.props.isDrawerDocked ? '86%':'100%' , float: 'none',margin: '0 auto'}}>
                <ListItem
                    style={{display:'flex',justifyContent: 'center'}}
                    disabled={true}
                >
                    {this.props.editUser ?
                        <div
                            onMouseEnter={this.onMouseEnterHandler}
                            onMouseLeave={this.onMouseLeaveHandler}
                            className="sdfsdfsdfsdf"
                            style={{
                                        backgroundImage:'url("http://www.material-ui.com/images/uxceo-128.jpg")',
                                        borderRadius: '50%',
                                        marginTop: '5.2px',
                                        marginRight: '5px',
                                        marginLeft: '4.2px',
                                        backgroundRepeat: 'round'}}
                        >
                            <IconButton
                                iconStyle={styles.mediumIcon1}
                                style={{
                                width: 100,
                                height: 100,
                                padding: 30,
                                borderRadius: '50%',
                                background: this.state.hover ? 'rgba(228, 228, 228, 0.74)':'none'
                                }}
                                onTouchTap={(e) => {e.preventDefault(); this.refs.UploadDialog.handleOpen()}}
                            >

                                <ContentAdd />
                            </IconButton></div>

                        :
                        <Avatar
                            src="http://www.material-ui.com/images/uxceo-128.jpg"
                            size={100}
                            style={style}
                        />}

                    {this.props.isNew ?
                        <div style={{display:'block', marginTop: '28px', marginLeft: '12px'}}>
                            <a style={{padding: '0px 0px',fontSize:17}}>ID:</a><br/>{this.props.editUser ? null:<br/>}
                        <TextField ref="phoneTextField" style={{width: '164px'}} underlineStyle={styles.underlineStyle} value={this.state.newName} onChange={this._handleNameTextFieldChange}  /> </div>:<a style={{padding: '40px 25px',fontSize:28}}>{this.state.name}</a>}
                </ListItem><br/>
                <ListItem
                    style={{display:'flex',justifyContent: 'space-between',maxWidth: 700, float: 'none',margin: '0 auto'}}
                    disabled={true}
                >

                    <div style={{display:'block'}}>
                        <a style={{padding: '0px 0px',fontSize:17}}>Employee:</a><br/>{this.props.editUser ? null:<br/>}
                        {this.props.editUser ? <TextField ref="phoneTextField" style={{width: '164px'}} underlineStyle={styles.underlineStyle} value={this.state.newPhone} onChange={this._handlePhoneTextFieldChange}  />
                            :<a style={{color:'blue', textDecoration:'underline', cursor: 'pointer', padding: '0px 0px',fontSize:16}}>{this.state.phone}</a>}
                    </div>


                    <div style={{display:'block',marginRight: '10px'}}>
                        <a style={{padding: '0px 8px',fontSize:17}}>Date:</a><br/>{this.props.editUser ? null:<br/>}
                        {this.props.editUser ? <TextField ref="emailTextField" style={{width: '157px',paddingLeft: '8px'}} underlineStyle={styles.underlineStyle} value={this.state.newEmail} onChange={this._handleEmailTextFieldChange}  />
                            :<a style={{color:'blue', textDecoration:'underline', cursor: 'pointer', padding: '0px 8px',fontSize:17}}>{this.state.email}</a>}
                    </div>
                </ListItem>
                <ListItem
                    style={{display:'flex',justifyContent: 'space-between',maxWidth: 700, float: 'none',margin: '0 auto'}}
                    disabled={true}
                >

                    <div style={{display:'block'}}>
                        <a style={{padding: '0px 0px',fontSize:17}}>From Hour:</a><br/>{this.props.editUser ? null:<br/>}
                        {this.props.editUser ? <TextField ref="phoneTextField" style={{width: '164px'}} underlineStyle={styles.underlineStyle} value={this.state.newAddress} onChange={this._handleAddressTextFieldChange}   />
                            :<a style={{color:'blue', padding: '0px 0px',fontSize:16}}>{this.state.address}</a>}
                    </div>

                    <div style={{display:'block',marginRight: '10px'}}>
                        <a style={{padding: '0px 8px',fontSize:17}}>To Hour:</a><br/>{this.props.editUser ? null:<br/>}
                        {this.props.editUser ? <TextField ref="emailTextField" style={{width: '157px',paddingLeft: '8px'}} underlineStyle={styles.underlineStyle} value={this.state.newEmail} onChange={this._handleEmailTextFieldChange}  />
                            :<a style={{color:'blue', textDecoration:'underline', cursor: 'pointer', padding: '0px 8px',fontSize:17}}>{this.state.email}</a>}
                    </div>

                </ListItem>

                <div  style={{padding: '0 7px', maxWidth: 750, float: 'none',margin: '0 auto'}}>
                    <br/>
                    {this.props.editUser ? <Divider style={{backgroundColor: '#bdbdbd'}}/>:null}
                    <br/>
                </div>
                <div  style={{padding: '0 7px', maxWidth: 700, float: 'none',margin: '0 auto',display: 'flex',justifyContent: 'flex-end'}}>
                    {this.props.editUser ? <div><RaisedButton style={{width: '164px', marginRight: 8}} label="cancel" onTouchTap={(e)=>{e.preventDefault(); this.props.cancelEdit()}} primary={true} /><RaisedButton onTouchTap={(e)=>{e.preventDefault(); this.pushEdit()}}  style={{width: '164px'}} label={window.strings.done} primary={true} /></div>:null}
                </div>
                <br/>
            </div>
        );
    }
});
import Popover from 'material-ui/Popover';

const tableData = [
    {
        id:1,
        date: "5/11/2017",
        time: " 1:43:43 PM",
        name: 'John Smith',
        status: 'Employed',
    },
    {
        id:2,
        date: "6/11/2017",
        time: " 1:43:43 PM",
        name: 'Randal White',
        status: 'Unemployed',
    },
    {
        id:3,
        date: "7/11/2017",
        time: " 1:43:43 PM",
        name: 'Stephanie Sanders',
        status: 'Employed',
    },
    {
        id:4,
        date: "8/11/2017",
        time: " 1:43:43 PM",
        name: 'Steve Brown',
        status: 'Employed',
    },
    {
        id:5,
        date: "9/11/2017",
        time: " 1:43:43 PM",
        name: 'Joyce Whitten',
        status: 'Employed',
    },  {
        id:6,
        date: "9/11/2017",
        time: " 1:43:43 PM",
        name: 'Joyce Whitten',
        status: 'Employed',
    },  {
        id:7,
        date: "9/11/2017",
        time: " 1:43:43 PM",
        name: 'Joyce Whitten',
        status: 'Employed',
    },  {
        id:8,
        date: "9/11/2017",
        time: " 1:43:43 PM",
        name: 'Joyce Whitten',
        status: 'Employed',
    },
    {
        id:9,
        date: "10/11/2017",
        time: "1:43:43 PM",
        name: 'Samuel Roberts',
        status: 'Employed',
    }, {
        id:10,
        date: "10/11/2017",
        time: " 1:43:43 PM",
        name: 'Samuel Roberts',
        status: 'Employed',
    }, {
        id:11,
        date: "10/11/2017",
        time: " 1:43:43 PM",
        name: 'Samuel Roberts',
        status: 'Employed',
    }, {
        id:12,
        date: "10/11/2017",
        time: " 1:43:43 PM",
        name: 'Samuel Roberts',
        status: 'Employed',
    }, {
        id:13,
        date: "10/11/2017",
        time: " 1:43:43 PM",
        name: 'Samuel Roberts',
        status: 'Employed',
    },
    {
        id:14,
        date: "11/11/2017",
        time: " 1:43:43 PM",
        name: 'Adam Moore',
        status: 'Employed',
    }, {
        id:15,
        date: "11/11/2017",
        time: " 1:43:43 PM",
        name: 'Adam Moore',
        status: 'Employed',
    }, {
        id:16,
        date: "11/11/2017",
        time: " 1:43:43 PM",
        name: 'Adam Moore',
        status: 'Employed',
    }, {
        id:17,
        date: "11/11/2017",
        time: " 1:43:43 PM",
        name: 'Adam Moore',
        status: 'Employed',
    }, {
        id:18,
        date: "11/11/2017",
        time: " 1:43:43 PM",
        name: 'Adam Moore',
        status: 'Employed',
    },
    {
        id:19,
        date: "12/11/2017",
        time: " 1:43:43 PM",
        name: 'John Smith',
        status: 'Employed',
    },
    {
        id:20,
        date: "13/11/2017",
        time: " 1:43:43 PM",
        name: 'Randal White',
        status: 'Unemployed',
    },
    {
        id:21,
        date: "15/11/2017",
        time: " 1:43:43 PM",
        name: 'Stephanie Sanders',
        status: 'Employed',
    },
    {
        id:22,
        date: "15/11/2017",
        time: " 1:43:43 PM",
        name: 'Steve Brown',
        status: 'Employed',
    },
    {
        id:23,
        date: "16/11/2017",
        time: " 1:43:43 PM",
        name: 'Joyce Whitten',
        status: 'Employed',
    },
    {
        id:24,
        date: "17/11/2017",
        time: " 1:43:43 PM",
        name: 'Samuel Roberts',
        status: 'Employed',
    },
    {
        id:25,
        date: "17/11/2017",
        time: " 1:43:43 PM",
        name: 'Adam Moore',
        status: 'Employed',
    },
    {
        id:26,
        date: "19/11/2017",
        time: " 1:43:43 PM",
        name: 'John Smith',
        status: 'Employed',
    },
    {
        id:27,
        date: "20/11/2017",
        time: " 1:43:43 PM",
        name: 'Randal White',
        status: 'Unemployed',
    },
    {
        id:28,
        date: "20/11/2017",
        time: " 1:43:43 PM",
        name: 'Stephanie Sanders',
        status: 'Employed',
    },
    {
        id:29,
        date: "22/11/2017",
        time: " 1:43:43 PM",
        name: 'Steve Brown',
        status: 'Employed',
    }, {
        id:30,
        date: "22/11/2017",
        time: " 1:43:43 PM",
        name: 'Steve Brown',
        status: 'Employed',
    }, {
        id:31,
        date: "22/11/2017",
        time: " 1:43:43 PM",
        name: 'Steve Brown',
        status: 'Employed',
    }, {
        id:32,
        date: "22/11/2017",
        time: " 1:43:43 PM",
        name: 'Steve Brown',
        status: 'Employed',
    }, {
        id:33,
        date: "22/11/2017",
        time: " 1:43:43 PM",
        name: 'Steve Brown',
        status: 'Employed',
    }, {
        id:34,
        date: "22/11/2017",
        time: " 1:43:43 PM",
        name: 'Steve Brown',
        status: 'Employed',
    },
    {
        id:35,
        date: "23/11/2017",
        time: " 1:43:43 PM",
        name: 'Joyce Whitten',
        status: 'Employed',
    },
    {
        id:36,
        date: "23/11/2017",
        time: " 1:43:43 PM",
        name: 'Samuel Roberts',
        status: 'Employed',
    },
    {
        id:37,
        date: "23/11/2017",
        time: " 1:43:43 PM",
        name: 'Adam Moore',
        status: 'Employed',
    },
    {
        id:38,
        date: "26/11/2017",
        time: " 1:43:43 PM",
        name: 'John Smith',
        status: 'Employed',
    },
    {
        id:39,
        date: "27/11/2017",
        time: " 1:43:43 PM",
        name: 'Randal White',
        status: 'Unemployed',
    },
    {
        id:40,
        date: "28/11/2017",
        time: " 1:43:43 PM",
        name: 'Stephanie Sanders',
        status: 'Employed',
    }, {
        id:41,
        date: "28/11/2017",
        time: " 1:43:43 PM",
        name: 'Stephanie Sanders',
        status: 'Employed',
    }, {
        id:42,
        date: "28/11/2017",
        time: " 1:43:43 PM",
        name: 'Stephanie Sanders',
        status: 'Employed',
    }, {
        id:43,
        date: "28/11/2017",
        time: " 1:43:43 PM",
        name: 'Stephanie Sanders',
        status: 'Employed',
    }, {
        id:44,
        date: "28/11/2017",
        time: " 1:43:43 PM",
        name: 'Stephanie Sanders',
        status: 'Employed',
    },
    {
        id:45,
        date: "29/11/2017",
        time: "1:43:43 PM",
        name: 'Steve Brown',
        status: 'Employed',
    },
    {
        id:46,
        date: "1/12/2017",
        time: " 1:43:43 PM",
        name: 'Joyce Whitten',
        status: 'Employed',
    },
    {
        id:47,
        date: "2/12/2017",
        time: " 1:43:43 PM",
        name: 'Samuel Roberts',
        status: 'Employed',
    },
    {
        id:48,
        date: "3/12/2017",
        time: "1:43:43 PM",
        name: 'Adam Moore',
        status: 'Employed',
    },
];

var lastDate = null;
var Row = React.createClass({
    getInitialState: function() {
        return {
            checked: false
        };
    },
    checkIt: function() {
        this.props.callback(this.props.index, !this.props.checked);
    },
    render: function() {

        return (


            <ListItem onTouchTap={this.props.showAppointment} className="table-row"
                      leftCheckbox={this.props.showCheckboxes? <Checkbox checked={this.props.checked} onCheck={this.checkIt} />: null}>
                <table style={{width: '100%',tableLayout: 'fixed'}}>
                    <tr>
                        {this.props.isEmployee ? null:
                        <td style={{paddingLeft: '8px',textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>{this.props.obj.name}</td>}
                        <td style={{paddingLeft: '8px',textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>{this.props.obj.fromHour}</td>
                        <td style={{paddingLeft: '17px',textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>{this.props.obj.toHour}</td>
                    </tr>
                </table>
            </ListItem>
        );
    }
});
var AbsencesList = React.createClass({
    getInitialState: function() {
       //alert("Emp ID: " + this.props.location.state.employeeId);
        var employeeId = {employeeId: this.props.location.state.employeeId}
        fetch(SiteURL.get + "showFutureEmployeeAbsence",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(employeeId)
            })
            .then((response) => {

                if (response.status == 500) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);

                    response.json().then((data)=>{
                        console.log(data);
                       //alert("message: " + data.message + "    code: " + data.code);
                    });

                    return;
                }

                // console.log(response.json());
                // Examine the text in the response

                response.json().then((data)  => {
                    console.log(data);
                    this.setState({tableData : data});

                });
            })
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });



        return { showResults: false,
                 editUser: false,
                 phone: '052-345348273',
                 email:'aviyamlsf@sdf.com',
                 name:'asfasd asdasda',
            // showResults: false,
            tableData: [],
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: false,
            multiSelectable: true,
            enableSelectAll: true,
            deselectOnClickaway: true,
            showCheckboxes: false,
            height: '75vh',
            popOverOpen: false,
            date: tableData[0].date,
            isItemVisible: false,
            Appointment: null,
            checked: false,
            checkAll: false,
            rowState: []
        };
    },
    componentWillMount: function(){
        // var rowState =[];
        for(var i = 0; i < this.state.tableData.length; i++) {
            this.state.rowState[i] = false;
        }
    },
    checkRow: function (id,value) {
        this.state.rowState[id] = value;
        if (this.state.checkAll) {
            this.state.checkAll = !this.state.checkAll;
        }
        this.setState({
            rowState: this.state.rowState,
            checkAll: this.state.checkAll
        });
    },
    cheeckAll: function () {
        var rowState =[];
        var checkState = !this.state.checkAll;
        for(var i = 0; i < this.state.rowState.length; i++) {
            rowState[i] = checkState;
        }

        this.state.checkAll = checkState;

        this.setState({
            rowState: rowState,
            checkAll: this.state.checkAll
        });
    },
    handleToggle: function(event, toggled) {
        this.setState({
            [event.target.name]: toggled,
        });
    },

    handleChange: function(event) {
        this.setState({height: event.target.value});
    },

    handleTouchTap: function(event){
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            popOverOpen: true,
            anchorEl: event.currentTarget,
        });
    },

    handleRequestClose: function() {
        this.setState({
            popOverOpen: false,
        });
    },

    toggleCheckboxes: function() {
        this.setState({
            selectable: !this.state.selectable,
            showCheckboxes: !this.state.showCheckboxes,
        });
        this.handleRequestClose();
    },
    setDateTitle: function(date)
    {
        this.setState({
            date: date
        });
    },
    showAppointment: function()
    {
        this.setState({
            Appointment: tableData[2],
            isItemVisible: true
        });
    },
    onClick: function() {
        this.setState({ showResults: !this.state.showResults });
    },
    onCheck: function(event, checked) {
        console.log(event);
        event.target.checked = true;
    },
    checkAllCheckboxes: function() {

        this.setState({checked: !this.state.checked});
        // return;
        ////alert(checked);
        // var {selectedItems} = this.state;
        // selectedItems.push( someData );
        // this.setState({selectedItems})
    },
    navigateBack: function(){
        this.state.isItemVisible ?
            this.setState({

                isItemVisible: false
            }):
            window.history.back()
        // this.goBack();
    },
    componentDidMount: function() {

    },
    render: function() {
        const UserProfileAppBar = () => (
            <AppBar
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle :null}
                style={styles.appbar}
                title={"Absence"}
                // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={this.props.openDrawer}
                iconElementRight={
               <IconButton onTouchTap={ (e) => {/*e.preventDefault();*/ this.setState({editUser: !this.state.editUser})}}><EditIcon color={white}/></IconButton>
                }
            />
        );
        const resultsTitle = [
            <div style={styles.title}>
                <i style={{fontSize: 19}}>{"99 Results."}</i>
            </div>
        ];

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <UserProfileAppBar/>
                    <div>
                        <div style={this.props.isDrawerDocked ? styles.pushContent :null}>
                       <div style={styles.toppad}></div>
                        <div className="appTable" style={styles.container}>
                            <Card zDepth={1}>
                                <div
                                    style={styles.divheader}
                                > {resultsTitle}
                                    <div>
                                        <IconButton onTouchTap={this.handleTouchTap}><MoreVertIcon /></IconButton>
                                        <Popover
                                            open={this.state.popOverOpen}
                                            anchorEl={this.state.anchorEl}
                                            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                            onRequestClose={this.handleRequestClose}
                                        >
                                            <Menu>
                                                <MenuItem onTouchTap={this.toggleCheckboxes} primaryText="Select items"/>
                                            </Menu>
                                        </Popover>
                                    </div>
                                </div>
                                <div>

                                    <div>
                                        <div
                                            className="table-ro"
                                            fixedHeader={this.state.fixedHeader}
                                            selectable={this.state.selectable}
                                            multiSelectable={this.state.multiSelectable}
                                        >
                                            <ListItem style={{backgroundColor: 'rgb(232, 232, 232)'}} disabled={true}
                                                      leftIcon={this.state.showCheckboxes? <Checkbox checked={this.state.checkAll} onCheck={this.cheeckAll} />: null}>
                                                <table style={{width: '100%',tableLayout: 'fixed'}}>
                                                    <tr>
                                                        {this.props.location.state.isEmployee ? null:
                                                        <td style={{paddingLeft: '8px',textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>
                                                            From Hour
                                                        </td> }
                                                        <td style={{paddingLeft: '8px',textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>
                                                            From Hour
                                                        </td>
                                                        <td style={{paddingLeft: '17px',textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>
                                                            To Hour
                                                        </td>
                                                    </tr>
                                                </table>
                                            </ListItem>

                                            <div
                                                style={{overflow: 'auto',overflowX: 'hidden', height: this.state.height}}
                                                displayRowCheckbox={this.state.showCheckboxes}
                                                deselectOnClickaway={this.state.deselectOnClickaway}
                                                showRowHover={this.state.showRowHover}
                                                stripedRows={this.state.stripedRows}
                                            >
                                                {this.state.tableData.map((row, index) => {
                                                    if (lastDate == null || row.date != lastDate) {
                                                        lastDate = row.date;
                                                        return (
                                                            <div>
                                                                <h2 style={styles.pageTitle}>{row.date}</h2>
                                                                <Divider/>
                                                                <Row showAppointment={this.showAppointment} isEmployee={this.props.location.state.isEmployee} showCheckboxes={this.state.showCheckboxes} obj={row} index={index} key={row.id} checked={this.state.rowState[index]} callback={this.checkRow} />
                                                                <Divider/></div>
                                                        );
                                                    }
                                                    else {
                                                        lastDate = row.date;

                                                        return (
                                                            <div>
                                                                <Row showAppointment={this.showAppointment} isEmployee={this.props.location.state.isEmployee} showCheckboxes={this.state.showCheckboxes} obj={row} index={index} key={row.id} checked={this.state.rowState[index]} callback={this.checkRow} />
                                                                <Divider/></div>
                                                        );
                                                    }
                                                })}
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </Card>
                        </div></div>
</div>
            </div>
            </MuiThemeProvider>
        );
    }
});


var AppBarColor = "blue";
var EmployeesPage = React.createClass({

    getInitialState: function() {
        // var personList=[];
        // var urlEnd = this.props.personType == 'Employee' ? 'showEmployees': 'showCustomers';
        // console.log("url: ",urlEnd);
        //
        // var _this = this;
        // superagent
        //     .get(SiteURL.get + urlEnd)
        //     .end(function(err, res){
        //         if (err) {
        //             console.log('error: ' , err);
        //             console.log('response: ' , res);
        //
        //             _this.setState({personList : []});
        //             _this.setState({allPersonsList : []});
        //
        //            //alert('Error!');
        //             reject(err);
        //         } else {
        //             console.log('response: ' , res);
        //             var data = JSON.parse(res.text);
        //             _this.setState({personList : data});
        //             _this.setState({allPersonsList : data});
        //             resolve(res.text);
        //         }
        //     });

        // fetch(SiteURL.get + urlEnd)
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

        this.loadList();
        return {
            showResults: false,
            searchBtnPressed: false,
            showEmployee: false,
            empName : null,
            empId : null,
            searchText: null,
            allPersonsList: [],
            personList: [],
            obj: null
        };
    },
    componentWillReceiveProps(nextProps){
        // if (nextProps.location.state !== this.state) {
        //     // do stuffs
        //    //alert('componentWillReceiveProps');
        // }
        // this.forceUpdate();

        this.loadList();
        // this.forceUpdate();
        if(this.state.showEmployee)
        this.setState({showEmployee: false});
    },
    componentWillMount: function() {
        ////alert(this.props.personType);

        // data.append( "json", JSON.stringify( payload ) );
        //
        // fetch("/echo/json/",
        //     {
        //         method: "POST",
        //         body: data
        //     })
        //     .then(function(res){ return res.json(); })
        //     .then(function(data){//alert( JSON.stringify( data ) ) })

        // fetch('http://localhost:8887/api/getAllEmployees')
        //     .then(
        //         function(response) {
        //             if (response.status !== 200) {
        //                 console.log('Looks like there was a problem. Status Code: ' +
        //                     response.status);
        //                 return;
        //             }
        //
        //             // console.log(response.json());
        //             // Examine the text in the response
        //             response.json().then(function(data) {
        //                //alert(data);
        //                 this.setState({ employeesList: data });
        //             });
        //         }
        //     )
        //     .catch(function(err) {
        //         console.log('Fetch Error :-S', err);
        //     });
        // this.loadList();
    },
    componentDidMount: function() {
        console.log("window.strings",window.strings.personsPage.title);
        document.addEventListener('click', this.handleClick, false);
        // muiTheme.appBar.color = cyan500;
        // muiTheme.appBar.textColor = white;
        // this.loadList();
    },
    loadList: function() {
        var personList=[];
        var urlEnd = this.props.personType == 'Employee' ? 'showEmployees': 'showCustomers';
        console.log("url: ",urlEnd);

        var _this = this;
        superagent
            .get(SiteURL.get + urlEnd)
            .end(function(err, res){
                if (err) {
                    console.log('error: ' , err);
                    console.log('response: ' , res);

                    _this.setState({personList : []});
                    _this.setState({allPersonsList : []});

                   //alert('Error!');
                    // reject(err);
                } else {
                    console.log('response: ' , res);
                    var data = JSON.parse(res.text);
                    _this.setState({
                        personList : data,
                        allPersonsList : data
                    },() => _this.refs.EmpAndCustPage.forceUpdate());
                    //TODO fix reload component problem
                    // _this.setState({allPersonsList : data});
                    // resolve(res.text);
                }
            });
    },
    handleClick: function (event) {
        // const domNode = ReactDOM.findDOMNode(this);
        // if (event.target.parents('div#qwer').length) {
        //    //alert('Your clicked element is having div#hello as parent');
        // }
        // if (!event.target.className == 'qwer') {
        //    //alert("outside");
        // }
        ////alert(event.target.className);

        const domNode = document.getElementById("EABS");
        // const domNode = ReactDOM.findDOMNode(this).child.getAttribute("pppppoo");

        if ((!domNode || !domNode.contains(event.target))) {
            // this.setState({
            //     visible : false
            // });
            // console.log("click outside");
            if(this.state.searchBtnPressed){
                // muiTheme.appBar.color = cyan500;
                // muiTheme.appBar.textColor = white;
                this.setState({ searchBtnPressed: false });
            }

        }
        // else
        // {
        //     console.log("skdfhgsdkfjksdfjskjfhkjfhksjfhskj");
        // }
    },
    handleAAPCircleClick: function() {
        ////alert(this.props.personType.toLowerCase());
        this.props.history.push('/setnew' + this.props.personType.toLowerCase());
    },
    componentWillUnmount: function(){
        ////alert('unmount');
        document.removeEventListener('click', this.handleClick, false);
        // muiTheme.appBar.color = cyan500;
        // muiTheme.appBar.textColor = white;
        this.setState({ searchBtnPressed: false });
    },
    handleCardClick: function(obj) {
            this.setState({ showEmployee: true,
                empName : obj.name,
                empId: obj.id,
                obj: obj
            });


        if(this.state.searchBtnPressed){
            // muiTheme.appBar.color = cyan500;
            // muiTheme.appBar.textColor = white;
            this.setState({ searchBtnPressed: false });
        }


    },
    onClick: function() {
        // this.setState({ showResults: !this.state.showResults });
        // AppBarColor = "white";
        ////alert();
        // this.refs.searchInput.focus();

        if(this.state.searchBtnPressed){
            // muiTheme.appBar.color = cyan500;
            // muiTheme.appBar.textColor = white;
        }
        else{
            // muiTheme.appBar.color = white;
            // muiTheme.appBar.textColor = grey900;
        }
        this.setState({ searchBtnPressed: !this.state.searchBtnPressed });

        setTimeout(()=>{ document.querySelector('.searchInput input').focus(); }, 500);

    },
    setfocus:function() {
        setTimeout(()=>{ document.querySelector('.searchInput input').focus(); }, 500);
    },
    emptySearchBar: function() {
        this.setState({ searchText: ""});
    },
    onSearchBarChange: function() {
        var list = [];
        this.setState({personList:[]});
        for(var i = 0; i < this.state.allPersonsList.length; i++){

            if(this.state.allPersonsList[i].Name.includes(this.state.searchText)) this.state.personList.push(this.state.allPersonsList[i]);
        }
    },
    render: function() {
        const EmployeesAppBar = () => (
            <AppBar
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle :null}
                style={styles.appbar}
                title={this.props.personType == 'Customer' ? window.strings.personsPage.appbar.title.customer : window.strings.personsPage.appbar.title.employee}
                // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={this.props.openDrawer}
                iconElementRight={
               <IconButton onTouchTap={ (e) => {/*e.preventDefault();*/ this.onClick();}}><SearchIcon color={white}/></IconButton>
                }
            />
        );
        const EmployeesAppBarSearch = () => (
            <AppBar
                style={styles.appbar}
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle :null}
                title={<div ><TextField className="searchInput" underlineShow={false}  style={{marginLeft:'8%',width: '100%',fontSize:23}}  hintText={window.strings.emloyeesPage.appbarSearch} onChange={this.refs.EmpAndCustPage.filterList} /></div>}
                iconElementLeft={<IconButton><ArrowBackIcon /></IconButton>}
                onLeftIconButtonTouchTap={(e) => {this.onClick();}}
                id="EABS"
                iconElementRight={
               <IconButton onTouchTap={ (e) => {e.preventDefault(); this.emptySearchBar(); this.setfocus();}}><CloseIcon /></IconButton>
                }
            />
        );
        return (
            <MuiThemeProvider muiTheme={this.state.searchBtnPressed ? muiThemeWhite:muiTheme}>
                {this.state.showEmployee ?
                    <EmployeePage history={this.props.history} personType={this.props.personType} isDrawerDocked={this.props.isDrawerDocked} goBacck={() => this.setState({ showEmployee: false})} obj={this.state.obj} name={this.state.empName} id={this.state.empId}/>
                    :
                    <div>
                    {this.state.searchBtnPressed ? <EmployeesAppBarSearch /> : <EmployeesAppBar/>}
                    <div style={this.props.isDrawerDocked ? styles.pushContent : null}>

                    <EmpAndCustPage ref="EmpAndCustPage" personList={this.state.personList} personType={this.props.personType} handleCardClick={(obj) => {this.handleCardClick(obj);}} />
                    <AddAppointmentCircle circleIcon={true} handleAAPCircleClick={this.handleAAPCircleClick}/>


            </div>
                    </div>}
            </MuiThemeProvider>
        );
    }
});

var SetNewPersonPage = React.createClass({
    getInitialState: function() {

        var empObj = {
            id: null,
            name: null,
            phone:null,
            email:null,
            password: '768768686'
        };

        var custObj = {
            id: null,
            name: null,
            address: 'vrvrt',
            phone:null,
            email:null,
            password: '768768686'
        };
        return {
            showResults: false,
            showEmployee: false,
            editUser: true,
            empName : null,
            empId : null,
            phone: '',
            email: '',
            obj: this.props.personType == 'Employee' ? empObj : custObj,
            isDone: false
        };
    },
    componentDidMount: function() {

    },
    handleAAPCircleClick: function() {

    },
    cancelEdit: function() {
        this.setState({  editPerson: false });
    },
    pushEdit: function(obj) {

        var _this = this;
        var newObj = (this.props.personType == 'Employee') ? {Employee: obj}: {Customer: obj};
        console.log(JSON.stringify(newObj));
        fetch(SiteURL.get + "setNew" + this.props.personType,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(newObj)
            })
            .then((response) => {

                    if (response.status == 500) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);

                        response.json().then((data)=>{
                            console.log(data);
                           //alert("message: " + data.message + "    code: " + data.code);
                        });

                        return;
                    }

                    // console.log(response.json());
                    // Examine the text in the response

                    // response.json().then((data)  => {
                    //     console.log(data);
                        console.log("new person created");

                        _this.setState({ isDone: true });
                        setTimeout(()=>{ window.history.back(); }, 3000);

                    // });
                })
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });

        this.setState({  editPerson: false });

    },
    handleCardClick: function(name,id) {
        ////alert(name + "    " + id);

        // if(this.state.showEmployee){
        //     this.setState({ showEmployee: false });
        // }
        // else {
        //     this.setState({ showEmployee: true,
        //                     empName : name,
        //                     empId: id
        //     });
        // }
    },
    navigateBack: function(){
        // this.props.goBacck();
        window.history.back();
        // this.goBack();
    },
    onClick: function() {
        // this.setState({ showResults: !this.state.showResults });

    },
    componentWillMount : function () {

    },
    render: function() {

        const EmployeesAppBar = () => (
            <AppBar
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle :null}
                style={styles.appbar}
                title={"New " + this.props.personType}
                iconElementLeft={<IconButton><ArrowBackIcon /></IconButton>}
                onLeftIconButtonTouchTap={this.navigateBack}
            />
        );
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                <EmployeesAppBar/>
                <div style={this.props.isDrawerDocked ? styles.pushContent :null}>
                    <div style={styles.toppad}></div>
                    {this.state.isDone ?
                        <p style={styles.p}>new {this.props.personType} created!</p>:
                    <PersonShowAndEdit isNew={true} editUser={true} obj={this.state.obj} personType={this.props.personType} pushEdit={(obj) => this.pushEdit(obj)} cancelEdit={this.cancelEdit}/>
                    }
                </div>
                </div>
            </MuiThemeProvider>
        );
    }
});

var EmployeePage = React.createClass({
    getInitialState: function() {

        return {
            showResults: false,
            showEmployee: false,
            editPerson: false,
            empName : null,
            empId : null,
            phone: '',
            email: '',
            toolsBar: true
        };
    },
    componentDidMount: function() {

    },
    handleAAPCircleClick: function() {

    },
    handleCardClick: function(name,id) {
        ////alert(name + "    " + id);

        // if(this.state.showEmployee){
        //     this.setState({ showEmployee: false });
        // }
        // else {
        //     this.setState({ showEmployee: true,
        //                     empName : name,
        //                     empId: id
        //     });
        // }
    },
    navigateBack: function(){
        this.props.goBacck();
        // window.history.back();
        // this.goBack();
    },
    onClick: function() {
        // this.setState({ showResults: !this.state.showResults });

    },
    // showAppointments: function() {
    //    //alert("showAppointments");
    //     this.props.history.push('/employeeabsence');
    //
    // },
    // showAbsences: function() {
    //    //alert("showAbsences");
    //     this.props.history.push('/employeeappointments');
    //
    // },
    cancelEdit: function() {
        this.setState({  editPerson: false });

    },
    componentWillMount : function () {
        // var urlEnd = this.props.personType == 'Employee' ? 'showEmployee': 'showCustomer';
        // console.log("url: ",urlEnd);
        // console.log('empId', this.props.id);
        // var payload = {
        //     employeeId: this.props.id
        // };
        //
        // fetch(SiteURL.get + urlEnd,
        //     {
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         method: "POST",
        //         body: JSON.stringify( payload )
        //     })
        //     .then((response) => {
        //             if (response.status !== 201) {
        //                 console.log('Looks like there was a problem. Status Code: ' +
        //                     response.status);
        //                 return;
        //             }
        //
        //             // console.log(response.json());
        //             // Examine the text in the response
        //
        //             response.json().then((data)  => {
        //                 console.log(data);
        //                 this.setState({
        //                     phone : data.Phone,
        //                     email : data.Email
        //                 });
        //             });
        //         }
        //     )
        //     .catch(function(err) {
        //         console.log('Fetch Error :-S', err);
        //     });

    },
    render: function() {

        // const bottomCard1 = () => {
        //    return {
        //         position: 'fixed',
        //         width: this.props.isDrawerDocked? '86%':'100%',
        //         bottom: 0
        //     }
        // };
        // const bottomCard2 = () => {
        //    return {
        //            position: 'fixed',
        //            width: this.props.isDrawerDocked? '86%':'100%',
        //            bottom: 0,
        //            height: '37px'
        //     }
        // };

        const style = {

            bottomCard1: {
            position: 'fixed',
            width: this.props.isDrawerDocked? '86%':'100%',
            bottom: 0
        },
            bottomCard2: {
                position: 'fixed',
                width: this.props.isDrawerDocked? '86%':'100%',
                bottom: 0,
                height: '37px'
            }};
        const EmployeesAppBar = () => (
            <AppBar
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle :null}
                style={styles.appbar}
                title={"Employees"}
                iconElementLeft={<IconButton><ArrowBackIcon /></IconButton>}
                onLeftIconButtonTouchTap={this.navigateBack}
            />
        );
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                <EmployeesAppBar/>
                <div style={this.props.isDrawerDocked ? styles.pushContent :null}>
                <div style={styles.toppad}></div>
                    <PersonShowAndEdit isDrawerDocked={this.props.isDrawerDocked} editUser={this.state.editPerson} obj={this.props.obj} personType={this.props.personType} pushEdit={this.pushEdit} cancelEdit={this.cancelEdit}/>
                  <div style={this.state.toolsBar ? style.bottomCard1 : style.bottomCard2}>
                   <Card zDepth={5} style={{backgroundColor:'white', height: 100, width: 438, maxWidth: '103%', float: 'none',margin: '0 auto'}}>
                       <ListItem onTouchTap={(e)=>{e.preventDefault(); this.setState({toolsBar: !this.state.toolsBar})}}  innerDivStyle={{ padding: 0}}><div style={{display:'flex',justifyContent: 'center'}}>{this.state.toolsBar ? <DownIcon/> : <UpIcon/>}</div></ListItem>
                       <hr style={{width: '90%', margin: '-1px auto',border: 'none', height: '1px', backgroundColor: 'rgb(224, 224, 224)'}}/><ListItem
                    style={{width: 700, maxWidth: '100%',padding:0}}
                    disabled={true}
                >

                        <div style={{width: '80vw', float: 'none',margin: '0px auto',display: 'flex', overflowY: 'hidden'}}>
                        { isMobile.any() ?  <IconButton iconStyle={icons.mediumIcon}
                                    style={icons.small}>
                            <CallIcon/>
                            <a style={{height:'none'}}>Call</a>
                        </IconButton> : null}
                        <IconButton iconStyle={icons.mediumIcon}
                                    style={icons.small}>
                            <DeleteIcon/>
                            <a style={{height:'none'}}>Delete</a>
                        </IconButton>
                        <IconButton iconStyle={icons.mediumIcon}
                                    style={icons.small}
                                    onTouchTap={() => (this.setState({editPerson: true, toolsBar: false}))}>
                            <EditIcon/>
                            <a style={{height:'none'}}>Edit</a>
                        </IconButton>



                        {isMobile.any() ? <IconButton iconStyle={icons.mediumIcon}
                                    style={icons.small}>
                            <TextIcon/>
                            <a style={{height:'none'}}>Text</a>
                        </IconButton> : null}
                        <IconButton iconStyle={icons.mediumIcon}

                                    style={icons.small}>
                            <AppointmentsIcon/>
                            <a style={{height:'none'}}>Appointments</a>
                        </IconButton>
                        <IconButton iconStyle={icons.mediumIcon}

                                    style={icons.small}>
                            <EditIcon/>
                            <a style={{height:'none'}}>Absence</a>
                        </IconButton></div>
                   </ListItem></Card></div>
                </div></div>
            </MuiThemeProvider>
        );
    }
});



var AppointmentsPage = React.createClass({
    handleAAPCircleClick: function(){
        this.props.history.push('/setappointment');
    },
    render: function() {
        const DefaultAppBar = () => (
            <AppBar
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle :null}
                style={styles.appbar}
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
                    <div style={this.props.isDrawerDocked ? styles.pushContent :null}>
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
                    <AddAppointmentCircle circleIcon={true}  handleAAPCircleClick={this.handleAAPCircleClick} />
                </div></div>
            </MuiThemeProvider>
        );
    }
});

var AbsencesPage = React.createClass({
    getInitialState: function() {
        var custObj = {
            id: null,
            name: null,
            address: null,
            phone:null,
            email:null,
            password: null
        };

        return {
            editAbsence: false,
            obj: custObj
        };
    },
    handleAAPCircleClick: function(){
        this.setState({editAbsence: true});
    },
    render: function() {
        const DefaultAppBar = () => (
            <AppBar
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle :null}
                style={styles.appbar}
                title={window.strings.absencesPage.appbar.title}
                // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={this.props.openDrawer}
                //         iconElementRight={         //         <IconMenu         //         iconButtonElement={         //   <IconButton><MoreVertIcon /></IconButton>         // }         //         targetOrigin={{horizontal: 'right', vertical: 'top'}}         //         anchorOrigin={{horizontal: 'right', vertical: 'top'}}         //     >         //         <MenuItem primaryText="Sign out" />         //         <MenuItem primaryText="Settings" />         //         <MenuItem primaryText="About" />         //     </IconMenu>         //         }
            />
        );
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <DefaultAppBar/>
                    <div style={this.props.isDrawerDocked ? styles.pushContent :null}>
                    <div style={styles.toppad}></div>

                        {this.state.editAbsence ?
                            <AbsencesShowAndEdit isNew={true} editUser={true} obj={this.state.obj} pushEdit={(obj) => this.pushEdit(obj)} isDrawerDocked={this.props.isDrawerDocked} cancelEdit={this.cancelEdit}/>
                            :
                            <div style={{maxWidth:700, float: 'none', margin: '0 auto'}}>
                            <List style={{padding: "12px", marginTop: 30}}>
                        <ListItem   style={{padding: "9px 0"}} primaryText={window.strings.absencesPage.listTitle.absences}  onTouchTap={this.props.onRequestChange} containerElement={<Link to="/absenceslist"/>}/>
                        <Divider/>
                        <ListItem   style={{padding: "9px 0"}} primaryText={window.strings.absencesPage.listTitle.byEmployee} onTouchTap={this.props.onRequestChange} containerElement={<Link to="/absenceslistbyemployee"/>}/>
                        <Divider/>
                    </List> </div>}

                        {this.state.editAbsence ? null : <AddAppointmentCircle circleIcon={true}  handleAAPCircleClick={this.handleAAPCircleClick} />}
                </div>
                </div>
            </MuiThemeProvider>
        );
    }
});

var AddAppointmentCircle = React.createClass({
    getInitialState()
    {
        return { opene: false,
                 circleIcon: this.props.circleIcon
        };
    },
    handleToggle()
    {
        console.log("handle toggle");
        this.props.handleAAPCircleClick();

    },
    handleAccept(date) {
        // this.refs.AHDialog.show(date);
    },
    render: function() {

        return (
            <div>
                <FloatingActionButton backgroundColor={muiTheme.palette.accentColor} style={{
                  margin: 0,
                  top: 'auto',
                  right: 20,
                  bottom: 20,
                  left: 'auto',
                  position: 'fixed',
                  zIndex: 222
                }} onTouchTap={this.handleToggle}>
                    { this.state.circleIcon ? <ContentAdd/> : <DateRangeIcon/> }
                </FloatingActionButton>
            </div>
        );
    }
});

var Ap11pointmentsList = React.createClass({
    getInitialState: function() {
        return { showResults: false };
    },
    componentDidMount: function() {

    },
    onClick: function() {
            this.setState({ showResults: !this.state.showResults });
    },
    navigateBack: function(){
        window.history.back();
        // this.goBack();
    },
    render: function() {
        const AppointmentsListAppBar = () => (
            <AppBar
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle :null}
                style={styles.appbar}
                title={"Appointments"}
                iconElementLeft={<IconButton><ArrowBackIcon /></IconButton>}
                onLeftIconButtonTouchTap={this.navigateBack}
                iconElementRight={
               <div><IconButton onTouchTap={ (e) => {/*e.preventDefault();*/ this.onClick();}}><FilterIcon color={white}/></IconButton><IconMenu
            iconButtonElement={
          <IconButton><MoreVertIcon color={white}/></IconButton>
        }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
            <MenuItem primaryText="Sign out" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="About" />
        </IconMenu></div>
                }
            />
        );
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <AppointmentsListAppBar/>
                <div style={this.props.isDrawerDocked ? styles.pushContent :null}>
                <div style={styles.toppad}></div>
                { this.state.showResults ?
                    <FilterBar isDrawerDocked={this.props.isDrawerDocked} wideFilter={true} onFilter={this.onClick}/>

                    : null }
                    {isMobile.any() ? null:<div style={styles.toppad}></div>}
                <AppointmentTableModel />
            </div></div>
            </MuiThemeProvider>
        );
    }
});

var PicturesPage = React.createClass({
    getInitialState: function() {
        return { showResults: false };
    },
    componentDidMount: function() {

    },
    onClick: function() {
            this.setState({ showResults: !this.state.showResults });
    },
    navigateBack: function(){
        window.history.back();
        // this.goBack();
    },
    render: function() {
        const PicturesAppBar = () => (
            <AppBar
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle :null}
                style={styles.appbar}
                title={window.strings.picturesPage.appbar.title}
                // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={this.props.openDrawer}
                iconElementRight={
               <div><IconMenu
            iconButtonElement={
          <IconButton><MoreVertIcon color={white}/></IconButton>
        }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
            <MenuItem primaryText="Sign out" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="About" />
        </IconMenu></div>
                }
            />
        );
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <PicturesAppBar/>
                <div style={this.props.isDrawerDocked ? styles.pushContent :null}>
                    <div style={styles.toppad}></div>
                    <div style={styles.toppad}></div>
                    <div style={{maxWidth:700, float: 'none', margin: '0 auto'}}>
               <Pics superagent={superagent}/>
                </div></div>
            </div>
            </MuiThemeProvider>
        );
    }
});


var FilterBar = React.createClass({
    getInitialState: function() {
        return { showResudflts: false };
    },
    render: function() {
        return (
            <div>
                <Card zDepth={5} style={{padding:"16px", backgroundColor: "#47cbdc",position: "fixed", zIndex:222, right: 0, left: 0}}>
                    <div style={this.props.isDrawerDocked ? {marginLeft: 250} :null}>
                        <div style={styles.containerWithoutPadding}>
                             <DateRange wideFilter={this.props.wideFilter} onFilter={this.props.onFilter}/>
                        </div>
                    </div>
                </Card>

            </div>
        );
    }
});
var harta = React.createClass({
    getInitialState: function() {
        console.log("harta");
       //alert(this.props.location.state.po);
        return ({ showResudflts: false });
    },
    render: function() {
        return (
            <div>
              uyguyguyguyguyg
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


// {"OpeningHours":[{"day":"SUNDAY","fromHour1":"08:22:22","toHour1":"20:00:00","fromHour2":null,"toHour2":null},
//     {"day":"MONDAY","fromHour1":"08:00:00","toHour1":"20:00:00","fromHour2":null,"toHour2":null},
//     {"day":"TUESDAY","fromHour1":"08:00:00","toHour1":"20:00:00","fromHour2":null,"toHour2":null},
//     {"day":"WEDNESDAY","fromHour1":"08:00:00","toHour1":"20:00:00","fromHour2":null,"toHour2":null},
//     {"day":"THURSDAY","fromHour1":"08:00:00","toHour1":"20:00:00","fromHour2":null,"toHour2":null},
//     {"day":"FRIDAY","fromHour1":"07:00:00","toHour1":עת"14:00:00","fromHour2":null,"toHour2":null},
//     {"day":"SATURDAY","fromHour1":null,"toHour1":null,"fromHour2":null,"toHour2":null}]}
var dayObjTemplate = {day:null,fromHour1:null,toHour1:null,fromHour2:null,toHour2:null};
var dayObj = {day:null,fromHour1:null,toHour1:null,fromHour2:null,toHour2:null};
var openingHours = [];
var t;
var OpeningHoursPage = React.createClass({
    getInitialState: function() {
        var _this = this;
        superagent
            .get(SiteURL.get + "showOpeningHours")
            .set('Accept', 'application/json')
            .end(function(err, res){
                if (err) {
                    console.log('error: ' , err);
                    console.log('response: ' , res.text);

                   //alert('Error!');
                    // reject(err);
                } else {
                    console.log('response: ' , res);
                    // _this.setState({tableData : JSON.parse(res.text)});
                    var data = JSON.parse(res.text);
                    data.map((obj)=>(
                        obj.fromHour1 = !obj.fromHour1 ? window.strings.openingHoursPage.closed: obj.fromHour1.slice(0, -3),
                            obj.toHour1 = !obj.toHour1 ? null:obj.toHour1.slice(0, -3)
                    ));
                    _this.setState({data : data});
                    // _this.setRowsState(tableData1);
                    // resolve(res.text);
                }
            });
        // fetch(SiteURL.get + "showOpeningHours")
        //     .then((response) => {
        //             if (response.status !== 200) {
        //                 console.log('Looks like there was a problem. Status Code: ' +
        //                     response.status);
        //                 this.setState({data : []});
        //                 return;
        //             }
        //
        //             // console.log(response.json());
        //             // Examine the text in the response
        //
        //             response.json().then((data)  => {
        //                 console.log(data);
        //                 data.map((obj)=>(
        //                 obj.fromHour1 = !obj.fromHour1 ?  "Closed": obj.fromHour1.slice(0, -3),
        //                     obj.toHour1 = !obj.toHour1 ? null:obj.toHour1.slice(0, -3)
        //                 ));
        //                 this.setState({data : data});
        //             });
        //         }
        //     )
        //     .catch(function(err) {
        //         console.log('Fetch Error :-S', err);
        //     });

        return {
            showResults: true,
            data: [],
            isOpeningHoursSet: false
        };
    },
    componentDidMount: function() {
        ////alert(strings.OpeningHoursPage.weekDays['sunday']);
        // const filterAndMenuBtn = (<div><IconButton onTouchTap={ (e) => {/*e.preventDefault();*/ this.onClick();}}><EditIcon color={white}/></IconButton><IconMenu
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
    updateOpeningHours: function() {
        // console.log(openingHours);
        if(this.state.isOpeningHoursSet) {
            var _this = this;
            // superagent
            //     .get(SiteURL.get + "updateOpeningHours")
            //     .set('Accept', 'application/json')
            //     .end(function (err, res) {
            //         if (err) {
            //             console.log('error: ', err);
            //             console.log('response: ', res.text);
            //
            //            //alert('Error!');
            //             // reject(err);
            //         } else {
            //             console.log('response: ', res);
            //             // _this.setState({tableData : JSON.parse(res.text)});
            //             var data = JSON.parse(res.text);
            //             data.map((obj)=>(
            //                 obj.fromHour1 = !obj.fromHour1 ? window.strings.openingHoursPage.closed : obj.fromHour1.slice(0, -3),
            //                     obj.toHour1 = !obj.toHour1 ? null : obj.toHour1.slice(0, -3)
            //             ));
            //             _this.setState({data: data});
            //             // _this.setRowsState(tableData1);
            //             // resolve(res.text);
            //         }
            //     });
        }
        else alert('Please fill all Hours!');
    },
    onClick: function() {
        if(this.state.showResults)
            this.setState({ showResults: false });
        else this.setState({ showResults: true });
    },
    setOpeningHoursDay: function(x, event, day, key) {
        // console.log(event.toLocaleTimeString()/ 1000 | 0);
        // moment().utcOffset(0);
        // var dayObj;
        var time = moment(event);
        console.log(time.format('hh'));
        console.log(time.format('mm'));

        var timestamp = time.format('hh') * 60 * 60 + time.format('mm') * 60;
        console.log(timestamp);
        if(key == "fromHour1"){
           dayObj = Object.assign({}, dayObjTemplate);
           dayObj.day = day;
           dayObj.fromHour1 = timestamp;
        }
        else if(key == "toHour1"){
           dayObj.toHour1 = timestamp;
           openingHours.push(dayObj);
        }
        if(openingHours.length == 7)
        {
           //alert('openinghours done!');
            this.setState({isOpeningHoursSet:true});
        }
        // var d = new Date();

        // console.log(Math.floor(new Date().valueOf() / 1000));
        // d.setHours(time.format('hh'));
        // d.setMinutes(time.format('mm'));
        // d.setSeconds(0);

        // console.log(Math.floor(moment(d).unix() ));
        // console.log(x);
    },
    render: function() {
        const OpeningHoursAppBar = () => (
            <AppBar
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle :null}
                style={styles.appbar}
                title={window.strings.openingHoursPage.appbar.title}
                // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={this.props.openDrawer}
                iconElementRight={
               <div><IconButton onTouchTap={ (e) => {/*e.preventDefault();*/ this.onClick();}}><EditIcon color={white}/></IconButton><IconMenu
            iconButtonElement={
          <IconButton><MoreVertIcon color={white}/></IconButton>
        }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
            <MenuItem primaryText="Sign out" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="About" />
        </IconMenu></div>
                }
            />
        );
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <OpeningHoursAppBar/>
                <div style={this.props.isDrawerDocked ? styles.pushContent :null}>
                <div style={styles.toppad}></div>
                <div style={styles.h1center}>
                    <h2 style={styles.h1}>{window.strings.openingHoursPage.h2Title}</h2>
                </div>
                <div style={styles.ohcard}>

                    <List >
                        {this.state.data.map((tile) => (
                            (console.log(tile.fromHour1)),
                            <div>
                            <ListItem
                                disabled={true}
                                style={{height: 17, padding: '20px 42px', display: 'flex', justifyContent: 'space-between'}}
                            >
                                <i style={{fontWeight: 400, fontSize: '18px'}}>{window.strings.openingHoursPage.weekDays[tile.day]}</i>

                                {this.state.showResults ? <div><i >{tile.fromHour1 + (!tile.toHour1 ? "":"-" + tile.toHour1)}</i> {!tile.fromHour2 ? null:<i>{tile.fromHour2 + "-" + tile.toHour2}</i>} </div>:
                                    <div  style={{display: 'flex', justifyContent: 'center', marginTop: '-19px'}}>
                                        <TimePicker
                                    hintText={window.strings.openingHoursPage.from}
                                    value={new Date(null,null,null,tile.fromHour1.split(':')[0],tile.fromHour1.split(':')[1])}
                                    autoOk={true}
                                    textFieldStyle={{width: 71, marginRight: '18px'}}
                                    onChange={(x, event) => this.setOpeningHoursDay(x, event, tile.day, "fromHour1")}
                                />
                                    <TimePicker
                                    hintText={window.strings.openingHoursPage.to}
                                    value={new Date(null,null,null,tile.toHour1.split(':')[0],tile.toHour1.split(':')[1])}
                                    autoOk={true}
                                    textFieldStyle={{width: 71}}
                                    onChange={(x, event) => this.setOpeningHoursDay(x, event, tile.day, "toHour1")}
                                /></div>
                                }
                            </ListItem>
                            <Divider/>
                            </div>
                        ))}
                    </List>
                    { this.state.showResults ? null : <RaisedButton onTouchTap={this.updateOpeningHours} primary={true} label={window.strings.submit} fullWidth={true} /> }
                </div>

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
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle :null}
                style={styles.appbar}
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
                    <div style={this.props.isDrawerDocked ? styles.pushContent : null}>
                        <div style={styles.toppad}></div>
                        <div style={{
                             position: 'fixed',
                             right: 0,
                             left: this.props.isDrawerDocked ? 250 :0,
                             zIndex: '10',

                        }}>


                            <div
                                  style={styles.containerTop}>

                                <div style={styles.h1center}>
                                    <h2 style={styles.h1}>{window.strings.setAppointmentPage.h2Title}</h2>
                                    <br/>
                                </div>
                                <div style={styles.h1center}>
                                    <FlatButton backgroundColor="#dddddd" onTouchTap={this.showChooseCustDialog} label={this.state.selectedPerson}/>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div style={styles.fixedblock}></div>
                        <AvailableAppointmentsCard superagent={superagent} ref="availableAppointmentsCard" handleCardClick={this.handleCardClick} />
                        <AddAppointmentCircle circleIcon={false} handleAAPCircleClick={this.handleAAPCircleClick}/>
                        <SetAppForm superagent={superagent} ref="setAppForm"/>
                        <SearchAndChooseDialog isAll={true} personList={this.state.personList} personType={'employee'} handleListClick={(obj) => {this.handleListClick(obj);}} open={this.state.chooseDailog} close={this.closeChooseCustDialog} />
                    </div></div>
            </MuiThemeProvider>
        );
    }
});

var AboutPage = React.createClass({
    getInitialState: function() {
        return {
            value:1};
    },
    render: function() {
        const DefaultAppBar = () => (
            <AppBar
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle :null}
                style={styles.appbar}
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
                    <div style={this.props.isDrawerDocked ? styles.pushContent :null}>
                        <div style={styles.toppad}></div>
                        <ListItem
                            style={{backgroundColor: '#55bdd4', height: 96,display: 'flex', justifyContent: 'center'}}
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
//
// var AppointmentgsList = React.createClass({
//     handleAAPCircleClick: function() {
//         console.log("new component");
//         this.refs.setAppForm.show();
//     },
//     handleCardClick: function(date,time) {
//         ////alert(bla);
//         console.log("new component");
//         this.refs.setAppForm.show(date,time);
//     },
//     getInitialState: function() {
//         return {data: this.props.data,
//             value:1};
//     },
//     handleChange: function(event, index, value) {
//         this.setState({value});
//     },
//     render: function() {
//         return (
//             <div>
//
//                 <div style={styles.inScroll}>
//                     <div style={styles.h1center}>
//                         <h2 style={styles.h1}>Closest Available Hours</h2>
//                     </div>
//
//                     <Card zDepth={3}
//                           style={styles.containerTop}>
//                         <DropDownMenu
//                             value={this.state.value}
//                             onChange={this.handleChange}
//                             style={styles.customWidth}
//                             autoWidth={false}
//                         >
//                             <MenuItem value={1} primaryText="Custom width" />
//                             <MenuItem value={2} primaryText="Every Night" />
//                             <MenuItem value={3} primaryText="Weeknights" />
//                             <MenuItem value={4} primaryText="Weekends" />
//                             <MenuItem value={5} primaryText="Weekly" />
//                         </DropDownMenu>
//                     </Card>
//                 </div>
//                 <div style={styles.fixedblock}></div>
//                 <AvailableAppointmentsCard handleCardClick={this.handleCardClick} />
//                 <AddAppointmentCircle handleAAPCircleClick={this.handleAAPCircleClick}/>
//                 <SetAppForm ref="setAppForm"/>
//
//             </div>
//         );
//     }
// });



const renderMergedProps = (component, ...rest) => {
    const finalProps = Object.assign({}, ...rest);
    return (
        React.createElement(component, finalProps)
    );
}

const PropsRoute = ({ component, ...rest }) => {
    return (
        <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
    );
}


var BasicExample1 = React.createClass({
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
        return {data: this.props.data,
            value:1,
            drawerState: true};
    },
    handleChange: function(event, index, value) {
        this.setState({value});
    },

    changeDrawerState: function() {

        this.setState({drawerState: !this.state.drawerState});
    },
    render: function() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <Drawer1  onRequestChange={this.changeDrawerState} drawerState={this.state.drawerState}/>
                </div>
            </MuiThemeProvider>
        );
    }

// <ul>
//     <li><Link to="/">Home</Link></li>
//     <li><Link to="/about">About</Link></li>
//     <li><Link to="/topics">Topics</Link></li>
// </ul>
//
// <hr/>
//
// <Route exact path="/" component={Home}/>
//     <Route exact path="/about" component={About}/>
//     <Route exact path="/topics" component={Topics}/>
});

let hello = require('hellojs/dist/hello.all.js');

var SocialLogin = React.createClass({
    getInitialState: function() {
        return {
            showResults: false,
            isLogin: false,
            passwordFieldValue: '',
            emailFieldValue: '',
            passwordFieldValue1: '',
            emailFieldValue1: '',
            addressFieldValue: '',
            phoneFieldValue: '',
            lastNameFieldValue: '',
            firstNameFieldValue: '',
            isRegister: false
        };
    },
    _handlePassword1FieldChange: function(e) {
        this.setState({
            password1FieldValue: e.target.value
        });
    },
    _handleEmail1FieldChange: function(e) {
        this.setState({
            email1FieldValue: e.target.value
        });
    },
    _handlePasswordFieldChange: function(e) {
        this.setState({
            passwordFieldValue: e.target.value
        });
    },
    _handleEmailFieldChange: function(e) {
        this.setState({
            emailFieldValue: e.target.value
        });
    },
    _handleFirstNameFieldChange: function(e) {
        this.setState({
            firstNameFieldValue: e.target.value
        });
    },
    _handleLastNameFieldChange: function(e) {
        this.setState({
            lastNameFieldValue: e.target.value
        });
    },
    _handlePhoneFieldChange: function(e) {
        this.setState({
            phoneFieldValue: e.target.value
        });
    },
    _handleAddressFieldChange: function(e) {
        this.setState({
            addressFieldValue: e.target.value
        });
    },
    componentWillMount: function() {
        // if(window.localStorage.getItem("token") !== null &&window.localStorage.getItem("user") !== null )
        // {
        //     pathname = "/";
        //     this.props.history.push('/');
        // }


        // window.addEventListener('fetch', function(event) { // ServiceWorker intercepting a fetch
        //    //alert('fetch');
        //     // event.respondWith(
        //     //     new Response(myBody, {
        //     //         headers: { "Content-Type" : "text/plain" }
        //     //     })
        //     // );
        // });
        // const s = document.createElement('script');
        // s.type = 'text/javascript';
        // s.async = true;
        // s.src = '//cdnjs.cloudflare.com/ajax/libs/hellojs/1.10.1/hello.all.min.js';
        // // s.innerHTML = "document.write('This is output by document.write()!')";
        // this.instance.appendChild(s);
        // const sc = document.createElement('script');
        // sc.type = 'text/javascript';
        // sc.async = true;
        // sc.src = '//cdnjs.cloudflare.com/ajax/libs/superagent/1.2.0/superagent.min.js';
        // // s.innerHTML = "document.write('This is output by document.write()!')";
        // this.instance1.appendChild(sc);

        // let hello = require('hellojs/dist/hello.all.js');
        var socialToken;
        var serverToken;
////alert('before hello ');
        hello.on('auth.login', function (auth) {
			    ////alert();

            if(window.localStorage.getItem("hello") != null) {
                socialToken = auth.authResponse.access_token;
                console.log('socialToken', socialToken);
                ////alert('hello iten exists');
                // Auth with our own server using the social token
                authenticate(auth.network, socialToken).then(function (token) {
                    var serverToken = token;

                    window.localStorage.setItem("token", token);

                    setAjaxAuthHeader();
                    // _this.checkAuth();
                    console.log('serverToken', JSON.parse(token).token);
                    // _this.props.history.push('/home');
                    window.location.href = "http://localhost:8899/";
                });
            }
            // else
            // {
            //     socialToken = auth.authResponse.access_token;
            //    //alert('socialToken5');
            //
            //     authenticate(auth.network, socialToken).then(function (token) {
            //         serverToken = token;
            //
            //         window.localStorage.setItem("token", token);
            //
            //         console.log('serverToken', serverToken);
            //
            //         window.location.href = "http://localhost:8899/";
            //     });
            // }
            // Call user information, for the given network
//             hello(auth.network).api('/me').then(function (r) {
//
//                 // Inject it into the container
// //                   //alert('socialToken1');
// //                 var label = document.getElementById('profile_' + auth.network);
// // //                   //alert('socialToken2');
// //                 if (!label) {
// //                     label = document.createElement('div');
// //                     label.id = 'profile_' + auth.network;
// //                     document.getElementsByTagName("BODY")[0].appendChild(label);
// //                 }
// // //                   //alert('socialToken3');
// //                 label.innerHTML = '<img src="' + r.thumbnail + '" /> Hey ' + r.name;
// //                   //alert('socialToken4');
//                 // Save the social token
//                 socialToken = auth.authResponse.access_token;
//                 console.log('socialToken', socialToken);
//                //alert('socialToken5');
//                 // Auth with our own server using the social token
//                 authenticate(auth.network, socialToken).then(function (token) {
//                     serverToken = token;
//
//                     window.localStorage.setItem("token", token);
//
//                     console.log('serverToken', serverToken);
//
//                     window.location.href = "http://localhost:8899/";
//                 });
//             });
        });


        hello.init({
            facebook: '1608771039167400',
            windows: '',
            google: '339582927777-7r3a123o6btq5ojqpoho4nghgi9bg2q7.apps.googleusercontent.com'
        }, {
            redirect_uri: '/auth/callback'
        });

        function authenticate(network, socialToken) {
//               //alert('/login');
            return new Promise(function (resolve, reject) {

                superagent
                    .post(SiteURL.url + 'socialLogin')
                    .send({
                        network: network,
                        socialToken: socialToken
                    })
                    .set('Accept', 'application/json')
                    .end(function(err, res){
                        if (err) {
                            console.log('error: ' , err);
                            console.log('response: ' , res);

                           alert(err);
                            reject(err);
                        } else {
                            console.log('response: ' , res);
                            resolve(res.text);
                        }
                    });
            });
        }
    },
    changeDrawerState: function() {

    },
    checkAuth: function() {
        fetch("http://localhost:8888/api/serere",
            {
                method: 'GET',
                headers: {
                    // 'Content-Types': 	'application/json',
                    // 'X-Access-Token': JSON.parse( window.localStorage.getItem('token')).token
                    'Authorization': JSON.parse( window.localStorage.getItem('token')).token
                    // 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                    // 'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1JFR0lTVEVSRUQiLCJST0xFX1VTRVIiXSwiaWQiOiIyIiwiZW1haWwiOiJhdml5YW9tZXNpQGdtYWlsLmNvbSIsImVuYWJsZWQiOnRydWUsImV4cCI6MTUwODMzNDM0M30.O9ZLiqjZXWsefFPfmFx6zll3Vcc0MYnoYpxI9-c6GHM'
                }
            })
            .then((response) => {

                if (response.status == 500) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);

                    response.json().then((data)=>{
                        console.log(data);
                       //alert("message: " + data.message + "    code: " + data.code);
                    });

                    return;
                }

                response.json().then((data)=>{
                    console.log("sererererererererrererererer" ,data);
                    ////alert("message: " + data.message + "    code: " + data.code);
                });

            })
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });

        ////alert(JSON.parse( window.localStorage.getItem('token')).token);
    },
    signIn: function() {

        // this.checkAuth();

        var cred = {
            email: this.state.emailFieldValue,
            password: this.state.passwordFieldValue
        };
        var _this = this;
        authenticate(cred).then(function (token) {
            //TODO add dialog window if error
            console.log("thennnnnnnnn");
            var serverToken = token;

            window.localStorage.setItem("token", token);

            // setAjaxAuthHeader();


            // _this.checkAuth();
            console.log('serverToken', JSON.parse(token).token);
            // _this.props.history.push('/home');
            _this.props.loadUser();
        });



        function authenticate(cred) {
//               //alert('/login');
            return new Promise(function (resolve, reject) {
               //alert(SiteURL.get + 'loginqqqq');
                superagent
                    .post(SiteURL.url + 'login')
                    .send(cred)
                    .set('Accept', 'application/json')
                    .end(function(err, res){
                        if (err) {
                            console.log('error: ' , err);
                            console.log('response: ' , res);

                           //alert(err);
                            reject(err);
                        } else {
                            console.log('response: ' , res.text);
                            resolve(res.text);
                        }
                    });
            });
        }

    },
    register: function() {

        // this.checkAuth();

        var cred = {
            email: this.state.email1FieldValue,
            password: this.state.password1FieldValue,
            first_name: this.state.firstNameFieldValue,
            last_name: this.state.lastNameFieldValue,
            phone: this.state.phoneFieldValue,
            address: this.state.addressFieldValue
        };
        var _this = this;
        register(cred).then(function (token) {
            //TODO add dialog window if error
            console.log("thennnnnnnnn");
            var serverToken = token;

            window.localStorage.setItem("token", token);



            // _this.checkAuth();
            console.log('serverToken', JSON.parse(token).token);
            // _this.props.history.push('/home');
            window.location.href = "http://localhost:8899/";
        });



        function register(cred) {
//               //alert('/login');
            return new Promise(function (resolve, reject) {

                superagent
                    .post(SiteURL.url + 'register')
                    .send(cred)
                    .set('Accept', 'application/json')
                    .end(function(err, res){
                        if (err) {
                            console.log('error: ' , err);
                            console.log('response: ' , res);

                           //alert('Error!');
                            reject(err);
                        } else {
                            console.log('response: ' , res.text);
                            resolve(res.text);
                        }
                    });
            });
        }

    },
    render: function() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={this.props.isDrawerDocked ? styles.pushContent :null}>

                    {this.state.isRegister ?
                        <div>
                            <a style={{zIndex: 2, position: 'fixed',right: 0, margin: 20, fontSize: '30px', cursor:'pointer'}} onTouchTap={(e)=>{e.preventDefault(); this.setState({isRegister : false})}}>x</a>
                            <ListItem
                                style={{height: 80,display: 'flex', justifyContent: 'center'}}
                                disabled={true}
                            >

                                <b style={{marginTop:60, fontSize: '30px'}}>{window.strings.loginPage.registerTitle}</b>



                            </ListItem>
                            <ListItem
                                style={{height: 30,display: 'flex', justifyContent: 'center'}}
                                disabled={true}
                            >
                                <TextField
                                    style={{width: '300px', maxWidth:'85%', margin: 'auto 0'}}
                                    hintText={window.strings.loginPage.email}
                                    value={this.state.email1FieldValue}
                                    onChange={this._handleEmail1FieldChange}

                                />
                            </ListItem>
                            <ListItem
                                style={{height: 30,display: 'flex', justifyContent: 'center'}}
                                disabled={true}
                            >
                                <TextField
                                    style={{width: '300px', maxWidth:'85%', margin: 'auto 0'}}
                                    hintText={window.strings.loginPage.password}
                                    value={this.state.password1FieldValue}
                                    onChange={this._handlePassword1FieldChange}
                                    type="password"
                                /></ListItem>
                            <ListItem
                                style={{height: 30,display: 'flex', justifyContent: 'center'}}
                                disabled={true}
                            >
                                <TextField
                                    style={{width: '300px', maxWidth:'85%', margin: 'auto 0'}}
                                    hintText={window.strings.loginPage.firstName}
                                    value={this.state.firstNameFieldValue}
                                    onChange={this._handleFirstNameFieldChange}

                                />
                            </ListItem>
                            <ListItem
                                style={{height: 30,display: 'flex', justifyContent: 'center'}}
                                disabled={true}
                            >
                                <TextField
                                    style={{width: '300px', maxWidth:'85%', margin: 'auto 0'}}
                                    hintText={window.strings.loginPage.lastName}
                                    value={this.state.lastNameFieldValue}
                                    onChange={this._handleLastNameFieldChange}
                                /></ListItem>
                            <ListItem
                                style={{height: 30,display: 'flex', justifyContent: 'center'}}
                                disabled={true}
                            >
                                <TextField
                                    style={{width: '300px', maxWidth:'85%', margin: 'auto 0'}}
                                    hintText={window.strings.loginPage.phone}
                                    value={this.state.phoneFieldValue}
                                    onChange={this._handlePhoneFieldChange}

                                />
                            </ListItem>
                            <ListItem
                                style={{height: 55,display: 'flex', justifyContent: 'center'}}
                                disabled={true}
                            >
                                <TextField
                                    style={{width: '300px', maxWidth:'85%', margin: 'auto 0'}}
                                    hintText={window.strings.loginPage.address}
                                    value={this.state.addressFieldValue}
                                    onChange={this._handleAddressFieldChange}
                                /></ListItem>
                            <ListItem
                                style={{height: 35,display: 'flex', justifyContent: 'center'}}
                                disabled={true}
                            >


                                <RaisedButton
                                    label={<a style={{color:'white'}}>{window.strings.submit}</a>}
                                    style={{width:300, height:50}}
                                    backgroundColor= "#c7c7c7"
                                    onTouchTap={(e)=>{e.preventDefault(); this.register();}}
                                />
                            </ListItem>

                        </div>
                      :
                        <div>
                            <ListItem
                                style={{height: 80,display: 'flex', justifyContent: 'center'}}
                                disabled={true}
                            >
                                <b style={{marginTop:60, fontSize: '30px'}}>{window.strings.loginPage.loginTitle}</b>


                            </ListItem><ListItem
                            style={{height: 30,display: 'flex', justifyContent: 'center'}}
                            disabled={true}
                        >
                            <TextField
                                style={{width: '300px', maxWidth:'85%', margin: 'auto 0'}}
                                hintText={window.strings.loginPage.email}
                                value={this.state.emailFieldValue}
                                onChange={this._handleEmailFieldChange}

                            />
                        </ListItem>
                            <ListItem
                                style={{height: 55,display: 'flex', justifyContent: 'center'}}
                                disabled={true}
                            >
                                <TextField
                                    style={{width: '300px', maxWidth:'85%', margin: 'auto 0'}}
                                    hintText={window.strings.loginPage.password}
                                    value={this.state.passwordFieldValue}
                                    onChange={this._handlePasswordFieldChange}
                                    type="password"
                                /></ListItem>
                            <ListItem
                                style={{height: 35,display: 'flex', justifyContent: 'center'}}
                                disabled={true}
                            >


                                <RaisedButton
                                    label={<a style={{color:'white'}}>{window.strings.loginPage.signInButton}</a>}
                                    style={{width:300, height:50}}
                                    backgroundColor= "#c7c7c7"
                                    onTouchTap={(e)=>{e.preventDefault(); this.signIn();}}
                                />
                            </ListItem>
                            <ListItem
                                style={{height: 15,display: 'flex', justifyContent: 'center'}}
                                disabled={true}
                            >
                                <div style={{display: 'flex', justifyContent: 'center', color: 'cadetblue'}}>
                                    {window.strings.loginPage.regQuestion} <a style={{marginLeft: '83px', color:'blue', cursor: 'pointer', textDecoration: 'underline'}} onTouchTap={(e)=>{e.preventDefault(); this.setState({isRegister : true, email1FieldValue: '', passwordFieldValue: '',})}}>{window.strings.loginPage.registerUrl}</a>
                                </div>
                            </ListItem>
                            <div
                                style={{margin:'0 auto',width: 359}}
                            >
                                <div style={{display:'flex',justifyContent:'space-between',width: 359}}>
                                    <hr style={{height: '1px', width: '142px', border: 'none', backgroundColor: 'rgb(224, 224, 224)'}}/><b>{window.strings.loginPage.or}</b><hr style={{height: '1px', width: '142px', border: 'none', backgroundColor: 'rgb(224, 224, 224)'}}/></div>
                            </div>
                            <ListItem
                                style={{height: 35,display: 'flex', justifyContent: 'center'}}
                                disabled={true}
                            >


                                <RaisedButton
                                    label={<a style={{color:'white'}}>{window.strings.loginPage.loginFacebook}</a>}
                                    labelPosition="before"
                                    icon={<FacebookButton style={styles.facebookLogin}/>}
                                    style={{width:300, height:50}}
                                    backgroundColor= "#3b5998"
                                    onTouchTap={(e)=>{ e.preventDefault();  hello.login('facebook',{display:'page'});}}
                                />

                            </ListItem>
                            <ListItem
                                style={{height: 35,display: 'flex', justifyContent: 'center'}}
                                disabled={true}
                            >
                                <RaisedButton
                                    label={<a style={{color:'white', marginRight: '8px'}}>{window.strings.loginPage.loginGoogle}</a>}
                                    labelPosition="before"
                                    icon={<ActionAndroid color={'white'} />}
                                    style={{width:300, height:50,color:'white'}}
                                    backgroundColor= "#db4437"
                                    color="white"
                                    onTouchTap={(e)=>{ e.preventDefault(); hello.login('google',{display:'page'})}}

                                /></ListItem></div>}
                </div>
            </MuiThemeProvider>
        );
    }

});


// const BasicExample = () => (
//     <MuiThemeProvider muiTheme={muiTheme}>
//     <Router>
//         <div>
//             <Drawerr onRequestChange={} drawerState={}/>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about">About</Link></li>
//                 <li><Link to="/topics">Topics</Link></li>
//             </ul>
//
//             <hr/>
//
//             <Route exact path="/" component={Home}/>
//             <Route exact path="/about" component={About}/>
//             <Route exact path="/topics" component={Topics}/>
//         </div>
//     </Router>
//     </MuiThemeProvider>
// )

export default BasicExample


// ReactDOM.render(
//     <BasicExample />,
//     document.getElementById('header')
// );

// while(true){
//
//     if(isCheckAuthDone) {
//         ReactDOM.render(
//             <BasicExample />,
//             document.getElementById('header')
//         );
//     }
// }





//
// var harta1 = React.createClass({
//     render: function() {
//         return (
//             <div>
//             <h1>
//                 hello harel
//             </h1>
//             </div>
//         );
//     }
// });
//
// ReactDOM.render(
//     <harta1 />,
//     document.getElementById('header')
// );


// function onLoad() {window.history.back();
// document.addEventListener("deviceready", onDeviceReady, false);
// // }
//
// // device APIs are available
// //
// function onDeviceReady() {
//     // Register the event listener
//     document.addEventListener("backbutton", //
//
//         function (e) {
//             console.log("event",e);
//             e.preventDefault();
//             e.stopPropagation();
//
//
//
//            //alert('back button1212121!');
//             window.history.back();
//             return false;
//         }, false);
// }
//
// // Handle the back button
// //
// function onBackKeyDown(e) {
//     e.stopPropagation();
//    //alert('back button!');
//     window.history.back();
// }