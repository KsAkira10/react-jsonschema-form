import { useCallback, useMemo } from 'react';
import Form, { IChangeEvent } from '@rjsf/core';
import { RJSFSchema, UiSchema } from '@rjsf/utils';
import localValidator from '@rjsf/validator-ajv8';

const uiSchema: UiSchema = {
  'ui:placeholder': 'Select skin',
};

interface ColorSchemaType {
  title: string;
  value: string;
}

export interface ColorSchemasType {
  [colorScheme: string]: ColorSchemaType;
}

interface ColorSchemaSelectorProps {
  colorScheme: string | null;
  colorSchemes: ColorSchemasType;
  select: (colorSchemaName: string, colorScheme: ColorSchemaType) => void;
}

export default function ColorSchemeSelector({ colorScheme, colorSchemes, select }: ColorSchemaSelectorProps) {
  const schema: RJSFSchema = useMemo(
    () => ({
      type: 'string',
      title: 'Color Schema',
      enum: Object.keys(colorSchemes),
      default: Object.keys(colorSchemes)[0],
    }),
    [colorSchemes]
  );

  const handleChange = useCallback(
    ({ formData }: IChangeEvent) => {
      if (!formData) {
        return;
      }

      return select(formData, colorSchemes[formData]);
    },
    [select, colorSchemes]
  );

  return (
    <Form
      className='form_rjsf_skinSelector'
      idPrefix='rjsf_skinSelector'
      schema={schema}
      uiSchema={uiSchema}
      formData={colorScheme}
      validator={localValidator}
      onChange={handleChange}
    >
      <div />
    </Form>
  );
}
