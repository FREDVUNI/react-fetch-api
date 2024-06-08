import React,{useState,useEffect} from 'react'
import Loading from './Loading'

const Quotes = () => {
    const [quote,setQuote] = useState([])
    const [quotes,setQuotes] = useState([])
    const [load,setLoad] = useState(false)

    const fetchQuote =  () =>{
        fetch(`https://type.fit/api/quotes`)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            setQuote(data[0])
            setQuotes(data)
            setLoad(true)
        })
        .catch(error=>{
            console.log(error.message || `something went wrong.`)
        })
    }
    
    const getQuote = () =>{
        let index = Math.floor(Math.random() * quotes.length)
        setQuote(quotes[index])
    }

    useEffect(()=>{
       fetchQuote()
    },[])
    return (
        <>
        {load ?
        <>
            <h1>React quote <span>randomiser</span></h1>
            <div className="container">
                <div className="detailsQ">
                    <p>"{quote.text}</p>
                    <p>{quote.author === null ? quote.author = 'Author unknown':quote.author} </p>
                    <button type="button" className="button" onClick={getQuote}>
                        <span className="button__text">click</span>
                    </button>  
                </div>
            </div>
        </>
        :
        <Loading/>
        }
       </>

    )
}

export default Quotes
