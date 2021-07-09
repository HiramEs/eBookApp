import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import bookShelfItem from '../components/bookShelfItem';
import {icons} from '../constanst';
import {FONTS} from '../constanst/theme';
import BookShelfData from '../data/bookShelfData.json';

const Home = () => {
  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          marginTop: 10,
        }}>
        {/* Boton menu */}
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: 20,
            justifyContent: 'center',
          }}>
          <Image
            source={icons.menuGrid}
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
          <View
            style={{
              width: '60%',
            }}></View>
        </View>

        {/* Boton Puntos */}
        <TouchableOpacity
          style={{
            width: '40%',
            height: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            backgroundColor: '#F3C08B',
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 30,
              backgroundColor: '#000000',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={icons.stars}
              style={{
                width: 20,
                height: 20,
                tintColor: '#fff',
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'column',
              width: '70%',
              height: '100%',
              justifyContent: 'center',
              paddingLeft: 10,
            }}>
            <Text style={{...FONTS.body4}}>Hiram Estrada</Text>
            <Text style={{color: '#DF7200', ...FONTS.body4}}>5332 points</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderBookShelf = () => {
    return (
      <View style={{padding: 20}}>
        <Text style={{...FONTS.h2}}>Your</Text>
        <Text style={{...FONTS.h1}}>BOOKSHELF</Text>
        <FlatList 
        data={BookShelfData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={bookShelfItem}
        />
      </View>
    );
  };

  return (
    <View style={{backgroundColor: "#F5F5F5"}} >
      {renderHeader()}
      {renderBookShelf()}
    </View>
  );
};

export default Home;
