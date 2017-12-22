import React from 'react'
import { render } from 'react-dom'
import { SkiDaycount } from './components/SkiDayCount'

window.React = React
render(
<SkiDaycount />,
    document.getElementById('react-container')
)