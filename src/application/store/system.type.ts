export interface AppState {
  name: string;
}

export enum AppStatus {
  UNLOAD,
  FETCHED,
  LOADED,
  ERROR,
}

export interface Annotation {
  og_size?: {
    pwidth: string;
    pheight: string;
  };
  anno_color?: string;
  pageNumber: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

//绘图模式
export interface DarwAnnotation {
  og_size?: {
    pwidth: string;
    pheight: string;
  };
  anno_color?: string;
  pageNumber: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

//匹配模式
export interface MatchAnnotation {
  anno_color?: string;
  startValue: string;
  endValue: string;
}
