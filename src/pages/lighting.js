import React from 'react'
import exteriorlight from "../images/exteriorlighting1.jpg"
import interiorlight from "../images/interior-lighting4.png"

import Layout from '../components/layout'

const LightingPage = () => (
  <Layout>
    <h1>Lighting 1 </h1>
    <p>thanks for stopping by</p>
    <img src={exteriorlight} alt=" exterior lighting example" />
    <img src={interiorlight} alt=" exterior lighting example" />
    
  </Layout>
)

export default LightingPage
