


import CheckTradingSped from "./HomePage/CheckTradingSped";
import SubLogin from "./HomePage/SubLogin";
import TradeTypes from "./HomePage/TradeTypes";
import UpCommingOther from "./HomePage/UpCommingOther";

 const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <CheckTradingSped></CheckTradingSped>
      <SubLogin></SubLogin>
      <UpCommingOther></UpCommingOther>
      <TradeTypes></TradeTypes>
    </main>
  )
}
export default Home;
