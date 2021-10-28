
When writing code, if you can use the keyboard only you are going to be much faster than if you have to reach for the mouse every now and then.

VS Code lets you customize a lot of its features. There is very few things that I hate more than coming up with keyboard shortcuts, or more precisely a cohesive ensemble of keyboard shortcuts. 

Using the vscode.vim extension in VS Code gets you halfway there. What ties it all together is the VSpaceCode extension bundle.

VSpaceCode is an extension bundle that brings the [Spacemacs](https://www.spacemacs.org/) keybindings to VS Code.

Now, if you are familiar with this is going to be very easy for you but it could benefit anyone regardless.

Go to the previously displayed buffer with `SPC TAB`

Go to the next tab to the right (or buffer in emacs' lingo) you can use `SPC b n`, or `SPC b p` but I still prefer vim's `g t`, and `g T`.

List buffers with `SPC b b`

Toggle the sidebar visibility with `SPC T b`

Open a file anywhere on the system with `SPC f f`

Checkout a branch with `SPC g m b`. If you have several git repositories open, you will have to select the one you want to work with.

Start a debugging session with `SPC d d`, stop it with `SPC d S`

If you have two instances of [VS Code](/articles/vs-code) open, `SPC w o` will let you switch from one to any other. You still have to select which frame you want to see. I wish there was an equivalent of `SPC TAB` for frames, so you could go back and forth between two of them.

Navigating within a buffer

To go to a symbol, use `SPC s j` (`SPC s J` will jump to a symbol in the workspace).

Navigating the file structure

`SPC f T` will show you the active buffer, in the VS Code file explorer. You can then go up and down with `CTRL j/k`. Use `Enter` to open a file.

Searching in VS Code

Use `SPC *` to search the selection in the project, you can then use `j/k` to go up and down the search results. Press `Enter` to move the cursor to that buffer.

To resume the search where you left of, use

Types

To display the TypeScript types, place the cursor over a variable and press `g h` (this is part of vscodevim).

Navigating errors

`SPC e l` will show the list of errors in all of the open files. You can then navigate the list with `CTRL j/k` and it will move you to the correct location at the same time. Press `ENTER` and you will focus on the editor at the correct location and can edit the text.



Using the terminal

Show the integrated terminal with `SPC '` or `SPC !`. Unfortunately there is no way to hide the terminal with a Spacemacy shortcut because you are typing in your terminal. You can hide it with `CTRL backtick`.

For the following two tips we are going to break out rule of not having custom shortcuts, sadly, since nothing exists currently.

If you split the terminal in two or more, you can go left and right with `ALT + left` and `ALT + right`, which I have remapped to `ALT + h` and `ALT + l`

If you open several terminals, instead of using the dropdown to switch between them, I recommend adding the following shortcuts to your `keybindings.json`:

```javascript
// Switching terminals
{ "key": "ctrl+shift+k", "command": "workbench.action.terminal.focusNext" },
{ "key": "ctrl+shift+j", "command": "workbench.action.terminal.focusPrevious" },```

[Complete list of VSpaceCode's keybindings](https://vspacecode.github.io/docs/default-keybindings)

Bonus track: Clojure with [Calva](/articles/calva)