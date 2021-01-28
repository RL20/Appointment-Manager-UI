import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker/DatePickerDialog';

/**
 * The Date Picker defaults to a portrait dialog. The `mode` property can be set to `landscape`.
 * You can also disable the Dialog passing `true` to the `disabled` property.
 */


// export default FloatingActionButtonExampleSimple;


export default class DatePickerExampleSimple extends Component {
    constructor(props, context) {
        super(props, context);

        // this.handleRequestClose = this.handleRequestClose.bind(this);
        // this.handleTouchTap = this.handleTouchTap.bind(this);

        // this.state = {
        //     open: false,
        // };
        //
        // this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle()
    {
        // render(
        //
        //     <DatePicker />
        //     ,document.getElementById('app'));
    }


    render() {

        return (

            <DatePicker open={this.state.open}/>

        );
    }
}
