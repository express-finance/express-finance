import { NextApiRequest, NextApiResponse } from "next";

import {prisma } from '@services/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === "POST") {
        try{
            const { name, description, amount } = req.body;
            const newExpense = prisma.expense.create({
                data: {
                    name,
                    description,
                    amount
                }
            });

            res.status(201).json(newExpense);
        } catch (err) {
            res.status(500).send("An error occurred while creating a new expense.");
        }

    } else {
        res.setHeader("Allow", "[POST]");
        res
            .status(405)
            .send(`HTTP Method ${req.method} is not allowed`);

    }

}