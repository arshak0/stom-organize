import { Typography, Box } from '@mui/material'

interface ButtonProps {
  text: string;
}

export const Button = ({text, icon}: ButtonProps) => {
    return (
      <Box sx={{
        background: 'linear-gradient(161deg, #00bcff99, transparent)',
        display: 'flex',
        padding: '8px 16px',
        borderRadius: '26px',
        border: '2px solid #0089e491',
        alignItems: 'center',
        gap: '12px'
        }}>
        {icon}
        <Typography variant="subtitle1">{text}</Typography>
      </Box>
    );
  }