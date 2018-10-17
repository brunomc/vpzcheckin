import React, { Component } from 'react';
import { List, ListItem, Text, Container, Content,Button, Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import { View, Image} from 'react-native';
const avatar = require('../../Assets/images/avatar.png');

export default class Menu extends Component {
  render() {
    return (
     <Container>
     	<Content>
        <View style={{height: 250, backgroundColor:'#1a1a1a', alignItems:'center', justifyContent:'center'}}>
         <Thumbnail source={avatar}  large/>
         <Text style={{color:'#ffffff'}}>Bruno Medeiros Costa</Text>
        </View>
        <List>
            <ListItem onPress={()=>{Actions.codeScanner()}}>
              <Text>Ler Produto</Text>
            </ListItem>
            <ListItem>
              <Text>Meus Produtos</Text>
            </ListItem>
            <ListItem>
              <Text>Histórico de Transferências</Text>
            </ListItem>
            <ListItem>
              <Text>Configurações</Text>
            </ListItem>
     		</List>
     	</Content>
      </Container>
    );
  }
}
