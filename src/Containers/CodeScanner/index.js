import React, { Component } from 'react';
import {
AppRegistry,
StyleSheet,
Text,
View,
Linking,
Vibration,
} from 'react-native';
import { Container } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { metrics, fonts, colors } from '../../Styles';
import styles from './styles';
//Redux
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Camera from 'react-native-camera';

class CodeScanner extends Component {

    constructor (props) {
        super(props);
        this.state = {
            scanning: true,
            cameraType: Camera.constants.Type.back
        }
    }
componentWillMount(){
    this.setState({
        scanning: true,
        cameraType: Camera.constants.Type.back
    });
}
_handleBarCodeRead(e) {
    return;
}  

render() {
        if(this.state.scanning) {
            return (
            
                
                            <Container style={styles.rectangleContainer}>
                                <Camera style={styles.camera} type={this.state.cameraType} onBarCodeRead={this._handleBarCodeRead.bind(this)}>
                                    <View style={styles.rectangleContainer}>
                                    <View style={styles.rectangle}/>
                                    </View>            
                                </Camera>
                            </Container>
                        
            );
        }else{
            return (
              <Container>
                
              </Container>
            );
        }
        
    }
}

export default CodeScanner;
