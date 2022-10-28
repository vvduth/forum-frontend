import React from 'react'
import CreatePostForm from '../components/CreatePostForm'
import Layout from '../components/Layout'
import {
    HtmlEditor,
    Image,
    Inject,
    Link,
    QuickToolbar,
    RichTextEditorComponent,
    Toolbar,
  } from "@syncfusion/ej2-react-richtexteditor";

const CreatePostScreen = () => {
  return (
    <Layout>
        <CreatePostForm /> 
    </Layout>
  )
}

export default CreatePostScreen