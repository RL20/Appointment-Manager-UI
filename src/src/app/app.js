import React from 'react';
import {BrowserRouter as Router,Switch, Route, Link,Redirect} from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import History from 'history';
import AppointmentsList from './AppointmentsList';
import TableModel from './TableModel';
import SiteURL from './site-url';


import NavigationDrawer from './NavigationDrawer';
import SettingsPage from './Pages/SettingsPage';
import NavigatePage from './Pages/NavigatePage';
import {ContactUsPage} from './Pages/ContactUsPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import PicturesPage from './Pages/PicturesPage';
import AppointmentsPage from './Pages/AppointmentsPage';
import SetAppointmentPage from './Pages/SetAppointmentPage';
import {AbsencesPage} from './Pages/AbsencesPage';
import AboutPage from './Pages/AboutPage';
import OpeningHoursPage from './Pages/OpeningHoursPage';
import {PersonsPage} from './Pages/PersonsPage';
import SetNewPersonPage from './Pages/SetNewPersonPage';
import UserProfilePage from './Pages/UserProfilePage';
import {styles, style, textColor, icons, muiTheme, setTheme, darkBaseTheme, lightBaseTheme} from './Styles';
import isMobile from './IsMobile';
import {superagent, setAjaxAuthHeader} from './SuperAgent';
import moment from 'moment';


import {black, white, cyan300,grey900,blue500, red500, greenA200,orange500} from 'material-ui/styles/colors';


import ManagerRegistrationForm from './ManagerRegistrationForm';



var pathname = location.pathname;
// var isCheckAuthDone = false;
injectTapEventPlugin();


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



const renderMergedProps = (component, ...rest) => {
    const finalProps = Object.assign({}, ...rest);
    return (
        React.createElement(component, finalProps)
    );
};

const PropsRoute = ({ component, ...rest }) => {
    return (
        <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
    );
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
        // document.querySelector('#themeColorCss').innerHTML = ".themeColor ,body{ background-color:" + muiTheme.palette.canvasColor + "}";


        
           
            
        return {data: this.props.data,
            value:1,
            drawerState: !isMobile.any(),
            isDrawerDocked: !isMobile.any(),
            openSecondary: false,
            userEmail: '',
            userName: '',
            isLoggedIn: false,
            isLogged: false
        };
    },
    handleChange: function(event, index, value) {
        this.setState({value});
    },
    componentWillMount: function() {
        addEventListener('contextmenu', function(e){
            // e.preventDefault();
            // e.stopPropagation();
        });

        if(window.localStorage.getItem('token') !== null){
            this.setState({isLogged: true});
            if(window.localStorage.getItem('user') !== null){
                var userObj = JSON.parse(window.localStorage.getItem('user'));
                console.log('user', userObj);
                this.setUserAndAllowAccess(userObj);
                setAjaxAuthHeader();
            }
            else
            {
                this.loadUser();
            }
        }


        let lang = window.localStorage.getItem('lang');
        let theme = window.localStorage.getItem('theme');
        let isDarkMode;
        let color;
        if(theme != null){
            theme = JSON.parse(theme);
            isDarkMode =  theme.isDarkMode == 1;
            color = theme.color != null ? theme.color : cyan300;
        }
        else {
            isDarkMode = false;
            color = cyan300;
        }


        if(lang != null){
            var langSet = window.strings.setLanguage(lang);

            // Promise.all(langSet).then(function(results) {
            //    //alert(window.strings.isRTL);
            if(window.strings.isRTL){
                // alert(window.css.pushContent);
                // styles.pushContent = {marginRight : window.strings.css.pushContent};
                moment.locale('he');
                document.querySelector('body').dir = "rtl";
                this.setState({
                    openSecondary: true});

            }
            // else window.css = {pushContent: 250};
            // });
        }
        // if(!isDarkMode)
// alert('isDarkMode: ' + isDarkMode);
        if(theme != null){
            if(isDarkMode != null && isDarkMode)
            {
                setTheme(color, darkBaseTheme);
            }
            else{
                setTheme(color, lightBaseTheme);
            }


        }

        document.body.style.overflow = 'auto';
    },
    changeDrawerState: function() {

        if(!isMobile.any()) {
            this.setState({
                isDrawerDocked: !this.state.isDrawerDocked,
                drawerState: !this.state.isDrawerDocked
            });

        }
        else this.setState({drawerState: !this.state.drawerState});



    },
    switchToRTL: function(dir) {
        if(dir == 'rtl'){
            this.setState({openSecondary: true});
        }
        else if(dir == 'ltr')
            this.setState({openSecondary: false});

    },
    setUser: function(name, email, photo){
        this.setState({
            userEmail: email,
            userName: name,
            userPhoto: photo
        });
    },
    loadUser: function() {
        if(window.strings.isRTL){
            this.setState({openSecondary: true});
        }

        setAjaxAuthHeader();
        var _this = this;
        getUser().then(function(user){
            var serverToken = user;

            window.localStorage.setItem("user", user);
            console.log(user);
            var userObj = JSON.parse(user);
            console.log('user', userObj);
            _this.setUserAndAllowAccess(userObj);
        });
    },
    setUserAndAllowAccess: function(userObj) {

        this.setUser(userObj.user.name, userObj.user.email, userObj.user1.customFields.user_photo);
        this.setIsLoggedIn(true);
    },
    setIsLoggedIn: function(bool) {
        this.setState({isLogged: true});
    },
    updateNavigationDrawer: function(bool) {
        this.refs.navigationDrawer.forceUpdate();
    },
    render: function() {

        if(this.state.isLogged)

        return (

            <Router onUpdate={() => window.scrollTo(0, 0)} history={History}>
                <div style={styles.container11}>

                        <NavigationDrawer  ref="navigationDrawer" openSecondary={this.state.openSecondary} onRequestChange={this.changeDrawerState} isDrawerDocked={this.state.isDrawerDocked} drawerState={this.state.drawerState} userEmail={this.state.userEmail} userName={this.state.userName} userPhoto={this.state.userPhoto} />




                    <Switch>
                        <PropsRoute path='/home' component={HomePage} isDrawerDocked={this.state.isDrawerDocked} switchToRTL={this.switchToRTL} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/settings' component={SettingsPage} isDrawerDocked={this.state.isDrawerDocked} switchToRTL={this.switchToRTL} openDrawer={this.changeDrawerState} updateNavigationDrawer={this.updateNavigationDrawer}/>
                        <PropsRoute path='/userprofile' component={UserProfilePage} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/absenceslist' superagent={superagent} component={TableModel} listType={5} isMobile={true} muiTheme={muiTheme} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/absenceslistbyemployee' superagent={superagent} component={TableModel} listType={6} isMobile={true} muiTheme={muiTheme} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/employees' component={PersonsPage}  personType="Employee" isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/customers' component={PersonsPage}  personType="Customer" isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/setnewcustomer' component={SetNewPersonPage} personType={'Customer'} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/setnewemployee' component={SetNewPersonPage} personType={'Employee'} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/appointments' component={AppointmentsPage} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/absences' component={AbsencesPage} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/openinghours' component={OpeningHoursPage} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/appointmentslist' superagent={superagent} component={TableModel} listType={0} isMobile={true} muiTheme={muiTheme} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/appointmentslistbyemployee' superagent={superagent} component={TableModel} listType={1} isMobile={true} muiTheme={muiTheme} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/appointmentslistbycustomer' superagent={superagent} component={TableModel} listType={2} isMobile={true} muiTheme={muiTheme} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/appointmentslisthistory' superagent={superagent} component={TableModel} listType={3} isMobile={true} muiTheme={muiTheme} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/appointmentslisttoday' superagent={superagent} component={TableModel} listType={4} isMobile={true} muiTheme={muiTheme} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/appointmentsemployee' superagent={superagent} component={TableModel} listType={1} isMobile={true} muiTheme={muiTheme} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/setappointment' component={SetAppointmentPage} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/navigate' component={NavigatePage} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/contactus' component={ContactUsPage} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute path='/pictures' component={PicturesPage} isDrawerDocked={this.state.isDrawerDocked} openDrawer={this.changeDrawerState} />
                        <PropsRoute exact path="/about" isDrawerDocked={this.state.isDrawerDocked} component={AboutPage} openDrawer={this.changeDrawerState}/>
                        <PropsRoute exact path="/login" component={LoginPage} openDrawer={this.changeDrawerState}/>
                        <PropsRoute exact path="/auth_callback" component={LoginPage} openDrawer={this.changeDrawerState}/>
                        <PropsRoute exact path="/admin" component={ManagerRegistrationForm} openDrawer={this.changeDrawerState}/>
                        <Redirect path="/" to="/home" />
                    </Switch>
                </div>
            </Router>
        );

        else return (
            <LoginPage loadUser={this.loadUser}/>
        );
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
        <LoginPage loadUser={this.loadUser}/>
      );
    }
});


export default BasicExample;