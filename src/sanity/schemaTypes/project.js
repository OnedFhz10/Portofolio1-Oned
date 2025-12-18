import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Project',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Gambar Project',
      type: 'image',
      options: {
        hotspot: true, // Agar bisa crop gambar nanti
      },
    }),
    defineField({
      name: 'tech',
      title: 'Teknologi (Ketik lalu Enter)',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          {title: 'Web App', value: 'Web App'},
          {title: 'Mobile App', value: 'Mobile App'},
          {title: 'UI/UX Design', value: 'UI/UX Design'},
          // Tambahkan kategori lain jika perlu
        ],
      },
    }),
    defineField({
      name: 'link',
      title: 'Link Demo (URL)',
      type: 'url',
    }),
    defineField({
      name: 'github',
      title: 'Link GitHub (URL)',
      type: 'url',
    }),
  ],
})