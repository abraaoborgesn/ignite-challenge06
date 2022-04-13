import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";


interface TypesOfTripProps {
    image: string,
    title: string,
    alt: string,
    minWidth: string
}

export function TypesOfTrip({ image, title, alt, minWidth }: TypesOfTripProps) {

    const isWideVersion = useBreakpointValue({
        base: false,
        sm: false,
        md: true,
        lg: true
    })

    return (

        <Flex direction={['row', 'row', 'column']} alignItems='center' justify='center' flex='1' minW={minWidth}>
            {isWideVersion && (
                <Image src={`/${image}.svg`} h="85px" alt={alt} />
            )}
            {!isWideVersion && (
                <Image src="/ellipse.svg" h="8px" mr='2' alt="Ellipse" />
            )}

            <Text mt={['0', '0', '6']} align='center' color='dark.headingsAndText' fontWeight='600' fontSize={['18px', '18px', '24px']}>{title}</Text>
        </Flex>


    )
}