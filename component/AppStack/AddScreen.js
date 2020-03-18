import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import LottieView from 'lottie-react-native';


class AddScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Category: [
                {
                    id: 0,
                    name: 'موتور و ماشین'
                },
                {
                    id: 0,
                    name: 'پذیرایی/مراسم'
                },
                {
                    id: 0,
                    name: 'خدمات رایانه ای و موبایل'
                },
                {
                    id: 0,
                    name: 'مالی/حسابداری/بیمه'
                }
            ]
        }
    }

    shareDetail=()=>{
        this.props.navigation.push('Share')
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: '4%', paddingTop: 10 }}>
                <Text style={{ fontFamily: 'IRANSansMobile_Bold', fontSize: 20 }}>ثبت آگهی</Text>
                <Text style={{ fontFamily: 'IRANSansMobile_Medium', fontSize: 16 }} >نوع خدمات را مشخص کنید </Text>
                <FlatList
                    data={this.state.Category}
                    keyExtractor={item => item.id}

                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={this.shareDetail} style={{ width: '100%', height: 50, borderBottomWidth: 0.5, justifyContent: 'center', alignItems: 'flex-end', paddingHorizontal: '5%' }}>
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        )
    }
}

export { AddScreen }