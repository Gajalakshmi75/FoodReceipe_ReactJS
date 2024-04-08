import React,{useState,useEffect} from 'react'
import Products from "./Products";
const FoodReceipe = () => {
    const [search,setSearch]=useState('');
    const [data,setData]=useState([]);
    const YOUR_APP_ID = "236f2475";
    const YOUR_APP_KEY ="2ed9527a19258d0a6c1c5d051acc2c9c";
    useEffect(()=>{

    },[])
    const changeHandler=(e)=>{
        setSearch(e.target.value);
    }

    const SubmitHandler=(e)=>{
        e.preventDefault();
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response => response.json()
      ).then(
        data => setData(data.hits)
      )
      }

  return (
    <div>
        <center>
            <h1>FoodReceipe</h1><br/><br/>
            <form onClick={SubmitHandler}>
                <input type="text" value={search} onChange={changeHandler}  /><br/><br/>
                <input type="button" value="search"/>
            </form>
            {data && data.length >= 1 ? <Products data={data} /> : null}
  
        </center>
    </div>
  )
}

export default FoodReceipe