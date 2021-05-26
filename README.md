# White elephant DApp - ERC20 gift exchange 

This will be the frontend used to play the classic [White elephant gifting game](https://en.wikipedia.org/wiki/White_elephant_gift_exchange). The game will be played with ERC20 tokens instead of gifts and serves a fun way for users to swap with their tokens.  

The smart contract used to power the DApp can be found [here](https://github.com/lorenzoPrimi/white-elephant-dapp).


### 0xHack initial implementation

Due to time constraints and this projects participation in the [OxHackathon](https://gitcoin.co/hackathon/0x-hack/?). 






### What it does
Allows players to offer an ERC20 token of their choice as a gift to another random player as well as receiving a mystery gift, the fun part of this game is that any player can choose any ERC20 token from their wallet and the organizer can even set a minimum or maximum value for the gifts, calculated at the moment of sending it. All ERC20 winnings from the White Elephant game will be transferred securely back to your wallet at the end, who knows how high your winnings can go if you HODL!

### Rules
See contract [README](https://github.com/lorenzoPrimi/white-elephant-dapp/blob/master/README.md).


### How to run
```
yarn
yarn start
```

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### Builds

```
yarn run build
```
or 
```
npm run build
```

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like "@snowpack/plugin-webpack" to your `snowpack.config.js` config file.

