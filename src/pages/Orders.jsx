import React, { useContext } from 'react'
import { DataContext } from '../DataContext/Context'
import OrderChart from '../components/OrderChart'
import Loader from '../components/Loader'

function Orders() {
    let { investor, portfolio } = useContext(DataContext)
    return (
        <>
            <div className='portfolio-header'>
                <h3>Orders</h3>
                <div className='person-info'>
                    <img src="../src/assets/react.svg" alt="" />
                    <div>
                        <h5>{investor.username}</h5>
                        <p>{investor.email}</p>
                    </div>
                </div>
            </div>
            <div className='order-chart' >
                <OrderChart  />
            </div>
            <div className='orders-table'>
                <div className='orders-table-header' >
                    <h4>Symbol</h4>
                    <h4>Company Name</h4>
                    <h4>Date</h4>
                    <h4>Quantity</h4>
                    <h4>Stock Price</h4>
                    <h4>Total Price</h4>
                    <h4>Order Type</h4>
                    <h4>Order Status</h4>
                </div>
                <div className='orders-table-body'>
                    {
                        portfolio.ordersList.map((item,i) => (
                            <div key={i} className='orders-table-row' >
                                <h4>{item.stock.symbol}</h4>
                                <h4>{item.stock.companyName}</h4>
                                <h4>{item.date.slice(0,10)}</h4>
                                <h4>{item.quantity}</h4>
                                <h4>{`${item.stockPrice}`.slice(0,7)} $</h4>
                                <h4>{`${item.quantity * item.stockPrice + item.brokerFee}`.slice(0,7)} $</h4>
                                <h4 className={`${item.orderType == 'BUY' ? 'green' : 'red'}`} >{item.orderType}</h4>
                                <h4 className={`${item.orderStatus == 'COMPLETED' ? 'green' : 'red'}`} >{item.orderStatus}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Orders