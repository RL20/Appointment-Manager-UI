import React from 'react';
import Divider from 'material-ui/Divider';
import Navigation from 'material-ui/svg-icons/maps/navigation';
import LocationIcon from 'material-ui/svg-icons/communication/location-on';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import FlatButton from 'material-ui/FlatButton';
import Navigate from '../navigate';
import {List, ListItem} from 'material-ui/List';
import {black, white, cyan500,grey900,blue500, red500, greenA200,orange500} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import SiteURL from '../site-url';
import {styles, style, themeColor, textColor, icons, muiTheme, muiThemeWhite, setTheme} from '../Styles';
import {superagent, setAjaxAuthHeader} from '../SuperAgent';
import MuiGeoSuggest from 'material-ui-geosuggest';
import FloatingButton from '../FloatingButton';



var NavigatePage = React.createClass({
    handleNotificationsToggle()
    {
        ////alert(this.state.notificationsToggle);

        if(this.state.notificationsToggle == "Enabled") {
            this.setState({notificationsToggle: "Disabled"});
        }
        else if(this.state.notificationsToggle == "Disabled") {
            this.setState({notificationsToggle: "Enabled"});
        }


    },
    handleNightModeToggle()
    {
        ////alert(this.state.notificationsToggle);

        if(this.state.nightModeToggle == "On") {
            this.setState({nightModeToggle: "Off"});
        }
        else if(this.state.nightModeToggle == "Off") {
            this.setState({nightModeToggle: "On"});
        }


    },
    getInitialState: function() {

        return {
            data: this.props.data,
            notificationsToggle: "Enabled",
            nightModeToggle: "Off",
            isCoordinatesChecked: false,
            latitudeFieldValue: '',
            longitudeFieldValue: '',
            lat: null,
            lng: null,
            editNav: false
        };
    },
    componentWillMount: function()
    {
        var _this = this;
        superagent
            .get(SiteURL.get + "showCoordinates")
            .set('Accept', 'application/json')
            .end(function(err, res){
                if (err) {
                    console.log('error: ' , err);
                    console.log('response: ' , res);
                    //alert('Error!');
                    // reject(err);
                } else {
                    console.log('response: ' , res.text);
                    var data = JSON.parse(res.text);
                    // resolve(res.text);
                    _this.setState({lat: data.latitude, lng: data.longitude, address: data.address});
                    _this.refs.Navigate.reRender(data.latitude, data.longitude);
                }
            });
        // var co = this.refs.Navigate.getCoordinates();
        // var string = "https://www.google.com/maps/dir/Current+Location/" + co.lat + "," + co.lng;
        // return string;

    },
    onPlacesChanged: function(e) {
        // const places = this._searchBox.getPlaces();

        ////alert(e.geometry.location);
        this.refs.Navigate.handlePlacesChanged(e);
    },
    findByCoordinates: function() {
        // const places = this._searchBox.getPlaces();
        // this.state.longitudeFieldValue;
        // this.state.latitudeFieldValue;


        const places =  {
            geometry:{
                location: {
                    lat: parseFloat(this.state.latitudeFieldValue),
                    lng: parseFloat(this.state.longitudeFieldValue)
                }
            },
            name: `1232dcd`
        };
        // const places = [e];

        // Add a marker for each place returned from search bar
        // const markers = places.map(place => ({
        //     position: place.geometry.location,
        //     key: place.name,
        // }));
        console.log("findByCoordinates", );

        this.refs.Navigate.handlePlacesChanged(places);
    },
    findByGeoLocation: function() {
        this.refs.Navigate.findByGeoLocation();
    },
    getCoordinates: function() {
        var co = this.refs.Navigate.getCoordinates();
        // var string = "https://www.google.com/maps/dir/Current+Location/" + co.lat + "," + co.lng;
        // return string;
        this.setState({lat: co.lat, lng: co.lng});
        ////alert(JSON.stringify(this.refs.Navigate.getCoordinates()));
    },
    _handleLatitudeFieldChange: function(e) {
        this.setState({
            latitudeFieldValue: e.target.value
        });
    },
    _handleLongitudeFieldChange: function(e) {
        this.setState({
            longitudeFieldValue: e.target.value
        });
    },
    render: function() {
        const NavigateAppBar = () => (
            <AppBar
                 titleStyle={this.props.isDrawerDocked ? styles.appbarTitle : styles.appbarTitleOpenedDrawer}                 style={styles.appbar}                 iconStyleLeft={styles.appbarIconStyle}                 iconStyleRight={styles.appbarIconStyle}
                title={window.strings.navigatePage.appbar.title}
                // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={this.props.openDrawer}
                iconElementRight={
                <IconButton onTouchTap={ (e) => {/*e.preventDefault();*/ this.setState({editNav: !this.state.editNav})}}><EditIcon color={white}/></IconButton>
            }
            />
        );
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <NavigateAppBar/>
                    <div style={this.props.isDrawerDocked ? window.strings.css.pushContent :null}>
                        <div style={styles.toppad}></div>
                        {this.state.editNav ? <div style={{maxWidth: 700, float: 'none', margin: '0 auto'}}>

                            <ListItem
                                style={{height: 50}}
                                disabled={true}
                            >


                                <MuiGeoSuggest
                                    style={{maxWidth:'65%'}}
                                    hintText={window.strings.navigatePage.muiGeoSuggest.hintText}
                                    floatingLabelText={window.strings.navigatePage.muiGeoSuggest.title}
                                    floatingLabelFixed={true}
                                    onPlaceChange={this.onPlacesChanged}
                                />

                            </ListItem>
                            <ListItem
                                style={{height: 0}}
                                disabled={true}
                            >
                                <Checkbox
                                    label={window.strings.navigatePage.checkboxLabel}
                                    style={styles.checkbox}
                                    onCheck={() => this.setState({isCoordinatesChecked: !this.state.isCoordinatesChecked})}
                                /></ListItem>

                            {this.state.isCoordinatesChecked ?
                                <ListItem
                                    style={{height: 40,display: 'flex', justifyContent: 'flex-start'}}
                                    disabled={true}
                                >
                                    <TextField
                                        style={{width: '150px', maxWidth:'65%'}}
                                        hintText={window.strings.navigatePage.longitudeHintText}
                                        floatingLabelText={window.strings.navigatePage.longitude}
                                        floatingLabelFixed={true}
                                        value={this.state.longitudeFieldValue}
                                        onChange={this._handleLongitudeFieldChange}

                                    />
                                    <TextField
                                        style={{ marginLeft: 20, width: '150px', maxWidth:'65%'}}
                                        hintText={window.strings.navigatePage.latitudeHintText}
                                        floatingLabelText={window.strings.navigatePage.latitude}
                                        floatingLabelFixed={true}
                                        value={this.state.latitudeFieldValue}
                                        onChange={this._handleLatitudeFieldChange}
                                    /></ListItem>:null}
                            <ListItem
                                style={{height: 30}}
                                disabled={true}
                            >
                                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                    <RaisedButton style={{marginLeft: 20}} primary={true} onTouchTap={this.findByCoordinates} label={window.strings.navigatePage.findButton} />
                                </div>
                            </ListItem>
                            <div style={{padding: '0 10px'}}>
                                <Divider/>
                            </div>
                            <ListItem
                                style={{height: 30}}
                                disabled={true}
                            >
                                <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                                    <RaisedButton
                                        target="_blank"
                                        label={window.strings.navigatePage.findMyLocationButton}
                                        secondary={true}
                                        icon={<LocationIcon/>}
                                        onTouchTap={this.findByGeoLocation}

                                    /></div></ListItem>

                        </div> : null}
                        <div style={styles.container111}>
                            <Navigate ref="Navigate" />
                            {this.state.editNav ? null:
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <FlatButton
                                        target="_blank"
                                        label={window.strings.navigatePage.navigateButton}
                                        style={{marginTop: 3}}
                                        secondary={true}
                                        icon={<Navigation/>}
                                        href={"https://www.google.com/maps/dir/?api=1&destination=" + this.state.lng + "," + this.state.lat}

                                    />
                                    <i style={{fontSize: 17, marginTop: 12, color: muiTheme.palette.textColor}}>{this.state.address}</i>
                                </div>}
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        {this.state.editNav ?  <FloatingButton isSubmitBtn={true} circleIcon={true} handleAAPCircleClick={this.handleAAPCircleClick}/> : null}
                    </div></div>
            </MuiThemeProvider>
        );
    }
});
export default NavigatePage;