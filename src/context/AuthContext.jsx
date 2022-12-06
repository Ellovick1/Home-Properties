import {createContext,
    useContext,
    useState,
    useReducer} from 'react'




export const AuthContext = createContext()

const initialState = { 
    user : null
}

const reducers = (state,action) => { 
    switch(action.type){ 
        case 'login': 
          return { 
            user : action.payload
          }
        break;
        case 'logout': 
        return { 
            user: null
        }
        break;
        default:
         return initialState
    }
    // return state
}

export const AuthContextProvider = ({children}) => { 
    const [contextData,dispatch] = useReducer(reducers,initialState)
   return( 
        <AuthContext.Provider value = {{contextData,dispatch}}>
             {children}
        </AuthContext.Provider>
    )
}


export function useAuthContext (){ 
    return useContext(AuthContext)
}