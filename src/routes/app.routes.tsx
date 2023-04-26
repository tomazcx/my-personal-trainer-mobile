import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AppointmentCreated from '../screens/AppointmentCreated';
import CreateAppointment from '../screens/CreateAppointment';

import {Dashboard} from '../screens/Dashboard';
import Profile from '../screens/Profile';

const App = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
	<App.Navigator
		screenOptions={{
			headerShown: false,
			contentStyle: {backgroundColor: '#312e38'},
		}}
	>
		<App.Screen name="Dashboard" component={Dashboard} />
		<App.Screen name="Profile" component={Profile} />
	</App.Navigator>

);

export default AppRoutes;

