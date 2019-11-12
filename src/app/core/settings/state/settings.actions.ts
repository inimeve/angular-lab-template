import {createAction, props} from '@ngrx/store';
import {SidebarState} from '../../components/sidebar/sidebar.component.model';

export const changeSidebarState = createAction(
  '[Settings] Change sidebar state',
  props<{sidebarState: SidebarState}>()
);


export const toggleSidebarState = createAction(
  '[Settings] Toggle sidebar state'
);
