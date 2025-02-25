/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ChangeEvent, FocusEvent } from 'react';

import {
  ariaDescribedByIds,
  BaseInputTemplateProps,
  examplesId,
  getInputProps,
  labelValue,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils';
import { IntegerField, PasswordField, PhoneNumberField, TextField } from '@telefonica/mistica';
import { type TextFieldProps } from '@telefonica/mistica/dist/text-field';

/** The `BaseInputTemplate` is the template to use to render the basic `<input>` component for the `core` theme.
 * It is used as the template for rendering many of the <input> based widgets that differ by `type` and callbacks only.
 * It can be customized/overridden for other themes or individual implementations as needed.
 *
 * @param props - The `WidgetProps` for this template
 */
export default function BaseInputTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(props: BaseInputTemplateProps<T, S, F>) {
  const {
    id,
    name, // remove this from textFieldProps
    placeholder,
    required,
    readonly,
    disabled,
    type,
    label,
    hideLabel,
    hideError,
    value,
    onChange,
    onChangeOverride,
    onBlur,
    onFocus,
    autofocus,
    options,
    schema,
    uiSchema,
    rawErrors = [],
    errorSchema,
    formContext,
    registry,
    InputLabelProps,
    ...textFieldProps
  } = props;
  const inputProps = getInputProps<T, S, F>(schema, type, options);
  // Now we need to pull out the step, min, max into an inner `inputProps` for material-ui
  const { step, min, max, accept, ...rest } = inputProps;
  const htmlInputProps = { step, min, max, accept, ...(schema.examples ? { list: examplesId<T>(id) } : undefined) };
  const _onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
    onChange(value === '' ? options.emptyValue : value);
  const _onBlur = ({ target }: FocusEvent<HTMLInputElement>) => onBlur(id, target && target.value);
  const _onFocus = ({ target }: FocusEvent<HTMLInputElement>) => onFocus(id, target && target.value);

  if (options?.inputType === 'tel') {
    return (
      <PhoneNumberField
        id={id}
        // @ts-ignore
        name={name}
        placeholder={placeholder}
        // @ts-ignore
        label={labelValue(label || undefined, hideLabel, undefined) as unknown as TextFieldProps['label']}
        autoFocus={autofocus}
        // @ts-ignore
        required={required}
        disabled={disabled || readonly}
        {...htmlInputProps}
        {...rest}
        value={value || value === 0 ? value : ''}
        error={rawErrors.length > 0}
        onChange={onChangeOverride || _onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
        {...(textFieldProps as TextFieldProps)}
        aria-describedby={ariaDescribedByIds<T>(id, !!schema.examples)}
      />
    );
  }

  if (type === 'number') {
    return (
      <IntegerField
        id={id}
        // @ts-ignore
        name={name}
        placeholder={placeholder}
        // @ts-ignore
        label={label}
        autoFocus={autofocus}
        // @ts-ignore
        required={required}
        disabled={disabled || readonly}
        {...htmlInputProps}
        {...rest}
        // value={value}
        error={rawErrors.length > 0}
        onChange={onChangeOverride || _onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
        {...(textFieldProps as TextFieldProps)}
        aria-describedby={ariaDescribedByIds<T>(id, !!schema.examples)}
      />
    );
  }

  if (type === 'password') {
    return (
      <PasswordField
        id={id}
        // @ts-ignore
        name={name}
        placeholder={placeholder}
        // @ts-ignore
        label={labelValue(label || undefined, hideLabel, undefined) as unknown as TextFieldProps['label']}
        autoFocus={autofocus}
        // @ts-ignore
        required={required}
        disabled={disabled || readonly}
        {...htmlInputProps}
        {...rest}
        value={value}
        error={rawErrors.length > 0}
        onChange={onChangeOverride || _onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
        {...(textFieldProps as TextFieldProps)}
        aria-describedby={ariaDescribedByIds<T>(id, !!schema.examples)}
      />
    );
  }

  return (
    <TextField
      id={id}
      // @ts-ignore
      name={name}
      placeholder={placeholder}
      // @ts-ignore
      label={labelValue(label || undefined, hideLabel, undefined) as unknown as TextFieldProps['label']}
      autoFocus={autofocus}
      // @ts-ignore
      required={required}
      disabled={disabled || readonly}
      {...htmlInputProps}
      {...rest}
      value={value || value === 0 ? value : ''}
      error={rawErrors.length > 0}
      onChange={onChangeOverride || _onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
      {...(textFieldProps as TextFieldProps)}
      aria-describedby={ariaDescribedByIds<T>(id, !!schema.examples)}
      getSuggestions={
        (Array.isArray(schema.examples) && schema.examples?.length > 0
          ? (value: string) =>
              Array(schema.examples)
                ?.filter((s: any) => String(s).toLocaleLowerCase().startsWith(value.toLocaleLowerCase()))
                ?.slice(0, 5)
          : undefined) as unknown as TextFieldProps['getSuggestions']
      }
    />
  );
}
