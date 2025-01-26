import { Typography, Box } from '@mui/material'
import './FilterByField.css'
import clsx from 'clsx'

  export const FilterByField = ({activeIndex, setActiveIndex}) => {
    const filterMenuLength = 3;
    const FilterButton = ({text, index, activeIndex}) => {
      const handleFilterClick = () => {
        console.log(index, activeIndex)
        setActiveIndex(index);
      }

      return (
        <Box sx={{cursor: 'pointer'}}>
          <Typography
              sx={{padding: '12px 24px'}}
              onClick={handleFilterClick}
              variant="subtitle1"
              className={
                clsx(
                  activeIndex===index ? clsx('fieldByFilter','activeFilterByField') : 'fieldByFilter',
                  index===1 && 'fieldByFilterFirst',
                  index===filterMenuLength && 'fieldByFilterLast'
                )
              }
            >
              {text}
          </Typography>
        </Box>
      )
    }

    return (
      <Box sx={{
        display: 'flex',
        borderRadius:'26px',
        border: '1px solid #a198fd',
        zIndex:'3'
        }}
      >
        <FilterButton text='Кариес' index={1} activeIndex={activeIndex}/>
        <FilterButton text='Брекеты'  index={2} activeIndex={activeIndex}/>
        <FilterButton text='Виниры'  index={3} activeIndex={activeIndex}/>
      </Box>
    )
  }