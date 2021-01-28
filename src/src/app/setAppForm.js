import React from 'react';
import DatePicker from 'material-ui/DatePicker/DatePickerDialog';
import AvailableHours from './availhours';
import SiteURL from './site-url';



var ShowHide = React.createClass({

    getInitialState: function () {

        // this.loadCurrentMonth(7, 2017);
        return {
            childVisible: true ,
            open: false,
            date: "dsfg",
            btnDsbl: true,
            selectedHour:"",
            currentMonthArr: null,
            currentMonth: null
        };

    },

    render: function() {

        return(


            <div>

                <DatePicker open={this.state.open}
                            containerStyle={{direction: 'ltr'}}
                            ref='dialogWindow'
                            container='dialog'
                            firstDayOfWeek={0}
                            minDate={new Date()}
                            onAccept={this.handleAccept}
                            disableYearSelection={true}
                            shouldDisableDate={this.disablePrevDates}
                />
                <AvailableHours employeeId={this.props.employeeId} superagent={this.props.superagent} ref="AHDialog"/>

            </div>
        )
    },


    disablePrevDates: function(e) {

        console.log(e.getDate());
        console.log(this.state.currentMonth);
        console.log(e.getMonth());
        //+1? see componentWillMount func
        var isDisabled;
        if(this.state.currentMonth == e.getMonth() + 1)
        {
            var isDone = this.state.currentMonthArr.map((day)=>(
                 day == e.getDate() ? isDisabled = false : null
            ));
            Promise.all(isDone).then(function () {
                return isDisabled;
            });

        }
        else return true;
        // return true;
        // var _this = this;
        // //TODO can't make it work should probably edit DatePicker
        // console.log("disablePrevDates called");
        // var isDone;
        // if(this.state.currentMonthArr == null)
        // {
        //     isDone = this.loadCurrentMonth(e.getMonth(), e.getYear());
        // }
        // //TODO need to validate year too
        // else if(e.getMonth() !== this.state.currentMonth)
        // {
        //     isDone = this.loadCurrentMonth(e.getMonth(), e.getYear());
        // }
        // // else isDone = 353434;
        //
        // console.log("random math",e);
        //
        // //supposed to get the boolean by month as a key
        //
        // Promise.all(isDone).then(function ()  {
        //     return _this.state.currentMonth[e.getMonth()];
        //     // return true;
        // });
        // setTimeout(()=>{return false; }, 1500);
        // return Math.random() > 0.7;
        // const startSeconds = Date.parse(startDate);
        // return (date) => {
        //     return Date.parse(date) < startSeconds;
        // }
    },
    loadCurrentMonth: function(month, year) {


        var _this = this;
        return new Promise(function (resolve, reject) {
// alert("current month: "+month);
            _this.props.superagent
                .post(SiteURL.get + "getAvailableDaysInMonthForAllEmployees")
                .send({
                    month: month, year: year
                })
                .set('Accept', 'application/json')
                .end(function (err, res) {
                    if (err) {
                        console.log('error: ', err);
                        console.log('response: ', res);

                        alert('Error!');
                    } else {
                        console.log('response: ', res);
                        var data = JSON.parse(res.text);
                        var monthArr = [];
                        var isDone = data.map((day)=>(
                            monthArr[day] = day
                        ));


                        Promise.all(isDone).then(function () {
                            console.log(monthArr);
                            _this.setState({
                                currentMonth: month,
                                currentMonthArr: monthArr
                            });
                            // alert('loadCurrentMonthq');
                            return true;
                        });
                    }
                });
        });
        // fetch(SiteURL.get + "getAvailableDaysInMonthForAllEmployees",
        //     {
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         method: "POST",
        //         body: JSON.stringify({month: month, year: year})
        //     })
        //     .then((response) => {
        //
        //         if (response.status == 500) {
        //             console.log('Looks like there was a problem. Status Code: ' +
        //                 response.status);
        //
        //             response.json().then((data)=>{
        //                 console.log(data);
        //                 alert("message: " + data.message + "    code: " + data.code);
        //             });
        //
        //             return;
        //         }
        //
        //         // console.log(response.json());
        //         // Examine the text in the response
        //
        //         response.json().then((data)  => {
        //             // console.log(data);
        //
        //             var monthArr = [];
        //             var isDone = data.map((day)=>(
        //                 monthArr[day] = day
        //            ));
        //
        //
        //             Promise.all(isDone).then(function ()  {
        //                 console.log(monthArr);
        //                 _this.setState({
        //                     currentMonth: data[0] ,
        //                     currentMonthArr: monthArr
        //                 });
        //                 return true;
        //             });
        //
        //
        //
        //         });
        //     })
        //     .catch(function(err) {
        //         console.log('Fetch Error :-S', err);
        //     });


    },
    handleAccept: function(date) {
        // this.setState({childVisible: !this.state.childVisible});
        // alert("akdfjcnsjn");
        // alert(date);
        var appointment = {
            id: null,
            appointmentDate : Math.floor(date.getTime() / 1000),
            appointmentTime : null,
            employeeId: null,
            customerId: null,
            comment: null

        };
        console.log(date);
      
        this.refs.AHDialog.show(appointment, Math.floor(date.getTime() / 1000));
    },

    handleClose: function() {
        this.setState({open: false});
        this.setState({childVisible: !this.state.childVisible});
        this.setState({btnDsbl : true});
    },
    componentWillMount: function() {
        var date = new Date();
        // alert(date.getMonth());
        //javascript Date obj return getMonth between 0-11 instead of 1-12
        this.loadCurrentMonth(date.getMonth() + 1, date.getFullYear());
    },
    handleOpen: function() {

    },

    handleBackButton: function() {
        this.setState({childVisible: !this.state.childVisible});
        this.setState({btnDsbl : true});
    },
    handleListClick: function(time) {
        this.setState({childVisible: !this.state.childVisible});
        this.setState({btnDsbl : false});
        this.setState({selectedHour : time});
    },
    show: function(appointment) {
        if(typeof appointment !== 'undefined'){
            // var isHour = true;
            this.refs.AHDialog.show(appointment);
        }
        else {
            this.setState({open: true});
            this.refs.dialogWindow.show();
        }
    }
});


export default ShowHide;