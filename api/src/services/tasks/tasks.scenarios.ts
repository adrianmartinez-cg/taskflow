import type { Prisma, Task } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TaskCreateArgs>({
  task: {
    one: {
      data: {
        title: 'String',
        user: {
          create: {
            email: 'String9483212',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2025-05-28T17:23:06.029Z',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        user: {
          create: {
            email: 'String5642862',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2025-05-28T17:23:06.034Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Task, 'task'>
