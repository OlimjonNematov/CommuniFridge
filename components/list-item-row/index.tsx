import { List } from "react-native-paper";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { OfferRow } from "./offer-row";
import { HistoryRow } from "./history-row";

ListItemRow.propTypes={
    hasOffer: PropTypes.bool,
    hasHistory:PropTypes.bool
}

export function ListItemRow(props:any){
    console.log(props);
    if(props.hasHistory){
        return <HistoryRow />
    }else if(props.hasOffer){
        return <OfferRow />
    }else{
        return <Text> </Text>
    }
    
}