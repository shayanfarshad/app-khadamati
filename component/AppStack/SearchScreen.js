import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import LottieView from 'lottie-react-native';
import { Icon } from 'native-base';

class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>

                <View style={{ width: '90%', flex: 0.1, flexDirection: 'row', justifyContent: "space-around", marginHorizontal: '5%', backgroundColor: '#ff1654', marginTop: 20, borderRadius: 10, elevation: 3 }}>
                    <KeyboardAvoidingView
                        behavior='padding'
                        enabled
                        style={{ flex: 1,flexDirection:'row', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <TextInput selectionColor='white' style={{ width: '70%',height:80 , paddingHorizontal:'5%', textAlign:'right', fontFamily:'IRANSansMobile_Medium',color:"white" }} />
                        <TouchableOpacity style={{ width: '20%', flexDirection: 'row-reverse', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name='search' type='FontAwesome5' style={{fontSize:18, color:'white'}} />
                            <Text style={{ fontFamily: 'IRANSansMobile_Medium', marginRight: 10, color:'white' }}>
                                جستجو
                        </Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </View>

            </View>
        )
    }
}

export { SearchScreen }