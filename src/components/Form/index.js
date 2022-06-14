import React, {useState} from "react";
import { Text, TextInput, View, TouchableOpacity, Modal, Alert } from "react-native"
import {Picker} from "@react-native-picker/picker";
import styles from "./style"
import TakePicture from "../Camera";

export default function Form() {
    
    const [bairro, setBairro] = useState(null);
    const [rua, setRua] = useState(null);
    const [numero, setNumero] = useState(null);
    const [descricao, setDescricao] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

    function confirmarEnvio() {
        setIsOpen(false)
        setBairro(null)
        setRua(null)
        setNumero(null)
        setDescricao(null)
        setSelectedValue("default")
        return <Text >REP</Text>
    }

    function validar(){
        if (selectedValue != "defautl" && bairro != null && rua != null && numero != null && descricao != null){
            setIsOpen(true)
        }
        else{
            Alert.alert('Todos os campos precisam ser preenchidos')
        }
    }

    
    return(
        <View style={styles.form}>
              <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                    <Picker.Item label="Informe a Cidade" value="default" />
                    <Picker.Item label="Vassouras" value="Opcao 1" />
                    <Picker.Item label="Barra do Piraí" value="Opcao 2" />
                    <Picker.Item label="Mendes" value="Opcao 3" />
                    <Picker.Item label="Três Rios" value="Opcao 4" />
                    <Picker.Item label="Paraíba do Sul" value="Opcao 6" />
                    <Picker.Item label="Miguel Pereira" value="Opcao 7" />
                    <Picker.Item label="Valença" value="Opcao 8" />
                    <Picker.Item label="Rio das Flores" value="Opcao 9" /> 

              </Picker>

              <Text style={styles.formLabel}>Informe o Bairro</Text>
              <TextInput style={styles.input} onChangeText={setBairro} value={bairro}/>
              <Text style={styles.formLabel}>Informe a Rua</Text>
              <TextInput style={styles.input} onChangeText={setRua} value={rua}/>
              <Text style={styles.formLabel}>Informe o Numero</Text>
              <TextInput style={styles.input} keyboardType="numeric" onChangeText={setNumero} value={numero}/>
              <Text style={styles.formLabel}>Descrição</Text>
              <TextInput style={styles.input2} onChangeText={setDescricao} value={descricao}/>
              <TouchableOpacity style={styles.button} onPress={() => validar()}><Text>Notificar</Text></TouchableOpacity>

              <Modal transparent={true} visible={isOpen}>
                <TakePicture 
                    rua={rua}
                    numero={numero}
                    bairro={bairro}
                    situacao={selectedValue}
                    confirmarEnvio={confirmarEnvio}
                    
                />
                  
            </Modal> 

        </View>
        
        
    )
}