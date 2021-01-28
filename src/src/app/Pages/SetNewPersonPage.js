import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import EmpAndCustPage from '../EmpAndCustPage';
import {white} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';
import SiteURL from '../site-url';
import {styles, style, icons, muiTheme, muiThemeWhite} from '../Styles';
import {superagent} from '../SuperAgent';
import FloatingButton from '../FloatingButton';
import {Card} from 'material-ui/Card';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import UpIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import DownIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import CallIcon from 'material-ui/svg-icons/communication/call';
import TextIcon from 'material-ui/svg-icons/communication/textsms';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import AppointmentsIcon from 'material-ui/svg-icons/notification/event-note';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ReactUploadFile from '../uploadFile';
import isMobile from '../IsMobile';
import {PersonShowAndEdit} from '../Pages/PersonsPage';





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
                 titleStyle={this.props.isDrawerDocked ? styles.appbarTitle : styles.appbarTitleOpenedDrawer}
                 style={styles.appbar}
                 iconStyleLeft={styles.appbarIconStyle}
                 iconStyleRight={styles.appbarIconStyle}
                 title={"New " + this.props.personType}
                 iconElementLeft={<IconButton><ArrowBackIcon /></IconButton>}
                 onLeftIconButtonTouchTap={this.navigateBack}
            />
        );
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <EmployeesAppBar/>
                    <div style={this.props.isDrawerDocked ? window.strings.css.pushContent :null}>
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

export default SetNewPersonPage;
