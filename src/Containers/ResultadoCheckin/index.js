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


class ResultadoCheckin extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.state.scanning) {
            return (
                <Container>
                    <Grid>
                        <Row>
                            <Col>
                                <Container style={styles.rectangleContainer}>
                                    <View style={styles.rectangleContainer}>
                                        <View style={styles.rectangle} />
                                    </View>
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
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ResultadoCheckin)