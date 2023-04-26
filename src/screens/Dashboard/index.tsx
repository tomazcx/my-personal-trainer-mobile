import React, {Provider, useCallback, useEffect, useState} from "react";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import {api} from "../../services/api";
import {useAuth} from "../../hooks/auth";

import {
	Container,
	Header,
	HeaderTitle,
	UserName,
	UserAvatar,
	ProvidersList,
	ProvidersListTitle,
	HeaderUserInfo,
	LogOutButton,
	LogOutButtonText
} from "./styles";
import {AxiosResponse} from "axios";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {ProviderItem} from "../../components/ProviderItem";
import {ProviderProps} from "../../components/ProviderItem";
import {Text} from "react-native";

export const Dashboard: React.FC = () => {
	const [providers, setProviders] = useState<ProviderProps[]>([]);

	const {user, signOut} = useAuth();
	const {navigate} = useNavigation<NativeStackNavigationProp<ParamListBase>>()

	useEffect(() => {
		api.get("/providers").then((response: AxiosResponse) => {
			setProviders(response.data);
		});
	}, []);

	const navigateToProfile = useCallback(() => {
		navigate("Profile");
	}, [navigate]);



	return (
		<Container>
			<Header>
				<HeaderUserInfo onPress={navigateToProfile}>
					<UserAvatar source={{uri: `https://my-personal-trainer-api.up.railway.app/files/${user.avatar}`}} />

					<HeaderTitle>
						Bem vindo, {"\n"}
						<UserName>{user.name}</UserName>
					</HeaderTitle>
				</HeaderUserInfo>
				<LogOutButton onPress={signOut} ><LogOutButtonText>Sair</LogOutButtonText></LogOutButton>

			</Header>

			<ProvidersList
				data={providers}
				ListHeaderComponent={
					<ProvidersListTitle>Treinadores disponívies</ProvidersListTitle>
				}
				renderItem={({item: provider}: {item: ProviderProps}) => <ProviderItem name={provider.name} avatar={provider.avatar} id={provider.id} key={provider.id} />}
			/>
		</Container>
	);
};


