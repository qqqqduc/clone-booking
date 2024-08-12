import React from 'react'

interface ICDownProps{
    width?: string;
    height?: string;
    fillColor?: string;

}
const ICDown: React.FC<ICDownProps> = ({
  width = '20px',
  height = '20px',
  fillColor = '#fff'
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} fill={fillColor}>
        <path d="M19.268 8.913a.9.9 0 0 1-.266.642l-6.057 6.057A1.3 1.3 0 0 1 12 16c-.35.008-.69-.123-.945-.364L4.998 9.58a.91.91 0 0 1 0-1.284.897.897 0 0 1 1.284 0L12 13.99l5.718-5.718a.897.897 0 0 1 1.284 0 .88.88 0 0 1 .266.642"></path>
   </svg>
  )
}

export default ICDown