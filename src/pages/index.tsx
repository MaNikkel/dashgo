import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })
  const { errors } = formState

  const handleSignin: SubmitHandler<SignInFormData> = (values) => {
    console.log(values)
  }

  return (
    <Flex 
      width="100vw" 
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth="360px"
        backgroundColor="gray.800"
        padding="8" // espaçamento * 4 = espaçamento em px, espaçamento / 4 = espaçamento em rem
        borderRadius="8px"
        flexDirection="column"
        onSubmit={handleSubmit(handleSignin)}
      >
        <Stack spacing="4">
          <Input 
            type="email"
            name="email"
            label="E-mail"
            error={errors.email}
            {...register('email')}
          />
          <Input 
            type="password"
            name="password"
            label="Senha"
            error={errors.password}
            {...register('password')}
          />

        </Stack>
        <Button
          type="submit"
          marginTop="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
