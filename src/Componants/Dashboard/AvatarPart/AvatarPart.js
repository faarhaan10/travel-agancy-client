import React from 'react';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const AvatarPart = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const { user, handleLogOut } = useAuth();

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    {user.photoURL ? <Avatar alt={user.displayName} src={user.photoURL} />
                        :
                        <Avatar alt={user.displayName} src='ad/asd' />}
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >

                {/* 'Profile', 'Account', 'Dashboard', '' */}
                {user.email ? <MenuItem onClick={handleLogOut}>
                    <Typography textAlign="center">
                        Logout
                    </Typography>
                </MenuItem>
                    :
                    <Link to='/login'>
                        <MenuItem>
                            <Typography textAlign="center">
                                Login
                            </Typography>
                        </MenuItem>
                    </Link>}
            </Menu>
        </Box>
    );
};

export default AvatarPart;