import React from "react";
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";
import { Link } from "react-router-dom";

const CoinCard = ({ coin }) => {
  const price = Math.round(coin.price * 1000) / 1000;
  return (
    <Link to={`/coin/${coin.uuid}`}>
      <div className="coin-card shadow card-bg">
        <div className="coin-card-head">
          <div className="coin-image">
            <img src={coin.iconUrl} alt={coin.name} />
          </div>
          <div className="rank-label">Rank# {coin.rank}</div>
        </div>
        <div className="coin-card-body">
          <p className="coin-name">{coin.name}</p>
          <h6>{coin.symbol}</h6>
          <h5 className="normal-font">
            Mcap: <span>${coin.marketCap}</span>
          </h5>
        </div>
        <div className="coin-card-footer">
          {/* <h5 className="price">
            Price : <span>{coin.price}</span>
          </h5> */}
          <h5 className="price">
            Price : <span>$ {price > 0 ? price : Math.round(coin.price * 1000000) / 1000000}</span>
          </h5>
          {/* {console.log(Math.round(coin.price * 1000) / 1000)} */}
          <p className={`change-${coin.change > 0 ? "green" : "red"}`}>
            {coin.change}%{" "}
            <span>
              {coin.change > 0 ? <BiTrendingUp /> : <BiTrendingDown />}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CoinCard;
