const bacaBaris = require('readline');

// Fungsi untuk mensimulasikan fetching data dari sebuah API
function fetchData(callback) {
  setTimeout(() => {
    const data = ['apple', 'banana', 'orange'];
    callback(data);
  }, 1000);
}

// Fungsi untuk menunjukkan list barang
function showList(items) {
  console.log('Items:');
  items.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
}

// Fungsi untuk mendapatkan input
function getInput(prompt) {
  const read = bacaBaris.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    read.question(prompt, answer => {
      resolve(answer);
      read.close();
    });
  });
}

// Fungsi utama yang mengorkestrasikan flow program
async function main() {
  try {
    console.log('Fetching data from the API...');
    const data = await new Promise(resolve => {
      fetchData(resolve);
    });
    showList(data);

    const userInput = await getInput('Enter the index of the item you want to select: ');
    const selectedIndex = parseInt(userInput) - 1;

    if (selectedIndex >= 0 && selectedIndex < data.length) {
      console.log(`You selected: ${data[selectedIndex]}`);
    } else {
      console.log('Invalid index.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Perintah untuk mengeksekusi fungsi main.
main();