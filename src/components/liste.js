import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import axios from 'axios';

import Detay from './detay'

class Liste extends Component {

    state = { data : [] };

    componentWillMount() {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({data : response.data}));
    }

    renderData() {
        return this.state.data.map((responseData, ID) =>
        <Detay data={responseData} key={ID} style={{fontSize: 20, color : 'white'}}/>)
    }

    render() {

        const {viewStyle} = styles;

        return (
           <ScrollView style={{marginBottom : 10}}>
               {this.renderData()}
           </ScrollView>
        )
    }


}

const styles = StyleSheet.create({
   viewStyle : {
       backgroundColor : 'gray',
       marginTop : 5,
       justifyContent : 'center',
       alignItems : 'center',

   }
});

export default Liste;