import axios from 'axios'

export const getContentList = async ({ offset, limit, type }) => {
  const params = {
    offset,
    limit,
    type,
  }
  const res = await axios.get(`${process.env.NUXT_API_URL}/v1/contents`, { params })

  return res?.data
}