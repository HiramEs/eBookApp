import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, TouchableOpacityBase } from 'react-native'
import { icons } from '../constanst'
import { FONTS } from '../constanst/theme'

export default function RecentItem({ item, navigation }) {
    return (
        <View style={styles.container} >
            <View style={styles.itemContainer} >
                <Image source={item.photo} style={styles.image} />
                <View style={styles.textContainer} >
                    <Text style={{ ...FONTS.h4 }} >{item.name}</Text>
                    <Text style={{ marginTop: 8, ...FONTS.body4 }}>{item.author}</Text>
                    <Text style={{ ...FONTS.body2 }} >{item.rating}</Text>
                </View>
                <View style={styles.botonContainer} >
                    <TouchableOpacity style={{ backgroundColor: "#000", ...styles.boton }} >
                        <Image source={icons.play} resizeMode="contain" style={{ tintColor: "#fff", height: 20, width: 20 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderWidth: 1, borderColor: "FFFFFA", ...styles.boton }} onPress={() => navigation.navigate("Book", {
                        item
                    })} >
                        <Image source={icons.eye} resizeMode="contain" style={{ tintColor: "black", height: 20, width: 20 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingTop: 10,
        marginBottom: 10
    },
    itemContainer: {
        flexDirection: "row",
        width: "100%",
        height: 140
    },
    image: {
        width: 90,
        height: "100%",
        resizeMode: 'contain',
        marginRight: 10
    },
    textContainer: {
        flexDirection: "column",
        width: "38%",
        paddingLeft: 5,
    },
    botonContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: "40%"
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
