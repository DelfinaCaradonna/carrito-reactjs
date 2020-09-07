import React, {useState} from 'react'
import './App.css'
import {Header} from './Header'
import {Footer} from './Footer'
import {Lista} from './Lista'

export default function App () {
    return (
        <div>
            <Header />
            <Lista />
            <Footer />
        </div>
    )
}