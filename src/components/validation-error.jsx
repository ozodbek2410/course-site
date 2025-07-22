import { useCallback } from 'react'
import { useSelector } from 'react-redux'

const ValidationError = () => {
  const { error } = useSelector(state => state.AuthReducer)

  const errorMassage = useCallback(() => {
    return Object.keys(error).map(name => {
      const msg = Array.isArray(error[name]) ? error[name].join(', ') : error[name]
      return `${name} - ${msg}`
    })
  }, [error])
  return (
    error !== null &&
    errorMassage().map(error => (
      <div className='alert alert-danger mb-2 -p-1' role='alert' key={error}>
        {error}
      </div>
    ))
  )
}

export default ValidationError
