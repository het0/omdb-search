import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setEntityState } from "@/redux/reducres/ui/reducer";
import { RootState } from "@/redux/store";

/**
 * Hook to store any entity in redux store
 *
 * @kind function
 *
 * @param name identifier for entity
 * @param defaultValue default value of entity
 */
const useConnectedUIEntity = <T>(
  name: string,
  defaultValue: T | null = null,
): [T | null, (value: T) => void] => {
  const dispatch = useDispatch();
  const value = useSelector<RootState>((state) => state.ui.state[name]) as T | undefined | null;

  const isInitialized = (typeof value !== 'undefined');

  useEffect(() => {
    // Setting default value
    // Routing between Nextjs pages can remount components, so we need to have this check to prevent reinitialization
    if (!isInitialized) {
      console.log(value);
      dispatch(setEntityState({
        entityType: name,
        state: defaultValue,
      }));
    }
  }, []);

  const setValue = useCallback((value: T) => {
    dispatch(setEntityState({
      entityType: name,
      state: value,
    }));
  }, [name]);

  return [isInitialized ? value : defaultValue, setValue];
};

export { useConnectedUIEntity };
