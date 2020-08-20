import * as React from 'react';
import { Alert, Text, TextInput, View, StyleSheet } from 'react-native';

import { SonoraButton } from './components/SonoraButton';
import { colors } from './colors';

export default function App() {
  const [btnText, setBtnText] = React.useState('Button Text');
  const [disabled, setDisabled] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.regularText}>Enter the text for button:</Text>
        <TextInput
          value={btnText}
          onChangeText={setBtnText}
          style={styles.textInput}
        />
      </View>
      <View style={styles.buttonContainer}>
        <SonoraButton text={btnText} disabled={disabled} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  inputContainer: {
    flex: 0.2,
    paddingBottom: 25,
  },
  buttonContainer: {
    flex: 0.8,
    backgroundColor: colors.white,
    padding: 20,
    alignItems: 'center',
  },
  textInput: {
    color: colors.tanzanite,
    backgroundColor: colors.opal,
    borderColor: colors.tanzanite,
    borderWidth: 1,
    paddingLeft: 20,
    paddingTop: 14,
    paddingBottom: 16,
    paddingRight: 20,
  },
  regularText: { paddingVertical: 14, color: colors.tanzanite },
});
