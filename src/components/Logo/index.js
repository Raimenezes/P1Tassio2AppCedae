import React from "react"
import { View, Text, Image } from "react-native"
import styles from "./style"

export default function Logo(){
    return(   
            <View>
                <Image source={{uri: "https://cdn.w600.comps.canstockphoto.com.br/bomba-%C3%A1gua-po%C3%A7o-%C3%ADcone-cliparte-vetor_csp51200509.jpg"}} style={styles.test} />
            </View>
    );
}