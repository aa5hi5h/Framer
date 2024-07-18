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
import LmsLandingPng from "../../../images/LmsLandingReal.png"
import LmsSignInPng from "../../../images/LmsSignIn.png"
import LmsSignUpPng from "../../../images/LmsSignUp.png"
import LmsVideoDetailPng from "../../../images/LmsCourseDetail.png"
import LmsExplorePng from "../../../images/LmsLanding.png"
import BlogLandingPng from "../../../images/BlogLandingPng.png"
import BlogDetailPng from "../../../images/BlogDetailPng.png"
import BlogSignInPng from "../../../images/EcommerseSignIn.png"
import BlogSignUpPng from "../../../images/EcommerseSignUp.png"
import RentalLandingPng from "../../../images/BlogLandingPng.png"
import RentalDetailPng from "../../../images/RentalProductDetailPng.png"
import RentalSignInPng from "../../../images/EcommerseSignIn.png"
import RentalSignUpPng from "../../../images/EcommerseSignUp.png"
import SaasLandingPng from "../../../images/SaasLandingPng.png"
import SaasSignInPng from "../../../images/EcommerseSignIn.png"
import SaasSignUpPng from "../../../images/EcommerseSignUp.png"
import SocialMediaLandingPng from "../../../images/TwitterLandingPng.png"
import SocialMediaNotificationPng from "../../../images/TwiiterNotificationPng.png"
import SocialMediaProfilePng from "../../../images/TwitterProfilePng.png"
import SocialMediaSignInPng from "../../../images/TwiiterSignInPng.png"
import SocialMediaSignUpPng from "../../../images/TwitterSignUp.png"
import SocialMediaReplyPng from "../../../images/TwiiterProductPng.png"

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
    ],
    lms:[
        {id:1,name:"Landing", img:LmsLandingPng,exportImg:ExportEcommerseFeaturePng},
        {id:2,name:"Explore",img:LmsExplorePng,exportImg:ExportEcommerseFeaturePng},
        {id:3,name:"Course card",img:LmsVideoDetailPng,exportImg:ExportEcommerseProductPng},
        {id:4,name:"SignIn",img:LmsSignInPng,exportImg:ExportEcommerseSignInPng},
        {id:5,name:'SignUp',img:LmsSignUpPng,exportImg:ExportEcommerseSignUpPng}
    ],
    blog:[
        {id:1,name:"Landing",img:BlogLandingPng,exportImg:ExportEcommerseFeaturePng},
        {id:2,name:"Blog detail",img:BlogDetailPng,exportImg:ExportEcommerseFeaturePng},
        {id:3,name:"SignIn",img:BlogSignInPng,exportImg:ExportEcommerseSignInPng},
        {id:4,name:"SignUp",img:BlogSignUpPng,exportImg:ExportEcommerseSignUpPng}
    ],
    rental:[
        {id:1,name:"Landing",img:RentalLandingPng,exportImg:ExportEcommerseStorePng},
        {id:2,name:"Reservation",img:RentalDetailPng,exportImg:ExportEcommerseSignUpPng},
        {id:3,name:"SignIn",img:RentalSignInPng,exportImg:ExportEcommerseSignInPng},
        {id:4,name:"SignUp",img:RentalSignUpPng,exportImg:ExportEcommerseSignInPng}
    ],
    saas:[
        {id:1,name:"Landing",img:SaasLandingPng,exportImg:ExportEcommerseSignUpPng},
        {id:2,name:"SignIn",img:SaasSignInPng ,exportImg:ExportEcommerseFeaturePng},
        {id:3,name:"SignUp",img:SaasSignUpPng, exportImg:ExportEcommerseStoresPng}
    ],
    social:[
        {id: 1, name:"Landing",img:SocialMediaLandingPng,exportImg:ExportEcommerseSignInPng},
        {id:2 , name:"Reply",img:SocialMediaReplyPng,exportImg:ExportEcommerseSignInPng},
        {id:3,name:"Notification",img:SocialMediaNotificationPng,exportImg:EcommerseSignInPng},
        {id:4,name:"Profile",img:SocialMediaProfilePng,exportImg:ExportEcommerseFeaturePng},
        {id:5,name:"SignIn",img:SocialMediaSignInPng,exportImg:ExportEcommerseSignInPng},
        {id:6,name:"SignUp",img:SocialMediaSignUpPng,exportImg:ExportEcommerseSignUpPng}
    ]
}

export const addPageConfig = (pageName: string,components: pageComponentProp[]): void => {
    pageConfig[pageName] = components
}