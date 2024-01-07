import React from 'react';
import { MenuItem, useTheme, IconButton, InputBase, Box } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import Dropdown from '../Dropdown.jsx';

const styledNavbarItems = (theme) => ({
      backgroundColor: theme.palette.primary.main,
      margin: 0,
      '&:hover': {
            backgroundColor: theme.palette.primary.dark,
      },
      color: "white",
      fontSize: theme.typography.fontSize.md,
      fontFamily: theme.typography.fontFamily.bold,
});

const NavbarItem = ({ theme, children, ...props }) => (
      <MenuItem sx={styledNavbarItems(theme)} {...props}>
            {children}
      </MenuItem>
);

const SearchItem = ({ theme }) => (
      <MenuItem sx={styledNavbarItems(theme)}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <InputBase placeholder="Buscar…" />
                  <IconButton sx={{ p: '10px' }}>
                        <AccountCircle />
                  </IconButton>
            </Box>
      </MenuItem>
);

const ItemsNavbar = () => {

      const theme = useTheme();

      return (
            <Dropdown type={"navbar"}>
                  <NavbarItem key="celulares" theme={theme}>Celulares</NavbarItem>
                  <NavbarItem key="accesorios" theme={theme}>Accesorios</NavbarItem>
                  <NavbarItem key="ofertas" theme={theme}>Ofertas</NavbarItem>
                  <NavbarItem key="filtros" theme={theme}>Filtros</NavbarItem>
                  <SearchItem theme={theme} />
            </Dropdown>
      );
}

export default ItemsNavbar;