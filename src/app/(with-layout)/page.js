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
      <UpCommingOther></UpCommingOther>
      <OtherSection></OtherSection>
      <OfferService></OfferService>
      <AnalysisSection></AnalysisSection>
      <TradeTypes></TradeTypes>
      {/* <SliderOffer></SliderOffer> */}
       
     
       

    </main>
  )
}
export default Home;
