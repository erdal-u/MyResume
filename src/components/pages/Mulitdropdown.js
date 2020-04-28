import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const Multidropdown = () => (
  <Select style={{width: "200px"}} options={options} />
)

export default Multidropdown;