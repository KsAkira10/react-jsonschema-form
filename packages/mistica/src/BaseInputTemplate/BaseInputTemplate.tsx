import { getInputProps } from '@rjsf/utils';
import type { BaseInputTemplateProps, FormContextType, RJSFSchema, StrictRJSFSchema } from '@rjsf/utils/lib/types';
import { PasswordField, SearchField, TextField } from '@telefonica/mistica';
import React from 'react';

function BaseInputTemplate<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>(
  props: BaseInputTemplateProps<T, S, F>
) {
  const { type, options, schema, onChange, onFocus, onBlur } = props;
  const inputProps = getInputProps<T, S, F>(schema, type, options);
  console.log({ inputProps, props });
  if (type === 'search') {
    return (
      <SearchField
        id={props?.id}
        name={props?.name}
        label={props?.label}
        autoComplete={inputProps?.autoComplete as React.ComponentProps<typeof TextField>['autoComplete']}
        disabled={props?.disabled}
        placeholder={props?.placeholder}
        helperText={props?.optionsa?.description}
        autoFocus={props?.autofocus}
        onChangeValue={(value) => onChange(value)}
        onFocus={(event: React.FocusEvent<HTMLInputElement>) =>
          onFocus(event.currentTarget.id, event.currentTarget.value)
        }
        onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
          onBlur(event.currentTarget.id, event.currentTarget.value)
        }
        value={props?.value}
        readOnly={props?.readonly}
        maxLength={props?.maxLength}
      />
    );
  }
  if (type === 'password') {
    return (
      <PasswordField
        id={props?.id}
        name={props?.name}
        label={props?.label}
        autoComplete={inputProps?.autoComplete as React.ComponentProps<typeof TextField>['autoComplete']}
        disabled={props?.disabled}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        required={props?.required}
        placeholder={props?.placeholder}
        helperText={props?.optionsa?.description}
        autoFocus={props?.autofocus}
        onChangeValue={(value: string) => onChange(value)}
        onFocus={(event: React.FocusEvent<HTMLInputElement>) =>
          onFocus(event.currentTarget.id, event.currentTarget.value)
        }
        onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
          onBlur(event.currentTarget.id, event.currentTarget.value)
        }
        value={props?.value}
        readOnly={props?.readonly}
        min={inputProps?.min?.toString()}
        max={inputProps?.max?.toString()}
        maxLength={props?.maxLength}
      />
    );
  }
  return (
    <TextField
      id={props?.id}
      name={props?.name}
      label={props?.label}
      autoComplete={inputProps?.autoComplete as React.ComponentProps<typeof TextField>['autoComplete']}
      disabled={props?.disabled}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      required={props?.required}
      placeholder={props?.placeholder}
      helperText={props?.optionsa?.description}
      autoFocus={props?.autofocus}
      onChangeValue={(value: string) => onChange(value)}
      onFocus={(event: React.FocusEvent<HTMLInputElement>) =>
        onFocus(event.currentTarget.id, event.currentTarget.value)
      }
      onBlur={(event: React.FocusEvent<HTMLInputElement>) => onBlur(event.currentTarget.id, event.currentTarget.value)}
      value={props?.value}
      readOnly={props?.readonly}
      min={inputProps?.min?.toString()}
      max={inputProps?.max?.toString()}
      maxLength={props?.maxLength}
    />
  );
}

export default BaseInputTemplate;
