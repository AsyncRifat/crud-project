import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layout/HomeLayout';
import Home from '../components/Home';
import AddCoffee from '../components/AddCoffee';
import UpdateCoffee from '../components/UpdateCoffee';
import Loading from '../components/loader/Loading';
import CoffeeDetails from '../components/CoffeeDetails';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Users from '../components/Users';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    children: [
      {
        index: true,
        HydrateFallback: Loading,
        loader: () => fetch('http://localhost:3000/coffees'),
        Component: Home,
      },
      {
        path: 'addCoffee',
        Component: AddCoffee,
      },
      {
        path: 'coffee/:id',
        HydrateFallback: Loading,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: CoffeeDetails,
      },
      {
        path: 'updateCoffee/:id',
        HydrateFallback: Loading,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee,
      },

      // users controlled
      {
        path: 'sign-in',
        Component: SignIn,
      },
      {
        path: 'sign-up',
        Component: SignUp,
      },
      {
        path: 'users',
        HydrateFallback: Loading,
        loader: () => fetch('http://localhost:3000/users'),
        Component: Users,
      },
    ],
  },
]);
