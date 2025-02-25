import { FormContextType, RJSFSchema, StrictRJSFSchema, TemplatesType } from '@rjsf/utils';
import BaseInputTemplate from './BaseInputTemplate';
import { default as ButtonTemplates } from './ButtomTemplates';
import WrapIfAdditionalTemplate from './WrapIfAdditionalTemplate';
import FieldTemplate from './FieldTemplate';
import TitleFieldTemplate from './TitleFieldTemplate';
import DescriptionFieldTemplate from './DescriptionFieldTemplate';
import ErrorListTemplate from './ErrorListTemplate';

export function generateTemplates<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(): TemplatesType<T, S, F> {
  return {
    // ArrayFieldItemTemplate: undefined,
    // ArrayFieldTemplate: undefined,
    BaseInputTemplate,
    ButtonTemplates,
    // DescriptionFieldTemplate: undefined,
    ErrorListTemplate,
    // FieldErrorTemplate: undefined,
    // FieldHelpTemplate: undefined,
    FieldTemplate,
    // ObjectFieldTemplate: undefined,
    DescriptionFieldTemplate,
    TitleFieldTemplate,
    WrapIfAdditionalTemplate,
  };
}

export default generateTemplates();
