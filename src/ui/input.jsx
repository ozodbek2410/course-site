const Input = ({ label, state, setState, type = 'text' }) => {
  console.log(state)
  return (
    <div className='form-floating'>
      <input
        type={type}
        className='form-control'
        value={state}
        onChange={e => setState(e.target.value)}
        id='floatingInput'
        placeholder={label}
      />
      <label htmlFor='floatingInput'>{label}</label>
    </div>
  )
}

export default Input
