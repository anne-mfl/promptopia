'use client'

import { useState, useEffect } from 'react'

import PromptCard from './PromptCard'

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => {
        return <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      })}
    </div>
  )
}

const Feed = () => {

  const [searchText, setSearchText] = useState('')
  const [searchTimeout, setSearchTimeout] = useState(null)
  const [searchedResults, setSearchedResults] = useState([])
  const [posts, setPosts] = useState([])

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i")

    return posts.filter((post) => {
      return regex.test(post.creator.username) ||
        regex.test(post.tag) ||
        regex.test(post.prompt)
    })
  }

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout)
    setSearchText(e.target.value)

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value)
        setSearchedResults(searchResult)
      }, 500)
    )
  }

  const handleTagClick = (tagName) => {
    setSearchText(tagName)

    const searchResult = filterPrompts(tagName)
    setSearchedResults(searchResult)
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt')
      const data = await response.json()
      setPosts(data)
    }
    fetchPosts()
  }, [])

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      <PromptCardList
        data={searchText === '' ? posts : searchedResults}
        handleTagClick={handleTagClick}
      />
    </section>
  )
}

export default Feed