import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client'
import { PreviewSuspense } from 'next-sanity/preview';
import PreviewBlogLists from '../../components/PreviewBlogLists';
import BlogList from '../../components/BlogList';

const query = groq`
  *[_type == 'post']{
    ...,
    author->,
    categories[]->,
  } | order(_createdAt desc)
`
// export const revalidate = 60; //sec

const HomePage = async() => {

  if(previewData()){
    return <PreviewSuspense fallback={(
      <div role="status">
        <p className='text-center pt-10 text-lg animate-pulse text-orange-600'>
          Loading Preview Data.....
        </p>
      </div>
    )}>
      <PreviewBlogLists query={query}/>
    </PreviewSuspense>
  }

  const posts = await client.fetch(query)
  return (
    <BlogList posts={posts}/>
  )
}

export default HomePage