
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
        case 'init2010': {
            let newData2010 = [];
            newData2010 = action.payload;
            console.log(newData2010);
            return {
                ...state,
                data2010: newData2010
            };
        }
        case 'init2011': {
            let newData2011 = [];
            newData2011 = action.payload;
            console.log(newData2011);
            return {
                ...state,
                data2011: newData2011
            };
        }
        case 'init2012': {
            let newData2012 = [];
            newData2012 = action.payload;
            console.log(newData2012);
            return {
                ...state,
                data2012: newData2012
            };
        }
        case 'init2013': {
            let newData2013 = [];
            newData2013 = action.payload;
            console.log(newData2013);
            return {
                ...state,
                data2013: newData2013
            };
        }
        case 'init2014': {
            let newData2014 = [];
            newData2014 = action.payload;
            console.log(newData2014);
            return {
                ...state,
                data2014: newData2014
            };
        }
        case 'initage': {
            let newDataage = [];
            newDataage = action.payload;
            console.log(newDataage);
            return {
                ...state,
                dataage: newDataage
            };
        }
        default:
            throw new Error();
    }
}

export default reducer;