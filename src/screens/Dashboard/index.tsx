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
	ProfileButton,
	UserAvatar,
	ProvidersList,
	ProvidersListTitle
} from "./styles";
import {AxiosResponse} from "axios";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {Button} from "react-native";
import {ProviderItem} from "../../components/ProviderItem";
import {ProviderProps} from "../../components/ProviderItem";

export const Dashboard: React.FC = () => {
	const [providers, setProviders] = useState<ProviderProps[]>([]);

	const {user, signOut} = useAuth();
	const {navigate} = useNavigation<NativeStackNavigationProp<ParamListBase>>()

	useEffect(() => {
		api.get("/providers").then((response: AxiosResponse) => {
			console.log(response.data)
			setProviders(response.data);
		});
	}, []);

	const navigateToProfile = useCallback(() => {
		navigate("Profile");
	}, [navigate]);



	return (
		<Container>
			<Header>
				<HeaderTitle>
					Bem vindo, {"\n"}
					<UserName>{user.name}</UserName>
				</HeaderTitle>

				<ProfileButton onPress={navigateToProfile}>
					<UserAvatar source={{uri: user.avatar_url}} />
				</ProfileButton>
				<Button onPress={signOut} title="Sair" />
			</Header>

			<ProvidersList
				data={providers}
				ListHeaderComponent={
					<ProvidersListTitle>Personal Trainers</ProvidersListTitle>
				}
				renderItem={({item: provider}: {item: ProviderProps}) => <ProviderItem name={provider.name} avatar_url={provider.avatar_url} id={provider.id} key={provider.id} />}
			/>
		</Container>
	);
};


