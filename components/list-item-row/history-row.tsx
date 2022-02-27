import { List } from "react-native-paper";
import PropTypes from "prop-types";
import { Text } from "react-native";

HistoryRow.propTypes={
    hasOffer: PropTypes.bool,
    hasHistory:PropTypes.bool
}

export function HistoryRow(props:any){
        return <List.Item
        title="History"
        description="Item description"/>;    
}