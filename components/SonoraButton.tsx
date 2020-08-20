import React from 'react';

import { TouchableOpacity, Text } from 'react-native';

enum ButtonState {
  Disabled,
  Enabled,
  Hover,
  Pressed,
}
/* You might do something like:
const state = props.disabled
    ? ButtonState.Disabled
    : props.isPressed
    ? ButtonState.Pressed
    : props.isMouseOver
    ? ButtonState.Hover
    : ButtonState.Enabled;
*/

export interface SonoraButtonProps {
  text: string;
  onPress?: () => void;
  disabled: boolean;
}
export const SonoraButton: React.FC<SonoraButtonProps> = (props) => {
  return (
    <TouchableOpacity
      style={{ borderRadius: 2, backgroundColor: 'red', padding: 20 }}>
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
};
