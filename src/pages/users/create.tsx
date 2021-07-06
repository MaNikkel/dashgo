import { Divider, Heading, SimpleGrid, Stack, Box, Flex , Button} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
})

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
  }

  return (
    <Box>
      <Header />
      <Flex 
        width="100%" 
        marginY="6" 
        maxWidth={1480} 
        marginX="auto" 
        paddingX="6"
      >
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius="8"
          backgroundColor="gray.800"
          padding={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          <Divider marginY="6" borderColor="gray.700"/>

          <Stack
            direction="column"
            spacing="8"
          >
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
              <Input 
                name="name"
                label="Nome completo"
                error={errors.name}
                {...register('name')}
              />
              <Input 
                name="email"
                label="E-mail"
                type="email"
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
              <Input 
                name="password"
                type="password"
                label="Senha"
                error={errors.password}
                {...register('password')}

              />
              <Input 
                name="password_confirmation"
                type="password"
                label="Confirmação de Senha"
                error={errors.password_confirmation}
                {...register('password_confirmation')}

              />
            </SimpleGrid>
          </Stack>
          <Flex
            marginTop="8"
            justifyContent="flex-end"
          >
            <Stack
              direction="row"
              spacing="4"
            >
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button colorScheme="pink" type="submit" isLoading={formState.isSubmitting}>Salvar</Button>

            </Stack>

          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}