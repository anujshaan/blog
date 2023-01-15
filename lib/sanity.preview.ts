"use client";

import { definePreview } from 'next-sanity/preview';
import { projectId, dataset } from './sanity.client'


if(!dataset || !projectId){
  throw new Error(
    `Missing dataset or projectId. Check Sanity.json or .env`
  )
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly(){
    throw new Error(`Unable to load preview mode as you're not logged in`)
  }
})