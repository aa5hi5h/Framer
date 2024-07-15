import FirstContact from "@/(packages)/components/Contact/Contact-1/page"
import SecondContact from "@/(packages)/components/Contact/Contact-2/page"
import ThirdContact from "@/(packages)/components/Contact/Contact-3/page"
import FourthContact from "@/(packages)/components/Contact/Contact-4/page"
import FirstFAQ from "@/(packages)/components/FAQ/FAQ-1/page"
import SecondFAQ from "@/(packages)/components/FAQ/FAQ-2/page"
import FirstFooter from "@/(packages)/components/Footer/Footer-1/page"
import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"
import FirstHeader from "@/(packages)/components/Header/Header-1/page"
import SecondHeader from "@/(packages)/components/Header/Header-2/page"
import FirstHero from "@/(packages)/components/Hero/Hero-1/page"
import SecondHero from "@/(packages)/components/Hero/Hero-2/page"
import ThirdHero from "@/(packages)/components/Hero/Hero-3/page"
import FourthHero from "@/(packages)/components/Hero/Hero-4/page"
import FirstItemDetail from "@/(packages)/components/ItemDetail/ItemsDetail-1/page"
import SecondItemDetail from "@/(packages)/components/ItemDetail/ItemsDetail-2/page"
import FirstListing from "@/(packages)/components/Listing/Listing-1/page"
import SecondListing from "@/(packages)/components/Listing/Listing-2/page"
import ThirdListing from "@/(packages)/components/Listing/Listing-3/page"
import FirstSignIn from "@/(packages)/components/Login/Login-1/page"
import FirstLogin from "@/(packages)/components/Login/Login-1/page"
import SecondSignIn from "@/(packages)/components/Login/Login-2/page"
import ThirdSignIn from "@/(packages)/components/Login/Login-3/page"
import FourthSignIn from "@/(packages)/components/Login/Login-4/page"
import FirstLogo from "@/(packages)/components/Logo/Logo-1/page"
import SecondLogo from "@/(packages)/components/Logo/Logo-2/page"
import ThirdLogo from "@/(packages)/components/Logo/Logo-3/page"
import Navbar from "@/(packages)/components/Navbar/Navbar-1/page"
import SecondNavbar from "@/(packages)/components/Navbar/Navbar-2/page"
import FirstPricing from "@/(packages)/components/Pricing/Pricing-1/page"
import SecondPricing from "@/(packages)/components/Pricing/Pricing-2/page"
import ThirdPricing from "@/(packages)/components/Pricing/Pricing-3/page"
import FirstSignUp from "@/(packages)/components/SignUp/SignUp-1/page"
import SecondSignUp from "@/(packages)/components/SignUp/SignUp-2/page"
import ThirdSignUp from "@/(packages)/components/SignUp/SignUp-3/page"
import FourthSignUp from "@/(packages)/components/SignUp/SignUp-4/page"
import FirstTestimonial from "@/(packages)/components/Testimonials/Testimonials-1/page"
import SecondTestimonial from "@/(packages)/components/Testimonials/Testimonials-2/page"
import ThirdTestimonial from "@/(packages)/components/Testimonials/Testimonials-3/page"
import BlogDetailPage from "@/(packages)/custom/Blog/(pages)/DetailPage"
import BlogLanding from "@/(packages)/custom/Blog/(pages)/Landing"
import BlogSignInPage from "@/(packages)/custom/Blog/(pages)/SignInPage"
import BlogSignUpPage from "@/(packages)/custom/Blog/(pages)/SignUpPage"
import EcommerceFeaturedPage from "@/(packages)/custom/Ecommerce/(pages)/featuredPage"
import EcommerceLanding from "@/(packages)/custom/Ecommerce/(pages)/landing"
import EcommerceProductDetail from "@/(packages)/custom/Ecommerce/(pages)/productDetail"
import EcommerceSignInPage from "@/(packages)/custom/Ecommerce/(pages)/SignInPage"
import EcommerceSignUpPage from "@/(packages)/custom/Ecommerce/(pages)/SignUpPage"
import EcommerceStore from "@/(packages)/custom/Ecommerce/(pages)/store"
import EcommerceStoreDetail from "@/(packages)/custom/Ecommerce/(pages)/StoreDetail"
import LmsFeaturePage from "@/(packages)/custom/Lms/(pages)/FeaturePage"
import LmsLanding from "@/(packages)/custom/Lms/(pages)/Landing"
import LmsProductDetail from "@/(packages)/custom/Lms/(pages)/ProductDetail"
import LmsSignIn from "@/(packages)/custom/Lms/(pages)/SignInPage"
import LmsSignUp from "@/(packages)/custom/Lms/(pages)/SignUpPage"
import RentalsDetailCard from "@/(packages)/custom/Rental/(pages)/DetailCard"
import RentalLanding from "@/(packages)/custom/Rental/(pages)/Landing"
import RenatalsSignUp from "@/(packages)/custom/Rental/(pages)/SignUp"
import SaasLanding from "@/(packages)/custom/Saas/(pages)/Landing"
import SaasSignIn from "@/(packages)/custom/Saas/(pages)/SignIn"
import TwitterDetail from "@/(packages)/custom/Twiter/(pages)/Detail"
import TwitterLanding from "@/(packages)/custom/Twiter/(pages)/Landing"
import TwitterNotification from "@/(packages)/custom/Twiter/(pages)/Notification"
import TwitterProfile from "@/(packages)/custom/Twiter/(pages)/Profile"
import TwitterSignUp from "@/(packages)/custom/Twiter/(pages)/SignUp"

interface GeneratedComponentProp{
    aiResponse: string,
    viewMode: string,
    currentPage: string,
    componentPageConfig: Array<{ name: string } | string>;
}
const GeneratedComponents = ({aiResponse,viewMode,currentPage,componentPageConfig = []}:GeneratedComponentProp) => {

    console.log("viewmode in the generated component",viewMode)
    console.log("Componet page Config",componentPageConfig)

    const RenderComponent = () => {
        switch(currentPage.toLowerCase()){
            case 'landing':
                return <EcommerceLanding viewMode={viewMode} />
            case 'feature-1':
                return <EcommerceFeaturedPage viewMode={viewMode} />
            case 'product':
                return <EcommerceProductDetail viewMode={viewMode} />
            case 'feature-2':
                return <EcommerceStore viewMode={viewMode} />
            case 'store':
                return <EcommerceStoreDetail viewMode={viewMode} />
            case 'signup':
                return <EcommerceSignUpPage viewMode={viewMode} />
            case 'signin':
                return <EcommerceSignInPage viewMode={viewMode} />
        }
    }

    const RenderDynamicComponents = () => {
        return componentPageConfig.map((component, index) => {
            const componentName = typeof component === 'string' ? component.toLowerCase() : component?.name?.toLowerCase();
            switch (componentName) {
                case 'footer 1':
                    return <FirstFooter key={index} />;
                case 'footer 2':
                    return <SecondFooter viewMode={viewMode} key={index} />
                case 'navbar 1':
                    return <Navbar  key={index} />;
                case 'navbar 2':
                    return <SecondNavbar viewMode={viewMode} key={index} />
                case 'signup 1':
                    return <FirstSignUp key={index} />;
                case 'signup 2':
                    return <SecondSignUp key={index} />;
                case 'signup 3':
                    return <ThirdSignUp key={index} />
                case 'login':
                    return <LoginLayout key={index} />;
                case 'pricing':
                    return <PricingLayout key={index} />;
                case 'logo lists':
                    return <LogoLayout key={index} />;
                case 'listing':
                    return <ListingLayout key={index} />;
                case 'hero':
                    return <HeroLayout key={index} />;
                case 'header':
                    return <HeaderLayout key={index} />;
                case 'feature':
                    return <Featurelayout key={index} />;
                case 'faq':
                    return <FaqLayout key={index} />;
                case 'contact':
                    return <ContactLayout key={index} />;
                case 'testimonials':
                    return <TestimonialsLayout key={index} />;
                default:
                    return null;
            }
        });
    };

    switch(aiResponse.toLowerCase()){
        case 'ecommerce':
            return (
            <>
            {RenderComponent()}
            {RenderDynamicComponents()}
            </> ) ;
        case 'blog':
            return <BlogLanding />;
        case 'lms':
            return <LmsLanding />;
        case 'rental':
            return <RentalLanding />;
        case 'saas':
            return <SaasLanding />;
        case 'social media':
            return <TwitterLanding />
        default : 
        return <div>{aiResponse}</div>
    }
}

export default GeneratedComponents