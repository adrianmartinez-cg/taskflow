import type { Prisma, User } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String9206389',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2025-05-28T17:23:52.836Z',
      },
    },
    two: {
      data: {
        email: 'String2532321',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2025-05-28T17:23:52.836Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
