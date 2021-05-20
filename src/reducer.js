export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: 'BQDcM_Ev5AUtLo4APRDDKZYUV37ww9yDqzHH_of04iCkduoV6Gd0eEcGKK3OWe7lDclreE-ldRzrvoKaFbUyKQHr0MD74niEL7ysl2N13d3Las5srkz-U-mOpcLDnJnCO9cceqXDGQPo1eapYwPwa_dPGyCBBzcGlNoCaNK0SsRU8LQs',
};

const reducer = (state, action) => {
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
}

export default reducer;