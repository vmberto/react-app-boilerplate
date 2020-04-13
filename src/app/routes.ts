import { lazy, FunctionComponent, ComponentClass } from 'react';

const Product = lazy(() => import('app/ui/pages/product/Product'));
const About = lazy(() => import('app/ui/pages/about/About'));
const NotFound = lazy(() => import('app/ui/pages/not-found/NotFound'));

interface Route { exact: boolean, path: string, component: FunctionComponent<any> | ComponentClass<any, any> }; 

const routes: Route[] = [
    {
        exact: true,
        path: '/',
        component: About
    },
    {
        exact: false,
        path: '/product/:id',
        component: Product
    },
    {
        exact: false,
        path: '*',
        component: NotFound
    }
];

export default routes;