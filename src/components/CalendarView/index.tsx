"use client"

import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Grid } from '@mui/material';
import classNames from 'classnames';
import Calendar from '../Calendar';
import Reminders from '../Reminders';
import styles from './CalendarView.module.scss';

const momentData: moment.Moment = moment();

const CalendarView: React.FC = () => {
  const [dateObject, setDateObject] = useState(momentData);
  const [selectedDate, setSelectedDate] = useState(momentData);

  useEffect(() => {
    setSelectedDate(dateObject);
  }, [dateObject]);

  const handleSelectedDate = (selectedDate: moment.Moment) => {
    setSelectedDate(selectedDate);
  }

  return (
    <Grid
      className={styles['grid-container']}
      container
      spacing={0}
    >
      <Grid item xs={7} className={styles['grid-item']}>
        <Reminders selectedDate={selectedDate} />
      </Grid>

      <Grid item xs={5} className={classNames(styles['grid-item'], styles['calendar-item'])}>
        <Calendar
          dateObject={dateObject}
          handleSelectedDate={handleSelectedDate}
          selectedDate={selectedDate}
          setDateObject={setDateObject}
        />
      </Grid>
    </Grid>
  );
};

export default CalendarView;