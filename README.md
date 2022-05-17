# Dummy Token UI

A simple UI for a [Dummy Token](https://github.com/decentraland/dummy-token). This frontend allows the user to connect their wallet and see their address. It is built using `react` + `redux` + `redux-saga`.

# Directory structure and standards

The repository splits the `redux` logic into `modules`, which contain all the actions/sagas/reducer/selectors for a specific domain. The `react` components can be found under the `components` directory, each component has its own directory which contains always a `.tsx` file with the component itself and a `.css` file with its styles. The components are always pure, and if they need to be connected to the redux store it is done by wrapping it with a `.container.tsx` file that maps the necessary properties and callbacks to extract the data from the store and dispatch the required actions.

# Task

The current state of the frontend allows the user to connect their wallet and see their address. Your task is add the following features:

- Allow the user to see their Dummy Token balance once their wallet is connected
- Allow the user to transfer Dummy Tokens

To achieve this you will need to modify the existing redux module and/or add new ones, also you will need to adapt the react components to allow the user to fullfil all the necessary requirements by modifying the existing components/containers and/or adding new ones as well.

You will need to make use of `decentraland-ui` components to build the missing parts of the frontend. You can see examples of the available components here: [Decentraland UI](https://ui.decentraland.org/).

The final state of the frontend should look something like this:

![Screencast](https://user-images.githubusercontent.com/2781777/115337070-bf24b980-a176-11eb-89e5-d4690893271a.gif)

## Setup

1. Run `cp .env.example .env` and fill the environment variables
2. Run `npm install`
3. Run `npm start`

You will also need to setup a local ethereum development environment and deploy the Dummy Token there, to do that [follow these instructions](https://github.com/decentraland/dummy-token#setup).
