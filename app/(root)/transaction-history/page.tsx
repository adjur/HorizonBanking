import HeaderBox from '@/components/ui/HeaderBox'

import React from 'react'
import RTSavings from '@/components/ui/RTSavings'
import RTCheckings from '@/components/ui/RTCheckings'

const TransactionHistory = () => {
  return (
    <div className='transactions'>
      <div className='transactions-header'>
        <HeaderBox
          title="Transaction History"
          subtext='See your bank details and transactions'
        />
      </div>
      <h2 style={{ fontSize: '2em' }}>Checkings</h2>
      <RTCheckings />
      <h2 style={{ fontSize: '2em' }}>Savings</h2>
      <RTSavings />
    </div>
  )
}

export default TransactionHistory