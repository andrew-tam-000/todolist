import firebaseApp from '~/firebase/index';

const database = firebaseApp.database();

function getTodoListRef() {
    return database.ref('todoList');
}

function getTodoList({ id }) {
    return getTodoListRef().child(id);
}

export function create({ name }) {
    return getTodoListRef()
        .push()
        .set({ name })
    ;
}

export function addTodo({ id, value }) {
    return getTodoList({ id })
        .child('todos')
        .push()
        .set({ value })
    ;
}
