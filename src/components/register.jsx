import { useEffect, useState } from 'react'
import { icon } from '../constants'
import { Input } from '../ui'
import { useDispatch, useSelector } from 'react-redux'
import { signUserStart, signUserFailure, signUserSuccess } from '../slice/auth'
import AuthService from '../service/auth'
import ValidationError from './validation-error'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const { isLoading, loggedIn } = useSelector(state => state.AuthReducer)
  const navigate = useNavigate()
  const registerHandler = async e => {
    e.preventDefault()
    dispatch(signUserStart())
    const user = { username: name, email, password }
    try {
      const response = await AuthService.userRegister(user)
      console.log(response)
      dispatch(signUserSuccess(response.user))
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors))
    }
  }
  useEffect(() => {
    if (loggedIn) {
      navigate('/')
    }
  }, [loggedIn])

  return (
    <div className='text-center mt-5'>
      <main className='form-signin w-25 m-auto'>
        <form>
          <img className='mb-2' src={icon} alt='' width='72' height='60' />
          <h1 className='h3 mb-3 fw-normal'>Please register</h1>
          <ValidationError />
          <Input label={'Username'} state={name} setState={setName} />
          <Input label={'Email address'} state={email} setState={setEmail} />
          <Input label={'Password'} type={'password'} state={password} setState={setPassword} />

          <button
            className='w-100 btn btn-lg btn-primary mt-2'
            type='submit'
            disabled={isLoading}
            onClick={registerHandler}
          >
            {isLoading ? 'loading...' : 'Register'}
          </button>
        </form>
      </main>
    </div>
  )
}

export default Register
