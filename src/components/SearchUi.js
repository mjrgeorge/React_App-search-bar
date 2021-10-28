/* eslint-disable react/jsx-props-no-spreading */
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import React, { useRef, useState } from 'react';
import SearchSuggestion from './SearchSuggestion';

export const InnerTheme = createTheme({
    overrides: {
        MuiInputBase: {
            input: {
                padding: '6px',
                boxShadow: 'none',
            },
        },
        MuiButtonGroup: {
            groupedContainedHorizontal: {
                '&:not(:last-child)': {
                    borderRight: 0,
                },
            },
        },
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(1),
    },
    input: {
        // paddingLeft: theme.spacing(1),
        backgroundColor: 'white',
        [theme.breakpoints.up('md')]: {
            width: '30ch',
        },
    },
}));

const SearchUi = ({ handleSearchSubmit, searchTerm, setSearchTerm, searchResults, setSearchResults, }) => {
    const classes = useStyles();

    const [selectedIndex, setSelectedIndex] = useState('0');

    const options = ['All', 'Course', 'Subject', 'Book'];

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const contacts = SearchSuggestion;

    const searchHandler = (term) => {
        setSearchTerm(term);
        if (term !== "") {
            const newContactList = contacts.filter((contact) => {
                return Object.values(contact)
                    .join(" ")
                    .toLowerCase()
                    .includes(term.toLowerCase());
            });
            setSearchResults(newContactList);
        } else {
            setSearchResults([]);
        }
    };

    const getSearchTerm = (e) => {
        searchHandler(e.target.value);
    };

    return (
        <ThemeProvider theme={InnerTheme}>
            <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <ButtonGroup
                        variant="contained"
                        color="secondary"
                        ref={anchorRef}
                        aria-label="split button"
                    >
                        <Button
                            style={{ maxWidth: '165px', minWidth: '95px' }}
                            size="small"
                            aria-controls={open ? 'split-button-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-label="select merge strategy"
                            aria-haspopup="menu"
                            onClick={handleToggle}
                        >
                            {options[selectedIndex]}
                            <ArrowDropDownIcon />
                        </Button>
                        <InputBase
                            fullWidth
                            className={classes.input}
                            placeholder='Search'
                            inputProps={{ 'aria-label': 'search' }}
                            value={searchTerm}
                            onChange={getSearchTerm}

                        />
                        <Button size="small" onClick={() => handleSearchSubmit(searchResults)}>
                            <SearchIcon />
                        </Button>
                    </ButtonGroup>
                    <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        transition
                        disablePortal
                        placement="bottom-start"
                    >
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin:
                                        placement === 'bottom' ? 'center top' : 'center bottom',
                                }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList id="split-button-menu">
                                            {options.map((option, index) => (
                                                <MenuItem
                                                    key={option}
                                                    selected={index === selectedIndex}
                                                    onClick={(event) =>
                                                        handleMenuItemClick(event, index)
                                                    }
                                                >
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default SearchUi;
