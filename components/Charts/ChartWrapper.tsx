import React from 'react'

const ChartWrapper = ({ children }: any) => {
  return (
    <div
      style={{
        background: '#ffffff',
        width: '100%',
        height: '50vh',
        paddingTop: '1rem',
        paddingBottom: '2rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        borderRadius: '4px',
        boxShadow: '-3px 2px 8px #0000000D',
      }}>
      <div style={{ height: '80%', width: '100%' }}>{children}</div>
    </div>
  )
}

export default ChartWrapper
