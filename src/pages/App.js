import React, { Suspense, createContext, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Header from '../componens/Header'
import Footer from '../componens/Footer'
import Home from '../pages/Home'
import About from '../pages/About'
import Goods from '../pages/Goods'
import Message from '../pages/Message'
import './App.css'

import Navbar from '../componens/Header/Navbar'

import Bear from './Goods/bear'


export const cardContext = createContext({})


function App() {

  const [active, setActive] = useState([false, false, false, false, false, false, false])

  const value = {
    active,
    setActive
  }

  return (
    <Suspense fallback={<div>稍等片刻</div>}>
      <Router>
        <div className="page">
          <Navbar />
          <Switch>
            <cardContext.Provider value={value}>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/goods">
                <Goods />
              </Route>
              <Route path="/bear" component={Bear}></Route>
              <Route path="/message">
                <Message />
              </Route>
            </cardContext.Provider>
          </Switch>
          <Footer />
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
//这个 Suspense 是在配置 i18n 时候用到的，i18n 有一个插件是 数据从 http 获取
//运行那个是异步的，需要配置 Suspense

//home 那里要加exact 是因为，我们使用了 switch 就会找到一个之后不继续向下寻找
//比如，没有 exact 的话，因为 home 在上面，所以就先找到了 home 渲染 home


//又发现一个tailwind的好处，当样式和变量有关系时，用变量决定类名，而不用写css文件，格外的方便