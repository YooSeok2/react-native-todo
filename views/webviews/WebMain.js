import React, {Component} from 'react';
import { View, StyleSheet, StatusBar, Text, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';


export default class WebMain extends Component{
  
    webview  =  null ; 

    render(){
        return(
            <View style ={styles.container}>
                <StatusBar barStyle='light-content' backgroundColor="#feb915"/>
                <View style={styles.header}> 
                        <Text  style={styles.title}>PAM</Text>
                    </View>
                <View style={styles.content}>
                    <WebView
                        ref = { ( ref )  => { ( this.webview  =  ref )} } 
                        source={{ uri: 'https://thehanpam.co/app/index_app'}}
                        onNavigationStateChange = { (event)=>{ 
                            this.handleWebViewNavigationStateChange(event)
                        }}
                    />    
                </View>
            </View>
        );
    }


    handleWebViewNavigationStateChange= (newNavState)=>{
        console.log(newNavState);
        const {navigation}  = this.props;
    
        if(newNavState.loading === false){
            switch(newNavState.url){
                case 'https://thehanpam.co/app/index_app/banner' :
                    navigation.navigate('Guide');
                    this.webview.goBack();
                    break;
                default :
                    break;
            }
        }else{
            if(newNavState.url !== 'https://thehanpam.co/app/index_app'){
                this.webview.stopLoading();
            }
        }
    
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    header : {
        flex : 1,
        backgroundColor : "#feb915",
        paddingLeft : 15,
        paddingBottom : 15,
        justifyContent : 'flex-end'
    },
    content : {
        flex : 10
    },
    title : {
        color : '#ffffff',
        fontSize : 25
    }
})