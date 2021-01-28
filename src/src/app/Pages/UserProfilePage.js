import React from 'react';
import {Link} from 'react-router-dom'
import UpIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import DownIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card} from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import AppointmentsIcon from 'material-ui/svg-icons/notification/event-note';
import {ListItem} from 'material-ui/List';
import {white} from 'material-ui/styles/colors';
import {styles, icons, muiTheme} from '../Styles';
import {EmployeePage, PersonShowAndEdit} from './PersonsPage';
import {superagent} from '../SuperAgent';
import SiteURL from '../site-url';






var UserProfilePage = React.createClass({
    getInitialState: function() {


        return {

            showResults: false,
            editObj: false,
            personType: "employee",
            phone: '052-345348273',
            email:'aviyamlsf@sdf.com',
            name:'asfasd asdasda',
            obj: {
                id: null,
                name: 'Harel Shalom',
                address: 'vrvrtsf, sdfusehfb.',
                phone: '0526-373462873',
                email:'sjakfh@seyhfj.asf',
                password: '768768686',
                userPhoto:  ''
            },
            toolsBar: true
        };
    },
    componentWillMount: function() {
        if(window.localStorage.getItem('user') !== null){
            var userObj = JSON.parse(window.localStorage.getItem('user'));

            this.setState({
                obj: {
                    id: null,
                    name: userObj.user.name,
                    address: userObj.user.address,
                    phone: userObj.user.phone,
                    email: userObj.user.email,
                    userPhoto: userObj.user1.customFields.user_photo
                }
            });
        }
    },
    updateEditObj: function(obj) {
        alert(JSON.stringify(obj));
        superagent
            .post(SiteURL.get + 'updateUserProfile')
            .send({user: obj})
            .set('Accept', 'application/json')
            .end(function(err, res){
                if (err) {
                    console.log('error: ' , err);
                    console.log('response: ' , res.text);
                    alert('Error!');
                    // reject(err);
                } else {
                    console.log('response: ' , res);
                    if(res.statusCode == 200)
                        alert('update successful!');
                    // resolve(res.text);
                }
            });
    },
    componentDidMount: function() {

    },
    cancelEdit: function() {
        this.setState({editObj: false});
    },
    render: function() {
        const UserProfileAppBar = () => (
            <AppBar
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle : styles.appbarTitleOpenedDrawer}
                style={styles.appbar}
                iconStyleLeft={styles.appbarIconStyle}
                iconStyleRight={styles.appbarIconStyle}
                title={"User Profile"}
                // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={this.props.openDrawer}
                iconElementRight={
               <IconButton onTouchTap={ (e) => {/*e.preventDefault();*/  this.setState({editObj: !this.state.editObj})}}><EditIcon color={white}/></IconButton>
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
                    <div style={this.props.isDrawerDocked ? window.strings.css.pushContent :null}>
                        <div style={styles.toppad}></div>

                        <EmployeePage editObj={this.state.editObj} isUserProfile={true} component={PersonShowAndEdit} history={this.props.history} personType={this.props.personType} isDrawerDocked={this.props.isDrawerDocked} goBacck={() => this.setState({ showEmployee: false})} obj={this.state.obj} name={this.state.empName} id={this.state.empId} updateEditObj={this.updateEditObj}/>

                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
});

var UserProfilePage1 = React.createClass({
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
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle : styles.appbarTitleOpenedDrawer}
                style={styles.appbar}
                iconStyleLeft={styles.appbarIconStyle}
                iconStyleRight={styles.appbarIconStyle}
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
                    <div style={this.props.isDrawerDocked ? window.strings.css.pushContent :null}>
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

export default UserProfilePage;