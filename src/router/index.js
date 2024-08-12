import { lazy } from 'react';

const mapComponentToPath = {
  '/login': lazy(() => import('../pages/AccountLogin')),
  '/escala': lazy(() => import('../pages/WorkSchedule'))
}

export { mapComponentToPath }
