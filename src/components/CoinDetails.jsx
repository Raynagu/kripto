import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";

const CoinDetails = () => {
  const [coin, setCoin] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { uuid } = useParams();

  const date = new Date(coin.listedAt * 1000);

  useEffect(() => {
    setIsLoading(true);
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coin/" + uuid,
      params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "24h" },
      headers: {
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        "X-RapidAPI-Key": "89c6b91013mshe9cc1ccb0c69196p183468jsn5f5c5adc9ee4",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        let res = response.data.data.coin;
        // console.log(res);
        setCoin(res);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setIsLoading(false);
      });
  }, [uuid]);

  const readableNum = (num) => Number(num).toLocaleString("en-US");

  return (
    <div className="coin-details">
      {isLoading ? (
        <h4>Loading the coin details...</h4>
      ) : (
        <>
          <img src={coin.iconUrl} alt="bg" className="bg-image" />
          <div className="coin-info">
            <div className="rank-label">Rank #{coin.rank}</div>
            <img src={coin.iconUrl} alt={coin.name} />
            <h4 style={{ color: coin.color }}>{coin.symbol}</h4>
            <h4>
              Listed on: {date.getDate()}-{date.getMonth() + 1}-
              {date.getFullYear()}
            </h4>
            <h4>marketCap: ${coin.marketCap && readableNum(coin.marketCap)}</h4>
            <h4>Total Exchanges: {coin.numberOfExchanges}</h4>
            <h3>Current Price : {coin.price && readableNum(coin.price)}</h3>
            <a
              href={coin.websiteUrl}
              target="_blank"
              rel="noreferrer" >
              official website
            </a>
            <h4 className="border-bottom1 mt-2">Important Links</h4>
            <div className="imp-links">
              {coin.links &&
                coin.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#c33cb8" }}
                  >
                    {link.name}
                  </a>
                ))}
            </div>
            
      <BackButton />
          </div>
          <div className="coin-desc">
            <h2>About {coin.name}:</h2>
            <div dangerouslySetInnerHTML={{ __html: coin.description }} />
          </div>
        </>
      )}
    </div>
  );
}

export default CoinDetails