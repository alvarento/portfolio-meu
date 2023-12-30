'use client';

import Image from 'next/image'
// import logoA from '../assets/icons/logo.svg?url'

export default function Loading() {

   return (
      <div className='loadingContainer'>
            {/* <Image
               src={logoA}
               alt='logoA'
               width={70}
               height={70}
               className='img'
            /> */}
         <div>Carregando....</div>
         <div className='loading'></div>
      </div>
   )
}