import React, { useState } from "react";
import * as randonWord from "random-words";
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const SearchBar = () => {
  const [allItems, seIAlltems] = useState(["Apple"]);
  const [searchWord, setSearchWord] = useState("");

  const onPress = (e) => {
    randonWord(1).map((itm) => {
      seIAlltems([...allItems, itm]);
    });
  };

  const searchText = (txt) => {
    setSearchWord(txt);
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TextInput
          value={searchWord}
          onChangeText={(text) => searchText(text)}
          style={styles.serachInput}
          placeholder="Search"
        />

        <TouchableOpacity onPress={onPress} style={styles.mainBtn}>
            <Text style={ styles.btnStyle}>Add</Text>
        </TouchableOpacity>
      </View>

      {allItems
        .filter((item) => item.toLowerCase().includes(searchWord.toLowerCase()))
        .map((itm, idx) => {
          return (
            <Text key={idx} style={styles.item}>
              {itm}
            </Text>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 6,
  },
  serachInput: {
    width: "85%",
    height: "40px",
    borderRadius: 6,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "lightgray",
    
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderWidth: 1,
    borderBottomColor: 'lightgray',
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
  },
  button: {
    maxHeight: 42,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  mainBtn: {
    width: "15%",
    paddingLeft: 10,
    height: 40
  },
  btnStyle: {
      height: 40,
      paddingTop: 8,
      paddingBottom: 8,
      backgroundColor: "lightgray",
      textAlign: 'center',
  }
});

export default SearchBar;
