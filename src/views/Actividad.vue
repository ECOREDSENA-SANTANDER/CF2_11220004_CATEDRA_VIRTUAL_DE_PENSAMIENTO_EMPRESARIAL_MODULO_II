<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Nombre del componente formativo',
      titulo: 'Ronda de preguntas',
      introduccion:
        '<b> Objetivo:</b> fortalecer conocimientos asociados al proceso de identificación de recursos y viabilidad financiera de un proyecto.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            'Etapa inicial del proceso de selección que busca identificar candidatos potenciales que encajen en la organización.',
          imagen: require('@/assets/componentes/img1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reclutamiento', esCorrecta: true },
            { id: 'b', texto: 'Recursos físicos', esCorrecta: false },
            { id: 'c', texto: 'Inducción', esCorrecta: false },
            { id: 'd', texto: 'Flujo de caja', esCorrecta: false },
            {
              id: 'e',
              texto: 'Tasa interna de retorno (TIR)',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Elementos tangibles como terrenos, maquinaria y equipo que son esenciales para las operaciones de la empresa.',
          imagen: require('@/assets/componentes/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Recursos físicos', esCorrecta: true },
            { id: 'b', texto: 'Reclutamiento', esCorrecta: false },
            { id: 'c', texto: 'Inducción', esCorrecta: false },
            { id: 'd', texto: 'Flujo de caja', esCorrecta: false },
            {
              id: 'e',
              texto: 'Tasa interna de retorno (TIR)',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Proceso de integración de un nuevo empleado a la empresa, brindándole una visión general de su rol y de la organización.',
          imagen: require('@/assets/componentes/img3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Inducción', esCorrecta: true },
            { id: 'b', texto: 'Recursos físicos', esCorrecta: false },
            { id: 'c', texto: 'Reclutamiento', esCorrecta: false },
            { id: 'd', texto: 'Flujo de caja', esCorrecta: false },
            {
              id: 'e',
              texto: 'Tasa interna de retorno (TIR)',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Incluye las entradas y salidas de dinero en la operación de la empresa en un periodo determinado.',
          imagen: require('@/assets/componentes/img4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Flujo de caja', esCorrecta: true },
            { id: 'b', texto: 'Recursos físicos', esCorrecta: false },
            { id: 'c', texto: 'Inducción', esCorrecta: false },
            { id: 'd', texto: 'Reclutamiento', esCorrecta: false },
            {
              id: 'e',
              texto: 'Tasa interna de retorno (TIR)',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Indicador que mide la rentabilidad de un proyecto en comparación con su costo de financiamiento.',
          imagen: require('@/assets/componentes/img5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tasa interna de retorno (TIR)',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Recursos físicos', esCorrecta: false },
            { id: 'c', texto: 'Inducción', esCorrecta: false },
            { id: 'd', texto: 'Flujo de caja', esCorrecta: false },
            {
              id: 'e',
              texto: 'Reclutamiento',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
