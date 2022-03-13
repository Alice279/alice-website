import { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Header from '../componens/Header'

function App() {
  return (
    <Suspense fallback={<div>稍等片刻</div>}>
      <Router>
        <Header />
      </Router>
    </Suspense>
  );
}

export default App;
//这个 Suspense 是在配置 i18n 时候用到的，i18n 有一个插件是 数据从 http 获取
//运行那个是异步的，需要配置 Suspense