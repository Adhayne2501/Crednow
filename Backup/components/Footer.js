import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShieldAlt, faComments, faCoins } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <FontAwesomeIcon icon={faShieldAlt} size={24} style={styles.icon} />
        <Text style={styles.label}>Chave de segurança</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesomeIcon icon={faComments} size={24} style={styles.icon} />
        <Text style={styles.label}>Dhay</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesomeIcon icon={faCoins} size={24} style={styles.icon} />
        <Text style={styles.label}>Pix</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F4EEE0',
    paddingVertical: 16,
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
});

export default Footer;
