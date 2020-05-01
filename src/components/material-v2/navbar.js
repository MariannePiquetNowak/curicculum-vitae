import React from 'react';

import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';

// Icon Material-Ui
import CodeIcon from '@material-ui/icons/Code';
import BuildIcon from '@material-ui/icons/Build';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import ComputerIcon from '@material-ui/icons/Computer';
import BrushIcon from '@material-ui/icons/Brush';
import MoodIcon from '@material-ui/icons/Mood';

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const Navbar = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <StyledBreadcrumb
        component="a"
        href="#"
        label="Skills"
        icon={<BuildIcon fontSize="small" />}
        onClick={handleClick}
      />
      <StyledBreadcrumb
        component="a"
        href="#"
        label="Soft-Skills"
        icon={<MoodIcon fontSize="small" />}
        onClick={handleClick}
      />
      <StyledBreadcrumb
        component="a"
        href="#"
        label="Education"
        icon={<CodeIcon fontSize="small" />}
        onClick={handleClick}
      />
      <StyledBreadcrumb
        component="a"
        href="#"
        label="Experience"
        icon={<CardTravelIcon fontSize="small" />}
        onClick={handleClick}
      />
     <StyledBreadcrumb
        component="a"
        href="#"
        label="Hobbies"
        icon={<BrushIcon fontSize="small" />}
        onClick={handleClick}
      />
      <StyledBreadcrumb
        component="a"
        href="#"
        label="Environment"
        icon={<ComputerIcon fontSize="small" />}
        onClick={handleClick}
      />
    </Breadcrumbs>
  );
}

export default Navbar;