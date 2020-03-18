import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, PixelRatio, Image, FlatList, ScrollView, Linking } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Icon } from 'native-base';

class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
  
editProfile=()=>{
    this.props.navigation.navigate('Edit')
}

    render() {
        return (
            <View style={{ flex: 1, paddingTop: 10, backgroundColor: 'white' }}>
                <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <View style={{ flex: 0.4, height: 100, paddingHorizontal: '5%', marginBottom: 20 }}>

                        <View
                            style={[styles.avatar, styles.avatarContainer, { marginBottom: 40, marginLeft: '5%' }]}>
                            {this.state.avatarSource == null ? (
                                <Text style={{ fontSize: 20, color: 'white' }}>عکس کاربر</Text>
                            ) : (
                                    <Image style={styles.avatar} source={this.state.avatarSource} />
                                )}
                        </View>

                    </View>
                    <View style={{ flex: 0.6, height: 100, paddingRight: '5%' }}>
                        <Text style={{ fontFamily: 'IRANSansMobile_Bold', color: '#3d3638', fontSize: 20 }}>شایان فرشادفر</Text>
                        <Text style={{ color: '#3d3638', fontSize: 16 }}>مهندس برق الکترونیک</Text>
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-start' }}>
                            <TouchableOpacity onPress={this.editProfile} style={[styles.infbtn, { backgroundColor: 'gray', marginRight: '25%', }]}>
                                <Icon name='cog' type='FontAwesome5' style={{ color: 'white' }} />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
                <View style={{ flex: 0.12, paddingTop: 10, flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: '5%' }}>
                    <View style={styles.rate}>
                        <Rating
                            imageSize={15}
                            ratingCount={5}
                            startingValue={4.3}
                            readonly
                            style={{ paddingVertical: 10 }}
                        />
                        <Text>امتیاز : 4.3</Text>
                    </View>
                    <View style={styles.cost}>
                        <Icon name='dollar-sign' type='FontAwesome5' style={{ color: 'green' }} />
                        <Text>هزینه ساعتی : 50 هزار تومان</Text>
                    </View>
                </View>
                <View style={{ flex: 0.12, justifyContent: 'center', marginHorizontal: '5%', borderBottomWidth: 0.5 }}>
                    <Text style={{ fontFamily: 'IRANSansMobile_Bold', color: '#ff1654' }}>آدرس</Text>
                    <Text>تهران-شریعتی-نرسیده به میرداماد-پلاک145-واحد6</Text>
                </View>
                <View style={{ flex: 0.18, paddingTop: 10, justifyContent: 'flex-start', marginHorizontal: '5%', borderBottomWidth: 0.5 }}>
                    <Text style={{ fontFamily: 'IRANSansMobile_Bold', color: '#ff1654' }}>درباره من </Text>
                    <Text>من شایان فرشادفر 24 سال دارم و در شرکت دیجی آلفا کار میکنم،حرفه من برنامه نویسی موبایل به زبان ری اکت نیتیو هست،در صورتی که از نمونه کار من رضایت دارید بامن تماس بگیرید</Text>
                </View>

                <View style={{ flex: 0.4, width: '100%', paddingTop: 10, justifyContent: 'flex-start', }}>
                    <Text style={{ color: '#ff1654', fontFamily: 'IRANSansMobile_Bold', marginRight: '5%' }}>نمونه کار</Text>
                    <ScrollView>

                        <FlatList
                            data={projects}
                            horizontal={true}
                            inverted={true}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.flatitem}>
                                        <Text style={{ fontFamily: 'IRANSansMobile_Medium' }}>موضوع : <Text>{item.name}</Text></Text>

                                        <Text style={{ fontFamily: 'IRANSansMobile_Medium' }}>لینک : <Text style={{ color: '#0388fc' }} onPress={() => Linking.openURL(`${item.link}`)}>مشاهده نمونه کار</Text></Text>

                                        <Text style={{ fontFamily: 'IRANSansMobile_Medium' }}>توضیحات : <Text>{item.desc}</Text></Text>

                                        <Text style={{ fontFamily: 'IRANSansMobile_Medium' }}>هزینه : <Text>{item.cost}</Text></Text>

                                    </View>
                                )
                            }}
                        />

                    </ScrollView>
                </View>
            </View>
        )
    }
}
const projects = [{
    id: 0,
    name: 'سایت بخارگستر',
    link: 'https://bokhar-gostar.digialpha.net/#/',
    desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
    cost: '1200000 تومان'
},
{
    id: 1,
    name: 'سایت بخارگستر',
    link: 'https://bokhar-gostar.digialpha.net/#/',
    desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
    cost: '1400000 تومان'
},
{
    id: 2,
    name: 'سایت بخارگستر',
    link: 'https://bokhar-gostar.digialpha.net/#/',
    desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
    cost: '1400000 تومان'
}]

const styles = StyleSheet.create({
    avatarContainer: {
        backgroundColor: '#ff1654',
        borderColor: '#ff1654',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2
    },
    avatar: {
        borderRadius: 10,
        width: 100,
        height: 120,
    },
    infbtn: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        borderRadius: 5,
        backgroundColor: '#ff1654',

    },
    cost: {
        flex: 0.5,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'gray',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5
    },
    rate: {
        flex: 0.5,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 0.5,
        borderColor: 'gray',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5
    },
    flatitem: {
        width: 240,
        height: 200,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 2,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
        overflow: 'hidden',
        marginBottom: 5
    }


})
export { ProfileScreen }