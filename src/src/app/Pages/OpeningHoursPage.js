import React from 'react';
import Divider from 'material-ui/Divider';
import {MenuItem} from 'material-ui/Menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import {List, ListItem} from 'material-ui/List';
import {white} from 'material-ui/styles/colors';
import TimePicker from 'material-ui/TimePicker';
import SiteURL from '../site-url';
import moment from 'moment';
import FloatingButton from '../FloatingButton';



import {styles, muiTheme} from '../Styles';
import {superagent} from '../SuperAgent';






var dayObjTemplate = {day:null,fromHour1:null,toHour1:null,fromHour2:null,toHour2:null};
var dayObj = {day:null,fromHour1:null,toHour1:null,fromHour2:null,toHour2:null};
var openingHours = [];
var t;
var OpeningHoursPage = React.createClass({
    getInitialState: function() {

        return {
            isEdit: false,
            data: [],
            isOpeningHoursSet: false,
            isNew: false
        };
    },
    componentWillMount: function() {
        if(this.props.isEdit !== undefined)
        {
            this.setState({
                isEdit: this.props.isEdit,
                isNew: true
            })
        }
        else {
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
        }
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
    createOpeningHours: function() {
        alert();
        this.props.next();
    },
    setOpeningHours: function() {
        // console.log(openingHours);
        if(this.state.isNew){
            this.createOpeningHours();
        }
        else if(this.state.isOpeningHoursSet) {


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
            this.setState({ isEdit: !this.state.isEdit });
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
            this.setState({isOpeningHoursSet : true});
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
                 titleStyle={this.props.isDrawerDocked ? styles.appbarTitle : styles.appbarTitleOpenedDrawer}                 style={styles.appbar}                 iconStyleLeft={styles.appbarIconStyle}                 iconStyleRight={styles.appbarIconStyle}
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
                    <div style={this.props.isDrawerDocked ? window.strings.css.pushContent :null}>
                        <div style={styles.toppad}></div><br/>
                        <div style={styles.h1center}>
                            <h1 style={styles.h1}>{window.strings.openingHoursPage.h2Title}</h1>
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

                                                {this.state.isEdit ?
                                                    <div  style={{display: 'flex', justifyContent: 'center', marginTop: '-19px'}}>
                                                        <TimePicker
                                                            format="24hr"
                                                            dialogBodyStyle={{direction:'ltr'}}
                                                            hintText={window.strings.openingHoursPage.from}
                                                            value={null}
                                                            autoOk={true}
                                                            textFieldStyle={{width: 71, marginRight: '18px'}}
                                                            onChange={(x, event) => this.setOpeningHoursDay(x, event, tile.day, "fromHour1")}
                                                        />
                                                        <TimePicker
                                                            format="24hr"
                                                            dialogBodyStyle={{direction:'ltr'}}
                                                            hintText={window.strings.openingHoursPage.to}
                                                            value={null}
                                                            autoOk={true}
                                                            textFieldStyle={{width: 71}}
                                                            onChange={(x, event) => this.setOpeningHoursDay(x, event, tile.day, "toHour1")}
                                                        /></div> : <div><i>{tile.fromHour1 + (!tile.toHour1 ? "":"-" + tile.toHour1)}</i> {!tile.fromHour2 ? null:<i>{tile.fromHour2 + "-" + tile.toHour2}</i>} </div>
                                                }
                                            </ListItem>
                                            <Divider/>
                                        </div>
                                ))}
                            </List>
                            { this.state.isEdit ? <FloatingButton isSubmitBtn={true} circleIcon={true} handleAAPCircleClick={this.setOpeningHours}/> : null}
                        </div>

                    </div></div>
            </MuiThemeProvider>
        );
    }
});

export default OpeningHoursPage;





// <TimePicker
//     hintText={window.strings.openingHoursPage.from}
//     value={new Date(null,null,null,tile.fromHour1.split(':')[0],tile.fromHour1.split(':')[1])}
//     autoOk={true}
//     textFieldStyle={{width: 71, marginRight: '18px'}}
//     onChange={(x, event) => this.setOpeningHoursDay(x, event, tile.day, "fromHour1")}
// />
// <TimePicker
// hintText={window.strings.openingHoursPage.to}
// value={new Date(null,null,null,tile.toHour1.split(':')[0],tile.toHour1.split(':')[1])}
// autoOk={true}
// textFieldStyle={{width: 71}}
// onChange={(x, event) => this.setOpeningHoursDay(x, event, tile.day, "toHour1")}
// />

