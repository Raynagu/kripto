import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Coin from './routes/Coin';
import Header from './components/Header';
import Footer from './components/Footer';
import CoinContainer from './components/CoinContainer';
import ErrorPage from './components/ErrorPage';

function App() {
  const [coinList, setCoinList] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState('');

  useEffect(() => {
    refreshHandler();
  }, []);
  
  const refreshHandler = () => {
    setErrors('');
    setIsLoading(true);
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coins",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "70",
        offset: "0",
      },
      timeout: 0,
      headers: {
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        "X-RapidAPI-Key": "89c6b91013mshe9cc1ccb0c69196p183468jsn5f5c5adc9ee4",
      },
    };

    axios
      .request(options)
      .then((response) => {
        let data = response.data.data;
        // console.log(data.coins);
        setCoinList(data.coins);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        if(error.response){
          let er = error.response.status > 0 ? error.response.statusText : error.message;
          setErrors(er);
        }else if(error.request){
          console.log(error.request);
        }else{
          setErrors(error.message);
        }
        setIsLoading(false);
      });
  };

  const searchList = coinList.filter((coin) => coin.name.toLowerCase().includes(searchKey.toLowerCase()))


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <CoinContainer>
          <Routes>
            <Route path='/' element={<Home
              coinList={searchList}
              setSearchKey={setSearchKey}
              refreshHandler={refreshHandler}
              errors={errors}
              isLoading={isLoading} />} />
            <Route path='coin/:uuid' element={<Coin setSearchKey={setSearchKey}/>} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </CoinContainer>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
