import {ParamListBase, useNavigation} from "@react-navigation/native"
import {NativeStackNavigationProp} from "@react-navigation/native-stack"
import {useCallback} from "react"
import Icon from "react-native-vector-icons/Feather"
import {ProviderAvatar, ProviderContainer, ProviderInfo, ProviderMeta, ProviderMetaText, ProviderName} from "./styles"

export interface ProviderProps {
	name: string
	id: string
	avatar: string
}

export const ProviderItem: React.FC<ProviderProps> = ({name, id, avatar}) => {

	const {navigate} = useNavigation<NativeStackNavigationProp<ParamListBase>>()

	const navigateToCreateAppointment = useCallback(
		(providerId: string) => {
			navigate("CreateAppointment", {providerId});
		},
		[navigate],
	);

	const avatarImage = avatar !== null ? `https://my-personal-trainer-api.up.railway.app/files/${avatar}` : 'https://museulinguaportuguesa.org.br/wp-content/uploads/2018/02/Personal-Trainer.jpg'

	return (
		<ProviderContainer
			onPress={() => navigateToCreateAppointment(id)}
		>
			<ProviderAvatar source={{uri: avatarImage}} />

			<ProviderInfo >
				<ProviderName>{name}</ProviderName>

				<ProviderMeta>
					<Icon name="calendar" size={14} color="#8C0000" />
					<ProviderMetaText>Segunda a sexta</ProviderMetaText>
				</ProviderMeta>

				<ProviderMeta>
					<Icon name="clock" size={14} color="#8C0000" />
					<ProviderMetaText>8h as 18h</ProviderMetaText>
				</ProviderMeta>
			</ProviderInfo>
		</ProviderContainer>

	)
}
