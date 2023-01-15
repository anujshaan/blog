'use client'

// import { UsePreview } from "next-sanity/preview"
import { usePreview } from '../lib/sanity.preview'
import BlogList from './BlogList';

type props ={
  query:string,

};


const PreviewBlogLists = ({query}:props) => {
  const posts = usePreview(null, query);

  return (
    <BlogList posts={posts}/>
  )
}

export default PreviewBlogLists