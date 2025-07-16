// lib/upload-to-cloudinary.ts
'use server'

import { v2 as cloudinary } from 'cloudinary'
import { Readable } from 'stream'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_SECRET!,
})

export const uploadToCloudinary = async (file: File) => {
  const buffer = Buffer.from(await file.arrayBuffer())

  return new Promise<{ url: string }>((resolve, reject) => {
    const upload = cloudinary.uploader.upload_stream(
      { folder: 'domain-icons' },
      (error, result) => {
        if (error) {
          reject(new Error(error.message))
        } else {
          resolve({ url: result?.secure_url! })
        }
      }
    )

    Readable.from(buffer).pipe(upload)
  })
}
