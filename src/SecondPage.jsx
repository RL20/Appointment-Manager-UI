import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button, BackButton} from 'react-onsenui';

// import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import {black, white, cyan500,grey900,blue500, red500, greenA200,orange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';



// injectTapEventPlugin();

var textColor = white;
var themeColor = cyan500;
let muiTheme = getMuiTheme({
  palette: {
    accentColor: themeColor,
  },
  appBar: {
    textColor: textColor,
    color: themeColor
  },
  tabs:{
    backgroundColor: themeColor,
    textColor: textColor
  }
});

var SecondPage = React.createClass( {
  pushPage: function() {
    this.props.navigator.pushPage({component: AppBarExampleIcon});
  },

  popPage: function() {
    this.props.navigator.popPage();
  },

  renderToolbar: function() {
    return (
      <Toolbar>
        <div className="left"><BackButton>Back</BackButton></div>
        <div className="center">Another page</div>
      </Toolbar>
    );
  },

  render: function() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <p style={{textAlign: 'center'}}>
          <Button onClick={this.pushPage}>Push page</Button>
          <Button onClick={this.popPage}>Pop page</Button>
        </p>
      </Page>
    );
  }
});

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarExampleIcon = React.createClass(
    {
  render:function() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
          <AppBar
              title="Title"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <Page renderToolbar={this.renderToolbar}>
            <RaisedButton style={{marginLeft: 20}} primary={true} onTouchTap={()=>alert()} label={'asdas'} />

            <p style={{textAlign: 'center'}}>
              <Button onClick={window.openDrawer}>Ya Tahat!</Button>
            </p>
          </Page></div>
        </MuiThemeProvider>
    );
}});

export default SecondPage;