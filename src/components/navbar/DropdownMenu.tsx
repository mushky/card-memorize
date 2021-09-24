import React from 'react'

import {ReactComponent as ChevronIcon} from '../../icons/chevron.svg';
import {ReactComponent as SettingsIcon} from '../../icons/settings.svg';

const DropdownMenu = () => {
  const DropdownItem = (props:any) => {
    return(
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
      </a>
    )
  }

  return(
    <div className="dropdown">
      <DropdownItem>Profile</DropdownItem>
      <DropdownItem>Add New Card Deck</DropdownItem>
      <DropdownItem>View Decks</DropdownItem>
      <DropdownItem
        leftIcon={<SettingsIcon />}
        rightIcon={<ChevronIcon />}
        >
        Settings
      </DropdownItem>
      <DropdownItem>Logout</DropdownItem>
    </div>
  )
}

export default DropdownMenu