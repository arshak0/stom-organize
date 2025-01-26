import { Typography, Box } from '@mui/material'
import tooth from '../assets/tooth.svg'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { CustomText } from './CustomText';

export default function Header() {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '70px',
            background: '#abecff'
            }}>
            <a href="https://vite.dev" target="_blank">
                <img src={tooth} className="logo" alt="Vite logo" />
            </a>
            <Box sx={{display: 'flex', gap: '50px'}}>
              <Typography variant="h5" fontWeight={600} sx={{color: '#0017a6'}}>Данные клиентов</Typography>
              <CustomText variant="h5" weight={600} text='Аналитика'/>
            </Box>
            <Box sx={{
              display: 'flex',
              padding: '8px 16px',
              alignItems: 'center',
              gap: '12px'
              }}>
              <PersonOutlineIcon />
              <Typography variant="subtitle1">Профиль</Typography>
            </Box>
            </Box>
    );
  }

