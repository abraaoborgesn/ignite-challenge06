import { Flex } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Continent } from "../../models/Continent";
import api from "../../services/api";
import { BannerContinente } from "../../components/Banner/bannerContinente";
import { HeaderContinente } from "../../components/Header/headerContinente";
import { Info } from "./info";
import { Cities } from "../../models/Cities";

interface ContinenteProps {
  continent: {
    id: number,
    name: string,
    title: string,
    description: string,
    image: string,
    slug: string,
    countries: number,
    languages: number
  },

  citys: {
    id: number,
    name: string,
    country: string,
    continenteId: number,
    imageFlag: string,
    image: string
  }[]

}


export default function Continente({ continent, citys }: ContinenteProps) {

  // console.log(continent)
  console.log(citys)
  return (
    <>
      <HeaderContinente />
      <BannerContinente />
      <Info continent={continent} citys={citys} />

    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { slug } = params

  console.log(slug)

  const { data: continents } = await api.get<Continent[]>(`/continents`)

  const continent = continents.find((c) => c.slug === slug);



  console.log(continent.id)


  const { data: cities } = await api.get<Cities[]>(`/cities`)

  // console.log(cities)
  const citys = cities.filter(city => city.continenteId === continent.id)

  // console.log(citys)

  return {
    props: {
      continent,
      citys
    },
    revalidate: 1 * 60 * 60 * 24 // 1 day
  }
}