import { useMemo } from "react";
import { constructor } from "tsyringe/dist/typings/types";
import { GetBalance } from "../../feature/balance/application/get-balance";
import { GetBalanceById } from "../../feature/balance/application/get-balance-by-id";
import { MockBalanceRepository } from "../../feature/balance/infrastructure/repositories/api-balance-repository";
import { AddExpense } from "../../feature/expense/application/add-expense";
import { GetExpenseById } from "../../feature/expense/application/get-expense-by-id";
import { GetExpenseList } from "../../feature/expense/application/get-expense-list";
import { MockExpenseRepository } from "../../feature/expense/infrastructure/repositories/api-expense-repository";
import { GetGroupById } from "../../feature/groups/aplication/get-group-by-id";
import { LocalGroupRepository } from "../../feature/groups/infrastructure/repositories/local-group-repository";
import { AddNewPerson } from "../../feature/person/application/add-new-user";
import { MockPersonRepository } from "../../feature/person/infrastructure/repositories/api-person-repository";

export function useCaseContainer<T>(token: constructor<T> | string | number) {

    const expenseRepository = new MockExpenseRepository();
    const personRepository = new MockPersonRepository();
    const groupRepository = new LocalGroupRepository();
    const balanceRepository = new MockBalanceRepository();

    const useCases : any[]= [
        [AddExpense, new AddExpense(expenseRepository)],
        [GetExpenseById, new GetExpenseById(expenseRepository)],
        [GetExpenseList, new GetExpenseList(expenseRepository)],
        [AddNewPerson, new AddNewPerson(personRepository)],
        [GetGroupById, new GetGroupById(groupRepository)],
        [GetBalance, new GetBalance(balanceRepository)],
        [GetBalanceById, new GetBalanceById(balanceRepository)]
    ]

    const map: any= new Map(useCases)
    

    return useMemo(() => map.get(token)(), [token])
}