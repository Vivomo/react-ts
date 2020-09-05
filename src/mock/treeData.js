let data = [
    {
        title: '标题1',
        key: '1',
        isLeaf: false,
        creatTime: 1,
        updateTime: 2,
        children: [
            {
                title: '标题1-1',
                key: '1-1',
                isLeaf: true,
                creatTime: 1,
                updateTime: 2,
            },
            {
                title: '标题1-2',
                key: '1-2',
                isLeaf: true,
                creatTime: 2,
                updateTime: 3,
            },
            {
                title: '标题1-3',
                key: '1-3',
                isLeaf: false,
                creatTime: 3,
                updateTime: 1,
                children: [
                    {
                        title: '标题1-1-1',
                        key: '1-1-1',
                        isLeaf: true,
                        creatTime: 1,
                        updateTime: 3,
                    },
                    {
                        title: '标题1-1-2',
                        key: '1-1-2',
                        isLeaf: true,
                        creatTime: 2,
                        updateTime: 2,
                    },
                    {
                        title: '标题1-1-3',
                        key: '1-1-3',
                        isLeaf: false,
                        children: [],
                        creatTime: 3,
                        updateTime: 1,
                    },
                ]
            },
        ]
    },
    {
        title: '标题2',
        key: '2',
        isLeaf: false,
        creatTime: 2,
        updateTime: 1,
        children: [
            {
                title: '标题2-1',
                key: '2-1',
                isLeaf: true,
                creatTime: 1,
                updateTime: 3,
            },
            {
                title: '标题2-2',
                key: '2-2',
                isLeaf: true,
                creatTime: 2,
                updateTime: 1,
            },
            {
                title: '标题2-3',
                key: '2-3',
                isLeaf: false,
                children: [],
                creatTime: 3,
                updateTime: 2,
            },
        ]
    },
];

export default data;