import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';


class Header extends Component{

    render()
    {
        const {textStyle, viewStyle} = styles;

        return (
            <View style={viewStyle}>
                <Text style={textStyle}>{this.props.headerName}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textStyle : {
        fontSize : 30
    },
    viewStyle : {
        backgroundColor : '#f8f8f8',
        height : 60,
        marginTop : 20,
        justifyContent : 'center',
        alignItems : 'center',
        shadowOffset : {width: 0, height: 2},
        shadowOpacity : 0.2,
    }

});


export default Header;