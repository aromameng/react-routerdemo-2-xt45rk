import Home from './Home';
import New from './New';
import Hello from './Hello';
import App from './App';
import Test from './pages/Test';
import Batched from './pages/Batched';
import Batched2 from './pages/Batched2';
import VirtualList from './pages/VirtualList';
import Demo1 from './pages/demo1';
import Demo2 from './pages/demo2';

export default [
  {
    path: '/view',
    component: App,
    exact: true,
    routes: [
      {
        path: '/view/a',
        name: '首页',
        component: Hello
      }
    ]
  },
  {
    path: '/',
    component: App,
    exact: true,
    routes: [
      {
        path: '/home',
        name: '首页',
        component: Home
      },
      {
        path: '/test',
        name: '测试',
        component: Test
      },
      {
        path: '/new',
        name: '测试',
        component: New
      },
      {
        path: '/batched',
        name: '批量更新',
        component: Batched
      },
      {
        path: '/batched2',
        name: '批量更新',
        component: Batched2
      },
      {
        path: '/virtualList',
        name: '虚拟列表',
        component: VirtualList
      },
      {
        path: '/demo1',
        name: 'demo1',
        component: Demo1
      },
      {
        path: '/demo2',
        name: 'demo2',
        component: Demo2
      }
    ]
  }
];
