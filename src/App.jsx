import React from 'react';
import ReactDOM from 'react-dom';
import {Navigator} from 'react-onsenui';
import Snackbar from 'material-ui/Snackbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



import MainPage from './src/app/app';


var lastTimeBackPress=0;
var timePeriodToExit=2000;
// var navigator1;
var qwer = true;
var App = React.createClass( {
  getInitialState(){
    return {
        isSnackBarOpen: true,
        snackBarMessage: ''
    };
  },
  componentDidMount(){
 var _this =this;
    document.addEventListener("deviceready", (e) => {
        alert(JSON.stringify(e));

        window.open = cordova.InAppBrowser.open;
// alert('deviceready');
      // var ref = window.open('http://apache.org', '_blank', 'location=yes');
      // ref.addEventListener('loadstart', function() { alert(event.url); });

      document.addEventListener("backbutton", (e) =>  {
        alert(JSON.stringify(e));
        e.event.preventDefault();
        e.event.stopImmediatePropagation();
        e.event.stopPropagation();
        console.log(JSON.stringify(e));
          if(new Date().getTime() - lastTimeBackPress < timePeriodToExit){
              // navigator.app.exitApp();
          }else{
              _this.setState({isSnackBarOpen: true});
              lastTimeBackPress = new Date().getTime();
          }

        // if(false)
        // {
        //   window.history.back();
        // }
        // else {
        //   _this.setState({isSnackBarOpen: true})
        // }

        // return false;
        //invoking non-existing function in order to get an exception nothing else seems to work otherwise it is always closing app
        //   console.log(undefinedVar);
        // throw new Error('Whoops!');
      }, false );
    }, false);
  },
  renderPage(route, navigator) {
    const props = route.props || {};
    props.navigator = navigator;

    // navigator1 = navigator;

    return React.createElement(route.component, props);
  },

  render() {
    return (
        <MuiThemeProvider>
          <div>
      <Navigator initialRoute={{component: MainPage}} renderPage={this.renderPage} />
      <Snackbar
      open={this.state.isSnackBarOpen}
      message={this.state.snackBarMessage}
      autoHideDuration={4000}
     /></div></MuiThemeProvider>
    );
  }
});

export default App;

var ons = require('onsenui');
// var Ons = require('react-onsenui');

// document.addEventListener("deviceready", onDeviceReady, false);
// function onDeviceReady() {
//   document.addEventListener("backbutton", function (e) {
//     e.preventDefault();
//
//     if(false)
//     {
//       window.history.back();
//     }
//     else {
//       qwer = true;
//     }
//      // var qwe = confirm('Do you really want to go back?');
//           // .then((response) => {
//           //   if (response === 1) {
//       // if(qwe){
//       //         navigator.app.exitApp();
//       //         return;
//       //       }
//       //
//       //     }
//     // );
//     // }
//
//     //invoking non-existing function in order to get an exception nothing else seems to work otherwise it is always closing app
//     Navigator.notification.confirm();
//   }, false );
// }
//
// function onConfirmExit(button) {
//   if(button==2){ //If User select a No, then return back;
//     return;
//   }else{
//     ons.app.exitApp(); // If user select a Yes, quit from the app.
//   }
// }
//
