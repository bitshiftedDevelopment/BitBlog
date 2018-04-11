export interface Post {
  title: string; // Article title
  author: string; // Author
  content: string; // Content of article
  tags: [string]; // Tags assigned to article
  metadata: PostMetadata; // Defined below
}

export interface PostMetadata {
  postDate: string; // Upload date
  publishDate: string; // Date article was published
  published: boolean; // Whether article is published or not
  subsOnly: boolean; // Whether or not the post is available to the public
}
