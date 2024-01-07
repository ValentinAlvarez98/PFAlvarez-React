import React from 'react'
import Dropdown from '../Dropdown.jsx'
import { MenuItem, Typography, useTheme } from '@mui/material'

const ItemsMenu = () => {

      const theme = useTheme();

      const styledMenuItems = {

            backgroundColor: theme.palette.primary.dark,
            margin: 0,
            '&:hover': {
                  backgroundColor: theme.palette.primary.main,
            },
            color: "white",
            fontSize: theme.typography.fontSize.md,
            fontFamily: theme.typography.fontFamily.semiBold,

      }

      return (
            <Dropdown type={"menu"} >

                  <MenuItem key="cel" sx={styledMenuItems}> Celulares </MenuItem>
                  <MenuItem key="acc" sx={styledMenuItems}>Accesorios </MenuItem>
            </Dropdown>
      );
}

export default ItemsMenu