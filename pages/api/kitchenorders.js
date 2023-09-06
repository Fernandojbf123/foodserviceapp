import { PrismaClient } from "@prisma/client";

export default async function handler(req,res) {
    const prisma = new PrismaClient()

    //Fetch orders
    const kitchenorders = await prisma.kitchenOrder.findMany( {
        where:{
            status: false
        }
    })
    res.status(200).json(kitchenorders)


    //Create an order
    if (req.method === "POST") {
        console.log("METODO POST")
        const kitchenorders = await prisma.kitchenOrder.create ({
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