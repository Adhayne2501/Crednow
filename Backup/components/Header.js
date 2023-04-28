import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShieldAlt, faComments, faCoins } from '@fortawesome/free-solid-svg-icons';
import { Fontisto } from '@expo/vector-icons'
const Header = ({goLogin}) => {
  return (
    <View style={styles.figura}>
      <TouchableOpacity
        onPress={goLogin}
      >
        <Fontisto name={'user-secret'} size={35} color='black' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F4EEE0',
   
  },
  button: {
    alignItems: 'center',
  },
  icon: {
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  figura: {
    width: '15%',
    height: 40,
    alignItems: 'flex-end',
    padding:10,
  },
});

export default Header;
