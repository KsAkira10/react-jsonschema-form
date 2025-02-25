import { ErrorListProps, FormContextType, RJSFSchema, StrictRJSFSchema, TranslatableString } from '@rjsf/utils';
import { Box, Callout, Text1 } from '@telefonica/mistica';

/** The `ErrorList` component is the template that renders the all the errors associated with the fields in the `Form`
 *
 * @param props - The `ErrorListProps` for this component
 */
function ErrorListTemplate<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>({
  errors,
  registry,
}: ErrorListProps<T, S, F>) {
  const { translateString } = registry;

  return (
    <Box padding={12}>
      <Callout
        title={translateString(TranslatableString.ErrorsLabel)}
        description={
          (
            <Box as={'ul'} paddingX={16}>
              {errors?.map((error: any, i: number) => {
                return (
                  <li key={i} style={{ listStyleType: 'disc' }}>
                    <Text1 regular>{error?.message}</Text1>
                  </li>
                );
              })}
            </Box>
          ) as unknown as string
        }
      />
    </Box>
  );
}

export default ErrorListTemplate;
