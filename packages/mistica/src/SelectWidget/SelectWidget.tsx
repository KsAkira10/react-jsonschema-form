import { FormContextType, RJSFSchema, StrictRJSFSchema, WidgetProps } from '@rjsf/utils';
import React from 'react';

/** The `SelectWidget` is a widget for rendering dropdowns.
 *  It is typically used with string properties constrained with enum options.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function SelectWidget<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>(
  //   {
  //   schema,
  //   id,
  //   name, // remove this from textFieldProps
  //   options,
  //   label,
  //   hideLabel,
  //   required,
  //   disabled,
  //   readonly,
  //   placeholder,
  //   value,
  //   multiple,
  //   autofocus,
  //   onChange,
  //   onBlur,
  //   onFocus,
  //   rawErrors = [],
  //   registry,
  //   uiSchema,
  //   hideError,
  //   formContext
  // }
  _: WidgetProps<T, S, F>
) {
  return <React.Fragment>Akira</React.Fragment>;
}
