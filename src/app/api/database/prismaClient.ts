import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export { prismaClient };

// async function main() {
//    // ... you will write your Prisma Client queries here
// }

// main()
//    .then(async () => {
//       await prismaClient.$disconnect()
//    })
//    .catch(async (e) => {
//       console.error(e)
//       await prismaClient.$disconnect()
//       process.exit(1)
//    })

// import { PrismaClient } from '@prisma/client'

// const prismaClientSingleton = () => {
//    return new PrismaClient()
// }

// declare global {
//    var prismaClient: ReturnType<typeof prismaClientSingleton>
// }

// const prisma = globalThis.prismaClient ?? prismaClientSingleton()

// export { prismaClient }

// globalThis.prismaClient = prisma

// // if (process.env.NODE_ENV !== 'production') globalThis.prismaClient = prisma