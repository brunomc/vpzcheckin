import React, { Component } from 'react';
import {Card,CardItem, Body,Container,Content} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Text, View, Image,ScrollView} from 'react-native';
import Video from 'react-native-video';
import styles from './styles';

export default class ProfileCompany extends Component {
  render() {
    return (
    	
    	
    	<ScrollView automaticallyAdjustContentInsets={true}  >
    	
	        
    	<View style={styles.container} >
    		
    	<Video
	          source={require('../../Assets/videos/videoBackground.mp4')}
	          rate={1.0}
	          volume={1.0}
	          muted={false}
	          resizeMode={"cover"}
	          repeat
	          style={styles.video}
	        />
    		
		    <View style={styles.imageProfileContainer}>
		       	<Image
		          style={styles.imageProfile}
		          source={{uri: 'http://covermyfb.com/media/covers/thumb/44WOTQBMW0zOlXuH.jpg'}}
		        />
		      </View>
		      <View style={styles.spaceBetweenViews} />
		      <View style={styles.containerProfileBody}>
		      
		      		<Card style={styles.card}>
			            <CardItem style={styles.cardItemHeader} header>
			              <Text style={styles.textTitleCardItem}>Produto</Text>			          
			            </CardItem>
			            <CardItem style={styles.cardItemHeader}>
			            <Body style={{alignItems: 'center' }}>
			              <Text style={styles.textSubtitleCardItem}>Camisa Polo</Text>
			              </Body>
			            </CardItem>
			            <CardItem style={styles.cardItemBody}>
			              <Body>
			              	<Image
					          style={{width:'100%', height:400}}
					          source={{uri: 'http://portalmasculino.com/wp-content/uploads/2017/07/azul-escuro-2.png'}}
					        />
			                <Text style={styles.textCardItem}>
			                  Informações do produto
			                </Text>
			                <Row><Text style={styles.textCardItem}>Fabricante: Lacostedo Brasil </Text></Row>
			                <Row><Text style={styles.textCardItem}>Validadde: N/A </Text></Row>
			                <Row><Text style={styles.textCardItem}>Tracker: N/A </Text></Row>
			              </Body>
			            </CardItem>
			            <CardItem style={styles.cardItemFooter} footer>
			              <Text style={styles.textCardItem}>Proprietário: Bruno Medeiros Costa</Text>
			            </CardItem>
         			</Card>
         			<Card style={styles.card}>
			            <CardItem style={styles.cardItemHeader} header>
			              <Text style={styles.textTitleCardItem}>Mais Informações</Text>			          
			            </CardItem>
			            <CardItem style={styles.cardItemBody}>
			              <Body>
			                <Text style={styles.textCardItem}>
			                  Aqui mais informações
			                </Text>
			              </Body>
			            </CardItem>
			             <CardItem style={styles.cardItemBody}>
			              <Body>
			               
			              </Body>
			            </CardItem>
			            <CardItem style={styles.cardItemFooter} footer>
			              <Text style={styles.textCardItem}>14/10/2018</Text>
			            </CardItem>
         			</Card>
       		  </View>
       		  
       	</View>

      	</ScrollView>
    
       
    );
  }
}
