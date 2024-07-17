import EcommerseLandingPng from "../../../images/ecommerse landing.png"
import EcommerseFeatured1Png from "../../../images/EcommerseFeaturedPage1.png"
import EcommerseProductPng from "../../../images/EcommerseProductPage.png"
import EcommsersStoresPng from "../../../images/EcommerseFeaturedStore.png"
import EcommerseStorePng from "../../../images/EcommerseStoreDetail.png"
import EcommerseSignUpPng from "../../../images/EcommerseSignUp.png"
import EcommerseSignInPng from "../../../images/EcommerseSignIn.png"
import { StaticImageData } from "next/image"
import ExportEcommerseLandingPng from "../../../images/EccomerseLandingFullPage.png"
import ExportEcommerseFeaturePng from "../../../images/EcommerceFeatureFulPage.png"
import ExportEcommerseSignUpPng from "../../../images/EccomerceSignUpPage.png"
import ExportEcommerseSignInPng from "../../../images/EccomerceSignInFullPage.png"
import ExportEcommerseStorePng from "../../../images/EccomerseStoreFullPage.png"
import ExportEcommerseStoresPng from "../../../images/EccomerceAllStoreFullPage.png"
import ExportEcommerseProductPng from "../../../images/EcommerceProductDetailFP.png"
interface pageComponentProp {
    id: number,
    name: string,
    img: StaticImageData
    exportImg: StaticImageData
}

interface pageConfig {
    [key:string]: pageComponentProp[];
}

export const pageConfig: pageConfig = {
    ecommerce:[
        {id:1,name:"Landing", img: EcommerseLandingPng,exportImg:ExportEcommerseLandingPng},
        {id:2,name:"Feature-1",img: EcommerseFeatured1Png,exportImg:ExportEcommerseFeaturePng},
        {id:3,name:"Product",img: EcommerseProductPng,exportImg:ExportEcommerseProductPng},
        {id:4,name:"Feature-2",img: EcommsersStoresPng,exportImg:ExportEcommerseStoresPng},
        {id:5,name:"Store",img: EcommerseStorePng,exportImg:ExportEcommerseStorePng},
        {id:6,name:"SignUp",img: EcommerseSignUpPng,exportImg:ExportEcommerseSignUpPng},
        {id:7,name:"SignIn",img: EcommerseSignInPng,exportImg:ExportEcommerseSignInPng}
    ]
}

export const addPageConfig = (pageName: string,components: pageComponentProp[]): void => {
    pageConfig[pageName] = components
}