const movies = [
    {
        id: '1',
        title: 'Oceans 8',
        category: 'Comedy',
        likes: 6,
        dislikes: 3,
        image: "https://tse3.mm.bing.net/th?id=OIP.FHyiyTJYbKttdEOeY6_pDgHaK-&pid=Api&P=0&w=300&h=300"    
    }, {
        id: '2',
        title: 'Midnight Sun',
        category: 'Comedy',
        likes: 4,
        dislikes: 5,
        image: "https://tse3.mm.bing.net/th?id=OIP.ivXZgfaJzk5OHdKcgfeAtwHaKj&pid=Api&P=0&w=300&h=300"
    }, {
        id: '3',
        title: 'Les indestructibles 2',
        category: 'Animation',
        likes: 33,
        dislikes: 17,
        image: "https://tse3.mm.bing.net/th?id=OIP.wMG5lU1H5DxzdVAONkPQFAHaKl&pid=Api&P=0&w=300&h=300"
    }, {
        id: '4',
        title: 'Sans un bruit',
        category: 'Thriller',
        likes: 66,
        dislikes: 96,
        image: "https://tse1.mm.bing.net/th?id=OIP.s2uvNkvcajBkazygOEiLqwHaKD&pid=Api&P=0&w=300&h=300"
    }, {
        id: '5',
        title: 'Creed II',
        category: 'Drame',
        likes: 28,
        dislikes: 21,
        image: "https://tse4.mm.bing.net/th?id=OIP.C7XT3Dh-k3ZROdsBMswKGgHaIk&pid=Api&P=0&w=300&h=300"
    }, {
        id: '6',
        title: 'Pulp Fiction',
        category: 'Thriller',
        likes: 16,
        dislikes: 37,
        image: "https://tse2.explicit.bing.net/th?id=OIP.oVSXJArra_OG8yixpwMZ6wHaLH&pid=Api&P=0&w=300&h=300"
    }, {
        id: '7',
        title: 'Pulp Fiction',
        category: 'Thriller',
        likes: 25,
        dislikes: 31,
        image: "https://tse3.mm.bing.net/th?id=OIP.rzD69e4naObvPrZRWyLGJAHaKj&pid=Api&P=0&w=300&h=300"
    }, {
        id: '8',
        title: 'Seven',
        category: 'Thriller',
        likes: 29,
        dislikes: 19,
        image: "https://tse2.mm.bing.net/th?id=OIP.E__mbHUy6Ay5zDcYH5SvHwHaLH&pid=Api&P=0&w=300&h=300"
    }, {
        id: '9',
        title: 'Inception',
        category: 'Thriller',
        likes: 22,
        dislikes: 17,
        image:"https://appraf.com/media/movie/sm/c3d41ef87af24036867f5dd7f548703c.JPEG"
    }, {
        id: '10',
        title: 'Gone Girl',
        category: 'Thriller',
        likes: 35,
        dislikes: 46,
         image: "https://tse2.mm.bing.net/th?id=OIP.HzdNvwsSeK0pCivtRefR4wHaKj&pid=Api&P=0&w=300&h=300"
    },
]

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))