import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { login } from '../../Actions/AuthAction';

class Login extends Component {
    state = {
        form: {
            email: null,
            senha: null,
        },
        erros: {}
    }
    componentDidMount() {

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
            console.log(erros)
            console.log('state', this.state)
            if (Object.keys(erros).length > 0) {
                this.setState({ erros: erros })
                reject(false)
            }
            resolve(true)
        })

    }
    handleSubmit = (evt) => {
        this.validateForm().then(res => {
            this.props.login(this.state.form)
        }).catch(res => { })


    }
    render() {
        return (
            <View style={styles.container} >
                <Image style={styles.logo} resizeMode="stretch" source={require('../../Assets/images/logo.png')} />
                <View>
                    <Form style={styles.form}>
                        <Item floatingLabel>
                            <Label>Email  <Text style={styles.error}>{this.state.erros.email}</Text></Label>
                            <Input onChangeText={(e) => { this.handleChange(e, 'email') }} value={this.state.form.username} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Senha <Text style={styles.error}>{this.state.erros.senha}</Text></Label>
                            <Input secureTextEntry onChangeText={(e) => { this.handleChange(e, 'senha') }} value={this.state.form.password} />

                        </Item>
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