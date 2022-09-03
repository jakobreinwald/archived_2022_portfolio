export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'tag',
            title: 'Tag',
            type: 'string',
        },
    ],
    orderings: [
        {
            title: 'Tag, Alphabetic',
            name: 'tagDesc',
            by: [
                { field: 'tag', direction: 'desc' }
            ]
        },
    ],
}