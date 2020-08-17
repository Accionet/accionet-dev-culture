module.exports = {
  title: 'Cultura Accionet',
  base: '/accionet-dev-culture/',
  themeConfig: {
    nav: [],
    displayAllHeaders: true,
    sidebar: {
      '/': [{
        title: 'Git', 
        depth: 2,
        path: '/git',
        children: []
      }, {
        title: 'Código de Calidad', 
        path: '/code',
        children: []
      }, {
        title: 'Metodología de Trabajo', 
        path: '/work',
        children: []
      }, {
        title: 'Tecnologías', 
        path: '/tech',
        children: []
      }, {
        title: 'Entorno de Desarrollo', 
        path: '/ide',
        children: []
      }, {
        title: 'Citas', 
        path: '/quotes',
        children: []
      }]
    },
  },
}
