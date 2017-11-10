/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'

export default class RnTabbar extends Component<{}> {
    constructor(props){
        super(props);
        this.state = {
            selectedTab:'chart'
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'chart'}
                        title="微信"
                        selectedTitleStyle={styles.selectedTabTitle}
                        renderIcon={() => <Image style={[styles.image,{width:20,height:20}]}
                                                 source={require('../../res/images/chart.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image,styles.imageActive,{width:20,height:20}]}
                                                         source={require('../../res/images/chart.png')} />}
                        onPress={() => this.setState({ selectedTab: 'chart' })}>
                        <View style={styles.page}>
                            {/*<RnNavigator/>*/}
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'mailList'}
                        title="通讯录"
                        selectedTitleStyle={styles.selectedTabTitle}
                        renderIcon={() => <Image style={styles.image}
                                                 source={require('../../res/images/mailList.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image,styles.imageActive]}
                                                         source={require('../../res/images/mailList.png')} />}
                        onPress={() => this.setState({ selectedTab: 'mailList' })}>
                        <View style={styles.page}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'find'}
                        title="发现"
                        selectedTitleStyle={styles.selectedTabTitle}
                        renderIcon={() => <Image style={styles.image}
                                                 source={require('../../res/images/find.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image,styles.imageActive]}
                                                         source={require('../../res/images/find.png')} />}
                        onPress={() => this.setState({ selectedTab: 'find' })}>
                        <View style={styles.page}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'me'}
                        title="我"
                        selectedTitleStyle={styles.selectedTabTitle}
                        renderIcon={() => <Image style={styles.image}
                                                 source={require('../../res/images/me.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image,styles.imageActive]}
                                                         source={require('../../res/images/me.png')} />}
                        onPress={() => this.setState({ selectedTab: 'me' })}>
                        <View style={styles.page}></View>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    image: {
        width: 22,
        height: 22,
        tintColor:'#666666',
    },
    imageActive: {
        tintColor:'#66A654',
    },
    selectedTabTitle:{
        color:'#66A654',
    },
    page:{
        flex: 1,
        backgroundColor:'#fff',
    },
    notify:{
        backgroundColor:'red',
        color:'#fff',
        borderRadius:5,
    },
});
