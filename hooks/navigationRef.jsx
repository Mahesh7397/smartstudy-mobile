import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

function getDeepestRouteName(route) {
  if (!route) return null;

  if (route.state && route.state.index != null) {
    const nestedRoute = route.state.routes[route.state.index];
    console.log(route)
    return getDeepestRouteName(nestedRoute);
  }

  return route.name;
}

export function getCurrentRouteName() {
  if (!navigationRef.isReady()) return null;

  const state = navigationRef.getRootState();
  console.log(state)
  return getDeepestRouteName(state);
}