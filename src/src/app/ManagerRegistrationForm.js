import React from 'react';

import NavigatePage from './Pages/NavigatePage';
import ContactUsPage from './Pages/ContactUsPage';
import PicturesPage from './Pages/PicturesPage';
import OpeningHoursPage from './Pages/OpeningHoursPage';
import {PersonsPage, SetNewPersonPage} from './Pages/PersonsPage';


var ManagerRegistrationForm = React.createClass({
    getInitialState: function(){
        return {
            page : this.renderAdminRegistration(),
            pageArr: [
                this.renderAddressForm(),
                this.renderOpeningHoursForm(),
                this.renderContactUsForm(),
                this.renderUploadPicturesForm(),
                this.renderEmployeesForm(),
                this.renderNavigateForm()

            ],
            index: 0
        };
    },
     next : function () {
        // alert('dfvdjhfvzj dhb kdhfxkuhb');esrgfsdfgsrr

        this.setState({
            page: this.state.pageArr[this.state.index],
            index: this.state.index + 1
        });
    },
    renderAddressForm : function () {
        return (
            <AddressForm next={this.next} num={0} />
        );
    },
    renderAdminRegistration : function () {
        return (
            <div>
                <p>admin registration</p>
                <button onClick={this.next}>Next</button>
            </div>
        );
    },
    renderOpeningHoursForm : function () {
            return (
                <OpeningHoursPage isEditOpeningHours={true} next={this.next} />
            );
    },
    renderContactUsForm : function () {
        return (
            <ContactUsPage next={this.next} num={2}/>
        );
    },
    renderUploadPicturesForm : function () {
        return (
            <PicturesPage next={this.next} num={3}/>
        );
    },
    renderEmployeesForm : function () {
        return (
            <SetNewPersonPage next={this.next} num={4}/>
        );
    },
    renderNavigateForm : function () {
        return (
            <NavigatePage next={this.next} num={5}/>
        );
    },

    render : function () {

        return (
            <div>
                {this.state.page}
            </div>
        );
    }

});













var AddressForm = React.createClass({
    getInitialState: function(){
        return {
        };
    },
    next : function () {
        if(true){
            this.props.next();
        }
    },
    render : function () {

        return (
            <div>
                <h1>AddressForm number{this.props.num}</h1>
                <button onClick={this.next}>Next</button>
            </div>
        );
    }

});

export default ManagerRegistrationForm;