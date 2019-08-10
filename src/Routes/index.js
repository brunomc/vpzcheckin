import React, { Component } from 'react';
import Login from '../Containers/Login';
import Principal from '../Containers/Principal';
import Conversoes from '../Containers/Conversoes';
import Icon from 'react-native-ionicons';
import Menu from '../Containers/Menu';
import CodeScanner from '../Containers/CodeScanner';
import ResultadoCheckin from '../Containers/ResultadoCheckin';
import { Router, Stack, Scene, Drawer, Actions } from 'react-native-router-flux';

const MenuIcon = () => {
	return (
		<Icon name="menu" style={{ color: '#ffffff' }} size={35} />
	);
}

export default props => (
	<Router navigationBarStyle={{ backgroundColor: '#FF5722' }} titleStyle={{ color: '#ffffff' }} tintColor='#FFFFFF'>
		<Stack key="root">
			<Scene key='login' title="Vipez Checkin - Gestão de eventos inteligente" component={Login} />
			<Drawer
				hideNavBar
				key="drawerMenu"
				contentComponent={Menu}
				drawerWidth={400}
				drawerPosition="left"
				drawerIcon={MenuIcon}
			>


				<Scene key='principal' title="Vipez" component={Principal} />
				<Scene key='conversoes' title="Conversões" component={Conversoes} onBack={() => { Actions.principal(); }} back hideDrawerButton />
				<Scene key='resultadoCheckin' title="Checkin" component={ResultadoCheckin} onBack={() => { Actions.codeScanner(); }} back hideDrawerButton />
				<Scene key='codeScanner' title="CheckinVipez" component={CodeScanner} back hideDrawerButton />
			</Drawer>

		</Stack>
	</Router>
);