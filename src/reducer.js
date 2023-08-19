export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null
    //Remove after finished developing... 
    // token: 'BQD2SBbxNbWPvZEPSeUKDJt9BJee8Aij6A5lDJHiK0yN0QvjJMnm5EYOr5oG17v9v-kIN0M0wIvYcBY4e0kN9QRfoP3W__v8mw3Ize-NqbPk-1y4x73Tbe-iPbVLDSDfaT1SYCe7Q5GXji3LnJV_Za6LDLi4iyugDg6zbpnkbPHo4XuzkB-4z0AWWWYPvOmTnMZzSNrgaqF2S5aHte6k',
   
}

const reducer = ( state, action ) => {
    console.log(action);

    // Action --> type, [payload]

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user:action.user,
            };
        
        case "SET_TOKEN":
            return {
                ...state,
                token:action.token,
            };
        
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists:action.playlists,
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly:action.discover_weekly,
            };

        default:
            return state;
    }
}

export default reducer;