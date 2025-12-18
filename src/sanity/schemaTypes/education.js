import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'school',
      title: 'Nama Sekolah / Institusi',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Kategori Pendidikan',
      type: 'string',
      options: {
        list: [
          {title: 'Formal', value: 'Formal'},          // SD, SMP, SMA, Kuliah
          {title: 'Non-Formal', value: 'Non-Formal'},  // Bootcamp, Kursus
          {title: 'Bootcamp', value: 'Bootcamp'},  // Pengalaman Organisasi
        ],
      },
    }),
    defineField({
      name: 'degree',
      title: 'Gelar / Jurusan / Posisi',
      type: 'string',
    }),
    defineField({
      name: 'period',
      title: 'Tahun / Periode',
      description: 'Contoh: 2019 - 2023',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi / Pencapaian',
      type: 'text',
    }),
  ],
})