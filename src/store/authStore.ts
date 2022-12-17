import React from "react";
import create from "zustand";
import {persist} from "zustand/middleware" 
import axios from 'axios' ; 

const BASE_URL = "https://tamk-fullstack-project-backend.herokuapp.com/api/auth/signin"; 

const authStore = (set: any) => ({
    userProfile: null  , 
    allUsers: [] ,
    addUser: (user: any) => set({userProfile: user}),
    removeUser: () => set({userProfile: null} ),

    fetchAllUsers : async () => {
        const response = await axios.get(`${BASE_URL}/api/users`)

        set({allUsers: response.data})
    }
})

const useAuthStore = create(
    persist(authStore, {
        name: 'auth' , 
        
    })
)

export default useAuthStore 