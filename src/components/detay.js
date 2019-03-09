import React from 'react';
import {View, Text, StyleSheet, Image, Linking} from 'react-native';

import Button from './button'

const Detay = (props) => {

    const {containerStyle, subcontainerStyle, imageStyle, titleStyle} = styles;

    return (
        <View style={containerStyle}>

            <View style={subcontainerStyle}>
                <Text style={titleStyle}>{props.data.title}</Text>
            </View>

            <View style={subcontainerStyle}>
                <Image style={imageStyle} source={{uri : props.data.image }} />
            </View>

            <View style={subcontainerStyle}>
                <Button onPress={() => Linking.openURL(props.data.url)}>Satın Al</Button>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle : {
        borderWidth : 1,
        borderRadius : 1,
        borderColor : '#ddd',
        borderBottomWidth : 0,
        shadowColor : '#000',
        shadowOffset : { width : 0, height : 2},
        shadowOpacity : 0.2,
        shadowRadius : 2,
        elevation: 1,
        marginLeft : 5,
        marginRight : 5,
        marginTop : 10,
    },
    subcontainerStyle : {
        borderBottomWidth: 1,
        padding : 5,
        backgroundColor : '#f8f8f8',
        justifyContent : 'center',
        flexDirection : 'row',
        borderColor : '#ddd',
        position : 'relative',
    },
    imageStyle : {
        height : 300,
        flex : 1
    },
    titleStyle : {
        fontSize : 20,
        color : '#727172',
        alignSelf : 'center',


    }
});

export default Detay;