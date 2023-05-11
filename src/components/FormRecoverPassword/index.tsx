import React from "react"
import {Form} from "@unform/mobile"
import {FormDescription, FormTitle, GoBackDescription, GoBackText} from "./styles"
import Input from '../Input'
import Button from '../Button'

interface FormRecoverPassword {
	setForm: (value: number) => void
}

export const FormRecoverPassword: React.FC<FormRecoverPassword> = ({setForm}) => {

	const handleSubmit = () => {}

	return (
		<Form onSubmit={handleSubmit}>
			<FormTitle>Insira o token e redefina sua senha</FormTitle>
			<FormDescription>Informe a nova senha desejada e a sua confirmação e o token para conseguir acessar a sua conta.</FormDescription>
			<Input name="token" icon="key" placeholder="Token" />
			<Input name="password" icon="lock" placeholder="Senha" />
			<Input name="password_confirmation" icon="lock" placeholder="Confirmar senha" />
			<GoBackDescription>Não recebeu o token? Clique no botão abaixo para enviar novamente.</GoBackDescription>
			<GoBackText onPress={() => setForm(0)}>Enviar novamente</GoBackText>

			<Button>Enviar</Button>
		</Form>

	)

}
