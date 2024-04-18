# Problem Statement:
You are a famous hacker who has access to a list of the world's most famous celebrities.
You have to create a system where you can view and edit their details to hide their public presence.

Your mission if you choose to accept it, you have to:

✅ : Fully implemented
🟧 : Partially implemented
🎯 : To be done

1. Create the user interface provided with the design provided  ✅

2. The page should have a search bar to search the list by celebrity name.  ✅

3. The user list item is an accordion,

   - when clicked on, it will cause all the other accordions to collapse and enlarge the one which was clicked. 🎯
   - If clicked on the same one it will collapse. ✅
   - Manage the + and - icons in open or collapsed mode (collapsed = - | open = +) ✅

4. Fetch the JSON file provided to fill the list of users. (NOTE - YOU CANNOT EDIT THE JSON FILE)

   - You have to calculate the age of the user based on the date of birth provided ✅
   - gender should be a dropdown (Male | Female | Transgender | Rather not say | Other) ✅
   - country is a text field ✅
   - Description is a text area ✅

5. Provide buttons to edit or delete

   - edit mode will let you edit the details of the user in the exact place ✅
   - you can only edit the user if the user is an adult ✅
   - validations to be implemented where a user cannot
     -- input text in the age field ✅
     -- input numbers in the nationality ✅
     -- keep anything empty ✅
   - when in edit mode you can either save or cancel ✅
     -- save button will be disabled by default and will enable only if the details have changed ✅
     -- save click will update the user's details ✅
     -- cancel will revert the details to their last known state ✅
     -- you cannot open another accordion while in edit mode 🎯
   - delete mode should alert you if you actually want to delete the user 🟧
     -- if yes - the user will be deleted 🟧
     -- if no - do nothing 🟧

6. Typescript is a plus ✅

This message will self destruct in 5... 4... 3... 2... 1... NOT


==================================================================

## My Thoughts:

1. Accordion component takes an object of user data, and stores that data in its internal state. This is to ensure that each Accordion component handles its own data within the state.
2. Now to make the data editable, there are basically two approaches:
- Create two types of components all together: One with just text, one with editable fields.
This approach is more memory efficient.
- Or create EditableField components that show the text by default, and text fields in Edit Mode.
This makes highly reusable set of components that allow text to be edited.
It will take a setter function as a prop to change the data that it edits.

# React + TypeScript + Vite - Vite generated Readme below

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list