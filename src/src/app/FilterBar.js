import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import SearchAndChooseDialog from './SearchAndChooseDialog';
import TextField from 'material-ui/TextField';
import SiteURL from './site-url';
import Card from 'material-ui/Card';
import {styles, muiTheme} from './Styles';
import CloseIcon from 'material-ui/svg-icons/navigation/close';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import SearchIcon from 'material-ui/svg-icons/action/search';







const optionsStyle = {
    // width: '100%',
    // padding: '0',
    display: 'table-cell',
    paddingLeft: '5vw'


};


const style = {
    tableRow:{
        display: 'table-row',
    },
    tableRowdd:{
        display: 'flex',
        paddingTop: '34px',
        maxWidth: 1025,
        float: 'none',
        margin: '0 auto'
    },
    editTextWidth:{
        // width: '80%',
        width: '90px'
    },
    container: {
        width: '100%',
    },
    raisedButton: {
        justifyContent: 'space-between'
    },
    btn: {
        // margin: 69,
        // display: 'inline-flex',
        // padding: '30 0 0 0'
        // paddingLeft: '30',
        // paddingRight: '30',
        // margin: '25'
    },
    btn1: {
        margin: 12,
        display: 'table-cell',
        padding: '30,0'

    },
    centerDiv:{
        width: '100%',
        float: 'none',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between'
    },
    centerDiv1:{
        width: '100%',
        float: 'none',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center'
    },
    datePicker:{
        width: '100%',
        float: 'none',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-around'
    },
    centerBtn:{
        width: '100%',
        float: 'none',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    centerBtn11:{
        width: '100%',
        float: 'none',
        margin: '-26px auto',
        display: 'flex',
        justifyContent: 'flex-end',
        paddingTop: '18px'
        // padding: '12px 0px'
    },
    title:{
        paddingTop: '7px',
        fontSize: '20px',
        color: muiTheme.palette.alternateTextColor
    },
    editTextWidth1:{
        width: '400px',
        maxWidth:'75%'
    },
    searchIcon:{
        height: '30px',
        width: '30px',
        marginTop: 13
    },
    containerWithoutPadding: {
        width: 626,
        maxWidth:'95%',
        float: 'none',
        margin: '0 auto'
    },
    filterBarOpened: {
       display: 'block',
      webkitAnimation: 'slide-down 0.3s ease-out',
      mozAnimation: 'slide-down 0.3s ease-out'
    },
    filterBarClosed: {
        display: 'none'
    }
};

/**
 * This example allows you to set a date range, and to toggle `autoOk`, and `disableYearSelection`.
 */
// export default class DatePickerExampleToggle extends React.Component {
//     constructor(props) {
//         super(props);
//
//         const minDate = new Date();
//         const maxDate = new Date();
//         minDate.setFullYear(minDate.getFullYear() - 1);
//         minDate.setHours(0, 0, 0, 0);
//         maxDate.setFullYear(maxDate.getFullYear() + 1);
//         maxDate.setHours(0, 0, 0, 0);
//
//
//
//         this.state = {
//             minDate: minDate,
//             maxDate: maxDate,
//             autoOk: true,
//             disableYearSelection: false,
//             value: 1,
//             chooseDailog : false,
//             personType: 'none',
//             wideFilter : !this.props.wideFilter,
//             personList: [],
//         };
//     }
//
//     handleChangeMinDate = (event, date) => {
//         this.setState({
//             minDate: date,
//         });
//     };
//
//     handleChangeMaxDate = (event, date) => {
//         this.setState({
//             maxDate: date,
//         });
//     };
//
//     handleToggle = (event, toggled) => {
//         this.setState({
//             [event.target.name]: toggled,
//         });
//     };
//
//     showChooseCustDialog = (event) => {
//
//         this.setState({
//             chooseDailog: true,
//         });
//
//         console.log(event.namespace);
//         this.setState({
//             personType: "customer",
//         });
//     };
//     closeChooseCustDialog = (event) => {
//
//
//         this.setState({
//             chooseDailog: false,
//         });
//
//     };
//
//     onFilter = (event, toggled) => {
//         this.props.onFilter();
//     };
//
//     render() {
//         return (
//             <div>
//
//
//                 { this.state.wideFilter ?
//                 <div style={style.centerDiv1}>
//                     <TextField style={style.editTextWidth1} hintText="Search"/> <SearchIcon color='#5bc0de' style={style.searchIcon}/>
//                     <br/>
//                 </div>: null }
//                 <div style={style.centerDiv}>
//
//                     <DatePicker
//
//                         textFieldStyle={style.editTextWidth}
//                         onChange={this.handleChangeMinDate}
//                         autoOk={this.state.autoOk}
//                         floatingLabelText="Min Date"
//                         defaultDate={this.state.minDate}
//                         disableYearSelection={this.state.disableYearSelection}
//                     />
//                     <DatePicker
//
//                         textFieldStyle={style.editTextWidth}
//                         onChange={this.handleChangeMaxDate}
//                         autoOk={this.state.autoOk}
//                         floatingLabelText="Max Date"
//                         defaultDate={this.state.maxDate}
//                         disableYearSelection={this.state.disableYearSelection}
//                     />
//                 </div>
//                 <br/>
//                 { this.state.wideFilter ? null :
//                 <div style={style.centerDiv1}>
//
//                     <FlatButton style={{marginRight: 2}} backgroundColor="#dddddd" onTouchTap={this.showChooseCustDialog} label="Custumer: All"  />
//
//                     <FlatButton backgroundColor="#dddddd" onTouchTap={this.showChooseCustDialog} label="Employee: All"  />
//                 </div> }
//
//                 <div style={style.centerBtn11}>
//                 <RaisedButton label="filter" secondary={true} onTouchTap={this.onFilter} />
//                 </div>
//
//                 <Divider/>
//                 <div style={style.centerDiv}>
//                 <a style={style.title}> Quick Access </a>
//
//                     { this.state.wideFilter ? null :
//                         <FlatButton onTouchTap={this.showChooseCustDialog} label="All"  />}
//                     </div>
//                 <br />
//                 <div style={style.centerDiv}>
//                     <FlatButton label="Today"/>
//                     <FlatButton label="Week"/>
//                     <FlatButton label="Month"/>
//                 </div>
//                 <SearchAndChooseDialog personList={this.state.personList} personType={this.state.personType} handleListClick={(obj) => {this.handleListClick(obj);}} open={this.state.chooseDailog} close={this.closeChooseCustDialog} />
//             </div>
//         );
//     }
// }

/* <RaisedButton label="" secondary={true} style={style.btn} />*/

/* return (
 <div>
 <DatePicker
 floatingLabelText="Ranged Date Picker"
 autoOk={this.state.autoOk}
 minDate={this.state.minDate}
 maxDate={this.state.maxDate}
 disableYearSelection={this.state.disableYearSelection}
 />
 <div style={optionsStyle}>
 <DatePicker
 onChange={this.handleChangeMinDate}
 autoOk={this.state.autoOk}
 floatingLabelText="Min Date"
 defaultDate={this.state.minDate}
 disableYearSelection={this.state.disableYearSelection}
 />
 <DatePicker
 onChange={this.handleChangeMaxDate}
 autoOk={this.state.autoOk}
 floatingLabelText="Max Date"
 defaultDate={this.state.maxDate}
 disableYearSelection={this.state.disableYearSelection}
 />
 <Toggle
 name="autoOk"
 value="autoOk"
 label="Auto Ok"
 toggled={this.state.autoOk}
 onToggle={this.handleToggle}
 />
 <Toggle
 name="disableYearSelection"
 value="disableYearSelection"
 label="Disable Year Selection"
 toggled={this.state.disableYearSelection}
 onToggle={this.handleToggle}
 />
 </div>
 </div>
 );*/



var FilterBar = React.createClass({


    getInitialState: function() {

        const minDate = new Date();
        const maxDate = new Date();
        minDate.setFullYear(minDate.getFullYear() );
        minDate.setHours(0, 0, 0, 0);
        maxDate.setFullYear(maxDate.getFullYear() + 1);
        maxDate.setHours(0, 0, 0, 0);

        //
        // var personList=[];
        // var urlEnd = this.props.personType == 'Employee' ? 'showEmployees': 'showCustomers';
        // console.log("url: ",urlEnd);
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
        return {
            open: false,
            minDate: Math.floor(minDate.getTime() / 1000),
            maxDate: Math.floor(maxDate.getTime() / 1000),
            autoOk: true,
            disableYearSelection: false,
            value: 1,
            chooseDailog : false,
            personType: 'none',
            customer: null,
            employee: null,
            wideFilter : !this.props.wideFilter,
            personList: [],
            isSACD: false,
            employeesLabel: window.strings.filterBar.selectEmployeeButtonAll,
            customersLabel: window.strings.filterBar.selectCustomerButtonAll,
            employeesList: null,
            customersList: null,
            handleListClick: null,
            QuickAccessEmployee: null,
            QuickAccessEmployeeLabel: window.strings.filterBar.allButtonShortcut
        };
    },
    handleChangeMinDate: function(event, date)  {
        this.setState({
            minDate: Math.floor(date.getTime() / 1000)
        });
    },
    handleChangeMaxDate: function(event, date)  {
        // console.log('handleChangeMaxDate', event);
        console.log('handleChangeMaxDate' ,date);
        this.setState({
            maxDate:  Math.floor(date.getTime() / 1000)
        });
    },
    handleToggle: function(event, toggled)  {
        this.setState({
            [event.target.name]: toggled,
        });
    },
    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render

        if (nextProps.open !== this.state.open) {
            this.setState({ open: nextProps.open });
            nextProps.open ? document.addEventListener('click', this.handleClick, false) : document.removeEventListener('click', this.handleClick, false);

        }
    },
    componentDidMount: function() {
        // document.addEventListener('click', this.handleClick, false);
        // muiTheme.appBar.color = cyan500;
        // muiTheme.appBar.textColor = white;
    },
    componentDidUnmount: function() {
        document.removeEventListener('click', this.handleClick, false);
        // muiTheme.appBar.color = cyan500;
        // muiTheme.appBar.textColor = white;
    },
    handleListClick: function(obj) {

        // console.log(personType);
        console.log(obj);
        if(obj.personType == "employee")
            this.setState(
                {
                    employee: obj.obj,
                    employeesLabel: window.strings.filterBar.selectEmployeeButton + obj.obj.name
                }
            );
        else this.setState(
            {
                customer: obj.obj,
                customersLabel: window.strings.filterBar.selectCustomerButton + obj.obj.name
            }
        );

    },
    handleClick: function (event) {
        // const domNode = ReactDOM.findDOMNode(this);
        // if (event.target.parents('div#qwer').length) {
        //     alert('Your clicked element is having div#hello as parent');
        // }
        // if (!event.target.className == 'qwer') {
        //     alert("outside");
        // }
        // alert(!this.state.chooseDailog);
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        // alert();

        const domNode = document.getElementById("FilterBar");
        // const datePicker = document.getElementsByClassName("datePicker");
        // const domNode = ReactDOM.findDOMNode(this).child.getAttribute("pppppoo");


        if (!this.state.isDatePicker) {
            if ((!domNode || !domNode.contains(event.target))) {
                event.stopPropagation();
                event.preventDefault();
                // this.setState({
                //     visible : false
                // });
                // console.log("click outside");
                if(this.state.open && !this.state.isSACD){
                    // muiTheme.appBar.color = cyan500;
                    // muiTheme.appBar.textColor = white;
                    // this.setState({ open: false });
                    this.props.hideFilterBar();
                    // this.props.updateState();
                }

            }
        }
        // else
        // {
        //     console.log("skdfhgsdkfjksdfjskjfhkjfhksjfhskj");
        // }
    },
    loadPersonList: function()  {

        var personList=[];
        var urlEnd = this.state.personType == 'employee' ? 'showEmployees': 'showCustomers';
        console.log("url: ",urlEnd);

        if((this.state.personType == 'employee' && this.state.employeesList == null) || (this.state.personType == 'customer' && this.state.customersList == null)) {
            var _this = this;
            this.props.superagent
                .get(SiteURL.get + urlEnd)
                .end(function (err, res) {
                    if (err) {
                        console.log('error: ', err);
                        console.log('response: ', res);

                        _this.setState({personList: []});
                        _this.setState({allPersonsList: []});

                        alert('Error!');
                        // reject(err);
                    } else {
                        console.log('response: ', res);
                        var data = JSON.parse(res.text);
                        _this.setState({
                            personList: data,
                            allPersonsList: data
                        });

                        if(_this.state.personType == 'customer'){
                            _this.setState({
                                customersList: data

                            });
                        } else {
                            _this.setState({
                                employeesList: data

                            });
                        }

                    }
                });
        }
        else {
            if(this.state.personType == 'customer'){
                this.setState({
                    personList: this.state.customersList,
                    allPersonsList: this.state.customersList
                });
            } else {
                this.setState({
                    personList: this.state.employeesList,
                    allPersonsList: this.state.employeesList
                });
            }
        }
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
    },
    setQuickAccessEmployee: function(obj)  {
        this.setState(
            {
                QuickAccessEmployee: obj.obj,
                QuickAccessEmployeeLabel: window.strings.filterBar.selectEmployeeButton + obj.obj.name
            }
        );
    },
    showChooseCustDialog: function(personType, isQuickAccess)  {
        var state;
        if(isQuickAccess)
            state = {
                handleListClick : this.setQuickAccessEmployee,
                personType: personType,
                personList: []
            };
        else state = {
            handleListClick : this.handleListClick,
            personType: personType,
            personList: []
        };

        this.setState(state,() => {
            this.loadPersonList();
            this.setState({
                chooseDailog: true,
                isSACD:true
            });
        });



        // console.log("kjwhesfaikajsdhkfdjaskd");
        // console.log(event.namespace);


    },
    closeChooseCustDialog: function(event) {


        this.setState({
            chooseDailog: false,
        });
        setTimeout(()=>{  this.setState({
            isSACD: false,
        }); }, 1000);

    },
    onFilter: function(event, toggled)  {
        this.props.updateState();
        var obj = {
            minDate:  this.state.minDate,
            maxDate:  this.state.maxDate,
            customerId: this.state.customer !== null ? this.state.customer.id : null,
            employeeId:  this.state.employee !== null ? this.state.employee.id : null
        };
        var _this = this;
        this.props.superagent
            .post(SiteURL.get + 'filterAppointments')
            .send(obj)
            .end(function (err, res) {
                if (err) {
                    console.log('error: ', err);
                    console.log('response: ', res);

                    alert('Error!');
                    // reject(err);
                } else {
                    console.log('onFilter: ', res);
                    var data = JSON.parse(res.text);
                    _this.props.loadList(data);

                }
            });
        
    },
    getAppointments: function(day)  {
        this.props.updateState();
        var obj = {
            sortingBy: day,
            employeeId: this.state.QuickAccessEmployee !== null ? this.state.QuickAccessEmployee.id : null
        };
        var _this = this;
        this.props.superagent
            .post(SiteURL.get + 'getQuickAccessAppointments')
            .send(obj)
            .end(function (err, res) {
                if (err) {
                    console.log('error: ', err);
                    console.log('response: ', res);

                    alert('Error!');
                    // reject(err);
                } else {
                    console.log('response: ', res);
                    var data = JSON.parse(res.text);
                    _this.props.loadList(data);

                }
            });

    },
    componentWillMount : function () {


    },
    loadTodaysAppointments : function () {
        this.getAppointments('day');

    },
    loadThisWeeksAppointments : function () {
        this.getAppointments('week');

    },
    loadThisMonthsAppointments : function () {
        this.getAppointments('month');

    },
    render: function() {

        const DefaultAppBar = () => (
            <AppBar
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle : styles.appbarTitleOpenedDrawer}
                style={{position:'fixed', boxShadow: 'none'}}
                iconStyleLeft={styles.appbarIconStyle}
                iconStyleRight={styles.appbarIconStyle}
                title={window.strings.filterBar.title}
                iconElementLeft={<IconButton onTouchTap={(e) => {e.preventDefault(); this.setState({open: false})}}><CloseIcon /></IconButton>}
                onLeftIconButtonTouchTap={null}
                //         iconElementRight={         //         <IconMenu         //         iconButtonElement={         //   <IconButton><MoreVertIcon /></IconButton>         // }         //         targetOrigin={{horizontal: 'right', vertical: 'top'}}         //         anchorOrigin={{horizontal: 'right', vertical: 'top'}}         //     >         //         <MenuItem primaryText="Sign out" />         //         <MenuItem primaryText="Settings" />         //         <MenuItem primaryText="About" />         //     </IconMenu>         //         }
            />
        );

        return(
                <div id="FilterBar" style={this.state.open ? style.filterBarOpened :style.filterBarClosed}>

            <div>
                <Card zDepth={1} style={{backgroundColor: muiTheme.palette.primary1Color, padding: 0, position: "fixed", zIndex: 1100, right: 0, left: 0}}>
                    <DefaultAppBar/>
                    <div style={styles.toppad}></div>
                    <div >
                        <div style={style.containerWithoutPadding}>

                            <div>
                                <div style={style.centerDiv}>
                                    <a style={{paddingTop: '7px', margin: '0 12px', fontSize: '20px', color: muiTheme.palette.alternateTextColor}}> {window.strings.filterBar.titleQuickAccess} </a>

                                    { this.state.wideFilter ? null :
                                        <FlatButton onTouchTap={(e)=>{e.preventDefault(); this.showChooseCustDialog('employee',true)}} labelStyle={{color: muiTheme.palette.alternateTextColor}} label={this.state.QuickAccessEmployeeLabel}  />}
                                </div>
                                <div style={style.centerDiv}>
                                    <FlatButton label={window.strings.filterBar.todayButtonShortcut} onTouchTap={(e)=>{e.preventDefault(); this.loadTodaysAppointments()}}/>
                                    <FlatButton label={window.strings.filterBar.weekButtonShortcut} onTouchTap={(e)=>{e.preventDefault(); this.loadThisWeeksAppointments()}}/>
                                    <FlatButton label={window.strings.filterBar.monthButtonShortcut} onTouchTap={(e)=>{e.preventDefault(); this.loadThisMonthsAppointments()}}/>
                                </div>
                                <Divider/>
                                <br />


                                { this.state.wideFilter ?
                                    <div style={style.centerDiv1}>
                                        <TextField style={style.editTextWidth1} hintText="Search"/> <SearchIcon color='#5bc0de' style={style.searchIcon}/>
                                        <br/>
                                    </div>: null }
                                <div style={style.datePicker}>

                                    <DatePicker
                                        onFocus={(e)=>{this.setState({isDatePicker:true})}}
                                        onDismiss={(e)=>setTimeout(()=>{  this.setState({isDatePicker:false})}, 500)}
                                        textFieldStyle={style.editTextWidth}
                                        onChange={this.handleChangeMinDate}
                                        autoOk={this.state.autoOk}
                                        floatingLabelText={window.strings.filterBar.hintDateMin}
                                        defaultDate={new Date(this.state.minDate  * 1000)}
                                        disableYearSelection={this.state.disableYearSelection}
                                    />
                                    <DatePicker
                                        onFocus={(e)=>{this.setState({isDatePicker:true})}}
                                        onDismiss={(e)=>setTimeout(()=>{  this.setState({isDatePicker:false})}, 500)}
                                        textFieldStyle={style.editTextWidth}
                                        onChange={this.handleChangeMaxDate}
                                        autoOk={this.state.autoOk}
                                        floatingLabelText={window.strings.filterBar.hintDateMax}
                                        defaultDate={new Date(this.state.maxDate * 1000)}
                                        disableYearSelection={this.state.disableYearSelection}
                                    />
                                </div>
                                <br/>
                                { this.state.wideFilter ? null :
                                    <div style={style.datePicker}>

                                        <FlatButton style={{marginRight: 2}}  onTouchTap={(e)=>{e.preventDefault(); this.showChooseCustDialog('customer')}} label={this.state.customersLabel} />

                                        <FlatButton onTouchTap={(e)=>{e.preventDefault(); this.showChooseCustDialog('employee')}} label={this.state.employeesLabel}  />
                                    </div> }

                                <div style={style.centerBtn11}>
                                    <FloatingActionButton onTouchTap={(e)=>{e.preventDefault(); this.onFilter()}} backgroundColor={muiTheme.palette.accent1Color}>
                                        <SearchIcon/>
                                    </FloatingActionButton>
                                </div>
                                <SearchAndChooseDialog isAll={true} personList={this.state.personList} personType={this.state.personType} handleListClick={(obj) => {this.state.handleListClick(obj);}} open={this.state.chooseDailog} close={this.closeChooseCustDialog} />
                            </div>

                        </div>
                    </div>
                </Card>

            </div>
           </div>
        )
    }
});


export default FilterBar;


// <RaisedButton label={window.strings.filterBar.filterButton} secondary={true} onTouchTap={(e)=>{e.preventDefault(); this.onFilter()}} />
