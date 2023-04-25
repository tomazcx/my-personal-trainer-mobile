import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SignIn} from "../screens/SignIn";
import SignUp from "../screens/SignUp";

const Auth = createNativeStackNavigator()

export type RootStackNavigationList = 'signIn' | 'dashboard' | 'signUp'


export const AuthRoutes = () => {
	return (
		<Auth.Navigator screenOptions={{
			headerShown: false,
			contentStyle: {backgroundColor: '#312e38'}
		}}>
			<Auth.Screen name='signIn' component={SignIn} />
			<Auth.Screen name='signUp' component={SignUp} />
		</Auth.Navigator>
	)
}
