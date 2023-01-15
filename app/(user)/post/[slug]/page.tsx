import { groq } from 'next-sanity';
import Image from 'next/image';
import PortableTextComponent from '../../../../components/PortableTextComponent';
import { client, urlFor } from '../../../../lib/sanity.client';


type props={
  params:{
    slug:string
  };
};


export const revalidate = 60; //every 60 seconds page will revalidate

export const generateStaticParams = async() =>{

  const query = groq`*[_type == "post"]
    {
      slug
    }`;

  const slugs:Post[] = await client.fetch(query);
  const slugsRoutes = slugs.map((slug)=>slug.slug.current);

  return slugsRoutes.map((slug) =>({
    slug,
  }));
}


const Post = async({params:{slug}}:props) => {

  const qurey = groq`
    *[_type == 'post' && slug.current == $slug][0]
    {
      ...,
      author->,
      categories[]->
    }
  `;

  const post: Post = await client.fetch(qurey, {slug}); 

  return (
    <article className='px-4 sm:px-10 pb-28'>
      <section className='space-y-2 border mb-24 border-orange-400 text-white'>
        <div className='relative min-h-56 flex flex-col md:flex-row'>
          <div className='absolute top-0 w-full h-full opacity-20 blur-sm p-10'>
            <Image
              className='object-cover object-center mx-auto'
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
          <section className='bg-orange-500 p-5 w-full'>
            <div className='flex flex-col md:flex-row justify-between gap-y-5'>
              <div>
                <h1 className='text-4xl font-extrabold mb-4'>{post.title}</h1>
                <p>
                  {
                    new Date(post._createdAt).toLocaleDateString("en-US",{
                      day:"numeric",
                      month:"long",
                      year:"numeric",
                    })
                  }
                </p>
              </div>
              <div className='flex items-center  space-x-2'>
                <div className='w-[52px] h-[52px] flex items-center justify-center bg-white rounded-full'>
                  <Image
                    src={urlFor(post.author.image).url()}
                    className="rounded-full object-cover"
                    height={50}
                    width={50}
                    alt={post.author.name}
                  />
                </div>
                <div className=''>
                  <h3 className='text-lg font-bold'>{post.author.name}</h3>
                  <div>{/*author bio */}</div>
                </div>
              </div>
            </div>
            <div>
              <h2 className='pt-10 italic font-light'>{post.description}</h2>
              <div className='flex items-center justify-end mt-auto space-x-2'>
                  {
                    post.categories.map(category=>(
                      <p className='bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4'>
                        {category.title}
                      </p>
                    ))
                  }
              </div>
            </div>
          </section>
        </div>
      </section>
      <PortableTextComponent body={post.body}/>
    </article>
  )
}

export default Post