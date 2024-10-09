<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Indicadores financieros
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/68.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Cuando se desea determinar si el proyecto es conveniente, o no, de poner en funcionamiento, se hace necesario plantear y analizar algunos indicadores financieros, para tomar una decisión efectiva que sea objetiva. Con estas herramientas, se puede evaluar, si la idea de crear empresa o negocio es viable o no.  

    separador
    #t_5_1.titulo-segundo.color-primario
      h2 5.1 Punto de equilibrio

    p.mb-4(data-aos="fade-right") Permite determinar, el nivel de un negocio en el cual los ingresos igualan a los egresos y por lo tanto no arroja ni ganancia ni pérdida. Se realiza para determinar las líneas más bajas de producción o ventas, con los cuales puede funcionar un proyecto sin poner en peligro la viabilidad financiera. Entre más bajo sea el punto de equilibrio, son mayores las probabilidades de que el proyecto obtenga utilidades y menor el riesgo de que incurra en pérdidas.
    p.mb-4(data-aos="fade-right") Para calcularlo es necesario descomponer los costos en fijos y variables. Los costos fijos permanecen constantes, independientemente del volumen de producción, mientras que los costos variables guardan relación directa con el volumen de producción. Es recomendable trabajar con datos anuales al momento de calcular el punto de equilibrio. La fórmula del punto de equilibrio se puede establecer de la siguiente forma:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-primario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-12
              .row.justify-content-center.align-items-center
                .col-lg-2.col-md-2.col-12.ps-0.pe-0.mb-3
                  p.mb-0 PEQ (Unidades) =
                .col-lg-7.col-md-8.col-12.mb-3
                  p.mb-0.my-0 Costos fijos (CF)
                  p.mb-2 ___________________________________________________
                  p.mb-0 Precio de venta (PV) - Costo de venta unitario (CVU)
    
    p.mb-4(data-aos="fade-right") En lo que respecta a la gráfica, el punto de equilibrio se puede representar de la siguiente forma:

    .row.justify-content-center(data-aos="zoom-in-left")(alt="")
      .col-lg-6
        .titulo-sexto.mb-4
          h5 Figura 3.
          | Punto de equilibrio
    .row.justify-content-center(data-aos="zoom-in-left")
      .col-lg-5
        img(src="@/assets/curso/temas/69.svg" alt="El gráfico presenta el punto de equilibrio, donde los ingresos por ventas igualan a los costos totales, ubicándose en 9,009 unidades vendidas. Los costos fijos se mantienen constantes, mientras que los costos variables aumentan con las ventas. A la izquierda del punto de equilibrio, la empresa incurre en pérdidas, y a la derecha, en ganancias. Esto ilustra cómo los costos y los ingresos se relacionan para determinar la viabilidad financiera de un negocio.")

    separador
    #t_5_2.titulo-segundo.color-primario
      h2 5.2 Tasa interna de oportunidad (TIO)
    
    p.mb-4(data-aos="fade-right") El uso de dinero en el tiempo no puede ser gratuito, se debe reconocer una cantidad que sea proporcional a la posible pérdida que se asume, o el pago de un canon por la utilización del dinero, a este valor se le llama interés. Para mayor comprensión se tomará un ejemplo de Meza Orozco, J. D. J. (2011):  
    p.mb-4(data-aos="fade-right") Si se presta hoy una cantidad de dinero (P) y después de un tiempo determinado se recibe una cantidad mayor (F), la variación del valor del dinero de P a F, se llama valor de dinero en el tiempo, y la diferencia entre F y P es el interés (I). La operación se representa mediante la siguiente expresión:  
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-md-9
        .cajon.color-primario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-6
              h2.mb-0.text-center I = F – P

    p.mb-4(data-aos="fade-right") La tasa de interés se expresa como la relación entre lo que se recibe de intereses (I) y la cantidad prestada o invertida (P), esta tasa está expresada en forma porcentual, para un tiempo (n) determinado”.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-md-9
        .cajon.color-primario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-6
              h2.mb-0.text-center i = I/P  x 100

    p.mb-5(data-aos="fade-right") La tasa de oportunidad es la tasa de interés pertinente al costo de oportunidad. También se le puede considerar como la rentabilidad mínima requerida del proyecto de inversión, de acuerdo con el riesgo asumido, que, al ser comparada con el retorno esperado del proyecto, debe cubrir el capital inicial invertido, los costos de la operación, los intereses por pago de endeudamiento con terceros y cumplir con las expectativas de utilidad de los accionistas. 
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/70.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Ejemplo TIO: suponga que la señorita Laura Galindo acostumbra a realizar inversiones en CDT, en los cuales le pagan en promedio el 32% efectivo anual de intereses. (La Tasa de Interés de Oportunidad para esta persona equivaldría a ese mismo 32% efectivo anual en términos corrientes).
    
    
    .row.justify-content-center.align-items-center
      .col-lg-4.mb-3
        p.mb-4 En términos constantes se asumiría la tasa real del inversionista, donde a la tasa de oportunidad se le descuenta la tasa de inflación. 
        p.mb-4 Si la tasa de oportunidad es del 2,5% mensual y la tasa de inflación es del 1,5% mensual. ¿Cuál es la tasa real de oportunidad del inversionista?
      .col-lg-6.mb-3
        .cajon.color-primario.p-5
          h3.mb-3.text-center TR = (TIO - Inflación) / (1 + Inflación)
          h3.mb-3.text-center TR = (0,025-0,015) / (1 + 0,015)
          h3.mb-0.text-center TR = 0,99%
      .col-lg-2.col-md-7.col-7.mb-3
        img(alt="" src="@/assets/curso/temas/71.svg")

    separador
    #t_5_3.titulo-segundo.color-primario
      h2 5.3 Valor Actual Neto (VAN) o Valor Presente Neto (VPN)

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-10.mb-lg-0
        .bloque-texto-f.color-secundario.pt-4.px-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          .row.justify-content-center.align-items-center.mb-2
            .col-lg-11.mb-5.mb-lg-0
              h3.bloque-texto-f__texto(data-aos="fade-left") Es el valor monetario que resulta de restar la suma de los flujos descontados a la inversión inicial.
              .bloque-texto-f__autor.mb-3
                p.mb-0.text-right (Baca Urbina, G., 2013).

    p.mb-4(data-aos="fade-right") Entonces, el Valor Actual Neto (VAN) de un proyecto, se puede definir como el valor obtenido actualizado separadamente para cada año; extrayendo la diferencia entre todas las entradas y salidas de efectivo que suceden durante la vida de un proyecto a una tasa de interés fija predeterminada. También incluye las inversiones las cuales deben ser rescatadas del flujo neto de ingresos y egresos. 
    p.mb-0(data-aos="fade-right") Debe tomarse en cuenta que la tasa de actualización debe ser igual a la tasa de interés pagada por el prestatario y refleja el costo de oportunidad del capital. 
    p.mb-4(data-aos="fade-right") Para determinar el VAN se utiliza el Flujos de Fondos de la empresa. 

    p.mb-4(data-aos="fade-right") La fórmula que se emplea para el cálculo del VAN es la siguiente:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .cajon.color-primario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-md-3.col-3.pe-0
              h3.my-3 VAN =
            .col-lg-1.col-md-2.col-3.pe-0.ps-0.mb-lg-0
              h4.mb-1 #[em t-n]
              h4.mb-0 #[em t-0]
            .col-lg-2.col-md-2.col-3.pe-0.ps-0.mb-lg-0
              h3.my-3 I (t - Et)
            .col-lg-2.col-md-3.col-3.pe-0.ps-0.mb-lg-0
              h4.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1
              h4.mb-0 ________
              h4.mb-0 (1 + i)<sup>#[em n]</sup>
    
    p.mb-4(data-aos="fade-right") De dónde:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .cajon.color-primario.p-4
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-2.col-md-3.col-3.pe-0.ps-0
              h4.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1
              h4.mb-0 ________
              h4.mb-0 (1 + i)<sup>#[em n]</sup>
            .col-lg-5.col-md-6.col-8.pe-0.ps-0
              h4.mb-0 = Factor de actualización
          .row.justify-content-center.align-items-center
            .col-lg-6.col-md-6.col-6
              h4.mb-3.text-center Et = Egresos totales
            .col-lg-6.col-md-6.col-6
              h4.mb-3.text-center It = Ingresos totales
    
    p.mb-4(data-aos="fade-right") Algunas situaciones que se pueden presentar en el análisis del VAN:
    
    .row.justify-content-center.mb-3
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.bg2.p-4
          img.img-a.img-t.mb-4.my-3(src='@/assets/curso/temas/74.svg', alt='tema1')
          p.text-center.mb-5 Si el VAN es positivo (VAN>0), la rentabilidad de la inversión es mayor que la tasa actualizada o de rechazo. En consecuencia, el proyecto se acepta. 
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.bg2.p-4
          img.img-a.img-t.mb-4.my-3(src='@/assets/curso/temas/75.svg', alt='tema1')
          p.text-center.mb-5 Si el VAN es cero (VAN=0), entonces la rentabilidad es igual a la tasa de rechazo, por tanto, el proyecto se considera aceptable. 
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.bg2.p-4
          img.img-a.img-t.mb-4.my-3(src='@/assets/curso/temas/76.svg', alt='tema1')
          p.text-center.mb-5 Si el VAN es negativo (VAN<0), significa que, la rentabilidad se encuentra por debajo de la tasa de rechazo y, en consecuencia, el proyecto debe descartarse. 
    
    
    .row.justify-content-center(data-aos="zoom-in-left")(alt="")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 3.
          | Valor actual neto 
    
    h3.mb-1.text-center VALOR ACTUAL NETO (VAN)
    p.mb-3.text-center (En miles)
    
    .row.justify-content-center(data-aos="zoom-in-left")(alt="").mb-4
      .col-lg-12
        .tabla-a.peq.color-acento-contenido
          table
            thead
              tr
                th AÑO
                th INGRESO
                th EGRESO
                th FLUJO NETO
                th FACTOR
                th VAN
            tbody
              tr
                td.text-center 0
                td.text-center -
                td.text-center -
                td.text-center -
                td.text-center -
                td.text-center (12,845.40)
              tr
                td.text-center 1
                td.text-center 5,322,1
                td.text-center 3,049,9
                td.text-center 2,272,0
                td.text-center 0,840
                td.text-center 1,908,60
              tr
                td.text-center 2
                td.text-center 6386,4
                td.text-center 3,424,4
                td.text-center 2,962,0
                td.text-center 0,706
                td.text-center 2,091,10
              tr
                td.text-center 3
                td.text-center 7,451,0
                td.text-center 3,733,8
                td.text-center 2,717,2
                td.text-center 0,593
                td.text-center 2,204,29
              tr
                td.text-center 4
                td.text-center 7,451,0
                td.text-center 3,733,8
                td.text-center 2,717,2
                td.text-center 0,498
                td.text-center 1,851,16
              tr
                td.text-center 5
                td.text-center 7,451,0
                td.text-center 3,733,8
                td.text-center 2,717,2
                td.text-center 0,149
                td.text-center 1,557,50
              tr
                td.text-center 6
                td.text-center 7,451,0
                td.text-center 3,733,8
                td.text-center 2,717,2
                td.text-center 0,352
                td.text-center 1,308,45
              tr
                td.text-center 7
                td.text-center 7,451,0
                td.text-center 3,733,8
                td.text-center 2,717,2
                td.text-center 0,296
                td.text-center 1,100,00
              tr
                td.text-center 8
                td.text-center 7,451,0
                td.text-center 3,733,8
                td.text-center 2,717,2
                td.text-center 0,248
                td.text-center 921,80
              tr
                td.text-center 9
                td.text-center 7,451,0
                td.text-center 3,733,8
                td.text-center 2,717,2
                td.text-center 0,208
                td.text-center 773,20
              tr
                td.text-center 10
                td.text-center 7,451,0
                td.text-center 3,733,8
                td.text-center 2,717,2
                td.text-center 0,175
                td.text-center 650,50
              tr
                td.text-center 1,521,4
                td.text-center
                td.text-center 
                td.text-center
                td.text-center 
                td.text-center
              tr
                td.text-center 
                td.text-center
                td.text-center 
                td.text-center
                td.text-center 
                td.text-center
    
    p.mb-0(data-aos="fade-right") Para el caso de la tabla anterior, con una tasa de descuento de aproximadamente 19%, el resultado es un VAN positivo, por lo que se acepta la ejecución del proyecto. En el año cero (0) aparece la inversión inicial, y a partir del año 1 los flujos resultaron ser positivos, entonces la suma de todos los flujos se le resta a la inversión inicial de $12,845.4 por ser desembolso, lo que brinda un valor positivo final. 

    separador
    #t_5_4.titulo-segundo.color-primario
      h2 5.4 Tasa Interna de Retorno (TIR)

    p.mb-4(data-aos="fade-right") La tasa interna de retorno se encarga de evaluar la rentabilidad de un proyecto de acuerdo con los flujos de caja para compararla con el costo de capital, es decir, al costo de financiación del proyecto. El costo de capital abarca dos aspectos importantes: los recursos propios y los proporcionados por entidades bancarias.
    p.mb-4(data-aos="fade-right") Al hacer el cálculo de la tasa interna de retorno con los respectivos flujos de caja del proyecto, se obtendrá un valor representado en porcentaje. Del mismo modo, al realizar el cálculo del costo de capital con respecto al patrimonio y a los préstamos bancarios, adquirirá otro valor en porcentaje. Para poder aceptar el proyecto como rentable la tasa interna de retorno debe ser mayor al costo de capital. Por otro lado, el proyecto se rechaza si el costo de capital es mayor o igual a la tasa interna de retorno.
    p.mb-4(data-aos="fade-right") En el siguiente ejemplo, se presenta el flujo de caja:
    
    .row.justify-content-center(data-aos="zoom-in-left")(alt="")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 4.
          | Ejemplo flujo de caja 
    
    .row.justify-content-center(data-aos="zoom-in-left")(alt="").mb-5
      .col-lg-12
        .tabla-a.peq.color-acento-contenido
          table
            thead
              tr
                th Año  
                th Inv. Inicial  
                th Ingresos 
                th Egresos
                th F. Caja
            tbody
              tr
                td.text-center 0
                td.text-center -120.000.000
                td.text-center 
                td.text-center
                td.text-center 
              tr
                td.text-center 1
                td.text-center 
                td.text-center 5.000.000
                td.text-center 1.000.000
                td.text-center -120.000.000
              tr
                td.text-center 2
                td.text-center 
                td.text-center 5.000.000
                td.text-center 1.000.000
                td.text-center 4.000.000
              tr
                td.text-center 3
                td.text-center 
                td.text-center 5.000.000
                td.text-center 1.000.000
                td.text-center 4.000.000
              tr
                td.text-center 4
                td.text-center 
                td.text-center 5.000.000
                td.text-center 1.000.000
                td.text-center 4.000.000
              tr
                td.text-center 5
                td.text-center 
                td.text-center 5.000.000
                td.text-center 1.000.000
                td.text-center 4.000.000
              tr
                td.text-center 6
                td.text-center 
                td.text-center 5.000.000
                td.text-center 1.000.000
                td.text-center 4.000.000
              tr
                td.text-center 7
                td.text-center 
                td.text-center 5.000.000
                td.text-center 1.000.000
                td.text-center 4.000.000
              tr
                td.text-center 8
                td.text-center 
                td.text-center 5.000.000
                td.text-center 1.000.000
                td.text-center 4.000.000
              tr
                td.text-center 9
                td.text-center 
                td.text-center 5.000.000
                td.text-center 1.000.000
                td.text-center 4.000.000
              tr
                td.text-center 10
                td.text-center 
                td.text-center 5.000.000
                td.text-center 1.000.000
                td.text-center 4.000.000
              tr
                td.text-center 11
                td.text-center 
                td.text-center 5.000.000
                td.text-center 1.000.000
                td.text-center 4.000.000
              tr
                td.text-center 12
                td.text-center 
                td.text-center 5.000.000
                td.text-center 1.000.000
                td.text-center 4.000.000
              tr
                td.text-center 13
                td.text-center 
                td.text-center 5.000.000
                td.text-center 1.000.000
                td.text-center 4.000.000
              tr
                td.text-center 14
                td.text-center 
                td.text-center 5.000.000
                td.text-center 1.000.000
                td.text-center 4.000.000
              tr
                td.text-center 15
                td.text-center 
                td.text-center 5.000.000
                td.text-center 1.000.000
                td.text-center 4.000.000
              tr
                td.text-center 16
                td.text-center 
                td.text-center 5.000.000
                td.text-center 1.000.000
                td.text-center 4.000.000
              tr
                td.text-center 17
                td.text-center 
                td.text-center 5.000.000
                td.text-center 1.000.000
                td.text-center 4.000.000
              tr
                td.text-center 18
                td.text-center 
                td.text-center 5.000.000
                td.text-center 1.000.000
                td.text-center 4.000.000
              tr
                td.text-center 19
                td.text-center 
                td.text-center 5.000.000
                td.text-center 1.000.000
                td.text-center 4.000.000
              tr
                td.text-center 20
                td.text-center 
                td.text-center 5.000.000
                td.text-center 1.000.000
                td.text-center 4.000.000
              tr
                td.text-center 21
                td.text-center 
                td.text-center 5.000.000
                td.text-center 1.000.000
                td.text-center 4.000.000
              tr
                td.text-center 22
                td.text-center 
                td.text-center 5.000.000
                td.text-center 1.000.000
                td.text-center 4.000.000
              tr
                td.text-center 23
                td.text-center 
                td.text-center 5.000.000
                td.text-center 1.000.000
                td.text-center 4.000.000
              tr
                td.text-center 24
                td.text-center 
                td.text-center 5.000.000
                td.text-center 1.000.000
                td.text-center 4.000.000
              tr
                td.text-center 
                td.text-center 
                td.text-center 
                td.text-center
                td.text-center 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-md-9.col-9.mb-4.mb-lg-0(data-aos='fade-right')
        img(src='@/assets/curso/temas/77.png', alt='')
      .col-lg-7(data-aos='fade-left')
        .tarjeta.bg3.p-4
          SlyderA
            .row.justify-content-center
              .col-md-11
                .tarjeta.tarjeta--blanca.p-5
                  .row.justify-content-center.align-items-center
                    .col-lg-12
                      p.mb-4 1. En un archivo de Excel, se ubica la opción fórmulas financieras y se escoge la opción TIR. Para poder obtener el porcentaje requerido se debe arrastrar desde el periodo 0 hasta el periodo 24. Es diferente del VPN, el cual se hace desde el periodo 1 hasta el 24. 
                      p.mb-0 Se obtiene la siguiente fórmula en Excel: =TIR (Periodo 0: Periodo 24;0)
                      p.mb-0 El resultado de la TIR es: -2 %
            .row.justify-content-center
              .col-md-11
                .tarjeta.tarjeta--blanca.p-5
                  .row.justify-content-center.align-items-center
                    .col-lg-12
                      p.mb-4 2. Cálculo costo de capital: el costo de capital se compone de las siguientes fuentes:
                      p.mb-0 Patrimonio y bancos, de los $120.000.000COP de inversión inicial, $70.000.000 hacen parte de la primera fuente y $50.000.000 forman parte de la segunda fuente. 
            .row.justify-content-center
              .col-md-11
                .tarjeta.tarjeta--blanca.p-5
                  .row.justify-content-center.align-items-center
                    .col-lg-12
                      p.mb-4 3. Más adelante se realiza un ponderado que consiste en dividir cada una de las fuentes sobre el valor total. Por ejemplo: 70.000.000 / 120.000.000 dando como resultado un ponderado de 58,33 %. 
                      p.mb-0 Al realizar el ponderado de la fuente bancos se obtiene lo siguiente: 
                      p.mb-0 50.000.000 / 120.000.000 = 41,67 %
            .row.justify-content-center
              .col-md-11
                .tarjeta.tarjeta--blanca.p-5
                  .row.justify-content-center.align-items-center
                    .col-lg-12
                      p.mb-0 4. Luego se obtiene el valor del costo, para la fuente patrimonio este equivale a la TMRR, en este caso es 2,1791 % y para la fuente bancos, el costo equivale a la tasa de interés, en este caso sería de 1,70 %
            .row.justify-content-center
              .col-md-11
                .tarjeta.tarjeta--blanca.p-5
                  .row.justify-content-center.align-items-center
                    .col-lg-12
                      p.mb-0 5. La acción final para llegar a la obtención del costo de capital consiste en una multiplicación del valor ponderado y del costo de cada una de las fuentes. De esta manera, queda un costo de capital para la fuente patrimonio equivalente a 1,2711 % y para la fuente bancos queda un costo equivalente a 0,71 %. Del mismo modo, se suman los dos porcentajes de las dos fuentes respectivas obteniendo un resultado de 1,9795 %, el cual equivale al costo de capital. 
            .row.justify-content-center
              .col-md-11
                .tarjeta.tarjeta--blanca.p-5
                  .row.justify-content-center.align-items-center
                    .col-lg-12
                      p.mb-0 6. Para concluir, se comparan los dos porcentajes: la TIR y el costo de capital, en este caso serían -2 % y - 1,9795%. Por lo tanto, el proyecto bajo el parámetro TIR no se acepta, debido a que el costo de capital es mayor que la tasa interna de retorno, lo cual genera pérdidas de 3,6926 % durante cada mes que se ejecute el proyecto.
    
    p.mb-4(data-aos="fade-right") Esta tabla presenta el resumen para el cálculo del costo de capital.

    .row.justify-content-center(data-aos="zoom-in-left")(alt="")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 5.
          | Cálculo del costo de capital
    
    .row.justify-content-center(data-aos="zoom-in-left")(alt="").mb-4
      .col-lg-12
        .tabla-a.peq.color-acento-contenido
          table
            thead
              tr
                th Fuentes 
                th Valor     
                th Ponderado 
                th Costo
                th Costo de capital
            tbody
              tr
                td.ps-4
                  p.mb-0 Patrimonio
                  p.mb-0 Bancos   
                  p.mb-0 Total 
                  p.mb-0 &nbsp;
                td.ps-4
                  p.mb-0 70.000.000
                  p.mb-0 50.000.000  
                  p.mb-0 120.000.000
                  p.mb-0 &nbsp;
                td.ps-4
                  p.mb-0 58,33 %
                  p.mb-0 41,67 %  
                  p.mb-0 &nbsp;
                  p.mb-0 &nbsp;
                td.ps-4
                  p.mb-0 2,1791 % 
                  p.mb-0 1,70 %
                  p.mb-0 1,9795 %  
                  p.mb-0 PER/GAN % 
                td.ps-4
                  p.mb-0 1,2711 %
                  p.mb-0 0,71 %
                  p.mb-0 &nbsp;
                  p.mb-0 -3,6926 % 


    p.mb-0(data-aos="fade-right") Tanto el VPN como la TIR, deben ser positivos para aceptar el proyecto, con el fin de asegurar su viabilidad en el futuro, por eso se debe ser muy preciso y consciente en el manejo de cada uno de los datos, para que se obtengan resultados válidos que permitan guiar eficazmente un proyecto.


</template>

<script>
export default {
  name: 'Tema5',
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
