export const membersPath = '/api/v1/members'

export const membersMethods = ['find', 'get', 'create', 'patch', 'remove']

export const membersClient = (client) => {
  const connection = client.get('connection')

  client.use(membersPath, connection.service(membersPath), {
    methods: membersMethods
  })
}
