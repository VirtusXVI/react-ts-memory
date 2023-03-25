import React from 'react'
import styled from 'styled-components'

interface Props{
    title: string,
}

const Main = styled.div`
    color: white;
`

function MainScreen(props:Props) {
  return (
    <Main>
        {props.title}
    </Main>
  )
}

export default MainScreen