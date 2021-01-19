import React from 'react'
import './Header.css'
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>

                <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt="Gmail logo"/>
            </div>

            <div className="header__middle">
                <SearchIcon />
                <input type="text" placeholder="Search mail"/>
                <ArrowDropDownIcon className="header__inputCaret" />
            </div>

            <div className="header__right">

            </div>
        </div>
    )
}

export default Header
