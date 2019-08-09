import React, { Component } from 'react';
import Login from '../Containers/Login';
import Principal from '../Containers/Principal';
import Conversoes from '../Containers/Conversoes';
import Icon from 'react-native-ionicons';
import Menu from '../Containers/Menu';
import CodeScanner from '../Containers/CodeScanner';
import ProfileCompany from '../Containers/ProfileCompany';
import { Router, Scene, Drawer } from 'react-native-router-flux';

const MenuIcon = () => {
	return (
		<Icon name="menu" style={{ color: '#ffffff' }} size={35} />
	);
}

export default props => (
	<Router navigationBarStyle={{ backgroundColor: '#FF5722' }} titleStyle={{ color: '#ffffff' }} tintColor='#000000'>
		<Scene key="root">

			<Drawer
				hideNavBar
				key="drawerMenu"
				contentComponent={Menu}
				drawerWidth={400}
				drawerPosition="left"
				drawerIcon={MenuIcon}
			>

				<Scene key='login' title="Vipez Checkin" component={Login} hideDrawerButton />
				<Scene key='principal' title="Vipez" component={Principal} />
				<Scene key='principal' title="Vipez" component={Principal} />
				<Scene key='conversoes' title="Conversões" component={Conversoes} back hideDrawerButton />
				<Scene key='profileCompany' title="Profile Company" component={ProfileCompany} />

				<Scene key='codeScanner' title="CheckinVipez" component={CodeScanner} back hideDrawerButton />
			</Drawer>

		</Scene>
	</Router>
);