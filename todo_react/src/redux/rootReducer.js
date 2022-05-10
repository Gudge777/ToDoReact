import { v4 as uuidv4 } from 'uuid';

export const rootReducer = (state = [], action) => {
    switch (action.type) {
        case 'addTask':
            let id = uuidv4();
            let newTask={
                id: id,
                status: 0,
                name: action.taskName
            };
            state.push(newTask);
            return state;

        case 'completeTask':
            for (let i = 0; i < state.length; i++) {
                if (state[i].id === action.id )
                    state[i].status = 1;
            }
            return state;

        case 'deleteTask':
            for (let i = 0; i < state.length; i++) {
                if (state[i].id === action.id )
                    state.splice(i,1);
            }
            return state;

        case 'sortTasks':
            for (let i = 0; i < state.length -1; i++){
                if (state[i].status === 1){
                    let task = state[i];
                    state.splice(i,1);
                    state.push(task);
                }
            }
            return state;

        default:
            return state;
    }
}
