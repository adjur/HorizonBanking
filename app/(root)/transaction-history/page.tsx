import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { bold } from 'colors'
import HeaderBox from '@/components/ui/HeaderBox'

const TransactionHistory = () => {
  return (
    <div>
      <div className="transactions">
        <div className="transactions-header">
          <HeaderBox
            title="Transaction History"
            subtext="See your bank details and transactions."
          />
        </div>

      </div>
      <div className="space-y-6">
        <div className='transactions-account'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-18 font-bold text-white'>
              Checkings
            </h2>
          </div>
        </div>

        {/* <div className='transactions-account-balance'>
          <p className='text-14'>Current Balance</p>
          <p className='text-24 text-center font-bold'></p>
        </div> */}
      </div>

      <div className='w-full flex-col gap-6 mg-5'>
        <Table className="w-full flex-col gap-6">
          <TableHeader className="bg-[#f9fafb]">
            <TableRow style={{ textDecoration: 'underline' }}>
              <TableHead className="w-[100px]">Company</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Southwest Air</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right" style={{ color: '#e41c38' }}>- $487.78</TableCell>
            </TableRow>
            <TableRow >
              <TableCell className="font-medium">Starbucks Coffee</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right" style={{ color: '#e41c38' }}>- $11.47</TableCell>
            </TableRow>
            <TableRow >
              <TableCell className="font-medium">Uber</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right" style={{ color: '#e41c38' }}>- $62.00</TableCell>
            </TableRow>
            <TableRow >
              <TableCell className="font-medium">React Conference 2024</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right" style={{ color: '#e41c38' }}>- $500.00</TableCell>
            </TableRow>
            <TableRow >
              <TableCell className="font-medium">Freelance Gig</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Direct Deposit</TableCell>
              <TableCell className="text-right" style={{ color: 'green' }}>+ $250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">In n Out Burger</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right" style={{ color: '#e41c38' }}>- $16.34</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Best Western</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right" style={{ color: '#e41c38' }}>- $149.00</TableCell>
            </TableRow>
            <TableRow >
              <TableCell className="font-medium">From Savings</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Wattson Bank</TableCell>
              <TableCell className="text-right" style={{ color: 'green' }}>+ $1500.00</TableCell>
            </TableRow>
           
          </TableBody>
        </Table>


        <div className='transactions-account'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-18 font-bold text-white'>
              Savings
            </h2>
          </div>
        </div>
        <Table className="w-full flex-col gap-6">
          <TableHeader className="bg-[#f9fafb]">
            <TableRow style={{ textDecoration: 'underline' }}>
              <TableHead className="w-[100px]">Company</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow >
              <TableCell className="font-medium">Venmo Deposits</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Direct Deposit</TableCell>
              <TableCell className="text-right" style={{ color: 'green' }}>+ $120.00</TableCell>
            </TableRow>
            <TableRow >
              <TableCell className="font-medium">Venmo Deposits</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Direct Deposit</TableCell>
              <TableCell className="text-right" style={{ color: 'green' }}>+ $120.00</TableCell>
            </TableRow>
            <TableRow >
              <TableCell className="font-medium">Transfer to Checkings</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Direct Deposit</TableCell>
              <TableCell className="text-right" style={{ color: '#e41c38' }}>- $1500.00</TableCell>
            </TableRow>
            <TableRow >
              <TableCell className="font-medium">Venmo Deposits</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Direct Deposit</TableCell>
              <TableCell className="text-right" style={{ color: 'green' }}>+ $120.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}


export default TransactionHistory