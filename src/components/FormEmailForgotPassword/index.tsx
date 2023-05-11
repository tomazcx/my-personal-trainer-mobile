import React from "react"
import {Form} from "@unform/mobile"
import {FormDescription, FormTitle} from "./styles"
import Input from "../Input"
import Button from "../Button"

interface FormEmailForgotPassword {
	setForm: (value: number) => void
}

export const FormEmailForgotPassword: React.FC<FormEmailForgotPassword> = ({setForm}) => {

	const handleSubmit = () => {}

	return (
		<Form onSubmit={handleSubmit}>
			<FormTitle>Insira o seu email</FormTitle>
			<FormDescription>Caso você possua uma conta com o email informado, você recebera em sua caixa postal um token para recuperar sua senha.</FormDescription>
			<Input name="email" icon="mail" placeholder="Email" />
			<Button>Enviar</Button>
		</Form>

	)

}
