import { Button, List } from "react-native-paper";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { View } from "../Themed";
import {StyleSheet} from "react-native";

OfferRow.propTypes={

}

export function OfferRow(props:any){
    return (
    <View style={styles.container}>
        <List.Item
            title="Offers"
            description="Item description">    
        </List.Item> 

        <Button style={styles.button}>Accept</Button>
        
        <Button style={styles.button}>Decline</Button>
    </View>);
}

const styles=StyleSheet.create({
    container:{
        display: "flex",
        flexDirection:"row"
    },
    button:{
        alignSelf: "center"
    }
});