import React from 'react'
import CoinCard from "./CoinCard";

const Coins = ({coins}) => {
  return (
    <div className='Coins'>
        {coins.map(coin=><CoinCard key={coin.uuid} coin={coin} />)}
    </div>
  )
}

export default Coins