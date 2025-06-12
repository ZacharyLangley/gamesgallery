import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ReactionTimer = memo(() => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{'Reaction Timer'}</Text>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
});
