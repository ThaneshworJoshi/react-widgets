console.clear();

const createPolicy = (name, amount) => {
    return {
        type: 'CREATE_POLICY',
        payload: {
            name, amount
        }
    };
};

const deletePolicy = (name) => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name
        }
    }
}

const createClaim = (name, amountOfMoneyToCollect) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name,
            amountOfMoneyToCollect
        }
    };

}


// Reducers

const claimsHistory = (oldListsOfClaims = [], action) => {

    if (action.type === 'CREATE_CLAIM') {
        return [...oldListsOfClaims, action.payload];
    }

    return oldListsOfClaims;

};

const accounting = (bagOfMoney = 100, action) => {
    if (action.type === 'CREATE_CLAIM') {
        return bagOfMoney - action.payload.amountOfMoneyToCollect;
    }

    else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount;
    }

    return bagOfMoney;
}

const policies = (listOfPolicies = [], action) => {

    if (action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload.name]
    }
    else if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(name => name !== action.payload.name)
    }

    return listOfPolicies;
};

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
    accounting: accounting,
    claimsHistory: claimsHistory,
    policies: policies
});

const store = createStore(ourDepartments);

const action = createClaim('Alex', 120);
console.log(action)

store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Jim', 30));
store.dispatch(createPolicy('Bob', 40));
store.dispatch(createClaim('Alex', 120))

console.log(store.getState())