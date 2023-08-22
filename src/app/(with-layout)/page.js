"use client"
import SubLogin from "../Home/SubLogin";
import AnalysisSection from "../HomePage/AnalysisSection";
import Banner from "../HomePage/Banner";
import CheckTradingSped from "../HomePage/CheckTradingSped";
import OfferService from "../HomePage/OfferService";
import TradeTypes from "../HomePage/TradeTypes";
import UpCommingOther from "../HomePage/UpCommingOther";


const Home = () => {
  return (
    <main className=" bg-[#131720] text-white">
      <Banner></Banner>
      <CheckTradingSped></CheckTradingSped>
      <SubLogin></SubLogin>
      <OfferService></OfferService>
      <UpCommingOther></UpCommingOther>
      <AnalysisSection></AnalysisSection>
      <TradeTypes></TradeTypes>
       
     
       

    </main>
  )
}
export default Home;
