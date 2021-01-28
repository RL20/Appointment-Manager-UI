import React from 'react';
import ReactDOM from 'react-dom';
import Lightbox from 'react-images';
import Gallery from './pics1';
import $ from 'jquery';
import _ from 'lodash';
import FloatingButton from './FloatingButton';
import ReactUploadFile from './uploadFile';
import SiteURL from './site-url';
import CircularProgress from 'material-ui/CircularProgress';




class App extends React.Component{
    constructor(){
        super();
        this.state = {
            photos:null,
            pageNum:1,
            totalPages:1,
            loadedAll: false,
            uploadDialog: false
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
    handleUploadDialog(){

        this.setState({uploadDialog: true});
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
        // fetch(SiteURL.get + "galleryLinks")
        //     .then((response) => {
        //             if (response.status !== 200) {
        //                 console.log('Looks like there was a problem. Status Code: ' +
        //                     response.status);
        //                 this.setState({data : []});
        //                 return;
        //             }
        //
        //             // console.log(response.json());
        //             // Examine the text in the response
        //
        //             response.json().then((data)  => {
        //                 console.log(data);
        //                 let photos = data.map(function(obj,i){
        //                     let aspectRatio = parseFloat(obj.width / obj.height);
        //                     return {
        //                         src: obj.url,
        //                         width: parseInt(obj.width),
        //                         height: parseInt(obj.height),
        //                         aspectRatio: aspectRatio,
        //                         lightboxImage:{src: obj.url, caption: obj.title}
        //                     };
        //                 });
        //                 this.setState({
        //                     photos: this.state.photos ? this.state.photos.concat(photos) : photos,
        //                     pageNum: this.state.pageNum + 1,
        //                     totalPages: 1
        //                 });
        //             });
        //         }
        //     )
        //     .catch(function(err) {
        //         console.log('Fetch Error :-S', err);
        //     });
        // $.ajax({
        //     url: 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=372ef3a005d9b9df062b8240c326254d&photoset_id=72157631971715898&user_id=57933175@N08&format=json&per_page=21&page='+this.state.pageNum+'&extras=url_o,url_m,url_l,url_c',
        //     dataType: 'jsonp',
        //     jsonpCallback: 'jsonFlickrApi',
        //     cache: false,
        //     success: function(data) {
        //         let photos = data.photoset.photo.map(function(obj,i){
        //             let aspectRatio = parseFloat(obj.width_o / obj.height_o);
        //             return {
        //                 src: (aspectRatio >= 3) ? obj.url_c : obj.url_m,
        //                 width: parseInt(obj.width_o),
        //                 height: parseInt(obj.height_o),
        //                 aspectRatio: aspectRatio,
        //                 lightboxImage:{src: obj.url_l, caption: obj.title}
        //             };
        //         });
        //         this.setState({
        //             photos: this.state.photos ? this.state.photos.concat(photos) : photos,
        //             pageNum: this.state.pageNum + 1,
        //             totalPages: data.photoset.pages
        //         });
        //     }.bind(this),
        //     error: function(xhr, status, err) {
        //         console.error(status, err.toString());
        //     }.bind(this)
        // });
    }
    renderGallery(){
        return(

            <div>
                <div style={{maxWidth:700, float: 'none', margin: '0 auto'}}>
                <Gallery photos={this.state.photos} />
                <ReactUploadFile ref="UploadDialog" />
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


// import Dialog from 'material-ui/Dialog';
// import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';
//
// const customContentStyle = {
//     width: '100%',
//     maxWidth: 850,
// };

/**
 * The dialog width has been set to occupy the full width of browser through the `contentStyle` property.
 */


// var DialogExampleCustomWidth = React.createClass({
//     getInitialState: function() {
//         return {
//             open: false,
//             imagesList: null,
//             isImagesListSet: false
//         };
//     },
//     handleOpen : function(){
//     this.setState({open: true});
//     },
//     handleClose: function(){
//     this.setState({open: false});
//     },
//     handleUploadedImagesView: function(imageList){
//
//         console.log(imageList);
//         this.setState({
//             imagesList: imageList,
//             isImagesListSet: true
//         });
//     },
//     render: function() {
//         const options = {
//             baseUrl: 'http://localhost:8887/upload',
//             multiple: true,
//             uploadSuccess:(resp) => {
//                 console.log('upload success!');
//             },
//             uploadError:(err) => {
//                 alert(err.message);
//             },
//             fileFieldName: 'uploadedFile',
//             didChoose: (fileList) => {
//
//                 var imageList= [];
//                 var j = 0;
//                 var _this = this;
//                 console.log(fileList.length , j);
//                 for (var i = 0, f; f = fileList[i]; i++) {
//
//                     // Only process image files.
//                     if (!f.type.match('image.*')) {
//                         continue;
//                     }
//
//                     var reader = new FileReader();
//
//                     // Closure to capture the file information.
//                     reader.onload = ( (theFile) => {
//                         return  (e) => {
//                             // Render thumbnail.
//                             imageList[j] = {img: ""+e.target.result, title: ""+theFile.name};
//                             console.log(e);
//
//                             if(j == fileList.length -1){
//
//                                 this.handleUploadedImagesView(imageList);
//                             }
//                             j++;
//                         };
//                     })(f);
//
//                     // Read in the image file as a data URL.
//                     reader.readAsDataURL(f);
//                 }
//
//                 // setTimeout( () => {
//                 //     console.log(imageList);
//                 //     this.setState({
//                 //         imagesList: imageList,
//                 //         isImagesListSet: true
//                 //     });
//                 // }, 5000);
// // var list=[];
// //                 for (var i = 0, f; f = fileList[i]; i++) {
// //
// //                         // Only process image files.
// //                         // if (!f.type.match('image.*')) {
// //                         //     continue;
// //                         // }
// //
// //                     list.push(f);
// //                 }
// //
// //
// // console.log(list);
// //
// //                 var promises = list.map(function (f) { // return array of promises
// //                     // return the promise:
// //
// //                     console.log(f);
// //                     // Only process image files.
// //                     if (!f.type.match('image.*')) {
// //                         // continue;
// //                     }
// //
// //                     var reader = new FileReader();
// //
// //                     // Closure to capture the file information.
// //                     reader.onload = (function (theFile) {
// //                         return function (e) {
// //                             // Render thumbnail.
// //                             alert();
// //                             var tile = {
// //                                 img:""+e.target.result,
// //                                 title:""+theFile.name
// //                             };
// //
// //                             imageList[j]=[tile];
// //                             // console.log(tile);
// //                             // console.log("fsfdxcghzxcbcvj,;b nkvb");
// //                             j++;
// //                         };
// //                     })(f);
// //
// //                     // Read in the image file as a data URL.
// //
// //                     reader.readAsDataURL(f);
// //
// //                 });
// //                 Promise.all(promises).then(function () {
// //                     // console.log(albums);
// //                     //do something with the finalized list of albums here
// //                     console.log(imageList);
// //                     _this.setState({
// //                         imagesList: imageList,
// //                         isImagesListSet: true
// //                     });
// //
// //                     // _this.state.imagesList.map((tile) => (
// //                     //   console.log(tile.title)
// //                     // ));
// //
// //                 });
//
//
//
//             },
//         };
//         const actions = [
//             <FlatButton
//                 label="Cancel"
//                 primary={true}
//                 onTouchTap={this.handleClose}
//             />,
//             <FlatButton
//                 label="Upload"
//                 primary={true}
//                 onTouchTap={this.handleClose}
//             />,
//         ];
//         return (
//             <div>
//                 <Dialog
//                     title="Upload picture"
//                     style={{textAlign: 'center'}}
//                     actions={
//                     <ReactUploadFile
//                         options={options}
//                         chooseFileButton={
//                         <FlatButton
//                                label="Choose"
//                                primary={true}
//                         />}
//                         uploadFileButton={
//                         <FlatButton
//                                label="Upload"
//                                primary={true}
//                                onTouchTap={() => {this.handleClose(); }}
//
//                         />
//
//                         }
//                         customButton={
//                         <FlatButton
//                                label="cancel"
//                                primary={true}
//                                onTouchTap={this.handleClose}
//                         />
//                         }
//                         />
//                     }
//                     modal={true}
//                     contentStyle={customContentStyle}
//                     open={this.state.open}
//                 >
//                     {this.state.isImagesListSet ? <div><UploadedImagesView imagesList={this.state.imagesList}/></div> : null}
//
//                 </Dialog>
//             </div>
//         );
//     }
// });
//
// import {GridList, GridTile} from 'material-ui/GridList';
// import IconButton from 'material-ui/IconButton';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';
//
// const styles = {
//     root: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'space-around',
//     },
//     gridList: {
//         display: 'flex',
//         flexWrap: 'nowrap',
//         overflowX: 'auto',
//     },
//     titleStyle: {
//         color: 'rgb(0, 188, 212)',
//     },
// };
//
//
// /**
//  * This example demonstrates the horizontal scrollable single-line grid list of images.
//  */

// const tilesData = [
//     {
//         img: 'images/grid-list/00-52-29-429_640.jpg',
//         title: 'Breakfast',
//         author: 'jill111',
//     },
//     {
//         img: 'images/grid-list/burger-827309_640.jpg',
//         title: 'Tasty burger',
//         author: 'pashminu',
//     },
//     {
//         img: 'images/grid-list/camera-813814_640.jpg',
//         title: 'Camera',
//         author: 'Danson67',
//     },
//     {
//         img: 'images/grid-list/morning-819362_640.jpg',
//         title: 'Morning',
//         author: 'fancycrave1',
//     },
//     {
//         img: 'images/grid-list/hats-829509_640.jpg',
//         title: 'Hats',
//         author: 'Hans',
//     },
//     {
//         img: 'images/grid-list/honey-823614_640.jpg',
//         title: 'Honey',
//         author: 'fancycravel',
//     },
//     {
//         img: 'images/grid-list/vegetables-790022_640.jpg',
//         title: 'Vegetables',
//         author: 'jill111',
//     },
//     {
//         img: 'images/grid-list/water-plant-821293_640.jpg',
//         title: 'Water plant',
//         author: 'BkrmadtyaKarki',
//     },
// ];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */

// var UploadedImagesView = React.createClass({
//     getInitialState: function() {
//
//         console.log(this.props.imagesList);
//         console.log("jjhjhbjhbjhbs");
//         console.log(this.props.imagesList.length);
//
//         return {
//             open: true,
//             imagesList: this.props.imagesList
//         };
//     },
//     // componentWillReceiveProps(nextProps) {
//     //     console.log(nextProps);
//     //     console.log(this.state.imagesList);
//     //     // You don't have to do this check first, but it can help prevent an unneeded render
//     //     // if (!(nextProps.imagesList === this.state.imagesList)) {
//     //         this.setState({
//     //             imagesList: nextProps.imagesList,
//     //             open: true
//     //         });
//     //         this.forceUpdate();
//     //         alert();
//     //
//     //     // }
//     // },
//     render: function() {
//         return(
//             <div style={styles.root}>
//                 {this.props.imagesList.length == 1 ?
//
//                   <div style={{
//
//                   boxSizing: 'border-box', padding: '2px', width: '45.4545%', height: '184px'
//                   }}>
//                       {this.props.imagesList.map((tile) => (
//                         <GridTile
//                             key={tile.img}
//                             title={tile.title}
//                             actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
//                             titleStyle={styles.titleStyle}
//                             titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
//
//                         >
//                             <img src={tile.img} />
//                         </GridTile>
//                     ))}</div>
//                     :
//                     <GridList style={styles.gridList} cols={2.2}>
//                    {this.props.imagesList.map((tile) => (
//                        <GridTile
//                            key={tile.img}
//                            title={tile.title}
//                            actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
//                            titleStyle={styles.titleStyle}
//                            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
//
//                        >
//                            <img src={tile.img} />
//                        </GridTile>
//                    ))}
//
//                 </GridList>}
//             </div>
//         );
//     }});



export default App;