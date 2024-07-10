const getStoredBookToReadList = () => {
    const storedBookToReadList = localStorage.getItem('book-read-list');
    if (storedBookToReadList) {
        return JSON.parse(storedBookToReadList);
    }
    return [];
}

const saveBookToReadList = id => {
    const storedBookToReadLists = getStoredBookToReadList();
    const exists = storedBookToReadLists.find(bookId => bookId === id);
    if (!exists) {
        storedBookToReadLists.push(id);
        localStorage.setItem('book-read-list', JSON.stringify(storedBookToReadLists));
    }
}

export { getStoredBookToReadList, saveBookToReadList }