
import DashboardCard from "@/components/dashboard/card";
import LandingTrading from "@/components/dashboard/TradingContainer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { WalletIcon } from "@/icons/balance-icon";
import CalIcon from "@/icons/cal-icon";
import { DepositIcon } from "@/icons/deposit-icon";
import { ReferralsIcon } from "@/icons/Referral-icon";
import { TransactionsIcon } from "@/icons/transactions-icon";
import { WithdrawalIcon } from "@/icons/withdrawal-icon";
import { DollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { currentUser } from "@clerk/nextjs";
import { client } from "@/lib/prisma";
import { format } from "date-fns";
import { getAlTransactions, getBalance, TotalDepo, TotalWithdraw } from "@/lib/queries";



const Dashpage = async () => {

  const getBalances = await getBalance()
  if (!getBalances) return null;

const getAllTransaction  = await getAlTransactions()
  if (!getAllTransaction) return null;

  const getNumberofDepo = await TotalDepo();

  const getNumberofWithdraw = await TotalWithdraw();

  return (
    <>
  
      <div className="">
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
        <div className="w-full grid grid-cols-1  gap-4 lg:grid-cols-2 py-10">
          <div>
            <div>
              <h2 className="font-bold text-2xl">Trading Chart</h2>
              <p className="text-sm font-light">
                A detailed overview of your metrics, usage, customers and more
              </p>
            </div>

            <div className="mt-5">
              <LandingTrading />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-full flex justify-between items-start mb-5">
              <div className="flex gap-3 items-center">
                <TransactionsIcon />
                <p className="font-bold">Recent Transactions</p>
              </div>
              <p className="text-sm cursor-pointer">
                <Link href="transaction">See more</Link>
              </p>
            </div>
            <Separator orientation="horizontal" />
            {getAllTransaction &&
              getAllTransaction.map((transaction) => {
                const formattedDate = format(
                  new Date(transaction.createdAt),
                  "yyyy-MM-dd HH:mm:ss"
                );

                return (
                  <div
                    key={transaction.userId}
                    className=" w-full justify-between items-center border-b-2 py-5"
                  >
                    <div className="flex justify-between">
                      <div className="flex gap-3">
                        <Avatar>
                          <AvatarFallback>
                            {transaction.type.slice(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>

                        <div>
                          <p className="text-sm font-bold">
                            {" "}
                            {transaction.type} FUNDS
                          </p>
                          <div className="flex gap-5">
                            <p className="text-sm text-gray-400">
                              {" "}
                              {formattedDate}
                            </p>
                            <p className="text-sm text-gray-400">
                              {transaction.type === "DEPOSIT" ? (
                                <p> Money Deposited</p>
                              ) : (
                                <p> Money Withdrawn</p>
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        {transaction.type === "DEPOSIT" ? (
                          <p className="text-sm text-green-600">
                            + {transaction.amount} {transaction.currency}{" "}
                          </p>
                        ) : (
                          <p className="text-sm text-red-600">
                            - {transaction.amount} {transaction.currency}{" "}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

            {/* 
            <div className=" w-full justify-between items-center border-b-2 py-5">
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarFallback>DE</AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="text-sm font-bold"> Withdraw Funds</p>
                    <div className="flex gap-5">
                      <p className="text-sm text-gray-400"> 10 Oct 2024</p>
                      <p className="text-sm text-gray-400"> Money Withdrawn </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-red-600"> -500 USD</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashpage;
