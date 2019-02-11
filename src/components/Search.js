import React, {useState} from 'react'

const Search = props => {
  const {handleSearch} = props;
  const initialInputState = { name:"" }

  const [ search, setSearch ] = useState(initialInputState)

  const handleInputChange = event => {
    const {name, value} = event.target;
    setSearch({...search, [name]:value})
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log("test")
    handleSearch(search)
    setSearch(initialInputState)
    // insert search function from props
  }
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <label>Subreddit: r/</label>
        <input
          type="text"
          name="name"
          value={search.name}
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}

export default Search
