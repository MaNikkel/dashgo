import { Flex, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'


export default function SignIn() {
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
      >
        <Stack spacing="4">
          <Input 
            type="email"
            name="email"
            label="E-mail"
          />
          <Input 
            type="password"
            name="password"
            label="Senha"
          />

        </Stack>
        <Button
          type="submit"
          marginTop="6"
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
