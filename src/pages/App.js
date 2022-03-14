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
        <div className="page">
          <Header />
          <Switch>
            <Route path="/" exact>
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