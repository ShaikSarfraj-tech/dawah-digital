import { members } from './api/v1/members/members.js'

export const services = (app) => {
  app.configure(members)

  // All services will be registered here
}
