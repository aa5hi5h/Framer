import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"
import SecondItemDetail from "@/(packages)/components/ItemDetail/ItemsDetail-2/page"
import SecondNavbar from "@/(packages)/components/Navbar/Navbar-2/page"


interface EcommerceProductDetailProp{
    viewMode: string
}

const EcommerceProductDetail = ({viewMode}:EcommerceProductDetailProp) => {

    if(viewMode === "monitor"){
    return (
        <div className="flex flex-col space-y-4">
            <SecondNavbar viewMode="monitor"  />
            <div className="p-6">
                <SecondItemDetail />
                <SecondFooter viewMode="monitor" />
            </div>
        </div>
    )
}

if(viewMode === "mobile" ){
    return (
        <div className="flex flex-col space-y-4">
            <SecondNavbar viewMode="mobile"  />
            <div className="p-6">
                <SecondItemDetail />
                <SecondFooter viewMode="mobile" />
            </div>
        </div>
    )
}

}


export default EcommerceProductDetail