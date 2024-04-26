interface Book {
    int getId();
    String getTitle();
    String getAuthor();
    String getContent();
    void setId(int id);
    void addToShelf(BookCollection bookshelf);
    void addContent(String content);
    void updateContent(String content);
}

class Ebook implements Book{
    int id = 0;
    String title = "";
    String author = "";
    String content = "";

    Ebook(String author, String title) {
        this.author = author;
        this.title = title;
    }

    @Override
    public void setId(int id) {
        this.id = id;
    }

    @Override
    public int getId() {
        return this.id;
    }

    @Override
    public String getTitle() {
        return this.title;
    }

    @Override
    public String getAuthor() {
        return this.author;
    }

    @Override
    public String getContent() {
        return this.content;
    }

    @Override
    public void addContent(String content) {
        this.content = content;
    }

    @Override
    public void updateContent(String content) {
        this.content = content;
    }

    @Override
    public void addToShelf(BookCollection bookshelf) {
        bookshelf.insertBook(this);
    }
}