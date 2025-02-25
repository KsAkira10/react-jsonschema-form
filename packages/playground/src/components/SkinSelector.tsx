import { useCallback, useMemo } from 'react';
import Form, { IChangeEvent } from '@rjsf/core';
import { RJSFSchema, UiSchema } from '@rjsf/utils';
import localValidator from '@rjsf/validator-ajv8';

const uiSchema: UiSchema = {
  'ui:placeholder': 'Select skin',
};

interface SkinType {
  title: string;
  value: string;
}

export interface SkinsType {
  [subtheme: string]: SkinType;
}

interface SkinsSelectorProps {
  skin: string | null;
  skins: SkinsType;
  select: (skinName: string, skin: SkinType) => void;
}

export default function SkinSelector({ skin, skins, select }: SkinsSelectorProps) {
  const schema: RJSFSchema = useMemo(
    () => ({
      type: 'string',
      title: 'Skin',
      enum: Object.keys(skins),
      default: Object.keys(skins)[0],
    }),
    [skins]
  );

  const handleChange = useCallback(
    ({ formData }: IChangeEvent) => {
      if (!formData) {
        return;
      }

      return select(formData, skins[formData]);
    },
    [select, skins]
  );

  return (
    <Form
      className='form_rjsf_skinSelector'
      idPrefix='rjsf_skinSelector'
      schema={schema}
      uiSchema={uiSchema}
      formData={skin}
      validator={localValidator}
      onChange={handleChange}
    >
      <div />
    </Form>
  );
}
