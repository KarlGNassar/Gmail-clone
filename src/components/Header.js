import React from 'react'
import './Header.css'
import { Avatar, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/userSlice'
import { auth } from '../firebase'

function Header() {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })
    }


    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>

                <img src="https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-gmail-icon-download-png-and-vector-1.png" alt="Gmail logo"/>
                <p className="header__logoName">Kmail</p>
            </div>

            <div className="header__middle">
                <SearchIcon />
                <input type="text" placeholder="Search mail"/>
                <ArrowDropDownIcon className="header__inputCaret" />
            </div>

            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar src={user?.photoUrl} onClick={signOut} className="header__avatar" />
            </div>
        </div>
    )
}

export default Header
