import React, { useState } from 'react';
import { Menu, IconButton, Typography, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Dropdown = (props) => {

      const theme = useTheme();

      const [anchorEl, setAnchorEl] = useState(null);
      const open = Boolean(anchorEl);

      const handleOpen = (event) => {
            setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
            setAnchorEl(null);
      };

      const styledDropdowns = {

            styledIconButtons: {
                  menu: {
                        color: "white",
                        backgroundColor: theme.palette.primary.dark,
                        borderStartStartRadius: "5px",
                        borderEndStartRadius: "5px",
                        borderStartEndRadius: "0px",
                        borderEndEndRadius: "0px",
                        '&:hover': {
                              backgroundColor: theme.palette.primary.main,
                        }
                  },
                  navbar: {
                        color: "white",
                        backgroundColor: theme.palette.primary.main,
                        '&:hover': {
                              backgroundColor: theme.palette.primary.dark,
                        },
                        borderRadius: "0px",
                  }
            },
            styledMenu: {
                  menu: {
                        '& .MuiPaper-root': {
                              backgroundColor: theme.palette.primary.dark,
                              color: 'white',
                              borderRadius: '0px',
                              marginTop: '0.5rem',
                        },
                        padding: '0rem',
                  },
                  navbar: {
                        '& .MuiPaper-root': {
                              backgroundColor: theme.palette.primary.main,
                              color: 'white',
                              borderRadius: '0px',
                              marginTop: '0.5rem',
                        },
                        padding: '0rem',
                  }
            }

      }

      return (
            <>
                  {props.type === 'menu' ? (
                        <>
                              <IconButton
                                    id="filter-button"
                                    aria-controls={open ? 'filter-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleOpen}
                                    sx={styledDropdowns.styledIconButtons.menu}
                              >
                                    <Typography fontFamily={"semiBold"} sx={{ color: "white", fontSize: theme.typography.fontSize.md }}>Filtros
                                    </Typography>      <ArrowDropDownIcon />
                              </IconButton>

                        </>
                  ) : (
                        <IconButton
                              id="navbar-button"
                              aria-controls={open ? 'navbar-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                              onClick={handleOpen}
                              sx={styledDropdowns.styledIconButtons.navbar}
                        >
                              <MenuIcon sx={{
                                    fontSize: theme.icons.sizes.md,
                              }} />
                        </IconButton>
                  )}

                  <Menu
                        id={props.type === 'menu' ? 'filter-menu' : 'navbar-menu'}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                              'aria-labelledby': props.type === 'menu' ? 'filter-button' : 'navbar-button',
                        }}
                        sx={styledDropdowns.styledMenu[props.type]}
                  >

                        {props.children}
                  </Menu>
            </>
      );
};

export default Dropdown;
