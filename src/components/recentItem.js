import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, TouchableOpacityBase } from 'react-native'
import { icons } from '../constanst'
import { FONTS } from '../constanst/theme'

export default function recentItem({item}) {
    return (
        <TouchableOpacity style={styles.container} >
            <View style={styles.itemContainer} >
                <Image source={item.photo} style={styles.image} />
                <View style={styles.textContainer} >
                    <Text style={{...FONTS.h4}} >{item.name}</Text>
                    <Text style={{marginTop: 8, ...FONTS.body4}}>{item.author}</Text>
                    <Text style={{ ...FONTS.body2 }} >{item.rating}</Text>
                </View>
                <View style={styles.botonContainer} >
                    <TouchableOpacity style={{backgroundColor: "#000",...styles.boton}} >
                        <Image source={icons.play} resizeMode="contain" style={{tintColor: "#fff", height: 20, width: 20}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderWidth: 1, borderColor: "FFFFFA",...styles.boton}} >
                        <Image source={icons.eye} resizeMode="contain" style={{tintColor: "black", height: 20, width: 20}} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingTop: 10,
        marginTop: 8
    },
    itemContainer: {
        flexDirection: "row",
        width: "100%",
        height: 120
    },
    image: {
        width: 60,
        height: 100,
        resizeMode: 'contain'
    },
    textContainer: {
        flexDirection: "column",
        padding: 8,
    },
    botonContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    boton: {
        marginRight: 10,
        width: 50,
        height: 50,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    }
})
