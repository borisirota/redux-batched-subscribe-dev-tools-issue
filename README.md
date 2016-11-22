This is example repo to reproduce the issue where redux devtools time travel isn't working when using the redux-batched-subscribe store enhancer -> [issue 261](https://github.com/zalmoxisus/redux-devtools-extension/issues/261)

1. `npm start`
2. open the browser at `localhost:3000`
3. open time travel pane in redux devtools
4. enter some values in the input field
5. try to time travel - the UI isn't changing.
6. go to `index.jsx`, put line 38 in comment, step 5 works as expected.
