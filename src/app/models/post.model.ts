
export class Post {
    id: number;
    post: string;

    constructor(post: Post) {
        this.id = post.id;
        this.post = post.post;
    }
}
