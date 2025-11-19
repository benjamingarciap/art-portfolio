import fs from 'fs'
import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv'

dotenv.config()

const CLOUDINARY_CLOUD_NAME = 'dsncbmlkl'
const CLOUDINARY_API_KEY = '985554679996448'
const CLOUDINARY_API_SECRET = '4LxDpsv0CgekqTW75Q4uzteet00'
const CLOUDINARY_UPLOAD_PRESET = 'ml_default'

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
})

async function fetchImages() {
  const res = await cloudinary.api.resources({
    type: 'upload',
    prefix: 'art-portfolio-website/', // folder name in Cloudinary
    max_results: 200,
  })

  const images = res.resources.map((r) => ({
    title: r.public_id.replace('art-portfolio-website/', ''),
    url: r.secure_url,
  }))

  fs.writeFileSync('src/data/images.json', JSON.stringify(images, null, 2))
  console.log(`✅ Saved ${images.length} images to images.json`)
}

fetchImages()
