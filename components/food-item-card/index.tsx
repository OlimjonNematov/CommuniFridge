import { Card, Paragraph, Title } from "react-native-paper";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import { Image } from "react-native-paper/lib/typescript/components/Avatar/Avatar";

FoodItemCard.propTypes={
    item: PropTypes.object
}
export function FoodItemCard(props:any){
    const item=props.item;
    const src=item.src
    return (
    <Card style={styles.cardContainer}>
        <Card.Content style={styles.cardContent}>
            <Title>{item.title}</Title>
            <Paragraph>{item.price}</Paragraph>
        </Card.Content>
        
        <Card.Cover style={styles.image} resizeMode={`cover`} source={props.item.src} />
    </Card>);    
}
const styles= StyleSheet.create({
    cardContent:{
        padding:0
    },
    cardContainer:{
        width:"40%",
        margin:20,
        borderRadius: 16,
    },
    image:{
        borderBottomEndRadius:16,
        borderBottomStartRadius:16
    }
});