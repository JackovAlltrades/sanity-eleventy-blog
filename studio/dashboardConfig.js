export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5fded8b7d3466c89ccab313b',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-rcjsvtbb',
                  apiId: '58aa6499-50c5-4836-a86a-286922ac01eb'
                },
                {
                  buildHookId: '5fded8b7714daf7ff62c5ce8',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-6ynb41oa',
                  apiId: '041b69c2-aa01-4b27-aa22-28796af88a9a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JackovAlltrades/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-6ynb41oa.netlify.app', category: 'apps'}
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
