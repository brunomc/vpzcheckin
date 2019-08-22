import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Linking,
    Vibration,
    Image,
    ScrollView
} from 'react-native';
import { Container, Button, List, ListItem, Thumbnail, Left, Right, Body, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { metrics, fonts, colors } from '../../Styles';
import styles from './styles';
//Redux
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { setConvidado } from '../../Actions/CheckinAction'

class ResultadoCheckin extends Component {

    constructor(props) {
        super(props);
    }
    componentWillUnmount() {
        this.props.setConvidado(
            {
                nome: "",
                cpf: "",
                brindes: "",
                convertidos: "",
                data: "",
                lista: "",
                total: ""
            }
        )
    }
    render() {
        return (
            <ScrollView automaticallyAdjustContentInsets={true}  >
                <Grid>
                    <Row>
                        <Col>
                            <Container style={styles.rectangleContainer}>
                                <View style={styles.rectangleContainer}>
                                    {this.props.convidado.nome ?
                                        <Image style={styles.logo} resizeMode="cover" source={{ uri: 'https://influenciadoradesucesso.opoderdaimagem.net.br/wp-content/uploads/2019/03/checked.png' }} />
                                        :
                                        <Image style={styles.logo} resizeMode="cover" source={{ uri: 'https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132_960_720.png' }} />
                                    }


                                </View>
                                <List style={styles.list}>
                                    <ListItem avatar>
                                        <Left>
                                            <Thumbnail large source={require('../../Assets/images/avatar.png')} />
                                        </Left>
                                        <Body>
                                            <React.Fragment>
                                                {!this.props.convidado.nome ?
                                                    <Text style={styles.textCardPerson}>{this.props.erro}</Text>
                                                    :
                                                    <React.Fragment>
                                                        <Text style={styles.textCardPerson} >{this.props.convidado.nome}</Text>
                                                        <Text style={styles.textCardPerson} >CPF: {this.props.convidado.cpf}</Text>
                                                        <Text style={styles.textCardPerson} >Data de entrada: {this.props.convidado.data}</Text>
                                                        <Text style={styles.textCardPerson} >Lista: {this.props.convidado.lista}</Text>
                                                        <Text style={styles.textCardPerson} >{this.props.convidado.convertidos} de {this.props.convidado.total}</Text>
                                                        <Text style={styles.textCardPerson} >Brindes: {this.props.convidado.brindes}</Text>
                                                    </React.Fragment>
                                                }
                                            </React.Fragment>
                                            <React.Fragment />
                                        </Body>
                                        <Right>
                                            <Text style={styles.textBadge} success> <Icon style={styles.iconBadge} name='checkmark' /></Text>
                                        </Right>
                                    </ListItem>
                                </List>
                                <Button style={styles.buttonForm} onPress={() => {
                                    Actions.codeScanner()
                                }} block><Text style={styles.txtbuttonForm}>Voltar</Text></Button>

                            </Container>
                        </Col>
                    </Row>
                </Grid>
            </ScrollView>
        );
    }
}
const mapStateToProps = state => ({
    convidado: state.CheckinReducer.convidado,
    erro: state.CheckinReducer.erro
});
const mapDispatchToProps = { setConvidado };

export default connect(mapStateToProps, mapDispatchToProps)(ResultadoCheckin)