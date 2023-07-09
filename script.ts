import { PrismaClient } from '@prisma/client'
import { Prisma } from '.prisma/client'

const prisma = new PrismaClient().$extends({
  
})

const userUpsert = async ({ create, update }: { create: Prisma.UserCreateInput, update: Prisma.UserUpdateInput }) => {
  await prisma.user.upsert({
    create,
    update,
    where: {
      id: 4
    }
  })
}

async function main() {

  await prisma.user.upsert({
    create: {
      number: 2,
      email: 'some@email.com',
      text: 'some'
    },
    update: {
      number: 2,
      email: 'some@email.com',
      text: 'some'
    },
    where: {
      id: 4
    }
  })

  await userUpsert({
    create: {
      number: 2,
      email: 'some@email.com',
      text: 'some'
    }, 
    update: {
      number: 2,
      email: 'some@email.com',
      text: 'some'
    }
  })
  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })