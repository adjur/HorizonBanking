import HeaderBox from '@/components/ui/HeaderBox';
import PaymentTransferForm from '@/components/ui/PaymentTransferForm';

import React from 'react'

const Transfer = () => {

  return (
    <section className="payment-transfer">
      <HeaderBox 
        title="Payment Transfer"
        subtext="Please provide any specific details or notes related to the payment transfer"
      />

      <section className="size-full pt-5">
        <PaymentTransferForm />
      </section>
    </section>
  )
}

export default Transfer