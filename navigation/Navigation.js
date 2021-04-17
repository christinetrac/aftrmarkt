import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from "../screens/Home";
import { Product } from "../screens/Product";
import { Auction } from "../screens/Auction";

const Stack = createStackNavigator();

const Navigation = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                          }}/>
            <Stack.Screen name="Product" component={Product}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
            <Stack.Screen name="Auction" component={Auction}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
        </Stack.Navigator>
    );
};

export { Navigation }
