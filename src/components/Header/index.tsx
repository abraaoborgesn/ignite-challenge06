import { Flex, Box, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'

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
            <Link href='/'>
                <a>
                    <Image
                        src='/logo.svg'
                        alt='logo'
                        h={['20px', '20px', '46px']}
                        w={['81px', '81px', '186px']}
                    />
                </a>
            </Link>
        </Flex>
    )
}