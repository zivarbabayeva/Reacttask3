import React from 'react';

const Coins = (props) => {
  const { symbol, name, image, current_price, market_cap_rank, price_change_percentage_24h, market_cap } = props
  console.log(props);

  return (
    <div className='container'>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='box'> <h3>{Symbol}</h3></div>
        <div className='box'><h3>{name}</h3></div>
        <div className='box'><img src={image} alt="" /></div>
        <div className='box'><h4>{current_price}$</h4></div>
        <div className='box'><h4>{market_cap_rank}</h4></div>
        <div className='box'><h4>{price_change_percentage_24h}%</h4></div>
        <div className='box'><h4>{market_cap}</h4></div>

      </div>
    </div>
  )
}

export default Coins