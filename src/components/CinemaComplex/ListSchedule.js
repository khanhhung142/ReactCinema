import React, { useState } from 'react';
import FilmSchedule from './FilmSchedule';

export default function ListSchedule({cinema}) {

  return (
    <div className="cinemaComplex__content--listSchedule col-md-8 col-12">
      <FilmSchedule />
    </div>
  )
}
