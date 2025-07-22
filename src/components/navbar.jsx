import { Link, useNavigate } from 'react-router-dom'
import { logo } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../helpers/paresistance-storaga'
import { logoutUser } from '../slice/auth'

const Navbar = () => {
  const dispatch = useDispatch()
  const { loggedIn, user } = useSelector(state => state.AuthReducer)
  const navigate = useNavigate()
  const logoutHandler = () => {
    dispatch(logoutUser())
    removeItem('token')
    navigate('/login')
  }

  return (
    <div className='d-flex  flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3'>
      <Link to={'/'}>
        <div className='d-flex align-items-center gap-1'>
          <img alt='logo' width='50' height='50' src={logo} />
          <div className='font-weigth-bold text-decoration-none'>Sammi</div>
        </div>
      </Link>
      <nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
        {loggedIn && user ? (
          <>
            <p className='me-3 py-2 m-0 text-dark text-decoration-none'>{user.username}</p>
            <Link className='me-3 py-2 text-dark text-decoration-none' to={'/create-article'}>
              Create
            </Link>

            <button className='btn btn-outline-danger' onClick={logoutHandler}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className='me-3 py-2 text-dark text-decoration-none' to={'/login'}>
              Login
            </Link>
            <Link className='me-3 py-2 text-dark text-decoration-none' to={'/register'}>
              Register
            </Link>
          </>
        )}
      </nav>
    </div>
  )
}

export default Navbar
