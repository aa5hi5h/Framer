"use client"
import EcommerceFeaturedPage from "@/(packages)/custom/Ecommerce/(pages)/featuredPage"
import EcommerceLanding from "@/(packages)/custom/Ecommerce/(pages)/landing"
import EcommerceProductDetail from "@/(packages)/custom/Ecommerce/(pages)/productDetail"
import EcommerceSignInPage from "@/(packages)/custom/Ecommerce/(pages)/SignInPage"
import EcommerceSignUpPage from "@/(packages)/custom/Ecommerce/(pages)/SignUpPage"
import EcommerceStore from "@/(packages)/custom/Ecommerce/(pages)/store"
import EcommerceStoreDetail from "@/(packages)/custom/Ecommerce/(pages)/StoreDetail"


const page = () => {
    return (
        <div className="w-full">
            <div className="">
                <EcommerceStoreDetail viewMode="monitor" />
            </div>
        </div>
    )
}

export default page