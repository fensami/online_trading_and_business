"use client"
import SubLogin from "../Home/SubLogin";
import AnalysisSection from "../HomePage/AnalysisSection";
import Banner from "../HomePage/Banner";
import CheckTradingSped from "../HomePage/CheckTradingSped";
import OfferService from "../HomePage/OfferService";
import OtherSection from "../HomePage/OtherSection";
import SliderOffer from "../HomePage/SliderOffer";
import TAbSection from "../HomePage/TAbSection";
import TabSection1 from "../HomePage/TabSection1";
import TradeTypes from "../HomePage/TradeTypes";
import UpCommingOther from "../HomePage/UpCommingOther";


const Home = () => {
  return (
    <main className=" bg-[#131720] text-white">
      <Banner></Banner>
      <CheckTradingSped></CheckTradingSped>
      {/* <SliderOffer></SliderOffer> */}
      <SubLogin></SubLogin>
      <TAbSection></TAbSection>
      {/* <TabSection1></TabSection1> */}
      <UpCommingOther></UpCommingOther>
      <OtherSection></OtherSection>
      <OfferService></OfferService>
      <AnalysisSection></AnalysisSection>
      <TradeTypes></TradeTypes>




    </main>
  )
}
export default Home;
