import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView, List } from 'react-native';
import BookShelfItem from '../components/bookShelfItem';
import RecentItem from '../components/recentItem';
import { icons } from '../constanst';
import { FONTS } from '../constanst/theme';
import BookShelfData from '../data/bookShelfData.js';
import recentBooks from '../data/recentBooks';

const Home = ({ navigation }) => {

  const [BookShelf, setBookShelf] = useState([]);
  const [recentBooksList, setRecentBooks] = useState([]);

  useEffect(() => {
    setBookShelf(BookShelfData);
    setRecentBooks(recentBooks);
    // console.log("Cosa");
    // fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    // .then(res => {
    //   console.log(res);
    // });
  }, []);

  const addToBookShelf = (book) => {
    setRecentBooks(recentBooksList.filter(item => item !== book));
    setBookShelf([book, ...BookShelf]);
  }

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
              width: '50%',
            }}></View>
        </View>

        {/* Boton Puntos */}
        <TouchableOpacity
          style={{
            width: '45%',
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
              marginLeft: 10,
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
              width: '80%',
              height: '100%',
              justifyContent: 'center',
              paddingLeft: 10,
            }}>
            <Text style={{ ...FONTS.body4 }}>Hiram Estrada</Text>
            <Text style={{ color: '#DF7200', ...FONTS.body4 }}>5332 points</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderBookShelf = () => {
    return (
      <View style={{ padding: 20, paddingBottom: 8 }}>
        <Text style={{ ...FONTS.h2 }}>Your</Text>
        <Text style={{ ...FONTS.h1 }}>BOOKSHELF</Text>
        <FlatList
          data={BookShelf}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => (
            <BookShelfItem item={item} navigation={navigation} />
          )}
        />
      </View>
    );
  };

  const renderRecentBooks = () => {
    return (
      <View style={{ padding: 20 }} >
        <Text style={{ ...FONTS.h2, marginBottom: 8 }} >Recent Books</Text>
        {
          recentBooksList.map(item => {
            return (
              <RecentItem item={item} key={item.id} navigation={navigation} onPress={addToBookShelf} />
            )
          })
        }
      </View>
    )
  }

  return (
    <View style={{ backgroundColor: "#FFFAFA", flex: 1 }} >
      <ScrollView showsVerticalScrollIndicator={false} >
        {renderHeader()}
        {renderBookShelf()}
        {renderRecentBooks()}
      </ScrollView>
    </View>
  );
};

export default Home;
