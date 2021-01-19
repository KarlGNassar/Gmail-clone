import React from 'react'
import SidebarOption from './SidebarOption'
import { Button } from '@material-ui/core'
import './Sidebar.css'
import AddIcon from '@material-ui/icons/Add'
import InboxIcon from '@material-ui/icons/Inbox'

function Sidebar() {
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large" />} className="sidebar__compose">
                COMPOSE
            </Button>

            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} />
        </div>
    )
}

export default Sidebar
