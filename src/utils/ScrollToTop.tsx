"use client"

import React, { useEffect } from 'react'

export default function ScrollToTop() {
    useEffect(()=>{
        window.scrollTo({top:0})
    },[])
    return(
        <div></div>
    )
}
