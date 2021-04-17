import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Icon, SearchBar} from "react-native-elements";

export const Product = ({navigation}) => {

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.pop()}>
                    <Icon
                        name='chevron-back'
                        type='ionicon'
                        color='#fff'
                        size={25}
                    />
                </TouchableOpacity>
                <Icon name="heart-outline" type='ionicon' size={20} color={'#fff'}/>
            </View>
            <View style={styles.tab}>
                <View>
                    <Icon
                        name='home'
                        type='ionicon'
                        color='#fff'
                        size={22}
                    />
                    <Text style={styles.tabTextActive}>Home</Text>
                </View>
                <View>
                    <Icon
                        name='list'
                        type='ionicon'
                        color='#858585'
                        size={22}
                    />
                    <Text style={styles.tabText}>Categories</Text>
                </View>
                <View>
                    <Icon
                        name='pricetags'
                        type='ionicon'
                        color='#858585'
                        size={21}
                    />
                    <Text style={styles.tabText}>Marketplace</Text>
                </View>
                <View>
                    <Icon
                        name='person'
                        type='ionicon'
                        color='#858585'
                        size={22}
                    />
                    <Text style={styles.tabText}>Profile</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#242424',
        height: 100 + '%',
        paddingTop: 65,
        paddingLeft: 20,
        paddingRight: 20,
        position: 'relative'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    backButton: {
        position: 'relative',
        left: 0
    },
    tags: {
        borderRadius: 14,
        backgroundColor: '#505050',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    tagText: {
        fontSize: 11,
        color: '#C8C8C8',
        fontWeight: '700'
    },
    tab: {
        height: 75,
        width: 414,
        bottom: 0,
        left: 0,
        position: 'absolute',
        backgroundColor: '#474747',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingBottom: 10
    },
    tabTextActive: {
        color: '#fff',
        fontSize: 10,
        letterSpacing: 0.3,
        textAlign: 'center',
        paddingTop: 2
    },
    tabText: {
        color: '#858585',
        fontSize: 10,
        letterSpacing: 0.3,
        textAlign: 'center',
        paddingTop: 2
    }
});

