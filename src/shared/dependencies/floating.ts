import { Dropdown, Menu, Tooltip } from 'floating-vue';
import type { AppModule } from './types';

export const install: AppModule = (app) => {
  app.component('VDropdown', Dropdown);
  app.component('VTooltip', Tooltip);
  app.component('VMenu', Menu);
};
