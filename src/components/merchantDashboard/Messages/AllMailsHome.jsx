import React,  { useState } from 'react'
import AllMails from './allMails'
import SentMails from './sentMails'
import Queue from './queue'
import Trash from './trash'

const AllMailsHome = ({ activeClass }) => {
    return (
        <div className="mt-5">
            {activeClass === "allMails" ? <AllMails /> : ""}
            {activeClass === "sentMails" ? <SentMails /> : ""}
            {activeClass === "queue" ? <Queue /> : ""}
            {activeClass === "trash" ? <Trash /> : ""}
        </div>
    )
}

export default AllMailsHome