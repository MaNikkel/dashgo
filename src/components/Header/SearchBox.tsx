import { Flex, Input, Icon } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'

export function SearchBox() {
  return (
    <Flex
        as="label"
        flex="1"
        paddingY="4"
        paddingX="8"
        marginLeft="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        backgroundColor="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          paddingX="4"
          marginRight="4"

          _placeholder={{
            color: 'gray.400'

          }}
        />
        <Icon 
          as={RiSearchLine}
          fontSize="20"
        />
      </Flex>
  )
}