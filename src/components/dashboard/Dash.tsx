import { getAlTransactions, getBalance, TotalDepo, TotalWithdraw } from '@/lib/queries';
import React from 'react'
import DashboardCard from './card';
import { WalletIcon } from '@/icons/balance-icon';
import { DepositIcon } from '@/icons/deposit-icon';
import { WithdrawalIcon } from '@/icons/withdrawal-icon';
import { ReferralsIcon } from '@/icons/Referral-icon';

const dash = async() => {
    const getBalances = await getBalance()
    if (!getBalances) return null;
  
  const getAllTransaction  = await getAlTransactions()
    if (!getAllTransaction) return null;
  
    const getNumberofDepo = await TotalDepo();
  
    const getNumberofWithdraw = await TotalWithdraw();

  return (
    <div>
         <div className="flex gap-5 flex-wrap">
          <DashboardCard
            value={getBalances.balance}
            sales
            title="Available Balance"
            icon={<WalletIcon />}
          />
          <DashboardCard
            value={getNumberofDepo}
            title="Total Deposit"
            icon={<DepositIcon />}
          />
          <DashboardCard
            value={getNumberofWithdraw}
            title="Total Withdraw"
            icon={<WithdrawalIcon />}
          />
          <DashboardCard
            value={0}
            title="Total Referrals"
            icon={<ReferralsIcon />}
          />
        </div>
    </div>
  )
}

export default dash