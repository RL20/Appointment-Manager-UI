import moment from 'moment';

var defaults = require('superagent-defaults');

// Create a defaults context
var superagent = defaults();

function setlanguage(lang, _this){
    window.strings.setLanguage(lang);
    window.localStorage.setItem("lang", lang);
    // this.props.history.push('/settings');
    if(window.strings.isRTL){
        // moment.locale(lang);
        document.querySelector('body').dir = "rtl";
    }
    else document.querySelector('body').dir = "auto";
    _this.forceUpdate();
}
function setAjaxAuthHeader(){
    try {
        var token = JSON.parse(window.localStorage.getItem('token')).token;

// Setup some defaults

        superagent
            .set({'Accept': 'application/json', 'Authorization': token})
            .on('request', function (req) {
                console.log(req.url);
            });
    }
    catch(e)
    {
        superagent
            .set({'Accept': 'application/json'})
            .on('request', function (req) {
                console.log(req.url);
            });
    }
}

exports.superagent = superagent;
exports.setAjaxAuthHeader = setAjaxAuthHeader;
exports.setlanguage = setlanguage;