import { PrismaClient } from "@prisma/client";

export default async function handler(req,res) {
    const prisma = new PrismaClient()

    //Fetch orders
    const orders = await prisma.order.findMany( {
        where:{
            status: false
        }
    })
    res.status(200).json(orders)


    //Create an order
    if (req.method === "POST") {
        const order = await prisma.order.create ({
            data: {
                clientName: req.body.clientName,
                total: req.body.total,
                date: req.body.date,
                order: req.body.order,
            }
        })
        res.status(200).json(order)
    }
}