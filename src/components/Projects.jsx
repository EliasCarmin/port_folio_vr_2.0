import React, { useState } from 'react'
import { ExternalLink, Github, Eye, BarChart3, Database, TrendingUp, Users, ShoppingCart } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('todos')

  const projects = [
    {
      id: 1,
      title: 'Dashboard de Ventas E-commerce',
      category: 'dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      description: 'Dashboard interactivo para análisis de ventas online con métricas de conversión y comportamiento de usuarios.',
      technologies: ['Power BI', 'SQL', 'Python', 'Excel'],
      features: ['Análisis de conversión', 'Segmentación de clientes', 'Predicción de ventas', 'Reportes automáticos'],
      link: '#',
      github: '#',
      stats: { users: '10K+', revenue: '+25%', conversion: '+15%' }
    },
    {
      id: 2,
      title: 'Sistema de Análisis de Flota Vehicular',
      category: 'analytics',
      image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop',
      description: 'Solución completa para monitoreo y optimización de flotas de vehículos con análisis predictivo de mantenimiento.',
      technologies: ['Tableau', 'Python', 'PostgreSQL', 'Machine Learning'],
      features: ['Monitoreo en tiempo real', 'Predicción de fallas', 'Optimización de rutas', 'Análisis de costos'],
      link: '#',
      github: '#',
      stats: { vehicles: '500+', savings: '$50K', efficiency: '+30%' }
    },
    {
      id: 3,
      title: 'Análisis de Comportamiento de Usuarios',
      category: 'analytics',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      description: 'Análisis profundo del comportamiento de usuarios en plataformas digitales para optimización de UX.',
      technologies: ['Google Analytics', 'Python', 'R', 'SQL'],
      features: ['User Journey Mapping', 'A/B Testing', 'Heatmaps', 'Funnel Analysis'],
      link: '#',
      github: '#',
      stats: { sessions: '1M+', engagement: '+40%', bounce: '-20%' }
    },
    {
      id: 5,
      title: 'Predicción de Demanda con ML',
      category: 'machine-learning',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      description: 'Modelo de machine learning para predicción de demanda y optimización de inventarios.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      features: ['Predicción de demanda', 'Optimización de stock', 'Análisis de estacionalidad', 'Alertas automáticas'],
      link: '#',
      github: '#',
      stats: { accuracy: '94%', savings: '$100K', stock: '-30%' }
    },
    {
      id: 6,
      title: 'Dashboard de KPIs Empresariales',
      category: 'dashboard',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      description: 'Dashboard ejecutivo con KPIs críticos para la toma de decisiones estratégicas.',
      technologies: ['Power BI', 'DAX', 'SQL', 'Azure'],
      features: ['KPIs en tiempo real', 'Drill-down capabilities', 'Alertas automáticas', 'Múltiples fuentes'],
      link: '#',
      github: '#',
      stats: { kpis: '25+', users: '100+', decisions: '+50%' }
    }
  ]

  const filters = [
    { id: 'todos', name: 'Todos' },
    { id: 'dashboard', name: 'Dashboards' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'automation', name: 'Automatización' },
    { id: 'machine-learning', name: 'Machine Learning' }
  ]

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'dashboard': return <BarChart3 className="text-data-green" size={20} />
      case 'analytics': return <TrendingUp className="text-data-green" size={20} />
      case 'automation': return <Database className="text-data-green" size={20} />
      case 'machine-learning': return <Users className="text-data-green" size={20} />
      default: return <BarChart3 className="text-data-green" size={20} />
    }
  }

  const getStatsIcon = (stat) => {
    switch(stat) {
      case 'users': return <Users className="text-data-green" size={16} />
      case 'revenue': return <TrendingUp className="text-data-green" size={16} />
      case 'conversion': return <BarChart3 className="text-data-green" size={16} />
      case 'vehicles': return <Database className="text-data-green" size={16} />
      case 'savings': return <TrendingUp className="text-data-green" size={16} />
      case 'efficiency': return <BarChart3 className="text-data-green" size={16} />
      case 'sessions': return <Users className="text-data-green" size={16} />
      case 'engagement': return <TrendingUp className="text-data-green" size={16} />
      case 'bounce': return <BarChart3 className="text-data-green" size={16} />
      case 'time': return <TrendingUp className="text-data-green" size={16} />
      case 'accuracy': return <BarChart3 className="text-data-green" size={16} />
      case 'processes': return <Database className="text-data-green" size={16} />
      case 'stock': return <ShoppingCart className="text-data-green" size={16} />
      case 'kpis': return <BarChart3 className="text-data-green" size={16} />
      case 'decisions': return <TrendingUp className="text-data-green" size={16} />
      default: return <BarChart3 className="text-data-green" size={16} />
    }
  }

  return (
    <section id="projects" className="section-padding bg-data-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mis <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Proyectos destacados que demuestran mi experiencia en análisis de datos y desarrollo de soluciones empresariales.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-data-green text-data-dark'
                  : 'bg-data-light text-gray-300 hover:bg-data-green/20 hover:text-data-green'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-data-light rounded-lg overflow-hidden glow-border card-hover group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-data-dark/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  {getCategoryIcon(project.category)}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-data-green transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-data-green/10 text-data-green text-sm rounded-full border border-data-green/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Características:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-gray-400 text-sm flex items-center">
                        <span className="w-1 h-1 bg-data-green rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="flex items-center justify-center space-x-1 text-data-green text-sm font-bold">
                        {getStatsIcon(key)}
                        <span>{value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 flex items-center justify-center space-x-2 bg-data-green text-data-dark px-4 py-2 rounded-lg hover:bg-neon-green transition-colors font-medium">
                    <Eye size={16} />
                    <span>Ver Demo</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 border border-data-green text-data-green px-4 py-2 rounded-lg hover:bg-data-green hover:text-data-dark transition-colors">
                    <Github size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-data-light p-8 rounded-lg glow-border">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Estoy siempre interesado en nuevos desafíos. Si tienes un proyecto que requiera análisis de datos, 
              desarrollo de dashboards o implementación de soluciones de BI, ¡hablemos!
            </p>
            <button className="bg-data-green text-data-dark px-8 py-3 rounded-lg hover:bg-neon-green transition-colors font-medium">
              Contactar
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 