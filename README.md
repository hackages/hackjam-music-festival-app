## Music Festival App

This is a broken festival music app, good luck to make it work!

In `__server__`, there's a NodeJS server. Nothing is broken in there!
You can take a look at the `__server__/index.js` to see available paths

#### Launching the app

```
yarn start:server
yarn start
```

##### TODO's

1. `Header.js` (Be sure to then add the Header component in your App)
2. `Stages.js` 
3. `NavigationButton.js` Fix navigation (not much to change here)
3. `ArtistRow.js`
4. `StageDetails.js` get all information to render details of a Stage


##### Refactor
`StageDetails.js` and `Artists.js` both uses `FlatList` which needs the same props.
 Can you make a render prop or a children as a function component to avoid duplication between both component?
 