import { Flex } from "@chakra-ui/react";
import { BannerContinente } from "./bannerContinente";
import { HeaderContinente } from "./headerContinente";
import { Info } from "./info";

export default function Continente() {
    return (
        <>
            <HeaderContinente />
            <BannerContinente />
            <Info />
        </>
    )
}