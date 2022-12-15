import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Subheader from '../../../../components/subheader/Subheader';
import { useGroupContext } from '../../../../context/group.context';
import { useCaseContainer } from '../../../../core/hooks/usesCasesContainer';
import { CardModel } from '../../../../pages/card-detail/card-detail.model';
import { GetGroupById } from '../../../groups/aplication/get-group-by-id';
import { Group } from '../../../groups/domain/models/Group';
import { GetBalanceById } from '../../application/get-balance-by-id';
import { TotalBalance } from '../../domain/models/Balance';
import './balance.css';

const Balance = () => {
  const { groups } = useGroupContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const [balance, setBalance] = useState([]);

  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = () => {
    const currentGroup: Group = useCaseContainer(GetGroupById).execute(id);
    if (currentGroup) {
      const balance : TotalBalance[] = useCaseContainer(GetBalanceById).execute(currentGroup.id);
      setBalance(balance);
    }
  };

  const getBalanceView = (totalBalance: any) => {
    return Object.values(totalBalance);
  };

  const getAmountToPay = (totalPaid: number, peopleLength: number) => {
    return totalPaid / peopleLength;
  };

  const getTotalPaidAmount = (transactions: any) => {
    let totalPaid = 0;
    transactions?.forEach((elem: any) => (totalPaid += Number(elem?.amount)));

    return totalPaid;
  };

  const getTotalBalance = (totalPayments: any, amountToPay: number) => {
    const totalBalance = { ...totalPayments };
    for (const property in totalBalance) {
      totalBalance[property].balance =
        totalBalance[property].totalAmount - amountToPay;
      totalBalance[property].balance =
        Math.round((totalBalance[property].balance + Number.EPSILON) * 100) /
        100;
    }

    return totalBalance;
  };

  const createPeoplePayments = (array: any[]) => {
    const peoplePayment = {} as any;
    array.forEach((item) => {
      peoplePayment[item?.id] = { totalAmount: 0, name: item?.name };
    });

    return peoplePayment;
  };

  const fillPayments = (data: any, transactions: CardModel[]) => {
    const peoplePayments = { ...data };
    transactions.forEach((transaction: CardModel) => {
      peoplePayments[transaction.person.id].totalAmount += Number(
        transaction.amount
      );
    });

    return peoplePayments;
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <>
      <div>
        <Subheader title={'Saldos'} clickedIcon={goBack} />
      </div>
      <div className='container'>
        <h2>Saldos</h2>
        <div className='body'>
          <ul className='list'>
            {balance?.map((item: any, index: number) => {
              return (
                <>
                  <li className='list-item' key={index.toString()}>
                    <div className='list-item-value'>
                      <p> {item?.name}</p>
                      <p
                        className={
                          item?.balance > 0 ? 'item-positive' : 'item-negative'
                        }
                      >
                        {item?.balance}€
                      </p>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Balance;
