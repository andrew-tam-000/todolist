import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: 'AIzaSyAVcLqowQar-rqThXLGedAK2KtBSgkkigI',
    authDomain: 'todolist-742d6.firebaseapp.com',
    databaseURL: 'https://todolist-742d6.firebaseio.com',
    projectId: 'todolist-742d6',
    storageBucket: 'todolist-742d6.appspot.com',
    messagingSenderId: '606474394119'
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;

/*

SCHEMA

- users
    [id] [string|number]
        - id [string|number]
        - firstName [string]
        - lastName [string]
        - todoLists [object]
            [id]
                - index [number]
        - sharedTodoLists [object]
            [id]
                - index [number]

- todoLists
    [id] [string|number]
        - id [string|number]
        - name [string]
        - todos [object]
            [id]
                - index [number]

- todos
    [id] [string|number]
        - id [string|number]
        - value [string]
        - completed [bool]
            - flag to mark todo complete
        - deleted [bool]
            - flag to hide todo from view

        // We have to handle the use case for a todo item being lockeed
        // indefintely by some user clicking it,
        // and then closing browser or something

*/
