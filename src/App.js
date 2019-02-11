import React, { useState } from 'react';
import './App.sass';

import Search from './components/Search';
import PostList from './components/PostList';

const App = () => {

  const initialSearch = { input: "" }

  const [search, setSearch] = useState(initialSearch)

  const handleSearch = searchTerm => {
    if(!searchTerm) return;
    setSearch({input: searchTerm.name})
  }


    return (
      <div className="App">
        <header>
          <h1>Top 5 Reddit Comments</h1>
        </header>

        <Search handleSearch={handleSearch}/>
        <PostList subreddit={search.input}/>

      </div>
    );

}

export default App;
