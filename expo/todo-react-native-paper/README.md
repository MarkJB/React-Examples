# React Native Todo app

Built with Expo using Typescript, React Native Paper UI component library on the Android Studio emulator.

![image](https://github.com/user-attachments/assets/99231646-9910-443d-ace3-3f4a57ae4083)

- Provides an text field to enter a todo and a button to add that todo to the scrollable list.

- Todo input field prevents the user adding an empty todo (shows a toast message).

![image](https://github.com/user-attachments/assets/251aadbd-154f-40a4-96ab-d62bb11c590d)

- Todos can be deleted. Toast message shown on deletion.

![image](https://github.com/user-attachments/assets/b78ca23b-94b0-4fcb-b36c-749c4260fb08)

## Limitations & Improvements

- Uses React state so todos are not persistent. Would need to investigate local storage or a backend. Maybe firebase or a local demo nodejs backend?

- Cannot edit todos. Maybe this could be done in a dialog?

- Cannot set a completion state, where todos are moved to done or archived. Would require an additional state property in the state array, as well as a way to set the state - maybe a long press action menu to edit the todo or update its state. Would then also need a way to show/hide done todos. This could be a filter option or another page/tab for done or archived todos.

- Cannot reorder todos. Should look at doing this with a React Drag and Drop library. Could also add up/down buttons to change the order as a simple option.
