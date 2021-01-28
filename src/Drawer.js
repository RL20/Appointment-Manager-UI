/**
 * Created by aviya on 27/10/17.
 */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import {black, white, cyan500,grey900,blue500, red500, greenA200,orange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



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

var DrawerSimpleExample = React.createClass( {

    getInitialState: function() {
        return{open: false};
    },
    componentDidMount: function(){
        var _this = this;
        // window.fn = {
        //     openDrawer: function(){_this.setState({open:true});},
        //     closeDrawer: function(){_this.setState({open:false});}
        // };
        window.openDrawer = this.handleToggle();
        window.closeDrawer = function(){_this.setState({open:false});};
    },
    handleToggle :function() { this.setState({open: !this.state.open});
    },
    render:function() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <RaisedButton
                    label="Toggle Drawer"
                    onClick={this.handleToggle}
                />
                <Drawer open={this.state.open}>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem onTouchTap={window.closeDrawer()}>Menu Item 2</MenuItem>
                </Drawer>
            </div>
            </MuiThemeProvider>
        );
    }
});

export default DrawerSimpleExample