import { PrismaClient } from "@prisma/client";

export default async function handler(req,res) {
    const prisma = new PrismaClient()

    if (req.method === "POST") {

        console.log(req.body)
        const order = await prisma.order.create ({
            data: {
                clientName: req.body.clientName,
                total: req.body.total,
                date: req.body.date,
                order: req.body.order,
            }
        })
        console.log(order)
        res.json({order})
    }
}