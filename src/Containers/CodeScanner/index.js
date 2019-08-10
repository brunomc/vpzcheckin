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
import { validateQrCode } from '../../Actions/CheckinAction';

import Camera from 'react-native-camera';

class CodeScanner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scanning: true,
            cameraType: Camera.constants.Type.back
        }
    }
    componentWillMount() {
        this.setState({
            scanning: true,
            cameraType: Camera.constants.Type.back
        });
    }
    _handleBarCodeRead(e) {
        Vibration.vibrate();
        if (e.data !== null) {
            this.props.validateQrCode(e.data)
            Actions.resultadoCheckin();
        }
    }

    render() {
        if (this.state.scanning) {
            return (
                <Container>
                    <Grid>
                        <Row>
                            <Col>
                                <Container style={styles.rectangleContainer}>
                                    <Camera style={styles.camera} type={this.state.cameraType} barCodeTypes={[Camera.constants.BarCodeType.qr]} onBarCodeRead={this._handleBarCodeRead.bind(this)}>
                                        <View style={styles.rectangleContainer}>
                                            <View style={styles.rectangle} />
                                        </View>
                                    </Camera>
                                </Container>
                            </Col>
                        </Row>
                    </Grid>
                </Container>
            );
        } else {
            return (
                <Container>

                </Container>
            );
        }

    }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = { validateQrCode };

export default connect(mapStateToProps, mapDispatchToProps)(CodeScanner)