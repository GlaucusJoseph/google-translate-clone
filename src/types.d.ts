import { AUTO_LENGUAGE, SUPPORTED_LENGUAGES } from "./constant";

export type Lenguage = keyof typeof SUPPORTED_LENGUAGES;
export type AutoLenguage = typeof AUTO_LENGUAGE;
export type FromLenguage = Lenguage | AutoLenguage;

export interface State {
  fromLenguage: string;
  toLenguage: string;
  fromText: string;
  result: string;
  loading: Boolean;
}

export type Action =
  | {
      type: "SET_FROM_LENGUAGE";
      payload: string;
    }
  | {
      type: "INTERCHANGE_LENGUAGES";
    }
  | {
      type: "SET_TO_LENGUAGE";
      payload: string;
    }
  | {
      type: "SET_FROM_TEXT";
      payload: string;
    }
  | {
      type: "SET_RESULT";
      payload: string;
    };
