import CoinDetails from "../components/CoinDetails";
import {useEffect} from 'react';

const Coin = ({setSearchKey}) => {
  useEffect(()=>{
  setSearchKey("");
  },[setSearchKey]);

  return (
   <CoinDetails />
  );
};

export default Coin;
