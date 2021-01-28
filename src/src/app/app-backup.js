// import React from 'react';
// import ReactDom from 'react-dom';
// import {BrowserRouter as Router, Route, IndexRoute, Link } from 'react-router';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// import Main from './Main'; // Our custom react component
// import Header from './Header'; // Our custom react component
// // import Drawertry from './drawer tryout'; // Our custom react component
// // import AppBar from 'material-ui/AppBar';
// //
// // // Needed for onTouchTap
// // // http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();
// //
// // // Render the main app react component into the app div.
// // // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
// // var drawerState = false;
//
// // render(<Header drawerState={false}/>, document.getElementById('header'));
// // render(<Main drawerState={changeDrawerState}/>, document.getElementById('app'));
//
// // const app = document.getElementById('app');
//
//
// // ReactDom.render(
// //
// //     <Router history={ HashHistory }>
// //         <Route path="/" component={ Main }/>
// //     </Router>
// //     ,app);
//
// // var Search = React.createClass({
// //     getInitialState: function() {
// //         return { drawerState: false};
// //     },
// //     componentDidMount: function() {
// //
// //         render(<Main changeDrawerState={this.changeDrawerState}/>, document.getElementById('app'));
// //     },
// //     changeDrawerState: function() {
// //
// //         this.setState({ drawerState: ! this.state.drawerState});
// //     },
// //
// //     render: function() {
// //
// //         return (
// //             <Header onRequestChange={this.changeDrawerState} drawerState={this.state.drawerState}/>
// //         );
// //     }
// // });
// //
// // render(<Search/>, document.getElementById('header'));
//
//
// // import React from 'react';
//
// // render()
// // {
// //     const AppBarExampleIcon = () => (
// //         <AppBar
// //             title="Title"
// //             iconClassNameRight="muidocs-icon-navigation-expand-more"
// //         />
// //     );
// // }
// // export default AppBarExampleIcon;
//
//
//
// class App extends Component{
//     state = {
//         gists: null
//     }
//
//     componentDidMount(){
//         fetch('https://api.github.com/gists')
//             .then(res => res.json())
//             .then(gists => {
//                 this.setState({gists})
//             })
//     }
//
//     render() {
//         const { gists } = this.state
//
//         return(
//             <Root><Sidebar>
//                 {gists ? (
//                     gists.map(gist => (
//                         <SidebarItem key={gist.id}>
//                             <Link to={'/g/${}'}>
//                             {gist.description || '[no description]'}
//                             </Link>
//                         </SidebarItem>
//                     ))):(
//                     <div>Loading...</div>
//                 )}
//             </Sidebar>
//                 <Main><h1>Welcome</h1></Main></Root>
//         )
//     }
// }






























