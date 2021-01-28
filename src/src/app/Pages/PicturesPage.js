import React from 'react';
import {MenuItem} from 'material-ui/Menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import Pics from '../openGallery';
import {white} from 'material-ui/styles/colors';
import {styles, muiTheme} from '../Styles';
import {superagent} from '../SuperAgent';
import FloatingButton from '../FloatingButton';



var PicturesPage = React.createClass({
    getInitialState: function() {
        return {
            showResults: false,
        };
    },
    componentDidMount: function() {

    },
    onClick: function() {
        this.setState({ showResults: !this.state.showResults });
    },
    navigateBack: function(){
        window.history.back();
        // this.goBack();
    },
    render: function() {
        const PicturesAppBar = () => (
            <AppBar
                 titleStyle={this.props.isDrawerDocked ? styles.appbarTitle : styles.appbarTitleOpenedDrawer}                 style={styles.appbar}                 iconStyleLeft={styles.appbarIconStyle}                 iconStyleRight={styles.appbarIconStyle}
                title={window.strings.picturesPage.appbar.title}
                // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={this.props.openDrawer}
                iconElementRight={
               <div><IconMenu
            iconButtonElement={
          <IconButton><MoreVertIcon color={white}/></IconButton>
        }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
            <MenuItem primaryText="Sign out" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="About" />
        </IconMenu></div>
                }
            />
        );
        /*Pics is at the bottom because it messes up the FloatingButton css keep it down!*/
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <PicturesAppBar/>
                    <div style={this.props.isDrawerDocked ? window.strings.css.pushContent :null}>
                        <div style={styles.toppad}></div>
                        <div style={styles.toppad}></div>
                        <FloatingButton circleIcon={true} handleAAPCircleClick={(e) => {this.refs.UploadDialog.handleOpen()}}/>
                        <ReactUploadFile ref="UploadDialog"/>
                        <Pics superagent={superagent}/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
});

import Lightbox from '../Lightbox';
import Card from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import ShareIcon from 'material-ui/svg-icons/social/share';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

class Gallery extends React.Component{
    constructor(){
        super();
        this.state = {
            currentImage: 0,
            containerWidth: 0
        };
        this.handleResize = this.handleResize.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
    }
    componentDidMount(){
        this.setState({containerWidth: Math.floor(this._gallery.clientWidth)})
        window.addEventListener('resize', this.handleResize);
    }
    componentDidUpdate(){
        if (this._gallery.clientWidth !== this.state.containerWidth){
            this.setState({containerWidth: Math.floor(this._gallery.clientWidth)});
        }
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize, false);
    }
    handleResize(e){
        this.setState({containerWidth: Math.floor(this._gallery.clientWidth)});
    }
    openLightbox(index, event){
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true
        });
    }
    closeLightbox(){
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false
        });
    }
    gotoPrevious(){
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    deleteImage(){
        alert();
    }
    gotoNext(){
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    render(){
        var rowLimit = 2,
            photoPreviewNodes = [];
        if (this.state.containerWidth >= 480){
            rowLimit = 2;
        }
        if (this.state.containerWidth >= 1024){
            rowLimit = 3;
        }
        var contWidth = this.state.containerWidth - (rowLimit * 4); /* 4px for margin around each image*/
        contWidth = Math.floor(contWidth - 2); // add some padding to prevent layout prob
        var remainder = this.props.photos.length % rowLimit;
        if (remainder) { // there are fewer than rowLimit photos in last row
            var lastRowWidth = Math.floor(this.state.containerWidth - (remainder * 4) - 2);
            var lastRowIndex = this.props.photos.length - remainder;
        }
        var lightboxImages = [];
        for (var i=0;i<this.props.photos.length;i+=rowLimit){
            var rowItems = [];
            // loop thru each set of rowLimit num
            // eg. if rowLimit is 3 it will  loop thru 0,1,2, then 3,4,5 to perform calculations for the particular set
            var aspectRatio=0,
                totalAr=0,
                commonHeight = 0;
            for (var j=i; j<i+rowLimit; j++){
                if (j == this.props.photos.length){
                    break;
                }
                totalAr += this.props.photos[j].aspectRatio;
            }
            if (i === lastRowIndex) {
                commonHeight = lastRowWidth / totalAr;
            } else {
                commonHeight = contWidth / totalAr;
            }
            // run thru the same set of items again to give the common height
            for (var k=i; k<i+rowLimit; k++){
                if (k == this.props.photos.length){
                    break;
                }
                var src = this.props.photos[k].src;

                if (this.props.disableLightbox){
                    photoPreviewNodes.push(

                        <div key={k} style={style}><Card zDepth={3} style={{backgroundColor: 'white',padding: '8px', paddingBottom: '20px'}}>
                            <img src={src} style={{display:'block', border:0}} height={commonHeight - 16} width={commonHeight * this.props.photos[k].aspectRatio - 16} alt="" />
                        </Card>  </div>

                    );
                }
                else{
                    lightboxImages.push(this.props.photos[k].lightboxImage);
                    photoPreviewNodes.push(

                        <div key={k} style={style}> <Card zDepth={2} style={{backgroundColor: 'white',padding: '8px', paddingBottom: '20px'}}>
                            <a  href="#" className={k} onClick={this.openLightbox.bind(this, k)}><img src={src} style={{display:'block', border:0}} height={commonHeight - 16} width={commonHeight * this.props.photos[k].aspectRatio - 16} alt="" /></a>
                        </Card> </div>

                    );
                }
            }
        }
        return(
            this.renderGallery(photoPreviewNodes, lightboxImages)
        );
    }
    renderGallery(photoPreviewNodes, lightboxImages){
        var height = window.screen.availHeight;
        var width =  window.screen.availWidth;
        if (this.props.disableLightbox){
            return(
                <div id="Gallery" className="clearfix" ref={(c) => this._gallery = c}>
                    {photoPreviewNodes}
                </div>
            );
        }
        else{
            return(
                <div id="Gallery" className="clearfix" ref={(c) => this._gallery = c}>
                    {this.state.lightboxIsOpen ? <div style={{position: 'fixed', top: 11, right: 11, zIndex: 2222, fontSize: 34, color: 'white', fontFamily: 'sans-serif', fontWeight: 600, cursor: 'pointer'}} title='Close(Esc)' ><a  onTouchTap={this.closeLightbox} >X</a></div> : null}

                    {photoPreviewNodes}
                    <Lightbox
                        currentImage={this.state.currentImage}
                        images={lightboxImages}
                        isOpen={this.state.lightboxIsOpen}
                        onClose={this.closeLightbox}
                        showCloseButton={false}
                        onClickPrev={this.gotoPrevious}
                        onClickNext={this.gotoNext}
                        width={"'730px','max-height':'500px'"}
                        showImageCount={this.props.lightboxShowImageCount}
                        backdropClosesModal={this.props.backdropClosesModal}
                    />{this.state.lightboxIsOpen ?
                    <div
                        style={{

                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        height: 68,
                        right: 0,
                        left: 0,
                        position: 'absolute'
                    }}
                    >


                    <div style={{
                        zIndex: 99879999,
                        position: 'fixed',
                        bottom: 0,
                        // backgroundColor: 'white',
                        maxWidth:'100%',
                        width: 700,

                        height: 68
                    }}><FlatButton
                    label="Delete"
                    labelPosition="before"
                    primary={true}
                    style={{height: '100%',width: '50%'}}
                    icon={<DeleteIcon />}
                    onTouchTap={(e)=> {e.preventDefault();this.deleteImage()}}
                /><FlatButton
                    label="Share"
                    labelPosition="before"
                    primary={true}
                    style={{height: '100%',width: '50%'}}
                    icon={<ShareIcon />}
                    onTouchTap={(e)=> {e.preventDefault();this.deleteImage()}}
                /></div></div>:null}
                </div>
            );
        }
    }
};
Gallery.displayName = 'Gallery';
Gallery.propTypes = {
    photos: function(props, propName, componentName){
        var lightboxImageValidator = React.PropTypes.object;
        if (!props.disableLightbox){
            lightboxImageValidator = React.PropTypes.object.isRequired;
        }
        return React.PropTypes.arrayOf(
            React.PropTypes.shape({
                src: React.PropTypes.string.isRequired,
                width: React.PropTypes.number.isRequired,
                height: React.PropTypes.number.isRequired,
                aspectRatio: React.PropTypes.number.isRequired,
                lightboxImage: lightboxImageValidator
            })
        ).isRequired.apply(this,arguments);
    },
    disableLightbox: React.PropTypes.bool
};
Gallery.defaultProps = {
    lightboxShowImageCount: false,
    backdropClosesModal: true,
    disableLightbox: false
};
// Gallery image style
const style = {
    display: 'block',
    margin: 2,
    backgroundColor:'#e3e3e3',
    float: 'left'
};



import ReactDOM from 'react-dom';
// import Lightbox from 'react-images';
// import Gallery from '../pics1';
import $ from 'jquery';
import _ from 'lodash';
// import FloatingButton from './FloatingButton';
import ReactUploadFile from '../uploadFile';
import SiteURL from '../site-url';
import CircularProgress from 'material-ui/CircularProgress';




class Pics extends React.Component{
    constructor(){
        super();
        this.state = {
            photos:null,
            pageNum:1,
            totalPages:1,
            loadedAll: false,
        };

        this.handleScroll = this.handleScroll.bind(this);
        this.loadMorePhotos = this.loadMorePhotos.bind(this);
    }
    componentDidMount() {
        this.loadMorePhotos();
        this.loadMorePhotos = _.debounce(this.loadMorePhotos, 200);
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll(){
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50)) {
            this.loadMorePhotos();
        }
    }
    loadMorePhotos(e){
        var _this = this;
        if (e){
            e.preventDefault();
        }
        if (this.state.pageNum > this.state.totalPages){
            this.setState({loadedAll: true});
            return;
        }
        this.props.superagent
            .get(SiteURL.get + "galleryLinks")
            .set('Accept', 'application/json')
            .end(function(err, res){
                if (err) {
                    console.log('error: ' , err);
                    console.log('response: ' , res.text);

                    _this.setState({data : []});
                    alert('Error!');
                    // reject(err);
                } else {
                    console.log('response: ' , res);
                    var data = JSON.parse(res.text);
                    let photos = data.map(function(obj,i){
                        let aspectRatio = parseFloat(obj.width / obj.height);
                        return {
                            src: obj.url,
                            width: parseInt(obj.width),
                            height: parseInt(obj.height),
                            aspectRatio: aspectRatio,
                            lightboxImage:{src: obj.url, caption: obj.title}
                        };
                    });
                    _this.setState({
                        photos: _this.state.photos ? _this.state.photos.concat(photos) : photos,
                        pageNum: _this.state.pageNum + 1,
                        totalPages: 1
                    });
                    // resolve(res.text);
                }
            });

    }
    renderGallery(){
        return(

            <div>
                <div style={{maxWidth: 1100, float: 'none', margin: '0 auto'}}>
                    <Gallery photos={this.state.photos} />
                </div>
            </div>

        );
    }
    render(){
        // no loading sign if its all loaded
        if (this.state.photos && this.state.loadedAll){
            return(
                <div className="App" >
                    {this.renderGallery()}
                </div>
            );
        }
        else if (this.state.photos){
            return(
                <div className="App">
                    {this.renderGallery()}
                </div>
            );
        }
        else{
            return(
                <div className="App">
                    <div id="msg-app-loading" className="loading-msg"><div style={{display: 'flex', justifyContent: 'center', marginTop: 15}}>
                        <CircularProgress size={80} thickness={5} />
                    </div></div>
                </div>
            );
        }
    }
};

export default PicturesPage;