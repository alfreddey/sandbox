public class LibraryManager {
    public static void main(String[] args) {
        BookCollection bookshelf = new EbookCollection();
        Book book = new Ebook("Charles Dickens", "Great expectations");
        book.addContent("My father's family name being Pirrip, and my Christian name Philip, my infant tongue could make of both names nothing longer or more explicit than Pip. So, I called myself Pip, and came to be called Pip.");
        book.addToShelf(bookshelf);

        Book book2 = new Ebook("John Ronald R. Tolkiens", "The Hobbit");
        book2.addContent("In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.");
        book2.addToShelf(bookshelf);

        bookshelf.getBooks();
    }
}
