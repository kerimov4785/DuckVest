import React from 'react'

function MyAssets() {
  let myAssets = [
    { asset: 'AAPL', quantity: 10, buyprice: '$150', curprice: '$175', value: '$1,750', PL: '+$250' },
    { asset: 'AAPL', quantity: 10, buyprice: '$150', curprice: '$175', value: '$1,750', PL: '+$250' },
    { asset: 'AAPL', quantity: 10, buyprice: '$150', curprice: '$175', value: '$1,750', PL: '+$250' },
    { asset: 'AAPL', quantity: 10, buyprice: '$150', curprice: '$175', value: '$1,750', PL: '+$250' },
    { asset: 'AAPL', quantity: 10, buyprice: '$150', curprice: '$175', value: '$1,750', PL: '+$250' },
    { asset: 'AAPL', quantity: 10, buyprice: '$150', curprice: '$175', value: '$1,750', PL: '+$250' },
    { asset: 'AAPL', quantity: 10, buyprice: '$150', curprice: '$175', value: '$1,750', PL: '+$250' },
    { asset: 'AAPL', quantity: 10, buyprice: '$150', curprice: '$175', value: '$1,750', PL: '+$250' },
    { asset: 'AAPL', quantity: 10, buyprice: '$150', curprice: '$175', value: '$1,750', PL: '+$250' },
    { asset: 'AAPL', quantity: 10, buyprice: '$150', curprice: '$175', value: '$1,750', PL: '+$250' },
  ]
  return (
    <div className='my-assets'>
      <div className="stock-header">
        <div>Asset</div>
        <div>Quantity</div>
        <div>Avg. Buy Price</div>
        <div>Current Price</div>
        <div>Value</div>
        <div>P/L</div>
      </div>
      <div className="stock-body">
        {myAssets.map((item,i) => 
          <div key={i} className='stock-row'>
            <div>{item.asset}</div>
            <div>{item.quantity}</div>
            <div>{item.buyprice}</div>
            <div>{item.curprice}</div>
            <div>{item.value}</div>
            <div>{item.PL}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MyAssets