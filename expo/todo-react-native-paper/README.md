# React Native Todo app

Built with Expo using Typescript, React Native Paper UI component library on the Android Studio emulator.

See assets/screenshots

- Provides an text field to enter a todo and a button to add that todo to the scrollable list.

- Todo input field prevents the user adding an empty todo (shows a toast message).

- Todos can be deleted. Toast message shown on deletion.

## Limitations & Improvements

- Uses React state so todos are not persistent. Would need to investiage local storage or a backend. Maybe firebase or a local demo nodejs backend?

- Cannot edit todos. Maybe this could be done in a dialog?

- Cannot set a completion state, where todos are moved to done or archived. Would require an additiional state property in the state array, as well as a way to set the state - maybe a long press action menu to edit the todo or update its state. Would then also need a way to show/hide done todos. This could be a filter option or another page/tab for done or archived todos.

- Cannot reorder todos. Should look at doing this with a React Drag and Drop library. Could also add up/down buttons to change the order as a simple option.
