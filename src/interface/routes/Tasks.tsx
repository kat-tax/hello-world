import {t} from '@lingui/macro';
import {StyleSheet, ScrollView, Pressable, Text, TextInput} from 'react-native';
import {useRef} from 'react';
import {useLingui} from '@lingui/react';
import {useSyncedStore} from '@syncedstore/react';
import {useScheme} from 'interface/hooks/useScheme';
import {Page} from 'interface/layout/Page';
import store from 'store/synced';

export function Tasks() {
  const state = useSyncedStore(store);
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
        {state.tasksCompleted.map((task, index) =>
          <Pressable key={index} style={styles.item} onPress={() => {
            state.tasksCompleted.splice(index, 1);
            state.tasksActive.unshift(task);
          }}>
            <Text style={classes.textComplete}>
              {`${index+1}. ${task}`}
            </Text>
          </Pressable>
        )}
        {state.tasksActive.map((task, index) =>
          <Pressable key={index} style={styles.item} onPress={() => {
            state.tasksActive.splice(index, 1);
            state.tasksCompleted.push(task);
          }}>
            <Text style={classes.textActive}>
              {`${state.tasksCompleted.length + index + 1}. ${task}`}
            </Text>
          </Pressable>
        )}
      </ScrollView>
      <TextInput
        ref={refInput}
        style={classes.input}
        placeholder={t`Add a task`}
        placeholderTextColor={isDark ? '#666' : '#ccc'}
        onSubmitEditing={e => {
          store.tasksActive.push(e.nativeEvent.text);
          refInput.current?.clear();
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
  item: {
    flexDirection: 'row',
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
