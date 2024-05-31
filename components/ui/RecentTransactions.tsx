import React from 'react'
import RTTable from './RTTable'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RTTableSavings from './RTTableSavings'
import Link from 'next/link'


const RecentTransactions = () => {
    return (

        <div>
            <section className="recent-transactions">
                <header className="flex items-center justify-between">
                    <h2 className="recent-transactions-label">Recent Transactions</h2>
                    <Link href={'/transaction-history'} className='view-all-btn'>View All</Link>
                </header>
                <Tabs defaultValue="Checkings" className="w-full">
                    <TabsList className='recent-transactions-tablist'>
                        <TabsTrigger className='bg-[#f9fafb]' value="Checkings">Checkings</TabsTrigger>
                        <TabsTrigger className='bg-[#f9fafb]' value="Savings">Savings</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Checkings"><RTTable />
                    </TabsContent>
                    <TabsContent value="Savings"><RTTableSavings />
                    </TabsContent>
                </Tabs>


            </section>
        </div>
    )
}

export default RecentTransactions