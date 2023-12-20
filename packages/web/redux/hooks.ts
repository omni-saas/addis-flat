import { useSelector,useDispatch } from "react-redux";
import type { RootState,AppDispatch } from "./store";
import type { TypedUseSelectorHook } from "react-redux";


// dispatch action creator 
export const useAppDispatch:() => AppDispatch = useDispatch;

// 
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
