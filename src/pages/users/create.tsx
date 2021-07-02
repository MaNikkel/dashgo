import { Divider, Heading, SimpleGrid, Stack, Box, Flex , Button} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
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
          flex="1"
          borderRadius="8"
          backgroundColor="gray.800"
          padding={["6", "8"]}
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
              />
              <Input 
                name="email"
                label="E-mail"
                type="email"
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
              <Input 
                name="password"
                type="password"
                label="Senha"
              />
              <Input 
                name="password_confirmation"
                type="password"
                label="Confirmação de Senha"
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
              <Button colorScheme="pink">Salvar</Button>

            </Stack>

          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}