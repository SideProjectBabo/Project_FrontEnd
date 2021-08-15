import React from 'react'
import Nav from './Nav'
import { IMAGES } from 'src/commons/variables'
import Image from 'next/image'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: red;
`;

export default function Header() {

    return (
        <div>
            <Title>
                <Image src={IMAGES.LOGO} alt="Picture of the author" />
                <Nav />
                
                asdfsf
            </Title>
        </div>
    )
}
