"use client"
import SubLogin from "../Home/SubLogin";
import AnalysisSection from "../HomePage/AnalysisSection";
import Banner from "../HomePage/Banner";
import CheckTradingSped from "../HomePage/CheckTradingSped";
import OfferService from "../HomePage/OfferService";
import OtherSection from "../HomePage/OtherSection";
import TradeTypes from "../HomePage/TradeTypes";
import UpCommingOther from "../HomePage/UpCommingOther";


const Home = () => {
  return (
    <main className=" bg-[#131720] text-white">
      <Banner></Banner>
      <CheckTradingSped></CheckTradingSped>
      <SubLogin></SubLogin>
      <OtherSection></OtherSection>
      <OfferService></OfferService>
      <TradeTypes></TradeTypes>
      <UpCommingOther></UpCommingOther>
      <AnalysisSection></AnalysisSection>
       
     
       

    </main>
  )
}
export default Home;
