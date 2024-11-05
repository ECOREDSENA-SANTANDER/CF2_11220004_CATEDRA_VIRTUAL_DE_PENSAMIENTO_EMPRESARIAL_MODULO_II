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
            '¿Cuál es el principal objetivo del proceso de selección de personal en una organización?',
          imagen: require('@/assets/componentes/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Asegurar la contratación del candidato más adecuado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Crear vínculos personales entre los empleados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir los costos de reclutamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar el tamaño del equipo de trabajo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué enfoque de selección busca formar al nuevo colaborador de acuerdo con los valores de la empresa?',
          imagen: require('@/assets/componentes/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Formación continua.', esCorrecta: true },
            { id: 'b', texto: 'Reclutamiento externo.', esCorrecta: false },
            { id: 'c', texto: 'Pruebas técnicas.', esCorrecta: false },
            { id: 'd', texto: 'Uso de redes sociales.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'La inducción en una empresa se utiliza principalmente para reestructurar el equipo de trabajo.',
          imagen: require('@/assets/componentes/img3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es una de las principales ventajas de usar redes sociales en el proceso de reclutamiento?',
          imagen: require('@/assets/componentes/img4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ofrece una visión espontánea del candidato en un entorno natural.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Permite reducir los costos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Facilita la evaluación de competencias técnicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elimina la necesidad de realizar entrevistas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'El análisis de cargos es importante para asegurar que el candidato seleccionado cumpla con las expectativas del rol.',
          imagen: require('@/assets/componentes/img5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué elementos están incluidos dentro de los costos de producción en una empresa?',
          imagen: require('@/assets/componentes/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Materia prima, mano de obra, depreciación de equipos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mano de obra, gastos financieros, publicidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Publicidad, comisiones, seguros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ingresos por ventas, impuestos, materia prima.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué sucede si una empresa tiene ingresos elevados pero sus gastos son aún mayores?',
          imagen: require('@/assets/componentes/img2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No podrá asegurar su permanencia en el mercado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Garantiza su estabilidad en el corto plazo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No tendrá problemas financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Generará más utilidades de lo esperado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'El flujo de caja refleja el movimiento de efectivo de una empresa en un periodo determinado.',
          imagen: require('@/assets/componentes/img3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué implica un punto de equilibrio bajo en un proyecto?',
          imagen: require('@/assets/componentes/img4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que el riesgo financiero es menor y las utilidades son más probables.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Que los costos variables superan a los costos fijos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que el proyecto requiere altos niveles de producción para generar utilidades.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que los ingresos siempre serán iguales a los costos, sin importar las ventas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Un proyecto es aceptable cuando la Tasa Interna de Retorno (TIR) es mayor que el costo de capital.',
          imagen: require('@/assets/componentes/img5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
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
