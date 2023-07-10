import axios from 'axios'

// 获取内容列表
export const getContentList = async ({ offset, limit, type }) => {
  const params = {
    offset,
    limit,
    type,
  }
  const res = await axios.get(`${process.env.NUXT_API_URL}/v1/contents`, { params })

  return res?.data
}

// 获取内容详情
export const getContentDetail = async ({ type, charID }) => {
  const params = {
    type
  }
  const res = await axios.get(`${process.env.NUXT_API_URL}/v1/contents/${charID}`, { params })

  return res?.data
}

// 获取项目列表
export const getMetaList = async ({ offset, limit, type, isTree = false }) => {
  const params = {
    offset,
    limit,
    type,
  }
  const res = await axios.get(`${process.env.NUXT_API_URL}/v1/metas`, { params })

  return res?.data
}