import { View } from "../../components/Themed";
import { ScrollView, StyleSheet } from "react-native";
import { FoodItemCard } from "../../components/food-item-card";
import PropTypes from "prop-types"

CardTable.propTypes={
    items:PropTypes.array
}


export function CardTable(props:any){

    const renderCards=(items:any)=> items.map((item:any)=><FoodItemCard item={item}/>);

    return (
    <ScrollView style={styles.cardTableContainer}>
       {renderCards(props.items)}
    </ScrollView>
    );
}

const styles=StyleSheet.create({
    cardTableContainer:{
        marginTop: 250,
        display: "flex",
    }
});