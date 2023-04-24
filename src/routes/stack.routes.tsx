import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Dashboard} from "../screens/Dashboard";

const {Screen, Navigator} = createNativeStackNavigator()

export const StackRoutes = () => {
	return (
		<Navigator>
			<Screen name='dashboard' component={Dashboard} />
		</Navigator>
	)
}
