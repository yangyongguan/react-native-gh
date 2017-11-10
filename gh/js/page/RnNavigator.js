
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import Boy from './Boy';

export default class RnNavigator extends Component<{}>{
    render(){
        return (
            <View style={styles.container}>
                <Navigator
                    initialRoute={{
                        name:'boy',
                        component:Boy
                    }}
                    configureScene={()=>{
                        return Navigator.SceneConfigs.VerticalDownSwipeJump
                    }}
                    renderScene={(route,navigator)=>{
                        let Component = route.component;
                        return <Component navigator={navigator} {...route.params}/>
                    }}
                >
                </Navigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});
