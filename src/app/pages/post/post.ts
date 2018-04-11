export interface Post {
  title: string; // Article title
  author: string; // Author
  content: string; // Content of article
  tags: [string]; // Tags assigned to article
  metadata: PostMetadata; // Defined below
}

export interface PostMetadata {
  postDate: string; // Posting date
  published: boolean; // Whether post is public or not
  subsOnly: boolean; // Whether or not the post is available to everyone or a subset of users
}
