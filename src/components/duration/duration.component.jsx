import React from 'react'
import './duration.styles.css'
const Duration = () => {
  return (
    <>
        <div className="duration-container">
            <span>Total Hours: 0.0</span>
            <div className="date-time">
            <i className="pi pi-angle-left" style={{ fontSize: '1.8rem' }}></i>
                05 Feb 2024 - 11 Feb 2024
            <i className="pi pi-angle-right" style={{ fontSize: '1.8rem' }}></i>
            </div>
        </div>
    </>
  )
}

export default Duration