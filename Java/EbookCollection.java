import java.util.HashMap;

interface BookCollection {
    Book getBook(int id);
    void insertBook(Book book);
    void getBooks();
}

class EbookCollection implements BookCollection{
    HashMap<Integer, Book> booklist = new HashMap<>();
    @Override
    public Book getBook(int id){ 
        if(booklist.containsKey(id)) return booklist.get(id);
        return null;
    }

    @Override
    public void insertBook(Book book) {
        int book_id = booklist.size();
        book.setId(book_id);
        booklist.put(book_id, book);
    }

    @Override
    public void getBooks() {
        for(Book book : booklist.values()) {
            System.out.println(book.getAuthor());
            System.out.println("Title: " + book.getTitle());
            System.out.println("Id: " + book.getId());
            System.out.println();
        }
    }
}