import React from 'react'
import { 
  Database, 
  BarChart3, 
  Code, 
  Cpu, 
  Cloud, 
  GitBranch,
  Zap,
  Shield,
  Globe,
  TrendingUp
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Análisis de Datos',
      icon: <BarChart3 className="text-data-green" size={32} />,
      skills: [
        { name: 'Power BI', level: 95, icon: '📊' },
        { name: 'Tableau', level: 90, icon: '📈' },
        { name: 'Excel Avanzado', level: 95, icon: '📋' },
        { name: 'Google Analytics', level: 85, icon: '📊' }
      ]
    },
    {
      title: 'Programación',
      icon: <Code className="text-data-green" size={32} />,
      skills: [
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'SQL', level: 95, icon: '🗄️' },
        { name: 'R', level: 80, icon: '📊' },
        { name: 'VBA', level: 85, icon: '💻' }
      ]
    },
    {
      title: 'Machine Learning',
      icon: <Cpu className="text-data-green" size={32} />,
      skills: [
        { name: 'Scikit-learn', level: 85, icon: '🤖' },
        { name: 'TensorFlow', level: 75, icon: '🧠' },
        { name: 'Pandas', level: 90, icon: '🐼' },
        { name: 'NumPy', level: 85, icon: '🔢' }
      ]
    },
    {
      title: 'Bases de Datos',
      icon: <Database className="text-data-green" size={32} />,
      skills: [
        { name: 'MySQL', level: 90, icon: '🐬' },
        { name: 'PostgreSQL', level: 85, icon: '🐘' },
        { name: 'MongoDB', level: 75, icon: '🍃' },
        { name: 'SQL Server', level: 80, icon: '🗄️' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="text-data-green" size={32} />,
      skills: [
        { name: 'AWS', level: 75, icon: '☁️' },
        { name: 'Azure', level: 80, icon: '🔷' },
        { name: 'Docker', level: 70, icon: '🐳' },
        { name: 'Git', level: 85, icon: '📝' }
      ]
    },
    {
      title: 'Herramientas BI',
      icon: <TrendingUp className="text-data-green" size={32} />,
      skills: [
        { name: 'QlikView', level: 80, icon: '📊' },
        { name: 'Looker', level: 75, icon: '👁️' },
        { name: 'SAP BusinessObjects', level: 70, icon: '🏢' },
        { name: 'Alteryx', level: 75, icon: '🔄' }
      ]
    }
  ]

  const additionalSkills = [
    { name: 'ETL Processes', icon: <Zap className="text-data-green" size={20} /> },
    { name: 'Data Modeling', icon: <Database className="text-data-green" size={20} /> },
    { name: 'Statistical Analysis', icon: <BarChart3 className="text-data-green" size={20} /> },
    { name: 'Data Visualization', icon: <Globe className="text-data-green" size={20} /> },
    { name: 'API Integration', icon: <GitBranch className="text-data-green" size={20} /> },
    { name: 'Data Security', icon: <Shield className="text-data-green" size={20} /> }
  ]

  return (
    <section id="skills" className="section-padding bg-data-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mis <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tecnologías y herramientas que domino para transformar datos en insights valiosos.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-data-light p-6 rounded-lg glow-border card-hover"
            >
              <div className="flex items-center space-x-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-data-green font-bold text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-data-gray rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-data-green to-neon-green h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="bg-data-gray p-8 rounded-lg glow-border">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Habilidades Adicionales
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {additionalSkills.map((skill, index) => (
              <div 
                key={index}
                className="flex flex-col items-center space-y-2 p-4 bg-data-light rounded-lg hover:bg-data-green/10 transition-colors duration-300"
              >
                {skill.icon}
                <span className="text-gray-300 text-sm text-center font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 gradient-text">
            Certificaciones
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Microsoft Power BI', level: 'Data Analyst' },
              { name: 'Tableau Desktop', level: 'Specialist' },
              { name: 'Google Data Analytics', level: 'Professional' },
              { name: 'AWS Cloud Practitioner', level: 'Foundational' }
            ].map((cert, index) => (
              <div 
                key={index}
                className="bg-data-light p-4 rounded-lg glow-border card-hover"
              >
                <div className="text-data-green font-bold text-lg mb-1">
                  {cert.name}
                </div>
                <div className="text-gray-400 text-sm">
                  {cert.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 