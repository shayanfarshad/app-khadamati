import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { FlatList, ScrollView } from 'react-native-gesture-handler';



class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slider: [
                {
                    id: 0,
                    name: 'آگهی های تبلیغاتی',
                    pic: 'https://pagedesignshop.com/wp-content/uploads/2018/06/computer-repair.jpg'
                },
                {
                    id: 1,
                    name: 'آگهی های تبلیغاتی',
                    pic: 'https://aaaofficecleaning.com.au/wp-content/uploads/2018/03/commercial-office-cleaner-cleaning.jpeg'
                },
                {
                    id: 2,
                    name: 'آگهی های تبلیغاتی',
                    pic: 'http://doctorpipe.ir/wp-content/uploads/2017/08/plumber.jpg'
                },
                {
                    id: 3,
                    name: 'آگهی های تبلیغاتی',
                    pic: 'https://fanikara.com/wp-content/uploads/2018/10/%D9%86%D9%82%D8%A7%D8%B4-%D8%B3%D8%A7%D8%AE%D8%AA%D9%85%D8%A7%D9%86.jpg'
                },
                {
                    id: 4,
                    name: 'آگهی های تبلیغاتی',
                    pic: 'https://kalatamir.ir/wp-content/uploads/2019/09/%D8%AA%D8%B9%D9%85%DB%8C%D8%B1-%DB%8C%D8%AE%DA%86%D8%A7%D9%84-%D9%81%D8%B1%DB%8C%D8%B2%D8%B1-%DA%A9%D8%A7%D9%84%D8%A7%D8%AA%D8%B9%D9%85%DB%8C%D8%B1-2.jpg'
                },
            ],
            cleaner: [
                {
                    id: 0,
                    title: 'نظافت منزل با بهترین کیفیت',
                    loc: 'بهشتی',
                    price: 'ساعتی 50000 تومان',
                    img: 'https://www.xboxoyun.com/wp-content/uploads/2019/09/services-In-the-city.jpg'
                },
                {
                    id: 1,
                    title: 'نظافت منزل با بهترین کیفیت',
                    loc: 'بهشتی',
                    price: 'ساعتی 50000 تومان',
                    img: 'https://www.xboxoyun.com/wp-content/uploads/2019/09/services-In-the-city.jpg'
                },
                {
                    id: 2,
                    title: 'نظافت منزل با بهترین کیفیت',
                    loc: 'بهشتی',
                    price: 'ساعتی 50000 تومان',
                    img: 'https://www.xboxoyun.com/wp-content/uploads/2019/09/services-In-the-city.jpg'
                }, {
                    id: 3,
                    title: 'نظافت منزل با بهترین کیفیت',
                    loc: 'بهشتی',
                    price: 'ساعتی 50000 تومان',
                    img: 'https://www.xboxoyun.com/wp-content/uploads/2019/09/services-In-the-city.jpg'
                },
                {
                    id: 4,
                    title: 'نظافت منزل با بهترین کیفیت',
                    loc: 'بهشتی',
                    price: 'ساعتی 50000 تومان',
                    img: 'https://www.incimages.com/uploaded_files/image/970x450/INC_HandmaidCleaning_GSH_08_404135.jpg'
                }
            ]
        }
    }


    showProfile=()=>{
        this.props.navigation.navigate('Detail')
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: '10%' }}>
                <StatusBar  backgroundColor='#ff2e66' />
                <View style={{ flex: 0.3, width: '100%' }}>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.slider}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.slide}>
                                    <Image source={{ uri: item.pic }} style={{ width: '100%', flex: 0.8 }} />
                                    <Text style={styles.title}>{item.name}</Text>
                                </View>
                            );
                        }}
                        sliderWidth={sliderWidth}
                        itemWidth={300}
                        loop
                    />
                </View>
                <View style={{ flexDirection: 'row', flex: 0.1, width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.tagbtn}>
                        <Text style={{ color: 'white', fontFamily: 'IRANSansMobile_Medium' }}>جویای کار</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tagbtn}>
                        <Text style={{ color: 'white', fontFamily: 'IRANSansMobile_Medium' }}>آگهی استخدام</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tagbtn}>
                        <Text style={{ color: 'white', fontFamily: 'IRANSansMobile_Medium' }}>بهترین ها</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tagbtn}>
                        <Text style={{ color: 'white', fontFamily: 'IRANSansMobile_Medium' }}>علاقه مندی</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.6 }}>
                    <ScrollView>
                        <View style={{ flex: 0.5, width: '100%', marginTop: 20 }}>
                            <FlatList
                                data={this.state.cleaner}
                                horizontal={true}
                                inverted={true}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity onPress={this.showProfile} style={styles.flatitem}>
                                            <Image source={{ uri: item.img }} style={{ width: '100%', height: 100 }} />
                                            <Text>موضوع : {item.title}</Text>
                                            <Text>منطقه : {item.loc}</Text>
                                            <Text>هزینه : {item.price}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                        <View style={{ flex: 0.5, width: '100%', marginTop: 20 }}>
                            <FlatList
                                data={this.state.cleaner}
                                horizontal={true}
                                inverted={true}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity onPress={this.showProfile} style={styles.flatitem}>
                                            <Image source={{ uri: item.img }} style={{ width: '100%', height: 100 }} />
                                            <Text>موضوع : {item.title}</Text>
                                            <Text>منطقه : {item.loc}</Text>
                                            <Text>هزینه : {item.price}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                        <View style={{ flex: 0.5, width: '100%', marginTop: 20 }}>
                            <FlatList
                                data={this.state.cleaner}
                                horizontal={true}
                                inverted={true}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity onPress={this.showProfile} style={styles.flatitem}>
                                            <Image source={{ uri: item.img }} style={{ width: '100%', height: 100 }} />
                                            <Text>موضوع : {item.title}</Text>
                                            <Text>منطقه : {item.loc}</Text>
                                            <Text>هزینه : {item.price}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const sliderWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    slide: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 10,
        elevation: 2,
        overflow: 'hidden',
        backgroundColor: 'white'
    },
    title: {
        width: '100%',
        flex: 0.2,
        textAlign: 'center'
    },
    tagbtn: {
        width: '22%',
        height: 40,
        backgroundColor: '#ff1654',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        elevation: 4,
    },
    flatitem: { 
        width: 200, 
        height: 200, 
        justifyContent: 'flex-start', 
        alignItems: 'flex-end', 
        borderRadius: 10, 
        backgroundColor: 'white', 
        elevation: 2, 
        marginHorizontal: 10, 
        overflow: 'hidden', 
        marginBottom: 5
     }
})
export { HomeScreen }