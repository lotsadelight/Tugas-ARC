const axios = require('axios'); // Mengimpor library Axios
const api = 'https://jsonplaceholder.org/posts/3'; // Variabel untuk url api
const data = { // Data untuk request post nantinya.
    title: 'Tugas ARC',
    body: 'Amateur Radio Club adalah sebuah Unit Kegiatan Mahasiswa di Institut Teknologi Bandung.',
    userId: 1
  }; 

// Membuat request GET.
axios.get(api)
  .then(response => {
    console.log('Response:', response.data); // Jika request diterima
  })
  .catch(error => {
    console.error('Error:', error); // Jika request error
  });

// Membuat request POST.  
axios.post(api, data)
    .then(response => {
      console.log('Response:', response.data); // Jika request diterima
    })
    .catch(error => {
      console.error('Error:', error); // Jika request error
    });