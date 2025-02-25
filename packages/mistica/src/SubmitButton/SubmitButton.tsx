import { getSubmitButtonOptions } from '@rjsf/utils';
import type { FormContextType, RJSFSchema, StrictRJSFSchema, SubmitButtonProps } from '@rjsf/utils/lib/types';
import { ButtonPrimary } from '@telefonica/mistica';

function SubmitButton<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>(
  props: SubmitButtonProps<T, S, F>
) {
  const { submitText, norender, props: submitButtonProps } = getSubmitButtonOptions<T, S, F>(props.uiSchema);
  if (norender) {
    return null;
  }
  return (
    <ButtonPrimary submit {...submitButtonProps}>
      {submitText}
    </ButtonPrimary>
  );
}

export default SubmitButton;
