import { PrismaClient } from "@prisma/client";

export default async function handler(req,res) {
    const prisma = new PrismaClient()

    //Fetch orders
    if (req.method === "GET") {
        const kitchenorders = await prisma.kitchen.findMany( {
            where:{
                status: false
            }
        })
        res.status(200).json(kitchenorders)
    }


    //Create an order
    if (req.method === "POST") {
        const kitchenorders = await prisma.kitchen.create ({
            data: {
                clientName: req.body.clientName,
                total: req.body.total,
                date: req.body.date,
                order: req.body.order,
            }
        })
        res.status(200).json(kitchenorders)
    }
}