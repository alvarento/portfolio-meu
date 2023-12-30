import Image from 'next/image'
// import logoA from '../assets/icons/logo.svg?url'
// import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Logo from '@/components/Logo'
import SocialLinks from '@/components/SocialLinks'

export default function Loading() {

   return (
      <div className='notFound'>
         <div className='notFoundHeader'>
         <Logo/>
         <SocialLinks/>
         </div>
         <div className='notFoundContent'>Página não encontrada</div>
         <Footer/>
      </div>
   )
}