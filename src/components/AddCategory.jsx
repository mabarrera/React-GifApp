import PropTypes from "prop-types"

import { useState } from "react"
const AddCategory = ({ onNewCategory }) => {

  const [ inputValue, setInputValue ] = useState('')

  const onInputChange = ({ target }) => {
    setInputValue( target.value )
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if( inputValue.trim().length <= 1 ) return;
    onNewCategory( inputValue.trim() )
    setInputValue('');
  }

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
      <input type="text" placeholder="Buscar Gifs" value={ inputValue } onChange={  (event) => onInputChange(event) }/>
    </form>
  )
}

export default AddCategory

AddCategory.propTypes = {
  onNewCategory: PropTypes.func
}
