import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
      alignItems="center"
    >
      { showProfileData && (<Box marginRight="4" textAlign="right">
        <Text>Mathias Nikkel</Text>
        <Text color="gray.300" fontSize="small">
          mathiasniggel@gmail.com
        </Text>
      </Box>) }

      <Avatar size="md" name="Mathias Nikkel"/>
    </Flex>
  )
}