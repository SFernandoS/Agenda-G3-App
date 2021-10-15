import { usePropsResolution } from 'native-base';
import React from 'react';
import { StyleSheet,Text ,View } from 'react-native';
import { paddingTop } from 'styled-system';
import BoxChat from '../../layouts/Box';


export default function Home({  }) {
  return (
    <>
      <View style={styles.background}>
        {/* <View style={styles.container}> */}
          <BoxChat color='#F50' />
          <BoxChat color='#F9F'/>
          <BoxChat color ='#FF0'/>
        {/* </View > */}
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 30,
    paddingTop: 86,
  },
  background: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#00F',
  }
  

});
