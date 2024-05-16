    import React, { useContext } from 'react'

    export const BlogContext = React.createContext({
        blog : [
            {   
                id : null ,
                content : "",
                author : "",
                likeCounter : 0,
            }
        ],
        addBlog : (content,author)=>{},
        likeBlog : (id)=>{}
    })

    export const BlogContextProvider = BlogContext.Provider

    export const useBlogContext = ()=>{
        return useContext(BlogContext)
    }