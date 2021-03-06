
import React from 'react';
// import svgicon from '../Facebook_Color.svg';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/SvgIcon';

let ActionHome = (props) => (
    <SvgIcon {...props}>
        <svg width="24px" height="24px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg" >

            <title>Facebook_Color</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Social_icons" transform="translate(-60.000000, -169.000000)">
                    <g id="Color" transform="translate(60.000000, 169.000000)">
                        <g id="Facebook">
                            <path d="M0,30 C0,13.4314567 13.4314567,0 30,0 C46.5685433,0 60,13.4314567 60,30 C60,46.5685433 46.5685433,60 30,60 C13.4314567,60 0,46.5685433 0,30 Z" id="back" fill="#3B5998"/>
                            <path d="M33.1269439,47.6393459 L33.1269439,31.317762 L37.6324148,31.317762 L38.229487,25.6932538 L33.1269439,25.6932538 L33.1345986,22.8781333 C33.1345986,21.411175 33.2739793,20.6251452 35.3809551,20.6251452 L38.1975921,20.6251452 L38.1975921,15 L33.6914833,15 C28.2789219,15 26.3738406,17.7284916 26.3738406,22.3169565 L26.3738406,25.6938908 L23,25.6938908 L23,31.318399 L26.3738406,31.318399 L26.3738406,47.6393459 L33.1269439,47.6393459 Z" id="Shape" fill="#FFFFFF"/>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    </SvgIcon>

);
ActionHome = pure(ActionHome);
ActionHome.displayName = 'FacebookBtn';
ActionHome.muiName = 'SvgIcon';

export default ActionHome;
