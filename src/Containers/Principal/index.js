import React, { Component } from 'react';
import { Card, CardItem, Body, Container, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Dimensions } from 'react-native';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';

export default class Principal extends Component {
  render() {
    return (
      <Grid>

        <Row>
          <LinearGradient colors={['#ff5722', '#ff7c53', '#ff9c53']} style={styles.linearGradient}>
            <Col style={styles.colButton} onPress={() => { Actions.codeScanner() }}>
              <Text style={styles.textColButton}>Fazer Checkin</Text>
            </Col>
          </LinearGradient>
        </Row>
        <Row>
          <LinearGradient colors={['#3afcc8', '#3afcc8', '#00a383']} style={styles.linearGradient}>
            <Col style={styles.colButton} onPress={() => { Actions.conversoes() }}>
              <Text style={styles.textColButton}>Verificar Conversões</Text>
            </Col>
          </LinearGradient>
        </Row>

      </Grid >
    );
  }
}
