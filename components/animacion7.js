import React, {useEffect, useState} from 'react';
import { StyleSheet , View, Animated} from 'react-native';

const Animacion7 = () => {
    const [ animacion1 ] = useState(new Animated.Value(0));
    const [ animacion2 ] = useState(new Animated.Value(1));
    
    
    useEffect(() => {


        // Animacion de secuentia siempre es un arreglo | Ambas animaicones inician al mismo tiempo
        Animated.sequence([
            Animated.timing( animacion1, {
                toValue: 300,
                duration: 1000
            }),
            Animated.spring( animacion2, {
                toValue: 10
            }),
            Animated.spring( animacion2, {
                toValue: 1
            }),
            Animated.timing( animacion1, {
                toValue: -300,
                duration: 1000
            }),
            
        ]).start();

    }, []);

    // Objeto de estilos
    const estiloAnimacion = {
        transform: [
            { translateY: animacion1 },
            { scale: animacion2 }
        ]
    }

    return ( 
        <View>
            <Animated.View
                style={[styles.caja, estiloAnimacion]}
            
            >
            
            </Animated.View>
        </View>

     );
}
 
const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})

export default Animacion7;