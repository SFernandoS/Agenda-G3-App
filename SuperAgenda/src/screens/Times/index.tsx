import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { height } from "styled-system";

class App extends React.Component {
  state = {
    data: [
      { id: "00", name: "HORAS" },
      { id: "01", name: "D" },
      { id: "02", name: "S" },
      { id: "03", name: "T" },
      { id: "04", name: "Q" },
      { id: "05", name: "Q" },
      { id: "06", name: "S" },
      { id: "07", name: "S" },
      

    ],
    hora1: [
      { id: "00", name: "08:00"},
      { id: "01", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "02", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "03", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "04", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "05", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "06", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "07", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
    ],
    hora2: [
      { id: "00", name: "08:00"},
      { id: "01", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "02", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "03", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "04", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "05", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "06", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "07", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
    ],
    hora3: [
      { id: "00", name: "10:00"},
      { id: "01", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "02", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "03", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "04", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "05", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "06", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "07", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
    ],
    hora4: [
      { id: "00", name: "12:00"},
      { id: "01", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "02", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "03", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "04", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "05", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "06", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "07", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
    ],
    hora5: [
      { id: "00", name: "14:00"},
      { id: "01", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "02", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "03", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "04", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "05", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "06", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "07", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
    ],
    hora6: [
      { id: "00", name: "16:00"},
      { id: "01", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "02", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "03", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "04", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "05", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "06", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "07", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
    ],
    hora7: [
      { id: "00", name: "18:00"},
      { id: "01", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "02", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "03", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "04", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "05", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "06", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "07", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
    ],
    hora8: [
      { id: "00", name: "20:00"},
      { id: "01", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "02", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "03", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "04", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "05", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "06", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "07", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
    ],
    hora9: [
      { id: "00", name: "22:00"},
      { id: "01", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "02", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "03", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "04", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "05", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "06", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "07", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
    ],
    hora10: [
      { id: "00", name: "00:00"},
      { id: "01", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "02", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "03", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "04", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "05", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "06", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
      { id: "07", name: <input style={{backgroundColor:'transparent', border:0, height:32, maxWidth:150, textAlign:'center'}}type="text" />},
    ],

  };
  
  render() {
    const columns = 8;
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          numColumns={8}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            );
          }}
        />
        <FlatList
          data={this.state.hora1}
          keyExtractor={item => item.id}
          numColumns={8}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            );
          }}
        />
        <FlatList
          data={this.state.hora2}
          keyExtractor={item => item.id}
          numColumns={8}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            );
          }}
        />
        <FlatList
          data={this.state.hora3}
          keyExtractor={item => item.id}
          numColumns={8}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            );
          }}
        />
        <FlatList
          data={this.state.hora4}
          keyExtractor={item => item.id}
          numColumns={8}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            );
          }}
        />
        <FlatList
          data={this.state.hora5}
          keyExtractor={item => item.id}
          numColumns={8}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            );
          }}
        />
        <FlatList
          data={this.state.hora6}
          keyExtractor={item => item.id}
          numColumns={8}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            );
          }}
        />
        <FlatList
          data={this.state.hora7}
          keyExtractor={item => item.id}
          numColumns={8}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            );
          }}
        />
        <FlatList
          data={this.state.hora8}
          keyExtractor={item => item.id}
          numColumns={8}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            );
          }}
        />
        <FlatList
          data={this.state.hora9}
          keyExtractor={item => item.id}
          numColumns={8}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            );
          }}
        />
        <FlatList
          data={this.state.hora10}
          keyExtractor={item => item.id}
          numColumns={8}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            );
          }}
        />
      </SafeAreaView>
      
    );
  }
}

const styles = StyleSheet.create({
  FlatList:{height:2},
  item: {
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#FF6347",
    flexGrow: 1,
    flexBasis: 0,
    margin: 4,
    padding: 4,
    
  },
  text: {
    color: "#333333"
  },
  inputView: {
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute', 
    top: 0,
    left: 5,
    right: 5
},
  input: {
    height: 36,
        padding: 10,
        margin: 18,
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#48BBEC',
        backgroundColor: 'rgba(0,0,0,0)',
  }
});

export default App;