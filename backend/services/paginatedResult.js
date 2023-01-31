export default async function pagination({page, limit}, count) {
      const page = parseInt(page)
      const limit = parseInt(limit)
  
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