let data = [
    {
        title: '标题1',
        key: '1',
        isLeaf: false,
        children: [
            {
                title: '标题1-1',
                key: '1-1',
                isLeaf: true,
            },
            {
                title: '标题1-1',
                key: '1-1',
                isLeaf: true,
            },
            {
                title: '标题1-1',
                key: '1-1',
                isLeaf: false,
                children: [
                    {
                        title: '标题1-1-1',
                        key: '1-1-1',
                        isLeaf: true,
                    },
                    {
                        title: '标题1-1-2',
                        key: '1-1-2',
                        isLeaf: true,
                    },
                    {
                        title: '标题1-1-3',
                        key: '1-1-3',
                        isLeaf: false,
                        children: []
                    },
                ]
            },
        ]
    },
    {
        title: '标题2',
        key: '2',
        isLeaf: false,
        children: [
            {
                title: '标题2-1',
                key: '2-1',
                isLeaf: true,
            },
            {
                title: '标题2-2',
                key: '2-2',
                isLeaf: true,
            },
            {
                title: '标题2-3',
                key: '2-3',
                isLeaf: false,
                children: []
            },
        ]
    },
];

export default data;