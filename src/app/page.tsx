"use client"

import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Main from "@/components/Main";
import ScrollIndicator from '@/components/ScrollIndicator';
import { useState, useEffect } from 'react';


export default function Portifolio() {

  // const [changeTheme, setChangeTheme] = useState()
  

return (
  <>
    <ScrollIndicator />
    <Header />
    <Main />
    <Footer />
  </>
)
}
