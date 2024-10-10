import { navLists } from '../constants'
import { appleImg, searchImg, bagImg } from '../utils'

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav vlassName="w-full flex screen-max-width">
        <img src={appleImg} alt="Apple Logo"
        height = {18} width = {14}/>
      </nav>

      <div className="flex flex-1 justify-center max-sm:hidden">
        {navLists.map((nav) => (
          <div key={nav} className="px-5 cursor-pointer text-sm text-gray
          hover:text-white transition-all">
            {nav}
          </div>
        ))}
      </div>

      <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm: justify-end">
        <img src={searchImg} alt="Search Icon" width={18} height={18}/>
        <img src={bagImg} alt="bag" width={18} height={18}/>
      </div>
    </header>
  )
}

export default Navbar
