import { lazy } from 'react';

export const Character = lazy(() => import('./Character/Character'));
export const Characters = lazy(() => import('./Characters/Characters'));
export const Episode = lazy(() => import('./Episode/Episode'));
export const Episodes = lazy(() => import('./Episodes/Episodes'));
export const Home = lazy(() => import('./Home/Home'));
export const Location = lazy(() => import('./Location/Location'));
export const Locations = lazy(() => import('./Locations/Locations'));
export const Login = lazy(() => import('./Login/Login'));
export const NotFound = lazy(() => import('./NotFound/NotFound'));
