import React, { useState } from 'react'
import MealCard from './MealCard'

const Home = () => {
  const [recipe, setRecipe] = useState('')
  const [searchResutls, setSearchResults] = useState()

  const fetchRecipe = async (e) => {
    e.preventDefault()

    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`
    )
    const results = await res.json()
    console.log(results)
  }

  return (
    <div className='flex flex-col items-center'>
      <div>
        <h1 className='text-6xl font-semibold'>Meal Finder App</h1>
        <form onSubmit={fetchRecipe}>
          <input
            type='text'
            placeholder='Search for recipes'
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
          />
          <button type='submit'>Search Recipes</button>
        </form>
      </div>

      <div className='mt-8'>
        <MealCard />
      </div>
    </div>
  )
}

export default Home
