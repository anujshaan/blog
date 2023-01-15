import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

const StudioNavbar = (props:any) => {
  return (
    <div>
      <div className='flex justify-between'>
        <div className='flex items-center space-x-2 px-4 text-yellow-500 font-semibold'>
          <ArrowUturnLeftIcon className='w-4 h-4 '/>
          <Link href='/'>
            Go to Website
          </Link>
        </div>
        <p className="text-white text-lg font-semibold p-6">Welcome to Blog Studio</p>
        <div></div>
      </div>
      <>
        {props.renderDefault(props)}
      </>
    </div>
  )
}

export default StudioNavbar