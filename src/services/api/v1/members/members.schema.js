// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../../../validators.js'

// Main data model schema
export const membersSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    name: Type.String(),
    lastMet: Type.String({ format: 'date' }),
    area: Type.String(),
    createdAt: Type.String({ format: 'date' }),
    updatedAt: Type.String({ format: 'date' })
  },
  { $id: 'Members', additionalProperties: false }
)
export const membersValidator = getValidator(membersSchema, dataValidator)
export const membersResolver = resolve({})

export const membersExternalResolver = resolve({})

// Schema for creating new entries
export const membersDataSchema = Type.Pick(membersSchema, ['name', 'lastMet', 'area'], {
  $id: 'MembersData',
  additionalProperties: true
})
export const membersDataValidator = getValidator(membersDataSchema, dataValidator)
export const membersDataResolver = resolve({})

// Schema for updating existing entries
export const membersPatchSchema = Type.Partial(membersSchema, {
  $id: 'MembersPatch'
})
export const membersPatchValidator = getValidator(membersPatchSchema, dataValidator)
export const membersPatchResolver = resolve({})

// Schema for allowed query properties
export const membersQueryProperties = Type.Pick(membersSchema, [
  '_id',
  'name',
  'lastMet',
  'area',
  'createdAt',
  'updatedAt'
])
export const membersQuerySchema = Type.Intersect(
  [
    querySyntax(membersQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export const membersQueryValidator = getValidator(membersQuerySchema, queryValidator)
export const membersQueryResolver = resolve({})
