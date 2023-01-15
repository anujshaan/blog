import Image from 'next/image'
import React from 'react'

import BlogLogo from '../assets/BlogLogo.jpeg'

const Logo = (props:any) => {
  const { renderDefault, title} = props;
  return (
    <div className='flex items-center space-x-2 px-2'>
      <Image
        className=' rounded-full w-10 h-10 object-cover'
        src={BlogLogo}
        alt='logo'
      />
      <>{renderDefault(props)}</>
    </div>
  )
}

export default Logo