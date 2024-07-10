import React from 'react'
import { HAMBURGER_ICON_URL, YOUTUBE_LOGO_URL, USER_ICON_URL } from '../utils/constants'

const Head = () => {
  return (
    <div className="grid grid-flow-col p-1 m-1 shadow-lg items-center justify-between " >
      <div className="flex items-center col-span-1">
        <img className="h-8" src={HAMBURGER_ICON_URL} alt="hamburger" />
        <img className="h-12" src={YOUTUBE_LOGO_URL} alt="logo" />
      </div>
      <div className="col-span-10">
        <input type="text" className="border p-1 border-gray-400 rounded-l-full  w-1/2 ml-20"/>
        <button className=" border border-gray-400 bg-gray-200 px-4 py-1 rounded-r-full"> Search</button>
      </div>
      <div className="col-span-1">
        <img className="h-8" src={USER_ICON_URL} alt="user" />

      </div>
    </div>
  )
}

export default Head
