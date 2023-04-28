import RNPickerSelect from 'react-native-picker-select'
import {StyleSheet} from 'react-native'
import {PickerStyles} from './styles'

interface IPicker {
	onValueChange: (value: string) => void
}

export const SelectCategory: React.FC<IPicker> = ({onValueChange}) => {

	return (
		<RNPickerSelect
			placeholder={{label: "Todos os treinadores", value: null}}
			onValueChange={onValueChange}
			items={[
				{label: 'Musculação', value: '8a6096ea-c619-4f8c-98b0-27b83b67b542'},
				{label: 'Calistenia', value: '82dc7300-4c6c-405b-abf6-2de237eb4cd5'},
				{label: 'Defesa pessoal', value: 'f89d3a78-7d0e-4397-8974-b54cd115354d'},
				{label: 'Pilates', value: '46742552-35a0-4699-9f80-bc6186d60717'},
				{label: 'Crossfit', value: 'c389f0d9-d77d-45e0-9894-6fd5a140e411'},
				{label: 'Ciclismo', value: 'f5c1c870-f3fc-420d-b7af-60c1a11a1acc'},
				{label: 'Atletismo', value: '25568028-060d-4d68-a178-bbf1f6b93b3c'},
			]}
			style={PickerStyles}

		/>
	)

}


