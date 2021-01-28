import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Subheader from 'material-ui/Subheader';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        maxWidth:755,
        overflowY: 'auto',
    },
    imgitem: {
        cursor: 'pointer'
    },
};

const tilesData = [
    {
        img: 'http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg',
        title: 'Breakfast',
        author: 'jill111',
        featured: true,
    },
    {
        img: 'http://www.material-ui.com/images/grid-list/burger-827309_640.jpg',
        title: 'Tasty burger',
        author: 'pashminu',
    },
    {
        img: 'http://www.material-ui.com/images/grid-list/camera-813814_640.jpg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: 'http://www.material-ui.com/images/grid-list/morning-819362_640.jpg',
        title: 'Morning',
        author: 'fancycrave1',
        featured: true,
    },
    {
        img: 'http://www.material-ui.com/images/grid-list/hats-829509_640.jpg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: 'http://www.material-ui.com/images/grid-list/honey-823614_640.jpg',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: 'http://www.material-ui.com/images/grid-list/vegetables-790022_640.jpg',
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        img: 'http://www.material-ui.com/images/grid-list/water-plant-821293_640.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
    {
        img: 'http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg',
        title: 'Breakfast',
        author: 'jill111',
        featured: true,
    },
    {
        img: 'http://www.material-ui.com/images/grid-list/burger-827309_640.jpg',
        title: 'Tasty burger',
        author: 'pashminu',
    },
    {
        img: 'http://www.material-ui.com/images/grid-list/camera-813814_640.jpg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: 'http://www.material-ui.com/images/grid-list/morning-819362_640.jpg',
        title: 'Morning',
        author: 'fancycrave1',
        featured: true,
    },
    {
        img: 'http://www.material-ui.com/images/grid-list/hats-829509_640.jpg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: 'http://www.material-ui.com/images/grid-list/honey-823614_640.jpg',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: 'http://www.material-ui.com/images/grid-list/vegetables-790022_640.jpg',
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        img: 'http://www.material-ui.com/images/grid-list/water-plant-821293_640.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
];

/**
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */
const GridListExampleComplex = () => (
    <div style={styles.root}>
        <GridList
            cellHeight={180}
            style={styles.gridList}
        >

            {tilesData.map((tile) => (
                <GridTile
                    key={tile.img}
                    title={tile.title}
                    subtitle={<span>by <b>{tile.author}</b></span>}
                    onTouchTap={(e) => {e.preventDefault(); alert("image");}}
                    style={styles.imgitem}
                >
                    <img src={tile.img} />
                </GridTile>
            ))}
        </GridList>
    </div>
);

export default GridListExampleComplex;