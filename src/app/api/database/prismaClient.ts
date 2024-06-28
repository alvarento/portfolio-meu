import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export { prismaClient };

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