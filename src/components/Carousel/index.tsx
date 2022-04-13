import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper'
import { Flex, Heading } from '@chakra-ui/react'

export function Carousel() {
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
                autoplay={{delay:4000, pauseOnMouseEnter: true}}
                loop
            >
                <SwiperSlide
                    style={{ width: '100%', height: '100%' }}
                >
                    <Flex
                        bgImage='/europa.svg'
                        w='100%'
                        h='100%'
                        align='center'
                        justify='center'
                        
                    >
                        <a href="/">
                            <Heading
                                color='light.headingsAndText'
                                fontSize={['24px', '24px', '48px']}
                                fontWeight='700'
                                textAlign='center'                  
                            >
                                Europa
                            </Heading>

                            <Heading
                                color='light.info'
                                fontSize={['14px', '14px', '24px']}
                                fontWeight='700'
                                textAlign='center'
                                mt={['12px', '12px', '16px']}
                            >
                                O continente mais antigo.
                            </Heading>
                        </a>


                    </Flex>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
            </Swiper>
        </Flex>
    )
}