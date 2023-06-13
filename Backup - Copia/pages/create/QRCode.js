import React from "react";
import {View, StyleSheet} from 'react-native';
// import { RNCamera } from "react-native-camera";
import QRCodeScanner from "react-native-qrcode-scanner";

const ScanQRCode = ({navigation}) => {

    const handleScanner = ({dados}) => {
        setScannedDados({dados});
        // Lógica para processar os dados do qrCode e realizar a transferencia
            console.log(dados);
    };

    return(
        <View style={StyleSheet.container}>
           {/* <QRCodeScanner onRead={handleScanner} showMarker /> */}
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex:'1',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ScanQRCode;