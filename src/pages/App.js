import { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Header from '../componens/Header'
import Home from '../pages/Home'
import About from '../pages/About'
import Goods from '../pages/Goods'
import Message from '../pages/Message'

function App() {
  return (
    <Suspense fallback={<div>稍等片刻</div>}>
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/goods">
            <Goods />
          </Route>
          <Route path="/message">
            <Message />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
//这个 Suspense 是在配置 i18n 时候用到的，i18n 有一个插件是 数据从 http 获取
//运行那个是异步的，需要配置 Suspense