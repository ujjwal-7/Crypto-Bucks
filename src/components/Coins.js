import React, { useState } from 'react'
import CoinItem from './CoinItem'
import './Coins.css'
import {Link} from 'react-router-dom';
import Coin from '../routes/Coin'

const Coins = (props) => {


    const [searchCoin, setSearchCoin] = useState("");
    const [selectedOption, setSelectedOption] = useState("");

    function handleChange(e) {

        setSearchCoin(e.target.value);
    }

    function handleSelectChange(e) {

        setSelectedOption(e.target.value)
    }

    function handleReset() {
        setSelectedOption("");
    }

    const filteredArray = props.coins?.filter((coin) => {
        return coin.name.toLowerCase().includes(searchCoin.toLocaleLowerCase());
    })

    
    function sortCoinsBy (filteredArray){

        let sortedData;

        if(selectedOption === 'Price Asc'){

          sortedData = filteredArray.sort(function(a,b){

            let x = a.current_price;
            let y = b.current_price;

            return x - y;

          });

        } else if(selectedOption === 'Price Dsc') {

            sortedData = filteredArray.sort(function(a,b){

                let x = a.current_price;
                let y = b.current_price;
    
                return y -x;
    
            });
            
        } else if(selectedOption === "Market Cap Asc") {

            sortedData = filteredArray.sort(function(a,b){

                let x = a.market_cap;
                let y = b.market_cap;
    
                return x - y;
    
            });
        } else if(selectedOption === "Market Cap Dsc") {

            sortedData = filteredArray.sort(function(a,b){

                let x = a.market_cap;
                let y = b.market_cap;
    
                return y - x;
    
            });

        } else if(selectedOption === "Total Volume Asc") {

            sortedData = filteredArray.sort(function(a,b){

                let x = a.total_volume;
                let y = b.total_volume;
    
                return x - y;
    
            });

        } else if(selectedOption === "Total Volume Dsc") {

            sortedData = filteredArray.sort(function(a,b){

                let x = a.total_volume;
                let y = b.total_volume;
    
                return y - x;
    
            });

        }
      
        
      }

      sortCoinsBy(filteredArray);
      

      if(!filteredArray?.length) {

       

      }
   

  return (
    <div className='container'>

        <div className = "search-box">

            <input 

                type = "text"
                name = "coin-search"
                placeholder = "Search Coin"
                value = {searchCoin}
                onChange = {handleChange}

            />

           

            <select id="sort" value={selectedOption} onChange = {handleSelectChange}>

                <option value="" disabled>Pick a choice</option>
                <option value="Price Asc">Price Asc</option>
                <option value="Price Dsc">Price Dsc</option>
                <option className='hide-mobile' value="Market Cap Asc">Market Cap Asc</option>
                <option className='hide-mobile' value="Markrt Cap Dsc">Market Cap Dsc</option>
                <option className='hide-mobile' value="Total Volume Asc">Total Volume Asc</option>
                <option className='hide-mobile' value="Total Volume Dsc">Total Volume Dsc</option>
                    
            </select>

            <div className='reset' onClick = {handleReset}>Reset</div>
            

        </div>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p className='extra-small'>24h</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Market cap</p>
            </div>
        </div>

        {filteredArray?.length  ? filteredArray.map((coins) => {

            return (

                <Link to = {`/coin/${coins.id}`} element = {<Coin />} key = {coins.id}>
                    <CoinItem coins = {coins} />
                </Link>
                
            )

        }) :  <div className='error'>
                <h2>No Such Coin Exists !</h2>
            </div>}
        

    </div>
  )
}

export default Coins