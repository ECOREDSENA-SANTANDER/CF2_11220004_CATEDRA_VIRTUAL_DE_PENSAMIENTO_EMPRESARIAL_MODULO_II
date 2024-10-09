export default {
  global: {
    componenteFormativo:
      'Identificación de recursos y viabilidad financiera del proyecto.',
    descripcionCurso:
      'La definición de un proyecto o creación de una empresa exige una selección cuidadosa del equipo de trabajo, alineado con los valores de la organización. Además, se deben gestionar eficientemente recursos físicos, técnicos, tecnológicos y financieros, para garantizar su éxito. Este material de formación aborda también, la elaboración de presupuestos de costos, análisis de estados financieros y el uso de indicadores como el punto de equilibrio, TIR y VAN, que son esenciales para evaluar la viabilidad y sostenibilidad de un proyecto empresarial.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Selección y conformación del equipo de trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Talento humano',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'El proceso de selección',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Equipo de trabajo conformado',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Recursos físicos, técnicos, tecnológicos y financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'El manejo de los activos empresariales',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Presupuesto de costos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Costos de producción',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Costo unitario',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Precio de venta',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estados financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Flujo de caja o efectivo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Balance inicial',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Indicadores financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Punto de equilibrio',
            hash: 't_1_1',
          },
          {
            numero: '5.2',
            titulo: 'Tasa interna de oportunidad (TIO)',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Valor Actual Neto (VAN) o Valor Presente Neto (VPN)',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Tasa Interna de Retorno (TIR)',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Balance General',
      significado:
        'Estado financiero que mide la riqueza de la firma en un instante. Se rige por el principio de partida doble, lo cual se expresa en un equilibrio que está dado por la siguiente ecuación: Activos - Pasivos = Patrimonio.',
    },
    {
      termino: 'Fuentes de financiación externas',
      significado:
        'Obtención de recursos de fuentes ajenas a la empresa vía créditos bancarios o empréstitos de obligaciones, con costes financieros concretos y explícitos.',
    },
    {
      termino: 'Inversión',
      significado:
        'En su acepción más resumida y simple significa la formación e incremento neto de capital. A los efectos que a nosotros interesa, sería la diferencia de stock de capital existente entre dos intervalos de tiempo. Si tal diferencia es positiva, hablamos de inversión o generación bruta de capital; si fuere negativa, estaríamos ante un proceso de descapitalización o consumo de capital.',
    },
    {
      termino: 'Productividad',
      significado:
        'Capacidad relativa de un determinado factor. Suele expresarse por el cociente entre el valor de lo producido y el coste de los recursos necesarios para ello.',
    },
    {
      termino: 'Riesgo financiero',
      significado:
        'Riesgo derivado del endeudamiento que contrae la empresa, para hacer frente a sus operaciones típicas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asensio del Aco, E., & Vazquez,B. (2016). Empresa e Iniciativa Emprendedora. Madrid. España: Paraninfo. ',
      link: '',
    },
    {
      referencia:
        'Baca Urbina, G. (2013). Evaluación de proyectos: (7 ed.). McGraw-Hill.',
      link:
        'https://www.academia.edu/34845341/Evaluacion_de_Proyectos_Urbina_Baca_7m_pdf',
    },
    {
      referencia:
        'Meza Orozco, J. D. J. (2011). Matemáticas financieras aplicadas: (4 ed.). Ecoe Ediciones.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/96913?page=1',
    },
    {
      referencia:
        'Montero Moreno, C. (2014). Modelos Prácticos de Administración de Riegos. México: Ediciones Fiscales ISEF.',
      link: '',
    },
    {
      referencia:
        'Puchol, L. (2012). Dirección y Gestión de Recursos Humanos. Madrid-Buenos Aires-México: Díaz de Santos.',
      link: '',
    },
    {
      referencia:
        'Veiga, J.F.C. (2015). La Gestión Financiera de la Empresa. Madrid: Esic Editorial.',
      link: '',
    },
    {
      referencia:
        'Salazar, I.P. (2010). Guía Práctica para la identificación, formulación y evaluación de proyectos. Bogotá. Editorial Universidad del Rosario.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Cuellar',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Santiago Lozada Garcés',
          cargo: 'Líder línea de producción',
          centro:
            'Centro Industrial de Mantenimiento Integral - Regional Santander',
        },
        {
          nombre: 'Rosa Elvia Quintero Guasca',
          cargo: 'Asesora pedagógica',
          centro:
            'Centro Industrial de Mantenimiento Integral - Regional Santander',
        },
        {
          nombre: 'Luis Orlando Beltrán Vargas',
          cargo: 'Corrector de estilo',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Sandra Paola Morales Páez ',
          cargo: 'Asesor Pedagógico',
          centro:
            'Centro Industrial de Mantenimiento Integral - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar Gonzalez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
