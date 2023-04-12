import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

import {
  IUIState,
  IEntityActionPayload,
} from "./types";

const SLICE_BASE_NAME = 'ui';

const initialState: IUIState = {
  state: {},
};

const uiSlice = createSlice({
  name: SLICE_BASE_NAME,
  initialState,
  reducers: {
    setEntityState(state, action: PayloadAction<IEntityActionPayload>) {
      if (action.payload && action.payload.entityType) {
        state.state[action.payload.entityType] = action.payload.state;
      }
    },
  },
});

export const {
  setEntityState,
} = uiSlice.actions;

export default uiSlice.reducer;
