import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import DateRangeIcon from 'material-ui/svg-icons/action/date-range';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DatePicker from 'material-ui/DatePicker/DatePickerDialog';
import AvailableHours from './availhours';

const style = {
    margin: 0,
    top: 'auto',
    left: 20,
    bottom: 20,
    right: 'auto',
    position: 'fixed',
    zIndex: 222

};
const stylee = {
    fontSize: 25,

};




export default class FloatingActionButtonExampleSimple extends Component {
    constructor(props, context) {
        super(props, context);

        // this.handleRequestClose = this.handleRequestClose.bind(this);
        // this.handleTouchTap = this.handleTouchTap.bind(this);

        
        this.state = {
            opene: false,
            circleIcon: this.props.circleIcon
        };
        //
        this.handleToggle = this.handleToggle.bind(this);
        this.handleAccept = this.handleAccept.bind(this);
    }

    handleToggle()
    {

        console.log(this);
        this.props.handleAAPCircleClick();
        
    }

    handleAccept(date) {
        // this.refs.AHDialog.show(date);
    }

    render() {


        return (
            <div>
                <FloatingActionButton style={style} onTouchTap={()=>this.handleToggle()}>
                    { this.state.circleIcon ? <ContentAdd/> : <DateRangeIcon/> }
                </FloatingActionButton>
            </div>
        );
    }
}
