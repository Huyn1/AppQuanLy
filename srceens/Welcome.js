import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Welcome = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Login');
        }, 2000); 

        return () => clearTimeout(timer); 
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.imageContainer}
                onPress={() => navigation.navigate('Login')}
                activeOpacity={0.9}
            >
                <Image
                    source={{ uri: 'https://cdn.pixabay.com/photo/2024/06/07/21/41/teddy-bear-8815423_1280.jpg' }}
                    style={styles.image}
                    resizeMode="cover"
                />

            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    imageContainer: {
        flex: 1,
        width: width,
        height: height,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default Welcome;
