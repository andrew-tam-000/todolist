import firebaseApp from '~/firebase/index';

const database = firebaseApp.database();

function getTodoRef() {
    return database.ref('todos');
}

function getTodo({ id }) {
    return getTodoRef().child(id);
}

export function markComplete({ id }) {
    return getTodo({ id })
        .set({
            completed: true
        })
    ;
}

export function markIncomplete({ id }) {
    return getTodo({ id })
        .set({
            completed: false
        })
    ;
}

export function deleteTodo({ id }) {
    return getTodo({ id })
        .remove()
    ;
}

export function update({ id, value }) {
    return getTodo({ id })
        .set({ value })
    ;
}
