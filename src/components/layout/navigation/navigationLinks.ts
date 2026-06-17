export type NavLinkItem = {
  title: string;
  path: string;
};

const navigationLinks: NavLinkItem[] = [
  { title: 'Landscapes', path: '/landscapes' },
  { title: 'Portraits', path: '/portraits' },
  { title: 'Products', path: '/products' },
  { title: 'Architecture', path: '/architecture' },
  { title: 'Film', path: '/film' },
  { title: 'About', path: '/about' },
];

export default navigationLinks;