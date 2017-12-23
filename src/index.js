import React from 'react'
import { render } from 'react-dom'
import { SkiDayList } from './components/SkiDayList'

window.React = React

render(
	<SkiDayList days={
    [
    {
    resort: "Carle Montes",
    date: new Date("12/8/2017"),
    powder: true,
    backcountry: false
    },
        {
    resort: "Belagio",
    date: new Date("2/8/2017"),
    powder: false,
    backcountry: false
    },
        {
    resort: "Venetian",
    date: new Date("6/8/2017"),
    powder: false,
    backcountry: true
    }
    ]
    }
    />,
	document.getElementById('react-container')
)