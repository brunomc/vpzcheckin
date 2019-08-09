import React, { Component } from 'react';
import {
  Card,
  CardItem,
  Body,
  Badge,
  Icon,
  Label,
  Input,
  Form,
  Item,
  Button,
  List,
  ListItem,
  Thumbnail,
  Left,
  Right
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Text, View, Image, ScrollView } from 'react-native';
import Video from 'react-native-video';
import styles from './styles';

export default class Conversoes extends Component {
  render() {
    return (


      <ScrollView automaticallyAdjustContentInsets={true}  >


        <View style={styles.container} >

          <View style={styles.spaceBetweenViews} />
          <View style={styles.containerBody}>
            <Card style={styles.card}>
              <CardItem style={styles.cardItemHeader} header>
                <Text style={styles.textTitleCardItem}>Evento de XYZ</Text>
              </CardItem>
              <CardItem>
                <Image resizeMode="cover" style={styles.image} source={require('../../Assets/images/evento.jpeg')} />
              </CardItem>
              <CardItem style={styles.cardItemBody}>
                <Body>
                  <Badge style={styles.badge} success>
                    <Text style={styles.textBadge}> <Icon style={styles.iconBadge} name='ios-people' />6000</Text>
                  </Badge>
                  <Text style={styles.textCardItem}>Evento de XYZ</Text>
                  <Form style={styles.form}>
                    <Item floatingLabel>
                      <Label>Checar CPF</Label>
                      <Input keyboardType="numeric" onChangeText={(e) => { }} />
                    </Item>
                    <Button style={styles.buttonForm} onPress={() => { }} large>
                      <Text>Checar</Text>
                    </Button>
                  </Form>
                  <List style={styles.list}>
                    <ListItem avatar>
                      <Left>
                        <Thumbnail large source={require('../../Assets/images/avatar.png')} />
                      </Left>
                      <Body>
                        <Text style={styles.textCardPerson} >Bruno Medeiros Costa Costa Costa</Text>
                        <Text style={styles.textCardPerson} >CPF: 98756465217</Text>
                        <Text note>Hora de entrada: 22:30</Text>
                      </Body>
                    </ListItem>
                  </List>
                </Body>
              </CardItem>
              <CardItem style={styles.cardItemFooter} footer>
                <Text style={styles.textCardItem}>14/10/2018 - Checado</Text>
              </CardItem>
            </Card>
          </View>
        </View>

      </ScrollView>


    );
  }
}
