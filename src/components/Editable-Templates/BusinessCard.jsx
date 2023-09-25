import React from 'react'
import Layout from '../../Layout.'
import { Router, Routes, Route } from 'react-router-dom'
import CardGenerator from './bcs/CardGenerator'

function BusinessCard() {
    return (
        <Layout>
            <CardGenerator/>
        </Layout>
    )

}

export default BusinessCard

