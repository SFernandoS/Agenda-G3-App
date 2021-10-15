import React from "react";
import { View } from 'react-native'

export default function Box(props){
    return(
        <View style={{
            height: 20,
            width: 20,
            backgroundColor: props.color || '#000',
        }}/>
    );
}

/*
            SUBSTITUIR POR ESTE ESTILO

            borderRadius: 15,
            height: 180,
            width: 262,
            backgroundColor: props.color || '#000',
            paddingVertical: 30,
            paddingHorizontal: 30

*/