export interface DetailsResult {
    genres:                GenreDetails[];
    id:                    number;
    original_title:        string;
    overview:              string; 
    poster_path:           string;
    release_date:          Date;
    title:                 string;
    vote_average:          number;
    vote_count:            number;
}

export interface GenreDetails {
    id:   number;
    name: string;
}

