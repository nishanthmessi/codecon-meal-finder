import YoutubeFillIcon from 'remixicon-react/YoutubeFillIcon'

const MealCard = ({ meals }) => {
  return (
    <>
      {!meals ? (
        <div>Loading</div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8'>
          {meals.map((meal) => (
            <div className='flex flex-col gap-2 border shadow-md rounded-md p-2'>
              <img
                src={meal.strMealThumb}
                alt='meal-img'
                className='h-[18rem] w-[22rem] object-cover rounded-md'
              />
              <div className='flex justify-between w-full'>
                <div>
                  <h1 className='text-lg font-medium truncate w-[14rem]'>
                    {meal.strMeal}
                  </h1>
                  <p className='underline'>{meal.strArea}</p>
                </div>

                <div className='flex items-end'>
                  <a href={meal.strYoutube} target='_blank'>
                    <button className='flex items-center p-[.16rem] bg-red-500 hover:bg-red-600 transition duration-600 text-white rounded-md text-sm'>
                      Watch now
                      <YoutubeFillIcon className='h-8 w-8 ml-1' />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default MealCard
