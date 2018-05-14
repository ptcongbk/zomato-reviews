import { PUBLIC_PATH } from '../constants';
// Import layouts
import SocketIOContainer from '../core/common/socket-io-container';
import MasterLayout from '../views/layouts/master';
import DashBoard from '../views/pages/dashboard';

// Partial path of admin
const PARTIAL_PATH = `${PUBLIC_PATH}`;

const clientRoutes = {
  path: `${PARTIAL_PATH}`,
  component: SocketIOContainer,
  routes: [
    {
      path: `${PARTIAL_PATH}/`,
      component: MasterLayout,
      routes: [
        {
          path: `${PARTIAL_PATH}/Dashboard`,
          component: DashBoard,
        },
      ],
    },
  ],
};

export default clientRoutes;
