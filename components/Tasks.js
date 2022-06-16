import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.circle}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    item: {
        backgroundColor: '#363636',
        borderWidth: 0.5,
        borderColor: '#282828',
        paddingVertical: 28,
        paddingHorizontal: 10,
        marginTop: 10,
        marginHorizontal: 20,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',

    },

    circle: {
        width: 16,
        height: 16,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#fff',
        backgroundColor: '#363636',
    },

    itemText: {
        maxWidth: '65%',
        color: '#fff',
    },

});

export default Task; 