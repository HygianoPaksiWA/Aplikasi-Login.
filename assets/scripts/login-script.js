/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */
/*Comment : Membuat variabel untuk setiap element view*/
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');
/*Comment : Membuat variabel untuk menyimpan informasi email dan password */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';
/*Comment : Menambahkan aksi klik pada button */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();
/*Comment : Mendapatkan nilai dari masing-masing input (email dan password) ketika tombol di tekan */
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;
  if (email == expectedEmail && password == expectedPassword) {
    /* Comment : Jika yang diinput sesuai , maka akan masuk kembali ke home*/
    goToHome();
  } else {
    /*Comment : Namun jika tidak sesuai , akan menampilkan fitur pop up informasi salah inputt*/
    showPopUp();
  }
});
