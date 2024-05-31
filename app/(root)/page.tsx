import HeaderBox from '@/components/ui/HeaderBox'
import RecentTransactions from '@/components/ui/RecentTransactions'
import RightSidebar from '@/components/ui/RightSidebar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'


const Home = () => {
    const loggedIn = { firstName: 'Andi', lastName: 'Dj', email: 'test@gmail.com' }

    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type='greeting'
                        title='Welcome'
                        user={loggedIn?.firstName || 'Guest'}
                        subtext='Access and manage your account and transactions efficiently.'
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={3}
                        totalCurrentBalance={1250.35}
                    />
                </header>
                <RecentTransactions />
            </div>

            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 163.50 }, { currentBalance: 500 }]}
            />
        </section>
    )
}

export default Home