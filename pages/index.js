import Head from "next/head"
import Image from "next/image"
import {PrismaClient} from "@prisma/client"

export default function Home() {
  return (
     <h1>DESDE INDEX JS</h1>
  )
}

export const getServerSideProps = async () => {
  const prisma = new PrismaClient()

  const categories = await prisma.category.findMany();
  console.log(categories)
}