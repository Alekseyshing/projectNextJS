import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { Rating } from "../Rating/Rating";

export interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  sort: SortEnum;
  setSort: (sort: SortEnum) => void
}

export enum SortEnum{
  Rating,
  Price
}