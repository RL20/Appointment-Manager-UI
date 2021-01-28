import React from 'react';
import CustIcon from 'material-ui/svg-icons/action/supervisor-account';
import Event from 'material-ui/svg-icons/action/event';
import Image from 'material-ui/svg-icons/image/image';
import AccessTime from 'material-ui/svg-icons/device/access-time';
import Navigation from 'material-ui/svg-icons/maps/navigation';
import Phone from 'material-ui/svg-icons/communication/phone';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardHeader} from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';
import {GridList, GridTile} from 'material-ui/GridList';
import CircularProgress from 'material-ui/CircularProgress';
import {styles, muiTheme} from '../Styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import { LabelCheckbox } from 'material-ui/Checkbox';
import SwipeableViews from 'react-swipeable-views';


const stylles = {
    slide: {
        padding: 32,
        minHeight: '70%',
        color: '#fff'
    },
    slide1: {
        // background: '#FEA900',
    },
    slide2: {
        background: '#B3DC4A'
    },
    slide3: {
        background: '#6AC0FF'
    }
};

const tilesDate = [
    {
        date: 'Wednesday, December 21st 2016',
        obj: [
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

                time: '9:00',
            },
            {
                time: '9:15',
            },
            {
                time: '9:30',
            },
        ]

    },
    {
        date: 'Wednesday, December 21st 2017',
        obj: [
            {

                time: '9:sfvsvds',
            },
            {
                time: '9:15',
            },
            {
                time: '9:30',
            },
            {

                time: '9:00',
            },
            {
                time: '9:15',
            },
            {
                time: '9:30',
            },
        ]
    },
    {
        date: 'Wednesday, December 21st 2018',
        obj: [
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

                time: '9:00',
            },
            {
                time: '9:15',
            },
            {
                time: '9:30',
            },
        ]
    },
    {
        date: 'Wednesday, December 21st 2016',
        obj: [
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

                time: '9:00',
            },
            {
                time: '9:15',
            },
            {
                time: '9:30',
            },
        ]
    },
    {
        date: 'Wednesday, December 21st 2017',
        obj: [
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

                time: '9:00',
            },
            {
                time: '9:15',
            },
            {
                time: '9:30',
            },
        ]
    },
    {
        date: 'Wednesday, December 21st 2018',
        obj: [
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

                time: '9:00',
            },
            {
                time: '9:15',
            },
            {
                time: '9:30',
            },
        ]
    },
];

var HomePage = React.createClass({
    getInitialState: function() {
        return {
            showResults: false,
            index: 0
        };
    },
    componentDidMount: function() {

        ////alert(pathname);
        // this.props.history.push(pathname);
    },
    handleChange: function(value) {
        this.setState({
            index: value
        });
    },

    handleChangeIndex: function(index){
        this.setState({
            index: index
        });
    },
    render: function() {
        const DefaultAppBar = () => (
            <AppBar
                containerStyle={{boxShadow: 'none'}}
                 titleStyle={this.props.isDrawerDocked ? styles.appbarTitle : styles.appbarTitleOpenedDrawer}                 style={styles.appbar}                 iconStyleLeft={styles.appbarIconStyle}                 iconStyleRight={styles.appbarIconStyle}
                title={window.strings.homePage.appbar.title}
                // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={(e)=>{e.preventDefault(); this.props.openDrawer();}}
                //         iconElementRight={         //         <IconMenu         //         iconButtonElement={         //   <IconButton><MoreVertIcon /></IconButton>         // }         //         targetOrigin={{horizontal: 'right', vertical: 'top'}}         //         anchorOrigin={{horizontal: 'right', vertical: 'top'}}         //     >         //         <MenuItem primaryText="Sign out" />         //         <MenuItem primaryText="Settings" />         //         <MenuItem primaryText="About" />         //     </IconMenu>         //         }
            />
        );
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>

                    <DefaultAppBar/>
                    <div style={this.props.isDrawerDocked ? window.strings.css.pushContent :null}>
                        <div style={styles.toppad}></div>
                        <div style={{maxWidth: 700, float: 'none', margin: '0 auto'}}>
                            <div>
                                <div>
                                    {tilesDate.map((data,index) => (
                                        <div  style={styles.container}>
                                            <Card key={index} zDepth={1}>
                                                <CardHeader
                                                    style={styles.cardheader}
                                                    title={'asdas'}
                                                    actAsExpander={false}
                                                    showExpandableButton={false}
                                                />

                                                <List>
                                                    {data.obj.map((tile, index) => (
                                                        console.log("tile:  " + tile),
                                                            <ListItem
                                                                key={index}
                                                                primaryText={''}
                                                                leftIcon={<AccessTime />}
                                                                onTouchTap={(e) =>{e.preventDefault()}}
                                                            >

                                                            </ListItem>
                                                    ))}
                                                </List>

                                            </Card>
                                        </div>
                                    ))}
                                    <div style={{display: 'flex', justifyContent: 'center', marginTop: 15}}>
                                        <CircularProgress size={80} thickness={5} />
                                    </div>
                                </div>
                            </div>
                        </div></div>
                </div>
            </MuiThemeProvider>
        );

    },
    renderOriginal: function() {


        const {
            index,
        } = this.state;

        const Tabss = () => (
            <Tabs value={index} style={{marginTop: 63, position: 'fixed',width: '100%', zIndex: 2,
                boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
            }} inkBarStyle={{backgroundColor: 'white'}} onChange={this.handleChange}>
                <Tab style={{color: 'black'}} icon={<Event/>} value={0}/>
                <Tab style={{color: 'black'}} icon={<CustIcon/>} value={1}/>
                <Tab style={{color: 'black'}} icon={<CustIcon/>} value={2}/>
                <Tab style={{color: 'black'}} icon={<AccessTime/>} value={3}/>
                <Tab style={{color: 'black'}} icon={<Image/>} value={4}/>
                <Tab style={{color: 'black'}} icon={<Navigation/>} value={5}/>
                <Tab style={{color: 'black'}} icon={<Phone/>} value={6}/>
            </Tabs>
        );

        const Tiles = () => (
            <GridList style={styles.gridList11} cols={2} cellHeight="auto">
                {tilessData.map((tile) => (

                    <GridTile
                        key={tile.url + ssi++}
                        style={{marginBottom: 30, marginLeft: 20}}
                    >
                        <Card zDepth={2} style={{width:'95%'}}>
                            <ListItem >
                                <IconButton
                                    disableTouchRipple={true}
                                    iconStyle={styles.largeIcon}
                                    style={styles.mediumWithMargin}>
                                    {iconName[tile.id]}
                                </IconButton>
                                <div style={{width: '100%',textAlign: 'center'}}>
                                    <a>new customer</a>
                                </div>
                            </ListItem>
                        </Card>


                    </GridTile>
                ))}

            </GridList>
        );
        const DefaultAppBar = () => (
            <AppBar
                containerStyle={{boxShadow: 'none'}}
                 titleStyle={this.props.isDrawerDocked ? styles.appbarTitle : styles.appbarTitleOpenedDrawer}                 style={styles.appbar}                 iconStyleLeft={styles.appbarIconStyle}                 iconStyleRight={styles.appbarIconStyle}
                title={window.strings.homePage.appbar.title}
                // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={(e)=>{e.preventDefault(); this.props.openDrawer();}}
                //         iconElementRight={         //         <IconMenu         //         iconButtonElement={         //   <IconButton><MoreVertIcon /></IconButton>         // }         //         targetOrigin={{horizontal: 'right', vertical: 'top'}}         //         anchorOrigin={{horizontal: 'right', vertical: 'top'}}         //     >         //         <MenuItem primaryText="Sign out" />         //         <MenuItem primaryText="Settings" />         //         <MenuItem primaryText="About" />         //     </IconMenu>         //         }
            />
        );
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>

                    <DefaultAppBar/>

                    <div style={this.props.isDrawerDocked ? window.strings.css.pushContent :null}>
                        <Tabss/>
                        <div style={{height: 112}}></div>
                        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                            <div style={Object.assign({}, stylles.slide, stylles.slide1)}>
                                <div style={{maxWidth: 700, width: '99%',float: 'none', margin: '0 auto'}}>

                                </div>
                            </div>
                            <div style={Object.assign({}, stylles.slide, stylles.slide1)}>
                                <div style={{maxWidth: 700, width: '99%',float: 'none', margin: '0 auto'}}>

                                </div>
                            </div>
                            <div style={Object.assign({}, stylles.slide, stylles.slide1)}>
                                <div style={{maxWidth: 700, width: '99%',float: 'none', margin: '0 auto'}}>

                                </div>
                            </div>
                            <div style={Object.assign({}, stylles.slide, stylles.slide1)}>
                                <div style={{maxWidth: 700, width: '99%',float: 'none', margin: '0 auto'}}>


                                </div>
                            </div>
                            <div style={Object.assign({}, stylles.slide, stylles.slide1)}>
                                <div style={{maxWidth: 700, width: '99%',float: 'none', margin: '0 auto'}}>

                                    <Tiles/>
                                </div>
                            </div>
                            <div style={Object.assign({}, stylles.slide, stylles.slide1)}>
                                <div style={{maxWidth: 700, width: '99%',float: 'none', margin: '0 auto'}}>

                                    <Tiles/>
                                </div>
                            </div>
                            <div style={Object.assign({}, stylles.slide, stylles.slide1)}>
                                <div style={{maxWidth: 700, width: '99%',float: 'none', margin: '0 auto'}}>

                                    <Tiles/>
                                </div>
                            </div>
                        </SwipeableViews>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
});

export default HomePage;