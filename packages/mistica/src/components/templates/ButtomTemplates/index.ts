import { FormContextType, RJSFSchema, StrictRJSFSchema, TemplatesType } from '@rjsf/utils';
import SubmitButton from './SubmitButton';
import RemoveButton from './RemoveButton';

export function generateButtonTemplates<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(): Partial<TemplatesType<T, S, F>['ButtonTemplates']> {
  return {
    SubmitButton,
    RemoveButton,
  };
}

export default generateButtonTemplates();
