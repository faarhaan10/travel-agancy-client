import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Route, Link, Routes, useNavigate } from "react-router-dom";
import SvgIcon from '@mui/material/SvgIcon';
import Review from '../Review/Review';
import AddBlogs from '../AddBlogs/AddBlogs';
import ManageBlogs from '../ManageBlogs/ManageBlogs';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../ProtectedRoutes/AdminRoute/AdminRoute';
import useAuth from '../../../hooks/useAuth';
import MyBlogs from '../MyBlogs/MyBlogs';
import EditBlog from '../ManageBlogs/EditBlog';


const drawerWidth = 240;

function Dashboard(props) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { window } = props;
    const navigate = useNavigate();
    const { handleLogOut, admin, user } = useAuth();


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleSignOut = () => {
        handleLogOut();
        navigate('/');
    }


    const drawer = (
        <div>
            <Toolbar sx={{ backgroundColor: '#1976d2' }} style={{ boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)', borderRight: '1px solid orange' }} />
            <Divider />

            <List>
                {!admin && <Box>

                    <Link to={`myblogs`} style={{ textDecoration: 'none' }}>
                        <ListItem button >
                            <Typography
                                variant="button" display="block" color="secondary"
                                sx={{
                                    ml: 5
                                }}>
                                my blogs
                            </Typography>
                        </ListItem>
                    </Link>

                    <Link to={'review'} style={{ textDecoration: 'none' }}>
                        <ListItem button >
                            <Typography
                                variant="button" display="block" color="secondary"
                                sx={{
                                    ml: 5
                                }}>
                                give review
                            </Typography>
                        </ListItem>
                    </Link>
                </Box>}
                {user.email && <Box>
                    <Link to={'addblogs'} style={{ textDecoration: 'none' }}>
                        <ListItem button >
                            <Typography
                                variant="button" display="block" color="secondary"
                                sx={{
                                    ml: 5
                                }}>
                                add blogs
                            </Typography>
                        </ListItem>

                    </Link>
                </Box>}
                {admin && <Box>

                    <Link to={'manageblogs'} style={{ textDecoration: 'none' }}>
                        <ListItem button >
                            <Typography
                                variant="button" display="block" color="secondary"
                                sx={{
                                    ml: 5
                                }}>
                                manage blogs
                            </Typography>
                        </ListItem>
                    </Link>

                    <Link to={"makeadmin"} style={{ textDecoration: 'none' }}>
                        <ListItem button >
                            <Typography
                                variant="button" display="block" color="secondary"
                                sx={{
                                    ml: 5
                                }}>
                                make an admin
                            </Typography>
                        </ListItem>
                    </Link>
                </Box>}
            </List>
            <Divider />
            <List>
                <ListItem button onClick={handleSignOut}>
                    <Typography
                        variant="button" display="block" color="secondary"
                        sx={{
                            ml: 5
                        }}>
                        Log out
                    </Typography>
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    function HomeIcon(props) {
        return (
            <SvgIcon {...props}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
        );
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` }
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Link to='/home'>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            sx={{ mr: 2 }}
                        >
                            <HomeIcon sx={{ fontSize: { md: 40, sx: 35 }, color: 'white' }} />
                        </IconButton>
                    </Link>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>

                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, px: 3, pt: 7, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Routes>
                    <Route path="myblogs" element={<MyBlogs />} />
                    <Route path="review" element={<Review />} />
                    <Route path="addblogs" element={<AddBlogs />} />
                    <Route path="manageblogs" element={<AdminRoute><ManageBlogs /></AdminRoute>} >
                        <Route path=":manageID" element={<AdminRoute><EditBlog /></AdminRoute>} />
                    </Route>

                    <Route path="makeadmin" element={<AdminRoute><MakeAdmin /></AdminRoute>} />
                </Routes>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;