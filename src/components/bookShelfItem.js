import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { FONTS } from '../constanst/theme';

export default function BookShelfItem({item, navigation}) {
  return (
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Book", {
        item
      })} >
        <View style={styles.bookContainer}>
          <Image
            source={item.photo}
            resizeMode="contain"
            style={{width: 140, height: 180, marginBottom: 10}}
          />
          <Text style={{textAlign: "center", ...FONTS.h4}} >{item.name}</Text>
          <Text style={{ ...FONTS.body5 }} >{item.author}</Text>
        </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    marginLeft: 5,
  },
  bookContainer: {
    width: 160,
    height: 290,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFAFA',
    borderColor: '#DF7200',
    borderRightWidth: 1,
    borderBottomWidth: 1
  },
});
