import { Typography } from '@mui/material'

interface ButtonProps {
  text: string;
  weight: number;
  variant: string;
}

export const CustomText = ({text, variant, weight}: ButtonProps) => {
    return (
        <Typography variant={variant} fontWeight={weight} sx={{color: '#5d5d5d'}}>{text}</Typography>
    );
  }