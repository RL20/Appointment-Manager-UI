import React from 'react';
import {BrowserRouter as Router,Switch, Route, Link,Redirect} from 'react-router-dom';
import Divider from 'material-ui/Divider';
import {Menu, MenuItem} from 'material-ui/Menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import {List, ListItem} from 'material-ui/List';
import {black, white, cyan500,grey900,blue500, red500, greenA200,orange500} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import SiteURL from '../site-url';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingButton from '../FloatingButton';
import {styles, style, muiTheme} from '../Styles';
import isMobile from '../IsMobile';
import DatePicker from 'material-ui/DatePicker/DatePickerDialog';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TimePicker from 'material-ui/TimePicker';




var AbsencesPage = React.createClass({
    getInitialState: function() {
        var custObj = {
            id: null,
            name: null,
            address: null,
            phone:null,
            email:null,
            password: null,
            open: false,
            isCurrentDay: false,
            isAllDay: false
        };

        return {
            editAbsence: false,
            obj: custObj
        };
    },
    handleAAPCircleClick: function(){
        this.refs.dialogWindow.show();
        this.setState({open: true});
    },
    handleDateAccept: function(date){

        var todaysDate = new Date();

        if(date.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
            this.setState({isCurrentDay: true});
        }
        else this.setState({isCurrentDay: false});
        // Math.floor(date.getTime() / 1000)
        this.setState({isTimePickDialog: true});

    },
    handleClose: function() {
    this.setState({isTimePickDialog: false});
    },
    render: function() {
        const DefaultAppBar = () => (
            <AppBar
                 titleStyle={this.props.isDrawerDocked ? styles.appbarTitle : styles.appbarTitleOpenedDrawer}                 style={styles.appbar}                 iconStyleLeft={styles.appbarIconStyle}                 iconStyleRight={styles.appbarIconStyle}
                title={window.strings.absencesPage.appbar.title}
                // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={this.props.openDrawer}
                //         iconElementRight={         //         <IconMenu         //         iconButtonElement={         //   <IconButton><MoreVertIcon /></IconButton>         // }         //         targetOrigin={{horizontal: 'right', vertical: 'top'}}         //         anchorOrigin={{horizontal: 'right', vertical: 'top'}}         //     >         //         <MenuItem primaryText="Sign out" />         //         <MenuItem primaryText="Settings" />         //         <MenuItem primaryText="About" />         //     </IconMenu>         //         }
            />
        );
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />
        ];
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <DefaultAppBar/>
                    <div style={this.props.isDrawerDocked ? window.strings.css.pushContent :null}>
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

                        {this.state.editAbsence ? null : <FloatingButton circleIcon={true}  handleAAPCircleClick={this.handleAAPCircleClick} />}
                    </div>
                    <DatePicker open={this.state.open}
                                containerStyle={{direction: 'ltr'}}
                                ref='dialogWindow'
                                container='dialog'
                                autoOk={true}
                                firstDayOfWeek={0}
                                minDate={new Date()}
                                onAccept={this.handleDateAccept}
                    />
                    <Dialog
                        title="New absence"
                        actions={actions}
                        modal={false}
                        open={this.state.isTimePickDialog}
                        onRequestClose={this.handleClose}
                    >
                        <a>Please choose hour range</a><br/><br/>
                        <Checkbox
                            label={'All day'}
                            onCheck={() => this.setState({isAllDay: !this.state.isAllDay})}
                        /><br/>
                        <div  style={{display: 'flex', justifyContent: 'space-between'}}>
                        <TimePicker
                            dialogBodyStyle={{direction:'ltr'}}
                            hintText={window.strings.openingHoursPage.from}
                            value={this.state.isCurrentDay ? new Date() : null}
                            autoOk={true}
                            disabled={this.state.isAllDay}
                            textFieldStyle={{width: 71, marginRight: '18px'}}
                            onChange={(x, event) => this.setOpeningHoursDay(x, event, '', "fromHour1")}
                        />
                        <TimePicker
                            dialogBodyStyle={{direction:'ltr'}}
                            hintText={window.strings.openingHoursPage.to}
                            value={null}
                            autoOk={true}
                            disabled={this.state.isAllDay}
                            textFieldStyle={{width: 71}}
                            onChange={(x, event) => this.setOpeningHoursDay(x, event, '', "toHour1")}
                        /></div>

                    </Dialog>
                </div>
            </MuiThemeProvider>
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
                 titleStyle={this.props.isDrawerDocked ? styles.appbarTitle : styles.appbarTitleOpenedDrawer}                 style={styles.appbar}                 iconStyleLeft={styles.appbarIconStyle}                 iconStyleRight={styles.appbarIconStyle}
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
                        <div style={this.props.isDrawerDocked ? window.strings.css.pushContent :null}>
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

exports.AbsencesPage = AbsencesPage;
exports.AbsencesList = AbsencesList;
exports.default = AbsencesPage;