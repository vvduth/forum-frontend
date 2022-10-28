import React, {useState} from 'react'
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import { createPost } from '../service';
import useAuthStore from '../store/authStore';

const CreatePostForm = () => {
  const [title, setTitle] = useState("") ; 
  const [content, setContent] = useState("") ; 
  const [tag, setTag] = useState("") ;

 const {userProfile} = useAuthStore() as any; 
  const createPosthandler = async () => {
    try {
       await createPost(userProfile.token, title, tag, content ) 
    } catch(e) {
      console.log(e)
    }
  }
  return (
    <div className="p-2 md:p-10 bg-white rounded-lg">
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Create a post
      </h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <input value={title} onChange={(e:any)=> setTitle(e.target.value)}  type="text" className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-800"  placeholder='Title...' /> 
        <input  type="text" value={tag} onChange={(e:any)=> setTag(e.target.value)} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-800"  placeholder='Tag'/> 
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea value={content} onChange={(e:any)=> setContent(e.target.value)} className='p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' placeholder='Content'/>
      </div>
      <div className="mt-8">
        <button
          type="button"
          onClick={createPosthandler}
          className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
        >
          Create Post 
        </button>
      </div>
    </div>
  )
}

export default CreatePostForm