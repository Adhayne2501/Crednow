import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();
    // const [hasPermission, setHasPermission] = useState(null);
    // const [scanned, setScanned] = useState(false);

    // useEffect(() => {
    //     const getBarCodeScannerPermissions = async () => {
    //         const { status } = await BarCodeScanner.requestPermissionsAsync();
    //         setHasPermission(status === 'granted');
    //     };

    //     getBarCodeScannerPermissions();
    // }, []);

    // const handleBarCodeScanned = ({ type, data }) => {
    //     setScanned(true);
    //     alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    // };

    // if (hasPermission === null) {
    //     return <Text>Requesting for camera permission</Text>;
    // }
    // if (hasPermission === false) {
    //     return <Text>No access to camera</Text>;
    // }

    const handleMenu = (option) => {
        switch (option) {
            case 'Option 1':
                navigation.navigate('Saldo');
                break;

            case 'Option 2':
                navigation.navigate('Transferencia');
                break;

            case 'Option 3':
                navigation.navigate('Extrato');
                break;

            default:
                break;
        }
    };

    return (
        <>
            <Header navigation={navigation}/>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.optionButton}
                    onPress={() => handleMenu('Option 1')}
                >
                    <Text style={styles.optionText}>SALDO</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.optionButton}
                    onPress={() => handleMenu('Option 2')}
                >
                    <Text style={styles.optionText}>PIX</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.optionButton}
                    onPress={() => handleMenu('Option 3')}
                >
                    <Text style={styles.optionText}>EXTRATO</Text>
                </TouchableOpacity>
                {/* <View>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={StyleSheet.absoluteFillObject}
                    />
                    {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
                </View> */}
            </View>

            <Footer />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#393646'
    },

    optionButton: {
        width: '80%',
        padding: 16,
        marginBottom: 16,
        backgroundColor: '#eaeaea',
        borderRadius: 8,
        alignItems: 'center'
    },

    optionText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Home;