import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';
import CustomDrawer from '../components/CustomDrawer';


const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
    <AppDrawer.Navigator
    drawerContent={ (props) => <CustomDrawer {...props} /> }
    screenOptions={{
        headerTitle: "",
        headerTransparent: true,
        headerShown: false,
        drawerActiveTintColor: '#fff',
        drawerActiveBackgroundColor: 'orange',
        drawerInactiveBackgroundColor: '#000',
        drawerInactiveTintColor: '#ddd',
        drawerStyle: {backgroundColor: '#171717'},
        drawerItemStyle: {marginVertical: 5},
        drawerLabelStyle: {fontWeight: 'bold'}
    }}
    >
        <AppDrawer.Screen name="Home" component={Home}/>
        <AppDrawer.Screen name="Registrar" component={New} />
        <AppDrawer.Screen name="Perfil" component={Profile} />
    </AppDrawer.Navigator>
    );
}

export default AppRoutes;