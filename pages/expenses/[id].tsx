import React from 'react';
import { prisma } from '@services/prisma';
import { GetServerSideProps, GetStaticProps } from 'next';
import { normalizeToArray } from '@utils/array';
import { Expense } from '@prisma/client';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const expenseId = normalizeToArray(params?.id)[0];
    if (!expenseId) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    
    const expense = await prisma.expense.findUnique({
        where: {
            id: expenseId
        }
    });

    if (!expense) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {
            expense: JSON.parse(JSON.stringify(expense))
        }
    }
}

export default function ExpenseDetails({expense}: {expense: Expense}) {
    return (
        <div>
            <p>{expense?.id}</p>
            <p>{expense?.name}</p>
            <p>{expense?.description}</p>
            <p>{expense?.amount}</p>
            <p>{expense?.createdAt.toString()}</p>
        </div>
    )
}
