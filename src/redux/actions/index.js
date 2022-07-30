
export function Compras(payload) {
    return async function (dispatch) {
        dispatch({
            type: 'AGREGA_COMPRA',
            payload: payload
        })
    }
}
