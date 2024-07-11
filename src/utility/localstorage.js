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

const getStoredWishlist = () => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
        return JSON.parse(storedWishlist);
    }
    return [];
}

const saveBookToWishlist = id => {
    const storedWishlist = getStoredWishlist();
    const exists = storedWishlist.find(bookId => bookId === id);
    if (!exists) {
        storedWishlist.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storedWishlist));
    }
}

export { getStoredBookToReadList, saveBookToReadList, getStoredWishlist, saveBookToWishlist }