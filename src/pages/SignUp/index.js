import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter no mínimo seis caractéres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <h1>CHARLES LAPIN</h1>
      <h4>Cadastro de consultora</h4>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <Input
          name="passconfirm"
          type="password"
          placeholder="Confirmação da senha"
        />
        <Input
          name="telefone1"
          type="text"
          placeholder="Seu número de telefone"
        />
        <Input
          name="celular1"
          type="text"
          placeholder="Seu número de celular"
        />
        <Input name="cpf" type="text" placeholder="Seu CPF" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho conta</Link>
      </Form>
    </>
  );
}
