import React from 'react'
import { render } from 'react-dom'
import { SkiDaycount } from './components/SkiDayCount'

window.React = React 
render(
<SkiDaycount total={50}
    powder={20}
    backcountry={10}
    goal={100} />,
    document.getElementById('react-container')
)