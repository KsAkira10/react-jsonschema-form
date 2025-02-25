import { FormContextType, TitleFieldProps, RJSFSchema, StrictRJSFSchema } from '@rjsf/utils';
import { Box, Divider, Title4 } from '@telefonica/mistica';

/** The `TitleField` is the template to use to render the title of a field
 *
 * @param props - The `TitleFieldProps` for this component
 */
function TitleFieldTemplate<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>({
  id,
  title,
}: TitleFieldProps<T, S, F>) {
  return (
    <>
      <Box id={id} paddingY={12}>
        <Title4>{title}</Title4>
      </Box>
      <Divider />
    </>
  );
}

export default TitleFieldTemplate;
