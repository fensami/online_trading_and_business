import AnalysisSection from "./HomePage/AnalysisSection";
import CheckTradingSped from "./HomePage/CheckTradingSped";
import SubLogin from "./HomePage/SubLogin";
import TradeTypes from "./HomePage/TradeTypes";
import UpCommingOther from "./HomePage/UpCommingOther";

 const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CheckTradingSped></CheckTradingSped>
      <SubLogin></SubLogin>
      <UpCommingOther></UpCommingOther>
      <AnalysisSection></AnalysisSection>
     
    </main>
  )
}
export default Home;
