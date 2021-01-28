import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import {List, ListItem} from 'material-ui/List';
import PersonIcon from 'material-ui/svg-icons/action/perm-identity';
import EmployeesIcon from 'material-ui/svg-icons/action/supervisor-account';
import Divider from 'material-ui/Divider';
import {muiTheme} from './Styles';





const styles = {
    radioButton: {
        marginTop: 16,
    },
    editTextWidth:{
        width: '95%',
    },
    searchIcon:{
        height: '30px',
        width: '30px',
        marginTop: 13
    },

    centerDiv:{
        float: 'none',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between'
    },
    dialog: {
        width:'90%',
        maxWidth: '700',
    },
};


const tilesData = [
    {

        name: 'Jhonny',
        phone: 23234
    },
    {
        name: 'Pinhas',
        phone: 76898
    },
    {
        name: 'Jason',
        phone: 345634
    },
    {
        name: 'Tammy',
        phone: 4566234
    },
    {
        name: 'George',
        phone: 34563
    },
    {
        name: 'Bill',
        phone: 34344
    },
];
/**
 * Dialog content can be scrollable.
 */
// export default class SearchAndChooseDialog extends React.Component {
//     state = {
//         open: true,
//     };
//
//     handleOpen = () => {
//         this.setState({open: true});
//     };
//
//     handleClose = () => {
//         console.log("close 1");
//         this.props.close();
//     };
//
//     handleListClick = () => {
//         console.log("close 1");
//         this.props.close();
//     };
//
//     render() {
//         const actions = [
//             <FlatButton
//                 label="Cancel"
//                 primary={true}
//                 onTouchTap={this.handleClose}
//             />
//         ];
//
//         // const radios = [];
//         // for (let i = 0; i < 30; i++) {
//         //     radios.push(
//         //         <RadioButton
//         //             key={i}
//         //             value={`value${i + 1}`}
//         //             label={`Option ${i + 1}`}
//         //             style={styles.radioButton}
//         //         />
//         //     );
//         // }
//
//         return (
//             <div>
//                 <Dialog
//                     title={ <div style={styles.centerDiv}><TextField style={styles.editTextWidth} hintText="Search"/> <SearchIcon color='#5bc0de' style={styles.searchIcon}/></div>}
//                     actions={actions}
//                     modal={false}
//                     open={this.props.open}
//                     onRequestClose={this.handleClose}
//                     autoScrollBodyContent={true}
//                     contentStyle={styles.dialog}
//                 >
//                     <List>
//                         {tilesData.map((tile,index) => (
//                             <ListItem
//                                 key={index}
//                                 primaryText={tile.name}
//                                 secondaryText={tile.phone}
//                                 leftIcon={<PersonIcon />}
//                                 onTouchTap={() =>this.handleListClick()}
//                             >
//
//                             </ListItem>
//                         ))}
//                     </List>
//                 </Dialog>
//             </div>
//         );
//     }
// }

var SearchAndChooseDialog = React.createClass({


    getInitialState: function() {

        // var updatedList = this.props.personList;
        return {
            open: true,
            showEmployee: false,
            empList: [],
            personList: [],
            searchText: this.props.searchText,
            isFirstTime: true
        };
    },
    handleOpen: function()  {
    this.setState({open: true});
    },
    handleClose: function()  {
    console.log("close 1");
    this.props.close();
    },
    handleListClick : function(tile)  {
        console.log("close 1");
        console.log("object", tile);
        this.props.handleListClick(
            {
                obj: tile,
                personType: this.props.personType
            }
        );
        this.props.close();
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

    },
    componentWillMount : function () {


    },
    render: function() {

        var list = this.state.isFirstTime ? this.props.personList : this.state.personList;
        const actions = [
            <FlatButton
                label={window.strings.cancel}
                primary={true}
                onTouchTap={this.handleClose}
            />
        ];

        return(
            <div>
                <Dialog
                    title={ <div style={styles.centerDiv}><TextField style={styles.editTextWidth} onChange={this.filterList} hintText={window.strings.search}/> <SearchIcon color={muiTheme.palette.primary1Color} style={styles.searchIcon}/></div>}
                    actions={actions}
                    modal={false}
                    open={this.props.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                    contentStyle={styles.dialog}
                >
                    <List>
                        {this.props.isAll ? <div><ListItem
                            primaryText={window.strings.all}
                            leftIcon={<EmployeesIcon />}
                            onTouchTap={(e) => { e.preventDefault(); this.handleListClick({name: window.strings.all})}}
                        > </ListItem>
                        <Divider/></div> : null}
                        {list.map((tile,index) => (
                            <ListItem
                                key={index}
                                primaryText={tile.name}
                                secondaryText={tile.phone}
                                leftIcon={<PersonIcon />}
                                onTouchTap={(e) => { e.preventDefault(); this.handleListClick(tile)}}
                            >

                            </ListItem>
                        ))}
                    </List>
                </Dialog>
            </div>
        )
    },
 });


export default SearchAndChooseDialog;