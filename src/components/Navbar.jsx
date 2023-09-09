import Menu4LineIcon from 'remixicon-react/Menu4LineIcon'

const Navbar = () => {
  return (
    <div className='sticky top-0 container mx-auto flex justify-between items-center py-6 z-10 backdrop-blur-md backdrop-saturate-125 bg-white/40 px-4 md:px-0'>
      <ul>
        <li className='text-2xl font-semibold underline'>Meal Finder</li>
      </ul>
      <ul className='hidden md:flex gap-8 text-lg'>
        <li className='hover:underline cursor-pointer'>Order Food</li>
        <li className='hover:underline cursor-pointer'>Login</li>
        <li className='hover:underline cursor-pointer'>Sign Up</li>
      </ul>
      <div className='flex md:hidden items-center gap-6'>
        <div className='bg-gray-800 p-2 rounded-full'>
          <Menu4LineIcon className='text-white' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
