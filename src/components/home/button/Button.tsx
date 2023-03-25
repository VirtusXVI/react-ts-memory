import React from 'react'
import styled from 'styled-components'
import Themes from '../../../themes/themes'

const Button = styled.button`
  align-items: center;
  background-color: ${Themes.lightTheme.button.backgroundPrimary};
  border: 0;
  border-radius: 100px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  font-family: -apple-system, system-ui, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 20px;
  max-width: 480px;
  min-height: 40px;
  min-width: 0px;
  overflow: hidden;
  padding: 0px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  touch-action: manipulation;
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;

&:hover,
.button-18:focus { 
  background-color: ${Themes.lightTheme.button.backgroundSecondary};
  color: #ffffff;
}

&:active {
  background: #09223b;
  color: rgb(255, 255, 255, .7);
}

&:disabled { 
  cursor: not-allowed;
  background: rgba(0, 0, 0, .08);
  color: rgba(0, 0, 0, .3);
}
`

interface Props {
    text: string,
}

function StandardButton(props: Props) {
  return (
    <Button>
        {props.text}
    </Button>
  )
  
}

export default StandardButton;