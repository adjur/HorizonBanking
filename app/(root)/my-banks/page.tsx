import BankCard from '@/components/ui/BankCard';
import HeaderBox from '@/components/ui/HeaderBox';
import Footer from '@/components/ui/Footer';

// Properly define the types for user and bank data
interface User {
  firstName: string;
  lastName: string;
}

interface Bank {
  $id: string; // Add this property if each bank has an ID
  currentBalance: number;
}

// Initialize your data
let user: User = { firstName: 'Andi', lastName: 'Dj' };
let transactions: any[] = [];
let banks: Bank[] = [
  { $id: '1', currentBalance: 123.50 },
  { $id: '2', currentBalance: 502.68 },
];

const MyBanks = () => {
  return (
    <div>
      <div className='transactions'>
        <div className='transactions-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={user.firstName || "Guest"}
            subtext="Effortlessly manage your banking activities."
          />
        </div>
      </div>
      <div className='space-y-4 mg-10'>
        <h2 className='header-2'>
        </h2>
        <p></p>
      </div>
      {banks?.length > 0 && (
        <div className='relative flex flex-1 flex-col justify-center gap-5'>
          <div className='relative left-5 top-30 z-0 w-full'>
            <BankCard
              key={banks[0].$id}
              account={banks[0]}
              userName={`${user.firstName} ${user.lastName}`}
              showBalance={false}
            />
          </div>
          {banks[1] && (
            <div className='relative left-5 top-30 z-0 w-full'>
              <BankCard
                key={banks[1].$id}
                account={banks[1]}
                userName={`${user.firstName} ${user.lastName}`}
                showBalance={false}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyBanks;