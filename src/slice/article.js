import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  articles: [],
  articleDetail: null,
  error: null,
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    getArticlesStart: state => {
      state.isLoading = true
    },
    getArticlesSuccess: (state, action) => {
      state.isLoading = false
      state.articles = action.payload
    },
    getArticlesFailure: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    getArticleDetailStart: state => {
      state.isLoading = true
    },
    getArticleDetailSuccess: (state, action) => {
      state.isLoading = false
      state.articleDetail = action.payload
    },
    getArticleDetailFailure: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    postArticleStart: state => {
      state.isLoading = true
    },
    postArticleSuccess: (state, action) => {
      state.isLoading = false
    },
    postArticleFailure: (state, action) => {
      state.isLoading = false
      state.error = 'Error'
    },
  },
})

export const {
  getArticlesStart,
  getArticlesSuccess,
  getArticleDetailFailure,
  getArticleDetailSuccess,
  getArticleDetailStart,
  getArticlesFailure,
  postArticleStart,
  postArticleFailure,
  postArticleSuccess,
} = articleSlice.actions
export default articleSlice.reducer
