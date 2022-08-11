import {useState} from 'react';
import './App.css';
import Coins from './components/Coins'

function App() {
  const [coin, setCoin]=useState([]);
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  .then(response=>response.json())  
  .then(data=>{
    setCoin(data)
  })
  })

  return (
    <div className="App">
      {
        coin.map(coin=>{
return(
  <Coins 
  symbol={coin.symbol}
  name={coin.name}
  image={coin.image}
  current_price={coin.current_price}
  market_cap_rank={coin.market_cap_rank}
  price_change_percentage_24h={coin.price_change_percentage_24h}
  market_cap={coin.market_cap}
  />
)
        })
      }
     
    </div>
  );
}

export default App;
