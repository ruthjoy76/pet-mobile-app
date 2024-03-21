import React from 'react';
import { Image } from 'react-native';

const CustomTabBarIcon = ({ focused, iconFocused, iconUnfocused }) => {
    return (
        <Image
            source={focused ? iconFocused : iconUnfocused}
            style={{ width: 25, height: 25 }} // Adjust size as needed
        />
    );
};

export default CustomTabBarIcon;