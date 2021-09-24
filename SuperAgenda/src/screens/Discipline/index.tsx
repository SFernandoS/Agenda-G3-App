import React from "react"
import { Button, Modal, Center, NativeBaseProvider,Text,TextArea } from "native-base"
import { Dimensions ,StyleSheet,View} from "react-native"
import { useState } from "react"
import { MaterialCommunityIcons } from '@expo/vector-icons';


const windowHeight = (Dimensions.get("window").height)-110;
export const Botao = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Button 
      style={styles.button}
      onPress={() => setShowModal(true)}>
        <MaterialCommunityIcons name="plus" color={"white"} size={20} />   
        </Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content height={windowHeight} maxHeight={windowHeight}>
          <Modal.CloseButton />
          <Modal.Header>Registro de Disciplina</Modal.Header>
          <Modal.Body>
            
          <NativeBaseProvider>
      <Center flex={1} px="3">
        <SubName />
      </Center>
    </NativeBaseProvider>
    <View > 
<Text>
                                
</Text>
</View>
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <ProfName />
      </Center>
    </NativeBaseProvider>



          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              
              <Button
              
                onPress={() => {
                  setShowModal(false)
                }}
              >
                <Text
                
                >
                Registrar a materia
                </Text>
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  )
}
export const SubName = () => {
  return (
    <TextArea
      h={10}
      placeholder="Nome da diclipina :"
      w={{
        base: "80%",
        md: "85%",
      }}
    />
  )
}
export const ProfName = () => {
  return (
    <TextArea
      h={10}
      placeholder="Nome do Professor(a) :"
      w={{
        base: "80%",
        md: "85%",
      }}
    />
  )
}


export default () => {
  return (
    

    <NativeBaseProvider>
    <View style={styles.cont3}> 

</View>
<View style={styles.cont}>   
<Text style={styles.font2}>
  Disciplina 1.
</Text>
<Text style={styles.font3}>
  Professor 1.
</Text>
</View>
<View style={styles.cont3}> 

</View>
<View style={styles.cont2}>   
<Text style={styles.font2}>
  Disciplina 2.
</Text>
<Text style={styles.font3}>
  Professor 2.
</Text>
</View>

      <Center 
      flex={1}
      style={styles.contin}
      >
        <Botao />
      </Center>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  contin:{
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingVertical:30,
    paddingHorizontal:30
  },

  button: {
    opacity:100,
    width: 50,
    height: 50,
    backgroundColor: "#CF4646",
    justifyContent: 'center',
    borderRadius:50,
  },
  cont:{
    width: '50%',
    alignItems:'flex-start',
    backgroundColor: "#646464",
  },
  cont2:{
    width: '50%',
    alignItems:'flex-start',
    backgroundColor: "#df605e",
  },
  cont3:{
    height: 10,
    alignItems:'flex-start',
    backgroundColor: "#f2f2f2",
  },
  cont4:{
    height: 10,
    alignItems:'flex-start',
    backgroundColor: "#fcfcfc",
  },
  font2:{
    
    color: "black",
    fontSize: 20,
    
},
font3:{
    
  color: "black",
  fontSize: 20,
  
},
But:{
  backgroundColor: "#CF4646",
}, 
});