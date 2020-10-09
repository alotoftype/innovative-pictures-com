export default {
  widgets: [
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
                  buildHookId: '5f80f6411a19b43c98081505',
                  title: 'Sanity Studio',
                  name: 'innovative-pictures-com-studio',
                  apiId: '148bb481-d4cb-4847-804b-7833411ddee3'
                },
                {
                  buildHookId: '5f80f641f2fb3e4106d434c3',
                  title: 'Blog Website',
                  name: 'innovative-pictures-com',
                  apiId: 'b578f9d0-0e16-4a7a-affd-e5e58402195f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alotoftype/innovative-pictures-com',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://innovative-pictures-com.netlify.app', category: 'apps'}
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
