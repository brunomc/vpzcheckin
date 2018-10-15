import React, { Component } from 'react';
import Principal from '../Containers/Principal';
import Icon from 'react-native-ionicons';
import Menu from '../Containers/Menu';
import CodeScanner from '../Containers/CodeScanner';
import ProfileCompany from '../Containers/ProfileCompany';
import { Router , Scene, Drawer } from 'react-native-router-flux';

const MenuIcon = () =>{
	return (
		<Icon name="menu" style={{color:'#ffffff'}} size={35}/>
	);
}

export default props => (
	<Router navigationBarStyle={{ backgroundColor: '#1a1a1a'}} titleStyle={{color:'#ffffff'}} tintColor='#ffffff'>
		<Scene key="root">
			
			 <Drawer
                hideNavBar
                key="drawerMenu"
                contentComponent={Menu}
                drawerWidth={300}
                drawerPosition="left"
                drawerIcon={MenuIcon}
            >    
            
            <Scene key='profileCompany' title="Profile Company" component={ProfileCompany} />
				<Scene key='principal' title="OchainX" component={Principal} />
				<Scene key='codeScanner' title="OchainX" component={CodeScanner} back    hideDrawerButton />
            </Drawer>

		</Scene>
	</Router>
);