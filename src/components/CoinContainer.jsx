import React from 'react'

const CoinContainer = (props) => {
  return (
   <div className="coin-container">
       {props.children}
   </div>
  )
}

export default CoinContainer