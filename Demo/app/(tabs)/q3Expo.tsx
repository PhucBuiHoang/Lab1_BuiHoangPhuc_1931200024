import React, { useState } from "react";
import { Text, Button, Image, View, StyleSheet } from "react-native";

export default function Q3Expo() {
    const [pressCount, setpressCount] = useState(0);

    return (
        <>
            {/* <Image
                source={require('@/assets/images/partial-react-logo.png')}
            /> */}
            <View style={{ alignItems: "center", marginTop: 200, padding: 20, backgroundColor: "white" }}>
                <Button title="Press me" onPress={() => setpressCount(pressCount + 1)} />
                <Text style={{ marginTop: 15 }}>You've pressed the button: {pressCount} time(s)</Text>
            </View>
        </>
    );
};