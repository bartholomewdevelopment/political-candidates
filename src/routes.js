const routes = [
    { path: '/', component: 'Home', exact: true },
    { path: '/politician/:id', component: 'PoliticianDetails' },
    { path: '/about', component: 'About' },
    { path: '/contact', component: 'Contact' },
  ];
  
  export default routes;
  