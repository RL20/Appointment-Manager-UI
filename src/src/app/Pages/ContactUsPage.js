import React from 'react';
import {Link} from 'react-router-dom';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardHeader} from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import {ListItem} from 'material-ui/List';
import CallButton from 'material-ui/svg-icons/communication/call';
import EmailButton from 'material-ui/svg-icons/communication/email';
import FacebookButton from '../../SVG/FacebookIcon/Facebook';
import {GridList, GridTile} from 'material-ui/GridList';
import {styles, muiTheme} from '../Styles';
import {superagent} from '../SuperAgent';


var iconName = {

    1: <CallButton/>,
    2: <FacebookButton/>,
    3: <CallButton/>,
    4: <CallButton/>,
    5: <CallButton/>,
    6: <CallButton/>,
    7: <CallButton/>,
    8: <CallButton/>,
    9: <CallButton/>,
    10: <CallButton/>,
    11: <CallButton/>
};

var ssi = 1;

const tilessData = [
    {
        url: null,
        name: 'qweqweqwe',
        id: 1,
    },{
        url: 'images/grid-list/00-52-29-429_640.jpg',
        name: 'Breakfast',
        id: 2,
    },{
        url: 'images/grid-list/00-52-29-429_640.jpg',
        name: 'Breakfast',
        id: 1,
    },{
        url: 'images/grid-list/00-52-29-429_640.jpg',
        name: 'Breakfast',
        id: 2,
    },{
        url: 'images/grid-list/00-52-29-429_640.jpg',
        name: 'Breakfast',
        id: 2,
    },{
        url: 'images/grid-list/00-52-29-429_640.jpg',
        name: 'Breakfast',
        id: 1,
    },
];

var ContactUsPage = React.createClass({
    getInitialState: function() {

        return {
            showResults: false,
            email: null,
            phone:null,
            logo:null,
            businessName: null,
            address: null
        };
    },
    componentDidMount: function() {

        var _this = this;
        console.log('ContactUsPage');
        superagent
            .get('http://localhost:8888/api/getContactUs')
            .set('Accept', 'application/json')
            .end(function(err, res){
                if (err) {
                    console.log('error: ' , err);
                    console.log('response: ' , res);

                    //alert('Error!');
                } else {
                    console.log('response: ' , res.text);
                    var data = JSON.parse(res.text);
                    ////alert(data.logo);
                    _this.setState({
                        email: data.email,
                        phone: data.phone1,
                        logo: data.logoSrc,
                        businessName: data.businessName,
                        address: data.address,
                        facebook: data.facebook,
                        whatsapp: data.whatsapp

                    })
                }
            });

    },
    render: function() {

        const DefaultAppBar = () => (
            <AppBar
                 titleStyle={this.props.isDrawerDocked ? styles.appbarTitle : styles.appbarTitleOpenedDrawer}                 style={styles.appbar}                 iconStyleLeft={styles.appbarIconStyle}                 iconStyleRight={styles.appbarIconStyle}
                title={window.strings.contactUsPage.appbar.title}
                // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={this.props.openDrawer}
                //         iconElementRight={         //         <IconMenu         //         iconButtonElement={         //   <IconButton><MoreVertIcon /></IconButton>         // }         //         targetOrigin={{horizontal: 'right', vertical: 'top'}}         //         anchorOrigin={{horizontal: 'right', vertical: 'top'}}         //     >         //         <MenuItem primaryText="Sign out" />         //         <MenuItem primaryText="Settings" />         //         <MenuItem primaryText="About" />         //     </IconMenu>         //         }
            />
        );
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <DefaultAppBar/>
                    <div style={this.props.isDrawerDocked ? window.strings.css.pushContent :null}>
                        <div style={{maxWidth: 700, float: 'none', margin: '0 auto'}}>
                            <div style={styles.toppad}></div>
                            <div style={styles.toppad}></div>
                            <Card zDepth={1}>
                                <CardHeader
                                    style={styles.cardheader}
                                    actAsExpander={true}
                                    showExpandableButton={true}
                                />
                                <div
                                    style={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        margin: '-2px'
                        }}
                                >
                                    <div style={{
                        boxSizing: 'border-box',
                        padding: '2px',
                        width: '50%'}}>
                                        <img style={{width: '100%'}} src={this.state.logo} />
                                    </div>
                                    <div style={{borderLeft: '1px solid rgb(224, 224, 224)'}}></div>
                                    <div style={{
                        marginTop: '33px',
                        boxSizing: 'border-box',
                        padding: '2px',
                        width: '50%'}}>
                                        <ListItem
                                            primaryText={this.state.businessName}
                                            secondaryText={this.state.address}
                                        />
                                        <div style={{
                                marginTop: '103px'}}>
                                            <ListItem
                                                leftCheckbox={<IconButton iconStyle={styles.smallestIcon}
                                style={styles.smallest}><CallButton/></IconButton>}
                                                primaryText={this.state.phone}
                                                secondaryText="Allow notifications"
                                            />
                                            <Divider inset={true} />
                                            <ListItem
                                                leftCheckbox={<IconButton iconStyle={styles.smallestIcon}
                                style={styles.smallest}><EmailButton/></IconButton>}
                                                primaryText={this.state.email}
                                                secondaryText="Allow notifications"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </Card>

                            <br/>
                            <div style={{paddingLeft: 5, paddingRight: 5}} >
                                <div style={styles.root1}>
                                    <GridList style={styles.gridList} cols={1} cellHeight="auto">
                                        {tilessData.map((tile) => (
                                            <GridTile
                                                key={tile.url + ssi++}>
                                                <IconButton iconStyle={styles.smallIcon}
                                                            style={styles.small}
                                                            containerElement={<Link to={{
                                                          pathname: (tile.url),
                                                          state: {
                                                          employeeId: '345'
                                                          }}}/>}
                                                >
                                                    {iconName[tile.id]}

                                                </IconButton>
                                            </GridTile>
                                        ))}

                                    </GridList>
                                </div>
                                <Divider/>
                            </div><br/>

                        </div></div>
                </div>
            </MuiThemeProvider>
        );
    }
});


var SetContactUsPage = React.createClass({
    getInitialState: function() {

        return {
            showResults: false,
            email: null,
            phone:null,
            logo:null,
            businessName: null,
            address: null
        };
    },
    componentDidMount: function() {

        var _this = this;
        console.log('ContactUsPage');
        superagent
            .get('http://localhost:8888/api/getContactUs')
            .set('Accept', 'application/json')
            .end(function(err, res){
                if (err) {
                    console.log('error: ' , err);
                    console.log('response: ' , res);

                    //alert('Error!');
                } else {
                    console.log('response: ' , res.text);
                    var data = JSON.parse(res.text);
                    ////alert(data.logo);
                    _this.setState({
                        email: data.email,
                        phone: data.phone1,
                        logo: data.logoSrc,
                        businessName: data.businessName,
                        address: data.address,
                        facebook: data.facebook,
                        whatsapp: data.whatsapp

                    })
                }
            });

    },
    render: function() {

        const DefaultAppBar = () => (
            <AppBar
                 titleStyle={this.props.isDrawerDocked ? styles.appbarTitle : styles.appbarTitleOpenedDrawer}                 style={styles.appbar}                 iconStyleLeft={styles.appbarIconStyle}                 iconStyleRight={styles.appbarIconStyle}
                title={window.strings.contactUsPage.appbar.title}
                // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={this.props.openDrawer}
                //         iconElementRight={         //         <IconMenu         //         iconButtonElement={         //   <IconButton><MoreVertIcon /></IconButton>         // }         //         targetOrigin={{horizontal: 'right', vertical: 'top'}}         //         anchorOrigin={{horizontal: 'right', vertical: 'top'}}         //     >         //         <MenuItem primaryText="Sign out" />         //         <MenuItem primaryText="Settings" />         //         <MenuItem primaryText="About" />         //     </IconMenu>         //         }
            />
        );
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <DefaultAppBar/>
                    <div style={this.props.isDrawerDocked ? window.strings.css.pushContent :null}>
                        <div style={{maxWidth: 700, float: 'none', margin: '0 auto'}}>
                            <div style={styles.toppad}></div>
                            <div style={styles.toppad}></div>
                            <Card zDepth={1}>
                                <CardHeader
                                    style={styles.cardheader}
                                    actAsExpander={true}
                                    showExpandableButton={true}
                                />
                                <div
                                    style={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        margin: '-2px',
                        overflowX: 'auto'
                        }}
                                >
                                    <div style={{
                        boxSizing: 'border-box',
                        padding: '2px',
                        width: '50%'}}>
                                        <img style={{width: '100%'}} src={this.state.logo} />
                                    </div>
                                    <div style={{borderLeft: '1px solid rgb(224, 224, 224)'}}></div>
                                    <div style={{
                        marginTop: '33px',
                        boxSizing: 'border-box',
                        padding: '2px',
                        width: '50%'}}>
                                        <ListItem
                                            primaryText={this.state.businessName}
                                            secondaryText={this.state.address}
                                        />
                                        <div style={{
                                marginTop: '103px'}}>
                                            <ListItem
                                                leftCheckbox={<IconButton iconStyle={styles.smallestIcon}
                                style={styles.smallest}><CallButton/></IconButton>}
                                                primaryText={this.state.phone}
                                                secondaryText="Allow notifications"
                                            />
                                            <Divider inset={true} />
                                            <ListItem
                                                leftCheckbox={<IconButton iconStyle={styles.smallestIcon}
                                style={styles.smallest}><EmailButton/></IconButton>}
                                                primaryText={this.state.email}
                                                secondaryText="Allow notifications"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </Card>

                            <br/>
                            <div style={{paddingLeft: 5, paddingRight: 5}} >
                                <div style={styles.root1}>
                                    <GridList style={styles.gridList} cols={1} cellHeight="auto">
                                        {tilessData.map((tile) => (
                                            <GridTile
                                                key={tile.url + ssi++}>
                                                <IconButton iconStyle={styles.smallIcon}
                                                            style={styles.small}
                                                            containerElement={<Link to={{
                                                          pathname: (tile.url),
                                                          state: {
                                                          employeeId: '345'
                                                          }}}/>}
                                                >
                                                    {iconName[tile.id]}

                                                </IconButton>
                                            </GridTile>
                                        ))}

                                    </GridList>
                                </div>
                                <Divider/>
                            </div><br/>

                        </div></div>
                </div>
            </MuiThemeProvider>
        );
    }
});

exports.ContactUsPage = ContactUsPage;
exports.SetContactUsPage = SetContactUsPage;
exports.default = ContactUsPage;