import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import ClearButton from 'material-ui/svg-icons/content/clear';
import TextField from 'material-ui/TextField';
import AccessTime from 'material-ui/svg-icons/device/access-time';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import AddIcon from 'material-ui/svg-icons/content/add';
import SearchIcon from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';
// import {red500, yellow500, blue500, blue300, lightBlue700} from 'material-ui/styles/colors';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import SiteURL from './site-url';
import SearchAndChooseDialog from './SearchAndChooseDialog';

import DropDownMenu from 'material-ui/DropDownMenu';

import {
    blue300,
    blue500,
    indigo900,
    orange200,
    deepOrange300,
    pink400,
    purple500,
} from 'material-ui/styles/colors';





const styles = {
    container: {
        paddingTop: 17,
    },
    listitem: {
        background:'cadetblue'
    },
    listitemP1: {
        color:'cadetblue',
    },
    listitemP2: {
        color:'teal',
        paddingBottom: '7px'
    },
    dialog: {
        width:'90%',
        maxWidth: '400',
    },
    title: {
        margin: 0,
        paddingBottom: '17px',
        color: 'rgba(0, 0, 0, 0.870588)',
        fontSize: 22,
        fontWeight: 400,
        borderBottom: 'none',
    },
    centerDiv:{
        width: '100%',
        float: 'none',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between'
    },
    spaceAround:{
        display: 'flex',
        justifyContent: 'space-around'
    },
    editTextWidth:{
        width: '100%%',
    },
    addCustBtn:{
        margin: '5px 3px 0px',
    },
    addCustBtnWrapper:{
        height: '56px',
        width: '56px',
        overflow: 'hidden',
        borderRadius: '50%',
        backgroundColor: '#e9e9e9',
        cursor: 'pointer',
        border: '10px',
        boxSizing: 'border-box',
        display: 'inline-block',
        // marginTop: '16px',
        padding: '0px',
        outline: 'none'
    },
    chip: {
        margin: 4,
        display: 'flex'
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    centerTitle:{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 12
    },
    NCTitle:{
        fontSize: '20px',
        color: 'cadetblue'
    }
};


const tilesData = [
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
        time: '9:45',
    },
    {
        time: '10:00',
    },
    {
        time: '10:15',
    },
    {
        time: '10:30',
    },
    {
        time: '10:45',
    },
    {
        time: '11:00',
    },
    {
        time: '11:15',
    },
    {
        time: '11:30',
    },
    {
        time: '11:45',
    },
    {
        time: '12:00',
    },

];

const fruit1 = [
    {name:"apple", phone:"2323"},
    {name:"bpple", phone:"23245"},
    {name:"cpple", phone:"224523"},
    {name:"dpple", phone:"687654"},
    {name:"epple", phone:"14578"},
    {name:"fpple", phone:"22345233"},
    {name:"gpple", phone:"25764"},
    {name:"hpple", phone:"25734"},
];
const fruit = [
    'Apple', 'Apricot', 'Avocado',
    'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
    'Boysenberry', 'Blood Orange',
    'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
    'Coconut', 'Cranberry', 'Clementine',
    'Damson', 'Date', 'Dragonfruit', 'Durian',
    'Elderberry',
    'Feijoa', 'Fig',
    'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
    'Honeydew', 'Huckleberry',
    'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
    'Kiwi fruit', 'Kumquat',
    'Lemon', 'Lime', 'Loquat', 'Lychee',
    'Nectarine',
    'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
    'Olive', 'Orange',
    'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
    'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
    'Quince',
    'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
    'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
    'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
    'Ugli fruit',
    'Watermelon',
];


var Child = React.createClass({
    getInitialState: function () {
        return {
            childVisible: true ,
            open: false,
            date: "dsfg",
            btnDsbl: true,
            isAddCustBtnPressed: false
        };

    },
    render: function() {
        return (
           <div>
                    {this.props.availableAppointments.map((data,index) => (


                                <List dir="ltr">
                                    {data.obj.map((tile, index) => (
                                        console.log("tile:  " + tile),
                                            <ListItem
                                                key={index}
                                                primaryText={tile.time}
                                                leftIcon={<AccessTime />}
                                                onTouchTap={(e) =>{e.preventDefault(); this.handleListClick(this.state.isEmployeeSelected ? tile.arr[0] : tile.arr[_.random(tile.arr.length - 1)] )}}
                                                rightAvatar={!this.state.isEmployeeSelected && tile.arr.length > 1 ?
                                     <div>
                                     {tile.arr.map((appointment) => (

                                     <Avatar
                                             color={blue300}
                                             backgroundColor={indigo900}
                                             onTouchTap={(e)=>{e.preventDefault(); e.stopPropagation(); this.handleListClick(appointment)}}
                                             style={{marginLeft: 4}}
                                     >
                                     {appointment.employeeId}
                                     </Avatar>

                                     ))}
                                     </div>:null}
                                            >

                                            </ListItem>
                                    ))}
                                </List>

                    ))}
</div>
        );
    },
    onClick: function() {
        // this.setState({childVisible: !this.state.childVisible});
        alert("click");
    },
    handleListClick: function(appointment) {
        console.log("timdfsdvsdfe:", appointment);
        alert('appointment');
        // this.setState({background : 'cadetblue'});
        this.props.handleListClick(appointment);

    },
    getDateHeader: function(date) {
        return [
            <div style={styles.title}>
                <i style={{fontSize: 19}}>{moment.unix(date.date).format('dddd, MMMM Do YYYY')}</i>
            </div>
        ];
    }

});

var AddCustForm = React.createClass({
    getInitialState: function () {
        return {
            childVisible: true ,
            open: false,
            date: "dsfg",
            btnDsbl: true,
            isAddCustBtnPressed: false
        };

    },
    componentDidMount: function() {
        this.ensureVisible();
    },

    componentDidUpdate: function() {
        this.ensureVisible();
    },

    ensureVisible: function() {
        if (this.props.active) {
            this.props.scrollIntoView(React.findDOMNode(this));

        }
    },
    render: function() {
        return (
            <div>
                <br/>
                
                <Card zDepth={1}>
                    <div style={{height: 8}}></div>
                    <div style={styles.centerTitle}>
                        <a style={styles.NCTitle}>New Customer</a>
                    </div>
                    <div style={styles.spaceAround}>
                        <TextField
                            hintText="Name"
                            style={{width: 120}}
                            textFieldStyle={styles.editTextWidth}
                            value={this.props.custName}
                            onChange={this.props._handleCustNameTextFieldChange}
                        />
                        <TextField
                            hintText="Phone"
                            style={{width: 120}}
                            textFieldStyle={styles.editTextWidth}
                            value={this.props.custPhone}
                            onChange={this.props._handleCustPhoneTextFieldChange}
                        /></div>

                </Card>
            </div>
        );
    },
    onClick: function() {
        // this.setState({childVisible: !this.state.childVisible});
        alert("click");
    },
    onListClick: function(time) {
        console.log(this);
        // this.setState({background : 'cadetblue'});
        this.props.handleListClick(time);

    },

});
var superagent;
var AvailableHours = React.createClass({
    getInitialState: function () {
        superagent = this.props.superagent;
        return {
            childVisible: true ,
            childAvailable: true,
            open: false,
            date: 'sds',
            btnDsbl: true,
            selectedHour:"",
            formTitle:"",
            comment: null,
            custPhone: "",
            custName: "",
            chooseCustomerDailog: false,
            selectedPerson: null,
            personList: [],
            customer: null,
            tilesDate: [],
            empId: this.props.employeeId,
            isEmployeeSelected: false,
            date1: null
        };
    },

    handleRequestDelete() {
    alert('You clicked the delete button.');
    },
    handleAddbtn() {

        if(this.state.isAddCustBtnPressed)
        {

            this.setState({isAddCustBtnPressed: false});
        }
        else{
        this.setState({
            isAddCustBtnPressed: true,
            selectedPerson: null
        });
            this.ensureVisible();
        }
    },
    onUnFocus: function(){
        alert('update');
    },
    componentWillMount: function(){

        var _this = this;
        superagent
            .get(SiteURL.get + "showCustomers")
            .set('Accept', 'application/json')
            .end(function(err, res){
                if (err) {
                    console.log('error: ' , err);
                    console.log('response: ' , res);
                    _this.setState({personList : []});

                    alert('Error!');
                    // reject(err);
                } else {
                    console.log('response: ' , res.text);
                    var data = JSON.parse(res.text);
                    _this.setState({personList : data});
                    // resolve(res.text);
                }
            });

  
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
    render: function() {

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={this.state.btnDsbl}
                onTouchTap={(e)=>{e.preventDefault(); this.setAppointment();}}
            />
        ];

        const selectedHourLabel = [
            <a style={{fontSize: 18}}>{this.state.selectedHour}</a>
        ];
        const title = [
            <div style={styles.title}>
                <p style={styles.listitemP1}>{this.state.formTitle}</p>
                <p style={styles.listitemP2}><i>{this.state.date}</i></p>
                {this.state.childVisible ? null :
                <div  style={styles.chip}>

                    <Chip
                    backgroundColor="#e9e9e9"
                    onRequestDelete={this.handleBackButton}
                    style={{direction: 'ltr'}}
                    >

                    <a style={{color: blue500}}>{selectedHourLabel}</a>
                    </Chip>
                    <Avatar
                    color={blue300}
                    backgroundColor={indigo900}
                    size={30}
                    style={{padding: 2, margin: '0px 4px'}}
                >
                        {this.state.empId}
                </Avatar>
              </div>
                }
            </div>
        ];

        return(


            <div>

                <Dialog
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    autoScrollBodyContent={true}
                    contentStyle={styles.dialog}
                >


                    {
                        this.state.childVisible
                            ? <Child handleListClick={this.handleListClick} availableAppointments={this.state.tilesDate}/>
                            :  <div>


                      {title}

                    <div style={styles.centerDiv}>
                        <div>
                            <FlatButton style={{marginTop:12}}  style={{color: 'rgb(95, 158, 160)'}} onTouchTap={this.showChooseCustDialog} label={this.state.selectedPerson !== null ? "customer: " + this.state.selectedPerson :"Choose Customer"}/>
                        </div>

                        <div style={styles.addCustBtnWrapper}>
                        <IconButton onTouchTap={(e) => {e.preventDefault(); this.handleAddbtn();}} style={styles.addCustBtn}><AddIcon color={blue500}/></IconButton></div>

                    </div>
                            {this.state.isAddCustBtnPressed ?

                             <AddCustForm custName={this.state.custName} custPhone={this.state.custPhone} _handleCustNameTextFieldChange={this._handleCustNameTextFieldChange} _handleCustPhoneTextFieldChange={this._handleCustPhoneTextFieldChange}/>
                                :   null    }
                        <TextField
                        hintText="Comment"
                        value={this.state.comment}
                        onChange={this._handleCommentTextFieldChange}
                        floatingLabelText="Write a comment.."
                        multiLine={true}
                        onBlur={this._handleCommentBlurTextFieldChange}
                        rows={2}
                        />
                        </div>
                    }
                </Dialog>
                <SearchAndChooseDialog  isAll={false} personList={this.state.personList} personType={"customer"} handleListClick={(obj) => {this.handleCustomerSelected(obj);}} open={this.state.chooseCustomerDailog} close={this.closeChooseCustDialog} />
            </div>
        )
    },

    onClick: function() {
        // if(this.state.childAvailable)this.setState({childVisible: !this.state.childVisible});
    },
    handleCustomerSelected: function(obj) {
        console.log("Customer selected:",obj);
        this.setState({
            selectedPerson: obj.obj.name,
            customer: obj.obj
        });

        // this.refs.availableAppointmentsCard.handleEmpSelected(obj);
    },
    createCustomer: function(name, phone) {

        var customer =
        {
            name: name,
            phone: phone,
            address: "-",
            isActive: false,
            email: null,
            password: "-"

        };
        return new Promise(function (resolve, reject) {
            superagent
                .post(SiteURL.get + "setNewCustomer")
                .send({
                    Customer: customer
                })
                .set('Accept', 'application/json')
                .end(function(err, res){
                    if (err) {
                        console.log('error: ' , err);
                        console.log('response: ' , res);

                        alert('Error!');
                        reject(err);
                    } else {
                        console.log('response: ' , res);

                        alert(res.text);
                        resolve(res.text)
                    }
                });
        });
      
    },
    setAppointment: function() {

        if((this.state.custName == "" || this.state.custPhone == "") && this.state.selectedPerson == null)
        {
            alert("Please choose customer or create a new one");
            return;
        }

        this.setState({open: false});
        if(this.state.childAvailable)this.setState({childVisible: false});
        this.setState({btnDsbl : true});

        var _this = this;

        // this.state.isAddCustBtnPressed ? (custName = this.state.custName, custPhone = this.state.custPhone)  : null;
        // var bla = this.state.isAddCustBtnPressed ? "\n" + "Name: " + this.state.custName + "\n" + "Phone: " + this.state.custPhone  : "";
        this.state.comment !== "" ? this.state.appointmentObj.comment = this.state.comment : "";
        if(this.state.isAddCustBtnPressed){

            this.createCustomer(this.state.custName,this.state.custPhone).then(function (customerId) {
                alert('jhghjhgjhguj');
                _this.state.appointmentObj.customerId = customerId;
                go();
            })
        }
        else {
            this.state.appointmentObj.customerId = this.state.customer.id;
            go();
        }
        // alert("SET APPOINTMENT! \n"+
        //     comment + bla);


        function go(){
            console.log("SET APPOINTMENT: " , _this.state.appointmentObj);
        superagent
            .post(SiteURL.get + "setAppointment")
            .send({
                Appointment: _this.state.appointmentObj
            })
            .set({'Accept': 'application/json','Content-Type': 'application/json'})
            .end(function(err, res){
                if (err) {
                    console.log('error: ' , err);
                    console.log('response: ' , res);

                    alert('Error!');
                } else {
                    console.log('response: ' , res);
                    alert("new appointment created!");
                }
            });
        }
    }, 
    handleClose: function() {
        this.setState({open: false});
        if(this.state.childAvailable)this.setState({childVisible: false});
        this.setState({btnDsbl : true});
    },
    _handleCommentTextFieldChange: function(e) {
        // if(e.hasFocus())alert();
        console.log(e);
        this.setState({
            comment: e.target.value
        });
    },
    _handleCommentBlurTextFieldChange: function(e) {
        this.forceUpdate();
        // if(e.hasFocus())
        // alert();
        // console.log(e);
        // this.setState({
        //     comment: e.target.value
        // });
    },
    _handleCustNameTextFieldChange: function(e) {
        this.setState({
            custName: e.target.value
        });
    },
    _handleCustPhoneTextFieldChange: function(e) {
        this.setState({
            custPhone: e.target.value
        });
    },
    handleOpen: function() {
        this.setState({open: true});
        this.setState({btnDsbl : true});
    },
    handleBackButton: function() {
        if(this.state.childAvailable) {
            this.setState({childVisible: true});
            this.setState({formTitle: "Available Hours"});
            this.setState({btnDsbl: true});
            this.setState({isAddCustBtnPressed: false});
        }
        else
        {
            this.setState({open: false});
        }
    },
    handleListClick: function(appointment) {
        console.log('time',appointment.appointmentTime);
        this.setState({
            appointmentObj: appointment,
            childVisible: false,
            formTitle: "Confirm Appointment",
            btnDsbl : false,
            date: moment.unix(appointment.appointmentDate).format('dddd, MMMM Do YYYY'),
            selectedHour : moment.unix(appointment.appointmentTime).format('HH:mm')});
    },
    show: function(appointment,date) {
    // if (_this.props.onShow && !_this.state.open) {
    //     _this.props.onShow();
    // }

        console.log("Appointment: ", appointment);
        if(appointment.appointmentTime !== null)
        {
            this.setState({
                childVisible: false,
                formTitle: "Confirm Appointment",
                childAvailable: false,
                btnDsbl : false,
                selectedHour : moment.unix(appointment.appointmentTime).format('HH:mm'),
                empId: appointment.employeeId
            },this.openDialogWindow(appointment));
            // this.setState({selectedHour : date.format("hh:mm")});

            this.openDialogWindow(appointment);
        }
        else
        {
            var _this = this;
            this.setState({
                formTitle: "Available Hours",
                date1: date,
                childVisible: true,
                childAvailable: true},function(){
            this.loadAvailableAppointments().then(
                _this.openDialogWindow(appointment)
            );
            });
            // appointment.appointmentDate = moment(date).format('dddd, MMMM Do YYYY');
        }

    // alert(isHour);


    },
    openDialogWindow: function(appointment) {
        if (this.state.empId !== undefined) {
        // alert(this.state.empId);
        this.setState({
            isEmployeeSelected: true
        });
    }
        this.setState({
            date: moment.unix(appointment.appointmentDate).format('dddd, MMMM Do YYYY'),
            appointmentObj: appointment,
            // date: moment(date).format('dddd, MMMM Do YYYY')
        });
        this.setState({
            open: true
        });
    },
    loadAvailableAppointments: function() {

        // alert('loadAvailableAppointments');
        // alert(this.state.date);
        console.log('employeeId: ' + this.state.empId);
        console.log( 'date: ' + this.state.date);
        console.log( this.state.isEmployeeSelected ? JSON.stringify({employeeId: this.state.empId, date: this.state.date1}) : JSON.stringify({date: this.state.date1}));
        var _this = this;
        // var isEmpId = typeof(empId)!== 'undefined';
        var url =  this.state.isEmployeeSelected ? "allEmployeeAvailableHoursInDay" : "getAllEmployeesAvailableHoursInDay";
        // console.log(empId);
        console.log("URL: " + url);
        // alert(this.state.isEmployeeSelected);
        return new Promise(function (resolve, reject) {
        _this.props.superagent
            .post(SiteURL.get + url)
            .set({'Accept': 'application/json', 'Content-Type': 'application/json'})
            .send(_this.state.isEmployeeSelected ? JSON.stringify({employeeId: _this.state.empId, date: _this.state.date1, duration: 1800}) : JSON.stringify({date: _this.state.date1, duration: 1800}))
            .end(function(err, res){
                if (err) {
                    console.log('error: ' , err);
                    console.log('response: ' , res);

                    alert('Error!');
                    // reject(err);
                } else {
                    console.log('qweqwresponse: ' , res.text);
                    var data = JSON.parse(res.text);
                    var newData = [];
                    var promises;
                    var qwe;
                    // data.map((tile) => {
                        console.log(new Array(data[0]));
                        // qwe = tile;
                    // });
                    // if(!this.state.isEmployeeSelected){
                    promises =  data.map((tile) => {

                        // console.log(tile);
                        if (tile.length !== 0){
                            console.log('qweqwresponse: ' , tile);
                            console.log('qweqwresponse: ' , _this.state.isEmployeeSelected);
                            // console.log(tile);
                            // console.log(tile[Object.keys(tile)[0]][0].appointmentDate);
                            if(!_this.state.isEmployeeSelected){
                                var map = [];
                                // if(!isEmpId)
                                Object.keys(tile).forEach(key => {
                                    map.push({time:key ,arr:tile[key]});
                                });
                                // else map = "dfvdvsfvsfvsdfvsdf";

                                Promise.all(map).then(function (mapResults) {
                                    console.log("MAP:" + mapResults);
                                    newData.push(
                                        {
                                            date: tile[Object.keys(tile)[0]][0].appointmentDate,
                                            obj: mapResults
                                        }
                                    );
                                });
                            }
                            else{
                                if(newData.length !== 0 && newData[newData.length-1].date == tile.appointmentDate){
                                    newData[newData.length-1].obj.push({time: moment.unix(tile.appointmentTime).format('HH:mm'), arr: [tile]});
                                }
                                else{

                                    newData.push(
                                        {
                                            date: tile.appointmentDate ,
                                            obj:  [{time: moment.unix(tile.appointmentTime).format('HH:mm'), arr: [tile]}]
                                        }
                                    );
                                }
                            }
                        }
                    });
                    // }
                    // else {
                    //     promises = "dsfvdfvsdfv";
                    //
                    //     newData.push(
                    //         {
                    //             date: data[0].appointmentDate ,
                    //             obj:  [{time: data[0].appointmentTime, arr: [data]}]
                    //         }
                    //     );
                    // }
                    Promise.all(promises).then(function(results) {
                        var obj = newData[newData.length - 1].obj;
                        var time = new Date(obj[obj.length - 1].arr[0].appointmentTime * 1000);
                        // _this.setState({date : new Date(obj[obj.length - 1].arr[0].appointmentDate * 1000).setHours(time.getHours(), time.getMinutes(), 0) / 1000});
                        console.log(obj[obj.length - 1].arr[0].appointmentTime);
                        console.log(new Date(obj[obj.length - 1].arr[0].appointmentDate * 1000).setHours(time.getHours(), time.getMinutes(), 0) / 1000);

                        var mixedArr;
                        // if(true){
                        if(_this.state.tilesDate.length !== 0){
                            var oldData = _this.state.tilesDate;
                            oldData.concat(newData);
                            // Array.prototype.push.apply(oldData,newData);
                            mixedArr = oldData;
                        }
                        else mixedArr = newData;
                        console.log('mixedArr',mixedArr);
                        _this.setState({tilesDate : mixedArr});
                    });
                    // resolve(res.text);
                }
            });
            });

    }
});

var _this;
function takeThat(that)
{
    // console.log("takethat");
    // console.log(_this);
    _this = that;

    _this.show = function(date) {
        // if (_this.props.onShow && !_this.state.open) {
        //     _this.props.onShow();
        // }

        // alert("szkdjcnzskdcnkzjsdnkjcn"+date);
        _this.setState({
            date: moment(date).format('dddd, MMMM Do YYYY')
        });
        _this.setState({
            open: true
        });

    }
}

export default AvailableHours;


// <AutoComplete
//     style={{width: 166}}
//     textFieldStyle={styles.editTextWidth}
//     floatingLabelText="Customer's name"
//     filter={AutoComplete.fuzzyFilter}
//     openOnFocus={true}
//     dataSource={fruit1}
// />
// <SearchIcon color='#5bc0de' style={{marginBottom: -9}}/>