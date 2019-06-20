export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d0bc67872e96153f0bca468',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-bjw8ftkr',
                  apiId: 'f080f549-0a13-4a3a-929d-5b29740b2c45'
                },
                {
                  buildHookId: '5d0bc678d4f5cab1e7e7f54f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-vkbc6bmt',
                  apiId: 'ebdc15c4-8c65-4b60-b334-f6be9c36ea0d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/justinlala/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-vkbc6bmt.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
