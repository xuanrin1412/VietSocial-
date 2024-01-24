// import moment from "moment";
interface postData {
    userName: string;
    imgProfile: string;
    datePost: Date;
    imgUrl: string[]; // or Array<string>
    context: string;
}
const postData: postData[] = [
    {
        userName: "username1",
        imgProfile:
            "https://i1.sndcdn.com/artworks-x0Yhwsmq0yhSyZMu-IINLfA-t500x500.jpg",
        datePost: new Date(),
        imgUrl: [
            "https://i.pinimg.com/originals/23/8e/03/238e0377039a3116c4864267deec8792.jpg",
        ],
        context:
            "POST1 Lorem ipsum dolor sit amet,Lorem ipsum dolorsit amet consectetur adipisicing elit.Incidunt nostrum laborum, rationeconsequatur ullam nisi sed veniam blanditiisoptio delectus hic tempora totam dolorumaliquam dolores animi quas consectetureligendi?",
    },
    {
        userName: "username2",
        imgProfile:
            "https://lh3.googleusercontent.com/pw/ABLVV84ad5_mjW3yWmzhRVBUe6a-NjzCKpp4OwE_mKr3wsKZlYYST0_pkHj8h7v7nGXGc-Hbf0bx295FvydNQP5UdActj7-7gxWZxKpEswCSsy0YfxJtRkfpygvWsj0QINOakA_nvga1FPg0C8YvC3tCTHFFNQ=w878-h878-s-no-gm?authuser=0",
        datePost: new Date(),
        imgUrl: [
            "https://lh3.googleusercontent.com/pw/ABLVV848OKnsAhCF43lS-dGbmNTDYY67ppFTuTZt6dfpLyLKLveopyxl4DeTtB-xGxaIArE49fkQZ0qBKTPtE7FHX_IFWX63xpjK8KMDusyeDgEipc6tPBN8poh6WgTdFkGUEKqUTHQe5IikH34DdLuItHcH6Q=w878-h878-s-no-gm?authuser=0",
            "https://images.squarespace-cdn.com/content/v1/5e7e6ab5b449574311fd2187/1646101124620-FSC9WA9CYNVGQB0FTS1K/that-girl.jpeg",
            "https://i.pinimg.com/originals/23/8e/03/238e0377039a3116c4864267deec8792.jpg",
            "https://i.pinimg.com/736x/a0/e0/b6/a0e0b60f4a5a45cd1146a157250e6e29.jpg",
            "https://i.pinimg.com/736x/21/91/cb/2191cbaf3bb784fc03ddeed99a41793b.jpg",
            "https://i.pinimg.com/736x/a0/e0/b6/a0e0b60f4a5a45cd1146a157250e6e29.jpg",
        ],
        context:
            "POST 2Lorem ipsum dolor sit amet,Lorem ipsum dolorsit amet consectetur adipisicing elit.Incidunt nostrum laborum, rationeconsequatur ullam nisi sed veniam blanditiisoptio delectus hic tempora totam dolorumaliquam dolores animi quas consectetureligendi?",
    },
    {
        userName: "username3",
        imgProfile:
            "https://lh3.googleusercontent.com/pw/ABLVV84ad5_mjW3yWmzhRVBUe6a-NjzCKpp4OwE_mKr3wsKZlYYST0_pkHj8h7v7nGXGc-Hbf0bx295FvydNQP5UdActj7-7gxWZxKpEswCSsy0YfxJtRkfpygvWsj0QINOakA_nvga1FPg0C8YvC3tCTHFFNQ=w878-h878-s-no-gm?authuser=0",
        datePost: new Date(),
        imgUrl: [
            "https://lh3.googleusercontent.com/pw/ABLVV848OKnsAhCF43lS-dGbmNTDYY67ppFTuTZt6dfpLyLKLveopyxl4DeTtB-xGxaIArE49fkQZ0qBKTPtE7FHX_IFWX63xpjK8KMDusyeDgEipc6tPBN8poh6WgTdFkGUEKqUTHQe5IikH34DdLuItHcH6Q=w878-h878-s-no-gm?authuser=0",
            "https://images.squarespace-cdn.com/content/v1/5e7e6ab5b449574311fd2187/1646101124620-FSC9WA9CYNVGQB0FTS1K/that-girl.jpeg",
            // "https://i.pinimg.com/originals/23/8e/03/238e0377039a3116c4864267deec8792.jpg",
            // "https://i.pinimg.com/736x/a0/e0/b6/a0e0b60f4a5a45cd1146a157250e6e29.jpg",
            // "https://i.pinimg.com/736x/21/91/cb/2191cbaf3bb784fc03ddeed99a41793b.jpg",
            // "https://i.pinimg.com/736x/a0/e0/b6/a0e0b60f4a5a45cd1146a157250e6e29.jpg",
        ],
        context:
            "POST 3Lorem ipsum dolor sit amet,Lorem ipsum dolorsit amet consectetur adipisicing elit.Incidunt nostrum laborum, rationeconsequatur ullam nisi sed veniam blanditiisoptio delectus hic tempora totam dolorumaliquam dolores animi quas consectetureligendi?",
    },
];
export default postData;
