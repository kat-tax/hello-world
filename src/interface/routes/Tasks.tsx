import {t} from '@lingui/macro';
import {StyleSheet, ScrollView, Pressable, Text, TextInput} from 'react-native';
import {useRef} from 'react';
import {useLingui} from '@lingui/react';
import {useSelector, useDispatch} from 'react-redux';
import {useScheme} from 'interface/hooks/useScheme';
import {Page} from 'interface/base/Page';
import {getActive, getComplete} from 'store/todo/selectors';
import todo from 'store/todo';

export function Tasks() {
  const dispatch = useDispatch();
  const complete = useSelector(getComplete);
  const active = useSelector(getActive);
  const scheme = useScheme();
  const refInput = useRef<TextInput>(null);
  const isDark = scheme === 'dark';
  const classes = {
    textActive: [
      styles.text,
      isDark && styles.textDark,
    ],
    textComplete: [
      styles.text,
      styles.textStrike,
      isDark && styles.textDark,
    ],
    input: [
      styles.input,
      isDark && styles.inputDark,
    ],
  };

  useLingui();

  return (
    <Page title={t`Tasks`}>
      <ScrollView contentContainerStyle={styles.list}>
        {complete.map((item, index) =>
          <Text key={item}
            style={classes.textComplete}
            onPress={() => dispatch(todo.actions.add({item}))}>
            {`${index+1}. ${item}`}
          </Text>
        )}
        {active.map((item, index) =>
          <Text
            key={item}
            style={classes.textActive}
            onPress={() => dispatch(todo.actions.complete({item}))}>
            {`${complete.length + index + 1}. ${item}`}
          </Text>
        )}
      </ScrollView>
      <TextInput
        ref={refInput}
        style={classes.input}
        placeholder={t`Add a task`}
        placeholderTextColor={isDark ? '#666' : '#ccc'}
        onSubmitEditing={e => {
          const item = e.nativeEvent.text;
          if (item) {
            dispatch(todo.actions.add({item}));
            refInput.current?.clear();
          }
        }}
      />
    </Page>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
    height: '100%',
    marginVertical: 12,
    marginHorizontal: 6,
  },
  text: {
    color: '#000',
    fontSize: 16,
    lineHeight: 36,
  },
  textStrike: {
    textDecorationLine: 'line-through',
  },
  textDark: {
    color: '#fff',
  },
  input: {
    width: '100%',
    padding: 12,
    color: '#000',
    borderColor: '#000',
    borderWidth: 1,
  },
  inputDark: {
    color: '#fff',
    borderColor: '#333',
    backgroundColor: '#111',
  },
});
