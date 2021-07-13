import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import { icons } from '../constanst'
import { FONTS } from '../constanst/theme'

export default function Book({ route, navigation }) {

    const { item } = route.params;

    const renderHeader = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 50,
                    marginTop: 10,
                }}>
                {/* Boton regresar */}
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: 20,
                        justifyContent: 'center',
                    }} onPress={() => {
                        navigation.goBack();
                    }} >
                    <Image
                        source={icons.back}
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                </TouchableOpacity>

                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                </View>

                {/* Boton Puntos */}
                <TouchableOpacity
                    style={{
                        width: 50,
                        justifyContent: 'center',
                    }}>
                    <Image
                        source={icons.more}
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    
    

    return (
        <ScrollView style={styles.container} >
            <ImageBackground source={item.photo} resizeMode="cover" style={styles.backgroudImage} imageStyle={{ opacity: .6 }} >
                {renderHeader()}
                <View style={styles.bookDisplay}>
                    <Image source={item.photo} resizeMode="contain" style={styles.image} />
                    <Text style={{ ...FONTS.h2 }} >{item.name}</Text>
                    <Text style={{ ...FONTS.body2 }} >{item.author}</Text>
                </View>
                <View style={styles.actionBar}>
                    <TouchableOpacity style={styles.actionButton} >
                        <Image source={icons.favorite} resizeMode="contain" style={styles.actionImage} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton} >
                        <Image source={icons.message} resizeMode="contain" style={styles.actionImage} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton} >
                        <Image source={icons.upload} resizeMode="contain" style={styles.actionImage} />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 40, width: "100%", backgroundColor: "#FFF", borderTopLeftRadius: 30, borderTopRightRadius: 30, marginTop: 30 }} ></View>
                <View style={styles.descriptionView} >
                    <View style={styles.descriptionActionBar} >
                        <Text style={{ ...FONTS.h2, paddingLeft: 20 }} >Description</Text>
                        <View style={styles.descriptionActionButtonsContainer} >

                        </View>
                    </View>
                    <Text style={{ paddingHorizontal: 20, textAlign: "justify", marginBottom: 20 }} >{item.description}</Text>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroudImage: {
        alignItems: "center",
        flex: 1,
    },
    bookDisplay: {
        borderRadius: 200,
        height: 400,
        width: 400,
        color: "white",
        backgroundColor: "#FFF",
        opacity: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: 200,
        height: 280
    },
    actionBar: {
        flexDirection: "row",
        width: "100%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    actionButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#FFF",
        margin: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    actionImage: {
        height: 25,
        width: 25,
        tintColor: "#DF7200",
    },
    descriptionView: {
        flex: 1,
        width: "100%",
        backgroundColor: "#fff",
        alignItems: "center",
    },
    descriptionActionBar: {
        flexDirection: "row",
        width: "100%",
        height: 45,
        alignItems: "flex-start"
    },
    descriptionActionButtonsContainer: {

    }
});
