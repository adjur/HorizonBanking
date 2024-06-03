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


const RTSavings = () => {
    return (
        <section>
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
        </section >
    )
}

export default RTSavings