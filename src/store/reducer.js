
// 不同请求的处理
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1
            };
        case 'subcrement':
            return{
                ...state,
                count: state.count - 1
            }
        case 'init': {
            let newData1 = [];

            // TODO: use action.payload to update newData
            
            newData1 = action.payload;
            console.log(newData1);
            return {
                ...state,
                data1: newData1
            };
        }
        case 'init1': {
            let newData2 = [];
            // TODO: use action.payload to update newData
            // console.log(action.payload);
            newData2 = action.payload;
            console.log(newData2);
            return {
                ...state,
                data2: newData2
            };
        }
        default:
            throw new Error();
    }
}

export default reducer;