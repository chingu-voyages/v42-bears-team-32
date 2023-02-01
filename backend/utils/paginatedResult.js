export default async function pagination(query, count) {
      const page = parseInt(query.page)
      const limit = parseInt(query.limit) || 10
      console.log(limit)
      const startIndex = (page - 1) * limit
      const endIndex = page * limit
  
      let results = {}
  
      if (endIndex < count) {
        results.next = {
          page: page + 1,
          limit: limit
        }
      }
      
      if (startIndex > 0) {
        results.previous = {
          page: page - 1,
          limit: limit
        }
      }
      return results
}