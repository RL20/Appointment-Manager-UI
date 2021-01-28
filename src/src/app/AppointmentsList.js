import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
    from 'material-ui/Table';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Popover from 'material-ui/Popover';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import SelectIcon from 'material-ui/svg-icons/content/select-all';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import {Menu, MenuItem} from 'material-ui/Menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import FilterIcon from 'material-ui/svg-icons/content/filter-list';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import {white, cyan500,grey900,blue500, red500, greenA200} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import FilterBar from './FilterBar';
import SearchAndChooseDialog from './SearchAndChooseDialog';
import {styles, style, icons, muiTheme} from './Styles';


import FloatingButton from './FloatingButton';
import UpIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import DownIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import isMobile from './IsMobile';
import AbsenceIcon from 'material-ui/svg-icons/notification/event-busy';





import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import CallIcon from 'material-ui/svg-icons/communication/call';
import TextIcon from 'material-ui/svg-icons/communication/textsms';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import AppointmentsIcon from 'material-ui/svg-icons/notification/event-note';
import SiteURL from './site-url';
import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';

import {EmployeePage} from './Pages/PersonsPage';






const stylewww = {margin: 5};
const styleswwww = {
    propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0'
    },
    propToggleHeader: {
        margin: '20px auto 10px'
    },
    p: {
        fontSize: '23px',
        color: 'rgb(218, 218, 218)',
        fontWeight: '500',
        float: 'none',
        margin: '0 auto',
        textShadow: 'rgb(185, 185, 185) 0.3px 1.3px',
        width: '200px',
        paddingTop: '140px'
    },
    toppad: {
        // textAlign: 'center',
        // margingTop: 20,
        paddingTop: 64
    },
    cardheader: {
        backgroundColor: 'rgb(232, 232, 232)',
        padding: 10 ,
        fontWeight:400,
    },
    divheader: {
        backgroundColor: 'rgb(232, 232, 232)',
        // padding: 10 ,
        fontWeight:400,
        display: 'flex',
        justifyContent: 'space-between'
    },
    containerWithoutPadding: {
        width: 626,
        maxWidth:'95%',
        float: 'none',
        margin: '0 auto',
    },
    container: {
        // paddingTop: 7,
        // width:700,
        // maxWidth:'95%',
        marginTop: 60,
        paddingTop: 17,
        width: 1085,
        maxWidth:'95%',
        // float: 'none',
        // margin: '0 auto',


        position: 'fixed',
        // left: '50%',
        // transform: 'translateX(-50%)'
        // position: 'relative',
        // bottom: 0
    },
    drawerOpenedFixedContainer: {

        width: '100%',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 2,
        marginLeft: -125
    },
    fixedContainer: {
        width: '100%',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 2
    },
    tableContainer: {
        // paddingTop: 7,
        // width:700,
        // maxWidth:'95%',
        paddingTop: 170,
        width: 1085,
        maxWidth:'95%',
        float: 'none',
        margin: '0 auto',
        zIndex: 0,
        position: 'relative',
        bottom: 0
    },
    title: {
        color: 'darkcyan',
        padding: 12
    },
    pageTitle: {
        // textAlign: 'center',
        margingTop: 20,
        fontWeight: 500,
        color: '#00888c',
        margin: 0,
        // paddingLeft: 16,
        marginLeft: '12px',
        paddingTop:34,
        fontSize: '16px',
        paddingBottom: '12px'
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
        marginLeft: (() => window.strings.css.pushContent)
    },
    appbar: {
        // textAlign: 'center',
        // margingTop: 20,
        position:'fixed'
    }
};

const iconswww = {
    smallIcon: {
        width: 36,
        height: 36,
    },
    mediumIcon: {
        width: 48,
        height: 48,
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
        width: 120,
        height: 120,
        padding: 30,
        fontSize: 14
    }
};
var superagent;
var date = new Date().toLocaleString();
function changeDate()
{
    date.setDate(date.getDate() + 1);
    return date;
}
var isFirst = true;
var lastDate = null;



var AppointmentShowAndEdit = React.createClass({
    getInitialState: function() { 
        // appointmentDate
        // :
        // "2017-11-28"
        // appointmentTime
        //     :
        //     "19:00:00"
        // comment
        //     :
        //     "blabla"
        // customerId
        //     :
        //     "HAREL"
        // durationTime
        //     :
        //     "00:07:30"
        // employeeId
        //     :
        //     "aviya"
        // console.log("PersonShowAndEdit");
        console.log(this.props.obj);
        if(this.props.obj == null) return {
            showResults: false,
            editUser: false,
            phone: '',
            email: '',
            name: '',
            address: '',
            hover: false,
            newPhone: '',
            newEmail: '',
            newName: '',
            newAddress: ''
        };
        return {
            showResults: false,
            editUser: false,
            appointmentDate: this.props.obj.appointmentDate,
            appointmentTime:this.props.obj.appointmentTime,
            employeeId: this.props.obj.employeeId,
            customerId: this.props.obj.customerId,
            durationTime: this.props.obj.durationTime,
            comment: this.props.obj.comment,
            hover: false,
            newPhone: '',
            newEmail: '',
            newName: '',
            newAddress: ''
        };
    },
    componentWillMount: function() {

        // phone: this.props.obj.phone,
        //     email:this.props.obj.email,
        //     name: this.props.obj.name,
        //     address: this.props.obj.address,




        // if(!this.props.isNew)
        // {
        //     this.setState({
        //         newPhone: this.props.obj.phone,
        //         newEmail: this.props.obj.email,
        //         newName: this.props.obj.name,
        //         newAddress: this.props.personType == 'Employee' ? null : this.props.obj.address
        //     });
        // }
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
            <div style={{width: this.props.isDrawerDocked? '86%':'100%' , float: 'none',margin: '0 auto'}}>
                <ListItem disabled={true} style={{padding: '16px 30px', color: 'inherit'}}>
                    <table style={{width: '100%',tableLayout: 'fixed'}}>
                        <tr>
                            <td style={{paddingLeft: '17px',textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>
                                <a style={{fontSize:17}}>{window.strings.appointmentShowAndEdit.appointmentDate}</a><br/>{this.props.editUser ? null:<br/>}
                                {this.props.editUser ? <TextField ref="phoneTextField" style={{width: '164px'}} underlineStyle={styles.underlineStyle} value={this.state.newPhone} onChange={this._handlePhoneTextFieldChange}  />
                                    :<a style={{color:'grey', fontSize:16}}>{this.state.appointmentDate}</a>}
                            </td>
                            <td style={{paddingLeft: '17px',textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>
                                <a style={{fontSize:17}}>{window.strings.appointmentShowAndEdit.appointmentTime}</a><br/>{this.props.editUser ? null:<br/>}
                                {this.props.editUser ? <TextField ref="emailTextField" style={{width: '157px',paddingLeft: '8px'}} underlineStyle={styles.underlineStyle} value={this.state.newEmail} onChange={this._handleEmailTextFieldChange}  />
                                    :<a style={{color:'grey', fontSize:17}}>{this.state.appointmentTime}</a>}
                            </td>
                        </tr>
                    </table>
                </ListItem>
                <ListItem disabled={true} style={{padding: '16px 30px', color: 'inherit'}}>
                    <table style={{width: '100%',tableLayout: 'fixed'}}>
                        <tr>
                            <td style={{paddingLeft: '17px',textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>
                                <a style={{fontSize:17}}>{window.strings.appointmentShowAndEdit.customerId}</a><br/>{this.props.editUser ? null:<br/>}
                                {this.props.editUser ? <TextField ref="phoneTextField" style={{width: '164px'}} underlineStyle={styles.underlineStyle} value={this.state.newPhone} onChange={this._handlePhoneTextFieldChange}  />
                                    :<a style={{color:'grey', fontSize:16}}>{this.state.customerId}</a>}
                            </td>
                            <td style={{paddingLeft: '17px',textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>
                                <a style={{fontSize:17}}>{window.strings.appointmentShowAndEdit.employeeId}</a><br/>{this.props.editUser ? null:<br/>}
                                {this.props.editUser ? <TextField ref="emailTextField" style={{width: '157px',paddingLeft: '8px'}} underlineStyle={styles.underlineStyle} value={this.state.newEmail} onChange={this._handleEmailTextFieldChange}  />
                                    :<a style={{color:'grey', fontSize:17}}>{this.state.employeeId}</a>}
                            </td>
                        </tr>
                    </table>
                </ListItem>
                <ListItem disabled={true} style={{padding: '16px 30px', color: 'inherit'}}>
                    <table style={{width: '100%',tableLayout: 'fixed'}}>
                        <tr>
                            <td style={{paddingLeft: '17px',textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>
                                <a style={{fontSize:17}}>{window.strings.appointmentShowAndEdit.durationTime}</a><br/>{this.props.editUser ? null:<br/>}
                                {this.props.editUser ? <TextField ref="phoneTextField" style={{width: '164px'}} underlineStyle={styles.underlineStyle} value={this.state.newPhone} onChange={this._handlePhoneTextFieldChange}  />
                                    :<a style={{color:'grey', fontSize:16}}>{this.state.durationTime}</a>}
                            </td>
                            <td style={{paddingLeft: '17px',textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>
                                <a style={{fontSize:17}}>{window.strings.appointmentShowAndEdit.comment}</a><br/>{this.props.editUser ? null:<br/>}
                                {this.props.editUser ? <TextField ref="emailTextField" style={{width: '157px',paddingLeft: '8px'}} underlineStyle={styles.underlineStyle} value={this.state.newEmail} onChange={this._handleEmailTextFieldChange}  />
                                    :<a style={{color:'grey', fontSize:17}}>{this.state.comment}</a>}
                            </td>
                        </tr>
                    </table>
                </ListItem>

                <div  style={{padding: '0 7px', maxWidth: 750, float: 'none',margin: '0 auto'}}>
                    <br/>
                    {this.props.editUser ? <Divider style={{backgroundColor: '#bdbdbd'}}/>:null}
                    <br/>
                </div>
                <div  style={{padding: '0 7px', maxWidth: 700, float: 'none',margin: '0 auto',display: 'flex',justifyContent: 'flex-end'}}>
                </div>
                <br/>
            </div>

        );
    }
});



var AppointmentsList = React.createClass({
    getInitialState: function() {
        superagent = this.props.superagent;
      // this.loadTable();
        console.log("ismobile: ",this.props.isMobile);
        console.log("isDrawerDocked: ",this.props.isDrawerDocked);
        return {
            tableData: [],
            appointmentObj: [],
            showResults: false,
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: false,
            multiSelectable: true,
            enableSelectAll: true,
            deselectOnClickaway: true,
            showCheckboxes: false,
            height: '70vh',
            popOverOpen: false,
            date: tableData[0].date,
            isItemVisible: false,
            Appointment: null,
            checked: false,
            checkAll: false,
            rowState: [],
            // chooseCustomerDailog: true,
            selectedPerson: null,
            personList: [],
            customer: null,
            isPersonSelected: false,
            isLoading: true
        };
    },
    setNames: function(empNames, custNames, tabledata)
    {
        return new Promise((resolve, reject) => {
            // var tabledata = this.state.tableData;
            for(var i = 0; i < tabledata.length; i++)
            {
                tabledata[i].customerId = custNames[tabledata[i].customerId];
                tabledata[i].employeeId = empNames[tabledata[i].employeeId];
                if(i == tabledata.length - 1) resolve();
            }});
    },
    loadTable: function()
    {

        var tableData1 = [];
        var urls = ['showFutureAppointmentsList','showEmployeeAppointments','showCustomerAppointments','showAppointmentsHistory','showTodayAppointmentsList '];
        // var urlEnd = this.props.personType == 'Employee' ? 'getAllEmployees': 'getAllCustomers';
        // console.log("url: ",urlEnd);
        console.log(this.props.superagent);

        if(this.props.listType == 0 ||this.props.listType == 3 ||this.props.listType == 4){
            var _this = this;
            if(this.props.listType == 0){
            superagent
                .post(SiteURL.get + urls[this.props.listType])
                .set('Accept', 'application/json')
                .end(function(err, res){
                    if (err) {
                        console.log('error: ' , err);
                        console.log('response: ' , res);

                        alert('Error!');
                        reject(err);
                    } else {
                        console.log('response: ' , res);
                        // _this.setState({tableData : JSON.parse(res.text)});
                        tableData1 = JSON.parse(res.text);
                        _this.loadList(tableData1);
                        resolve(res.text);
                    }
                }); }
        else {
                superagent
                .get(SiteURL.get + urls[this.props.listType])
                .set('Accept', 'application/json')
                .end(function(err, res){
                    if (err) {
                        console.log('error: ' , err);
                        console.log('response: ' , res);

                        alert('Error!');
                        reject(err);
                    } else {
                        console.log('response: ' , res);
                        // _this.setState({tableData : JSON.parse(res.text)});
                        tableData1 = JSON.parse(res.text);
                        _this.loadList(tableData1);
                        resolve(res.text);
                    }
                });
            }
        }
            // fetch(SiteURL.get + urls[this.props.listType],  this.props.listType == 4 ? null : {
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     },
            //     method: "POST",
            //     body: ""
            // })
            //     .then((response) => {
            //             if (response.status !== 200) {
            //                 console.log('Looks like there was a problem. Status Code: ' +
            //                     response.status);
            //                 // this.setState({personList : []});
            //                 // this.setState({allPersonsList : []});
            //                 response.json().then((data)=>{
            //                     console.log(data);
            //                     alert("message: " + data.message + "    code: " + data.code);
            //                 });
            //                 return;
            //             }
            //
            //             // console.log(response.json());
            //             // Examine the text in the response
            //
            //             response.json().then((data)  => {
            //                 console.log(data);
            //                 this.setState({tableData : data});
            //                 tableData1 = data;
            //                 this.setRowsState(tableData1);
            //                 // this.setState({allPersonsList : data});
            //             });
            //         }
            //     )
            //     .catch(function(err) {
            //         console.log('Fetch Error :-S', err);
            //     });
        else{
            if(this.props.location.state == undefined)
            {
                this.setState({ chooseCustomerDailog: true});
                // alert("screw you!");
                // setTimeout(()=>{ this.setState({ chooseCustomerDailog: true}); }, 500);

            }
            else{
                this.setState({ chooseCustomerDailog: false});
                // setTimeout(()=>{ this.setState({ chooseCustomerDailog: false}); }, 500);

                // alert("screw you again!!!!");
                this.getPersonAppointments();
            }
        }
    },
    getPersonAppointments: function()
    {
        //superagent send() func does not need JSON.stringify-ied object it does that automatically
        var tableData1 = [];
        var urls = ['showFutureAppointmentsList','showEmployeeAppointments','showCustomerAppointments','showAppointmentsHistory','showTodayAppointmentsList '];

        var payload;
        if(this.state.isPersonSelected)
        // if(true)
        {
            console.log(this.state.customer);
             payload = [
                {employeeId: this.state.customer.obj.id},
                {customerId: this.state.customer.obj.id}
            ];
        }
        else {
         payload = [
            {employeeId: this.props.location.state.employeeId},
            {customerId: this.props.location.state.customerId}
        ];
        }
        // var employeeIdPayload = {
        //     employeesId: this.props.location.state.employeeId
        // };
        var _this = this;
        alert(JSON.stringify(payload[this.props.listType - 1]));
        console.log("URL: " + urls[this.props.listType]);
        superagent
            .post(SiteURL.get + urls[this.props.listType])
            .send(payload[this.props.listType - 1])
            .set('Accept', 'application/json')
            .end(function(err, res){
                if (err) {
                    console.log('error: ' , err);
                    console.log('response: ' , res.text);

                    alert('Error!');
                    reject(err);
                } else {
                    console.log('response: ' , res);
                    // _this.setState({tableData : JSON.parse(res.text)});
                    tableData1 = JSON.parse(res.text);
                    _this.loadList(tableData1);
                    resolve(res.text);
                }
            });

        // fetch(SiteURL.get + urls[this.props.listType],
        //     {
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         method: "POST",
        //         body: JSON.stringify(payload[this.props.listType - 1])
        //     })
        //     .then((response) => {
        //             if (response.status == 500) {
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
        //                 this.setState({tableData : data});
        //                 tableData1 = data;
        //                 this.setRowsState(tableData1);
        //             });
        //         }
        //     )
        //     .catch(function(err) {
        //         console.log('Fetch Error :-S', err);
        //     });
    },
    getFilteredAppointments: function()
    {
        var tableData1 = [];
        var urls = ['showFutureAppointmentsList','showEmployeeAppointments','showCustomerAppointments','showAppointmentsHistory','showTodayAppointmentsList '];

        var payload;
        if(this.state.isPersonSelected)
        // if(true)
        {
            console.log(this.state.customer);
             payload = [
                {employeeId: this.state.customer.id},
                {customerId: this.state.customer.id}
            ];
        }
        else {
         payload = [
            {employeeId: this.props.location.state.employeeId},
            {customerId: this.props.location.state.customerId}
        ];
        }
        // var employeeIdPayload = {
        //     employeesId: this.props.location.state.employeeId
        // };
        var _this = this;
        console.log("URL: " + urls[this.props.listType]);
        superagent
            .post(SiteURL.get + urls[_this.props.listType])
            .send(JSON.stringify(payload[this.props.listType - 1]))
            .set('Accept', 'application/json')
            .end(function(err, res){
                if (err) {
                    console.log('error: ' , err);
                    console.log('response: ' , res.text);

                    alert('Error!');
                    reject(err);
                } else {
                    // alert(urls[_this.props.listType]);
                    console.log(urls[_this.props.listType] + ': ' , res);
                    // _this.setState({tableData : JSON.parse(res.text)});
                    tableData1 = JSON.parse(res.text);
                    _this.loadList(tableData1);
                    resolve(res.text);
                }
            });
        // console.log("URL: " + urls[this.props.listType]);
        //
        // fetch(SiteURL.get + urls[this.props.listType],
        //     {
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         method: "POST",
        //         body: JSON.stringify(payload[this.props.listType - 1])
        //     })
        //     .then((response) => {
        //             if (response.status == 500) {
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
        //                 this.setState({tableData : data});
        //                 tableData1 = data;
        //                 this.setRowsState(tableData1);
        //             });
        //         }
        //     )
        //     .catch(function(err) {
        //         console.log('Fetch Error :-S', err);
        //     });
    },
    setRowsState: function(tableData1)
    {
        // alert('setRowsState');
        var _this = this;
        if(tableData1.length == 0)
        {
            return new Promise((resolve, reject) => {resolve()});
        }

        return new Promise((resolve, reject) => {
            var rowState =[];
            var customersIdList =[];
            var employeesIdList =[];
            new Promise((resolve1, reject) => {
            for(var i = 0; i < tableData1.length; i++) {
                rowState[i] = false;
                customersIdList.push(tableData1[i].customerId);
                employeesIdList.push(tableData1[i].employeeId);

                if(i == tableData1.length-1) _this.fetchNames(customersIdList, employeesIdList, tableData1).then(()=>resolve1());

            }
            }).then(()=>_this.setState({rowState: rowState},() => resolve(true)));
            if(false) reject();

        });

    },
    fetchNames: function(customersIdList, employeesIdList, tabledata){
            console.log('fetchNames');
        var custNames;
            var customersIdListPayload = {
                customersIdList: customersIdList
            };
            var employeesIdListPayload = {
                employeesIdList: employeesIdList
            };
        var _this = this;
        // console.log("URL: " + urls[this.props.listType]);
        return new Promise((resolve, reject) => {
        superagent
            .post(SiteURL.get + "getCustomersNames")
            .send( customersIdListPayload )
            .set({'Accept': 'application/json','Content-Type': 'application/json'})
            .end(function(err, res){
                if (err) {
                    console.log('error: ' , err);
                    console.log('response: ' , res.text);

                    alert('Error!');
                    // reject(err);
                } else {
                    console.log('response: ' , res);
                    console.log(JSON.parse(res.text));
                    custNames = JSON.parse(res.text);
                    next();
                    // resolve(res.text);
                }
            });
            // fetch(SiteURL.get + "getCustomersNames",
            //     {
            //         headers: {
            //             'Accept': 'application/json',
            //             'Content-Type': 'application/json'
            //         },
            //         method: "POST",
            //         body: JSON.stringify( customersIdListPayload )
            //     })
            //     .then((response) => {
            //             if (response.status == 500) {
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
            //                 custNames = data;
            //                 next();
            //             });
            //         }
            //     )
            //     .catch(function(err) {
            //         console.log('Fetch Error :-S', err);
            //     });

        const next = () => {
            superagent
                .post(SiteURL.get + "getEmployeesNames")
                .send(JSON.stringify(employeesIdListPayload))
                .set({'Accept': 'application/json','Content-Type': 'application/json'})
                .end(function(err, res){
                    if (err) {
                        console.log('error: ' , err);
                        console.log('response: ' , res.text);

                        alert('Error!');
                        // reject(err);
                    } else {
                        console.log('response: ' , res);
                        // _this.setState({tableData : JSON.parse(res.text)});
                        // tableData1 = JSON.parse(res.text);
                        // _this.setRowsState(tableData1);

                        // console.log(data);
                        // alert('setNames');
                        console.log('setnames',res.text);
                        _this.setNames(JSON.parse(res.text), custNames, tabledata).then(()=>resolve(res.text));


                    }
                });
            // fetch(SiteURL.get + "getEmployeesNames",
            //     {
            //         headers: {
            //             'Accept': 'application/json',
            //             'Content-Type': 'application/json'
            //         },
            //         method: "POST",
            //         body: JSON.stringify(employeesIdListPayload)
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
            //             response.json().then((data) => {
            //                 console.log(data);
            //                 this.setNames(data, custNames);
            //             });
            //         }
            //     )
            //     .catch(function (err) {
            //         console.log('Fetch Error :-S', err);
            //     });

        }});

    },
    checkRow: function (id, value) {
        this.state.rowState[id] = value;
        if (this.state.checkAll) {
            this.state.checkAll = !this.state.checkAll;
        }
        this.setState({
            rowState: this.state.rowState,
            checkAll: this.state.checkAll
        });
    },
    checkAll: function () {

        var rowState = this.state.rowState;
        var checkState = !this.state.checkAll;
        var _this = this;
        var promise = new Promise((resolve, reject) => {
            for(var i = 0; i < rowState.length; i++) {
                console.log(i);
                rowState[i] = checkState;
                if(i == rowState.length - 1) {
                    console.log(rowState);
                    resolve(rowState);}
            }
        });


        // this.state.checkAll = checkState;
        Promise.all([promise]).then(rowState => {
            // alert();
            _this.setState({
                rowState: rowState,
                checkAll: checkState
            },_this.forceUpdate());
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
            // rowState: []
        });
        this.handleRequestClose();
    },
    setDateTitle: function(date)
    {
        this.setState({
            date: date
        });
    },
    showAppointment: function(obj)
    {
        // appointmentDate
        //     :
        //     "2017-11-28"
        // appointmentTime
        //     :
        //     "19:00:00"
        // comment
        //     :
        //     "blabla"
        // customerId
        //     :
        //     "HAREL"
        // durationTime
        //     :
        //     "00:07:30"
        // employeeId
        //     :
        //     "aviya"
        console.log('showAppointment', obj);
        this.setState({
            // Appointment: tableData[2],
            appointmentObj: obj,
            isItemVisible: true
        });
    },
    componentDidMount: function() {
        // var someDiv = document.getElementById('someDiv');
        // var distanceToTop = document.querySelector('#listCard').getBoundingClientRect().right;
        // document.querySelector('#appTableHead').style.right = distanceToTop;

        document.addEventListener('click', this.handleClick, false);
        this.loadTable();
    },
    onClick: function() {
        this.setState({ showResults: true});
    },
    hideFilter: function() {
        this.setState({ showResults: false});
    },
    onFilter: function(obj) {
        console.log(obj);
        this.setState({ showResults: !this.state.showResults });
        this.getFilteredAppointments();
    },
    onCheck: function(event, checked) {
        console.log(event);
        event.target.checked = true;
    },
    checkAllCheckboxes: function() {

        this.setState({checked: !this.state.checked});
        // return;
        // alert(checked);
        // var {selectedItems} = this.state;
        // selectedItems.push( someData );
        // this.setState({selectedItems})
    },
    navigateBack: function(){
        this.state.isItemVisible ?
            this.setState({

                isItemVisible: false
            }):
            window.history.back();
        // this.goBack();
    },
    componentWillMount: function(){
        // alert('appointmenttablemodel');
        var _this = this;
        isFirst = true;
        // if(this.props.listType == 2 ||this.props.listType == 3)
        // {
        //     this.setState({chooseCustomerDailog:true});
        // }
        var urls = ["showEmployees","showCustomers"];

        if(this.props.listType == 1 ||this.props.listType == 2)
        {
            // alert(this.props.listType - 1);
            superagent
                .get(SiteURL.get + urls[this.props.listType - 1])
                .set('Accept', 'application/json')
                .end(function(err, res){
                    if (err) {
                        console.log('error: ' , err);
                        console.log('response: ' , res.text);
                        _this.setState({personList : []});
                        alert('Error!');
                        // reject(err);
                    } else {
                        console.log('response: ' , res);
                        var data = JSON.parse(res.text);
                        _this.setState({personList : data});
                        // resolve(res.text);
                    }
                });
        }

        // fetch(SiteURL.get + urls[this.props.listType - 1])
        //     .then((response) => {
        //             if (response.status !== 200) {
        //                 console.log('Looks like there was a problem. Status Code: ' +
        //                     response.status);
        //                 this.setState({personList : []});
        //                 return;
        //             }
        //
        //             // console.log(response.json());
        //             // Examine the text in the response
        //
        //             response.json().then((data)  => {
        //                 console.log(data);
        //                 this.setState({personList : data});
        //             });
        //         }
        //     )
        //     .catch(function(err) {
        //         console.log('Fetch Error :-S', err);
        //     });
    },
    showChooseCustDialog: function(event) {

        this.setState({
            chooseCustomerDailog: true,
        });

        console.log(event.namespace);
        // this.setState({
        //     personType: "employee",
        // });
    },
    closeChooseCustDialog: function(event) {


        this.setState({
            chooseCustomerDailog: false,
        });

    },
    togglePerson(bool){

        console.log(bool);
        if(bool !== undefined)
        {
            this.setState({isItemVisible: bool});
        }
        else this.setState({isItemVisible: !this.state.isItemVisible});
    },
    componentWillUnmount: function(){
        ////alert('unmount');
        document.removeEventListener('click', this.handleClick, false);
        // muiTheme.appBar.color = cyan500;
        // muiTheme.appBar.textColor = white;
        this.setState({ searchBtnPressed: false });
    },
    updateState: function() {


        this.setState({
            isLoading: true,
            tableData: [],
            showResults: false
        });

    },
    hideFilterBar: function() {


        this.setState({
            showResults: false
        });

    },
    loadList: function(data) {
        // alert('loadTable');

        var _this = this;
        this.setRowsState(data).then(function(result){
            // alert('loadList');
            _this.setState({
                tableData: data
            },() => _this.setState({
                isLoading: false
            }));
        });
    },
    handlePersonSelected: function(obj) {
        console.log("Customer selected:",obj);
        this.setState({
            isPersonSelected: true,
            selectedPerson: obj.name,
            customer: obj
        });

        // this.refs.availableAppointmentsCard.handleEmpSelected(obj);
    },
    componentDidUpdate: function()
    {
        console.log("componentDidUpdate");
        console.log("isFirst: " + isFirst);
        console.log("isPersonSelected: " + this.state.isPersonSelected);

        if(this.state.isPersonSelected && isFirst)
        {
            alert(JSON.stringify(this.state.customer));
            this.getPersonAppointments();
            isFirst = false;
        }
    },
    render: function() {

        var locale = window.strings.appointmentsPage.listTitle;
        let title = [locale.appointments,locale.byEmployee,locale.byCustomer,locale.history,locale.todaysAppointments];
        const AppointmentsListAppBar = () => (
            <AppBar
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle : styles.appbarTitleOpenedDrawer}
                style={styles.appbar}
                iconStyleLeft={styles.appbarIconStyle}
                iconStyleRight={styles.appbarIconStyle}
                title={title[this.props.listType]}
                iconElementLeft={<IconButton><window.strings.css.iconBack/></IconButton>}
                onLeftIconButtonTouchTap={this.navigateBack}
                iconElementRight={
               <IconButton onTouchTap={ (e) => {e.preventDefault(); this.onClick();}}><FilterIcon color={white}/></IconButton>}
            />
        );
        const resultsTitle = [
            <div style={styles.title}>
                <i style={{fontSize: 19}}>{this.state.tableData.length + window.strings.appointmentsPage.history.results}</i>
            </div>
        ];

        const loadingCircle = [
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: 150}}>
                <CircularProgress size={80} thickness={5} />
            </div>
        ];
        const listIsEmpty = [
            <p style={styles.p}>{window.strings.appointmentsPage.listIsEmpty}</p>
        ];
        var self = this;

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppointmentsListAppBar/>

                    <FilterBar hideFilterBar={this.hideFilterBar} loadList={this.loadList} superagent={this.props.superagent} open={this.state.showResults} isDrawerDocked={this.props.isDrawerDocked} wideFilter={true} onFilter={(obj) => {this.onFilter(obj)}} updateState={this.updateState}/>
                    <div style={this.props.isDrawerDocked ? window.strings.css.pushContent :null}>

                        <div>
                            {this.props.isMobile ? null:<div style={styles.toppad}></div>}
                            {this.props.isMobile ? null:<div style={styles.toppad}></div>}
                            { (this.state.tableData === undefined || this.state.tableData.length == 0) ?  (this.state.isLoading ? loadingCircle : listIsEmpty):
                                <div>
                                    <div   style={this.props.isDrawerDocked ? window.strings.css.drawerOpenedFixedContainer : styles.fixedContainer}>
                                        <Card zDepth={1} id="appTableHead" style={styles.tableHeadContainer}>

                                            <div>

                                                <div>
                                                    <div
                                                        style={{backgroundColor: muiTheme.palette.pickerHeaderColor, color: muiTheme.palette.alternateTextColor}}
                                                        className="table-ro"
                                                        fixedHeader={this.state.fixedHeader}
                                                        selectable={this.state.selectable}
                                                        multiSelectable={this.state.multiSelectable}
                                                    >
                                                        <div
                                                            style={styles.divheader}
                                                        > {resultsTitle}
                                                            <FlatButton
                                                                label={window.strings.appointmentsPage.selectCheckbox}
                                                                labelStyle={{color: muiTheme.palette.alternateTextColor}}
                                                                labelPosition="after"
                                                                icon={<SelectIcon color={muiTheme.palette.alternateTextColor}/>}
                                                                onTouchTap={this.toggleCheckboxes}
                                                            />
                                                        </div>
                                                        <ListItem disabled={true} style={{color: 'inherit'}}
                                                                  leftIcon={this.state.showCheckboxes ? <Checkbox labelStyle={{color: muiTheme.palette.alternateTextColor}} checked={this.state.checkAll} onCheck={this.checkAll} /> : null}>
                                                            <table style={{width: '100%',tableLayout: 'fixed'}}>
                                                                <tr>
                                                                    <td style={{paddingLeft: '8px',textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>
                                                                        {window.strings.appointmentsPage.history.time}
                                                                    </td>
                                                                    <td style={{paddingLeft: '17px',textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>
                                                                        {window.strings.appointmentsPage.history.employee}
                                                                    </td>
                                                                    <td style={{paddingLeft: '28px',textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>
                                                                        {window.strings.appointmentsPage.history.customer}
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </ListItem>
                                                    </div></div></div>
                                        </Card>
                                    </div>
                                    <div id="listCard" style={styles.tableContainer}>

                                        <div>
                                            <div>
                                                <div
                                                    className="table-ro"
                                                    fixedHeader={this.state.fixedHeader}
                                                    selectable={this.state.selectable}
                                                    multiSelectable={this.state.multiSelectable}
                                                >
                                                    <div
                                                        displayRowCheckbox={this.state.showCheckboxes}
                                                        deselectOnClickaway={this.state.deselectOnClickaway}
                                                        showRowHover={this.state.showRowHover}
                                                        stripedRows={this.state.stripedRows}
                                                    >
                                                        {this.state.tableData.map((row, index) => {
                                                            if (lastDate == null || row.appointmentDate != lastDate || index == 0) {
                                                                lastDate = row.appointmentDate;
                                                                return (
                                                                    <div>
                                                                        <h2 style={styles.pageTitle}>{row.appointmentDate}</h2>
                                                                        <Divider/>
                                                                        <Row hideFilter={this.hideFilter} showAppointment={this.showAppointment} showCheckboxes={this.state.showCheckboxes} obj={row} index={index} key={row.id} checked={this.state.rowState[index]} callback={this.checkRow} />
                                                                        <Divider/></div>
                                                                );
                                                            }
                                                            else {
                                                                lastDate = row.appointmentDate;

                                                                return (
                                                                    <div>
                                                                        <Row hideFilter={this.hideFilter} showAppointment={this.showAppointment} showCheckboxes={this.state.showCheckboxes} obj={row} index={index} key={row.id} checked={this.state.rowState[index]} callback={this.checkRow} />
                                                                        <Divider/></div>
                                                                );
                                                            }
                                                        })}
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        { this.state.isItemVisible ?  <EmployeePage component={AppointmentShowAndEdit} editUser={this.state.editUser} isNew={this.state.editUser} togglePerson={this.togglePerson} history={this.props.history} personType={this.props.personType} isDrawerDocked={this.props.isDrawerDocked} goBacck={() => this.setState({ showEmployee: false})} obj={this.state.appointmentObj} name={this.state.empName} id={this.state.empId}/>
                            : null}
                    </div>
                    <SearchAndChooseDialog personList={this.state.personList} personType={"customer"} handleListClick={(obj) => {this.handlePersonSelected(obj);}} open={this.state.chooseCustomerDailog} close={this.closeChooseCustDialog} />
                </div>
            </MuiThemeProvider>
        );
    }
});

// var FilterBar = React.createClass({
//     getInitialState: function() {
//         return { showResudflts: false };
//     },
//     render: function() {
//         return (
//             <div>
//                 <Card zDepth={1} style={{padding:"16px", backgroundColor: "#47cbdc",position: "fixed", zIndex:222, right: 0, left: 0}}>
//                     <div style={this.props.isDrawerDocked ? {marginLeft: 250} :null}>
//                         <div style={styles.containerWithoutPadding}>
//                             <DateRange wideFilter={this.props.wideFilter} onFilter={this.props.onFilter}/>
//                         </div>
//                     </div>
//                 </Card>
//
//             </div>
//         );
//     }
// });

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


            <ListItem onTouchTap={this.props.showCheckboxes ? (e) => {e.preventDefault(); alert(); this.checkIt();} : (e) => {e.preventDefault(); this.props.hideFilter(); this.props.showAppointment(this.props.obj)}} className="table-row"
                      leftCheckbox={this.props.showCheckboxes ? <Checkbox checked={this.props.checked} onCheck={this.checkIt} />: null}>
                <table style={{width: '100%',tableLayout: 'fixed'}}>
                    <tr>
                        <td style={{paddingLeft: '8px',textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>{this.props.obj.appointmentTime}</td>
                        <td style={{paddingLeft: '17px',textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>{this.props.obj.employeeId}</td>
                        <td style={{paddingLeft: '28px',textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>{this.props.obj.customerId}</td>
                    </tr>
                </table>
            </ListItem>
        );
    }
});

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

// var rowsDate = [];
export default AppointmentsList;



