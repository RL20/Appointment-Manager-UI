import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import SearchAndChooseDialog from '../SearchAndChooseDialog';
import AvailableAppointmentsCard from '../AvailableAppointmentsCard';
import SetAppForm from '../setAppForm';
import SiteURL from '../site-url';
import FloatingButton from '../FloatingButton';
import {styles,  muiTheme} from '../Styles';
import {superagent} from '../SuperAgent';





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
            selectedPerson: window.strings.setAppointmentPage.selectEmployeeButtonAll,
            isServiceSelected: false
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
            chooseDailog: false
        });

    },
    showAvailableAppointments: function(serviceTypeIds) {


        this.setState({
            isServiceSelected: true,
            serviceTypeIds: serviceTypeIds
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
                {this.state.isServiceSelected ? <div>
                    <DefaultAppBar/>
                    <div style={this.props.isDrawerDocked ? window.strings.css.pushContent : null}>
                        <div style={styles.toppad}></div>
                        <div   style={this.props.isDrawerDocked ? window.strings.css.drawerOpenedFixedContainer : styles.fixedContainer}>

                            <div
                                style={styles.containerTop}>

                                <div style={styles.h1center}>
                                    <h2 style={styles.h1}>{window.strings.setAppointmentPage.h2Title}</h2>
                                    <br/>
                                </div>
                                <div style={styles.h1center}>
                                    <FlatButton primary={true}  onTouchTap={this.showChooseCustDialog} label={this.state.selectedPerson}/>
                                    <br/>
                                </div>
                            </div>
                           </div>

                        <div style={styles.fixedblock}></div>
                        <AvailableAppointmentsCard superagent={superagent} ref="availableAppointmentsCard" serviceTypeIds={this.state.serviceTypeIds} handleCardClick={this.handleCardClick} />
                        <FloatingButton circleIcon={false} handleAAPCircleClick={this.handleAAPCircleClick}/>
                        <SetAppForm superagent={superagent} ref="setAppForm"/>
                        <SearchAndChooseDialog isAll={true} personList={this.state.personList} personType={'employee'} handleListClick={(obj) => { this.handleListClick(obj);}} open={this.state.chooseDailog} close={this.closeChooseCustDialog} />
                    </div></div> : <TableExampleComplex showAvailableAppointments={(serviceTypeIds) => { this.showAvailableAppointments(serviceTypeIds);}} isDrawerDocked={this.props.isDrawerDocked}/>}
            </MuiThemeProvider>
        );
    }
});

import Event from 'material-ui/svg-icons/action/event';
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';

import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';

const sttyles = {
    chip: {
        margin: 1,
        direction: 'ltr'
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap'
    }
};

function handleRequestDelete() {

    // alert('You clicked the delete button.');
}

function handleTouchTap() {
    alert('You clicked the Chip.');
}


import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

const styless = {
    propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
    propToggleHeader: {
        margin: '20px auto 10px',
    },
};

const tableData = [
    {
        name: 'תספורת נשים',
        status: 'Employed',
    },
    {
        name: 'תספורת גברים',
        status: 'Unemployed',
    },
    {
        name: 'פן',
        status: 'Employed',
    },
    {
        name: 'צבע',
        status: 'Employed',
    },
    {
        name: 'החלקה',
        status: 'Employed',
    },
    {
        name: 'מניקור',
        status: 'Employed',
    },
    {
        name: 'פדיקור',
        status: 'Employed',
    },
];

/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */

import EmailButton from 'material-ui/svg-icons/communication/email';
import AddIcon from 'material-ui/svg-icons/content/add';
import Divider from 'material-ui/Divider';



var TableExampleComplex = React.createClass({
    getInitialState: function(){
        // var qwe = (e)=>{alert()};
        // history.pushState("", "page 2", "serviceType");
        return {
            value: 1,
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: false,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: false,
            showCheckboxes: false,
            height: '280px',
            isServiceTypeSelected: false,
            selectedServiceTypeList: [],
            serviceTypesArr: []
        };
    },
    componentWillMount: function(){
        var _this = this;
        // var urlEnd = this.props.personType == 'Employee' ? 'showEmployees': 'showCustomers';
        // console.log("url: ",urlEnd);


        superagent
            .get(SiteURL.get + "getAllServiceTypes")
            .set('Accept', 'application/json')
            .end(function(err, res){
                if (err) {
                    console.log('error: ' , err);
                    console.log('response: ' , res);
                    _this.setState({serviceTypesArr : []});
                    //alert('Error!');
                    // reject(err);
                } else {
                    console.log('response: ' , res.text);
                    var data = JSON.parse(res.text);
                    _this.setState({serviceTypesArr : data});
                    // resolve(res.text);
                }
            });
    },
    handleToggle : function (event, toggled) {
        this.setState({
            [event.target.name]: toggled
        });
    },
    removeService : function (index) {
            //remove ti from selectedServiceTypeList
        var serviceTypeList = this.state.selectedServiceTypeList;
        serviceTypeList.splice(index, 1);
        // serviceTypeList.push(serviceType);
        this.setState({
            isServiceTypeSelected: true,
            selectedServiceTypeList: serviceTypeList
        },this.getOverlappingServiceTypes());

    },
    addService : function (serviceType, index) {

        var serviceTypeList = this.state.selectedServiceTypeList;
        tableData.splice(index, 1);
        serviceTypeList.push(serviceType);
        this.setState({
            isServiceTypeSelected: true,
            selectedServiceTypeList: serviceTypeList
        },this.getOverlappingServiceTypes());

    },

    getOverlappingServiceTypes: function() {

        var _this = this;
        // var urlEnd = this.props.personType == 'Employee' ? 'showEmployees': 'showCustomers';
        // console.log("url: ",urlEnd);
        var serviceTypeIds = _.map(this.state.selectedServiceTypeList, 'id');

        console.log("serviceTypeIds: ", serviceTypeIds);
        console.log("serviceTypeIds: ", serviceTypeIds.includes("3"));
        var selectedServiceTypeList = this.state.selectedServiceTypeList;
        if(selectedServiceTypeList.length !== 0)
        {
            superagent
            .post(SiteURL.get + "getAllOverlappingServiceTypes")
            .send({"serviceTypeIds": serviceTypeIds})
            .set('Accept', 'application/json')
            .end(function(err, res){
                if (err) {
                    console.log('error: ' , err);
                    console.log('response: ' , res);
                    _this.setState({serviceTypesArr : []});
                    //alert('Error!');
                    // reject(err);
                } else {
                    var data = JSON.parse(res.text);
                    console.log('data: ' , data);
                    // data = data.filter(val => !(val.id === serviceTypeIds.includes("3")));
                    _this.setState({serviceTypesArr : data.filter(val => serviceTypeIds.includes("3"))});
                    // resolve(res.text);
                }
            }); }
        else{
            superagent
                .get(SiteURL.get + "getAllServiceTypes")
                .set('Accept', 'application/json')
                .end(function(err, res){
                    if (err) {
                        console.log('error: ' , err);
                        console.log('response: ' , res);
                        _this.setState({serviceTypesArr : []});
                        //alert('Error!');
                        // reject(err);
                    } else {
                        console.log('response: ' , res.text);
                        var data = JSON.parse(res.text);
                        _this.setState({serviceTypesArr : data});
                        // resolve(res.text);
                    }
                });
        }

    },
    handleChange: function(event) {
        this.setState({height: event.target.value});
    },
    showAvailableAppointments: function() {
        // history.pushState({'obj':'obj'}, "page 2", "bar.html");

        // pulls out the id's from selectedServiceTypeList and creates a new array
        var serviceTypeIds = _.map(this.state.selectedServiceTypeList, 'id');

        this.props.showAvailableAppointments(serviceTypeIds);
    },
    render: function() {
        const DefaultAppBar = () => (
            <AppBar
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle : styles.appbarTitleOpenedDrawer}                 style={styles.appbar}                 iconStyleLeft={styles.appbarIconStyle}                 iconStyleRight={styles.appbarIconStyle}
                title={'בחר סוג שירות'}
                // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={this.props.openDrawer}
                //         iconElementRight={         //         <IconMenu         //         iconButtonElement={         //   <IconButton><MoreVertIcon /></IconButton>         // }         //         targetOrigin={{horizontal: 'right', vertical: 'top'}}         //         anchorOrigin={{horizontal: 'right', vertical: 'top'}}         //     >         //         <MenuItem primaryText="Sign out" />         //         <MenuItem primaryText="Settings" />         //         <MenuItem primaryText="About" />         //     </IconMenu>         //         }
            />
        );
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <DefaultAppBar/>
                    <div style={this.props.isDrawerDocked ? window.strings.css.pushContent :null}>
                        <div style={styles.toppad}></div>
                        <ListItem
                            style={{backgroundColor: muiTheme.palette.primary1Color, padding: 0, height: 160, overflowY: 'scroll', display: 'flex', justifyContent: 'center'}}
                            disabled={true}
                        >
                            <List>
                                <ListItem disabled={true} style={{color: 'white', fontWeight: '600', fontSize: 'medium'}}
                                primaryText={' לחיצה על כפתור ה + תוסיף שירות, לחיצה על השורה תעביר לדף הבא'}
                                >

                                </ListItem>
                                {this.state.isServiceTypeSelected ?
                                    <ListItem
                                    style={{display: 'block', padding: 2}}
                                    disabled={true}
                                >
                                    <div style={sttyles.wrapper}>
                                        {this.state.selectedServiceTypeList.map( (row, index) => (
                                        <Chip
                                            key={index}
                                            onRequestDelete={(e)=>{e.preventDefault(); this.removeService(index)}}
                                            style={sttyles.chip}
                                            labelStyle={{fontSize: '10px'}}
                                        >
                                            {row.serviceName}
                                        </Chip>
                                        ))}
                                    </div></ListItem> : null}</List>
                        </ListItem>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                            <div style={{width: '700px'}}>
            <div>
                <Table
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}

                >
                    <TableHeader
                        displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}
                        enableSelectAll={this.state.enableSelectAll}
                    >
                        <div style={{marginTop: '-45px'}}>

                        </div>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                    >
                        {this.state.serviceTypesArr.map( (row, index) => (
                           <div> <ListItem
                                key={index}
                                disabled={true}
                                style={{padding: '0px 0px 0px 72px'}}
                                leftIcon={<IconButton onTouchTap={(e)=>{e.preventDefault(); e.stopPropagation(); this.addService(row, index)}}
                                iconStyle={{ width: 36,
                                                 height: 36,color: 'rgba(160, 160, 160, 0.87)'}}
                                style={{width: 48,
                                        height: 48,
                                        padding: 6,
                                        margin: 0,
                                        display: 'inline-flex'}}><AddIcon /></IconButton>}
                                    >

                                     <ListItem
                                         primaryText={row.serviceName}
                                         onTouchTap={this.showAvailableAppointments}
                                     >

                                     </ListItem>
                            </ListItem>
                            <Divider inset={true} />
                           </div>
                        ))}
                    </TableBody>
                    <TableFooter
                        adjustForCheckbox={this.state.showCheckboxes}
                    >

                        <TableRow>
                            <TableRowColumn colSpan="3" style={{textAlign: 'center'}}/>

                        </TableRow>
                    </TableFooter>
                </Table>


            </div>
                            </div>
                        </div>
                        <FloatingButton isSubmitBtn={true} circleIcon={true} handleAAPCircleClick={this.showAvailableAppointments}/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
});


export default SetAppointmentPage;