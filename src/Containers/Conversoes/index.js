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
import { connect } from 'react-redux';
import { getConversions, getConversion, setConversion } from '../../Actions/ConversionAction';
import CPF from 'cpf-check';
class Conversoes extends Component {
  state = {
    form: {
      cpf: ""
    },
    erro: ''
  }
  componentWillMount() {

    this.props.setConversion({});
    if (this.props.usuario) {
      this.props.getConversions({ id: this.props.usuario.id, senha: this.props.usuario.senha });
    }
  }

  handleChange = (value, field) => {
    this.setState({
      form: {
        ...this.state.form,
        [field]: value
      }
    })
  }
  handleCheckIdentifier = () => {
    if (!CPF.validate(this.state.form.cpf)) {
      this.setState({ erro: 'CPF inválido' });
      return;
    }
    this.setState({ erro: '' });
    this.props.getConversion({
      id: this.props.usuario.id,
      senha: this.props.usuario.senha,
      cpf: this.state.form.cpf
    })
  }
  render() {
    return (

      <ScrollView automaticallyAdjustContentInsets={true}  >

        <View style={styles.spaceBetweenViews} />
        <View style={styles.containerBody}>
          <Card style={styles.card}>
            <CardItem style={styles.cardItemHeader} header>
              <Text style={styles.textTitleCardItem}>{this.props.conversions.titulo}</Text>
            </CardItem>
            <CardItem>
              {this.props.conversions.hasOwnProperty('imagem') && this.props.conversions.imagem !== null ?
                <Image resizeMode="stretch" style={styles.image} source={{ uri: "http://www.vipez.com.br/" + this.props.conversions.imagem }} />
                :
                <Image resizeMode="stretch" style={styles.image} source={require('../../Assets/images/logo.png')} />

              }
            </CardItem>
            <CardItem style={styles.cardItemBody}>
              <Body>
                {this.props.conversions.hasOwnProperty('imagem') && this.props.conversions.imagem !== null ?
                  <React.Fragment>
                    <Badge style={styles.badge} success>
                      <Text style={styles.textBadge}> <Icon style={styles.iconBadge} name='ios-people' />{this.props.conversions.total}</Text>
                    </Badge>
                    <Text style={styles.textCardItem}>Buscar Checkin por CPF</Text>
                    <Form style={styles.form}>
                      <Item floatingLabel>
                        <Label>Checar CPF</Label>
                        <Input keyboardType="numeric" onChangeText={(e) => { this.handleChange(e, 'cpf') }} />
                      </Item>
                      <Text style={styles.textErro}>{this.state.erro}</Text>
                      <Button style={styles.buttonForm} onPress={() => { this.handleCheckIdentifier() }} large>
                        <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Verificar</Text>
                      </Button>
                    </Form>
                    {this.props.conversion.nome && !this.state.erro ?
                      <List style={styles.list}>
                        <ListItem avatar>
                          <Left>
                            <Thumbnail large source={require('../../Assets/images/avatar.png')} />
                          </Left>
                          <Body>
                            <React.Fragment>
                              <Text>{this.props.conversion.erro}</Text>
                              <Text style={styles.textCardPerson} >{this.props.conversion.nome}</Text>
                              <Text style={styles.textCardPerson} >CPF: {this.props.conversion.cpf}</Text>
                              <Text note>Data de entrada: {this.props.conversion.data}</Text>
                            </React.Fragment>
                            <React.Fragment />
                          </Body>
                          <Right>
                            <Text style={styles.textBadge} success> <Icon style={styles.iconBadge} name='checkmark' /></Text>
                          </Right>
                        </ListItem>
                      </List>
                      :
                      <React.Fragment>
                        <Text styles={styles.textBadge}>{this.props.erro}</Text>
                      </React.Fragment>
                    }
                  </React.Fragment>
                  :
                  <Text style={styles.textCardItem} >Não foi encontrado evento para hoje!</Text>
                }
              </Body>
            </CardItem>
            <CardItem style={styles.cardItemFooter} footer>
              <Text style={styles.textCardItem}>{this.props.conversions.data}</Text>
            </CardItem>
          </Card>
        </View>


      </ScrollView>


    );
  }
}
const mapStateToProps = state => ({
  usuario: state.AuthReducer.usuario,
  conversions: state.ConversionReducer.conversions,
  conversion: state.ConversionReducer.conversion,
  erro: state.ConversionReducer.erro
});
const mapDispatchToProps = { getConversions, getConversion, setConversion };

export default connect(mapStateToProps, mapDispatchToProps)(Conversoes)