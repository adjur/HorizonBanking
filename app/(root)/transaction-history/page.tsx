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
      <div className="space-y-4">
          <h2 className="header-2 mg-10">
            Checkings
          </h2>
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
      <div className="space-y-4">
          <h2 className="header-2 mg-10">
            <br></br>
            Savings
          </h2>
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
        </TableBody>
      </Table>
    </div>
  )
}


export default TransactionHistory