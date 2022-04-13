import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {

    const isWideVersion = useBreakpointValue({
        base: false,
        sm: false,
        md: true,
        lg: true
    })

    return (
        <Flex
            bgImage='/background.svg'
            bgSize='cover'
            w='100%'
            h={["163px", "163px", "335px"]}
            bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
            p={["1.75rem 1rem", "1.75rem 1rem", "5rem 8.75rem 0"]}

        >
            <Flex w='100%' direction='column'>
                <Text
                    color='light.headingsAndText'
                    fontSize={['xl', 'xl', '4xl']}
                    lineHeight={['8', '8', 'tall']}
                    maxW={['333px', '333px', '524px']}
                >
                    5 continentes,<br />
                    infinitas possibilidades.
                </Text>
                <Text
                    color='light.info'
                    fontSize={['sm', 'sm', 'xl']}
                >
                    Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                </Text>
            </Flex>

            {isWideVersion && (
                <Image
                    h={{ md: "160px", lg: "293px" }}
                    ml="auto"
                    src='/airplane.svg' alt='avião'
                />
            )}
        </Flex>

    )
}