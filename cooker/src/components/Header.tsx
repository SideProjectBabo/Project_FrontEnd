import React from 'react'
import Nav from './Nav'
import { IMAGES } from 'src/commons/variables'
import Image from 'next/image'
export default function Header() {
    console.log(IMAGES.LOGO);

    return (
        <div>
            <Image src={IMAGES.LOGO} alt="Picture of the author" />
            
            <Nav />
        </div>
    )
}
