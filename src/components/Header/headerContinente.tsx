import { Flex, Image } from '@chakra-ui/react'
import Link from 'next/link'

export function HeaderContinente() {
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
            <Flex position='relative' right={['115px', '115px', '456px']}>
                <Link href='/'>
                    <a>
                        <Image src='/buttonBack.svg' h={['16px', '16px', '32px']} />
                    </a>
                </Link>
            </Flex>

            <Link href='/'>
                <a>
                    <Image src='/logo.svg' alt='logo' h={['20px', '20px', '46px']} w={['81px', '81px', '186px']} />
                </a>
            </Link>
        </Flex >
    )
}