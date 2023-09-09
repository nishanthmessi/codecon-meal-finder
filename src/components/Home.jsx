import React, { useState } from 'react'
import SearchLineIcon from 'remixicon-react/SearchLineIcon'
import MealCard from './MealCard'
import Navbar from './Navbar'

const Home = () => {
  const [recipe, setRecipe] = useState('')
  const [searchResutls, setSearchResults] = useState([])

  // Meal Search Function
  const fetchRecipe = async (e) => {
    e.preventDefault()

    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`
    )
    const results = await res.json()
    setSearchResults(results.meals)
    setRecipe('')
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='text-center mt-10'>
        <h1 className='text-2xl sm:text-4xl font-semibold mb-8'>
          Search for a Meal
        </h1>
        <form onSubmit={fetchRecipe} className='flex items-center'>
          <input
            type='text'
            placeholder='Search for recipes'
            className='border px-2 py-1.5 w-[18rem] md:w-[24rem] border-gray-400 rounded-l-lg outline-none'
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
          />
          <button
            type='submit'
            className='flex gap-1 bg-gray-700 px-2 py-[.42rem] text-white rounded-r-lg'
          >
            <SearchLineIcon /> Search
          </button>
        </form>
      </div>

      <div className='mt-8'>
        {!searchResutls ? (
          <div>
            <p>No meal found for your searh</p>
          </div>
        ) : (
          <MealCard meals={searchResutls} />
        )}
      </div>
    </div>
  )
}

export default Home
