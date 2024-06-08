import { app } from '../app.js'
export async function searchMember(context) {
  try {
    if (context.params.query && context.params.query.searchName) {
      const { searchName } = context.params.query
      console.log('context: ', searchName)
      let skipCount = context.params.query.$skip;
      let limitCount = context.params.query.$limit;     
      const regex = new RegExp(searchName, 'i') //case-insensitive

      const res = await (await app.get('mongodbClient')).collection('members').find({
        name: { $regex: regex }
      }).toArray()

      console.log('res: ', res)
      context.result = res;
      return context
    }
  } catch (error) {
    console.log(error)
  }
}
