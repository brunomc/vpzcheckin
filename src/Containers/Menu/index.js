import React, { Component } from 'react';
import { List, ListItem, Text, Container, Content,Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { View, Image} from 'react-native';

export default class Menu extends Component {
  render() {
    return (
     <Container>
     	<Content>
        <View style={{height: 250}}>
          <Image
              style={{width:'100%', height: 150}}
              source={{uri: 'http://covermyfb.com/media/covers/thumb/44WOTQBMW0zOlXuH.jpg'}}
            />
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
