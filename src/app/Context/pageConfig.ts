import EcommerseLandingPng from "../../../images/ecommerse landing.png"
import EcommerseFeatured1Png from "../../../images/EcommerseFeaturedPage1.png"
import EcommerseProductPng from "../../../images/EcommerseProductPage.png"
import EcommsersStoresPng from "../../../images/EcommerseFeaturedStore.png"
import EcommerseStorePng from "../../../images/EcommerseStoreDetail.png"
import EcommerseSignUpPng from "../../../images/EcommerseSignUp.png"
import EcommerseSignInPng from "../../../images/EcommerseSignIn.png"
import { StaticImageData } from "next/image"

interface pageComponentProp {
    id: number,
    name: string,
    img: StaticImageData
}

interface pageConfig {
    [key:string]: pageComponentProp[];
}

export const pageConfig: pageConfig = {
    ecommerce:[
        {id:1,name:"Landing", img: EcommerseLandingPng},
        {id:2,name:"Feature-1",img: EcommerseFeatured1Png},
        {id:3,name:"Product",img: EcommerseProductPng},
        {id:4,name:"Feature-2",img: EcommsersStoresPng},
        {id:5,name:"Store",img: EcommerseStorePng},
        {id:6,name:"SignUp",img: EcommerseSignUpPng},
        {id:7,name:"SignIn",img: EcommerseSignInPng}
    ]
}

export const addPageConfig = (pageName: string,components: pageComponentProp[]): void => {
    pageConfig[pageName] = components
}