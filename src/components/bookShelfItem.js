import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {images} from '../constanst';
import { FONTS } from '../constanst/theme';

export default function bookShelfItem({item}) {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <View style={styles.bookContainer}>
          <Image
            source={images.mistborn}
            resizeMode="contain"
            style={{width: 140, height: 180, marginBottom: 10}}
          />
          <Text style={{textAlign: "center", ...FONTS.body3}} >{item.name}</Text>
          <Text>{item.author}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    marginLeft: 10,
  },
  bookContainer: {
    width: 150,
    height: 270,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F6',
  },
});
