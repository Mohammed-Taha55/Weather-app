import clsx from 'clsx'
import React from 'react'

type Props = {
    src: string
    className?:string
}

export default function WeatherIcon({src, className}: Props) {
  return (
    <img className={clsx("size-8",className)}
              src={`https://openweathermap.org/img/wn/${src}.png`}
               alt="weather icon"
               />
  )
}