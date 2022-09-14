import Home from 'pages/Home';
import Link1 from 'pages/Link1';
import Link2 from 'pages/Link2';


export const publicRoutes = [
  {
    path: '/',
    component: <Home />,
  },
  {
    path: '/link1',
    component: <Link1 />,
  },
  {
    path: '/link2',
    component: <Link2 />,
  }
];
