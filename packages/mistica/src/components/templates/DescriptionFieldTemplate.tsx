import { DescriptionFieldProps, FormContextType, RJSFSchema, StrictRJSFSchema } from '@rjsf/utils';
import { Box, Text3 } from '@telefonica/mistica';

/** The `DescriptionField` is the template to use to render the description of a field
 *
 * @param props - The `DescriptionFieldProps` for this component
 */
function DescriptionFieldTemplate<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>(
  props: DescriptionFieldProps<T, S, F>
) {
  const { id, description } = props;
  if (description) {
    return (
      <Box paddingY={8}>
        <Text3 regular id={id}>
          {description}
        </Text3>
      </Box>
    );
  }

  return null;
}

export default DescriptionFieldTemplate;
