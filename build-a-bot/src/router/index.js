import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import RobotBases from '../parts/RobotBases.vue';
import StandardSidebar from '../sidebars/SidebarStandard.vue';
import BuildSidebar from '../sidebars/SidebarBuild.vue';
import ShoppingCart from '../cart/ShoppingCart.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: HomePage,
        sidebar: StandardSidebar,
      },
    },
    {
      path: '/build',
      name: 'Build',
      components: {
        default: RobotBuilder,
        sidebar: BuildSidebar,
      },
    },
    {
      path: '/parts/browse',
      name: 'BrowseParts',
      component: BrowseParts,
      children: [
        {
          path: 'heads',
          name: 'BrowseHeads',
          component: RobotHeads,
        },
        {
          path: 'arms',
          name: 'BrowseArms',
          component: RobotArms,
        },
        {
          path: 'torsos',
          name: 'BrowseTorsos',
          component: RobotTorsos,
        },
        {
          path: 'bases',
          name: 'BrowseBases',
          component: RobotBases,
        },
      ],
    },
    {
      path: '/parts/:partType/:id',
      name: 'PartInfo',
      component: PartInfo,
      props: true,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: ShoppingCart,
    },
  ],
});
