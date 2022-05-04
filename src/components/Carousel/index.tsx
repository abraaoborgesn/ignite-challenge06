import { Swiper, SwiperSlide } from 'swiper/react'
import api from '../../services/api'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper'
import { Flex, Heading } from '@chakra-ui/react'
import { Continent } from '../../models/Continent'
import Link from 'next/link'

interface CarouselProps {
    continents: Continent[]
}

export function Carousel({continents}: CarouselProps) {
    
    return (
        <Flex
            maxW='1240px'
            w='100%'
            h='450px'
            mx='auto'
            mt={['20px', '20px', '52px']}
            mb={['40px']}
        >

            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
                loop
                
            >
                {continents.map( continent => (
                    <SwiperSlide
                    style={{ width: '100%', height: '100%' }}
                    key={continent.id}
                >
                    <Flex
                        bgImage={continent.image}
                        w='100%'
                        h='100%'
                        bgPosition={["100% 20%", "100% 20%", "100% 48%"]}
                        align='center'
                        justify='center'
                        bgSize='cover'

                    >

                        <Link href={`/continents/${continent.slug}`}>
                            <a >
                                <Heading
                                    color='light.headingsAndText'
                                    fontSize={['30px', '30px', '48px']}
                                    fontWeight='700'
                                    textAlign='center'
                                >
                                    {continent.name}
                                </Heading>
                                <Heading
                                    color='light.info'
                                    fontSize={['14px', '14px', '24px']}
                                    fontWeight='700'
                                    textAlign='center'
                                    mt={['12px', '12px', '16px']}
                                >
                                    {continent.title}
                                </Heading>
                            </a>
                        </Link>


                    </Flex>
                </SwiperSlide>
                ))}
                
            </Swiper>
        </Flex>
    )
}
