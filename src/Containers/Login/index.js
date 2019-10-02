import React, { Component } from 'react';
import { View, Image, AsyncStorage, Keyboard } from 'react-native';
import styles from './styles';
import {
    Container,
    Header,
    Content,
    Form,
    Item,
    Input,
    Label,
    Button,
    Text,
    Spinner,
    Switch,
    Right
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { login } from '../../Actions/AuthAction';

class Login extends Component {
    state = {
        form: {
            email: null,
            senha: null,
        },
        salvarSenha: false,
        erros: {},
        keyboardState: 'closed'
    }
    async componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
        this.handleChange(await AsyncStorage.getItem('email'), 'email');
        this.handleChange(await AsyncStorage.getItem('senha'), 'senha');
        if (await AsyncStorage.getItem('senha')) {
            this.setState({
                salvarSenha: true
            })
        }

    }
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    handleChange = (value, field) => {
        this.setState({
            form: {
                ...this.state.form,
                [field]: value
            }
        })
    }
    validateForm = () => {
        return new Promise((resolve, reject) => {
            var erros = {};
            Object.keys(this.state.form).map(input => {
                console.log('inputs', this.state.form[input])
                if (this.state.form[input] == null) {
                    erros[input] = `O campo ${input} deve ser preenchido`
                } else {
                    erros = {}
                }
            })
            if (Object.keys(erros).length > 0) {
                this.setState({ erros: erros })
                reject(false)
            }
            resolve(true)
        })

    }
    handleSubmit = async (evt) => {
        if (this.state.salvarSenha) {
            await AsyncStorage.setItem('email', this.state.form.email)
            await AsyncStorage.setItem('senha', this.state.form.senha)

        } else {
            await AsyncStorage.removeItem('email')
            await AsyncStorage.removeItem('senha')
        }
        this.validateForm().then(res => {
            this.props.login(this.state.form)
        }).catch(res => { })

    }
    handleSalvarSenha = () => {
        this.setState({ salvarSenha: !this.state.salvarSenha })
    }
    _keyboardDidShow = () => {
        this.setState({
            keyboardState: 'opened'
        });
    }

    _keyboardDidHide = () => {
        this.setState({
            keyboardState: 'closed'
        });
    }
    render() {
        return (
            <View style={styles.container} >
                {this.state.keyboardState == 'closed' ?
                    <Image style={styles.logo} resizeMode="stretch" source={require('../../Assets/images/logo.png')} />
                    :
                    <React.Fragment />
                }
                <View>
                    <Form style={styles.form}>
                        <Item floatingLabel>
                            <Label>Email  <Text style={styles.error}>{this.state.erros.email}</Text></Label>
                            <Input onChangeText={(e) => { this.handleChange(e, 'email') }} value={this.state.form.email} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Senha <Text style={styles.error}>{this.state.erros.senha}</Text></Label>
                            <Input secureTextEntry onChangeText={(e) => { this.handleChange(e, 'senha') }} value={this.state.form.senha} />

                        </Item>
                        <View style={styles.salvarSenhaText}>
                            <Right style={{ flexDirection: 'row' }}>
                                <Label>Salvar senha?</Label>
                                <Switch value={this.state.salvarSenha} onValueChange={this.handleSalvarSenha} />
                            </Right>

                        </View>
                        <View style={styles.spaceBetweenFieldsAndLoginButton} />
                        {this.props.erro ?
                            <Text style={styles.error}>{this.props.erro}</Text>
                            :
                            <React.Fragment />
                        }
                        {this.props.loading ?
                            <Spinner color='orange' />
                            :
                            <Button style={styles.buttonForm} onPress={() => { this.handleSubmit() }} large block>
                                <Text>Entrar</Text>
                            </Button>
                        }
                    </Form>
                </View>
            </View>






        );
    }
}
const mapStateToProps = state => ({
    erro: state.AuthReducer.erro,
    loading: state.AuthReducer.loading
});
const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login)