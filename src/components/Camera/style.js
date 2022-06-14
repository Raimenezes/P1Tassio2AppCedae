import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    icon:{
    width: "55%",
    height:"55%"
    },
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      width: "100%",
      height: "100%",
    },
    buttonContainer: {
      flex:1,
      backgroundColor: "transparent",
      flexDirection: "row",
  
    },
    buttonFlip: {
      position:"absolute",
      bottom: 50,
      left: 30,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:"#fff",
      margin: 20,
      width: 50,
      height: 50,
      borderRadius: 50,
    },
    buttonTake: {
      position:"absolute",
      bottom: 50,
      right: 30,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:"#fff",
      margin: 20,
      width: 50,
      height: 50,
      borderRadius: 50,
    },
    contentPhoto:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      margin: 10
    },
    img:{
      width: "100%",
      height: "80%",
      top: "8%"
    },
    buttonClose:{
      position:"absolute",
      bottom: -50,
      right: 40,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:"#fff",
      margin: 20,
      width: 50,
      height: 50,
      borderRadius: 50,
    },
    buttonConf:{
      position: "absolute",
      bottom: -50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:"#fff",
      margin: 20,
      width: 50,
      height: 50,
      borderRadius: 50,
    }
  });

export default styles