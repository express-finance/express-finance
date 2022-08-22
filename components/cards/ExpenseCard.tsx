import React from 'react';
// import {} from '@headlessui/react';

import { Expense } from "@prisma/client";

export const ExpenseCard = ({expenseDetails}: {expenseDetails: Partial<Expense>}): JSX.Element => {
    const {id, name, description, amount, createdAt} = expenseDetails;

    return (
        <div className='flex w-max'>

        </div>
    )
}