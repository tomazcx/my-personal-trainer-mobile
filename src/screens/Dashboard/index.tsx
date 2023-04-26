import React, {Provider, useCallback, useEffect, useState} from "react";
import {ParamListBase, useNavigation} from "@react-navigation/native";
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
	LogOutButtonText,
	SearchProviders,
	NotFoundText
} from "./styles";
import {AxiosResponse} from "axios";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {ProviderItem} from "../../components/ProviderItem";
import {ProviderProps} from "../../components/ProviderItem";
import {SearchInput} from "../../components/SearchInput";

export const Dashboard: React.FC = () => {
	const [providers, setProviders] = useState<ProviderProps[]>([]);

	const {user, signOut} = useAuth();
	const [searchText, setSearchText] = useState('')
	const {navigate} = useNavigation<NativeStackNavigationProp<ParamListBase>>()

	useEffect(() => {
		api.get("/providers").then((response: AxiosResponse) => {
			setProviders(response.data);
		});
	}, []);

	const navigateToProfile = useCallback(() => {
		navigate("Profile");
	}, [navigate]);

	const providerList = searchText ? providers?.filter(provider => provider.name.toLowerCase().includes(searchText.toLowerCase())) : []


	return (
		<Container>
			<Header>
				<HeaderUserInfo onPress={navigateToProfile}>
					<UserAvatar source={{uri: user.avatar ? `https://my-personal-trainer-api.up.railway.app/files/${user.avatar}` : 'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'}} />

					<HeaderTitle>
						Bem vindo, {"\n"}
						<UserName>{user.name}</UserName>
					</HeaderTitle>
				</HeaderUserInfo>
				<LogOutButton onPress={signOut} ><LogOutButtonText>Sair</LogOutButtonText></LogOutButton>

			</Header>
			<ProvidersListTitle>Treinadores disponívies</ProvidersListTitle>

			<SearchInput onChangeText={(text: string) => setSearchText(text)} />

			{searchText && providerList.length === 0 ? <NotFoundText>Nenhum treinador encontrado!</NotFoundText> : null}
			<ProvidersList
				data={searchText ? providerList : providers}
				renderItem={({item: provider}: {item: ProviderProps}) => <ProviderItem name={provider.name} avatar={provider.avatar} id={provider.id} key={provider.id} />}
			/>
		</Container>
	);
};


