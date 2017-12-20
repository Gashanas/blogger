
export class Blog {
    id: number;
    username: string;
    title: string;
    layoutStyle: number;
    font: string;
    name: string;
    surname: string;
    background: string;

    constructor(blog: Blog) {
        this.username = blog.username;
        this.title = blog.title;
        this.layoutStyle = blog.layoutStyle;
        this.font = blog.font;
        this.name = blog.name;
        this.surname = blog.surname;
        this.background = blog.background;
    }
}
