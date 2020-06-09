import Home from './pages/Home.svelte';
import Theme from './pages/Theme.svelte';
import Material from './pages/themes/Material.svelte'

export const routes = [
  {
    name: "/",
    component: Home
  },
  {
    name: "themes",
    component: Theme,
    nestedRoutes: [
      {name: 'material', component: Material}
    ]
  }
]