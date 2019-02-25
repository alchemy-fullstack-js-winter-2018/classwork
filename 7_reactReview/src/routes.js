import React from 'react';
import { Route } from 'react-router-dom';

function Home() {
  return (
    <h1>Home</h1>
  );
}

function Contact() {
  return (
    <h1>Contact Me!</h1>
  );
}

export const ROUTES = {
  HOME: {
    path: '/home',
    Component: Home,
    linkTo: () => '/home'
  },
  ABOUT: {
    path: '/about/:id',
    Component: Home,
    linkTo: id => `/about/${id}`
  },
  CONTACT: {
    path: '/contact',
    Component: Contact,
    linkTo: () => '/contact'
  }
};

export const getRoutes = () => {
  return Object.values(ROUTES).map(route => {
    return <Route key={route.path} path={route.path} component={route.Component} />;
  });
};
