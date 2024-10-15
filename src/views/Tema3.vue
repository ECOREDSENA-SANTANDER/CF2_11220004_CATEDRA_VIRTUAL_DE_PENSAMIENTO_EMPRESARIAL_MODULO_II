<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Presupuesto de costos
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/37.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una vez definidas las inversiones y fuentes de financiamiento del proyecto productivo, es fundamental diseñar un presupuesto detallado de ingresos y gastos. Este presupuesto permitirá estimar el valor total del proyecto y determinar las posibles fuentes de financiación adicionales. Igualmente, es necesario determinar el programa de desembolsos paralelo con el cronograma de actividades del proyecto y, de esa forma, determinar las operaciones de la nueva empresa. 
        br
        br
        p.mb-0 Cuando se inicia una empresa, dentro de su normal funcionamiento ésta debe percibir unos ingresos; así como producir egresos, por lo tanto, es importante estructurar los costos, como se recomienda a continuación:

    separador
    #t_3_1.titulo-segundo.color-primario
      h2 3.1 Costos de producción

    p.mb-4(data-aos="fade-right") En el proceso de producción de un bien, la empresa incurre en unos egresos o gastos, que se denominan costos de producción o costos de operación, estos son necesarios para mantener un proyecto, línea de procesamiento o un equipo en funcionamiento.  Algunos de estos son: 
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-1.col-2.pe-0
        figure
          img.icono(src='@/assets/curso/temas/icono.svg', alt='')
      .col-lg-11.col-10.ps-0
        .subt1.mb-4(data-aos="fade-right").my-4
          .d-flex.align-items-center.mb-1
            h2.mb-0 Costos y gastos de fabricación
    
    p.mb-4(data-aos="fade-right") Aquí se encuentran todos los elementos que hacen parte en el proceso de producción, como: la materia prima o materiales (directos e indirectos), la mano de obra (directa e indirecta), la depreciación de los equipos, los servicios públicos y todo lo que tiene que ver con el proceso de producción de un bien.

    .row.fondo1.align-items-center.p-3.mb-4(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4
        
        .tarjetaf.p-3.mb-4
          SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
            .row.justify-content-center.p-4
              .col-lg-7.col-12.my-3
                h4.mb-4 La materia prima o materiales directos
                p.mb-4 Son todos los elementos que intervienen para la realización de un producto y hacen parte de él cuando esté terminado; además, representan el principal costo en la elaboración del producto. Ejemplo: la madera para fabricar sillas.
              .col-lg-4.col-12.col-md-9.my-3
                img(alt="" src="@/assets/curso/temas/38.png")
            .row.justify-content-center.p-4
              .col-lg-7.col-12.my-3
                h4.mb-4 Los materiales indirectos
                p.mb-4 Son elementos necesarios y utilizados en la elaboración de un producto, pero no están físicamente incorporados a éste. Ejemplo: el pegante utilizado en la fabricación de las sillas.
              .col-lg-4.col-12.col-md-9.my-3
                img(alt="" src="@/assets/curso/temas/39.png")
            .row.justify-content-center.p-4
              .col-lg-7.col-12.my-3
                h4.mb-4 Mano de obra directa
                p.mb-4 Es la que realiza el proceso de transformación de la materia prima o materiales directos, en un producto terminado; en otras palabras, realiza el trabajo físico en la elaboración del producto. Ejemplo: el trabajador que corta, ensambla y pinta la madera para crear una silla.
              .col-lg-4.col-12.col-md-9.my-3
                img(alt="" src="@/assets/curso/temas/40.png")
            .row.justify-content-center.p-4
              .col-lg-7.col-12.my-3
                h4.mb-4 Mano de obra indirecta
                p.mb-4 No participa directamente en la transformación del producto, pero apoya el proceso de producción. Incluye los salarios de supervisores, vigilantes, secretarias, personal de mantenimiento, entre otros.
              .col-lg-4.col-12.col-md-9.my-3
                img(alt="" src="@/assets/curso/temas/41.png")
            .row.justify-content-center.p-4
              .col-lg-7.col-12.my-3
                h4.mb-4 Otros gastos de fabricación
                p.mb-4 Hacen referencia a útiles de aseo, papelería de oficina, combustible, lubricantes, repuestos, accesorios, agua, energía, alquileres, seguros, impuestos, depreciación, mantenimiento, y otros.
              .col-lg-4.col-12.col-md-9.my-3
                img(alt="" src="@/assets/curso/temas/42.png")

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        figure
          img.icono(src='@/assets/curso/temas/icono.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right").my-4
          .d-flex.align-items-center.mb-1
            h2.mb-0 Gastos de venta
    
    p.mb-4(data-aos="fade-right") Se originan cuando la empresa comercializa sus productos y realiza actividades promocionales. Incluyen salarios y comisiones del personal de ventas, costos de publicidad y propaganda, gastos de entrega de mercancías, transporte, y viáticos, entre otros.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        figure
          img.icono(src='@/assets/curso/temas/icono.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right").my-4
          .d-flex.align-items-center.mb-1
            h2.mb-0 Gastos de administración
    
    p.mb-4(data-aos="fade-right") Son aquellos asociados a la gestión administrativa de la empresa, sin estar directamente relacionados con la producción. Ejemplos incluyen salarios del personal administrativo, honorarios, depreciación de activos, alquileres, servicios públicos, papelería, artículos de oficina, seguros, impuestos y mantenimiento. 

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        figure
          img.icono(src='@/assets/curso/temas/icono.svg', alt='')
      .col
        .subt.mb-4(data-aos="fade-right").my-4
          .d-flex.align-items-center.mb-1
            h2.mb-0 Gastos financieros
    
    p.mb-0(data-aos="fade-right") Se refieren a los costos derivados del financiamiento de la empresa, como los intereses sobre préstamos bancarios o de terceros. También incluyen comisiones asociadas a la formalización de préstamos y otros servicios bancarios relacionados con el financiamiento.


    separador
    #t_3_2.titulo-segundo.color-primario
      h2 3.2 Costo unitario
    
    p.mb-4(data-aos="fade-right") Después de establecer los costos totales en los cuales se incurrirá para llevar a cabo las actividades de la empresa en un determinado ciclo, por lo general un año, se hace necesario determinar el costo unitario del producto fabricado. En el proceso de producción de un bien y de acuerdo con su complejidad, intervienen muchos gastos, por lo tanto, es preciso clasificarlos en gastos fijos y gastos variables.  A continuación, se describe a qué hace referencia cada uno de ellos:

    .row.fondo1.align-items-center.p-3.mb-5(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4
        
        .tarjetaf.p-3.mb-4
          SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
            .row.justify-content-center.p-4
              .col-lg-7.col-12.my-3
                h4.mb-4 Gastos fijos
                p.mb-4 Como su nombre lo determina, siempre se paga por ellos, estos establecen el funcionamiento de la empresa y son independientes del volumen de producción. Ejemplo: nómina, seguros, servicios públicos, arriendos, etc.
              .col-lg-4.col-12.col-md-9.my-3
                img(alt="" src="@/assets/curso/temas/43.png")
            .row.justify-content-center.p-4
              .col-lg-7.col-12.my-3
                h4.mb-4 Gastos variables
                p.mb-4 Teniendo en cuenta la producción y sus niveles, además de las ventas; los gastos por estos conceptos pueden variar de la siguiente manera: a más producción y venta, mayores gastos; a menor producción y venta, menor es el gasto. Ejemplo: los insumos, materia prima, mano de obra directa, costos de los bienes vendidos, comisiones de ventas, gastos de envío, los salarios y el número de empleados temporales o de media jornada, así como las bonificaciones a los empleados, entre otros.
              .col-lg-4.col-12.col-md-9.my-3
                img(alt="" src="@/assets/curso/temas/44.png")
    
    p.mb-4(data-aos="fade-right") La siguiente tabla, sirve de ejemplo para clasificar los costos fijos y variables:

    .row.justify-content-center(data-aos="zoom-in-left")(alt="")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 1.  
          | Clasificación de costos fijos y variables

    .row.justify-content-center.mb-4(data-aos="zoom-in-left")(alt="")
      .col-lg-10
        .tabla-a.color-acento-contenido
          table
            caption Referencia Tabla - Norma APA
            thead
              tr
                th.neg Descripción
                th Costos fijos
                th Costos variables
            tbody
              tr
                td Gastos de fabricación
                td 
                td 
              tr
                td Gastos de administración
                td 
                td 
              tr
                td Gastos de venta
                td 
                td 
              tr
                td Gastos financieros
                td 
                td 
              tr
                td #[b Total]
                td 
                td 
    
    p.mb-4(data-aos="fade-right") Cuando se ha determinado el total de los costos fijos y costos variables, se puede establecer los costos totales de producción, usando la siguiente fórmula: 
    
    h3.mb-4(data-aos="fade-right") CT = CF + CV
    
    .row.justify-content-center.mb-5(data-aos="zoom-in-left")(alt="")
      .col-lg-12
        ImagenInfografica.color-acento-contenido
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/45.png', alt='')
          .tarjeta.color-acento-contenido.p-3(x="41.8%" y="68%" numero="") 
            h3.mb-4 CT
            p.text-black Costo total.
          .tarjeta.color-acento-contenido.p-3(x="50%" y="68%" numero="")
            h3.mb-4 CF 
            p.text-black Costos fijos.
          .tarjeta.color-acento-contenido.p-3(x="58.6%" y="68%" numero="") 
            h3.mb-4 CV
            p.text-black Costos variables. 
    
    p.mb-4(data-aos="fade-right") Teniendo el dato del costo total, el fabricante, puede determinar cuánto le cuesta producir una unidad, es decir el costo unitario, aplicando la siguiente fórmula. 
    
    h3.mb-4(data-aos="fade-right") CU = CT / n
    
    .row.justify-content-center(data-aos="zoom-in-left")(alt="")
      .col-lg-12
        ImagenInfografica.color-acento-contenido
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/46.png', alt='')
          .tarjeta.color-acento-contenido.p-3(x="43.5%" y="66.8%" numero="") 
            h3.mb-4 CU
            p.text-black Costo unitario.
          .tarjeta.color-acento-contenido.p-3(x="52%" y="66.8%" numero="")
            h3.mb-4 CT
            p.text-black Costo total de producción.
          .tarjeta.color-acento-contenido.p-3(x="58.5%" y="66.8%" numero="") 
            h3.mb-4 N
            p.text-black Número total de unidades producidas.

    separador
    #t_3_3.titulo-segundo.color-primario
      h2 3.3 Precio de venta
    
    .row.justify-content-center.mb-4(data-aos="zoom-in-left")(alt="")
      .col-lg-8
        p.mb-4 Cuando ya se tiene determinado el costo unitario de producción, se hace indispensable fijar el margen de utilidad que se espera alcanzar en la venta de esa unidad producida.  Ésta, la establece generalmente la gerencia de la empresa, y es fundamental para poder constituir el precio de venta.  En ocasiones, se tienen en cuenta algunos factores, como el precio unitario, el precio de la competencia y la calidad del producto, entre otros; para que la utilidad sea justa y no haga que el producto salga al mercado con valores muy elevados. 
        p.mb-4 En algunos casos, cuando se está eligiendo el precio de venta del producto, se consideran algunos aspectos como:
        ul.lista-ul
          li.d-flex.mb-2
            i.fas.fa-circle
            p.mb-0 Los valores de productos parecidos que existen en el mercado.
          li.d-flex.mb-2
            i.fas.fa-circle
            p.mb-0 Los valores de productos sustitutos que existen en el mercado.
          li.d-flex.mb-2
            i.fas.fa-circle
            p.mb-0 Las ganancias que se desean obtener y que cubran los compromisos adquiridos por la empresa de forma suficiente.
      .col-lg-4.col-md-9.col-9
        img(src='@/assets/curso/temas/47.png', alt='')
    
    p.mb-4(data-aos="fade-right") La fórmula para determinar el precio de venta es: 

    h3.mb-4(data-aos="fade-right") PV = CT + MU
    
    .row.justify-content-center(data-aos="zoom-in-left")(alt="")
      .col-lg-12
        ImagenInfografica.color-acento-contenido
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/48.png', alt='')
          .tarjeta.color-acento-contenido.p-3(x="41.6%" y="69.2%" numero="") 
            h3.mb-4 PV
            p.text-black Precio de venta.
          .tarjeta.color-acento-contenido.p-3(x="50%" y="69.2%" numero="")
            h3.mb-4 CT
            p.text-black Costo total.
          .tarjeta.color-acento-contenido.p-3(x="58.5%" y="69.2%" numero="") 
            h3.mb-4 MU
            p.text-black Margen de utilidad.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
