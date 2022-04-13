import { Flex } from "@chakra-ui/react";
import { TypesOfTrip } from ".";


export function Types() {
    return (
        <Flex
            w='100%'
            maxW='1160px'
            minW='275px'
            align='center'
            justify="space-between"
            flexWrap="wrap"
            px='12'
            mx='auto'
            gap='8'
            mt={['9', '9', '28']}
        >
            <TypesOfTrip
                title='vida noturna'
                image='vidaNoturna'
                alt="Imagem de um drink"
                minWidth="136px"
            />
            <TypesOfTrip
                title='praia'
                image='praia'
                alt="Imagem de uma praia"
                minWidth="68px"
            />
            <TypesOfTrip
                title='moderno'
                image='moderno'
                alt="Imagem de um prédio"
                minWidth="103px"
            />
            <TypesOfTrip
                title='clássico'
                image='classico'
                alt="Imagem de um monumento"
                minWidth="93px"
            />
            <TypesOfTrip
                title='e mais...'
                image='mais'
                alt="Imagem da Terra"
                minWidth="96px"
            />
        </Flex>
    )
}