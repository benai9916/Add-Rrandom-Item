import React from 'react'
import { StyleSheet, Text, View,StatusBar } from 'react-native'

const Screen = ({children}) => {
    const allItems = ['apple', '']
    return (
        <View style={styles.container }>
           {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 15,
        flex: 1
    }

})

export default Screen


