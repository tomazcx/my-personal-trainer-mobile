import {TextInput} from "react-native"
import Icon from "react-native-vector-icons/Feather"
import {Container} from "./styles"
import {Input} from "./styles"

export const SearchInput: React.FC<TextInput> = ({...rest}) => {
	return (
		<Container>
			<Icon name="search" color={'#FFF'} />
			<Input {...rest} placeholder="Pesquisar" />
		</Container>
	)
}
