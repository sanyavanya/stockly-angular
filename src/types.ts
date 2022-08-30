export interface Comment {
  content: string;
  postedBy: number;
  postedAt: number;
}

export interface Photo {
  src: string;
  description: string;
  comments: Comment[];
  postedBy: number;
  postedAt: number;
}

export interface Album {
  id: number;
  title: string;
  photos: Photo[];
}
