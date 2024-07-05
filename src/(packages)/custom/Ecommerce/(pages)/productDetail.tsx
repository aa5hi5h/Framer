import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"
import SecondItemDetail from "@/(packages)/components/ItemDetail/ItemsDetail-2/page"
import SecondNavbar from "@/(packages)/components/Navbar/Navbar-2/page"



const EcommerceProductDetail = () => {
    return (
        <div className="flex flex-col space-y-4">
            <SecondNavbar />
            <div className="p-6">
                <SecondItemDetail />
                <SecondFooter />
            </div>
        </div>
    )
}


export default EcommerceProductDetail