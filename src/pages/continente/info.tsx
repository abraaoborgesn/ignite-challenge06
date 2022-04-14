import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { BiInfoCircle } from 'react-icons/bi'

export function Info() {
    return (
        <>
            <Flex
                mt={['24px', '24px', '80px']}
                w={['343px', '343px', '1160px']}
                // w='100%'
                mx='auto'
                align='center'
                justify='space-between'
                flexWrap='wrap'
            >
                <Text
                    w={['343px', '343px', '600px']}
                    h={['146px', '146px', '211px']}
                    fontSize={['sm', 'sm', '2xl']}
                    lineHeight={['xl', 'xl', '4xl']}
                    fontWeight='400'
                    align='justify'
                >
                    A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                </Text>

                <Flex ml={['0', '0', '70px']} gap='42px' mt={['16px', '16px', '0']}>
                    <Box>
                        <Text
                            fontWeight='600'
                            fontSize={['2xl', '2xl', '5xl']}
                            lineHeight={['2xl', '2xl', '4xl']}
                            align='center'
                            color='Highlight'
                        >
                            50
                        </Text>
                        <Text
                            fontSize={['lg', 'lg', '2xl']}
                            fontWeight='600'
                            lineHeight={['3xl', '3xl', '4xl']}
                        >
                            países
                        </Text>
                    </Box>
                    <Box>
                        <Text
                            fontWeight='600'
                            fontSize={['2xl', '2xl', '5xl']}
                            lineHeight={['2xl', '2xl', '4xl']}
                            align='center'
                            color='Highlight'
                        >
                            60
                        </Text>
                        <Text
                            fontSize={['lg', 'lg', '2xl']}
                            fontWeight='600'
                            lineHeight={['3xl', '3xl', '4xl']}
                        >
                            línguas
                        </Text>
                    </Box>
                    <Box>
                        <Text
                            fontWeight='600'
                            fontSize={['2xl', '2xl', '5xl']}
                            lineHeight={['2xl', '2xl', '4xl']}
                            align='center'
                            color='Highlight'
                        >
                            24
                        </Text>
                        <Text
                            fontSize={['lg', 'lg', '2xl']}
                            fontWeight='600'
                            lineHeight={['3xl', '3xl', '4xl']}
                        >
                            cidades +100
                        </Text>

                    </Box>

                </Flex>

            </Flex>

            <Flex
                direction='column'
                mt={['32px', '32px', '80px']}
                w={['300px', '300px', '1160px']}
                // w='100%'
                mx='auto'
                justify='left'



            >
                <Heading>
                    Cidades +100
                </Heading>



                <Flex justify='left' gap='45px' flexWrap='wrap' mb='35px'>
                    
                    <Box mx={['auto', 'auto', '0']}>
                        <Flex
                            direction='column'
                            mt={['20px', '20px', '40px']}
                            mx='auto'
                            w='100%'
                            maxW='256px'
                            h='279px'
                        >
                            <Image src="/londres.svg" h='173px' w='256px' />

                            <Flex
                                w='256px'
                                h='106px'
                                justify='space-between'
                                align='center'
                                border='1px solid'
                                borderColor='Highlight_50'
                            >
                                <Box ml='24px'>
                                    <Heading
                                        fontWeight='600'
                                        fontSize={['xl']}
                                        lineHeight={['2xl']}
                                    >
                                        Londres
                                    </Heading>
                                    <Text
                                        color='dark.info'
                                        fontSize={['md']}
                                        lineHeight={['2xl']}
                                        mt={['12px']}
                                    >
                                        Reino Unido
                                    </Text>
                                </Box>
                                <Flex align='center' mr='24px'>
                                    <Image src='/inglaterra.svg' />
                                </Flex>
                            </Flex>
                            
                        </Flex>                        
                    </Box>

                    <Box mx={['auto', 'auto', '0']}>
                        <Flex
                            direction='column'
                            mt={['20px', '20px', '40px']}
                            mx='auto'
                            w='100%'
                            maxW='256px'
                            h='279px'
                        >
                            <Image src="/londres.svg" h='173px' w='256px' />

                            <Flex
                                w='256px'
                                h='106px'
                                justify='space-between'
                                align='center'
                                border='1px solid'
                                borderColor='Highlight_50'
                            >
                                <Box ml='24px'>
                                    <Heading
                                        fontWeight='600'
                                        fontSize={['xl']}
                                        lineHeight={['2xl']}
                                    >
                                        Londres
                                    </Heading>
                                    <Text
                                        color='dark.info'
                                        fontSize={['md']}
                                        lineHeight={['2xl']}
                                        mt={['12px']}
                                    >
                                        Reino Unido
                                    </Text>
                                </Box>
                                <Flex align='center' mr='24px'>
                                    <Image src='/inglaterra.svg' />
                                </Flex>
                            </Flex>
                            
                        </Flex>                        
                    </Box>

                    <Box mx={['auto', 'auto', '0']}>
                        <Flex
                            direction='column'
                            mt={['20px', '20px', '40px']}
                            mx='auto'
                            w='100%'
                            maxW='256px'
                            h='279px'
                        >
                            <Image src="/londres.svg" h='173px' w='256px' />

                            <Flex
                                w='256px'
                                h='106px'
                                justify='space-between'
                                align='center'
                                border='1px solid'
                                borderColor='Highlight_50'
                            >
                                <Box ml='24px'>
                                    <Heading
                                        fontWeight='600'
                                        fontSize={['xl']}
                                        lineHeight={['2xl']}
                                    >
                                        Londres
                                    </Heading>
                                    <Text
                                        color='dark.info'
                                        fontSize={['md']}
                                        lineHeight={['2xl']}
                                        mt={['12px']}
                                    >
                                        Reino Unido
                                    </Text>
                                </Box>
                                <Flex align='center' mr='24px'>
                                    <Image src='/inglaterra.svg' />
                                </Flex>
                            </Flex>
                            
                        </Flex>                        
                    </Box>

                    <Box mx={['auto', 'auto', '0']}>
                        <Flex
                            direction='column'
                            mt={['20px', '20px', '40px']}
                            mx='auto'
                            w='100%'
                            maxW='256px'
                            h='279px'
                        >
                            <Image src="/londres.svg" h='173px' w='256px' />

                            <Flex
                                w='256px'
                                h='106px'
                                justify='space-between'
                                align='center'
                                border='1px solid'
                                borderColor='Highlight_50'
                            >
                                <Box ml='24px'>
                                    <Heading
                                        fontWeight='600'
                                        fontSize={['xl']}
                                        lineHeight={['2xl']}
                                    >
                                        Londres
                                    </Heading>
                                    <Text
                                        color='dark.info'
                                        fontSize={['md']}
                                        lineHeight={['2xl']}
                                        mt={['12px']}
                                    >
                                        Reino Unido
                                    </Text>
                                </Box>
                                <Flex align='center' mr='24px'>
                                    <Image src='/inglaterra.svg' />
                                </Flex>
                            </Flex>
                            
                        </Flex>                        
                    </Box>

                    <Box mx={['auto', 'auto', '0']}>
                        <Flex
                            direction='column'
                            mt={['20px', '20px', '40px']}
                            mx='auto'
                            w='100%'
                            maxW='256px'
                            h='279px'
                        >
                            <Image src="/londres.svg" h='173px' w='256px' />

                            <Flex
                                w='256px'
                                h='106px'
                                justify='space-between'
                                align='center'
                                border='1px solid'
                                borderColor='Highlight_50'
                            >
                                <Box ml='24px'>
                                    <Heading
                                        fontWeight='600'
                                        fontSize={['xl']}
                                        lineHeight={['2xl']}
                                    >
                                        Londres
                                    </Heading>
                                    <Text
                                        color='dark.info'
                                        fontSize={['md']}
                                        lineHeight={['2xl']}
                                        mt={['12px']}
                                    >
                                        Reino Unido
                                    </Text>
                                </Box>
                                <Flex align='center' mr='24px'>
                                    <Image src='/inglaterra.svg' />
                                </Flex>
                            </Flex>
                            
                        </Flex>                        
                    </Box>
                    

                </Flex>
                







            </Flex>
        </>
    )
}