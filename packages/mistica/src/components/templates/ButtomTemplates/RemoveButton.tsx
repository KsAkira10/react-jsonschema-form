/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FormContextType, RJSFSchema, StrictRJSFSchema, IconButtonProps } from '@rjsf/utils';
import { IconButton, IconCloseRegular } from '@telefonica/mistica';
import React from 'react';

function RemoveButton<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>(
  props: IconButtonProps<T, S, F>
) {
  const { icon, color, uiSchema, registry, onClick, iconType, ...otherProps } = props;

  return (
    // @ts-ignore
    <IconButton
      {...otherProps}
      aria-label='Remove button'
      Icon={IconCloseRegular}
      onPress={onClick as React.ComponentProps<typeof IconButton>['onPress']}
      small
    />
  );
}

export default RemoveButton;
