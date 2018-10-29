import React from 'react'
import fishcolor from "../images/fishcolor.gif"
import fishshoot from "../images/fish-shoot.gif"
import birdshoot from "../images/3-bird-shoot.gif"
import dinorun from "../images/dinoruncolorfin2.gif"
import ghostdeath from "../images/ghostdeathanim.gif"

import Layout from '../components/layout'

const AnimationPage = () => (
  <Layout>
    <h1>Animation Work</h1>
    <p>Demo reel</p>
    <iframe width="949" height="534" src="https://www.youtube.com/embed/AYo1wWmJiqU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

    <p> Concept art for candy corn monster by Jeff Harvey </p>
    <img src={dinorun} alt=" sprite movement" />
    <h2>Game animations</h2>
    <p> The following sprites are from the game <a href="https://thobbs1303.itch.io/in-a-jam">In a Jam</a>- a music-themed, casual fighting game that uses rock-paper-scissors style type advantage for fast paced two player action! </p>
    <img src={fishcolor} alt=" sprite movement" />
    <img src={fishshoot} alt=" sprite movement" />
    <img src={birdshoot} alt=" sprite movement" />
    <p> The following sprites are from the game <a href="https://oopyskoop.itch.io/spooked">Spooked</a>- a Halloween themed endless runner. </p>
    <img src={ghostdeath} alt="sprite movement" />
    
  </Layout>
)

export default AnimationPage
