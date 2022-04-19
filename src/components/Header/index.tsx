import { Flex, Box, Image, Text } from '@chakra-ui/react'
import api from '../../services/api'
export function Header() {

    


    return (
        <Flex
            as='header'
            w='100%'
            maxWidth={1480}
            h={['50px', '50px', '100px']}
            mx='auto'
            align='center'
            justify='center'
        >
            <Image src='/logo.svg' alt='logo' h='46' w='186' />
        </Flex>
    )
}