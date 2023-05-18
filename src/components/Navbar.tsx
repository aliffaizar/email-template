import { FaBars } from 'react-icons/fa'
export default function Navbar() {
  return (
    <div className='w-full bg-white shadow'>
      <div className='container mx-auto px-4 sm:px-6'>
        <div className='flex items-center justify-between h-16'>
          <a href='/'>
            <h1>Email Template</h1>
          </a>
          <nav className='hidden sm:flex items-center'>
            <a
              href='/'
              className='text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium'
            >
              Home
            </a>
            <a
              href='/'
              className='text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium'
            >
              About
            </a>
          </nav>
          <div className='dropdown dropdown-end block sm:hidden'>
            <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
              <button>
                <FaBars />
              </button>
            </label>
            <ul
              tabIndex={0}
              className='menu dropdown-content shadow bg-base-100 w-56 rounded'
            >
              <li className='hover-bordered'>
                <a>Item 1</a>
              </li>
              <li className='hover-bordered'>
                <a>Item 2</a>
              </li>
              <li className='hover-bordered'>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
