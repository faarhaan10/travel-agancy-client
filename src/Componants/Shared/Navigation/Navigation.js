import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { CardMedia, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth'

const Navigation = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [navbar, setNavbar] = React.useState(false);

    const { user, handleLogOut } = useAuth();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    //navbar activity handler
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener('scroll', changeBackground);


    return (
        <AppBar position={navbar ? 'sticky' : 'static'}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        Travel Hero
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {/* mobile device menus */}
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link to='/' style={{ textDecoration: 'none' }}>
                                    <Typography textAlign="center">
                                        Home
                                    </Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link to='/blogs' style={{ textDecoration: 'none' }}>
                                    <Typography textAlign="center">
                                        Blogs
                                    </Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <HashLink to='/home#contact' style={{ textDecoration: 'none' }}>
                                    <Typography textAlign="center">
                                        Contact us
                                    </Typography>
                                </HashLink>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <HashLink to='/home#testimonials' style={{ textDecoration: 'none' }}>
                                    <Typography textAlign="center">
                                        Testimonials
                                    </Typography>
                                </HashLink>
                            </MenuItem>
                            {user.email && <MenuItem onClick={handleCloseNavMenu}>
                                <Link to='/dashboard' style={{ textDecoration: 'none' }}>
                                    <Typography textAlign="center">
                                        Dashboard
                                    </Typography>
                                </Link>
                            </MenuItem>}

                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        Travel Hero
                    </Typography>

                    {/* large device menus */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link
                            to='/home'
                            style={{ textDecoration: 'none' }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Home
                            </Button>
                        </Link>
                        <HashLink
                            to='/home#blogs'
                            style={{ textDecoration: 'none' }}
                        >
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Blogs
                            </Button>
                        </HashLink>
                        <HashLink
                            to='/home#contact'
                            style={{ textDecoration: 'none' }}
                        >
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Contact us
                            </Button>
                        </HashLink>
                        <HashLink
                            to='/home#testimonials'
                            style={{ textDecoration: 'none' }}
                        >
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Testimonials
                            </Button>
                        </HashLink>


                        {user.email && <Link
                            to='/dashboard'
                            style={{ textDecoration: 'none' }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Dashboard
                            </Button>
                        </Link>}
                    </Box>
                    {/* avatar area  */}
                    {user.email ? <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar
                                    alt={user.displayName}
                                    src={user.photoURL}
                                >
                                    {user?.displayName?.slice(0, 1)}
                                </Avatar>
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
                            <MenuItem onClick={handleCloseUserMenu}>

                                <Stack>
                                    {user.photoURL && <CardMedia
                                        component="img"
                                        height='100'
                                        image={user.photoURL}
                                        alt={user.displayName}
                                    />}
                                    <Typography textAlign="center">
                                        {user.displayName}
                                    </Typography>
                                </Stack>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Link to='/dashboard' style={{ textDecoration: 'none' }}>
                                    <Typography textAlign="center">
                                        Dashboard
                                    </Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleLogOut}>
                                <Typography textAlign="center">
                                    Logout
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                        :
                        <Link
                            to='/login'
                            style={{ textDecoration: 'none' }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Login
                            </Button>
                        </Link>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navigation;
