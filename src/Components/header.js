import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';



const HeaderContainer = styled.div`
margin-bottom:10vh;
& img {
    padding-top:1rem;
    margin-left:1rem;
    height:70px;
}

`

const Header=()=>{
    return(
        <HeaderContainer>
            <Link to="/">
            <img src="../img/crypto.jpg" alt="" srcset="" />
            </Link>
            
        </HeaderContainer>
    )
}

export default Header;
