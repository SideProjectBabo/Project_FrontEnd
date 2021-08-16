import React, { useEffect } from 'react';
import { IMAGES } from 'src/commons/variables'
import Image from 'next/image'
export default function Home() {

  useEffect(() => {


  }, []);

  return (
    <>
      <div>index page</div>
      <Image src={IMAGES.BANNER} alt="Picture of the author" />
      
    </>
  )
}
