import { UseCase } from "@archimedes/arch";
import { useMemo } from "react";
import { constructor } from "tsyringe/dist/typings/types";
import { AddExpense } from "../../feature/expense/application/add-expense";
import { GetExpenseById } from "../../feature/expense/application/get-expense-by-id";
import { GetExpenseList } from "../../feature/expense/application/get-expense-list";
import { MockExpenseRepository } from "../../feature/expense/infrastructure/repositories/api-expense-repository";
import { AddNewPerson } from "../../feature/person/application/add-new-user";
import { MockPersonRepository } from "../../feature/person/infrastructure/repositories/api-person-repository";

export function useCaseContainer<T>(token: constructor<T> | string | number) {

    const expenseRepository = new MockExpenseRepository();
    const personRepository = new MockPersonRepository();


    const useCases : any[]= [
        [AddExpense, new AddExpense(expenseRepository)],
        [GetExpenseById, new GetExpenseById(expenseRepository)],
        [GetExpenseList, new GetExpenseList(expenseRepository)],
        [AddNewPerson, new AddNewPerson(personRepository)]
    ]

    const map: any= new Map(useCases)
    

    return useMemo(() => map.get(token)(), [token])
}