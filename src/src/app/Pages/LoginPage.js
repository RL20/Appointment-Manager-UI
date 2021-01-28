import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import {ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import FacebookButton from '../../SVG/FacebookIcon/Facebook';
import SiteURL from '../site-url';
import {styles, muiTheme} from '../Styles';
import {superagent,setlanguage, setAjaxAuthHeader} from '../SuperAgent';
import FlatButton from 'material-ui/FlatButton';





let hello = require('hellojs/dist/hello.all.js');

var facebookUrl;

var LoginPage = React.createClass({
    getInitialState: function() {
        return {
            showResults: false,
            isLogin: false,
            passwordFieldValue: '',
            emailFieldValue: '',
            passwordFieldValue1: '',
            emailFieldValue1: '',
            addressFieldValue: '',
            phoneFieldValue: '',
            lastNameFieldValue: '',
            firstNameFieldValue: '',
            isRegister: false,
            isLangBtnPressed: false,
            userPhoto: null,
            isSocialRegister: false,
            hideLogin: ''
        };
    },
    _handlePassword1FieldChange: function(e) {
        this.setState({
            passwordFieldValue1: e.target.value
        });
    },
    _handleEmail1FieldChange: function(e) {
        this.setState({
            emailFieldValue1: e.target.value
        });
    },
    _handlePasswordFieldChange: function(e) {
        this.setState({
            passwordFieldValue: e.target.value
        });
    },
    _handleEmailFieldChange: function(e) {
        this.setState({
            emailFieldValue: e.target.value
        });
    },
    _handleFirstNameFieldChange: function(e) {
        this.setState({
            firstNameFieldValue: e.target.value
        });
    },
    _handleLastNameFieldChange: function(e) {
        this.setState({
            lastNameFieldValue: e.target.value
        });
    },
    _handlePhoneFieldChange: function(e) {
        this.setState({
            phoneFieldValue: e.target.value
        });
    },
    _handleAddressFieldChange: function(e) {
        this.setState({
            addressFieldValue: e.target.value
        });
    },
    componentWillMount: function() {
        // if(window.localStorage.getItem("token") !== null &&window.localStorage.getItem("user") !== null )
        // {
        //     pathname = "/";
        //     this.props.history.push('/');
        // }


        // window.addEventListener('fetch', function(event) { // ServiceWorker intercepting a fetch
        //    //alert('fetch');
        //     // event.respondWith(
        //     //     new Response(myBody, {
        //     //         headers: { "Content-Type" : "text/plain" }
        //     //     })
        //     // );
        // });
        // const s = document.createElement('script');
        // s.type = 'text/javascript';
        // s.async = true;
        // s.src = '//cdnjs.cloudflare.com/ajax/libs/hellojs/1.10.1/hello.all.min.js';
        // // s.innerHTML = "document.write('This is output by document.write()!')";
        // this.instance.appendChild(s);
        // const sc = document.createElement('script');
        // sc.type = 'text/javascript';
        // sc.async = true;
        // sc.src = '//cdnjs.cloudflare.com/ajax/libs/superagent/1.2.0/superagent.min.js';
        // // s.innerHTML = "document.write('This is output by document.write()!')";
        // this.instance1.appendChild(sc);

        // let hello = require('hellojs/dist/hello.all.js');
        var socialToken;
        var serverToken;
        var _this = this;
////alert('before hello ');
//         facebookUrl = hello.login('facebook','popup');
        hello.on('auth.login', function (auth) {
            ////alert();
            // hello(auth.network).api('https://www.googleapis.com/auth/plus.login').then(function(r) {
            //     console.log("r.email = "+r.email);
            //     console.log("r.name== = "+r.name);
            //     console.log("rs ", r);
            // });

            if(window.localStorage.getItem("hello") != null) {
                socialToken = auth.authResponse.access_token;
                console.log('socialToken', socialToken);
                ////alert('hello iten exists');
                // Auth with our own server using the social token
                authenticate(auth.network, socialToken).then(function (token) {
                    var serverToken = token;

                    window.localStorage.setItem("token", token);

                    setAjaxAuthHeader();
                    // _this.checkAuth();
                    console.log('serverToken', JSON.parse(token).token);
                    // _this.props.history.push('/home');
                    // window.location.href = "http://localhost:8899/";
                    _this.props.loadUser();

                }).catch(function(e){

                    hello(auth.network).api('/me').then(function (r) {
                        console.log(r);
                        _this.setState({
                            emailFieldValue1: r.email,
                            lastNameFieldValue: r.last_name,
                            firstNameFieldValue: r.first_name,
                            userPhoto: r.picture,
                            isRegister: true,
                            isSocialRegister: true
                        });
                    });
                    //error handling logic
                    // alert('error!!!!!!!!!!!!!!!!!!!!!!!!!!1');
                });
            }
            // else
            // {
            //     socialToken = auth.authResponse.access_token;
            //    //alert('socialToken5');
            //
            //     authenticate(auth.network, socialToken).then(function (token) {
            //         serverToken = token;
            //
            //         window.localStorage.setItem("token", token);
            //
            //         console.log('serverToken', serverToken);
            //
            //         window.location.href = "http://localhost:8899/";
            //     });
            // }
            // Call user information, for the given network
//             hello(auth.network).api('/me').then(function (r) {
//
//                 // Inject it into the container
// //                   //alert('socialToken1');
// //                 var label = document.getElementById('profile_' + auth.network);
// // //                   //alert('socialToken2');
// //                 if (!label) {
// //                     label = document.createElement('div');
// //                     label.id = 'profile_' + auth.network;
// //                     document.getElementsByTagName("BODY")[0].appendChild(label);
// //                 }
// // //                   //alert('socialToken3');
// //                 label.innerHTML = '<img src="' + r.thumbnail + '" /> Hey ' + r.name;
// //                   //alert('socialToken4');
//                 // Save the social token
//                 socialToken = auth.authResponse.access_token;
//                 console.log('socialToken', socialToken);
//                //alert('socialToken5');
//                 // Auth with our own server using the social token
//                 authenticate(auth.network, socialToken).then(function (token) {
//                     serverToken = token;
//
//                     window.localStorage.setItem("token", token);
//
//                     console.log('serverToken', serverToken);
//
//                     window.location.href = "http://localhost:8899/";
//                 });
//             });
        });


        hello.init({
            facebook: '1608771039167400',
            windows: '',
            google: '339582927777-7r3a123o6btq5ojqpoho4nghgi9bg2q7.apps.googleusercontent.com'
        }, {
            redirect_uri: '/auth/callback',
            scope: 'friends'
        });

        function authenticate(network, socialToken) {
              //alert('/login');
            return new Promise(function (resolve, reject) {

                superagent
                    .post(SiteURL.url + 'socialLogin')
                    .send({
                        network: network,
                        socialToken: socialToken
                    })
                    .set('Accept', 'application/json')
                    .end(function(err, res){
                        if (err) {
                            console.log('error: ' , err);
                            console.log('response: ' , res);

                            // alert(err);
                            reject(err);
                        } else {
                            console.log('response: ' , res);
                            resolve(res.text);
                        }
                    });
            });
        }
    },
    changeDrawerState: function() {

    },
    checkAuth: function() {
        fetch("http://localhost:8888/api/serere",
            {
                method: 'GET',
                headers: {
                    // 'Content-Types': 	'application/json',
                    // 'X-Access-Token': JSON.parse( window.localStorage.getItem('token')).token
                    'Authorization': JSON.parse( window.localStorage.getItem('token')).token
                    // 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                    // 'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1JFR0lTVEVSRUQiLCJST0xFX1VTRVIiXSwiaWQiOiIyIiwiZW1haWwiOiJhdml5YW9tZXNpQGdtYWlsLmNvbSIsImVuYWJsZWQiOnRydWUsImV4cCI6MTUwODMzNDM0M30.O9ZLiqjZXWsefFPfmFx6zll3Vcc0MYnoYpxI9-c6GHM'
                }
            })
            .then((response) => {

                if (response.status == 500) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);

                    response.json().then((data)=>{
                        console.log(data);
                        //alert("message: " + data.message + "    code: " + data.code);
                    });

                    return;
                }

                response.json().then((data)=>{
                    console.log("sererererererererrererererer" ,data);
                    ////alert("message: " + data.message + "    code: " + data.code);
                });

            })
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });

        ////alert(JSON.parse( window.localStorage.getItem('token')).token);
    },
    signIn: function() {

        // this.checkAuth();

        var cred = {
            email: this.state.emailFieldValue,
            password: this.state.passwordFieldValue
        };
        var _this = this;
        authenticate(cred).then(function (token) {
            //TODO add dialog window if error
            console.log("thennnnnnnnn");
            var serverToken = token;

            window.localStorage.setItem("token", token);

            // setAjaxAuthHeader();


            // _this.checkAuth();
            console.log('serverToken', JSON.parse(token).token);
            // _this.props.history.push('/home');
            _this.props.loadUser();
        });



        function authenticate(cred) {
//               //alert('/login');
            return new Promise(function (resolve, reject) {
                //alert(SiteURL.get + 'loginqqqq');
                superagent
                    .post(SiteURL.url + 'login')
                    .send(cred)
                    .set('Accept', 'application/json')
                    .end(function(err, res){
                        if (err) {
                            console.log('error: ' , err);
                            console.log('response: ' , res);

                            alert(err);
                            reject(err);
                        } else {
                            console.log('response: ' , res.text);
                            resolve(res.text);
                        }
                    });
            });
        }

    },
    register: function() {

        // this.checkAuth();

        var cred = this.state.isSocialRegister ?
        {
            email: this.state.emailFieldValue1,
            first_name: this.state.firstNameFieldValue,
            last_name: this.state.lastNameFieldValue,
            phone: this.state.phoneFieldValue,
            address: this.state.addressFieldValue,
            user_photo: this.state.userPhoto,
            isSocialRegister: true
        }
            :
        {
            email: this.state.emailFieldValue1,
            password: this.state.passwordFieldValue1,
            first_name: this.state.firstNameFieldValue,
            last_name: this.state.lastNameFieldValue,
            phone: this.state.phoneFieldValue,
            address: this.state.addressFieldValue,
            user_photo: null,
            isSocialRegister: false
        };
        var _this = this;
        register(cred).then(function (token) {
            //TODO add dialog window if error
            console.log("thennnnnnnnn");
            var serverToken = token;

            window.localStorage.setItem("token", token);



            // _this.checkAuth();
            console.log('serverToken', JSON.parse(token).token);
            // _this.props.history.push('/home');
            // window.location.href = "http://localhost:8899/";
            _this.props.loadUser();
        });



        function register(cred) {
//               //alert('/login');
            return new Promise(function (resolve, reject) {

                var urlEnd = _this.state.isSocialRegister ? 'socialRegister' :'register';
                superagent
                    .post(SiteURL.url + urlEnd)
                    .send(cred)
                    .set('Accept', 'application/json')
                    .end(function(err, res){
                        if (err) {
                            console.log('error: ' , err);
                            console.log('response: ' , res);

                            //alert('Error!');
                            reject(err);
                        } else {
                            console.log('response: ' , res.text);
                            resolve(res.text);
                        }
                    });
            });
        }

    },
    openLangMenu: function() {
        if(this.state.isLangBtnPressed)
        this.setState({isLangBtnPressed: false});
        else{
            this.setState({isLangBtnPressed: true});
        }

        var _this= this;
        setTimeout(function(){_this.setState({isLangBtnPressed: false})},3000);
    },
    setlanguage: function(lang) {


            // alert(lang);
            setlanguage(lang,this);
            // window.localStorage.setItem("lang", lang);
            this.setState({isLangBtnPressed: false});
            // this.props.history.push('/settings');
            // this.forceUpdate();

    },
    componentDidUpdate: function(){
        // alert('componentDidUpdate');
        // this.state.isRegister ? setTimeout(() => {this.setState({hideLogin: 'none'})},0) : null;
    },
    render: function() {

        const LangBtnsArray = () => (
         <div>
             {window.strings.getAvailableLanguages().map((lang, index) => {
                return <FlatButton  label={lang} primary={true} onTouchTap={(e) => {e.preventDefault(); this.setlanguage(lang)}}/>
            })}
        </div>
        );


        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={this.props.isDrawerDocked ? window.strings.css.pushContent :null}>


                    {this.state.isRegister ?
                        <div style={{position: 'fixed', width: '100%', zIndex: 12, background: muiTheme.palette.canvasColor}}>
                            <a style={{zIndex: 2, position: 'fixed',right: 0, margin: 20, fontSize: '30px', cursor:'pointer'}} onTouchTap={(e)=>{e.preventDefault(); this.setState({isRegister : false})}}>x</a>
                            <ListItem
                                style={{height: 80,display: 'flex', justifyContent: 'center'}}
                                disabled={true}
                            >

                                <b style={{marginTop:60, fontSize: '30px'}}>{window.strings.loginPage.registerTitle}</b>



                            </ListItem>
                            <ListItem
                                style={{height: 30,display: 'flex', justifyContent: 'center'}}
                                disabled={true}
                            >
                                <TextField
                                    style={{width: '300px', maxWidth:'85%', margin: 'auto 0'}}
                                    floatingLabelText={window.strings.loginPage.email}
                                    value={this.state.emailFieldValue1}
                                    onChange={this._handleEmail1FieldChange}
                                />
                            </ListItem>
                            {this.state.isSocialRegister ? <br/> : <ListItem
                                style={{height: 30,display: 'flex', justifyContent: 'center'}}
                                disabled={true}
                            >
                                <TextField
                                    style={{width: '300px', maxWidth:'85%', margin: 'auto 0'}}
                                    floatingLabelText={window.strings.loginPage.password}
                                    value={this.state.passwordFieldValue1}
                                    onChange={this._handlePassword1FieldChange}
                                    type="password"
                                /></ListItem>}
                            <ListItem
                                style={{height: 30,display: 'flex', justifyContent: 'center'}}
                                disabled={true}
                            >
                                <TextField
                                    style={{width: '300px', maxWidth:'85%', margin: 'auto 0'}}
                                    floatingLabelText={window.strings.loginPage.firstName}
                                    value={this.state.firstNameFieldValue}
                                    onChange={this._handleFirstNameFieldChange}

                                />
                            </ListItem>
                            <ListItem
                                style={{height: 30,display: 'flex', justifyContent: 'center'}}
                                disabled={true}
                            >
                                <TextField
                                    style={{width: '300px', maxWidth:'85%', margin: 'auto 0'}}
                                    floatingLabelText={window.strings.loginPage.lastName}
                                    value={this.state.lastNameFieldValue}
                                    onChange={this._handleLastNameFieldChange}
                                /></ListItem>
                            <ListItem
                                style={{height: 30,display: 'flex', justifyContent: 'center'}}
                                disabled={true}
                            >
                                <TextField
                                    style={{width: '300px', maxWidth:'85%', margin: 'auto 0'}}
                                    floatingLabelText={window.strings.loginPage.phone}
                                    value={this.state.phoneFieldValue}
                                    onChange={this._handlePhoneFieldChange}

                                />
                            </ListItem>
                            <ListItem
                                style={{height: 55,display: 'flex', justifyContent: 'center'}}
                                disabled={true}
                            >
                                <TextField
                                    style={{width: '300px', maxWidth:'85%', margin: 'auto 0'}}
                                    floatingLabelText={window.strings.loginPage.address}
                                    value={this.state.addressFieldValue}
                                    onChange={this._handleAddressFieldChange}
                                /></ListItem>
                            <ListItem
                                style={{height: 35,display: 'flex', justifyContent: 'center'}}
                                disabled={true}
                            >


                                <RaisedButton
                                    label={<a style={{color:'white'}}>{window.strings.submit}</a>}
                                    style={{width:300, height:50}}
                                    backgroundColor= "#737171"
                                    onTouchTap={(e)=>{e.preventDefault(); this.register();}}
                                />
                            </ListItem>

                        </div> : null}

                    <div style={css.container}>
                        <ListItem
                            style={{height: 80,display: 'flex', justifyContent: 'center'}}
                            disabled={true}
                        >
                            <b style={{marginTop:60, fontSize: '30px'}}>{window.strings.loginPage.loginTitle}</b>


                        </ListItem><ListItem
                        style={{height: 30,display: 'flex', justifyContent: 'center'}}
                        disabled={true}
                    >
                        <TextField
                            style={{width: '300px', maxWidth:'85%', margin: 'auto 0'}}
                            floatingLabelText={window.strings.loginPage.email}
                            value={this.state.emailFieldValue}
                            onChange={this._handleEmailFieldChange}

                        />
                    </ListItem>
                        <ListItem
                            style={{height: 55,display: 'flex', justifyContent: 'center'}}
                            disabled={true}
                        >
                            <TextField
                                style={{width: '300px', maxWidth:'85%', margin: 'auto 0'}}
                                floatingLabelText={window.strings.loginPage.password}
                                value={this.state.passwordFieldValue}
                                onChange={this._handlePasswordFieldChange}
                                type="password"
                                onKeyPress={(ev) => {
                                           console.log(`Pressed keyCode ${ev.key}`);
                                           if (ev.key === 'Enter') {
                                           // Do code here
                                           //TODO enter key listener
                                           this.signIn();
                                           ev.preventDefault();
                                           }
                                           }}
                            /></ListItem>
                        <ListItem
                            style={{height: 35,display: 'flex', justifyContent: 'center'}}
                            disabled={true}
                        >


                            <RaisedButton
                                label={<a style={{color:'white'}}>{window.strings.loginPage.signInButton}</a>}
                                style={{width:300, height:50}}
                                backgroundColor= "#737171"
                                onTouchTap={(e)=>{e.preventDefault(); this.signIn();}}
                            />
                        </ListItem>
                        <ListItem
                            style={{height: 15,margin:'0 auto',width: 300}}
                            disabled={true}
                        >
                            <div style={{display: 'flex', justifyContent: 'space-between', color: 'cadetblue'}}>
                                <a>{window.strings.loginPage.regQuestion} </a><a style={{color:'grey', cursor: 'pointer', textDecoration: 'underline'}} onTouchTap={(e)=>{e.preventDefault(); this.setState({isRegister : true, email1FieldValue: '', passwordFieldValue: '',})}}>{window.strings.loginPage.registerUrl}</a>
                            </div>
                        </ListItem>
                        <div
                            style={{margin:'0 auto',width: 359, color: muiTheme.palette.textColor}}
                        >
                            <div style={{display:'flex',justifyContent:'space-between',width: 359}}>
                                <hr style={{height: '1px', width: '142px', border: 'none', backgroundColor: 'rgb(224, 224, 224)'}}/><b>{window.strings.loginPage.or}</b><hr style={{height: '1px', width: '142px', border: 'none', backgroundColor: 'rgb(224, 224, 224)'}}/></div>
                        </div>
                        <ListItem
                            style={{height: 35,display: 'flex', justifyContent: 'center'}}
                            disabled={true}
                        >


                            <RaisedButton
                                label={<a style={{color:'white'}}>{window.strings.loginPage.loginFacebook}</a>}
                                labelPosition="before"
                                icon={<FacebookButton style={styles.facebookLogin}/>}
                                style={{width:300, height:50}}
                                backgroundColor= "#3b5998"
                                onTouchTap={(e)=>{ e.preventDefault();  hello.login('facebook',{display:'popup'});}}
                            />

                        </ListItem>
                        <ListItem
                            style={{height: 35,display: 'flex', justifyContent: 'center'}}
                            disabled={true}
                        >
                            <RaisedButton
                                label={<a style={{color:'white', marginRight: '8px'}}>{window.strings.loginPage.loginGoogle}</a>}
                                labelPosition="before"
                                icon={<ActionAndroid color={'white'} />}
                                style={{width:300, height:50,color:'white'}}
                                backgroundColor= "#db4437"
                                color="white"
                                onTouchTap={(e)=>{ e.preventDefault(); hello.login('google',{display:'popup'})}}

                            /></ListItem>
                        <ListItem
                            style={{height: 80, display: 'flex', justifyContent: 'center'}}
                            disabled={true}/>
                        <div  style={css.footer} >
                            <FlatButton  label={this.state.isLangBtnPressed ? 'language:':'language'} primary={true} onTouchTap={(e) => {e.preventDefault();  this.openLangMenu()}}/>
                            {this.state.isLangBtnPressed ? <LangBtnsArray/> : null}
                        </div>

                    </div>


                </div>
            </MuiThemeProvider>
        );
    }

});

export default LoginPage;



var css = {
    container: {
        position: 'relative',
        minHeight: '100vh',
        height: 'auto',
        transition: 'display 2s'
   },
    footer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        display: 'flex',
        color: '#333',
        padding: '1rem', backgroundColor: '#efefef'

    }};