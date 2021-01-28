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

var SideBar = React.createClass({
    handleClick: function (e) {
        this.props.handleClick("Dave");
    },
    render: function () {
        return <button id='sideButton' onClick = {this.handleClick}> Click me to change Bob to dave</button>;
            }
    });

var ComponentContainer = React.createClass({
                render: function () {
                return <div >{this.props.name}</div>;
            }
            });

var BodyComponent = React.createClass({
                handleClick: function(newData) {
                this.setState({data: newData});
            },
                getInitialState: function() {
                return {data: this.props.data};
            },
                render: function() {
                return <div><ComponentContainer name={this.state.data}/><SideBar handleClick={this.handleClick}/></div>;
            }
            });



var originalName = {originalName: "bob"};

export default <BodyComponent data={originalName}/>;
            // React.render(<BodyComponent data={originalName}/>, document.getElementById('content'));