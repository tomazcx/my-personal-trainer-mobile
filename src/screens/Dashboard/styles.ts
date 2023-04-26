import styled from "styled-components/native";
import {getStatusBarHeight} from "react-native-iphone-x-helper";
import {FlatList} from "react-native";
import {ProviderProps} from "../../components/ProviderItem";
import {RectButton} from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #28262e;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
	color: #f4ede8;
  font-size: 20px;
  line-height: 28px;
`;

export const HeaderUserInfo = styled(RectButton)`
	flex-direction:row;
	gap:16;
`

export const UserName = styled.Text`
	color: #8C0000;
	font-weight: bold;
`;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

export const ProvidersListTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 24px;
  color: #f4ede8;
`;

export const ProvidersList = styled(FlatList as new () => FlatList<ProviderProps>)`
  padding: 32px 24px 16px;
`;

export const LogOutButton = styled.TouchableOpacity`
	width: 64px;
	border-radius: 5px;
	background: #8C0000;
	align-items:center;
	justify-content:center;
	height: 36px;
`
export const LogOutButtonText = styled.Text`
	color: #FFF;
`


