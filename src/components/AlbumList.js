import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    //step1: set default state: add a class level state property
    state = { albums: [] }; //a constructor could be used to set this.state = '';

    //this method will automatically be called before the component is rendered to screen
    componentWillMount() {
        //console.log('componentWillMount in AlbumList');
        //enable component level state for rerendering this component when data is fetched
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));

        //three steps, 1- set initial/default state for component
        //2- tell component state to update when you fetch data
        //3 - finally, make sure component makes use of the state
    }

    //helper method to map retrieved data
    renderAlbums() {
       return this.state.albums.map(album =>
         <AlbumDetail key={album.title} album={album} />
        ); //pass in each particular album to the chidl component using a prop
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }

}

export default AlbumList;
