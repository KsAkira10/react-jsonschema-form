import { FormContextType, RJSFSchema, StrictRJSFSchema } from '@rjsf/utils';
import { ThemeProps } from '@rjsf/core';

import { generateTemplates } from './templates';
import { generateWidgets } from './widgets';

export function generateComponents<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(): ThemeProps<T, S, F> {
  return {
    templates: generateTemplates<T, S, F>(),
    widgets: generateWidgets<T, S, F>(),
  };
}

export default generateComponents();
