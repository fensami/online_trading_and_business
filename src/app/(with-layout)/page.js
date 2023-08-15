"use client"
import SubLogin from "../Home/SubLogin";
import AnalysisSection from "../HomePage/AnalysisSection";
import Banner from "../HomePage/Banner";
import CheckTradingSped from "../HomePage/CheckTradingSped";
import UpCommingOther from "../HomePage/UpCommingOther";
// import PromotionPage from "@/components/Promotion";
// import AnalysisSection from "./HomePage/AnalysisSection";
// import Banner from "./HomePage/Banner";

// import Banner from "./HomePage/Banner";

// import CheckTradingSped from "./HomePage/CheckTradingSped";
// import SubLogin from "./HomePage/SubLogin";
// import UpCommingOther from "./HomePage/UpCommingOther";
 
// import Kaku2 from "./kaku2";

const Home = () => {
  return (
    <main className="container mx-auto bg-[#131720] text-white">
      <Banner></Banner>
      <CheckTradingSped></CheckTradingSped>
      <SubLogin></SubLogin>
      <UpCommingOther></UpCommingOther>
      <AnalysisSection></AnalysisSection>
       
     
       

    </main>
  )
}
export default Home;