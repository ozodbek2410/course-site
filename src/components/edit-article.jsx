import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
  postArticleFailure,
  postArticleStart,
  postArticleSuccess,
} from '../slice/article'
import ArticleService from '../service/article'
import { useNavigate, useParams } from 'react-router-dom'
import Articleform from './article-form'

const EditArticle = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [body, setBody] = useState('')
  const { slug } = useParams()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getArticleDetail = async () => {
    dispatch(getArticleDetailStart())
    try {
      const response = await ArticleService.getArticleDetail(slug)
      console.log(response.article.title)
      setTitle(response.article.title)
      setDescription(response.article.description)
      setBody(response.article.body)
      dispatch(getArticleDetailSuccess(response.article))
    } catch (error) {
      dispatch(getArticleDetailFailure())
    }
  }

  useEffect(() => {
    getArticleDetail()
  }, [])

  const formSubmit = async event => {
    event.preventDefault()
    const article = { title, description, body }
    dispatch(postArticleStart())
    try {
      await ArticleService.editArticle(slug, article)
      dispatch(postArticleSuccess())
      navigate('/')
    } catch (error) {
      dispatch(postArticleFailure())
    }
  }

  const formProps = { title, setTitle, body, setBody, description, setDescription, formSubmit }
  return (
    <div className='text-center'>
      <h1 className='fs-2'>Edit article</h1>
      <div className='w-75 mx-auto'>
        <Articleform {...formProps} />
      </div>
    </div>
  )
}

export default EditArticle
