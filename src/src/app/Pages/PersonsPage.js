import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import EmpAndCustPage from '../EmpAndCustPage';
import {white} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';
import SiteURL from '../site-url';
import {styles, style, icons, muiTheme, muiThemeWhite} from '../Styles';
import {superagent} from '../SuperAgent';
import FloatingButton from '../FloatingButton';
import {Card} from 'material-ui/Card';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import UpIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import DownIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import CallIcon from 'material-ui/svg-icons/communication/call';
import TextIcon from 'material-ui/svg-icons/communication/textsms';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import AppointmentsIcon from 'material-ui/svg-icons/notification/event-note';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ReactUploadFile from '../uploadFile';
import isMobile from '../IsMobile';
import AbsenceIcon from 'material-ui/svg-icons/notification/event-busy';
import CircularProgress from 'material-ui/CircularProgress';








var PersonsPage = React.createClass({

    getInitialState: function() {
        return {
            showResults: false,
            searchBtnPressed: false,
            showEmployee: false,
            empName : null,
            empId : null,
            searchText: null,
            allPersonsList: [],
            personList: [],
            obj: null,
            editUser: false,
            isLoading: true
        };
    },
    componentWillReceiveProps(nextProps){
        if (this.props.personType !== nextProps.personType) {
            this.loadList();
        }



        // this.loadList();
        // this.forceUpdate();
        if(this.state.showEmployee)
            this.setState({showEmployee: false});
    },
    togglePerson(bool){

        console.log(bool);
        if(bool !== undefined)
        {
            this.setState({showEmployee: bool});
        }
        else this.setState({showEmployee: !this.state.showEmployee});
    },
    componentWillMount: function() {

        this.loadList();

        // this.setState({personList:[]},this.loadList());

    },
    componentDidMount: function() {
        console.log("window.strings",window.strings.personsPage.title);
        document.addEventListener('click', this.handleClick, false);
        // muiTheme.appBar.color = cyan500;
        // muiTheme.appBar.textColor = white;
        // this.loadList();
    },
    loadList: function() {
        this.setState({personList:[],allPersonsList : []},()=>{
            var personList=[];
            var urlEnd = this.props.personType == 'Employee' ? 'showEmployees': 'showCustomers';
            console.log("url: ",urlEnd);

            var _this = this;
            superagent
                .get(SiteURL.get + urlEnd)
                .end(function(err, res){
                    if (err) {
                        console.log('error: ' , err);
                        console.log('response: ' , res);

                        _this.setState({personList : []});
                        _this.setState({allPersonsList : []});

                        //alert('Error!');
                        // reject(err);
                    } else {
                        console.log('response: ' , res);
                        var data = JSON.parse(res.text);
                        _this.setState({
                            personList : data,
                            allPersonsList : data
                        },() => _this.refs.EmpAndCustPage.forceUpdate());
                        //TODO fix reload component problem
                        // _this.setState({allPersonsList : data});
                        // resolve(res.text);
                    }
                });
        });

    },
    handleClick: function (event) {
        // const domNode = ReactDOM.findDOMNode(this);
        // if (event.target.parents('div#qwer').length) {
        //    //alert('Your clicked element is having div#hello as parent');
        // }
        // if (!event.target.className == 'qwer') {
        //    //alert("outside");
        // }
        ////alert(event.target.className);

        const domNode = document.getElementById("EABS");
        // const domNode = ReactDOM.findDOMNode(this).child.getAttribute("pppppoo");

        if ((!domNode || !domNode.contains(event.target))) {
            // this.setState({
            //     visible : false
            // });
            // console.log("click outside");
            if(this.state.searchBtnPressed){
                // muiTheme.appBar.color = cyan500;
                // muiTheme.appBar.textColor = white;
                this.setState({ searchBtnPressed: false });
            }

        }
        // else
        // {
        //     console.log("skdfhgsdkfjksdfjskjfhkjfhksjfhskj");
        // }
    },
    handleAAPCircleClick: function() {
        // alert(this.props.personType.toLowerCase());
        // this.props.history.push('/setnew' + this.props.personType.toLowerCase());
        this.setState({
            obj: null,
            editUser: true,
            showEmployee: true
        });

        if(this.state.searchBtnPressed){
            // muiTheme.appBar.color = cyan500;
            // muiTheme.appBar.textColor = white;
            this.setState({ searchBtnPressed: false });
        }
    },
    componentWillUnmount: function(){
        ////alert('unmount');
        document.removeEventListener('click', this.handleClick, false);
        // muiTheme.appBar.color = cyan500;
        // muiTheme.appBar.textColor = white;
        this.setState({ searchBtnPressed: false });
    },
    handleCardClick: function(obj) {
        this.setState({
            editUser: false,
            showEmployee: true,
            empName : obj.name,
            empId: obj.id,
            obj: obj
        });


        if(this.state.searchBtnPressed){
            // muiTheme.appBar.color = cyan500;
            // muiTheme.appBar.textColor = white;
            this.setState({ searchBtnPressed: false });
        }


    },
    onClick: function() {
        // this.setState({ showResults: !this.state.showResults });
        // AppBarColor = "white";
        ////alert();
        // this.refs.searchInput.focus();

        if(this.state.searchBtnPressed){
            // muiTheme.appBar.color = cyan500;
            // muiTheme.appBar.textColor = white;
        }
        else{
            // muiTheme.appBar.color = white;
            // muiTheme.appBar.textColor = grey900;
        }
        this.setState({ searchBtnPressed: !this.state.searchBtnPressed });

        setTimeout(()=>{ document.querySelector('.searchInput input').focus(); }, 500);

    },
    setfocus:function() {
        setTimeout(()=>{ document.querySelector('.searchInput input').focus(); }, 500);
    },
    emptySearchBar: function() {
        this.setState({ searchText: ""});
    },
    onSearchBarChange: function() {
        var list = [];
        this.setState({personList:[]});
        for(var i = 0; i < this.state.allPersonsList.length; i++){

            if(this.state.allPersonsList[i].Name.includes(this.state.searchText)) this.state.personList.push(this.state.allPersonsList[i]);
        }
    },
    render: function() {
        const EmployeesAppBar = () => (
            <AppBar
                 titleStyle={this.props.isDrawerDocked ? styles.appbarTitle : styles.appbarTitleOpenedDrawer}
                 style={styles.appbar}
                 iconStyleLeft={styles.appbarIconStyle}
                 iconStyleRight={styles.appbarIconStyle}
                 title={this.props.personType == 'Customer' ? window.strings.personsPage.appbar.title.customer : window.strings.personsPage.appbar.title.employee}
                 // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                 onLeftIconButtonTouchTap={this.props.openDrawer}
                 iconElementRight={
               <IconButton onTouchTap={ (e) => {/*e.preventDefault();*/ this.onClick();}}><SearchIcon /></IconButton>
                }
            />
        );
        const EmployeesAppBarSearch = () => (
            <AppBar
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle : styles.appbarTitleOpenedDrawer}
                style={{position:'fixed', backgroundColor: 'white'}}
                iconStyleLeft={styles.appbarIconStyle}
                iconStyleRight={styles.appbarIconStyle}
                title={<div ><TextField className="searchInput" underlineShow={false}  style={{marginLeft:'8%',width: '100%',fontSize:23}}  hintStyle={{color: 'grey'}} inputStyle={{color: 'black'}} hintText={window.strings.personsPage.appbar.title.search} onChange={this.refs.EmpAndCustPage.filterList} /></div>}
                iconElementLeft={<IconButton><window.strings.css.iconBack color={'#303031'}/></IconButton>}
                onLeftIconButtonTouchTap={(e) => {this.onClick();}}
                id="EABS"
                iconElementRight={
               <IconButton onTouchTap={ (e) => {e.preventDefault(); this.emptySearchBar(); this.setfocus();}}><CloseIcon color={'#303031'}/></IconButton>
                }
            />
        );
        const loadingCircle = [
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: 150}}>
                <CircularProgress size={80} thickness={5} />
            </div>
        ];
        const listIsEmpty = [
            <p style={styles.p}>{window.strings.appointmentsPage.listIsEmpty}</p>
        ];
        return (
            <MuiThemeProvider muiTheme={muiTheme}><div>
                {this.state.searchBtnPressed ? <EmployeesAppBarSearch /> : <EmployeesAppBar/>}
                <div style={this.props.isDrawerDocked ? window.strings.css.pushContent : null}>

                    <div>

                        { (this.state.personList === undefined || this.state.personList.length == 0) ?  (this.state.isLoading ? loadingCircle : listIsEmpty):

                            <EmpAndCustPage ref="EmpAndCustPage" personList={this.state.personList} personType={this.props.personType} handleCardClick={(obj) => {this.handleCardClick(obj);}} />
                        }

                            <FloatingButton circleIcon={true} handleAAPCircleClick={this.handleAAPCircleClick}/>


                        </div>
                    {this.state.showEmployee ?
                        <EmployeePage component={PersonShowAndEdit} ToolsBarComponent={ToolsBar} editUser={this.state.editUser} isNew={this.state.editUser} togglePerson={this.togglePerson} history={this.props.history} personType={this.props.personType} isDrawerDocked={this.props.isDrawerDocked} goBacck={() => this.setState({ showEmployee: false})} obj={this.state.obj} name={this.state.empName} id={this.state.empId}/>
                        : null}
                    </div></div>
            </MuiThemeProvider>
        );
    }
});


var EmployeePage = React.createClass({

    getInitialState: function() {
        return {
            showResults: false,
            showEmployee: false,
            editObj: this.props.editUser,
            empName : null,
            empId : null,
            phone: '',
            email: '',
            toolsBar: true
        };
    },
    componentDidMount: function() {

        var _this = this;
        setTimeout(function() {
            document.addEventListener('click', _this.checkClickPos, false);
        },500);

    },
    componentWillUnmount: function(){
        ////alert('unmount');
        document.removeEventListener('click', this.checkClickPos, false);
        // muiTheme.appBar.color = cyan500;
        // muiTheme.appBar.textColor = white;
        // this.setState({ searchBtnPressed: false });
    },
    checkClickPos: function (event) {
        event.stopPropagation();
        event.preventDefault();
        // const domNode = ReactDOM.findDOMNode(this);
        // if (event.target.parents('div#qwer').length) {
        //    //alert('Your clicked element is having div#hello as parent');
        // }
        // if (!event.target.className == 'qwer') {
        //    //alert("outside");
        // }
        ////alert(event.target.className);

        const domNode = document.getElementById("personPopUp");
        // const domNode = ReactDOM.findDOMNode(this).child.getAttribute("pppppoo");

        if ((!domNode || !domNode.contains(event.target))) {
            // this.setState({
            //     visible : false
            // });
            // console.log("click outside");
            // alert();
            // var rightclick;
            // var e = event;
            // if (e.which) rightclick = (e.which == 3);
            // else if (e.button) rightclick = (e.button == 2);
            // alert('Rightclick: ' + rightclick);

            if(!this.state.editObj)
            {

            this.props.togglePerson(false);
            }
            else{
                if(confirm("Are you sure you want to cancel editing?") == true)
                {
                    this.props.togglePerson(false);
                }
            }

        }
        // else
        // {
        //     console.log("skdfhgsdkfjksdfjskjfhkjfhksjfhskj");
        // }
    },
    handleAAPCircleClick: function() {

    },
    handleCardClick: function(name,id) {
        ////alert(name + "    " + id);

        // if(this.state.showEmployee){
        //     this.setState({ showEmployee: false });
        // }
        // else {
        //     this.setState({ showEmployee: true,
        //                     empName : name,
        //                     empId: id
        //     });
        // }
    },
    navigateBack: function(){
        this.props.goBacck();
        // window.history.back();
        // this.goBack();
    },
    onClick: function() {
        // this.setState({ showResults: !this.state.showResults });

    },
    // showAppointments: function() {
    //    //alert("showAppointments");
    //     this.props.history.push('/employeeabsence');
    //
    // },
    // showAbsences: function() {
    //    //alert("showAbsences");
    //     this.props.history.push('/employeeappointments');
    //
    // },
    cancelEdit: function() {
        this.setState({  editPerson: false });

    },
    componentWillMount : function () {
        // if(this.props.editObj){
        //     // alert();
        //     this.setState({editObj: true});
        //
        // }
        // var urlEnd = this.props.personType == 'Employee' ? 'showEmployee': 'showCustomer';
        // console.log("url: ",urlEnd);
        // console.log('empId', this.props.id);
        // var payload = {
        //     employeeId: this.props.id
        // };
        //
        // fetch(SiteURL.get + urlEnd,
        //     {
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         method: "POST",
        //         body: JSON.stringify( payload )
        //     })
        //     .then((response) => {
        //             if (response.status !== 201) {
        //                 console.log('Looks like there was a problem. Status Code: ' +
        //                     response.status);
        //                 return;
        //             }
        //
        //             // console.log(response.json());
        //             // Examine the text in the response
        //
        //             response.json().then((data)  => {
        //                 console.log(data);
        //                 this.setState({
        //                     phone : data.Phone,
        //                     email : data.Email
        //                 });
        //             });
        //         }
        //     )
        //     .catch(function(err) {
        //         console.log('Fetch Error :-S', err);
        //     });

    },
    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render

        if (nextProps.editObj !== this.state.editObj) {
            this.setState({ editObj: nextProps.editObj });
            // nextProps.editObj ? document.addEventListener('click', this.handleClick, false) : document.removeEventListener('click', this.handleClick, false);

        }
    },
    setEditObj: function(val) {

        console.log(val);
        this.setState({editObj: val});
    },
    updateEditObj: function() {

        // console.log(val);
        // this.setState({editObj: val});
        var obj = this.refs.editableComponent.getObj();
        // alert(JSON.stringify(obj));
        this.setState({obj: obj},this.props.updateEditObj(obj));
    },
    render: function() {

        // const bottomCard1 = () => {
        //    return {
        //         position: 'fixed',
        //         width: this.props.isDrawerDocked? '86%':'100%',
        //         bottom: 0
        //     }
        // };
        // const bottomCard2 = () => {
        //    return {
        //            position: 'fixed',
        //            width: this.props.isDrawerDocked? '86%':'100%',
        //            bottom: 0,
        //            height: '37px'
        //     }
        // };

        const style = {

            bottomCard1: {
                position: 'fixed',
                width: this.props.isDrawerDocked? '86%':'100%',
                bottom: 0,
                zIndex: 1099

            },
            bottomCard2: {
                position: 'fixed',
                width: this.props.isDrawerDocked? '86%':'100%',
                bottom: 0,
                height: '37px'
            }};
        const EmployeesAppBar = () => (
            <AppBar
                 titleStyle={this.props.isDrawerDocked ? styles.appbarTitle : styles.appbarTitleOpenedDrawer}
                 style={styles.appbar}
                 iconStyleLeft={styles.appbarIconStyle}
                 iconStyleRight={styles.appbarIconStyle}
                 title={"Employees"}
                 iconElementLeft={<IconButton><ArrowBackIcon /></IconButton>}
                 onLeftIconButtonTouchTap={this.navigateBack}
            />
        );
        return (

                        <div style={style.bottomCard1}>
                            <Card id='personPopUp' zDepth={this.props.isUserProfile ? 0 : 5} style={{height: isMobile.any() ? '90vh' : '67vh', width: 438, maxWidth: '100%', float: 'none', margin: '0 auto'}}>
                                <ListItem disabled={true} innerDivStyle={{ padding: '0px 9px 0px 9px'}}><div style={{display:'flex',justifyContent: 'flex-end'}}>{this.props.isUserProfile ? null : <IconButton onTouchTap={(e)=>{e.preventDefault(); this.props.togglePerson()}}><CloseIcon/></IconButton>}</div></ListItem>
                                <hr style={{width: '90%', margin: '-1px auto',border: 'none', height: '1px', backgroundColor: 'rgb(224, 224, 224)'}}/>


                                <ListItem
                                style={{padding:0}}
                                disabled={true}
                            >
                                    <this.props.component ref="editableComponent" isDrawerDocked={this.props.isDrawerDocked} isNew={this.props.isNew} editUser={this.state.editObj} obj={this.props.obj} personType={this.props.personType} pushEdit={this.pushEdit} cancelEdit={this.cancelEdit}/>
                                    {!this.state.editObj ?
                                        (this.props.ToolsBarComponent ?   <this.props.ToolsBarComponent setEditObj={this.setEditObj} /> : null):    <FloatingButton isSubmitBtn={true} circleIcon={true} handleAAPCircleClick={this.updateEditObj}/>
                                    }
                            </ListItem></Card></div>
        );
    }
});


var PersonShowAndEdit = React.createClass({
    getInitialState: function() {
        console.log("PersonShowAndEdit");
        console.log(this.props.obj);

        if(this.props.obj == null) return {
            showResults: false,
            editUser: false,
            phone: '',
            email: '',
            name: '',
            address: '',
            hover: false,
            newPhone: '',
            newEmail: '',
            newName: '',
            newAddress: '',
            newUserPhoto: '',
            userPhoto: ''
        };
        return {
            showResults: false,
            editUser: false,
            phone: this.props.obj.phone,
            email:this.props.obj.email,
            name: this.props.obj.name,
            address: this.props.obj.address,
            hover: false,
            newPhone: '',
            newEmail: '',
            newName: '',
            newAddress: '',
            newUserPhoto: '',
            userPhoto: this.props.obj.userPhoto
        };
    },
    getObj: function() {
        return {
            phone: this.state.newPhone,
            email: this.state.newEmail,
            name: this.state.newName,
            address: this.state.newAddress,
            userPhoto: this.state.newUserPhoto};
    },
    componentWillMount: function() {

        // phone: this.props.obj.phone,
        //     email:this.props.obj.email,
        //     name: this.props.obj.name,
        //     address: this.props.obj.address,
        if(!this.props.isNew)
        {
            this.setState({
                newPhone: this.props.obj.phone,
                newEmail: this.props.obj.email,
                newName: this.props.obj.name,
                newAddress: this.props.personType == 'Employee' ? null : this.props.obj.address
            });
        }
    },
    _handleNameTextFieldChange: function(e) {
        this.setState({
            newName: e.target.value
        });
    },
    _handlePhoneTextFieldChange: function(e) {
        this.setState({
            newPhone: e.target.value
        });
    },
    _handleEmailTextFieldChange: function(e) {
        this.setState({
            newEmail: e.target.value
        });
    },
    _handleAddressTextFieldChange: function(e) {
        this.setState({
            newAddress: e.target.value
        });
    },
    pushEdit: function() {
        var personObj = Object.assign({}, this.props.obj);


        personObj.name = this.state.newName;
        personObj.phone = this.state.newPhone;
        personObj.email = this.state.newEmail;
        personObj.address = this.state.newAddress;


        this.props.pushEdit(personObj)
    },
    onMouseEnterHandler: function() {
        this.setState({
            hover: true
        });
        console.log('enter');
    },
    onMouseLeaveHandler: function() {
        this.setState({
            hover: false
        });
        console.log('leave');
    },
    render: function() {


        return (
            <div style={{width: this.props.isDrawerDocked? '100% - 125px':'100%' , float: 'none',margin: '0 auto'}}>
                <ListItem
                    style={{display:'flex',justifyContent: 'center'}}
                    disabled={true}
                >
                    {this.props.editUser ?
                        <div
                            onMouseEnter={this.onMouseEnterHandler}
                            onMouseLeave={this.onMouseLeaveHandler}
                            className=""
                            style={{
                                        backgroundImage:'url(' + (this.state.userPhoto == undefined ? SiteURL.url + 'Assets/user-photo-stub.png' : this.state.userPhoto )+ ')',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        borderRadius: '50%',
                                        marginTop: '5.2px',
                                        marginRight: '5px',
                                        marginLeft: '4.2px'
                                        }}
                        >
                            <IconButton
                                iconStyle={styles.mediumIcon1}
                                style={{
                                width: 100,
                                height: 100,
                                padding: 30,
                                borderRadius: '50%',
                                background: this.state.hover ? 'rgba(228, 228, 228, 0.74)':'none'
                                }}
                                onTouchTap={(e) => {e.preventDefault(); this.refs.UploadDialog.handleOpen()}}
                            >

                                <ContentAdd />
                            </IconButton></div>

                        :
                        <div
                            style={{
                                backgroundImage:'url(' + (this.state.userPhoto == undefined ? SiteURL.url + 'Assets/user-photo-stub.png' : this.state.userPhoto) + ')',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '50%',
                                marginTop: '5.2px',
                                marginRight: '5px',
                                marginLeft: '4.2px',
                                width: 100,
                                height: 100
                            }}
                        ></div>}

                    {this.props.isNew ?
                        <div style={{display:'block', marginTop: '28px', marginLeft: '12px'}}>
                            <a style={{padding: '0px 0px',fontSize:17}}>{window.strings.personShowAndEdit.name}</a><br/>{this.props.editUser ? null:<br/>}
                            <TextField ref="phoneTextField" style={{width: '164px'}} underlineStyle={styles.underlineStyle} value={this.state.newName} onChange={this._handleNameTextFieldChange}  /> </div>:<a style={{padding: '40px 25px',fontSize:28}}>{this.state.name}</a>}
                </ListItem><br/>
                <ListItem
                    style={{display:'flex',justifyContent: 'space-between',maxWidth: 700, float: 'none',margin: '0 auto'}}
                    disabled={true}
                >

                    <div style={{display:'block'}}>
                        <a style={{padding: '0px 0px',fontSize:17}}>{window.strings.personShowAndEdit.phone}</a><br/>{this.props.editUser ? null:<br/>}
                        {this.props.editUser ? <TextField ref="phoneTextField" style={{width: '164px'}} underlineStyle={styles.underlineStyle} value={this.state.newPhone} onChange={this._handlePhoneTextFieldChange}  />
                            :<a style={{color:'grey', textDecoration:'underline', cursor: 'pointer', padding: '0px 0px',fontSize:16}}>{this.state.phone}</a>}
                    </div>


                    <div style={{display:'block',marginRight: '10px'}}>
                        <a style={{padding: '0px 8px',fontSize:17}}>{window.strings.personShowAndEdit.email}</a><br/>{this.props.editUser ? null:<br/>}
                        {this.props.editUser ? <TextField ref="emailTextField" style={{width: '157px',paddingLeft: '8px'}} underlineStyle={styles.underlineStyle} value={this.state.newEmail} onChange={this._handleEmailTextFieldChange}  />
                            :<a style={{color:'grey', textDecoration:'underline', cursor: 'pointer', padding: '0px 8px',fontSize:17}}>{this.state.email}</a>}
                    </div>
                </ListItem>
                <ListItem
                    style={{display:'flex',justifyContent: 'flex-start',maxWidth: 700, float: 'none',margin: '0 auto'}}
                    disabled={true}
                >

                    <div style={{display:'block'}}>
                        <a style={{padding: '0px 0px',fontSize:17}}>{window.strings.personShowAndEdit.address}</a><br/>{this.props.editUser ? null:<br/>}
                        {this.props.editUser ? <TextField ref="phoneTextField" style={{width: '164px'}} underlineStyle={styles.underlineStyle} value={this.state.newAddress} onChange={this._handleAddressTextFieldChange}   />
                            :<a style={{color:'grey', padding: '0px 0px',fontSize:16}}>{this.state.address}</a>}
                    </div>

                </ListItem>

                <div  style={{padding: '0 7px', maxWidth: 750, float: 'none',margin: '0 auto'}}>
                    <br/>
                    {this.props.editUser ? <Divider style={{backgroundColor: '#bdbdbd'}}/>:null}
                    <br/>
                </div>
                <div  style={{padding: '0 7px', maxWidth: 700, float: 'none',margin: '0 auto',display: 'flex',justifyContent: 'flex-end'}}>
                </div>
                <br/>
                <ReactUploadFile ref="UploadDialog" />
            </div>
        );
    }
});

var ToolsBar = React.createClass({
    getInitialState: function() {
        return {
            toolsBar: true,
            editObj: false
        };
    },
    render: function() {


        return (
            <div style={{backgroundColor: 'white', display: 'flex', justifyContent: 'center'}}>
                <div style={{width: '-webkit-fill-avaixlable', display: 'flex', overflowY: 'hidden', position: 'fixed', bottom: 0, zIndex: 1}}>

                    { isMobile.any() ?  <IconButton iconStyle={icons.mediumIcon}
                                                    style={icons.small}>
                        <CallIcon/>
                        <a style={{height:'none'}}>Call</a>
                    </IconButton> : null}
                    <IconButton iconStyle={icons.mediumIcon}
                                style={icons.small}>
                        <DeleteIcon/>
                        <a style={{height:'none'}}>Delete</a>
                    </IconButton>
                    <IconButton iconStyle={icons.mediumIcon}
                                style={icons.small}
                                onTouchTap={() => { this.props.setEditObj(true); this.setState({editObj: true, toolsBar: false})}}>
                        <EditIcon/>
                        <a style={{height:'none'}}>Edit</a>
                    </IconButton>



                    {isMobile.any() ? <IconButton iconStyle={icons.mediumIcon}
                                                  style={icons.small}>
                        <TextIcon/>
                        <a style={{height:'none'}}>Text</a>
                    </IconButton> : null}
                    <IconButton iconStyle={icons.mediumIcon}

                                style={icons.small}>
                        <AppointmentsIcon/>
                        <a style={{height:'none'}}>Appointments</a>
                    </IconButton>
                    <IconButton iconStyle={icons.mediumIcon}

                                style={icons.small}>
                        <AbsenceIcon/>
                        <a style={{height:'none'}}>Absence</a>
                    </IconButton></div></div>
        );
    }
});

var EmpssloyeePage = React.createClass({
    getInitialState: function() {

        return {
            showResults: false,
            showEmployee: false,
            editPerson: false,
            empName : null,
            empId : null,
            phone: '',
            email: '',
            toolsBar: true
        };
    },
    componentDidMount: function() {

    },
    handleAAPCircleClick: function() {

    },
    handleCardClick: function(name,id) {
        ////alert(name + "    " + id);

        // if(this.state.showEmployee){
        //     this.setState({ showEmployee: false });
        // }
        // else {
        //     this.setState({ showEmployee: true,
        //                     empName : name,
        //                     empId: id
        //     });
        // }
    },
    navigateBack: function(){
        this.props.goBacck();
        // window.history.back();
        // this.goBack();
    },
    onClick: function() {
        // this.setState({ showResults: !this.state.showResults });

    },
    // showAppointments: function() {
    //    //alert("showAppointments");
    //     this.props.history.push('/employeeabsence');
    //
    // },
    // showAbsences: function() {
    //    //alert("showAbsences");
    //     this.props.history.push('/employeeappointments');
    //
    // },
    cancelEdit: function() {
        this.setState({  editPerson: false });

    },
    componentWillMount : function () {
        // var urlEnd = this.props.personType == 'Employee' ? 'showEmployee': 'showCustomer';
        // console.log("url: ",urlEnd);
        // console.log('empId', this.props.id);
        // var payload = {
        //     employeeId: this.props.id
        // };
        //
        // fetch(SiteURL.get + urlEnd,
        //     {
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         method: "POST",
        //         body: JSON.stringify( payload )
        //     })
        //     .then((response) => {
        //             if (response.status !== 201) {
        //                 console.log('Looks like there was a problem. Status Code: ' +
        //                     response.status);
        //                 return;
        //             }
        //
        //             // console.log(response.json());
        //             // Examine the text in the response
        //
        //             response.json().then((data)  => {
        //                 console.log(data);
        //                 this.setState({
        //                     phone : data.Phone,
        //                     email : data.Email
        //                 });
        //             });
        //         }
        //     )
        //     .catch(function(err) {
        //         console.log('Fetch Error :-S', err);
        //     });

    },
    render: function() {

        // const bottomCard1 = () => {
        //    return {
        //         position: 'fixed',
        //         width: this.props.isDrawerDocked? '86%':'100%',
        //         bottom: 0
        //     }
        // };
        // const bottomCard2 = () => {
        //    return {
        //            position: 'fixed',
        //            width: this.props.isDrawerDocked? '86%':'100%',
        //            bottom: 0,
        //            height: '37px'
        //     }
        // };

        const style = {

            bottomCard1: {
                position: 'fixed',
                width: this.props.isDrawerDocked? '86%':'100%',
                bottom: 0
            },
            bottomCard2: {
                position: 'fixed',
                width: this.props.isDrawerDocked? '86%':'100%',
                bottom: 0,
                height: '37px'
            }};
        const EmployeesAppBar = () => (
            <AppBar
                titleStyle={this.props.isDrawerDocked ? styles.appbarTitle : styles.appbarTitleOpenedDrawer}                 style={styles.appbar}                 iconStyleLeft={styles.appbarIconStyle}                 iconStyleRight={styles.appbarIconStyle}
                title={"Employees"}
                iconElementLeft={<IconButton><ArrowBackIcon /></IconButton>}
                onLeftIconButtonTouchTap={this.navigateBack}
            />
        );
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <EmployeesAppBar/>
                    <div style={this.props.isDrawerDocked ? window.strings.css.pushContent :null}>
                        <div style={styles.toppad}></div>
                        <PersonShowAndEdit isDrawerDocked={this.props.isDrawerDocked}  editUser={this.state.editPerson} obj={this.props.obj} personType={this.props.personType} pushEdit={this.pushEdit} cancelEdit={this.cancelEdit}/>
                        <div style={this.state.toolsBar ? style.bottomCard1 : style.bottomCard2}>
                            <Card zDepth={5} style={{backgroundColor:'white', height: 100, width: 438, maxWidth: '103%', float: 'none',margin: '0 auto'}}>
                                <ListItem onTouchTap={(e)=>{e.preventDefault(); this.setState({toolsBar: !this.state.toolsBar})}}  innerDivStyle={{ padding: 0}}><div style={{display:'flex',justifyContent: 'center'}}>{this.state.toolsBar ? <DownIcon/> : <UpIcon/>}</div></ListItem>
                                <hr style={{width: '90%', margin: '-1px auto',border: 'none', height: '1px', backgroundColor: 'rgb(224, 224, 224)'}}/><ListItem
                                style={{width: 700, maxWidth: '100%',padding:0}}
                                disabled={true}
                            >

                                <div style={{width: '80vw', float: 'none',margin: '0px auto',display: 'flex', overflowY: 'hidden'}}>
                                    { isMobile.any() ?  <IconButton iconStyle={icons.mediumIcon}
                                                                    style={icons.small}>
                                        <CallIcon/>
                                        <a style={{height:'none'}}>Call</a>
                                    </IconButton> : null}
                                    <IconButton iconStyle={icons.mediumIcon}
                                                style={icons.small}>
                                        <DeleteIcon/>
                                        <a style={{height:'none'}}>Delete</a>
                                    </IconButton>
                                    <IconButton iconStyle={icons.mediumIcon}
                                                style={icons.small}
                                                onTouchTap={() => (this.setState({editPerson: true, toolsBar: false}))}>
                                        <EditIcon/>
                                        <a style={{height:'none'}}>Edit</a>
                                    </IconButton>



                                    {isMobile.any() ? <IconButton iconStyle={icons.mediumIcon}
                                                                  style={icons.small}>
                                        <TextIcon/>
                                        <a style={{height:'none'}}>Text</a>
                                    </IconButton> : null}
                                    <IconButton iconStyle={icons.mediumIcon}

                                                style={icons.small}>
                                        <AppointmentsIcon/>
                                        <a style={{height:'none'}}>Appointments</a>
                                    </IconButton>
                                    <IconButton iconStyle={icons.mediumIcon}

                                                style={icons.small}>
                                        <EditIcon/>
                                        <a style={{height:'none'}}>Absence</a>
                                    </IconButton></div>
                            </ListItem></Card></div>
                    </div></div>
            </MuiThemeProvider>
        );
    }
});

var PersonShowAndEdit1 = React.createClass({
    getInitialState: function() {

        console.log("PersonShowAndEdit");
        console.log(this.props.obj);
        return {
            showResults: false,
            editUser: false,
            phone: this.props.obj.phone,
            email:this.props.obj.email,
            name: this.props.obj.name,
            address: this.props.obj.address,
            hover: false,
            newPhone: '',
            newEmail: '',
            newName: '',
            newAddress: ''
        };
    },
    componentDidMount: function() {

        if(!this.props.isNew)
        {
            this.setState({
                newPhone: this.props.obj.phone,
                newEmail: this.props.obj.email,
                newName: this.props.obj.name,
                newAddress: this.props.personType == 'Employee' ? null : this.props.obj.address
            });
        }
    },
    _handleNameTextFieldChange: function(e) {
        this.setState({
            newName: e.target.value
        });
    },
    _handlePhoneTextFieldChange: function(e) {
        this.setState({
            newPhone: e.target.value
        });
    },
    _handleEmailTextFieldChange: function(e) {
        this.setState({
            newEmail: e.target.value
        });
    },
    _handleAddressTextFieldChange: function(e) {
        this.setState({
            newAddress: e.target.value
        });
    },
    pushEdit: function() {
        var personObj = Object.assign({}, this.props.obj);


        personObj.name = this.state.newName;
        personObj.phone = this.state.newPhone;
        personObj.email = this.state.newEmail;
        personObj.address = this.state.newAddress;


        this.props.pushEdit(personObj)
    },
    onMouseEnterHandler: function() {
        this.setState({
            hover: true
        });
        console.log('enter');
    },
    onMouseLeaveHandler: function() {
        this.setState({
            hover: false
        });
        console.log('leave');
    },
    render: function() {


        return (
            <div style={{background: '#C1D1D0', height: isMobile.any() ? '372px':'480px',position: 'fixed', width: this.props.isDrawerDocked? '86%':'100%' , float: 'none',margin: '0 auto'}}>
                <ListItem
                    style={{display:'flex',justifyContent: 'center'}}
                    disabled={true}
                >
                    {this.props.editUser ?
                        <div
                            onMouseEnter={this.onMouseEnterHandler}
                            onMouseLeave={this.onMouseLeaveHandler}
                            className=""
                            style={{
                                        backgroundImage:'url("http://www.material-ui.com/images/uxceo-128.jpg")',
                                        borderRadius: '50%',
                                        marginTop: '5.2px',
                                        marginRight: '5px',
                                        marginLeft: '4.2px',
                                        backgroundRepeat: 'round'}}
                        >
                            <IconButton
                                iconStyle={styles.mediumIcon1}
                                style={{
                                width: 100,
                                height: 100,
                                padding: 30,
                                borderRadius: '50%',
                                background: this.state.hover ? 'rgba(228, 228, 228, 0.74)':'none'
                                }}
                                onTouchTap={(e) => {e.preventDefault(); this.refs.UploadDialog.handleOpen()}}
                            >

                                <ContentAdd />
                            </IconButton></div>

                        :
                        <Avatar
                            src="http://www.material-ui.com/images/uxceo-128.jpg"
                            size={100}
                            style={style}
                        />}

                    {this.props.isNew ?
                        <div style={{display:'block', marginTop: '28px', marginLeft: '12px'}}>
                            <a style={{padding: '0px 0px',fontSize:17}}>{window.strings.personShowAndEdit.name}</a><br/>{this.props.editUser ? null:<br/>}
                            <TextField ref="phoneTextField" style={{width: '164px'}} underlineStyle={styles.underlineStyle} value={this.state.newName} onChange={this._handleNameTextFieldChange}  /> </div>:<a style={{padding: '40px 25px',fontSize:28}}>{this.state.name}</a>}
                </ListItem><br/>
                <ListItem
                    style={{display:'flex',justifyContent: 'space-between',maxWidth: 700, float: 'none',margin: '0 auto'}}
                    disabled={true}
                >

                    <div style={{display:'block'}}>
                        <a style={{padding: '0px 0px',fontSize:17}}>{window.strings.personShowAndEdit.phone}</a><br/>{this.props.editUser ? null:<br/>}
                        {this.props.editUser ? <TextField ref="phoneTextField" style={{width: '164px'}} underlineStyle={styles.underlineStyle} value={this.state.newPhone} onChange={this._handlePhoneTextFieldChange}  />
                            :<a style={{color:'blue', textDecoration:'underline', cursor: 'pointer', padding: '0px 0px',fontSize:16}}>{this.state.phone}</a>}
                    </div>


                    <div style={{display:'block',marginRight: '10px'}}>
                        <a style={{padding: '0px 8px',fontSize:17}}>{window.strings.personShowAndEdit.email}</a><br/>{this.props.editUser ? null:<br/>}
                        {this.props.editUser ? <TextField ref="emailTextField" style={{width: '157px',paddingLeft: '8px'}} underlineStyle={styles.underlineStyle} value={this.state.newEmail} onChange={this._handleEmailTextFieldChange}  />
                            :<a style={{color:'blue', textDecoration:'underline', cursor: 'pointer', padding: '0px 8px',fontSize:17}}>{this.state.email}</a>}
                    </div>
                </ListItem>
                <ListItem
                    style={{display:'flex',justifyContent: 'flex-start',maxWidth: 700, float: 'none',margin: '0 auto'}}
                    disabled={true}
                >

                    <div style={{display:'block'}}>
                        <a style={{padding: '0px 0px',fontSize:17}}>{window.strings.personShowAndEdit.address}</a><br/>{this.props.editUser ? null:<br/>}
                        {this.props.editUser ? <TextField ref="phoneTextField" style={{width: '164px'}} underlineStyle={styles.underlineStyle} value={this.state.newAddress} onChange={this._handleAddressTextFieldChange}   />
                            :<a style={{color:'blue', padding: '0px 0px',fontSize:16}}>{this.state.address}</a>}
                    </div>

                </ListItem>

                <div  style={{padding: '0 7px', maxWidth: 750, float: 'none',margin: '0 auto'}}>
                    <br/>
                    {this.props.editUser ? <Divider style={{backgroundColor: '#bdbdbd'}}/>:null}
                    <br/>
                </div>
                <div  style={{padding: '0 7px', maxWidth: 700, float: 'none',margin: '0 auto',display: 'flex',justifyContent: 'flex-end'}}>
                    {this.props.editUser ? <div><RaisedButton style={{width: '164px', marginRight: 8}} label={window.strings.cancel} onTouchTap={(e)=>{e.preventDefault(); this.props.cancelEdit()}} primary={true} /><RaisedButton onTouchTap={(e)=>{e.preventDefault(); this.pushEdit()}}  style={{width: '164px'}} label={window.strings.done} primary={true} /></div>:null}
                </div>
                <br/>
                <ReactUploadFile ref="UploadDialog" />
            </div>
        );
    }
});


exports.PersonsPage =  PersonsPage;
exports.EmployeePage =  EmployeePage;
exports.PersonShowAndEdit =  PersonShowAndEdit;
exports.default =  PersonsPage;
