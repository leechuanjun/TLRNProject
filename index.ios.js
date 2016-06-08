/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeModules,
  NativeAppEventEmitter
} from 'react-native';

var TLNativeModuleExample = NativeModules.TLNativeModuleExample;

class TLRNProject extends Component {
  componentDidMount() {
    TLNativeModuleExample.testPrint("Jack", {
      height: '1.78m',
      weight: '7kg'
    });

    //测试回调
    TLNativeModuleExample.getNativeClass(name => {
      console.log("nativeClass: ", name);
    });

    TLNativeModuleExample.testRespondMethod("dealloc")
    .then(result => {
      console.log("result is ", result);
    })
    .catch(error => {
      console.log(error);
    });

    //测试Promiss
    // this.testRespond();

    //测试常量的值
    console.log("TLModuleName value is ", TLNativeModuleExample.TLModuleName);

    //接收事件
    NativeAppEventEmitter.addListener(TLNativeModuleExample.TestEventName, info => {
      console.log(info);
    });
  }

  // async testRespond() {
  //   try {
  //     var result = TLNativeModuleExample.testRespondMethod("dealloc");
  //     if(result) {
  //       console.log("respond this method");
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  onPress() {
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.onPress.bind()}>
        <Text style={styles.welcome}>
          Press
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'red'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TLRNProject', () => TLRNProject);
