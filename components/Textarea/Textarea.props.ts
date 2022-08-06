import { TextareaHTMLAttributes, DetailedHTMLProps} from "react";
import { Field, FieldError } from "react-hook-form";

export interface TextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  error?: FieldError
}