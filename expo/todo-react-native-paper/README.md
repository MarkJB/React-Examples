# React Native Todo app

Built with Expo using Typescript, React Native Paper UI component library on the Android Studio emulator.

![image](https://github.com/user-attachments/assets/ae06e167-a228-4393-ad85-ad6410ec89be)

- Provides an text field to enter a todo and a button to add that todo to the scrollable list.

- Todo input field prevents the user adding an empty todo (shows a toast message).

![image](https://github.com/user-attachments/assets/3aee465e-9de3-4f3e-8212-a982001507f7)

- Todos can be deleted. Toast message shown on deletion.

![image](https://github.com/user-attachments/assets/87905875-af80-4322-87b9-9c23d6f6c200)

## Limitations & Improvements

- Uses React state so todos are not persistent. Would need to investiage local storage or a backend. Maybe firebase or a local demo nodejs backend?

- Cannot edit todos. Maybe this could be done in a dialog?

- Cannot set a completion state, where todos are moved to done or archived. Would require an additiional state property in the state array, as well as a way to set the state - maybe a long press action menu to edit the todo or update its state. Would then also need a way to show/hide done todos. This could be a filter option or another page/tab for done or archived todos.

- Cannot reorder todos. Should look at doing this with a React Drag and Drop library. Could also add up/down buttons to change the order as a simple option.
