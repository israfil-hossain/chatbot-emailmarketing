'use server'; 
import cloudinary from '@/lib/cloudinary';
import formidable, { File } from 'formidable';
import fs from 'fs';

// Disable Next.js default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).end();

  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: 'Form parsing error' });

    let file: File | undefined;
    if (files && files.file) {
      if (Array.isArray(files.file)) {
        file = files.file[0];
      } else {
        file = files.file;
      }
    }
    if (!file) return res.status(400).json({ error: 'No file uploaded' });

    try {
      const result = await cloudinary.uploader.upload(file.filepath, {
        folder: 'uploads',
      });

      // Optionally remove the temp file
      fs.unlink(file.filepath, () => {});

      return res.status(200).json({ url: result.secure_url, public_id: result.public_id });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Upload failed' });
    }
  });
}