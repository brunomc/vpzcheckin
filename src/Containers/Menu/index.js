import React, { Component } from 'react';
import { List, ListItem, Text, Container, Content, Button, Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
const avatar = require('../../Assets/images/avatar.png');

class Menu extends Component {

  render() {
    return (
      <Container>
        <Content>
          <View style={{ height: 250, backgroundColor: '#FF5722', alignItems: 'center', justifyContent: 'center' }}>
            <Thumbnail source={{ uri: "http://www.vipez.com.br/uploads/" + this.props.usuario.imagem.split('/')[2] }} large />
            <Text style={{ color: '#ffffff' }}>{this.props.usuario.nome}</Text>
            <Text style={{ color: '#ffffff' }}>{this.props.usuario.tel_celular}</Text>
          </View>
          <List>
            <ListItem onPress={() => { Actions.codeScanner() }}>
              <Text>Fazer Checkin</Text>
            </ListItem>
            <ListItem onPress={() => { Actions.conversoes() }}>
              <Text>Conversões</Text>
            </ListItem>
            <ListItem onPress={() => { Actions.login() }}>
              <Text>Sair</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  usuario: state.AuthReducer.usuario
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Menu)