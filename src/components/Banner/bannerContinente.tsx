import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";

interface BannerContinentProps {
    citys: {
        id: number,
        name: string,
        country: string,
        continenteId: number,
        imageFlag: string,
        image: string
    }[],
    continent: {
        id: number,
        name: string,
        title: string,
        description: string,
        image: string,
        slug: string,
        countries: number,
        languages: number
    }
}

export function BannerContinente({ continent, citys }: BannerContinentProps) {

    const isWideVersion = useBreakpointValue({
        base: false,
        sm: false,
        md: true,
        lg: true
    })

    // console.log(citys[0])
    return (
        <Flex
            bgImage={citys[0].image}
            bgSize='cover'
            w='100%'
            h={["163px", "163px", "500px"]}
            bgPosition={["100% 20%", "100% 20%", "100% 60%"]}
            // p={["1.75rem 1rem", "1.75rem 1rem", "5rem 8.75rem 0"]}
            justifyContent={['center','center','normal']}
            align={['center','center','normal']}
        >
            <Text
                marginTop={['', '', '23rem']}
                marginLeft={['','','140px']}

                color='light.headingsAndText'
                fontWeight='600'
                fontSize={['28px', '28px', '64px']}
            // fontSize='10px'
            >
                {continent.name}
            </Text>

        </Flex>


    )
}