import { FormContextType, RJSFSchema, StrictRJSFSchema, WidgetProps, getTemplate } from '@rjsf/utils';
import { Box } from '@telefonica/mistica';

/** The `TextareaWidget` is a widget for rendering input fields as textarea.
 *
 * @param props - The `WidgetProps` for this component
 */
function TextareaWidget<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>(
  props: WidgetProps<T, S, F>
) {
  const { options, registry } = props;
  const BaseInputTemplate = getTemplate<'BaseInputTemplate', T, S, F>('BaseInputTemplate', registry, options);

  let rows: string | number = 5;
  if (typeof options.rows === 'string' || typeof options.rows === 'number') {
    rows = options.rows;
  }

  return (
    <Box paddingBottom={24}>
      <BaseInputTemplate {...props} multiline rows={rows} />
    </Box>
  );
}

export default TextareaWidget;
