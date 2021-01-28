import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import PersonIcon from 'material-ui/svg-icons/action/perm-identity';
import moment from 'moment';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import SearchIcon from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import SiteURL from './site-url'


const styles = {
    container: {
        paddingTop: 17,
        width: 700,
        maxWidth:'95%',
        float: 'none',
        margin: '0 auto',
        overflow: 'auto'
    },
    containerTop: {
        paddingTop: 17,
        width: 700,
        maxWidth:'95%',
        float: 'none',
        margin: '0 auto',
        color: 'darkcyan'
    },
    cardheader: {
        backgroundColor: 'rgb(232, 232, 232)',
        padding: 10 ,
        fontWeight:400,
    },
    title: {
        color: 'darkcyan',
    },
    toppad: {
        // textAlign: 'center',
        // margingTop: 20,
        paddingTop: 64,
    },
    customWidth: {
        maxWidth: 700,
    },
    inScroll: {
        position: 'fixed',
        width: '100%',
        zIndex: 10,
        color: 'darkcyan'
    },
    fixedblock: {
        height: '80px',
    },
    centerDiv1:{
        width: '100%',
        float: 'none',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center'
    },
    editTextWidth1:{
        width: '400px',
        maxWidth:'75%'
    },
    searchIcon:{
        height: '30px',
        width: '30px',
        marginTop: 13
    },
    appbar: {
        // textAlign: 'center',
        // margingTop: 20,
        position:'fixed',
        backgroundColor: 'white'
    },
};

const tilesData = [
    {
        name: 'Jhonny Doe',
        id: 1
    },
    {
        name: 'Pinhas George',
        id: 1
    },
    {
        name: 'Jason Bill',
        id: 1
    },
    {
        name: 'Tammy Fatty',
        id: 1
    },
    {
        name: 'George Tammy',
        id: 1
    },
    {
        name: 'Bill Jhonny',
        id: 1
    },
    {
        name: 'Jhonny Pirce',
        id: 1
    },
    {
        name: 'Jhonny Doe',
        id: 1
    },
    {
        name: 'Pinhas George',
        id: 1
    },
    {
        name: 'Jason Bill',
        id: 1
    },
    {
        name: 'Tammy Fatty',
        id: 1
    },
    {
        name: 'George Tammy',
        id: 1
    },
    {
        name: 'Bill Jhonny',
        id: 1
    },
    {
        name: 'Jhonny Pirce',
        id: 1
    }

];

const tilesDate = [
    {

        date: 'Wednesday, December 21st 2016',
    },
    {
        date: 'Wednesday, December 21st 2017',
    },
    {
        date: 'Wednesday, December 21st 2018',
    },
    {
        date: 'Wednesday, December 21st 2016',
    },
    {
        date: 'Wednesday, December 21st 2017',
    },
    {
        date: 'Wednesday, December 21st 2018',
    },
];


var EmpAndCustPage = React.createClass({


    getInitialState: function() {

        // var updatedList = this.props.personList;
        return {
            open: false,
            showEmployee: false,
            empList: [],
            personList: [],
            searchText: this.props.searchText,
            isFirstTime: true
        };
    },
    filterList: function(event){
        this.setState({isFirstTime: false});
        // alert(event.target.value.toLowerCase());
        var updatedList = this.props.personList;
        updatedList = updatedList.filter(function(item){
            return item.name.toLowerCase().search(
                    event.target.value.toLowerCase()) !== -1 || item.phone.toLowerCase().search(
                    event.target.value.toLowerCase()) !== -1
        });
        this.setState({
            personList: updatedList
        });
    },
    componentDidMount: function() {

        // var event = {target:{value: 'a'}};
        // this.filterList(event);

        // this.setState({personList: this.props.personList});
        // console.log("personList update");
    },
    componentWillMount : function () {
        // var updatedList = this.props.personList;
        // updatedList = updatedList.filter(function(item){
        //     return item;
        // });
        // this.setState({personList: updatedList});
        // var urlEnd = this.props.personType == 'Employees' ? 'getAllEmployees': 'getAllCustomers';
        // console.log("url: ",urlEnd);
        // fetch(SiteURL.get + urlEnd)
        //     .then((response) => {
        //             if (response.status !== 200) {
        //                 console.log('Looks like there was a problem. Status Code: ' +
        //                     response.status);
        //                 return;
        //             }
        //
        //             // console.log(response.json());
        //             // Examine the text in the response
        //
        //             response.json().then((data)  => {
        //                 this.setState({empList : data});
        //             });
        //         }
        //     )
        //     .catch(function(err) {
        //         console.log('Fetch Error :-S', err);
        //     });

    },
//
// <ListItem primaryText="9:00"
//           leftIcon={<AccessTime />}
//           onTouchTap={() =>this.handleListClick(moment())} />
// <ListItem primaryText="9:15"
// leftIcon={<AccessTime />}
// onTouchTap={() =>this.handleListClick(moment())} />
    render: function() {

        var list = this.state.isFirstTime ? this.props.personList : this.state.personList;
        let filteredPersonList = this.props.personList.filter(
            (person) =>
            {
                if(this.state.searchText != null) return person.name.indexOf(this.state.searchText) !== -1;
                else return person;
            }
        );
        return(
            <div>
                <div>
                    <div style={styles.toppad}></div>
                    {this.state.showEmployee ?
                        null
                        :
                        <div style={styles.container}>

                                <List>
                                    {list.map((tile) => (

                                        <div>
                                        <ListItem
                                            key={tile.toString()}
                                            primaryText={tile.name}
                                            secondaryText={tile.phone}
                                            leftIcon={<PersonIcon />}
                                            onTouchTap={() =>this.handleListClick(tile)}
                                            style={{padding: "0px 0"}}
                                        >
                                        </ListItem>
                                            <Divider/>
                                        </div>
                                    ))}
                                </List>


                        </div>}
                </div>
            </div>
        )
    },

    handleListClick: function(name,id) {
        // this.setState({childVisible: !this.state.childVisible});
        // this.setState({btnDsbl : false});
        // this.setState({selectedHour : time});
        this.props.handleCardClick(name,id);
    },
    getDateHeader: function(date) {
        const title = [
            <div style={styles.title}>
                <i style={{fontSize: 19}}>{date.date}</i>
            </div>
        ];

        return title;
    }



});
//
// var FilteredList = React.createClass({
//     filterList: function(event){
//         var updatedList = this.state.initialItems;
//         updatedList = updatedList.filter(function(item){
//             return item.toLowerCase().search(
//                     event.target.value.toLowerCase()) !== -1;
//         });
//         this.setState({items: updatedList});
//     },
//     getInitialState: function(){
//         return {
//             initialItems: [
//                 "Apples",
//                 "Broccoli",
//                 "Chicken",
//                 "Duck",
//                 "Eggs",
//                 "Fish",
//                 "Granola",
//                 "Hash Browns"
//             ],
//             items: []
//         }
//     },
//     componentWillMount: function(){
//         this.setState({items: this.state.initialItems})
//     },
//     render: function(){
//         return (
//             <div className="filter-list">
//                 <form>
//                     <fieldset className="form-group">
//                         <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/>
//                     </fieldset>
//                 </form>
//                 <List items={this.state.items}/>
//             </div>
//         );
//     }
// });
//
// var List = React.createClass({
//     render: function(){
//         return (
//             <ul className="list-group">
//                 {
//                     this.props.items.map(function(item) {
//                         return <li className="list-group-item" data-category={item} key={item}>{item}</li>
//                     })
//                 }
//             </ul>
//         )
//     }
// });
//
// React.render(<FilteredList/>, document.getElementById('app'));


export default EmpAndCustPage;