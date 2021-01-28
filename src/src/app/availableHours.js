import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment'

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
// var _background = 'cadetblue';
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
    },
    dialog: {
        width:'90%',
        maxWidth: '400',
    },
    title: {
        margin: 0,
        padding: '24px 24px 20px',
        color: 'rgba(0, 0, 0, 0.870588)',
        fontSize: 22,
        fontWeight: 400,
        borderBottom: 'none',
    },
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
export default class DialogExampleModal extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false,
        };
        this.state = {
            date: "dsfg",
        };
        // this.state = {
        //     background: "none",
        // };
        this.state = {
            btnDsbl: true,
        };

        takeThat(this);
    }

    handleOpen() {
        this.setState({open: true});
        this.setState({btnDsbl : true});
    };

    handleClose() {
        this.setState({open: false});
        this.setState({btnDsbl : true});
    };

    onListClick() {
        console.log("list click");
        // this.setState({background : 'cadetblue'});
        this.setState({btnDsbl : false});
    };


    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={this.state.btnDsbl}
                onTouchTap={this.handleClose.bind(this)}
            />,
        ];

        const title = [
            <div style={styles.title}>
                <p style={styles.listitemP1}>Available Hours</p>
                <p style={styles.listitemP2}><i>{this.state.date}</i></p>
            </div>
    ];

        const hoursList = [
            <List >
                {tilesData.map((tile) => (
                    <ListItem
                        onTouchTap={this.onListClick.bind(this)}
                    >
                        <RadioButton
                            value="light"
                            label={tile.time}
                        />
                    </ListItem>
                ))}
            </List>
    ];

        return (
            <div>
                <Dialog
                    title={title}
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    autoScrollBodyContent={true}
                    contentStyle={styles.dialog}
                >

                    {hoursList}
                </Dialog>
            </div>
        );
    }
}
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

