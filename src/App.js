import './App.css';
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom"
import { useLocation } from 'react-router-dom'
import Page1 from './Pages/page1'
import Page2 from './Pages/page2'
import Page3 from './Pages/page3'
import Page4 from './Pages/page4'
import Page5 from './Pages/page5'
import Page6 from './Pages/page6'

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="/page4" element={<Page4 />} />
      <Route path="/page5" element={<Page5 />} />
      <Route path="/page6" element={<Page6 />} />
      <Route path="/home/page1" element={<Page1 />} />
      <Route path="/home/page2" element={<Page2 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
}


const Header = () => {

  return <ul>
    <li>
      <Link to="/">
        首页
      </Link>
    </li>
    <li>
      <Link to="/about">
        关于
      </Link>
    </li>
    <li>
      <Link to="/dashboard">
        仪表盘
      </Link>
    </li>
    <li>
      <Link to="/page1">
        Page1
      </Link>
    </li>

  </ul>

}

const Home = () => {
  return (
    <div>
      <Header />
      <div>这是卡拉云的首页</div>
      <ul>
        <li>
          {/* 注册子路由时要写上父路由的path值 */}
          <Link to="/home/page1">News</Link>
        </li>
        <li>
          <Link to="/home/page2">Message</Link>
        </li>
      </ul>
    </div>
  )

}

const About = () => {
  // 使用 hook，获得 location 对象
  const location = useLocation();
  // location 对象中含有 pathname，即为当前路径(仅路径部分 不含域名)
  const { pathname } = location

  return <>
    <Header />
    <div>这里是卡拉云的网站，你当前在 {pathname}</div>
  </>
}

const Dashboard = () => {
  return <>
    <Header />
    <div>今日活跃用户: 42</div>
  </>
}

const NotFound = () => {
  return <>
    <Header />
    <div>

      你来到了没有知识的荒原
    </div>
  </>
}

export default App;
