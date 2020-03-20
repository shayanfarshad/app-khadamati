import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList, StyleSheet } from 'react-native';


class CatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

            cleaner: [
                {
                    id: 0,
                    title: 'نظافت منزل با بهترین کیفیت',
                    cat: 'نظافت و بهداشت',
                    loc: 'بهشتی',
                    price: 'ساعتی 50000 تومان',
                    img: 'https://www.xboxoyun.com/wp-content/uploads/2019/09/services-In-the-city.jpg'
                },
                {
                    id: 1,
                    title: 'نظافت منزل با بهترین کیفیت',
                    cat: 'نظافت و بهداشت',
                    loc: 'بهشتی',
                    price: 'ساعتی 50000 تومان',
                    img: 'https://www.xboxoyun.com/wp-content/uploads/2019/09/services-In-the-city.jpg'
                },
                {
                    id: 2,
                    title: 'نظافت منزل با بهترین کیفیت',
                    cat: 'نظافت و بهداشت',
                    loc: 'بهشتی',
                    price: 'ساعتی 50000 تومان',
                    img: 'https://www.xboxoyun.com/wp-content/uploads/2019/09/services-In-the-city.jpg'
                }, {
                    id: 3,
                    title: 'نظافت منزل با بهترین کیفیت',
                    cat: 'نظافت و بهداشت',
                    loc: 'بهشتی',
                    price: 'ساعتی 50000 تومان',
                    img: 'https://www.xboxoyun.com/wp-content/uploads/2019/09/services-In-the-city.jpg'
                },
                {
                    id: 4,
                    title: 'نظافت منزل با بهترین کیفیت',
                    cat: 'نظافت و بهداشت',
                    loc: 'بهشتی',
                    price: 'ساعتی 50000 تومان',
                    img: 'https://www.incimages.com/uploaded_files/image/970x450/INC_HandmaidCleaning_GSH_08_404135.jpg'
                }
            ]
        }
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <ScrollView>
                        <View style={{ flex: 0.5, width: '100%', marginTop: 20 }}>
                            <View style={styles.titleCat}>
                                <Text>
                                    نظافت و بهداشت
                                </Text>
                                <TouchableOpacity>
                                    <Text style={{ color: '#ff1654' }}>
                                        مشاهده کامل
                                                </Text>
                                </TouchableOpacity>
                            </View>
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
                            <View style={styles.titleCat}>
                                <Text>
                                    نظافت و بهداشت
                                </Text>
                                <TouchableOpacity>
                                    <Text style={{ color: '#ff1654' }}>
                                        مشاهده کامل
                                                </Text>
                                </TouchableOpacity>
                            </View>
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
                            <View style={styles.titleCat}>
                                <Text>
                                    نظافت و بهداشت
                                </Text>
                                <TouchableOpacity>
                                    <Text style={{ color: '#ff1654' }}>
                                        مشاهده کامل
                                                </Text>
                                </TouchableOpacity>
                            </View>
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
                            <View style={styles.titleCat}>
                                <Text>
                                    نظافت و بهداشت
                                </Text>
                                <TouchableOpacity>
                                    <Text style={{ color: '#ff1654' }}>
                                        مشاهده کامل
                                                </Text>
                                </TouchableOpacity>
                            </View>
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
    },
    titleCat: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        height: 30,
        backgroundColor: 'white',
        borderRadius: 10,
        width: '90%',
        marginHorizontal: '5%',
        alignItems: 'center',
        marginBottom: 10
    }
})
export { CatScreen }