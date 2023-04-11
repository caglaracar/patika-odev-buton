import React from 'react'

import {Button} from 'socialmebuttoncaglar'
import 'socialmebuttoncaglar/dist/index.css'
import {ButtonDef} from 'socialmebuttoncaglar';

const App = () => {
  return (
    <div className="app">
      <div>
        <Button className="instagramBtn" type={ButtonDef.INSTAGRAM} text="INSTAGRAM"/>
        <Button className="twitterBtn" type={ButtonDef.TWITTER} text="TWITTER"/>
        <Button className="linkedinBtn" type={ButtonDef.LINKEDIN} text="LINKEDIN"/>
        <Button className="githubBtn" type={ButtonDef.GITHUB} text="GITHUB"/>
        <Button className="youtubeBtn" type={ButtonDef.YOUTUBE} text="YOUTUBE"/>
      </div>
    </div>

  )
}


export default App
