
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
export default class Girl extends Component<{}>{
    constructor(props){
        super(props);
        this.state = {
            word:''
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>I am Girl.</Text>
                <Text style={styles.text}>{this.props.word}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
        justifyContent:'center'
    },
    text:{
        color:'red',
        fontSize:20,
    }
});