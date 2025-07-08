import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router';

export const DataContext = createContext()

function Context({ children }) {
    const location = useLocation();
    let [id, setId] = useState(localStorage['userId'] || 1)
    let [portfolio, setPortfolio] = useState()
    let [selectedStock, setSelectedStock] = useState()
    let [allStock, setAllStock] = useState([])
    let [investor, setInvestor] = useState()

    useEffect(() => {
        axios.get('http://localhost:4040/stocks/all')
            .then(data => {
                setAllStock(data.data), setSelectedStock(data.data[0])
            })
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:4040/portfolios/get-id=${id}`)
            .then(data => setPortfolio(data.data))
    }, [location])

    useEffect(() => {
        if (!id) return;
        axios.get(`http://localhost:4040/investors/get-account-information-id=${id}`)
            .then(data => {
                setInvestor(data.data)
            })
    }, [location])

    return (
        <DataContext.Provider value={
            { portfolio, setPortfolio, id, setId, selectedStock, setSelectedStock, allStock, setAllStock,investor, setInvestor }}>
            {children}
        </DataContext.Provider>
    )
}

export default Context