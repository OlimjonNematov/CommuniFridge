import { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ListItemRow } from '../../components/list-item-row';
import { Text, View } from '../../components/Themed';

export default function History(){
    const [listItems, setListItems]= useState([{title: "item1"},{title: "item2"}]);


    return (
      <View style={styles.container}>
        {/* list of offers */}
        {/* {listItems === null ? null: getOffersList}  */}
        <FlatList 
        data={listItems}
        renderItem={({item}) => <ListItemRow hasHistory={true}/>}/>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
