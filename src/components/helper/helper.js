


export default function getMenu(auth) {

    if (auth) {
        return [
            {
                item: 'home',
                link: '/'
            },
            {
                item: 'post-comment',
                link: '/commentList'
            },

        ];
    }

    return [
        {
            item: 'home',
            link: '/'
        }
    ];

}