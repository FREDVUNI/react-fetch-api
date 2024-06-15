import React, { useState, useEffect } from 'react';
import Loading from './Loading';

const Quotes = () => {
    const [quote, setQuote] = useState(null);
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchQuotes = async () => {
        try {
            const response = await fetch('https://type.fit/api/quotes');
            const data = await response.json();
            setQuotes(data);
            setQuote(data[0]);
            setLoading(false);
        } catch (error) {
            console.error(error.message || 'Something went wrong.');
        }
    };

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };

    useEffect(() => {
        fetchQuotes();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <h1>React Quote <span>Randomiser</span></h1>
            <div className="container">
                <div className="detailsQ">
                    <p>"{quote?.text}"</p>
                    <p>{quote?.author.replace(",Type.fit", "") || 'Author unknown'}</p>
                    <button type="button" className="button" onClick={getRandomQuote}>
                        <span className="button__text">Click</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Quotes;
