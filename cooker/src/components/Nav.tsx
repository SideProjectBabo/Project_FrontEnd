import React from 'react'
import styled from 'styled-components'
export default function Nav() {

    const NavWrapper = styled.div`
        padding: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .nav{
            font-size: 15px;
            display: flex;
            flex-direction: column;
        }
        .select{
            width: 100%;
            height: 2px;
            background-color: #FB9620;
        }
        .selected{
            color:#FB9620;
        }
    `
    return (
        <NavWrapper>
            <div className="nav">
                <span className="selected" >레시피</span>
                <span className="select"></span>
            </div>
            <div>
                <span>제철레시피</span>
            </div>
            <div>
                <span>요리팁</span>
            </div>
            <div>
                <span>커뮤니티</span>
            </div>
            <div>
                <span>쿠커소식</span>
            </div>

        </NavWrapper>
    )
}
