import React from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DateRangeIcon from 'material-ui/svg-icons/action/date-range';
import DoneIcon from 'material-ui/svg-icons/action/done';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {styles,muiTheme} from './Styles';


var FloatingButton = React.createClass({
    getInitialState()
    {
        return {
            opene: false,
            circleIcon: this.props.circleIcon,
            isSubmitBtn: false
        };
    },
    componentWillMount: function(){
console.log('isSubmitBtn', this.props.isSubmitBtn );
        if(this.props.isSubmitBtn !== undefined )
            this.setState({isSubmitBtn:true});
    },
    handleToggle(e)
    {
        //if there are 2 buttons component after the other the click will trigger both
        //this prevents that from happening
        e.preventDefault(); e.stopPropagation();
        
        
        console.log("handle toggle");
        this.props.handleAAPCircleClick(e);

    },
    handleAccept(date) {
        // this.refs.AHDialog.show(date);
    },
    render: function() {

        return (
            <div style={this.state.isSubmitBtn ? styles.floatingButtonPosSubmit : styles.floatingButtonPos}>
                <div
                    style={styles.floatingButton}>
                    <FloatingActionButton backgroundColor={muiTheme.palette.accentColor}  onTouchTap={this.handleToggle}>
                        { this.state.isSubmitBtn ? <DoneIcon/> : (this.state.circleIcon ? <ContentAdd/> : <DateRangeIcon/>) }
                    </FloatingActionButton>
                </div>
            </div>
        );
    }
});

export default FloatingButton;

// style={window.strings.css.floatingButton}