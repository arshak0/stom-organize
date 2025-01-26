import { useState } from 'react'
import './Homepage.css'
import { Typography, Box } from '@mui/material'
import Header from '../../components/Header'
import BasicDatePicker from '../../components/BasicDatePicker'
import DataGridDemo from '../../components/DataGrid'
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import SettingsIcon from '@mui/icons-material/Settings';
import { FilterByField } from '../../components/FilterByField'
import { Button } from '../../components/Button'
import { CustomText } from '../../components/CustomText'



function Homepage() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <>
    <Header />
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px'}}>
        <FilterByField setActiveIndex={setActiveIndex} activeIndex={activeIndex}/>
        <Box sx={{display: 'flex', gap: 2}}>
          <BasicDatePicker placeholder="Дата начала"/>
          <BasicDatePicker placeholder="Дата окончания"/>
        </Box>
      </Box>

      <Box sx={{margin: '20px 0',display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px'}}>
      <Button icon={<SettingsIcon fontSize='medium'/>} text='Настройки раздела'/>
     
        <CustomText variant="h4" weight={600} text='Брекеты'/>
        <Box sx={{display: 'flex', gap: '10px'}}>
        <Button icon={<DoneIcon fontSize='medium'/>} text='Сохранить данные'/>
        <Button icon={<AddIcon fontSize='medium'/>} text='Добавить этап'/>
        
</Box>
      </Box>

      <DataGridDemo />
      <Box sx={{display: 'flex', marginTop: '30px', justifyContent: 'end'}}>
        <Button icon={<AddIcon fontSize='medium'/>} text='Добавить пользователя'/>
      </Box>
    </>
  )
}

export default Homepage
