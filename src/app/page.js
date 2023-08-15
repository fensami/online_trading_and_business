"use client"
import PromotionPage from "@/components/Promotion";
import AnalysisSection from "./(with-layout)/HomePage/AnalysisSection";
import Banner from "./(with-layout)/HomePage/Banner";
// import Banner from "./HomePage/Banner";
import CheckTradingSped from "./(with-layout)/HomePage/CheckTradingSped";
import SubLogin from "./(with-layout)/HomePage/SubLogin";
import UpCommingOther from "./(with-layout)/HomePage/UpCommingOther";
import Wallets from "@/components/Wallets";
 
 
 

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
