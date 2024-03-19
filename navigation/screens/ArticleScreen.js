// ArticleScreen.js

import * as React from 'react';
import { View, Text } from 'react-native';

export default function ArticleScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Article" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Article Screen</Text>
        </View>
    );
}
