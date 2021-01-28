import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {black, white, cyan500,grey900,blue500, red500, greenA200,orange500} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';


var textColor = white;
var themeColor = cyan500;
// var muiTheme = getMuiTheme(darkBaseTheme);
var muiTheme = getMuiTheme({
    palette: {
        accentColor: themeColor
    },
    appBar: {
        textColor: textColor,
        color: themeColor
    },
    tabs:{
        backgroundColor: themeColor,
        textColor: textColor
    }
});
const muiThemeWhite = getMuiTheme({
    palette: {
        accentColor: grey900
    },
    appBar: {
        textColor: grey900,
        color: white
    }
});
const icons = {
    smallIcon: {
        width: 36,
        height: 36
    },
    mediumIcon: {
        width: 48,
        height: 48,
        color: 'rgb(118, 118, 118)'
    },
    largeIcon: {
        width: 70,
        height: 70,
        color: '#e91e63',
        display: 'flex',
        justifyContent: 'center'
    },
    small: {
        width: 72,
        height: 72,
        padding: 16
    },
    medium: {
        width: 96,
        height: 96,
        padding: 24
    },
    large: {
        width: 100,
        height: 100,
        padding: 15,
        // padding: 30,
        fontSize: 14
    },
    largeMargin: {
        width: 120,
        height: 120,
        padding: 30,
        fontSize: 14,
        marginRight: '13px'
    }
};
const style = {margin: 5};
const styles = {
    divheader: {
        // padding: 10 ,
        fontWeight:400,
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        // color: 'darkcyan',
        padding: 12
    },
    picsPage: {
        paddingTop: '17px',
        maxWidth:900,
        float: 'none',
        margin: '0 auto'
    },
    p: {
        fontSize: '29px',
        color: 'rgb(218, 218, 218)',
        fontWeight: '500',
        float: 'none',
        margin: '0 auto',
        textShadow: 'rgb(185, 185, 185) 0.3px 1.3px',
        width: '500px',
        paddingTop: '140px',
        textAlign: 'center'
    },
    card: {
        // textAlign: 'center',
        height: 128,
        boxShadow: '0',
        // backgroundImage:'url("http://media.rockstargames.com/rockstargames/img/global/news/upload/gtav_details09122014_006.jpg")',
        // backgroundSize: 'contain',
        backgroundColor: 'none'
        // cursor: 'pointer'
    },
    hr:{
        display: 'block',
        borderStyle: 'inset',
        borderWidth: '7px'

    },
    cardimage: {
        // textAlign: 'center',
        // margingTop: 20,
        marginTop: 32
    },
    cardheader: {
        // textAlign: 'center',
        // margingTop: 20,
        fontSize:14,
        marginLeft: 11,
        marginRight: 11,
        color: 'white'
    },
    cardspacer: {
        // textAlign: 'center',
        // margingTop: 20,
        height:5
    },
    menulist: {
        // textAlign: 'center',
        // margingTop: 20,
        fontSize: '14px',
        paddingLeft: 55
    },
    appbar: {
        // textAlign: 'center',
        // margingTop: 20,
        position:'fixed'
    },
    appbarHome: {
        // textAlign: 'center',
        // margingTop: 20,
        // position:'fixed'
        position:'fixed',
        boxShadow: 'none'
    },
    appbarTitle: {
        // textAlign: 'center',
        // margingTop: 20,
        marginLeft: 194,
        marginRight: 194,
        fontSize: 31
    },
    appbarTitleOpenedDrawer: {
        padding: '0px 10px'
    },appbarIconStyle: {
        marginLeft: '-16px', marginRight: '-16px'
    },
    pushContent: {
        // textAlign: 'center',
        // margingTop: 20,
        marginLeft: 250
    },
    toppad: {
        // textAlign: 'center',
        // margingTop: 20,
        paddingTop: 64
    },
    toppad1: {
        // textAlign: 'center',
        // margingTop: 20,
        paddingTop: 60
    },
    h2: {
        // textAlign: 'center',
        // margingTop: 20,
        fontWeight: 400
    },
    pageTitle: {
        // textAlign: 'center',
        // margingTop: 20,
        fontWeight: 500,
        color: '#00888c',
        margin: 0,
        padding: '34px 16px',

        fontSize: '16px'
    },
    homePageTitle: {
        // textAlign: 'center',
        // margingTop: 20,
        fontWeight: 500,
        color: '#00888c',
        margin: 0,
        padding: '6px 16px',
        fontSize: '16px'
        // backgroundColor: 'burlywood'
    },
    h1: {
        // textAlign: 'center',
        // margingTop: 20,
        fontWeight: 400,
        color: 'cadetblue'
    },
    h1center: {
        display: 'flex',
        justifyContent: 'center'
    },
    editTextWidth1:{
        width: '400px',
        maxWidth:'75%'
    },
    carddd: {
        // textAlign: 'center',
        // margingTop: 20,
        maxWidth:650
    },
    root: {
        // display: 'flex',
        // flexWrap: 'wrap',
        // justifyContent: 'space-around',
        maxWidth:650
    },
    ohcard: {
        // display: 'flex',
        // flexWrap: 'wrap',
        // justifyContent: 'space-around',

        maxWidth:650,
        float: 'none',
        margin: '0 auto',
        marginTop: 20
    },
    customWidth: {
        width: 700,
        maxWidth: '99%',
        fontSize: '23px',
        fontWeight: 'lighter'
    },
    inScroll: {
        position: 'fixed',
        right: 0,
        left: 0,
        zIndex: '10',
        background: '#afafaf'
    },
    fixedblock: {
        height: '80px'
    },
    containerTop: {
        paddingTop: '10px',
        paddingBottom: '10px',
        width:'100%',
        float: 'none',
        margin: '0 auto',
        backgroundColor: 'white'
    },
    container: {
        paddingTop: 17,
        width: 1200,
        maxWidth:'95%',
        float: 'none',
        margin: '0 auto'
    },
    tableHeadContainer: {
        // paddingTop: 7,
        // width:700,
        // maxWidth:'95%',
        marginTop: 60,
        paddingTop: 17,
        width: 1085,
        maxWidth:'95%',
        // float: 'none',
        // margin: '0 auto',


        position: 'fixed'
        // left: '50%',
        // transform: 'translateX(-50%)'
        // position: 'relative',
        // bottom: 0
    },
    containerWithoutPadding: {
        width: 626,
        maxWidth:'95%',
        float: 'none',
        margin: '0 auto'
    },
    editTextWidth:{
        width: '400px',
        maxWidth:'75%'
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
        justifyContent: 'center'
    },
    container11: {
        // textAlign: 'center',
        // paddingTop: 200,
    },
    container111: {
        // textAlign: 'center',
        // paddingTop: 200,
        maxWidth:700,
        float: 'none',
        margin: '0 auto',
        height: '150pt',
        padding: 10,
        paddingBottom: 40,
        boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
        borderRadius: '2px'
    },
    checkbox: {
        marginLeft: 10,
        marginBottom: 8
    },
    button: {
        margin: 12
    },
    exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0
    },
    smallIcon: {
        width: 46,
        height: 46
    },
    smallestIcon: {
        width: 36,
        height: 36
    },
    smallerIcon: {
        width: 30,
        height: 30
    },
    mediumIcon: {
        width: 48,
        height: 48
    },
    mediumIcon1: {
        height: 42,
        width: 42,
        color: 'white'
    },
    largeIcon: {
        width: 60,
        height: 60
    },
    small: {
        width: 72,
        height: 72,
        padding: 16,
        display: 'inline-flex'
    },
    smallest: {
        width: 72,
        height: 72,
        padding: 16,
        display: 'inline-flex',
        top: '2px',
        left: '2px'
    },
    smaller: {
        width: 52,
        height: 52,
        padding:11,
        display: 'inline-flex'
    },
    medium: {
        width: 76,
        height: 80,
        padding: 0
    },
    mediumWithMargin: {
        width: '100%',
        height: 113,
        padding: 0,
        verticalAlign: 'middle'
    },
    large: {
        width: 100,
        height: 100,
        padding: 30
    },
    facebookLogin: {
        width: 45,
        height: 45,
        padding: 0,
        marginBottom: 5,
        marginLeft: 5
    },
    root1: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'

    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto'
    },
    gridList1: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        margin: '-2px auto',
        width: '91%'
        // backgroundColor: 'white'
    },
    gridList11: {
        width: '100%',
        // height: 450,
        margin: 0,
        overflowY: 'none'
    },
    BName: {
        fontSize: 36,
        position: 'absolute',
        margin: 15,
        fontWeight: 600
    },
    Address: {
        fontSize: 28,
        position: 'absolute',
        margin: 15,
        width: 500,
        maxWidth: '90%',
        wordWrap: 'break-word',
        color: 'darkgoldenrod'
    },
    ATitle: {
        fontSize: 22,
        verticalAlign: 'top'
        // position: 'absolute',
        // marginTop: 19,

    },
    underlineStyle: {
        // borderColor: blue500
    },
    propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0'
    },
    propToggleHeader: {
        margin: '20px auto 10px'
    },
    drawerOpenedFixedContainer: {
        width: '100%',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 2,
        right: 125
    },
    fixedContainer: {
        width: '100%',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 2
    },
    tableContainer: {
        // paddingTop: 7,
        // width:700,
        // maxWidth:'95%',
        paddingTop: 170,
        width: 1085,
        maxWidth:'95%',
        float: 'none',
        margin: '0 auto',
        zIndex: 0,
        position: 'relative',
        bottom: 0
    },
    floatingButton: {
        padding: '0px 20px',
        position: 'fixed',
        display: 'inline-block',
        top: 'auto',
        bottom: '20px',
        zIndex: "222"
    },
    floatingButtonPos: {
        display : 'flex',
        justifyContent: 'flex-end'
    },
    floatingButtonPosSubmit: {
        display : 'flex',
        justifyContent: 'center'
    }

};



exports.styles = styles;
exports.style = style; 
exports.icons = icons; 
exports.muiThemeWhite = muiThemeWhite; 
exports.muiTheme = muiTheme; 
exports.lightBaseTheme = lightBaseTheme;
exports.darkBaseTheme = darkBaseTheme;
exports.textColor = textColor;
exports.themeColor = themeColor;
exports.setTheme = setTheme;
exports.setThemeMode = setThemeMode;
exports.default = styles;

var _color = themeColor;

function setThemeMode(theme)
{
    var palette = theme.palette;
    palette.primary1Color = _color;
    palette.primary2Color = _color;
    palette.primary3Color = _color;
    theme.palette = palette;
    exports.muiTheme  = getMuiTheme(theme);
    document.querySelector('#themeColorCss').innerHTML = ".themeColor { background-color:" + theme.palette.primary1Color + "}" + "body{ background-color:" + theme.palette.canvasColor + "}";

}

function setTheme(color,theme)
{
    var palette = theme.palette;
    palette.primary1Color = color;
    palette.primary2Color = color;
    palette.primary3Color = color;
    theme.palette = palette;
    _color = color;
    themeColor = color;
    exports.muiTheme = getMuiTheme(theme
        // {
        // palette: {
        //     accentColor: themeColor
        //
        // },
        // appBar: {
        //     textColor: textColor,
        //     color: themeColor
        // },
        // tabs:{
        //     backgroundColor: themeColor,
        //     textColor: textColor
        // }
    // }
    );
    document.querySelector('#themeColorCss').innerHTML = ".themeColor { background-color:" + theme.palette.primary1Color + "}" + "body{ background-color:" + theme.palette.canvasColor + "}";

}