import { useState } from 'react'
import SearchLineIcon from 'remixicon-react/SearchLineIcon'
import MealCard from './MealCard'

const Home = () => {
  const [recipe, setRecipe] = useState('')
  const [searchResutls, setSearchResults] = useState([])
  const [message, setMessage] = useState('')

  // Meal Search Function
  const fetchRecipe = async (e) => {
    e.preventDefault()

    try {
      if (!recipe) {
        setMessage('Enter food name to search')
      } else {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`
        )
        const results = await res.json()
        setSearchResults(results.meals)
        setRecipe('')
        setMessage('')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='text-center mt-20'>
        <h1 className='text-5xl mb-8'>What You Gonna Eat Today?</h1>
        <h1 className='text-2xl sm:text-3xl font-base mb-4'>Find Your Meal</h1>
        <form
          onSubmit={fetchRecipe}
          className='flex items-center justify-center'
        >
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
        {message ? (
          <div className='flex justify-center'>
            <h1 className='flex justify-between bg-gray-700 mt-4 p-3 rounded-md text-white w-[24rem] sm:w-[30rem]'>
              {message}
              <span>
                <p
                  className='cursor-pointer text-gray-400 hover:text-gray-100'
                  onClick={() => setMessage('')}
                >
                  x
                </p>
              </span>
            </h1>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className='mt-8'>
        {!searchResutls ? (
          <div className='flex items-center h-[40vh]'>
            <p className='text-3xl'>Sorry, No meal found.</p>
          </div>
        ) : (
          <MealCard meals={searchResutls} />
        )}
      </div>
    </div>
  )
}

export default Home
