import React , {Component} from 'react';
import {View , Text , TouchableOpacity, StatusBar} from 'react-native';
import LottieView from 'lottie-react-native';

class LoadScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            timePassed:false
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({timePassed: true})
            this.props.navigation.navigate('Walk')
        }, 
        3000)
    }

    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <StatusBar hidden={true} />
                <LottieView source={require('../assets/anim/load.json')}
                    autoPlay loop autoSize={true} />
            </View>
        )
    }
}

export {LoadScreen}