/**
 * Created by Warrior! on 2016/10/18.
 */

import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import SiteURL from './site-url'


const customContentStyle = {
    width: '100%',
    maxWidth: 850,
};

// class ReactUploadFile extends Component {
//
//
//     constructor(props) {
//         super(props);
//         const emptyFunction = () => {
//         };
//         const options = {
//             dataType: 'json',
//             timeout: 0,
//             numberLimit: 0,
//             userAgent: window.navigator.userAgent,
//             multiple: false,
//             withCredentials: false,
//             beforeChoose: emptyFunction,
//             didChoose: emptyFunction,
//             beforeUpload: emptyFunction,
//             didUpload: emptyFunction,
//             uploading: emptyFunction,
//             uploadSuccess: emptyFunction,
//             uploadError: emptyFunction,
//             uploadFail: emptyFunction,
//             onAbort: emptyFunction,
//             ...props.options,
//         };
//         const timeout = parseInt(options.timeout, 10);
//         options.timeout = (Number.isInteger(timeout) && timeout > 0) ? timeout : 0;
//         const dataType = options.dataType && options.dataType.toLowerCase();
//         options.dataType = dataType !== 'json' && 'text';
//
//         /* copy options to instance */
//         Object.keys(options).forEach((key) => {
//             this[key] = options[key];
//         });
//     }
//
//     state = {
//         /* xhrs' list after start uploading files */
//         xhrList: [],
//         currentXHRId: 0,
//     };
//
//     componentDidMount() {
//         this.input = document.querySelector('[name=ajax-upload-file-input]');
//     }
//
//     /* trigger input's click*/
//     /* trigger beforeChoose*/
//     commonChooseFile = (e) => {
//         if (e.target.name !== 'ajax-upload-file-input') {
//             const jud = this.beforeChoose();
//             if (jud !== true && jud !== undefined) return;
//             this.input.click();
//         }
//     };
//
//     /* input change event with File API */
//     /* trigger chooseFile */
//     commonChangeFile = (e) => {
//         this.files = this.input.files;
//         this.didChoose(this.files);
//
//         /* immediately upload files */
//         if (!this.props.uploadFileButton) {
//             this.commonUploadFile(e);
//         }
//     };
//
//     /* execute upload */
//     commonUploadFile = (e) => {
//         alert('start');
//         if (!this.files || !this.files.length) return false;
//         alert('first line');
//         if (!this.baseUrl) {
//             throw new Error('baseUrl missed in options');
//         }
//         alert('after exception');
//         // const jud = e == true ? true : this.beforeUpload(this.files);
//         // if (!jud) {
//         //     return false;
//         // }
//         // alert('beforeUpload');
//         let formData = new FormData();
//         formData = this.appendFieldsToFormData(formData);
//         alert('appendFieldsToFormData');
//         const fieldNameType = typeof this.fileFieldName;
//         const numberLimit = this.numberLimit === 0 ? this.files.length : Math.min(this.files.length, this.numberLimit);
//         for (let i = numberLimit - 1; i >= 0; i--) {
//             if (fieldNameType === 'function') {
//                 const file = this.files[i];
//                 const fileFieldName = this.fileFieldName(file);
//                 formData.append(fileFieldName, file);
//             } else if (fieldNameType === 'string') {
//                 const file = this.files[i];
//                 formData.append(this.fileFieldName, file);
//             } else {
//                 const file = this.files[i];
//                 formData.append(file.name, file);
//             }
//         }
//         alert('formData');
//         let baseUrl = this.baseUrl;
//         /* url query*/
//         const query = typeof this.query === 'function' ? this.query(this.files) : this.query;
//         const pos = baseUrl.indexOf('?');
//         let queryStr;
//         if (pos > -1) {
//             queryStr = baseUrl.substring(pos);
//             baseUrl = baseUrl.substring(0, pos);
//         }
//         if (query) {
//             if (queryStr) {
//                 console.warn('Your url contains query string, which will be ignored when options.query is set.');
//             }
//             const queryArr = [];
//             Object.keys(query).forEach(key => queryArr.push(`${key}=${query[key]}`)
//             );
//             queryStr = `?${queryArr.join('&')}`;
//         }
//         queryStr = queryStr || '';
//         const targetUrl = `${baseUrl}${queryStr}`;
// alert('targeturl');
//         const xhr = new XMLHttpRequest();
//         xhr.open('post', targetUrl, true);
//
//         /* authorization info for cross-domain */
//         xhr.withCredentials = this.withCredentials;
//         var y = JSON.parse( localStorage.getItem('token')).token;
//         alert(y);
//         xhr.setRequestHeader('Authorization', y);
//         const rh = this.requestHeaders;
//         if (rh) {
//             Object.keys(rh).forEach(key => xhr.setRequestHeader(key, rh[key]));
//         }
//
//         if (this.timeout) {
//             xhr.timeout = this.timeout;
//             xhr.addEventListener('timeout', () => {
//                 this.uploadError({
//                     type: '408',
//                     message: 'Request Timeout',
//                 });
//             });
//             setTimeout(() => {
//             }, this.timeout);
//         }
//
//         xhr.addEventListener('load', () => {
//             this.input.value = '';
//             const res = this.dataType === 'json' ? JSON.parse(xhr.responseText) : xhr.responseText;
//             this.uploadSuccess(res);
//         });
//
//         xhr.addEventListener('error', () => {
//             const err = this.dataType === 'json' ? JSON.parse(xhr.responseText) : xhr.responseText;
//             this.uploadError({
//                 type: err.type,
//                 message: err.message,
//             });
//         });
//
//         xhr.addEventListener('progress', (progress) => {
//             this.uploading(progress);
//         });
//
//         const curId = this.state.xhrList.length - 1;
//         xhr.addEventListener('abort', () => {
//             this.onAbort(curId);
//         });
//
//         xhr.send(formData);
//
//         this.setState({
//             currentXHRId: curId,
//             xhrList: [...this.state.xhrList, xhr]
//         });
//
//         /* trigger didUpload */
//         this.didUpload(this.files, this.state.currentXHRId);
//
//
//         return true;
//     }
//
//     /* append text params to formData */
//     appendFieldsToFormData = (formData) => {
//         const field = typeof this.body === 'function' ? this.body() : this.body;
//         if (field) {
//             Object.keys(field).forEach((index) => {
//                 formData.append(index, field[index]);
//             });
//         }
//         return formData;
//     }
//
//     /**
//      * public method. Manually process files
//      * @param func(files)
//      * @return files
//      * Filelist:
//      * {
//    *   0: file,
//    *   1: file,
//    *   length: 2
//    * }
//      */
//     processFile = (func) => {
//         this.files = func(this.files);
//     }
//
//     /* public method. Manually trigger commonChooseFile for debug */
//     manuallyChooseFile = () => {
//         this.commonChooseFile();
//     }
//
//     /* public method. Manually trigger commonUploadFile to upload files */
//     manuallyUploadFile = (files) => {
//         this.files = files && files.length ? files : this.files;
//         this.commonUploadFile(true);
//     }
//
//     /* public method. Abort a xhr by id which didUpload has returned, default the last one */
//     abort = (id) => {
//         if (id) {
//             this.state.xhrList[id].abort();
//         } else {
//             this.state.xhrList[this.state.currentXHRId].abort();
//         }
//     }
//
//     render() {
//         const inputProps = {
//             accept: this.props.options.accept,
//             multiple: this.props.options.multiple
//         };
//         const chooseFileButton = React.cloneElement(this.props.chooseFileButton, {
//             onClick: this.commonChooseFile
//         }, [(< input type="file" name="ajax-upload-file-input" style={{ display: 'none' }} onChange={this.commonChangeFile} {...inputProps} key="file-button" />)]);
//         const uploadFileButton = this.props.uploadFileButton && React.cloneElement(this.props.uploadFileButton, {
//                 onClick: this.commonUploadFile
//             });
//         const customButton = this.props.customButton && React.cloneElement(this.props.customButton);
//         return (
//             <div style={{ display: 'flex' ,justifyContent:"space-between"}}>
//                 { chooseFileButton }
//                 <div>
//                     { customButton }
//                     { uploadFileButton }
//                 </div>
//             </div>
//         );
//     }
// }




var  ReactUploadFile = React.createClass({
  getInitialState: function() {
      const emptyFunction = () => {
      };
      var options = {
          dataType: 'json',
          timeout: 0,
          numberLimit: 0,
          userAgent: window.navigator.userAgent,
          multiple: false,
          withCredentials: false,
          beforeChoose: emptyFunction,
          didChoose: emptyFunction,
          beforeUpload: emptyFunction,
          didUpload: emptyFunction,
          uploading: emptyFunction,
          uploadSuccess: emptyFunction,
          uploadError: emptyFunction,
          uploadFail: emptyFunction,
          onAbort: emptyFunction,
          ...this.props.options,
      };
      var timeout = parseInt(options.timeout, 10);
      options.timeout = (Number.isInteger(timeout) && timeout > 0) ? timeout : 0;
      var dataType = options.dataType && options.dataType.toLowerCase();
      options.dataType = dataType !== 'json' && 'text';

      /* copy options to instance */
      Object.keys(options).forEach((key) => {
          this[key] = options[key];
      });
    return {
      /* xhrs' list after start uploading files */
      xhrList: [],
      currentXHRId: 0,
    };
  },
  componentDidMount: function() {
    this.input = document.querySelector('[name=ajax-upload-file-input]');
  },

  /* trigger input's click*/
  /* trigger beforeChoose*/
  commonChooseFile : function(e)  {
    if (e.target.name !== 'ajax-upload-file-input') {
      const jud = this.beforeChoose();
      if (jud !== true && jud !== undefined) return;
      this.input.click();
    }
  },

  /* input change event with File API */
  /* trigger chooseFile */
  commonChangeFile: function(e)  {
    this.files = this.input.files;
    this.didChoose(this.files);

    /* immediately upload files */
    if (!this.props.uploadFileButton) {
      this.commonUploadFile(e);
    }
  },

  /* execute upload */
  commonUploadFile: function(e)  {
    // alert('start');
    if (!this.files || !this.files.length) {alert('you didnt choose any pic!'); return false;}
    // alert('first line');
    if (!this.baseUrl) {
      throw new Error('baseUrl missed in options');
    }

    // alert('after exception');
    // const jud = e == true ? true : this.beforeUpload(this.files);
    // if (!jud) {
    //     return false;
    // }
    // alert('beforeUpload');
    let formData = new FormData();
    formData = this.appendFieldsToFormData(formData);
    // alert('appendFieldsToFormData');
    const fieldNameType = typeof this.fileFieldName;
    const numberLimit = this.numberLimit === 0 ? this.files.length : Math.min(this.files.length, this.numberLimit);
    for (let i = numberLimit - 1; i >= 0; i--) {
      if (fieldNameType === 'function') {
        const file = this.files[i];
        const fileFieldName = this.fileFieldName(file);
        formData.append(fileFieldName, file);
      } else if (fieldNameType === 'string') {
        const file = this.files[i];
        formData.append(this.fileFieldName, file);
      } else {
        const file = this.files[i];
        formData.append(file.name, file);
      }
    }
    // alert('formData');
    let baseUrl = this.baseUrl;
    /* url query*/
    const query = typeof this.query === 'function' ? this.query(this.files) : this.query;
    const pos = baseUrl.indexOf('?');
    let queryStr;
    if (pos > -1) {
      queryStr = baseUrl.substring(pos);
      baseUrl = baseUrl.substring(0, pos);
    }
    if (query) {
      if (queryStr) {
        console.warn('Your url contains query string, which will be ignored when options.query is set.');
      }
      const queryArr = [];
      Object.keys(query).forEach(key => queryArr.push(`${key}=${query[key]}`)
      );
      queryStr = `?${queryArr.join('&')}`;
    }
    queryStr = queryStr || '';
    const targetUrl = `${baseUrl}${queryStr}`;
    // alert('targeturl');
    const xhr = new XMLHttpRequest();
    xhr.open('post', targetUrl, true);

    /* authorization info for cross-domain */
    xhr.withCredentials = this.withCredentials;
    var y = JSON.parse( localStorage.getItem('token')).token;
    alert(y);
    xhr.setRequestHeader('Authorization', y);
    const rh = this.requestHeaders;
    if (rh) {
      Object.keys(rh).forEach(key => xhr.setRequestHeader(key, rh[key]));
    }

    if (this.timeout) {
      xhr.timeout = this.timeout;
      xhr.addEventListener('timeout', () => {
        this.uploadError({
          type: '408',
          message: 'Request Timeout',
        });
      });
      setTimeout(() => {
      }, this.timeout);
    }

    xhr.addEventListener('load', () => {
      this.input.value = '';
      const res = this.dataType === 'json' ? JSON.parse(xhr.responseText) : xhr.responseText;
      this.uploadSuccess(res);
    });

    xhr.addEventListener('error', () => {
      const err = this.dataType === 'json' ? JSON.parse(xhr.responseText) : xhr.responseText;
      this.uploadError({
        type: err.type,
        message: err.message,
      });
    });

    xhr.addEventListener('progress', (progress) => {
      this.uploading(progress);
    });

    const curId = this.state.xhrList.length - 1;
    xhr.addEventListener('abort', () => {
      this.onAbort(curId);
    });

    xhr.send(formData);

    this.setState({
      currentXHRId: curId,
      xhrList: [...this.state.xhrList, xhr]
    });

    /* trigger didUpload */
    this.didUpload(this.files, this.state.currentXHRId);


    return true;
  },

  /* append text params to formData */
  appendFieldsToFormData : function(formData)  {
    const field = typeof this.body === 'function' ? this.body() : this.body;
    if (field) {
      Object.keys(field).forEach((index) => {
        formData.append(index, field[index]);
      });
    }
    return formData;
  },

  /**
   * public method. Manually process files
   * @param func(files)
   * @return files
   * Filelist:
   * {
   *   0: file,
   *   1: file,
   *   length: 2
   * }
   */
  processFile : function(func) {
    this.files = func(this.files);
  },

  /* public method. Manually trigger commonChooseFile for debug */
  manuallyChooseFile : function()  {
    this.commonChooseFile();
  },

  /* public method. Manually trigger commonUploadFile to upload files */
  manuallyUploadFile: function(files){
    this.files = files && files.length ? files : this.files;
    this.commonUploadFile(true);
  },

  /* public method. Abort a xhr by id which didUpload has returned, default the last one */
  abort: function(id) {
    if (id) {
      this.state.xhrList[id].abort();
    } else {
      this.state.xhrList[this.state.currentXHRId].abort();
    }
  },
  render: function() {
    const inputProps = {
      accept: this.props.options.accept,
      multiple: this.props.options.multiple
    };
    const chooseFileButton = React.cloneElement(this.props.chooseFileButton, {
      onClick: this.commonChooseFile
    }, [(< input type="file" name="ajax-upload-file-input" style={{ display: 'none' }} onChange={this.commonChangeFile} {...inputProps} key="file-button" />)]);
    const uploadFileButton = this.props.uploadFileButton && React.cloneElement(this.props.uploadFileButton, {
        onClick: this.commonUploadFile
      });
    const customButton = this.props.customButton && React.cloneElement(this.props.customButton);
    return (
      <div style={{ display: 'flex' ,justifyContent:"space-between"}}>
        { chooseFileButton }
        <div>
          { customButton }
          { uploadFileButton }
        </div>
      </div>
    );
  }
});

ReactUploadFile.propTypes = {
  options: PropTypes.shape({
    /* basics*/
    baseUrl: PropTypes.string.isRequired,
    query: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    body: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    dataType: PropTypes.string,
    timeout: PropTypes.number,
    numberLimit: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    fileFieldName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    withCredentials: PropTypes.bool,
    requestHeaders: PropTypes.object,
    accept: PropTypes.string,
    multiple: PropTypes.bool,
    userAgent: PropTypes.string,
    /* funcs*/
    beforeChoose: PropTypes.func,
    didChoose: PropTypes.func,
    beforeUpload: PropTypes.func,
    didUpload: PropTypes.func,
    uploading: PropTypes.func,
    uploadSuccess: PropTypes.func,
    uploadError: PropTypes.func,
    uploadFail: PropTypes.func,
    onAbort: PropTypes.func,
  }).isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  /* buttons*/
  chooseFileButton: PropTypes.element.isRequired,
  uploadFileButton: PropTypes.element,
  customButton: PropTypes.element,
};

ReactUploadFile.defaultProps = {
  /* buttons*/
  chooseFileButton: < button />,
};




var DialogExampleCustomWidth = React.createClass({
    getInitialState: function() {
        return {
            open: false,
            imagesList: null,
            isImagesListSet: false
        };
    },
    handleOpen : function(){
        this.setState({open: true});
    },
    handleClose: function(){
        this.setState({open: false});
    },
    handleUploadedImagesView: function(imageList){

        console.log(imageList);
        this.setState({
            imagesList: imageList,
            isImagesListSet: true
        });
    },
    render: function() {
        const options = {
            baseUrl: SiteURL.get + 'upload',
            multiple: true,
            uploadSuccess:(resp) => {
                console.log('upload success!');
            },
            uploadError:(err) => {
                alert(err.message);
            },
            fileFieldName: 'uploadedFile',
            didChoose: (fileList) => {

                var imageList= [];
                var j = 0;
                var _this = this;
                console.log(fileList.length , j);
                for (var i = 0, f; f = fileList[i]; i++) {

                    // Only process image files.
                    if (!f.type.match('image.*')) {
                        continue;
                    }

                    var reader = new FileReader();

                    // Closure to capture the file information.
                    reader.onload = ( (theFile) => {
                        return  (e) => {
                            // Render thumbnail.
                            imageList[j] = {img: ""+e.target.result, title: ""+theFile.name};
                            console.log(e);

                            if(j == fileList.length -1){

                                this.handleUploadedImagesView(imageList);
                            }
                            j++;
                        };
                    })(f);

                    // Read in the image file as a data URL.
                    reader.readAsDataURL(f);
                }

                // setTimeout( () => {
                //     console.log(imageList);
                //     this.setState({
                //         imagesList: imageList,
                //         isImagesListSet: true
                //     });
                // }, 5000);
// var list=[];
//                 for (var i = 0, f; f = fileList[i]; i++) {
//
//                         // Only process image files.
//                         // if (!f.type.match('image.*')) {
//                         //     continue;
//                         // }
//
//                     list.push(f);
//                 }
//
//
// console.log(list);
//
//                 var promises = list.map(function (f) { // return array of promises
//                     // return the promise:
//
//                     console.log(f);
//                     // Only process image files.
//                     if (!f.type.match('image.*')) {
//                         // continue;
//                     }
//
//                     var reader = new FileReader();
//
//                     // Closure to capture the file information.
//                     reader.onload = (function (theFile) {
//                         return function (e) {
//                             // Render thumbnail.
//                             alert();
//                             var tile = {
//                                 img:""+e.target.result,
//                                 title:""+theFile.name
//                             };
//
//                             imageList[j]=[tile];
//                             // console.log(tile);
//                             // console.log("fsfdxcghzxcbcvj,;b nkvb");
//                             j++;
//                         };
//                     })(f);
//
//                     // Read in the image file as a data URL.
//
//                     reader.readAsDataURL(f);
//
//                 });
//                 Promise.all(promises).then(function () {
//                     // console.log(albums);
//                     //do something with the finalized list of albums here
//                     console.log(imageList);
//                     _this.setState({
//                         imagesList: imageList,
//                         isImagesListSet: true
//                     });
//
//                     // _this.state.imagesList.map((tile) => (
//                     //   console.log(tile.title)
//                     // ));
//
//                 });



            },
        };
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Upload"
                primary={true}
                onTouchTap={this.handleClose}
            />,
        ];
        return (
            <div>
                <Dialog
                    title={window.strings.picturesPage.picsUploadTitle}
                    style={{textAlign: 'center'}}
                    actions={
                    <ReactUploadFile
                        options={options}
                        chooseFileButton={
                        <FlatButton
                               label={window.strings.choose}
                               primary={true}
                        />}
                        uploadFileButton={
                        <FlatButton
                               label={window.strings.upload}
                               primary={true}
                               onTouchTap={() => {this.handleClose(); }}

                        />

                        }
                        customButton={
                        <FlatButton
                               label={window.strings.cancel}
                               primary={true}
                               onTouchTap={this.handleClose}
                        />
                        }
                        />
                    }
                    modal={true}
                    contentStyle={customContentStyle}
                    open={this.state.open}
                >
                    {this.state.isImagesListSet ? <div><UploadedImagesView imagesList={this.state.imagesList}/></div> : null}

                </Dialog>
            </div>
        );
    }
});

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
    },
    titleStyle: {
        color: 'rgb(0, 188, 212)',
    },
};


/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */


/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */

var UploadedImagesView = React.createClass({
    getInitialState: function() {

        console.log(this.props.imagesList);
        console.log("jjhjhbjhbjhbs");
        console.log(this.props.imagesList.length);

        return {
            open: true,
            imagesList: this.props.imagesList
        };
    },
    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps);
    //     console.log(this.state.imagesList);
    //     // You don't have to do this check first, but it can help prevent an unneeded render
    //     // if (!(nextProps.imagesList === this.state.imagesList)) {
    //         this.setState({
    //             imagesList: nextProps.imagesList,
    //             open: true
    //         });
    //         this.forceUpdate();
    //         alert();
    //
    //     // }
    // },
    render: function() {
        return(
            <div style={styles.root}>
                {this.props.imagesList.length == 1 ?

                    <div style={{

                  boxSizing: 'border-box', padding: '2px', width: '45.4545%', height: '184px'
                  }}>
                        {this.props.imagesList.map((tile) => (
                            <GridTile
                                key={tile.img}
                                title={tile.title}
                                actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                                titleStyle={styles.titleStyle}
                                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"

                            >
                                <img src={tile.img} />
                            </GridTile>
                        ))}</div>
                    :
                    <GridList style={styles.gridList} cols={2.2}>
                        {this.props.imagesList.map((tile) => (
                            <GridTile
                                key={tile.img}
                                title={tile.title}
                                actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                                titleStyle={styles.titleStyle}
                                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"

                            >
                                <img src={tile.img} />
                            </GridTile>
                        ))}

                    </GridList>}
            </div>
        );
    }});

export default DialogExampleCustomWidth;
