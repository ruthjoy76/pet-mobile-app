import React from 'react';
import { Image } from 'react-native';

const CustomTabBarIcon = ({ focused, iconFocused, iconUnfocused }) => {
    return (
        <Image
            source={focused ? iconFocused : iconUnfocused}
            style={{ width: 20, height: 20 }} // Adjust size as needed
        />
    );
};

export default CustomTabBarIcon;