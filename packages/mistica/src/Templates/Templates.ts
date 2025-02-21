import { FormContextType, RJSFSchema, StrictRJSFSchema, TemplatesType } from '@rjsf/utils';

export function generateTemplates<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(): Partial<TemplatesType<T, S, F>> {
  return {
    // ArrayFieldItemTemplate: undefined,
    // ArrayFieldTemplate: undefined,
    // BaseInputTemplate: undefined,
    // ButtonTemplates: {
    //   AddButton: undefined,
    //   CopyButton: undefined,
    //   MoveDownButton: undefined,
    //   MoveUpButton: undefined,
    //   RemoveButton: undefined,
    //   SubmitButton: undefined,
    // },
    // DescriptionFieldTemplate: undefined,
    // ErrorListTemplate: undefined,
    // FieldErrorTemplate: undefined,
    // FieldHelpTemplate: undefined,
    // FieldTemplate: undefined,
    // ObjectFieldTemplate: undefined,
    // TitleFieldTemplate: undefined,
    // WrapIfAdditionalTemplate: undefined,
  };
}

export default generateTemplates();
