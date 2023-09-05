export const isActiveLink = (href: string, currentPathname: string): boolean => {
  if (currentPathname === '/') {
    return href === currentPathname;
  }
  return currentPathname.startsWith(href);
}
