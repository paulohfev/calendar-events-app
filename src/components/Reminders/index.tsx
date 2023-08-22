"use client"

import React from 'react'
import Image from 'next/image';
import { Button } from '@mui/material';
import NoReminder from '../../../public/no-reminders.png';
import styles from './Reminders.module.scss';

type Props = {
  selectedDate: moment.Moment;
}

const Reminders: React.FC<Props> = ({ selectedDate }) => {
  const selectedDayHeader = selectedDate.format("dddd[,] MMMM D[,] YYYY");

  return (
    <div>
      <div className={styles.header}>
        <h3 className={styles['date-header']}>{selectedDayHeader}</h3>

        <Button variant="contained">Add reminder</Button>
      </div>

      <Image src={NoReminder} alt="No Reminder Empty State" />
    </div>
  )
}

export default Reminders;
