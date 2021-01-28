import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import AccessTime from 'material-ui/svg-icons/device/access-time';
import moment from 'moment';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import SiteURL from './site-url';
import Avatar from 'material-ui/Avatar';
import {
    blue300,
    indigo900,
    orange200,
    deepOrange300,
    pink400,
    purple500,
} from 'material-ui/styles/colors';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
    container: {
        paddingTop: 17,
        width:'700',
        maxWidth:'95%',
        float: 'none',
        margin: '0 auto',
      },
    containerTop: {
        paddingTop: 17,
        width:'700',
        maxWidth:'95%',
        float: 'none',
        margin: '0 auto',
        color: 'darkcyan'
      },
    cardheader: {
        backgroundColor: 'rgb(232, 232, 232)',
        padding: 10 ,
        fontWeight:400,
      },
    title: {
        color: 'darkcyan',
    },
    customWidth: {
        maxWidth: 700,
    },
    inScroll: {
        position: 'fixed',
        width: '100%',
        zIndex: '10',
        color: 'darkcyan'
    },
    fixedblock: {
        height: '80px',
    },
};

// const tilesData = [
//     {
//
//         time: '9:00',
//     },
//     {
//         time: '9:15',
//     },
//     {
//         time: '9:30',
//     },
//     {
//
//         time: '9:00',
//     },
//     {
//         time: '9:15',
//     },
//     {
//         time: '9:30',
//     },
// ];

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
            }
        ]
    }
];


var AvailableAppointmentsCard = React.createClass({
    getInitialState: function () {
        return {
            open: false,
            tilesDate: [],
            isEmployeeSelected: false,
            date: new Date()
            };

    },
//
// <ListItem primaryText="9:00"
//           leftIcon={<AccessTime />}
//           onTouchTap={() =>this.handleListClick(moment())} />
// <ListItem primaryText="9:15"
// leftIcon={<AccessTime />}
// onTouchTap={() =>this.handleListClick(moment())} />
    render: function() {
        const title = [
            <div style={styles.title}>
                <i style={{fontSize: 19}}>Wednesday, </i><i>5/10/2016</i>
            </div>
        ];
        
        return(
            <div>
                <div>
            {this.state.tilesDate.map((data,index) => (
            <div  style={styles.container}>
                <Card key={index} zDepth={1}>
                    <CardHeader
                        style={styles.cardheader}
                        textStyle={{paddingRight: 0}}
                        title={this.getDateHeader(data)}
                        actAsExpander={false}
                        showExpandableButton={false}
                    />

                    <List dir="ltr">
                        {data.obj.map((tile, index) => (
                            <ListItem
                                key={index}
                                primaryText={tile.time}
                                leftIcon={<AccessTime />}
                                onTouchTap={(e) =>{e.preventDefault(); this.handleListClick(this.state.isEmployeeSelected ? tile.arr[0] : tile.arr[tile.arr.length - 1] )}}
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

                </Card>
            </div>
            ))}
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: 15}}>
                    <CircularProgress size={80} thickness={5} />
                    </div>
                </div>
            </div>
        )
    },
    componentWillMount: function () {

        var _this = this;
        var time = 0;
        var t;
        var timeout;

        var scrollFunc = function(ev) {
             clearTimeout(timeout);
            timeout = setTimeout(function() {
            if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
                // you're at the bottom of the page
                window.onscroll = null;
                console.log("Bottom of page");
                _this.loadAvailableAppointments();
                time = 3000;
                // clearTimeout(t);
                t = setTimeout(function() {
                    time = 0;
                    window.onscroll = scrollFunc;
                },time);
            }
                }, time);

        };
        window.onscroll = scrollFunc;
//TODO seems like loadAvailableAppointments being called twice when scrolling down
//         var date = new Date();
//         // alert(Math.floor(date.getTime() / 1000));
//         this.setState({
//             date: Math.floor(date.getTime() / 1000)
//         }, ()=>this.loadAvailableAppointments());
        this.loadAvailableAppointments();
    },
    componentWillUnmount: function () {

        var _this = this;
        window.onscroll = null;


    },
    handleEmpSelected: function(obj) {
        var date = Math.floor(new Date().getTime() / 1000);
        if(obj.name == "All") {
            this.setState({
                tilesDate: [],
                isEmployeeSelected: false,
                empId: null,
                date: date
            },this.loadAvailableAppointments);

        }
        else {
           this.setState({
               tilesDate: [],
               isEmployeeSelected: true,
               empId: obj.id,
               date: date
           },this.loadAvailableAppointments);
        }
    },
    loadAvailableAppointments: function() {
// alert('date: ' + Math.floor(this.state.date.getTime() / 1000)) ;
        console.log('employeeId: ' + this.state.empId);
        console.log( 'date: ' + this.state.date);
        console.log( this.state.isEmployeeSelected ? JSON.stringify({employeeId: this.state.empId, date: this.state.date}) : JSON.stringify({date: this.state.date}));
        var _this = this;
        // var isEmpId = typeof(empId)!== 'undefined';
        var url =  this.state.isEmployeeSelected ? "getFirst20AvailableAppointments" : "getFirst20AvailableAppointmentsFromAllEmployees";
        // console.log(empId);
        console.log("URL: " + url);
        // alert(this.state.isEmployeeSelected);
        // alert(this.state.date);

        this.props.superagent
            .post(SiteURL.get + url)
            .set({'Accept': 'application/json', 'Content-Type': 'application/json'})
            .send(_this.state.isEmployeeSelected ? JSON.stringify({employeeId: _this.state.empId, date: Math.floor(_this.state.date.getTime() / 1000), serviceTypeIds: this.props.serviceTypeIds}) : JSON.stringify({date: Math.floor(_this.state.date.getTime() / 1000), serviceTypeIds: this.props.serviceTypeIds}))
            // .send(_this.state.isEmployeeSelected ? JSON.stringify({employeeId: _this.state.empId, date: _this.state.date}) : JSON.stringify({date: _this.state.date}))
            .end(function(err, res){
                if (err) {
                    console.log('error: ' , err);
                    console.log('response: ' , res);

                    alert('Error!');
                    // reject(err);
                } else {
                    console.log('res.text: ' , res.text);
                    var data = JSON.parse(res.text);
                    var newData = [];
                    var promises;
                    // if(!this.state.isEmployeeSelected){
                    promises =  data.map((tile) => {

                        console.log('tile: ' , tile);
                        console.log('state date', _this.state.date);
                        if (tile.length !== 0){
                            console.log(tile);
                            // console.log(tile[Object.keys(tile)[0]][0].appointmentDate);
                            console.log('isEmployeeSelected: ' , _this.state.isEmployeeSelected);

                            if(!_this.state.isEmployeeSelected){
                                var map = [];
                                // if(!isEmpId)
                                Object.keys(tile).forEach(key => {
                                    map.push({time:key ,arr:tile[key]});
                                });
                                // else map = "dfvdvsfvsfvsdfvsdf";

                                Promise.all(map).then(function (mapResults) {
                                    // console.log("MAP:" ,mapResults);
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
                        var date = new Date(obj[obj.length - 1].arr[0].appointmentDate * 1000);
                        date.setHours(time.getHours(), time.getMinutes(), 0);

                        _this.setState({date :  date});
                       // var date = new Date();date.setHours(19);date.setMinutes(45);
                       //  _this.setState({date : Math.floor(date.getTime() / 1000)});
                        console.log(obj[obj.length - 1].arr[0].appointmentTime);
                        console.log(new Date(obj[obj.length - 1].arr[0].appointmentDate * 1000).setHours(time.getHours(), time.getMinutes(), 0) / 1000);

                        var mixedArr;
                        // if(true){
                        if(_this.state.tilesDate.length !== 0){

                            console.log('new:' , newData);
                            console.log('old:' , _this.state.tilesDate);
                            var oldData = _this.state.tilesDate;
                            mixedArr = oldData.concat(newData);
                            // Array.prototype.push.apply(oldData,newData);
                            // mixedArr = oldData;
                            console.log('mixed:' , mixedArr);
                        }
                        else mixedArr = newData;
                        console.log("_this.state.tilesDate.length:" ,_this.state.tilesDate.length);
                        _this.setState({tilesDate : mixedArr}, () => _this.forceUpdate());
                        console.log("MAP:" ,mixedArr);
                        console.log("_this.state.tilesDate.length:" ,_this.state.tilesDate.length);

                    });
                    // resolve(res.text);
                }
            });

        // fetch(SiteURL.get + url,
        //     {
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         method: "POST",
        //         body: this.state.isEmployeeSelected ? JSON.stringify({employeeId: this.state.empId, date: this.state.date}) : JSON.stringify({date: this.state.date})
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
        //                 console.log("DATA: ",data);
        //                 var newData = [];
        //                 var promises;
        //                 // if(!this.state.isEmployeeSelected){
        //                  promises =  data.map((tile) => {
        //
        //                     console.log(tile);
        //                     if (tile.length !== 0){
        //                         console.log(tile);
        //                         // console.log(tile[Object.keys(tile)[0]][0].appointmentDate);
        //                         if(!this.state.isEmployeeSelected){
        //                         var map = [];
        //                         // if(!isEmpId)
        //                             Object.keys(tile).forEach(key => {
        //                             map.push({time:key ,arr:tile[key]});
        //                             });
        //                         // else map = "dfvdvsfvsfvsdfvsdf";
        //
        //                         Promise.all(map).then(function (mapResults) {
        //                             console.log("MAP:" + mapResults);
        //                             newData.push(
        //                                 {
        //                                     date: tile[Object.keys(tile)[0]][0].appointmentDate,
        //                                     obj: mapResults
        //                                 }
        //                             );
        //                         });
        //                         }
        //                         else{
        //                             if(newData.length !== 0 && newData[newData.length-1].date == tile.appointmentDate){
        //                                 newData[newData.length-1].obj.push({time: tile.appointmentTime, arr: [tile]});
        //                             }
        //                             else{
        //                             newData.push(
        //                                 {
        //                                     date: tile.appointmentDate ,
        //                                     obj:  [{time: tile.appointmentTime, arr: [tile]}]
        //                                 }
        //                             );
        //                             }
        //                         }
        //                     }
        //                 });
        //                 // }
        //                 // else {
        //                 //     promises = "dsfvdfvsdfv";
        //                 //
        //                 //     newData.push(
        //                 //         {
        //                 //             date: data[0].appointmentDate ,
        //                 //             obj:  [{time: data[0].appointmentTime, arr: [data]}]
        //                 //         }
        //                 //     );
        //                 // }
        //                 Promise.all(promises).then(function(results) {
        //                     console.log("blablablablablablabla",newData);
        //                     var obj = newData[newData.length - 1].obj;
        //                     var time = new Date(obj[obj.length - 1].arr[0].appointmentTime * 1000);
        //                     _this.setState({date : new Date(obj[obj.length - 1].arr[0].appointmentDate * 1000).setHours(time.getHours(), time.getMinutes(), 0) / 1000});
        //                     console.log(obj[obj.length - 1].arr[0].appointmentTime);
        //                     console.log(new Date(obj[obj.length - 1].arr[0].appointmentDate * 1000).setHours(time.getHours(), time.getMinutes(), 0) / 1000);
        //
        //                     var mixedArr;
        //                     // if(true){
        //                     if(_this.state.tilesDate.length !== 0){
        //                         var oldData = _this.state.tilesDate;
        //                         oldData.concat(newData);
        //                         // Array.prototype.push.apply(oldData,newData);
        //                         mixedArr = oldData;
        //                     }
        //                     else mixedArr = newData;
        //                     _this.setState({tilesDate : mixedArr});
        //                 });
        //
        //
        //
        //                 // tableData = data;
        //             });
        //         }
        //     )
        //     .catch(function(err) {
        //         console.log('Fetch Error :-S', err);
        //     });
    },
    handleListClick: function(appointment) {
        // this.setState({childVisible: !this.state.childVisible});
        // this.setState({btnDsbl : false});
        // this.setState({selectedHour : time});
        console.log(appointment);
        this.props.handleCardClick(appointment);
    },
    handleNestedListToggle: function(item) {
        this.setState({
            open: item.state.open,
        });
    },
    getDateHeader: function(date) {
        return [
            <div style={styles.title}>
                <i style={{fontSize: 19}}>{moment.unix(date.date).format('dddd, MMMM Do YYYY')}</i>
            </div>
        ];
    },


    
});


export default AvailableAppointmentsCard;