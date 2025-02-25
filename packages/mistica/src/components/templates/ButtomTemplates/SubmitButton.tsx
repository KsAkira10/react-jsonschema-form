import { getSubmitButtonOptions, FormContextType, RJSFSchema, StrictRJSFSchema, SubmitButtonProps } from '@rjsf/utils';
import { Box, ButtonPrimary, ResponsiveLayout } from '@telefonica/mistica';

/** The `SubmitButton` renders a button that represent the `Submit` action on a form
 */
function SubmitButton<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>({
  uiSchema,
}: SubmitButtonProps<T, S, F>) {
  const { submitText, norender, props: submitButtonProps = {} } = getSubmitButtonOptions<T, S, F>(uiSchema);
  if (norender) {
    return null;
  }
  return (
    <ResponsiveLayout>
      <Box padding={8}>
        <ButtonPrimary {...submitButtonProps} submit>
          {submitText}
        </ButtonPrimary>
      </Box>
    </ResponsiveLayout>
  );
}

export default SubmitButton;
