import './style.css'

async function fetchBooks() {
  try {
    const response = await fetch('http://localhost:8080/library/books');
    const books = await response.json();
    return books;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
}

async function renderLibrary() {
  const books = await fetchBooks();

  const tableRows = books.map(book => `
    <tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
    </tr>
  `).join('');

  document.querySelector('#app').innerHTML = `
    <div>
      <h1>Library</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    </div>
  `;
}

renderLibrary();
