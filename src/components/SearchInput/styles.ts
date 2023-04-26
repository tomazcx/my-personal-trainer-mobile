import styled from "styled-components/native";

export const Container = styled.View`
	background-color: #3e3b47;
	border-radius:8px;
	color: #FFF;
	margin: 0px 24px 16px;
	padding: 5px 10px;
	flex-direction: row;
	align-items:center;
	gap: 16px;	
`

export const Input = styled.TextInput`
	color: #FFF;
	flex:1;

	::placeholder{
		color: "#FFF"
	}
`
