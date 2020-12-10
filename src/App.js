import React from "react"
import "./App.css"
import { Route } from 'react-router-dom'
import TotalContent from './totalcontent/totalContent'
import LawerDetail from './LawerDetail/LawerDetail'
import Main from './main/Main'

function App() {
  return (
    <>
      <Route exact path="/" component={Main} />
      <Route path path="/detail" component={LawerDetail} />
      <Route path="/content" component={TotalContent} />
    </>

  )
}

export default App;
