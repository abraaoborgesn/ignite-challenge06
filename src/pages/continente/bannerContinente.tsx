import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function BannerContinente() {

    const isWideVersion = useBreakpointValue({
        base: false,
        sm: false,
        md: true,
        lg: true
    })

    return (
        <Flex
            bgImage='/imageEuropa.svg'
            bgSize='cover'
            w='100%'
            h={["163px", "163px", "500px"]}
            bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
            p={["1.75rem 1rem", "1.75rem 1rem", "5rem 8.75rem 0"]}

        >
            
        </Flex>

    )
}