import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import LinearProgress,{ linearProgressClasses } from '@mui/material/LinearProgress';

export const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        sx={{
            padding: "20px"
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1), 
        fontFamily: "'Poppins', sans-serif",
        fontSize: "4px",
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '10px 0',
            '& li': {
                marginBottom: "10px"
            }
        },
        '& .MuiMenuItem-root': {
            '& img': {
                marginRight: "10px",
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));


export const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': { 
        width: '80%',
        backgroundColor: '#D88B07',
    },
});

export const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({ 
        textTransform: 'none',
        fontWeight: "400",
        fontSize: "16px",
        fontFamily: 'Euclid Circular A', 
        color: '#808899',
        '&.Mui-selected': {
            color: '#D88B07',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }),
);

export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#D88B07' : '#308fe8',
    },
  }));

  export const selectStyle = {
    control: (base) => ({
        ...base,
        height: "44px",
        borderRadius: "12px",
        border: "1px solid var(--grey-200, #B6B7BB)",
        background: "none",
        boxShadow: "none",
        '&:hover': {
            border: "1px solid #D0D3D8",
        },
        outline: "none",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        color: "#FFF",
    }),
    indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
    placeholder: (base) => ({
        ...base,
        color: "var(--grey-400, #6B6C74)",
        whiteSpace: "nowrap"
    }),
    input: (base) => ({
        ...base,
        color: "black",
    }),
    singleValue: (base) => ({
        ...base,
        color: "black",
    }),
};