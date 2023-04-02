export interface Book {
    book_id?: number;
    author_id?: number;
    title?: string;
    year?: number;
    language?: string;
    cover_url?: string;
    price?: number;
    sellable?: boolean;
    copies?: number;
    description?: string;
}
