import { Avatar } from '@material-ui/core';
import React from 'react';
import '../css/SidebarRow.css';

function SidebarRow({src, Icon, title}) {
    return (
        <div>
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <p>{title}</p>
        </div>
    )
}

export default SidebarRow
