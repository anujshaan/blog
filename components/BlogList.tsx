import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { urlFor } from "../lib/sanity.client";
import ClientSideRoute from "./ClientSideRoute";


type props = {
  posts: Post[];
};

const BlogList = ({ posts }: props) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-10 gap-y-16 pb-24">
        {posts.map((post) => (
          <ClientSideRoute key={post._id} url={`/post/${post.slug.current}`}>
            <div  className="flex flex-col group cursor-pointer">
              <div className="relative w-full h-80 drop-shadow-xl 
                group-hover:scale-105 transition-transform 
                duration-200 ease-out">
                <Image
                  className="object-cover object-center"
                  src={urlFor(post.mainImage).url()}
                  alt={post.author?.name}
                  fill
                />
                <div className="absolute w-full bottom-0 bg-opacity-20 
                  bg-black backdrop-blur-lg rounded drop-shadow-lg 
                    text-white p-5 px-8 flex justify-between items-center">
                  <div>
                    <p className="font-bold">{post.title}</p>
                    <p>
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                    {
                      post.categories.map(category=>(
                        <div className="bg-orange-600 text-center text-white px-4
                          rounded-full py-1 text-sm font-semibold">
                          <p>{category.title}</p>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
              <div className="mt-5 flex-1">
                <p className="underline text-lg font-bold">{post.title}</p>
                <p className="line-clamp-2 text-gray-500">{post.description}</p>
              </div>
              <p className="mt-5 font-bold group-hover:underline flex items-center text-orange-400">
                Read Post <ArrowUpRightIcon className="ml-2 h-4 w-4"/>
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
