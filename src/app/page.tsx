
import { CompanyLogo } from "./components/companylogo";
import { Featured } from "./components/featured";
import { Header } from "./components/header";
import { Hot } from "./components/Hot";
import { Ourproduct } from "./components/ourproducts";
import { TopCategories } from "./components/topcategories";

export default function Home() {
  return (
   <div>
    
    <Header/>
    <CompanyLogo/>
    <Featured/>
    <TopCategories/>
    <Hot/>
    <Ourproduct/>
    
   </div>
  );
}
