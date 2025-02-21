import { FormContextType, RegistryWidgetsType, RJSFSchema, StrictRJSFSchema } from '@rjsf/utils';

import SelectWidget from '../SelectWidget/SelectWidget';

export function generateWidgets<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(): RegistryWidgetsType<T, S, F> {
  return {
    SelectWidget,
  };
}

export default generateWidgets();
