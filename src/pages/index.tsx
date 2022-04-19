import { Text, Box } from '@chakra-ui/react'
import { Banner } from '../components/Banner'
import { Carousel } from '../components/Carousel'
import { Header } from '../components/Header'
import { Types } from '../components/TypesOfTrip/Types'
import { Continent } from '../models/Continent'
import api from '../services/api'

interface HomeProps {
  continents: Continent[]
}

export default function Home({continents}: HomeProps) {
  return (
    <>
      <Header />
      <Banner />
      <Types />
      <Box w={['60px', '60px', '90px']} h='2px' bg='dark.headingsAndText' mx='auto' mt={['36px', '36px', '80px']} />
      <Text
        mx='auto'
        textAlign='center'
        mt={['24px', '24px', '52px']}
        fontSize={['xl', 'xl', '4xl']}
        w='100%'
        fontWeight='500'
        lineHeight={['30px', '30px', '54px']}
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>

      <Carousel continents={continents}/>
    

    </>


  )
}

export async function getStaticProps() {
  
  const { data: continents} = await api.get<Continent>('/continents')

  // console.log(continents)

  return {
    props: {
      continents
    }
  }
}
