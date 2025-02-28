// import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
// import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import FormSubmissions from './collections/FormSubmissions'
import { Users } from './collections/Users'
import Study from './collections/Studies'
import Category from './collections/Category'
import Media from './collections/Media'
import Page from './collections/Page'
import MegaMenu from './globals/MegaMenu'
import SocialMedia from './globals/SocialMedia'
import Footer from './globals/Footer'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { s3Storage } from '@payloadcms/storage-s3'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, FormSubmissions, Study, Category, Page],
  globals: [MegaMenu, SocialMedia, Footer],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // db: vercelPostgresAdapter({
  //   pool: {
  //     connectionString: process.env.POSTGRES_URL || '',
  //   },
  // }),
  db: mongooseAdapter({
    url: process.env.MONGO_URI || '',
  }),
  plugins: [
    // vercelBlobStorage({
    //   collections: {
    //     media: true,
    //   },
    //   token: process.env.BLOB_READ_WRITE_TOKEN || '',
    // }),
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET || '',
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.S3_REGION || '',
        endpoint: process.env.S3_ENDPOINT || '',
        forcePathStyle: true,
      },
    }),
  ],
})
