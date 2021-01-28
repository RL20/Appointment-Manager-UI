import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {Toolbar, Page, Button} from 'react-onsenui';
import RaisedButton from 'material-ui/RaisedButton';
import {black, white, cyan500,grey900,blue500, red500, greenA200,orange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SecondPage from './SecondPage'

injectTapEventPlugin();

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

export default class MainPage extends React.Component {
  pushPage() {
    this.props.navigator.pushPage({component: SecondPage});
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className="center">Navigator</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <Page renderToolbar={this.renderToolbar}>
        <RaisedButton style={{marginLeft: 20}} primary={true} onTouchTap={()=>alert()} label={'asdas'} />

        <p style={{textAlign: 'center'}}>
          <Button onClick={this.pushPage.bind(this)}>Ya Tahat!</Button>
        </p>
      </Page>
      </MuiThemeProvider>
    );
  }
}
