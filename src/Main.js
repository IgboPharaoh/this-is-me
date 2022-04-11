import React from 'react'
import styled from "styled-components";
import Header from './components/Header';
import Navbar from './components/Navbar';


const Main = () => {
  return (
    <StyledLayout>
        <Navbar/>
        <Header/>
        
    </StyledLayout>
  )
}

export default Main

const StyledLayout = styled.div`
    margin: 0 auto;
    padding: 0rem 3.2rem;
    max-width: 108.8rem;

    @media(max-width:767px) {
      padding: 0rem 1.6rem;
    }
`
