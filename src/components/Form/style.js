import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    formContext: {
        width: "100%",
        height: "100%",
        bottom:0,
        backgroundColor: "#ffffff",
        alignItems: "center",
        marginTop:30,
        
    },
    form:{
      width:"100%",
      height:"auto",
      marginTop: 30,
      padding: 10,

    },

    formLabel:{
      color:"#000000",
      fontSize:18,
      paddingLeft:20,
    },
    
    input:{
      width:"90%",
      backgroundColor:"#f6f6f6",
      height:40,
      margin:12,
      paddingLeft:10,

    },

    input2:{
      width:"90%",
      backgroundColor:"#f6f6f6",
      height:100,
      margin:12,
      paddingLeft:10,

    },

    button:{
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      width: "90%",
      backgroundColor: "#FFDAB9",
      paddingTop:8,
      paddingBottom:14,
      marginLeft:12,
      margin:30,

    },

    buttonText:{
      fontSize: 20,
      color: "#ffffff",
    }

});

export default styles