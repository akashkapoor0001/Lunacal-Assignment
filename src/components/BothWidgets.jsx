import React from 'react'
import Widget_One from './Widget_One'
import Widget_Two from './Widget_Two'
import Underline from './UnderLine'

const BothWidgets = () => {
    return (
        <div
            className="flex-col w-[680px] h-[520px] lg:ml-[50px] mt-[50px] lg:mt-0 mb-[90px] lg:mb-[37px]"
        >
            <Widget_One />
            <Underline />
            <Widget_Two />
            <Underline />
        </div>
    )
}

export default BothWidgets
