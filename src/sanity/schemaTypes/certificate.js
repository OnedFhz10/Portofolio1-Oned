import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'certificate',
  title: 'Certificates',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nama Sertifikat',
      type: 'string',
    }),
    defineField({
      name: 'issuer',
      title: 'Penerbit (Organisasi)',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Tanggal Terbit',
      type: 'date', // Format tanggal YYYY-MM-DD
      options: {
        dateFormat: 'YYYY-MM-DD',
      }
    }),
    defineField({
      name: 'image',
      title: 'Gambar Sertifikat',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'link',
      title: 'Link Credential (URL)',
      type: 'url',
    }),
  ],
})