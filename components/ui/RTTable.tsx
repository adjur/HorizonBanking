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

// Define possible values for status, method, and companies
const statuses: Invoice['status'][] = ["Paid", "Pending", "Cancelled"];
const methods: Invoice['method'][] = ["Credit Card", "PayPal", "Bank Transfer"];
const companies: string[] = ["Netflix", "SW Gas", "Walmart", "Uber", "Albertsons", "Target", "IKEA", "Google"];

// Helper function to generate random amount
const getRandomAmount = (): string => `$${(Math.random() * 100).toFixed(2)}`;

// Helper function to generate a list of random invoices
const generateInvoices = (): Invoice[] => {
    return Array.from({ length: 10 }, (): Invoice => ({
        company: companies[Math.floor(Math.random() * companies.length)],
        status: statuses[Math.floor(Math.random() * statuses.length)],
        method: methods[Math.floor(Math.random() * methods.length)],
        amount: getRandomAmount(),
    }));
};

const RTTable = () => {
    const invoices = generateInvoices(); // Generate random invoices on each render

    return (
        <Table>
            <TableCaption>A list of your recent transactions.</TableCaption>
            <TableHeader className='bg-[#f9fafb]'>
                <TableRow>
                    <TableHead className="px-2">Company</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{invoice.company}</TableCell>
                        <TableCell>{invoice.status}</TableCell>
                        <TableCell>{invoice.method}</TableCell>
                        <TableCell className="text-right">- {invoice.amount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default RTTable;
