import axios from 'axios';
import { ChevronDown } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { DataContext } from '../DataContext/Context';
import Chart from '../components/Chart';
import StockChart from '../components/StockChart';

function Trade() {
    let { investor, id, allStock, selectedStock, setSelectedStock } = useContext(DataContext)
    let [totalAsk, setTotalAsk] = useState(0)
    let [totalBid, setTotalBid] = useState(0)
    let [broker, setBroker] = useState(0)
    let [quantity, setQuantity] = useState(0)
    let [dropStatus, setDropStatus] = useState(false)
    let [selectedExchange, setSelectedExchange] = useState(null)
    let [stockPrices, setStockPrices] = useState([])

    useEffect(() => {
        axios.get(`https://api.twelvedata.com/time_series?symbol=${selectedStock.symbol}&interval=1month&outputsize=12&apikey=2668a95a0a5a4c948bd57bdf32c258ed`)
            .then(response => {
                if (response.data && response.data.values) {
                    setStockPrices(response.data.values.reverse());
                } else {
                    setStockPrices([]);
                }
            })
            .catch(error => {
                console.error("Ошибка загрузки данных акции:", error);
            });
    }, [selectedStock])

    useEffect(() => {
        axios.get(`http://localhost:4040/exchanges/get-id=${selectedStock.stockExchangeSummaryDTO.id}`)
            .then(item => (setSelectedExchange(item.data)
            ))
    }, [selectedStock])

    function selectStock(stock) {
        setSelectedStock(stock)
        setDropStatus(false)
        changeModul(0)
    }
    function changeModul(q) {
        setQuantity(q)
        let cena = q * selectedStock.ask
        setTotalAsk(cena)
        setTotalBid(q * selectedStock.bid)
        setBroker(cena < 1000.0 && cena > 0 ? 2 : cena >= 1000.0 && cena <= 100000.0 ? cena * 0.002 : cena >= 100000.0 && cena <= 150000.0 ? cena * 0.0015 : cena * 0.001)
    }
    function formatTime(timeStr) {
        const date = new Date(timeStr);
        return date.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'UTC',
            hour12: false
        });
    }
    function buy(stockId, portfolioId, quantity) {
        if (confirm('are you sure?')) {
            if (quantity > 0) {
                axios.post(`http://localhost:4040/stocks/buy-stk=${stockId}-prtfl=${+portfolioId}-qnt=${+quantity}`)
                    .then(item => {
                        console.log(item.data);
                        if (item.data.orderStatus == "COMPLETED") {
                            toast.success(item.data.orderMessage)
                        }
                        else if (item.data.orderStatus == "CANCELLED") {
                            toast.error(item.data.orderMessage)
                        }
                    })
            }
            else {
                toast.error('Please enter a valid quantity.')
            }
        }
    }
    function sell(stockId, portfolioId, quantity) {
        if (confirm('are you sure?')) {
            if (quantity > 0) {
                axios.post(`http://localhost:4040/stocks/sell-stk=${stockId}-prtfl=${+portfolioId}-qnt=${+quantity}`)
                    .then(item => {
                        console.log(item.data);
                        if (item.data.orderStatus == "COMPLETED") {
                            toast.success(item.data.orderMessage)
                        }
                        else if (item.data.orderStatus == "CANCELLED") {
                            toast.error(item.data.orderMessage)
                        }
                    })
            }
            else {
                toast.error('Please enter a valid quantity.')
            }
        }
    }

    if (!selectedExchange) {
        return
    }

    return (
        <div className='Trade'>
            <div className='portfolio-header'>
                <h3>Trade</h3>
                <div className='person-info'>
                    <img src="../src/assets/react.svg" alt="" />
                    <div>
                        <h5>{investor.username}</h5>
                        <p>{investor.email}</p>
                    </div>
                </div>
            </div>
            <p className='mini-title'>Select stock</p>
            <div className='dropdown-box'>
                <div onClick={() => setDropStatus(true)}>
                    <p >{selectedStock.symbol}</p>
                    <ChevronDown />
                </div>
                <div style={{ height: dropStatus ? '300px' : '0px', transition: '.4s ease-in', opacity: dropStatus ? 1 : 0 }} className='dropdown'>
                    {allStock.map((item, ind) => <p key={ind} onClick={() => selectStock(item)} >{item.symbol}</p>)}
                </div>
            </div>
            <div className='trade-panel'>
                <div className='info-panel'>
                    <h1>{selectedStock.symbol}</h1>
                    <h4>{selectedStock.companyName}</h4>
                    <h3>{selectedStock.stockExchangeSummaryDTO.name} • {selectedStock.stockExchangeSummaryDTO.country}</h3>
                    <div className="market-time">
                        <p>Market Open: <span>{formatTime(selectedExchange.openTime)} (GMT)</span></p>
                        <p>Market Close: <span>{formatTime(selectedExchange.closeTime)} (GMT)</span></p>
                    </div>
                    <h1 className='price-box' id='price'><span>Price:</span> ${selectedStock.price}</h1>
                    <h1 className='price-box' ><span>Ask:</span> ${selectedStock.ask}</h1>
                    <h1 className='price-box' ><span>Bid:</span> ${selectedStock.bid}</h1>
                </div>
                <div className='buy-panel'>
                    <div className="buy-input-box">
                        <p>Quantity</p>
                        <input type="number" value={quantity} placeholder='Quantity' onChange={(e) => changeModul(e.target.value)} />
                    </div>
                    <div className='buy-inputs'>
                        <div className="buy-input-box">
                            <p>Total Buy</p>
                            <div>
                                <p>${`${totalAsk}`.slice(0,7)}</p>
                            </div>
                        </div>
                        <div className="buy-input-box">
                            <p>Total Sell</p>
                            <div>
                                <p>${`${totalBid}`.slice(0,7)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="buy-input-box">
                        <p>Broker Fee</p>
                        <div>
                            <p>${broker}</p>
                        </div>
                    </div>
                    <div className='buy-sell-buttons'>
                        <p onClick={() => buy(selectedStock.stockID, id, quantity)} >Buy</p>
                        <p onClick={() => sell(selectedStock.stockID, id, quantity)} >Sell</p>
                    </div>
                </div>
            </div>
            {stockPrices.length != 0 ? 
            <StockChart stockPrices={stockPrices} /> :
            null
        }
        </div>
    )
}

export default Trade