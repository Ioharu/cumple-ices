"use strict";

const CUMPLEANIOS_ICES = [
  {
    "nombre": "Paola",
    "apellido": "Pagliero",
    "dia": 5,
    "mes": 1,
    "curso": "Profe",
    "apodo": "Pagliero, Paola",
    "mensaje": "Hoy el calendario se detiene un segundo en Paola. Que este cumpleaños se sienta verdaderamente tuyo. Ojalá este nuevo ciclo traiga oportunidades que hoy todavía ni imaginás."
  },
  {
    "nombre": "Verónica",
    "apellido": "González",
    "dia": 13,
    "mes": 1,
    "curso": "Profe",
    "apodo": "González, Verónica",
    "mensaje": "Verónica, ojalá puedas hacer de esta fecha algo bien tuyo; que recibas abrazos, mensajes y gestos que valgan la pena. Que cada mes próximo tenga al menos una razón especial para entusiasmarte."
  },
  {
    "nombre": "María Verónica",
    "apellido": "Ércola",
    "dia": 20,
    "mes": 1,
    "curso": "Profe",
    "apodo": "Ércola, María Verónica",
    "mensaje": "Hoy vale bajar un cambio, María Verónica. Este día puede convertirse en un recuerdo muy lindo. Ojalá que el día tenga una mezcla justa de alegría y tranquilidad. Que el próximo año personal tenga equilibrio entre sueños por cumplir y momentos para disfrutar."
  },
  {
    "nombre": "Juan C.",
    "apellido": "Arro",
    "dia": 10,
    "mes": 2,
    "curso": "Profe",
    "apodo": "Arro, Juan C.",
    "mensaje": "Hoy se enciende una velita más para Juan C. Que tengas razones de sobra para mirar el día con una sonrisa. Desde el ICES celebramos esta fecha con vos. Deseamos que esta nueva vuelta te encuentre con ganas de descubrir, crear y disfrutar."
  },
  {
    "nombre": "Jésica",
    "apellido": "Stirnemann",
    "dia": 13,
    "mes": 2,
    "curso": "Profe",
    "apodo": "Stirnemann, Jésica",
    "mensaje": "Para celebrar a Jésica, nada complicado: que no falte una buena anécdota para contar después. Deseamos que esta nueva etapa sume historias que algún día te encante volver a contar."
  },
  {
    "nombre": "Lorena",
    "apellido": "Martino",
    "dia": 22,
    "mes": 2,
    "curso": "Profe",
    "apodo": "Martino, Lorena",
    "mensaje": "Un saludo grande para Lorena. Hoy toca recibir saludos y disfrutar cada uno; por eso, que haya tiempo para compartir y también para descansar. Que el camino de los próximos meses tenga buenas noticias y alguna sorpresa memorable."
  },
  {
    "nombre": "Alejandra",
    "apellido": "González Godoy",
    "dia": 23,
    "mes": 2,
    "curso": "Profe",
    "apodo": "González Godoy, Alejandra",
    "mensaje": "Que esta fecha encuentre espacio para lo que te hace bien, Alejandra. La idea para hoy es simple: que el festejo deje recuerdos de esos que vuelven con una sonrisa. Y que el año que empieza venga con proyectos que entusiasmen y caminos interesantes por recorrer."
  },
  {
    "nombre": "Manuel",
    "apellido": "Scotta",
    "dia": 2,
    "mes": 3,
    "curso": "Profe",
    "apodo": "Scotta, Manuel",
    "mensaje": "Si hoy hubiera una sola recomendación para Manuel, sería esta: que aparezcan pequeñas sorpresas capaces de alegrarte el día. Toda la comunidad del ICES te desea una jornada muy linda. Ojalá los siguientes meses tengan ese equilibrio raro y lindo entre sorpresa y tranquilidad."
  },
  {
    "nombre": "José I.",
    "apellido": "Cagide",
    "dia": 11,
    "mes": 3,
    "curso": "Profe",
    "apodo": "Cagide, José I.",
    "mensaje": "Para José I.: que este cumpleaños traiga un día tranquilo, alegre y lleno de buenos momentos. Ojalá esta nueva vuelta venga con proyectos interesantes, encuentros valiosos y muchas razones para disfrutar lo que vaya llegando."
  },
  {
    "nombre": "Sebastián",
    "apellido": "Lescano",
    "dia": 12,
    "mes": 3,
    "curso": "Profe",
    "apodo": "Lescano, Sebastián",
    "mensaje": "El saludo de hoy lleva nombre: Sebastián. Que el festejo tenga esa espontaneidad que hace todo más divertido. Que esta etapa nueva venga con buenas decisiones, aprendizajes útiles y alegría compartida."
  },
  {
    "nombre": "ICES",
    "apellido": "Escuela",
    "dia": 15,
    "mes": 3,
    "curso": "Profe",
    "apodo": "Escuela",
    "mensaje": "¡Feliz aniversario, ICES! Hoy celebramos una historia construida entre estudiantes, docentes, familias y tantas personas que forman parte de la comunidad. Que sigamos sumando aprendizajes, encuentros y recuerdos que hagan crecer a nuestra escuela."
  },
  {
    "nombre": "Laura",
    "apellido": "Staiger",
    "dia": 24,
    "mes": 3,
    "curso": "Profe",
    "apodo": "Staiger, Laura",
    "mensaje": "Esta fecha llega con un motivo extra para sonreír. Con ese espíritu, Laura, esperamos que el día termine mejor de lo que empezó. Ojalá el próximo cumpleaños te encuentre recordando un año lleno de momentos que valieron la pena."
  },
  {
    "nombre": "Caren",
    "apellido": "Rafael",
    "dia": 25,
    "mes": 3,
    "curso": "Profe",
    "apodo": "Rafael, Caren",
    "mensaje": "Hay días que se sienten distintos desde temprano. Para vos, Caren, deseamos que el festejo tenga esa espontaneidad que hace todo más divertido. Deseamos que los meses siguientes dejen más sonrisas que preocupaciones y más recuerdos que pendientes."
  },
  {
    "nombre": "Sol",
    "apellido": "Graffione",
    "dia": 28,
    "mes": 3,
    "curso": "Profe",
    "apodo": "Graffione, Sol",
    "mensaje": "Para celebrar a Sol, nada complicado: que puedas quedarte con varios recuerdos lindos. Que lo que viene tenga nuevos comienzos, avances importantes y mucho para celebrar."
  },
  {
    "nombre": "María Victoria",
    "apellido": "Bonzi",
    "dia": 1,
    "mes": 4,
    "curso": "Profe",
    "apodo": "Bonzi, María Victoria",
    "mensaje": "Que este mensaje llegue justo a tiempo, María Victoria. que sobren las sonrisas sinceras. Que la próxima vuelta al calendario venga con desafíos que te hagan crecer y descansos que te permitan disfrutarlos."
  },
  {
    "nombre": "Silvia",
    "apellido": "Burgard",
    "dia": 5,
    "mes": 4,
    "curso": "Profe",
    "apodo": "Burgard, Silvia",
    "mensaje": "Que el cumpleaños encuentre lugar entre risas y buenos momentos. Y como hoy el festejo es para Silvia, ojalá que hoy te acompañe una energía especialmente buena. En el ICES también queremos ser parte de este festejo. Ojalá cada estación de este nuevo año te encuentre con algo bueno entre manos."
  },
  {
    "nombre": "Evangelina",
    "apellido": "Vidal",
    "dia": 17,
    "mes": 4,
    "curso": "Profe",
    "apodo": "Vidal, Evangelina",
    "mensaje": "Que el día empiece con energía linda. Así que, Evangelina, hacé lugar para el festejo y para todo lo bueno que aparezca. Deseamos un año con espacio para aprender, compartir, equivocarse, volver a intentar y disfrutar."
  },
  {
    "nombre": "Virginia",
    "apellido": "Cresta",
    "dia": 17,
    "mes": 4,
    "curso": "Profe",
    "apodo": "Cresta, Virginia",
    "mensaje": "Virginia, la fecha ya hizo su parte y llegó; ahora toca que el día se arme con buenos momentos, aunque no estén planeados. Que lo que viene sume experiencias valiosas, encuentros lindos y metas que hagan ilusión."
  },
  {
    "nombre": "Julián",
    "apellido": "Casale",
    "dia": 27,
    "mes": 4,
    "curso": "Profe",
    "apodo": "Casale, Julián",
    "mensaje": "Hay días que se sienten distintos desde temprano. Y para Julián, que este día sea la puerta de entrada a una etapa muy buena. Que los próximos meses te traigan ideas nuevas, buenos encuentros y metas alcanzables."
  },
  {
    "nombre": "Milena",
    "apellido": "Cipolatti",
    "dia": 30,
    "mes": 4,
    "curso": "Profe",
    "apodo": "Cipolatti, Milena",
    "mensaje": "Que esta fecha se llene de momentos que hagan bien. Así que, Milena, hacé lugar para el festejo y para todo lo bueno que aparezca. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Estefanía",
    "apellido": "Montu",
    "dia": 3,
    "mes": 5,
    "curso": "Profe",
    "apodo": "Montu, Estefanía",
    "mensaje": "Un cumpleaños no necesita grandes discursos, Estefanía. Alcanza con desear que el festejo encuentre su mejor momento cuando menos lo esperes. Que esta vuelta nueva te deje crecer a tu ritmo y disfrutar el camino mientras tanto."
  },
  {
    "nombre": "Ivana",
    "apellido": "Ducks",
    "dia": 6,
    "mes": 5,
    "curso": "Profe",
    "apodo": "Ducks, Ivana",
    "mensaje": "El saludo de hoy lleva nombre: Ivana. Que no haya apuro y sí muchas ganas de celebrar. Ojalá los meses que siguen estén llenos de razones para sentir orgullo por lo recorrido."
  },
  {
    "nombre": "Mónica",
    "apellido": "Ojeda",
    "dia": 6,
    "mes": 5,
    "curso": "Profe",
    "apodo": "Ojeda, Mónica",
    "mensaje": "Mónica, que el cumpleaños venga sin apuro. que tengas un rato especial para vos. Que el año que comienza tenga momentos de calma, otros de emoción y muchos de aprendizaje."
  },
  {
    "nombre": "Tomás",
    "apellido": "Franchino",
    "dia": 9,
    "mes": 5,
    "curso": "Profe",
    "apodo": "Franchino, Tomás",
    "mensaje": "Hoy suma una página nueva a tu historia. En esta ocasión, Tomás, te deseamos especialmente que el día esté lleno de gestos simples y sinceros. Que lo próximo te encuentre rodeado de buenas personas y de proyectos con sentido."
  },
  {
    "nombre": "Lucía",
    "apellido": "Culasso",
    "dia": 22,
    "mes": 5,
    "curso": "Profe",
    "apodo": "Culasso, Lucía",
    "mensaje": "Este mensaje tiene destinatario claro: Lucía. Este cumpleaños abre una nueva vuelta llena de posibilidades y, sobre todo, que no falte una buena anécdota para contar después. Ojalá esta vuelta nueva te acerque a proyectos que te den ganas de ponerles toda la energía."
  },
  {
    "nombre": "Lucía",
    "apellido": "Romagnoli",
    "dia": 4,
    "mes": 6,
    "curso": "Profe",
    "apodo": "Romagnoli, Lucía",
    "mensaje": "Hay días que se sienten distintos desde temprano, Lucía. La idea para hoy es simple: que alguna sorpresa linda se cuele entre las horas. Deseamos que lo que viene esté lleno de pequeñas conquistas que, juntas, hagan una gran diferencia."
  },
  {
    "nombre": "Luciana",
    "apellido": "Genovesio",
    "dia": 10,
    "mes": 6,
    "curso": "Profe",
    "apodo": "Genovesio, Luciana",
    "mensaje": "Que esta fecha se llene de momentos que hagan bien. Que para Luciana eso se traduzca en algo concreto: que puedas quedarte con varios recuerdos lindos. Que la nueva vuelta tenga proyectos propios, desafíos interesantes y pausas necesarias."
  },
  {
    "nombre": "Wanda",
    "apellido": "Llull",
    "dia": 18,
    "mes": 6,
    "curso": "Profe",
    "apodo": "Llull, Wanda",
    "mensaje": "Wanda, hoy queremos desearte algo sencillo: que el cumpleaños se convierta en una excusa perfecta para disfrutar. Deseamos que el año que comienza tenga suficientes motivos para celebrar incluso los avances pequeños."
  },
  {
    "nombre": "José",
    "apellido": "Galli",
    "dia": 18,
    "mes": 6,
    "curso": "Profe",
    "apodo": "Galli, José",
    "mensaje": "José, que el festejo tenga espacio para lo espontáneo; que la buena energía encuentre la forma de quedarse. Que el año nuevo en tu calendario personal tenga capítulos muy distintos, pero todos valiosos."
  },
  {
    "nombre": "Marcos",
    "apellido": "Foss",
    "dia": 24,
    "mes": 6,
    "curso": "Profe",
    "apodo": "Foss, Marcos",
    "mensaje": "Marcos, ojalá puedas hacer de esta fecha algo bien tuyo; que el día termine mejor de lo que empezó. Que lo que siga esté lleno de experiencias que sumen y personas que hagan bien."
  },
  {
    "nombre": "Andrea",
    "apellido": "Aguirre",
    "dia": 25,
    "mes": 6,
    "curso": "Profe",
    "apodo": "Aguirre, Andrea",
    "mensaje": "Andrea, hoy queremos desearte algo sencillo: que la fecha traiga encuentros que valgan la pena. Deseamos que encuentres oportunidades para crecer, probar cosas nuevas y celebrar cada avance."
  },
  {
    "nombre": "María Alejandra",
    "apellido": "Lionetto",
    "dia": 17,
    "mes": 7,
    "curso": "Profe",
    "apodo": "Lionetto, María Alejandra",
    "mensaje": "Que quede anotado: hoy celebra María Alejandra. que no haya apuro y sí muchas ganas de celebrar. Que lo próximo combine momentos tranquilos con aventuras que valga la pena contar."
  },
  {
    "nombre": "Melina",
    "apellido": "Arnese",
    "dia": 6,
    "mes": 8,
    "curso": "Profe",
    "apodo": "Arnese, Melina",
    "mensaje": "Melina, que haya tiempo para compartir y también para descansar. Hoy toca recibir saludos y disfrutar cada uno; después de todo, una fecha así lo merece. Ojalá este nuevo año te regale perspectivas nuevas y momentos que valgan mucho."
  },
  {
    "nombre": "Selene",
    "apellido": "Iribas",
    "dia": 6,
    "mes": 8,
    "curso": "Profe",
    "apodo": "Iribas, Selene",
    "mensaje": "Esta fecha llega con un motivo extra para sonreír. Y para Selene, que este día sea la puerta de entrada a una etapa muy buena. Que el saludo del ICES se sume a todos los que recibas hoy. Que esta vuelta tenga espacio para nuevas amistades, aprendizajes y decisiones que te acerquen a lo que querés."
  },
  {
    "nombre": "Gabriela",
    "apellido": "De Marco",
    "dia": 10,
    "mes": 8,
    "curso": "Profe",
    "apodo": "De Marco, Gabriela",
    "mensaje": "Una nueva vuelta para Gabriela. Hoy todo puede tener un pequeño toque de festejo. Que puedas decir al final del día que valió la pena, y que puedas disfrutar sin estar mirando el reloj. Que el camino de los próximos meses tenga buenas noticias y alguna sorpresa memorable."
  },
  {
    "nombre": "Gabriela",
    "apellido": "Barra",
    "dia": 28,
    "mes": 8,
    "curso": "Profe",
    "apodo": "Barra, Gabriela",
    "mensaje": "Que este mensaje llegue justo a tiempo, Gabriela. que el día esté lleno de gestos simples y sinceros. Que lo que viene te permita mirar hacia adelante con curiosidad y hacia atrás con satisfacción."
  },
  {
    "nombre": "Gabriel",
    "apellido": "Fioritto",
    "dia": 3,
    "mes": 9,
    "curso": "Profe",
    "apodo": "Fioritto, Gabriel",
    "mensaje": "Gabriel, feliz cumpleaños. Hoy hay una razón sencilla y enorme para brindar. Ojalá que haya tiempo para compartir y también para descansar. Deseamos un año que deje huella por las experiencias, no por la velocidad con que pase."
  },
  {
    "nombre": "Vanesa",
    "apellido": "Cipolatti",
    "dia": 8,
    "mes": 9,
    "curso": "Profe",
    "apodo": "Cipolatti, Vanesa",
    "mensaje": "Hoy todo puede tener un pequeño toque de festejo. Que para Vanesa eso se traduzca en algo concreto: que el festejo deje recuerdos de esos que vuelven con una sonrisa. Desde el ICES va un abrazo enorme para este día. Que lo que viene sume experiencias valiosas, encuentros lindos y metas que hagan ilusión."
  },
  {
    "nombre": "Valentina",
    "apellido": "Ribotta",
    "dia": 10,
    "mes": 9,
    "curso": "Profe",
    "apodo": "Ribotta, Valentina",
    "mensaje": "Valentina, que el cariño se note en cada detalle. Que la fecha traiga afecto, calma y alegría; después de todo, una fecha así lo merece. Que este saludo del ICES llegue como un pequeño detalle más de tu día. Que la nueva vuelta tenga proyectos propios, desafíos interesantes y pausas necesarias."
  },
  {
    "nombre": "Paola",
    "apellido": "Bolatti",
    "dia": 20,
    "mes": 10,
    "curso": "Profe",
    "apodo": "Bolatti, Paola",
    "mensaje": "Que este día tenga algo de inesperado y mucho de alegría, Paola. La idea para hoy es simple: que puedas quedarte con varios recuerdos lindos. Toda la comunidad del ICES te desea una jornada muy linda. Que el camino de los próximos meses tenga buenas noticias y alguna sorpresa memorable."
  },
  {
    "nombre": "Laura",
    "apellido": "Tobares",
    "dia": 3,
    "mes": 11,
    "curso": "Profe",
    "apodo": "Tobares, Laura",
    "mensaje": "Un día, una fecha y una razón para celebrar a Laura. Que puedas disfrutar sin estar mirando el reloj. Que los próximos meses traigan aprendizajes, oportunidades y muchas historias para guardar."
  },
  {
    "nombre": "Mario",
    "apellido": "Soria",
    "dia": 5,
    "mes": 11,
    "curso": "Profe",
    "apodo": "Soria, Mario",
    "mensaje": "Que el día venga con buenas sorpresas. Que para Mario eso se traduzca en algo concreto: que la jornada se llene de esas cosas pequeñas que hacen bien. Desde el ICES te acompañamos con un saludo grande. Que el próximo año personal tenga equilibrio entre sueños por cumplir y momentos para disfrutar."
  },
  {
    "nombre": "Facundo",
    "apellido": "Scarafia",
    "dia": 13,
    "mes": 11,
    "curso": "Profe",
    "apodo": "Scarafia, Facundo",
    "mensaje": "Hoy hay permiso para hacer del día algo distinto. Facundo, aprovechá la fecha para disfrutar lo que ya está y entusiasmarte con lo que sigue. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Micaela",
    "apellido": "Rambaudo",
    "dia": 6,
    "mes": 12,
    "curso": "Profe",
    "apodo": "Rambaudo, Micaela",
    "mensaje": "Un día, una fecha y una razón para celebrar a Micaela. Que puedas compartir la fecha con personas que suman. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Daniela",
    "apellido": "Marengo",
    "dia": 18,
    "mes": 12,
    "curso": "Profe",
    "apodo": "Marengo, Daniela",
    "mensaje": "Daniela, que hoy te acompañe una energía especialmente buena. El día de hoy tiene un nombre propio y un motivo de festejo; después de todo, una fecha así lo merece. Hoy también desde el ICES hay un motivo para saludarte. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Cecilia",
    "apellido": "Vera Candiotti",
    "dia": 23,
    "mes": 12,
    "curso": "Profe",
    "apodo": "Vera Candiotti, Cecilia",
    "mensaje": "Cecilia, que la alegría del cumpleaños aparezca en los detalles: que todo lo cotidiano hoy se sienta un poco más festivo. Que esta etapa te permita sumar experiencias sin perder de vista todo lo bueno que ya construiste."
  },
  {
    "nombre": "Silvina",
    "apellido": "Pérez",
    "dia": 29,
    "mes": 12,
    "curso": "Profe",
    "apodo": "Pérez, Silvina",
    "mensaje": "Un saludo grande para Silvina. Esta fecha llega con un motivo extra para sonreír; por eso, que la jornada se llene de esas cosas pequeñas que hacen bien. Ojalá este nuevo año te regale perspectivas nuevas y momentos que valgan mucho."
  },
  {
    "nombre": "Guillermo Bautista",
    "apellido": "Alberto",
    "dia": 21,
    "mes": 2,
    "curso": "1º Solidaridad",
    "apodo": "Guille",
    "mensaje": "Para celebrar a Guille, nada complicado: que aparezcan motivos nuevos para agradecer. En 1º Solidaridad, hoy hay un motivo extra para sumar un saludo. Que esta vuelta nueva te deje crecer a tu ritmo y disfrutar el camino mientras tanto."
  },
  {
    "nombre": "Gino Jesús",
    "apellido": "Balderrama",
    "dia": 25,
    "mes": 12,
    "curso": "1º Solidaridad",
    "apodo": "Gino",
    "mensaje": "A Gino le toca hoy recibir los saludos. Que la celebración llegue con buena compañía; ojalá que el día se arme con buenos momentos, aunque no estén planeados. Ojalá esta nueva etapa tenga desafíos que motiven y momentos que den ganas de repetir."
  },
  {
    "nombre": "Leandro",
    "apellido": "Beltramo",
    "dia": 20,
    "mes": 4,
    "curso": "1º Solidaridad",
    "apodo": "Lean",
    "mensaje": "Hay días que se sienten distintos desde temprano. Lean, aprovechá la fecha para disfrutar lo que ya está y entusiasmarte con lo que sigue. Esta fecha le agrega un pequeño festejo al día de 1º Solidaridad. Ojalá esta nueva etapa tenga desafíos que motiven y momentos que den ganas de repetir."
  },
  {
    "nombre": "Bruno",
    "apellido": "Bergese",
    "dia": 5,
    "mes": 2,
    "curso": "1º Solidaridad",
    "apodo": "Bruno",
    "mensaje": "Que este día tenga algo de inesperado y mucho de alegría. Bruno, que esa sea la primera de muchas buenas cosas de esta nueva vuelta. Hoy 1º Solidaridad comparte un motivo para celebrar con vos. Ojalá este nuevo año te regale perspectivas nuevas y momentos que valgan mucho."
  },
  {
    "nombre": "Ornella",
    "apellido": "Berrone",
    "dia": 13,
    "mes": 6,
    "curso": "1º Solidaridad",
    "apodo": "Orne",
    "mensaje": "Un día, una fecha y una razón para celebrar a Orne. Que el día termine mejor de lo que empezó. En 1º Solidaridad, la fecha de hoy no debería pasar desapercibida. Que cada mes próximo tenga al menos una razón especial para entusiasmarte."
  },
  {
    "nombre": "Isabella",
    "apellido": "Bosco",
    "dia": 23,
    "mes": 11,
    "curso": "1º Solidaridad",
    "apodo": "Isabella",
    "mensaje": "Para Isabella, un deseo especial en este cumpleaños: que recibas abrazos, mensajes y gestos que valgan la pena. Hoy todo puede tener un pequeño toque de festejo. Hoy 1º Solidaridad tiene una fecha especial marcada en el calendario. Deseamos un año con espacio para aprender, compartir, equivocarse, volver a intentar y disfrutar."
  },
  {
    "nombre": "Sofía",
    "apellido": "Cipolatti",
    "dia": 11,
    "mes": 10,
    "curso": "1º Solidaridad",
    "apodo": "Sofía",
    "mensaje": "El día de hoy tiene un nombre propio y un motivo de festejo. Para vos, Sofía, deseamos que haya tiempo para compartir y también para descansar. Que entre las actividades de 1º Solidaridad también haya un rato para festejar. Que el año que comienza tenga momentos de calma, otros de emoción y muchos de aprendizaje."
  },
  {
    "nombre": "Thiago",
    "apellido": "Díaz",
    "dia": 15,
    "mes": 8,
    "curso": "1º Solidaridad",
    "apodo": "Cabri",
    "mensaje": "Hoy vale bajar un cambio, Cabri. Hoy el protagonismo está más que justificado. Ojalá que tengas razones de sobra para mirar el día con una sonrisa. Que entre las actividades de 1º Solidaridad también haya un rato para festejar. Deseamos un año que deje huella por las experiencias, no por la velocidad con que pase."
  },
  {
    "nombre": "Tiziano",
    "apellido": "Fauda",
    "dia": 6,
    "mes": 12,
    "curso": "1º Solidaridad",
    "apodo": "Tizi",
    "mensaje": "Tizi, que hoy te acompañe una energía especialmente buena. Hoy el protagonismo está más que justificado; después de todo, una fecha así lo merece. Esta fecha le agrega un pequeño festejo al día de 1º Solidaridad. Ojalá los siguientes meses tengan ese equilibrio raro y lindo entre sorpresa y tranquilidad."
  },
  {
    "nombre": "Lara",
    "apellido": "Franza",
    "dia": 28,
    "mes": 6,
    "curso": "1º Solidaridad",
    "apodo": "Lari",
    "mensaje": "Que quede anotado: hoy celebra Lari. que puedas cerrar la jornada con la sensación de haberla aprovechado. Ojalá cada estación de este nuevo año te encuentre con algo bueno entre manos."
  },
  {
    "nombre": "Abby Luz",
    "apellido": "Giuliano",
    "dia": 30,
    "mes": 12,
    "curso": "1º Solidaridad",
    "apodo": "Abby",
    "mensaje": "Para celebrar a Abby, nada complicado: que hoy te acompañe una energía especialmente buena. Que desde 1º Solidaridad lleguen también risas, saludos y buenos deseos. Ojalá esta etapa venga con más certezas, menos apuro y muchas cosas lindas para compartir."
  },
  {
    "nombre": "Miqueas Benjamín",
    "apellido": "González",
    "dia": 4,
    "mes": 10,
    "curso": "1º Solidaridad",
    "apodo": "Miqueas",
    "mensaje": "Una nueva vuelta para Miqueas. El calendario marca un día que vale la pena celebrar. Que puedas decir al final del día que valió la pena, y que el festejo encuentre su mejor momento cuando menos lo esperes. Ojalá este nuevo ciclo traiga oportunidades que hoy todavía ni imaginás."
  },
  {
    "nombre": "Delfina",
    "apellido": "Massoni",
    "dia": 19,
    "mes": 9,
    "curso": "1º Solidaridad",
    "apodo": "Delfi",
    "mensaje": "Delfi, feliz cumpleaños. Este día puede convertirse en un recuerdo muy lindo. Ojalá que tengas un rato especial para vos. Deseamos que cada paso de esta nueva vuelta encuentre motivos para seguir adelante con entusiasmo."
  },
  {
    "nombre": "Merlina Pilar",
    "apellido": "Mendoza",
    "dia": 30,
    "mes": 8,
    "curso": "1º Solidaridad",
    "apodo": "Merli",
    "mensaje": "Merli, la fecha ya hizo su parte y llegó; ahora toca que alguna sorpresa linda se cuele entre las horas. Que desde 1º Solidaridad lleguen también risas, saludos y buenos deseos. Deseamos que lo que viene combine tranquilidad, desafíos interesantes y muchas satisfacciones."
  },
  {
    "nombre": "Conrado",
    "apellido": "Navarro",
    "dia": 28,
    "mes": 3,
    "curso": "1º Solidaridad",
    "apodo": "Cani",
    "mensaje": "Que este cumpleaños se sienta verdaderamente tuyo. Para vos, Cani, deseamos que recibas abrazos, mensajes y gestos que valgan la pena. Esta fecha le agrega un pequeño festejo al día de 1º Solidaridad. Ojalá esta etapa venga con más certezas, menos apuro y muchas cosas lindas para compartir."
  },
  {
    "nombre": "Gianluca",
    "apellido": "Polanco Dip",
    "dia": 12,
    "mes": 11,
    "curso": "1º Solidaridad",
    "apodo": "Luca",
    "mensaje": "El saludo de hoy lleva nombre: Luca. Que el día tenga una mezcla justa de alegría y tranquilidad. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Francisco",
    "apellido": "Rubiolo",
    "dia": 9,
    "mes": 7,
    "curso": "1º Solidaridad",
    "apodo": "Fran",
    "mensaje": "Hoy puede ser uno de esos días que quedan en la memoria. En esta ocasión, Fran, te deseamos especialmente que sobren las sonrisas sinceras. Que desde 1º Solidaridad lleguen también risas, saludos y buenos deseos. Que esta etapa te permita sumar experiencias sin perder de vista todo lo bueno que ya construiste."
  },
  {
    "nombre": "Cayetano Pablo",
    "apellido": "Trossero",
    "dia": 7,
    "mes": 3,
    "curso": "1º Solidaridad",
    "apodo": "Caye",
    "mensaje": "Caye, este cumpleaños llega para recordarte que siempre hay algo nuevo por delante. Hoy, que no haya apuro y sí muchas ganas de celebrar. Que entre las actividades de 1º Solidaridad también haya un rato para festejar. Ojalá cada estación de este nuevo año te encuentre con algo bueno entre manos."
  },
  {
    "nombre": "Ainara Belén",
    "apellido": "Vargas Hryareiw",
    "dia": 28,
    "mes": 5,
    "curso": "1º Solidaridad",
    "apodo": "Ainu",
    "mensaje": "A Ainu le toca hoy recibir los saludos. Hoy hay una razón sencilla y enorme para brindar; ojalá que todo lo cotidiano hoy se sienta un poco más festivo. Entre clases y proyectos, que en 1º Solidaridad también se haga lugar para este cumpleaños. Que los próximos meses traigan aprendizajes, oportunidades y muchas historias para guardar."
  },
  {
    "nombre": "Francisca",
    "apellido": "Abatidaga",
    "dia": 8,
    "mes": 6,
    "curso": "1º Empatía",
    "apodo": "Fran",
    "mensaje": "Para Fran, un deseo especial en este cumpleaños: que alguna sorpresa linda se cuele entre las horas. Hoy puede ser uno de esos días que quedan en la memoria. Que esta jornada en 1º Empatía tenga un toque distinto por tu cumpleaños. Deseamos que el año que comienza tenga suficientes motivos para celebrar incluso los avances pequeños."
  },
  {
    "nombre": "Bautista",
    "apellido": "Chiavassa",
    "dia": 1,
    "mes": 5,
    "curso": "1º Empatía",
    "apodo": "Bauti",
    "mensaje": "Esta fecha merece una sonrisa desde el comienzo. Bauti, aprovechá la fecha para disfrutar lo que ya está y entusiasmarte con lo que sigue. Que entre las actividades de 1º Empatía también haya un rato para festejar. Que lo que siga esté lleno de experiencias que sumen y personas que hagan bien."
  },
  {
    "nombre": "Milagros",
    "apellido": "Chopp",
    "dia": 9,
    "mes": 5,
    "curso": "1º Empatía",
    "apodo": "Mili",
    "mensaje": "Hoy toca recibir saludos y disfrutar cada uno. Mili, que la consigna del día sea que el cumpleaños se convierta en una excusa perfecta para disfrutar. Hoy el calendario de 1º Empatía tiene una buena razón para destacarse. Deseamos que encuentres oportunidades para crecer, probar cosas nuevas y celebrar cada avance."
  },
  {
    "nombre": "Isabella",
    "apellido": "Culasso",
    "dia": 16,
    "mes": 1,
    "curso": "1º Empatía",
    "apodo": "Isa",
    "mensaje": "Hoy el calendario se detiene un segundo en Isa. El día de hoy tiene un nombre propio y un motivo de festejo. Que cada mes próximo tenga al menos una razón especial para entusiasmarte."
  },
  {
    "nombre": "Tamara Luz",
    "apellido": "D´eramo",
    "dia": 16,
    "mes": 3,
    "curso": "1º Empatía",
    "apodo": "Tami",
    "mensaje": "Hay un mensaje reservado para Tami: que cada momento tenga algo propio para disfrutar. Ojalá este nuevo año te regale perspectivas nuevas y momentos que valgan mucho."
  },
  {
    "nombre": "Melody",
    "apellido": "Díaz",
    "dia": 1,
    "mes": 7,
    "curso": "1º Empatía",
    "apodo": "Melo",
    "mensaje": "A Melo le toca hoy recibir los saludos. Hoy el protagonismo está más que justificado; ojalá que el día te regale escenas simples pero inolvidables. Hoy el calendario de 1º Empatía tiene una buena razón para destacarse. Deseamos que lo que viene combine tranquilidad, desafíos interesantes y muchas satisfacciones."
  },
  {
    "nombre": "Gaspar",
    "apellido": "Fler",
    "dia": 11,
    "mes": 4,
    "curso": "1º Empatía",
    "apodo": "El topo Fler",
    "mensaje": "Que la celebración llegue con buena compañía. El topo Fler, que la consigna del día sea que el buen ánimo dure mucho más que las velitas. Hoy el calendario de 1º Empatía tiene una buena razón para destacarse. Que esta etapa nueva venga con buenas decisiones, aprendizajes útiles y alegría compartida."
  },
  {
    "nombre": "Lola",
    "apellido": "Guibert",
    "dia": 10,
    "mes": 11,
    "curso": "1º Empatía",
    "apodo": "Loli",
    "mensaje": "Hay un motivo especial para que hoy sea diferente. Así que, Loli, hacé lugar para el festejo y para todo lo bueno que aparezca. Que desde 1º Empatía lleguen también risas, saludos y buenos deseos. Que lo que viene tenga nuevos comienzos, avances importantes y mucho para celebrar."
  },
  {
    "nombre": "Martina",
    "apellido": "Lízete",
    "dia": 30,
    "mes": 6,
    "curso": "1º Empatía",
    "apodo": "Marti",
    "mensaje": "El cumpleaños invita a mirar lo vivido y entusiasmarse con lo que viene. En esta ocasión, Marti, te deseamos especialmente que el festejo encuentre su mejor momento cuando menos lo esperes. Hoy 1º Empatía tiene una fecha especial marcada en el calendario. Que el año nuevo en tu calendario personal tenga capítulos muy distintos, pero todos valiosos."
  },
  {
    "nombre": "Ignacio",
    "apellido": "Marotti",
    "dia": 10,
    "mes": 9,
    "curso": "1º Empatía",
    "apodo": "Nacho",
    "mensaje": "Una nueva vuelta para Nacho. Que el cumpleaños encuentre lugar entre risas y buenos momentos. Que puedas decir al final del día que valió la pena, y que la celebración tenga tu propio estilo. Que desde 1º Empatía lleguen también risas, saludos y buenos deseos. Que cada mes próximo tenga al menos una razón especial para entusiasmarte."
  },
  {
    "nombre": "Francisco Luis",
    "apellido": "Milanesio",
    "dia": 9,
    "mes": 1,
    "curso": "1º Empatía",
    "apodo": "Pancho",
    "mensaje": "Una fecha así merece buenos recuerdos. Pancho, que la consigna del día sea que la celebración tenga más risas que planes. Entre clases y proyectos, que en 1º Empatía también se haga lugar para este cumpleaños. Ojalá esta etapa venga con más certezas, menos apuro y muchas cosas lindas para compartir."
  },
  {
    "nombre": "Lautaro Agustín",
    "apellido": "Monzón",
    "dia": 20,
    "mes": 11,
    "curso": "1º Empatía",
    "apodo": "Monzi",
    "mensaje": "Monzi, la fecha ya hizo su parte y llegó; ahora toca que hoy te acompañe una energía especialmente buena. Que esta jornada en 1º Empatía tenga un toque distinto por tu cumpleaños. Que el camino de los próximos meses tenga buenas noticias y alguna sorpresa memorable."
  },
  {
    "nombre": "Lautaro Benjamín",
    "apellido": "Nicastro",
    "dia": 24,
    "mes": 4,
    "curso": "1º Empatía",
    "apodo": "Lauti",
    "mensaje": "Una nueva vuelta para Lauti. El cumpleaños invita a mirar lo vivido y entusiasmarse con lo que viene. Que puedas decir al final del día que valió la pena, y que puedas disfrutar incluso de los momentos más tranquilos. Que lo que viene sume experiencias valiosas, encuentros lindos y metas que hagan ilusión."
  },
  {
    "nombre": "Ciro",
    "apellido": "Pollini",
    "dia": 27,
    "mes": 5,
    "curso": "1º Empatía",
    "apodo": "Ciro",
    "mensaje": "Un saludo grande para Ciro. Este cumpleaños abre una nueva vuelta llena de posibilidades; por eso, que la buena energía encuentre la forma de quedarse. Entre clases y proyectos, que en 1º Empatía también se haga lugar para este cumpleaños. Que el próximo año personal tenga equilibrio entre sueños por cumplir y momentos para disfrutar."
  },
  {
    "nombre": "Julieta Natalí",
    "apellido": "Ríos",
    "dia": 18,
    "mes": 10,
    "curso": "1º Empatía",
    "apodo": "Juli",
    "mensaje": "Juli, este cumpleaños llega para recordarte que siempre hay algo nuevo por delante. Hoy, que el día te regale escenas simples pero inolvidables. En 1º Empatía, la fecha de hoy no debería pasar desapercibida. Ojalá los meses que siguen estén llenos de razones para sentir orgullo por lo recorrido."
  },
  {
    "nombre": "Clara",
    "apellido": "Torres",
    "dia": 15,
    "mes": 1,
    "curso": "1º Empatía",
    "apodo": "Clari",
    "mensaje": "Este mensaje tiene destinatario claro: Clari. Hoy hay permiso para hacer del día algo distinto y, sobre todo, que cada hora tenga algo que te haga sentir bien. Ojalá cada estación de este nuevo año te encuentre con algo bueno entre manos."
  },
  {
    "nombre": "Renata",
    "apellido": "Turco",
    "dia": 17,
    "mes": 8,
    "curso": "1º Empatía",
    "apodo": "Rena",
    "mensaje": "Este mensaje tiene destinatario claro: Rena. El día de hoy tiene un nombre propio y un motivo de festejo y, sobre todo, que recibas mucho cariño de la gente que te rodea. Que lo que siga esté lleno de experiencias que sumen y personas que hagan bien."
  },
  {
    "nombre": "Julieta Guadalupe",
    "apellido": "Alesso",
    "dia": 24,
    "mes": 10,
    "curso": "2º Empatía",
    "apodo": "Juli Alesso",
    "mensaje": "Juli Alesso, que la celebración tenga tu propio estilo. Hay días que se sienten distintos desde temprano; después de todo, una fecha así lo merece. Que entre las actividades de 2º Empatía también haya un rato para festejar. Que lo que viene tenga nuevos comienzos, avances importantes y mucho para celebrar."
  },
  {
    "nombre": "Dante Manuel",
    "apellido": "Almeyra Torres",
    "dia": 17,
    "mes": 4,
    "curso": "2º Empatía",
    "apodo": "Dante",
    "mensaje": "Esta fecha merece una sonrisa desde el comienzo, Dante. La idea para hoy es simple: que lo disfrutes de principio a fin. En 2º Empatía, la fecha de hoy no debería pasar desapercibida. Deseamos un año que deje huella por las experiencias, no por la velocidad con que pase."
  },
  {
    "nombre": "Aitana",
    "apellido": "Andreu Cerri",
    "dia": 21,
    "mes": 12,
    "curso": "2º Empatía",
    "apodo": "Aiti",
    "mensaje": "Este mensaje tiene destinatario claro: Aiti. Una nueva vuelta empieza justo ahora y, sobre todo, que la celebración tenga tu propio estilo. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Lorenzo",
    "apellido": "Beltramo",
    "dia": 20,
    "mes": 3,
    "curso": "2º Empatía",
    "apodo": "Beltra",
    "mensaje": "Beltra, este cumpleaños llega para recordarte que siempre hay algo nuevo por delante. Hoy, que el cumpleaños se convierta en una excusa perfecta para disfrutar. Esta fecha le agrega un pequeño festejo al día de 2º Empatía. Que el próximo año personal tenga equilibrio entre sueños por cumplir y momentos para disfrutar."
  },
  {
    "nombre": "Juan Manuel",
    "apellido": "Botta",
    "dia": 31,
    "mes": 1,
    "curso": "2º Empatía",
    "apodo": "Botta",
    "mensaje": "Botta, que el cumpleaños venga sin apuro. que cada saludo sume un poquito más de alegría. En 2º Empatía, hoy hay un motivo extra para sumar un saludo. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Ignacio",
    "apellido": "Brun Pontarelli",
    "dia": 17,
    "mes": 2,
    "curso": "2º Empatía",
    "apodo": "Osito",
    "mensaje": "Hoy el calendario se detiene un segundo en Osito. Que la celebración llegue con buena compañía. Esta fecha le agrega un pequeño festejo al día de 2º Empatía. Ojalá este nuevo año te regale perspectivas nuevas y momentos que valgan mucho."
  },
  {
    "nombre": "Paulina",
    "apellido": "Camusso",
    "dia": 21,
    "mes": 3,
    "curso": "2º Empatía",
    "apodo": "Camu",
    "mensaje": "Un saludo grande para Camu. Esta fecha llega con un motivo extra para sonreír; por eso, que recibas abrazos, mensajes y gestos que valgan la pena. Hoy el calendario de 2º Empatía tiene una buena razón para destacarse. Que esta etapa te permita sumar experiencias sin perder de vista todo lo bueno que ya construiste."
  },
  {
    "nombre": "Juana",
    "apellido": "Caravatti",
    "dia": 3,
    "mes": 5,
    "curso": "2º Empatía",
    "apodo": "Juani",
    "mensaje": "Juani, que el festejo tenga espacio para lo espontáneo; que puedas quedarte con varios recuerdos lindos. Que el saludo de 2º Empatía se sume a todos los que lleguen durante el día. Deseamos que esta nueva etapa sume historias que algún día te encante volver a contar."
  },
  {
    "nombre": "Natanael",
    "apellido": "Carniello",
    "dia": 29,
    "mes": 7,
    "curso": "2º Empatía",
    "apodo": "Nata",
    "mensaje": "Hoy todo puede tener un pequeño toque de festejo. Y como hoy el festejo es para Nata, ojalá que lo disfrutes de principio a fin. Deseamos que lo que viene combine tranquilidad, desafíos interesantes y muchas satisfacciones."
  },
  {
    "nombre": "Juana",
    "apellido": "Castellano",
    "dia": 19,
    "mes": 8,
    "curso": "2º Empatía",
    "apodo": "Juana",
    "mensaje": "Juana, ojalá puedas hacer de esta fecha algo bien tuyo; que lo disfrutes de principio a fin. Que entre las actividades de 2º Empatía también haya un rato para festejar. Ojalá este nuevo ciclo traiga oportunidades que hoy todavía ni imaginás."
  },
  {
    "nombre": "Pedro Valentín",
    "apellido": "Cristiani",
    "dia": 23,
    "mes": 11,
    "curso": "2º Empatía",
    "apodo": "Pedrito",
    "mensaje": "Este cumpleaños abre una nueva vuelta llena de posibilidades. Pedrito, que la consigna del día sea que puedas cerrar la jornada con la sensación de haberla aprovechado. Que cada mes próximo tenga al menos una razón especial para entusiasmarte."
  },
  {
    "nombre": "Giovanni",
    "apellido": "Davi",
    "dia": 27,
    "mes": 3,
    "curso": "2º Empatía",
    "apodo": "Gio",
    "mensaje": "Hoy comienza otro año personal para llenar de experiencias. Y como hoy el festejo es para Gio, ojalá que aparezcan motivos nuevos para agradecer. Que desde 2º Empatía lleguen también risas, saludos y buenos deseos. Que lo que viene sume experiencias valiosas, encuentros lindos y metas que hagan ilusión."
  },
  {
    "nombre": "Iris Sofía",
    "apellido": "Davicino Re",
    "dia": 13,
    "mes": 6,
    "curso": "2º Empatía",
    "apodo": "Iris",
    "mensaje": "Una fecha así merece buenos recuerdos. Iris, aprovechá la fecha para disfrutar lo que ya está y entusiasmarte con lo que sigue. En 2º Empatía, la fecha de hoy no debería pasar desapercibida. Ojalá cada estación de este nuevo año te encuentre con algo bueno entre manos."
  },
  {
    "nombre": "Santiago",
    "apellido": "Gilli",
    "dia": 13,
    "mes": 6,
    "curso": "2º Empatía",
    "apodo": "Gilli",
    "mensaje": "Que este cumpleaños se sienta verdaderamente tuyo. Gilli, que la consigna del día sea que haya tiempo para compartir y también para descansar. Hoy 2º Empatía comparte un motivo para celebrar con vos. Que lo que siga esté lleno de experiencias que sumen y personas que hagan bien."
  },
  {
    "nombre": "Guillermina",
    "apellido": "Hernández",
    "dia": 16,
    "mes": 4,
    "curso": "2º Empatía",
    "apodo": "Gui",
    "mensaje": "Para Gui, un deseo especial en este cumpleaños: que la fecha traiga encuentros que valgan la pena. El calendario marca un día que vale la pena celebrar. En 2º Empatía, hoy hay un motivo extra para sumar un saludo. Que el año nuevo en tu calendario personal tenga capítulos muy distintos, pero todos valiosos."
  },
  {
    "nombre": "Máximo",
    "apellido": "Marti Cabral",
    "dia": 5,
    "mes": 9,
    "curso": "2º Empatía",
    "apodo": "Maxi",
    "mensaje": "Maxi, que la alegría del cumpleaños aparezca en los detalles: que aparezcan motivos nuevos para agradecer. En 2º Empatía, la fecha de hoy no debería pasar desapercibida. Que lo que viene tenga nuevos comienzos, avances importantes y mucho para celebrar."
  },
  {
    "nombre": "Antonella",
    "apellido": "Marzialetti",
    "dia": 10,
    "mes": 8,
    "curso": "2º Empatía",
    "apodo": "Anto",
    "mensaje": "El cumpleaños invita a mirar lo vivido y entusiasmarse con lo que viene. Y como hoy el festejo es para Anto, ojalá que el día esté lleno de gestos simples y sinceros. Deseamos que encuentres oportunidades para crecer, probar cosas nuevas y celebrar cada avance."
  },
  {
    "nombre": "Victoria",
    "apellido": "Peiretti",
    "dia": 27,
    "mes": 10,
    "curso": "2º Empatía",
    "apodo": "Vicky",
    "mensaje": "La fecha de hoy viene con espíritu de festejo, Vicky. La idea para hoy es simple: que el buen ánimo dure mucho más que las velitas. En 2º Empatía, la fecha de hoy no debería pasar desapercibida. Ojalá los siguientes meses tengan ese equilibrio raro y lindo entre sorpresa y tranquilidad."
  },
  {
    "nombre": "Joaquín Ezequiel",
    "apellido": "Rollón",
    "dia": 2,
    "mes": 3,
    "curso": "2º Empatía",
    "apodo": "Joaco",
    "mensaje": "Hoy hay una razón sencilla y enorme para brindar, Joaco. La idea para hoy es simple: que el día esté lleno de gestos simples y sinceros. Hoy el calendario de 2º Empatía tiene una buena razón para destacarse. Que lo próximo combine momentos tranquilos con aventuras que valga la pena contar."
  },
  {
    "nombre": "Paulina",
    "apellido": "Torres",
    "dia": 9,
    "mes": 2,
    "curso": "2º Empatía",
    "apodo": "Torres",
    "mensaje": "Torres, que puedas compartir la fecha con personas que suman. Que este cumpleaños se sienta verdaderamente tuyo; después de todo, una fecha así lo merece. Hoy el calendario de 2º Empatía tiene una buena razón para destacarse. Que el camino de los próximos meses tenga buenas noticias y alguna sorpresa memorable."
  },
  {
    "nombre": "Sofía",
    "apellido": "Ugalde",
    "dia": 9,
    "mes": 11,
    "curso": "2º Empatía",
    "apodo": "Sofi Ugalde",
    "mensaje": "Que la fecha traiga afecto, calma y alegría. Sofi Ugalde, que la consigna del día sea que el día tenga una mezcla justa de alegría y tranquilidad. Que entre las actividades de 2º Empatía también haya un rato para festejar. Ojalá el próximo cumpleaños te encuentre recordando un año lleno de momentos que valieron la pena."
  },
  {
    "nombre": "Benjamín Sebastián",
    "apellido": "Vainstub",
    "dia": 21,
    "mes": 12,
    "curso": "2º Empatía",
    "apodo": "Benja",
    "mensaje": "A Benja le toca hoy recibir los saludos. Esta fecha llega con un motivo extra para sonreír; ojalá que puedas compartir la fecha con personas que suman. Esta fecha le agrega un pequeño festejo al día de 2º Empatía. Deseamos que cada paso de esta nueva vuelta encuentre motivos para seguir adelante con entusiasmo."
  },
  {
    "nombre": "Juliana",
    "apellido": "Yschuk",
    "dia": 23,
    "mes": 1,
    "curso": "2º Empatía",
    "apodo": "Juli",
    "mensaje": "Juli, hoy queremos desearte algo sencillo: que tengas un rato especial para vos. Ojalá los siguientes meses tengan ese equilibrio raro y lindo entre sorpresa y tranquilidad."
  },
  {
    "nombre": "Esmeralda",
    "apellido": "Barrios Anaya",
    "dia": 9,
    "mes": 5,
    "curso": "2º Solidaridad",
    "apodo": "Esme",
    "mensaje": "Una nueva vuelta para Esme. Que el día venga con buenas sorpresas. Que puedas decir al final del día que valió la pena, y que el día tenga una mezcla justa de alegría y tranquilidad. Que el cumpleaños se haga sentir también en 2º Solidaridad. Que los próximos meses te traigan ideas nuevas, buenos encuentros y metas alcanzables."
  },
  {
    "nombre": "Valentín Francisco",
    "apellido": "Bértola",
    "dia": 5,
    "mes": 8,
    "curso": "2º Solidaridad",
    "apodo": "Berto",
    "mensaje": "Este mensaje tiene destinatario claro: Berto. Este día puede convertirse en un recuerdo muy lindo y, sobre todo, que el cariño se note en cada detalle. Hoy 2º Solidaridad comparte un motivo para celebrar con vos. Que cada mes próximo tenga al menos una razón especial para entusiasmarte."
  },
  {
    "nombre": "Guadalupe Paz",
    "apellido": "Bonzi",
    "dia": 22,
    "mes": 2,
    "curso": "2º Solidaridad",
    "apodo": "Guada",
    "mensaje": "Hoy el saludo es para Guada: que lo disfrutes de principio a fin. Ojalá esta vuelta nueva te acerque a proyectos que te den ganas de ponerles toda la energía."
  },
  {
    "nombre": "Máximo Augusto",
    "apellido": "Buffa",
    "dia": 13,
    "mes": 12,
    "curso": "2º Solidaridad",
    "apodo": "Buffa",
    "mensaje": "A Buffa le toca hoy recibir los saludos. Una nueva vuelta empieza justo ahora; ojalá que aparezcan motivos nuevos para agradecer. Hoy 2º Solidaridad comparte un motivo para celebrar con vos. Deseamos que lo que viene esté lleno de pequeñas conquistas que, juntas, hagan una gran diferencia."
  },
  {
    "nombre": "Erik",
    "apellido": "Calamari Martínez",
    "dia": 21,
    "mes": 3,
    "curso": "2º Solidaridad",
    "apodo": "Erik",
    "mensaje": "Esta fecha llega con un motivo extra para sonreír, Erik. La idea para hoy es simple: que el día te regale escenas simples pero inolvidables. Ojalá este nuevo ciclo traiga oportunidades que hoy todavía ni imaginás."
  },
  {
    "nombre": "Tomás",
    "apellido": "Chaine",
    "dia": 16,
    "mes": 8,
    "curso": "2º Solidaridad",
    "apodo": "Chaine",
    "mensaje": "Un cumpleaños no necesita grandes discursos, Chaine. Alcanza con desear que todo lo cotidiano hoy se sienta un poco más festivo. En 2º Solidaridad, hoy hay un motivo extra para sumar un saludo. Que la nueva vuelta tenga proyectos propios, desafíos interesantes y pausas necesarias."
  },
  {
    "nombre": "Paula María",
    "apellido": "Chiavassa",
    "dia": 9,
    "mes": 4,
    "curso": "2º Solidaridad",
    "apodo": "Pau",
    "mensaje": "Pau, feliz cumpleaños. Que la celebración llegue con buena compañía. Ojalá que cada momento tenga algo propio para disfrutar. Que lo próximo te encuentre rodeado de buenas personas y de proyectos con sentido."
  },
  {
    "nombre": "Santiago Bruno",
    "apellido": "Coluccini",
    "dia": 22,
    "mes": 7,
    "curso": "2º Solidaridad",
    "apodo": "Santi",
    "mensaje": "Hay un mensaje reservado para Santi: que aparezcan pequeñas sorpresas capaces de alegrarte el día. Hoy 2º Solidaridad tiene una fecha especial marcada en el calendario. Que lo que viene sume experiencias valiosas, encuentros lindos y metas que hagan ilusión."
  },
  {
    "nombre": "Juan Ignacio",
    "apellido": "Daga",
    "dia": 23,
    "mes": 5,
    "curso": "2º Solidaridad",
    "apodo": "Cholo",
    "mensaje": "Cholo, que la fecha traiga encuentros que valgan la pena. Que este día tenga algo de inesperado y mucho de alegría; después de todo, una fecha así lo merece. Entre clases y proyectos, que en 2º Solidaridad también se haga lugar para este cumpleaños. Que lo que viene sume experiencias valiosas, encuentros lindos y metas que hagan ilusión."
  },
  {
    "nombre": "Valentino",
    "apellido": "Davi Cravero",
    "dia": 27,
    "mes": 3,
    "curso": "2º Solidaridad",
    "apodo": "Vale",
    "mensaje": "Este cumpleaños abre una nueva vuelta llena de posibilidades. Vale, que esa sea la primera de muchas buenas cosas de esta nueva vuelta. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Bruno Andrés",
    "apellido": "Garetto Cipolatti",
    "dia": 5,
    "mes": 6,
    "curso": "2º Solidaridad",
    "apodo": "Garetto",
    "mensaje": "Que el día venga con buenas sorpresas. En esta ocasión, Garetto, te deseamos especialmente que cada momento tenga algo propio para disfrutar. Hoy 2º Solidaridad tiene una fecha especial marcada en el calendario. Ojalá cada estación de este nuevo año te encuentre con algo bueno entre manos."
  },
  {
    "nombre": "Delfina Luz",
    "apellido": "Ghione",
    "dia": 10,
    "mes": 1,
    "curso": "2º Solidaridad",
    "apodo": "Delfi",
    "mensaje": "Hoy vale bajar un cambio, Delfi. Hoy hay permiso para hacer del día algo distinto. Ojalá que la jornada se llene de esas cosas pequeñas que hacen bien. Hoy el calendario de 2º Solidaridad tiene una buena razón para destacarse. Ojalá esta nueva etapa tenga desafíos que motiven y momentos que den ganas de repetir."
  },
  {
    "nombre": "Lorenzo",
    "apellido": "Gil",
    "dia": 18,
    "mes": 11,
    "curso": "2º Solidaridad",
    "apodo": "Lolo",
    "mensaje": "A Lolo le toca hoy recibir los saludos. Que este cumpleaños se sienta verdaderamente tuyo; ojalá que aparezcan motivos nuevos para agradecer. Que entre las actividades de 2º Solidaridad también haya un rato para festejar. Que la nueva vuelta tenga proyectos propios, desafíos interesantes y pausas necesarias."
  },
  {
    "nombre": "Miguel",
    "apellido": "Giovenale",
    "dia": 31,
    "mes": 3,
    "curso": "2º Solidaridad",
    "apodo": "Migue",
    "mensaje": "Migue, ojalá puedas hacer de esta fecha algo bien tuyo; que el festejo encuentre su mejor momento cuando menos lo esperes. Entre clases y proyectos, que en 2º Solidaridad también se haga lugar para este cumpleaños. Ojalá los siguientes meses tengan ese equilibrio raro y lindo entre sorpresa y tranquilidad."
  },
  {
    "nombre": "Lucía",
    "apellido": "Guisasola",
    "dia": 11,
    "mes": 10,
    "curso": "2º Solidaridad",
    "apodo": "Luci",
    "mensaje": "Luci, que tengas razones de sobra para mirar el día con una sonrisa. Hoy se abre un año nuevo en tu propio calendario; después de todo, una fecha así lo merece. Ojalá este nuevo ciclo traiga oportunidades que hoy todavía ni imaginás."
  },
  {
    "nombre": "Victoria",
    "apellido": "Imhoff Novelli",
    "dia": 11,
    "mes": 8,
    "curso": "2º Solidaridad",
    "apodo": "Vicky",
    "mensaje": "Una nueva vuelta para Vicky. Hoy puede ser uno de esos días que quedan en la memoria. Que puedas decir al final del día que valió la pena, y que la celebración tenga más risas que planes. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Esteban",
    "apellido": "Marotti",
    "dia": 23,
    "mes": 2,
    "curso": "2º Solidaridad",
    "apodo": "Esteban",
    "mensaje": "Una nueva vuelta para Esteban. Que esta fecha se llene de momentos que hagan bien. Que puedas decir al final del día que valió la pena, y que recibas abrazos, mensajes y gestos que valgan la pena. Que lo próximo combine momentos tranquilos con aventuras que valga la pena contar."
  },
  {
    "nombre": "Martín",
    "apellido": "Milanesio",
    "dia": 17,
    "mes": 10,
    "curso": "2º Solidaridad",
    "apodo": "Tincho",
    "mensaje": "Que esta jornada tenga un ritmo especial. Para vos, Tincho, deseamos que el festejo encuentre su mejor momento cuando menos lo esperes. En 2º Solidaridad, la fecha de hoy no debería pasar desapercibida. Deseamos que cada paso de esta nueva vuelta encuentre motivos para seguir adelante con entusiasmo."
  },
  {
    "nombre": "Agustina",
    "apellido": "Pineda Ghiberto",
    "dia": 20,
    "mes": 7,
    "curso": "2º Solidaridad",
    "apodo": "Agus",
    "mensaje": "Hoy toca recibir saludos y disfrutar cada uno. Agus, que la consigna del día sea que el día esté lleno de gestos simples y sinceros. Entre clases y proyectos, que en 2º Solidaridad también se haga lugar para este cumpleaños. Que el año nuevo en tu calendario personal tenga capítulos muy distintos, pero todos valiosos."
  },
  {
    "nombre": "Juana",
    "apellido": "Rodríguez",
    "dia": 15,
    "mes": 2,
    "curso": "2º Solidaridad",
    "apodo": "Juani",
    "mensaje": "Juani, que la fecha traiga encuentros que valgan la pena. Esta fecha llega con un motivo extra para sonreír; después de todo, una fecha así lo merece. En 2º Solidaridad, la fecha de hoy no debería pasar desapercibida. Deseamos que esta nueva vuelta te encuentre con ganas de descubrir, crear y disfrutar."
  },
  {
    "nombre": "Emilia",
    "apellido": "Scarafia",
    "dia": 14,
    "mes": 7,
    "curso": "2º Solidaridad",
    "apodo": "Emi",
    "mensaje": "Emi, que puedas quedarte con varios recuerdos lindos. Que esta fecha encuentre espacio para lo que te hace bien; después de todo, una fecha así lo merece. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Emeli Stefanía",
    "apellido": "Torres",
    "dia": 8,
    "mes": 8,
    "curso": "2º Solidaridad",
    "apodo": "Eme",
    "mensaje": "Este mensaje tiene destinatario claro: Eme. Hoy se abre un año nuevo en tu propio calendario y, sobre todo, que tengas un rato especial para vos. Entre clases y proyectos, que en 2º Solidaridad también se haga lugar para este cumpleaños. Que los próximos meses te traigan ideas nuevas, buenos encuentros y metas alcanzables."
  },
  {
    "nombre": "Santino",
    "apellido": "Trincheri",
    "dia": 21,
    "mes": 5,
    "curso": "2º Solidaridad",
    "apodo": "Santi",
    "mensaje": "Para Santi, un deseo especial en este cumpleaños: que cada saludo sume un poquito más de alegría. Que esta fecha se llene de momentos que hagan bien. Que esta jornada en 2º Solidaridad tenga un toque distinto por tu cumpleaños. Ojalá esta vuelta nueva te acerque a proyectos que te den ganas de ponerles toda la energía."
  },
  {
    "nombre": "Mateo",
    "apellido": "Barbaresco",
    "dia": 25,
    "mes": 5,
    "curso": "3º Informática",
    "apodo": "Barba",
    "mensaje": "Barba, la fecha ya hizo su parte y llegó; ahora toca que aparezcan motivos nuevos para agradecer. Deseamos que esta nueva vuelta te encuentre con ganas de descubrir, crear y disfrutar."
  },
  {
    "nombre": "Paloma",
    "apellido": "Basso",
    "dia": 8,
    "mes": 11,
    "curso": "3º Informática",
    "apodo": "Palo",
    "mensaje": "Un saludo grande para Palo. Que esta fecha encuentre espacio para lo que te hace bien; por eso, que cada hora tenga algo que te haga sentir bien. Que entre las actividades de 3º Informática también haya un rato para festejar. Ojalá los meses que siguen estén llenos de razones para sentir orgullo por lo recorrido."
  },
  {
    "nombre": "Gino",
    "apellido": "Batistón",
    "dia": 12,
    "mes": 7,
    "curso": "3º Informática",
    "apodo": "Gino",
    "mensaje": "El saludo de hoy lleva nombre: Gino. Que el cumpleaños se convierta en una excusa perfecta para disfrutar. Que el saludo de 3º Informática se sume a todos los que lleguen durante el día. Que esta vuelta nueva te deje crecer a tu ritmo y disfrutar el camino mientras tanto."
  },
  {
    "nombre": "Guillermina",
    "apellido": "Bessi",
    "dia": 24,
    "mes": 1,
    "curso": "3º Informática",
    "apodo": "Guille",
    "mensaje": "Para Guille, un deseo especial en este cumpleaños: que el buen ánimo dure mucho más que las velitas. Hoy suma una página nueva a tu historia. Que esta jornada en 3º Informática tenga un toque distinto por tu cumpleaños. Que los próximos meses te traigan ideas nuevas, buenos encuentros y metas alcanzables."
  },
  {
    "nombre": "Camilo",
    "apellido": "Caglieri",
    "dia": 27,
    "mes": 3,
    "curso": "3º Informática",
    "apodo": "Camilo",
    "mensaje": "Camilo: Hoy puede ser uno de esos días que quedan en la memoria; que puedas compartir la fecha con personas que suman. Que el cumpleaños se haga sentir también en 3º Informática. Que lo próximo combine momentos tranquilos con aventuras que valga la pena contar."
  },
  {
    "nombre": "Maite",
    "apellido": "Colombo",
    "dia": 16,
    "mes": 5,
    "curso": "3º Informática",
    "apodo": "Maite Colombo",
    "mensaje": "Una nueva vuelta empieza justo ahora, Maite Colombo. La idea para hoy es simple: que la celebración tenga tu propio estilo. Esta fecha le agrega un pequeño festejo al día de 3º Informática. Ojalá cada estación de este nuevo año te encuentre con algo bueno entre manos."
  },
  {
    "nombre": "Matteo",
    "apellido": "Cravero",
    "dia": 8,
    "mes": 4,
    "curso": "3º Informática",
    "apodo": "Matteo",
    "mensaje": "Hoy toca guardar la rutina por un rato. Y como hoy el festejo es para Matteo, ojalá que el cumpleaños se convierta en una excusa perfecta para disfrutar. Que esta jornada en 3º Informática tenga un toque distinto por tu cumpleaños. Que los próximos meses traigan aprendizajes, oportunidades y muchas historias para guardar."
  },
  {
    "nombre": "Augusto",
    "apellido": "Galli Ballari",
    "dia": 25,
    "mes": 7,
    "curso": "3º Informática",
    "apodo": "Galli",
    "mensaje": "Si hoy hubiera una sola recomendación para Galli, sería esta: que cada saludo sume un poquito más de alegría. Hoy 3º Informática comparte un motivo para celebrar con vos. Deseamos que lo que viene combine tranquilidad, desafíos interesantes y muchas satisfacciones."
  },
  {
    "nombre": "Tiziano",
    "apellido": "Gallo",
    "dia": 24,
    "mes": 5,
    "curso": "3º Informática",
    "apodo": "Tizi",
    "mensaje": "Una nueva vuelta para Tizi. Una nueva vuelta al sol siempre merece su momento. Que puedas decir al final del día que valió la pena, y que tengas un rato especial para vos. En 3º Informática, hoy hay un motivo extra para sumar un saludo. Ojalá esta etapa venga con más certezas, menos apuro y muchas cosas lindas para compartir."
  },
  {
    "nombre": "Maitén",
    "apellido": "Gálvez",
    "dia": 1,
    "mes": 4,
    "curso": "3º Informática",
    "apodo": "Mai",
    "mensaje": "Hay días que se sienten distintos desde temprano. Mai, que la consigna del día sea que el día se arme con buenos momentos, aunque no estén planeados. Hoy 3º Informática comparte un motivo para celebrar con vos. Que lo próximo te encuentre rodeado de buenas personas y de proyectos con sentido."
  },
  {
    "nombre": "Olivia",
    "apellido": "Gaydou",
    "dia": 13,
    "mes": 7,
    "curso": "3º Informática",
    "apodo": "Olivia",
    "mensaje": "Olivia, que el festejo tenga espacio para lo espontáneo; que el festejo encuentre su mejor momento cuando menos lo esperes. Que el cumpleaños se haga sentir también en 3º Informática. Ojalá esta vuelta nueva te acerque a proyectos que te den ganas de ponerles toda la energía."
  },
  {
    "nombre": "Renzo Valentino",
    "apellido": "Giorgio Willer",
    "dia": 24,
    "mes": 5,
    "curso": "3º Informática",
    "apodo": "Ren",
    "mensaje": "Que el cumpleaños encuentre lugar entre risas y buenos momentos. Que para Ren eso se traduzca en algo concreto: que haya tiempo para compartir y también para descansar. Hoy 3º Informática tiene una fecha especial marcada en el calendario. Que esta vuelta nueva te deje crecer a tu ritmo y disfrutar el camino mientras tanto."
  },
  {
    "nombre": "Santiago",
    "apellido": "Hirschfeld Theler",
    "dia": 23,
    "mes": 3,
    "curso": "3º Informática",
    "apodo": "Uru",
    "mensaje": "Uru, que el festejo tenga espacio para lo espontáneo; que haya tiempo para compartir y también para descansar. Que esta jornada en 3º Informática tenga un toque distinto por tu cumpleaños. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Giovana Alexia",
    "apellido": "López Capuñay",
    "dia": 5,
    "mes": 1,
    "curso": "3º Informática",
    "apodo": "Giova",
    "mensaje": "Un cumpleaños no necesita grandes discursos, Giova. Alcanza con desear que no falte una buena anécdota para contar después. Hoy 3º Informática tiene una fecha especial marcada en el calendario. Ojalá esta nueva etapa tenga desafíos que motiven y momentos que den ganas de repetir."
  },
  {
    "nombre": "Brunela María",
    "apellido": "Maldonado",
    "dia": 24,
    "mes": 2,
    "curso": "3º Informática",
    "apodo": "Brune",
    "mensaje": "Brune, que el cumpleaños venga sin apuro. que el día tenga una mezcla justa de alegría y tranquilidad. Que el saludo de 3º Informática se sume a todos los que lleguen durante el día. Que lo próximo te encuentre rodeado de buenas personas y de proyectos con sentido."
  },
  {
    "nombre": "Micaela",
    "apellido": "Marengo Pérez",
    "dia": 8,
    "mes": 12,
    "curso": "3º Informática",
    "apodo": "Mica",
    "mensaje": "Mica, hoy el día viene con una misión distinta: celebrar. Que el festejo deje recuerdos de esos que vuelven con una sonrisa. Que desde 3º Informática lleguen también risas, saludos y buenos deseos. Que la nueva vuelta tenga proyectos propios, desafíos interesantes y pausas necesarias."
  },
  {
    "nombre": "Valentino Hugo",
    "apellido": "Martínez",
    "dia": 19,
    "mes": 7,
    "curso": "3º Informática",
    "apodo": "Valen",
    "mensaje": "Valen, hoy el día viene con una misión distinta: celebrar. Que el día se arme con buenos momentos, aunque no estén planeados. Hoy 3º Informática tiene una fecha especial marcada en el calendario. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Catalina María",
    "apellido": "Milanesio",
    "dia": 11,
    "mes": 2,
    "curso": "3º Informática",
    "apodo": "Cata",
    "mensaje": "Una nueva vuelta para Cata. Este día merece disfrutarse sin apuro. Que puedas decir al final del día que valió la pena, y que el día termine mejor de lo que empezó. Deseamos un año que deje huella por las experiencias, no por la velocidad con que pase."
  },
  {
    "nombre": "Delfina",
    "apellido": "Moreyra",
    "dia": 8,
    "mes": 10,
    "curso": "3º Informática",
    "apodo": "Delfi",
    "mensaje": "A Delfi le toca hoy recibir los saludos. Que esta fecha encuentre espacio para lo que te hace bien; ojalá que tengas un rato especial para vos. Hoy el calendario de 3º Informática tiene una buena razón para destacarse. Ojalá este nuevo año te regale perspectivas nuevas y momentos que valgan mucho."
  },
  {
    "nombre": "Joaquín",
    "apellido": "Pittavino",
    "dia": 4,
    "mes": 4,
    "curso": "3º Informática",
    "apodo": "Pita",
    "mensaje": "Este mensaje tiene destinatario claro: Pita. Hoy el protagonismo está más que justificado y, sobre todo, que el día se arme con buenos momentos, aunque no estén planeados. Esta fecha le agrega un pequeño festejo al día de 3º Informática. Que lo que viene te permita mirar hacia adelante con curiosidad y hacia atrás con satisfacción."
  },
  {
    "nombre": "Lautaro Leonel",
    "apellido": "Rodríguez",
    "dia": 30,
    "mes": 3,
    "curso": "3º Informática",
    "apodo": "Lauti",
    "mensaje": "La jornada de hoy trae una buena excusa para festejar. Que para Lauti eso se traduzca en algo concreto: que puedas disfrutar sin estar mirando el reloj. Que desde 3º Informática lleguen también risas, saludos y buenos deseos. Deseamos que lo que viene esté lleno de pequeñas conquistas que, juntas, hagan una gran diferencia."
  },
  {
    "nombre": "Ignacio",
    "apellido": "Rosso",
    "dia": 22,
    "mes": 7,
    "curso": "3º Informática",
    "apodo": "Nacho",
    "mensaje": "Que este cumpleaños se sienta verdaderamente tuyo, Nacho. La idea para hoy es simple: que puedas compartir la fecha con personas que suman. Que entre las actividades de 3º Informática también haya un rato para festejar. Que lo que viene te permita mirar hacia adelante con curiosidad y hacia atrás con satisfacción."
  },
  {
    "nombre": "Emily Micaela",
    "apellido": "Sánchez",
    "dia": 2,
    "mes": 9,
    "curso": "3º Informática",
    "apodo": "Emi",
    "mensaje": "Hoy el tiempo hace una parada para celebrar. En esta ocasión, Emi, te deseamos especialmente que el festejo deje recuerdos de esos que vuelven con una sonrisa. En 3º Informática, hoy hay un motivo extra para sumar un saludo. Que los próximos meses te traigan ideas nuevas, buenos encuentros y metas alcanzables."
  },
  {
    "nombre": "Zahira",
    "apellido": "Sandobal Vázquez",
    "dia": 1,
    "mes": 10,
    "curso": "3º Informática",
    "apodo": "Zahi",
    "mensaje": "Una nueva vuelta para Zahi. El mejor detalle de esta fecha es poder celebrarla. Que puedas decir al final del día que valió la pena, y que tengas razones de sobra para mirar el día con una sonrisa. Hoy 3º Informática tiene una fecha especial marcada en el calendario. Ojalá esta vuelta nueva te acerque a proyectos que te den ganas de ponerles toda la energía."
  },
  {
    "nombre": "Juan Martín",
    "apellido": "Schiebert",
    "dia": 22,
    "mes": 5,
    "curso": "3º Informática",
    "apodo": "Juan",
    "mensaje": "La jornada de hoy trae una buena excusa para festejar. En esta ocasión, Juan, te deseamos especialmente que aparezcan motivos nuevos para agradecer. Que el saludo de 3º Informática se sume a todos los que lleguen durante el día. Ojalá este nuevo año te regale perspectivas nuevas y momentos que valgan mucho."
  },
  {
    "nombre": "Mateo",
    "apellido": "Seguro",
    "dia": 24,
    "mes": 1,
    "curso": "3º Informática",
    "apodo": "Rulas",
    "mensaje": "Esta fecha llega con un motivo extra para sonreír. Para vos, Rulas, deseamos que puedas disfrutar incluso de los momentos más tranquilos. Hoy 3º Informática comparte un motivo para celebrar con vos. Que lo próximo combine momentos tranquilos con aventuras que valga la pena contar."
  },
  {
    "nombre": "Paula Beatriz",
    "apellido": "Toselli",
    "dia": 17,
    "mes": 6,
    "curso": "3º Informática",
    "apodo": "Pauli",
    "mensaje": "Pauli, feliz cumpleaños. Que esta jornada tenga un ritmo especial. Ojalá que el día esté lleno de gestos simples y sinceros. Que entre las actividades de 3º Informática también haya un rato para festejar. Deseamos que esta nueva vuelta te encuentre con ganas de descubrir, crear y disfrutar."
  },
  {
    "nombre": "Genaro Manuel",
    "apellido": "Trossero",
    "dia": 12,
    "mes": 4,
    "curso": "3º Informática",
    "apodo": "Genaro",
    "mensaje": "Que el cumpleaños encuentre lugar entre risas y buenos momentos. Que para Genaro eso se traduzca en algo concreto: que cada saludo sume un poquito más de alegría. Que el camino de los próximos meses tenga buenas noticias y alguna sorpresa memorable."
  },
  {
    "nombre": "Lucía",
    "apellido": "Verbeke Sandoval",
    "dia": 11,
    "mes": 8,
    "curso": "3º Informática",
    "apodo": "Luci",
    "mensaje": "El calendario marca un día que vale la pena celebrar. Que para Luci eso se traduzca en algo concreto: que hoy te acompañe una energía especialmente buena. En 3º Informática, hoy hay un motivo extra para sumar un saludo. Que el año que comienza tenga momentos de calma, otros de emoción y muchos de aprendizaje."
  },
  {
    "nombre": "Mateo Tomás",
    "apellido": "Allassia",
    "dia": 15,
    "mes": 1,
    "curso": "3º Economía",
    "apodo": "Allassia",
    "mensaje": "Para Allassia, un deseo especial en este cumpleaños: que el día termine mejor de lo que empezó. Una nueva vuelta al sol siempre merece su momento. Que el cumpleaños se haga sentir también en 3º Economía. Que los próximos meses traigan aprendizajes, oportunidades y muchas historias para guardar."
  },
  {
    "nombre": "Federico Andrés",
    "apellido": "Balbi Urso",
    "dia": 8,
    "mes": 9,
    "curso": "3º Economía",
    "apodo": "Fede",
    "mensaje": "Este día puede convertirse en un recuerdo muy lindo. Para vos, Fede, deseamos que cada momento tenga algo propio para disfrutar. Que entre las actividades de 3º Economía también haya un rato para festejar. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Pilar",
    "apellido": "Benizio",
    "dia": 17,
    "mes": 9,
    "curso": "3º Economía",
    "apodo": "Pili",
    "mensaje": "Pili, feliz cumpleaños. Hoy el protagonismo está más que justificado. Ojalá que el festejo tenga esa espontaneidad que hace todo más divertido. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Juan Andrés",
    "apellido": "Bolatti",
    "dia": 25,
    "mes": 7,
    "curso": "3º Economía",
    "apodo": "Juancho",
    "mensaje": "Que esta jornada tenga un ritmo especial. Con ese espíritu, Juancho, esperamos que aparezcan motivos nuevos para agradecer. Esta fecha le agrega un pequeño festejo al día de 3º Economía. Que cada mes próximo tenga al menos una razón especial para entusiasmarte."
  },
  {
    "nombre": "Paula",
    "apellido": "Cipolatti",
    "dia": 15,
    "mes": 11,
    "curso": "3º Economía",
    "apodo": "Pau",
    "mensaje": "Un cumpleaños no necesita grandes discursos, Pau. Alcanza con desear que el festejo deje recuerdos de esos que vuelven con una sonrisa. Que esta jornada en 3º Economía tenga un toque distinto por tu cumpleaños. Ojalá este nuevo año te regale perspectivas nuevas y momentos que valgan mucho."
  },
  {
    "nombre": "Santiago",
    "apellido": "Coria",
    "dia": 12,
    "mes": 10,
    "curso": "3º Economía",
    "apodo": "Coria",
    "mensaje": "El calendario marca un día que vale la pena celebrar. Y como hoy el festejo es para Coria, ojalá que puedas disfrutar incluso de los momentos más tranquilos. Hoy 3º Economía tiene una fecha especial marcada en el calendario. Que lo que siga esté lleno de experiencias que sumen y personas que hagan bien."
  },
  {
    "nombre": "Priscila Itatí",
    "apellido": "Faccioli",
    "dia": 20,
    "mes": 4,
    "curso": "3º Economía",
    "apodo": "Pri",
    "mensaje": "Que la celebración llegue con buena compañía, Pri. La idea para hoy es simple: que no falten conversaciones, risas y buenos encuentros. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Esmeralda",
    "apellido": "Fler",
    "dia": 29,
    "mes": 4,
    "curso": "3º Economía",
    "apodo": "Esme",
    "mensaje": "Para Esme, un deseo especial en este cumpleaños: que no falte una buena anécdota para contar después. El cumpleaños invita a mirar lo vivido y entusiasmarse con lo que viene. Que cada mes próximo tenga al menos una razón especial para entusiasmarte."
  },
  {
    "nombre": "Anna",
    "apellido": "Forestello",
    "dia": 27,
    "mes": 4,
    "curso": "3º Economía",
    "apodo": "Ana",
    "mensaje": "Un saludo grande para Ana. Que este día tenga algo de inesperado y mucho de alegría; por eso, que la jornada se llene de esas cosas pequeñas que hacen bien. Esta fecha le agrega un pequeño festejo al día de 3º Economía. Que lo próximo te encuentre rodeado de buenas personas y de proyectos con sentido."
  },
  {
    "nombre": "Tomás",
    "apellido": "Giraudo",
    "dia": 19,
    "mes": 1,
    "curso": "3º Economía",
    "apodo": "Toto",
    "mensaje": "Toto, que puedas disfrutar sin estar mirando el reloj. Que este cumpleaños se sienta verdaderamente tuyo; después de todo, una fecha así lo merece. En 3º Economía, la fecha de hoy no debería pasar desapercibida. Que esta vuelta nueva te deje crecer a tu ritmo y disfrutar el camino mientras tanto."
  },
  {
    "nombre": "Lucía",
    "apellido": "Herrera",
    "dia": 6,
    "mes": 4,
    "curso": "3º Economía",
    "apodo": "Luci",
    "mensaje": "Este día merece disfrutarse sin apuro. Y como hoy el festejo es para Luci, ojalá que el día te regale escenas simples pero inolvidables. Que el saludo de 3º Economía se sume a todos los que lleguen durante el día. Ojalá esta nueva etapa tenga desafíos que motiven y momentos que den ganas de repetir."
  },
  {
    "nombre": "Maite Sofía",
    "apellido": "Lízete",
    "dia": 1,
    "mes": 9,
    "curso": "3º Economía",
    "apodo": "Maite",
    "mensaje": "Una nueva vuelta para Maite. Hoy toca guardar la rutina por un rato. Que puedas decir al final del día que valió la pena, y que no falten conversaciones, risas y buenos encuentros. Ojalá los meses que siguen estén llenos de razones para sentir orgullo por lo recorrido."
  },
  {
    "nombre": "Ema",
    "apellido": "Matter",
    "dia": 12,
    "mes": 8,
    "curso": "3º Economía",
    "apodo": "Emi",
    "mensaje": "Este mensaje tiene destinatario claro: Emi. Que esta fecha encuentre espacio para lo que te hace bien y, sobre todo, que el festejo tenga esa espontaneidad que hace todo más divertido. Que lo que viene tenga nuevos comienzos, avances importantes y mucho para celebrar."
  },
  {
    "nombre": "Italia Mía",
    "apellido": "Monachini",
    "dia": 14,
    "mes": 9,
    "curso": "3º Economía",
    "apodo": "Ita",
    "mensaje": "Ita, este cumpleaños llega para recordarte que siempre hay algo nuevo por delante. Hoy, que alguna sorpresa linda se cuele entre las horas. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Joaquín",
    "apellido": "Monella",
    "dia": 2,
    "mes": 9,
    "curso": "3º Economía",
    "apodo": "Mone",
    "mensaje": "Que este día tenga algo de inesperado y mucho de alegría. Con ese espíritu, Mone, esperamos que todo lo cotidiano hoy se sienta un poco más festivo. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Enzo",
    "apellido": "Paz",
    "dia": 4,
    "mes": 12,
    "curso": "3º Economía",
    "apodo": "Enzo",
    "mensaje": "Enzo, que el festejo tenga esa espontaneidad que hace todo más divertido. Hoy el protagonismo está más que justificado; después de todo, una fecha así lo merece. Que lo próximo combine momentos tranquilos con aventuras que valga la pena contar."
  },
  {
    "nombre": "Santiago",
    "apellido": "Quiroga",
    "dia": 2,
    "mes": 12,
    "curso": "3º Economía",
    "apodo": "Quiro",
    "mensaje": "Quiro, hoy no hace falta correr detrás de nada. Mejor que puedas cerrar la jornada con la sensación de haberla aprovechado. En 3º Economía, hoy hay un motivo extra para sumar un saludo. Y que el año que empieza venga con proyectos que entusiasmen y caminos interesantes por recorrer."
  },
  {
    "nombre": "Santino Benicio",
    "apellido": "Ricarte",
    "dia": 3,
    "mes": 10,
    "curso": "3º Economía",
    "apodo": "Richard",
    "mensaje": "Un saludo grande para Richard. Este día puede convertirse en un recuerdo muy lindo; por eso, que haya tiempo para compartir y también para descansar. Hoy 3º Economía comparte un motivo para celebrar con vos. Ojalá los siguientes meses tengan ese equilibrio raro y lindo entre sorpresa y tranquilidad."
  },
  {
    "nombre": "Bautista",
    "apellido": "Rodríguez",
    "dia": 22,
    "mes": 9,
    "curso": "3º Economía",
    "apodo": "Bauti",
    "mensaje": "Un saludo grande para Bauti. Hoy hay permiso para hacer del día algo distinto; por eso, que no falten conversaciones, risas y buenos encuentros. Que entre las actividades de 3º Economía también haya un rato para festejar. Que cada mes próximo tenga al menos una razón especial para entusiasmarte."
  },
  {
    "nombre": "Camila Lucía",
    "apellido": "Schaberger",
    "dia": 26,
    "mes": 4,
    "curso": "3º Economía",
    "apodo": "Cami",
    "mensaje": "Cami, que el día te regale escenas simples pero inolvidables. Que este cumpleaños se sienta verdaderamente tuyo; después de todo, una fecha así lo merece. Esta fecha le agrega un pequeño festejo al día de 3º Economía. Que el año que comienza tenga momentos de calma, otros de emoción y muchos de aprendizaje."
  },
  {
    "nombre": "Justo Ignacio",
    "apellido": "Trossero Mantaras",
    "dia": 24,
    "mes": 2,
    "curso": "3º Economía",
    "apodo": "Jine",
    "mensaje": "Jine, la fecha ya hizo su parte y llegó; ahora toca que no haya apuro y sí muchas ganas de celebrar. Que el saludo de 3º Economía se sume a todos los que lleguen durante el día. Que lo que viene tenga nuevos comienzos, avances importantes y mucho para celebrar."
  },
  {
    "nombre": "Thiago Bautista",
    "apellido": "Williner Friedli",
    "dia": 16,
    "mes": 7,
    "curso": "3º Economía",
    "apodo": "Titi",
    "mensaje": "Titi, feliz cumpleaños. Este cumpleaños abre una nueva vuelta llena de posibilidades. Ojalá que el festejo deje recuerdos de esos que vuelven con una sonrisa. En 3º Economía, la fecha de hoy no debería pasar desapercibida. Que lo próximo te encuentre rodeado de buenas personas y de proyectos con sentido."
  },
  {
    "nombre": "Augusto",
    "apellido": "Arce",
    "dia": 26,
    "mes": 10,
    "curso": "4º Economía",
    "apodo": "Arce",
    "mensaje": "Hay un mensaje reservado para Arce: que la jornada se llene de esas cosas pequeñas que hacen bien. Que desde 4º Economía lleguen también risas, saludos y buenos deseos. Ojalá cada estación de este nuevo año te encuentre con algo bueno entre manos."
  },
  {
    "nombre": "Camila",
    "apellido": "Astesana",
    "dia": 26,
    "mes": 1,
    "curso": "4º Economía",
    "apodo": "Cami",
    "mensaje": "Un cumpleaños no necesita grandes discursos, Cami. Alcanza con desear que no falten conversaciones, risas y buenos encuentros. Que el saludo de 4º Economía se sume a todos los que lleguen durante el día. Ojalá esta vuelta nueva te acerque a proyectos que te den ganas de ponerles toda la energía."
  },
  {
    "nombre": "Bautista",
    "apellido": "Badariotti",
    "dia": 16,
    "mes": 7,
    "curso": "4º Economía",
    "apodo": "Bada",
    "mensaje": "Este mensaje tiene destinatario claro: Bada. Hay días que se sienten distintos desde temprano y, sobre todo, que no haya apuro y sí muchas ganas de celebrar. Esta fecha le agrega un pequeño festejo al día de 4º Economía. Deseamos que esta nueva vuelta te encuentre con ganas de descubrir, crear y disfrutar."
  },
  {
    "nombre": "Agustín",
    "apellido": "Barbero",
    "dia": 9,
    "mes": 4,
    "curso": "4º Economía",
    "apodo": "Pupi",
    "mensaje": "Pupi, ojalá puedas hacer de esta fecha algo bien tuyo; que puedas disfrutar incluso de los momentos más tranquilos. Hoy 4º Economía comparte un motivo para celebrar con vos. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Fabricio",
    "apellido": "Bosco",
    "dia": 12,
    "mes": 7,
    "curso": "4º Economía",
    "apodo": "Fabri",
    "mensaje": "Que este día tenga algo de inesperado y mucho de alegría. Con ese espíritu, Fabri, esperamos que aparezcan pequeñas sorpresas capaces de alegrarte el día. Deseamos un año que deje huella por las experiencias, no por la velocidad con que pase."
  },
  {
    "nombre": "Martina",
    "apellido": "Cano",
    "dia": 20,
    "mes": 3,
    "curso": "4º Economía",
    "apodo": "Marti",
    "mensaje": "Marti, que el festejo tenga espacio para lo espontáneo; que todo lo cotidiano hoy se sienta un poco más festivo. Hoy 4º Economía tiene una fecha especial marcada en el calendario. Que lo próximo te encuentre rodeado de buenas personas y de proyectos con sentido."
  },
  {
    "nombre": "Valentina",
    "apellido": "Cena",
    "dia": 18,
    "mes": 6,
    "curso": "4º Economía",
    "apodo": "Vale",
    "mensaje": "Un saludo grande para Vale. Hoy el protagonismo está más que justificado; por eso, que no falte una buena anécdota para contar después. En 4º Economía, la fecha de hoy no debería pasar desapercibida. Que los próximos meses traigan aprendizajes, oportunidades y muchas historias para guardar."
  },
  {
    "nombre": "Agustín",
    "apellido": "Eurich",
    "dia": 16,
    "mes": 1,
    "curso": "4º Economía",
    "apodo": "Palme",
    "mensaje": "El cumpleaños invita a mirar lo vivido y entusiasmarse con lo que viene. En esta ocasión, Palme, te deseamos especialmente que tengas razones de sobra para mirar el día con una sonrisa. Que el saludo de 4º Economía se sume a todos los que lleguen durante el día. Que el camino de los próximos meses tenga buenas noticias y alguna sorpresa memorable."
  },
  {
    "nombre": "Mía",
    "apellido": "Gonella",
    "dia": 2,
    "mes": 4,
    "curso": "4º Economía",
    "apodo": "Mía",
    "mensaje": "A Mía le toca hoy recibir los saludos. Hay días que se sienten distintos desde temprano; ojalá que hoy te acompañe una energía especialmente buena. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Paulina",
    "apellido": "López Fontanesi",
    "dia": 10,
    "mes": 8,
    "curso": "4º Economía",
    "apodo": "Pauli",
    "mensaje": "Este mensaje tiene destinatario claro: Pauli. Que esta jornada tenga un ritmo especial y, sobre todo, que el festejo deje recuerdos de esos que vuelven con una sonrisa. Hoy 4º Economía comparte un motivo para celebrar con vos. Deseamos un año que deje huella por las experiencias, no por la velocidad con que pase."
  },
  {
    "nombre": "Micaela",
    "apellido": "Ludueña",
    "dia": 19,
    "mes": 1,
    "curso": "4º Economía",
    "apodo": "Mica",
    "mensaje": "Hay días que se sienten distintos desde temprano, Mica. La idea para hoy es simple: que recibas abrazos, mensajes y gestos que valgan la pena. En 4º Economía, la fecha de hoy no debería pasar desapercibida. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Mía",
    "apellido": "Marengo",
    "dia": 9,
    "mes": 6,
    "curso": "4º Economía",
    "apodo": "Mía",
    "mensaje": "Hoy vale bajar un cambio, Mía. Que este cumpleaños se sienta verdaderamente tuyo. Ojalá que cada saludo sume un poquito más de alegría. Hoy 4º Economía comparte un motivo para celebrar con vos. Que esta etapa nueva venga con buenas decisiones, aprendizajes útiles y alegría compartida."
  },
  {
    "nombre": "Juan David",
    "apellido": "Montagna",
    "dia": 26,
    "mes": 4,
    "curso": "4º Economía",
    "apodo": "David",
    "mensaje": "Hoy el tiempo hace una parada para celebrar. Que para David eso se traduzca en algo concreto: que todo lo cotidiano hoy se sienta un poco más festivo. Que el cumpleaños se haga sentir también en 4º Economía. Que cada mes próximo tenga al menos una razón especial para entusiasmarte."
  },
  {
    "nombre": "Joaquín",
    "apellido": "Monzón",
    "dia": 25,
    "mes": 3,
    "curso": "4º Economía",
    "apodo": "Jota",
    "mensaje": "Una nueva vuelta al sol siempre merece su momento. Y como hoy el festejo es para Jota, ojalá que tengas razones de sobra para mirar el día con una sonrisa. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Lara",
    "apellido": "Musso",
    "dia": 23,
    "mes": 6,
    "curso": "4º Economía",
    "apodo": "Larita",
    "mensaje": "Larita, hoy queremos desearte algo sencillo: que no haya apuro y sí muchas ganas de celebrar. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Alexia",
    "apellido": "Nicola",
    "dia": 26,
    "mes": 5,
    "curso": "4º Economía",
    "apodo": "Ale",
    "mensaje": "Ale, este cumpleaños llega para recordarte que siempre hay algo nuevo por delante. Hoy, que puedas disfrutar incluso de los momentos más tranquilos. Entre clases y proyectos, que en 4º Economía también se haga lugar para este cumpleaños. Que el año que comienza tenga momentos de calma, otros de emoción y muchos de aprendizaje."
  },
  {
    "nombre": "Camila",
    "apellido": "Peiretti",
    "dia": 15,
    "mes": 7,
    "curso": "4º Economía",
    "apodo": "Cami",
    "mensaje": "El cumpleaños invita a mirar lo vivido y entusiasmarse con lo que viene. Así que, Cami, hacé lugar para el festejo y para todo lo bueno que aparezca. Que esta jornada en 4º Economía tenga un toque distinto por tu cumpleaños. Deseamos un año que deje huella por las experiencias, no por la velocidad con que pase."
  },
  {
    "nombre": "Ramón Francisco",
    "apellido": "Peirotti",
    "dia": 26,
    "mes": 8,
    "curso": "4º Economía",
    "apodo": "Pancho",
    "mensaje": "Que esta fecha se llene de momentos que hagan bien. Y como hoy el festejo es para Pancho, ojalá que tengas razones de sobra para mirar el día con una sonrisa. Que esta jornada en 4º Economía tenga un toque distinto por tu cumpleaños. Ojalá los meses que siguen estén llenos de razones para sentir orgullo por lo recorrido."
  },
  {
    "nombre": "Alexis",
    "apellido": "Peterlin",
    "dia": 11,
    "mes": 5,
    "curso": "4º Economía",
    "apodo": "Ale",
    "mensaje": "Ale: Hoy suma una página nueva a tu historia; que puedas disfrutar incluso de los momentos más tranquilos. Que desde 4º Economía lleguen también risas, saludos y buenos deseos. Ojalá este nuevo ciclo traiga oportunidades que hoy todavía ni imaginás."
  },
  {
    "nombre": "Santino",
    "apellido": "Rastelli",
    "dia": 15,
    "mes": 6,
    "curso": "4º Economía",
    "apodo": "Rasta",
    "mensaje": "Hoy toca recibir saludos y disfrutar cada uno. Y para Rasta, que este día sea la puerta de entrada a una etapa muy buena. Hoy 4º Economía comparte un motivo para celebrar con vos. Que lo que viene tenga nuevos comienzos, avances importantes y mucho para celebrar."
  },
  {
    "nombre": "Leandro",
    "apellido": "Roggau",
    "dia": 8,
    "mes": 1,
    "curso": "4º Economía",
    "apodo": "Leo",
    "mensaje": "Para celebrar a Leo, nada complicado: que la celebración tenga más risas que planes. Hoy 4º Economía tiene una fecha especial marcada en el calendario. Ojalá este nuevo ciclo traiga oportunidades que hoy todavía ni imaginás."
  },
  {
    "nombre": "Paulina",
    "apellido": "Roldán",
    "dia": 5,
    "mes": 8,
    "curso": "4º Economía",
    "apodo": "Pauli",
    "mensaje": "Para Pauli, un deseo especial en este cumpleaños: que puedas compartir la fecha con personas que suman. Que el cumpleaños encuentre lugar entre risas y buenos momentos. En 4º Economía, hoy hay un motivo extra para sumar un saludo. Ojalá cada estación de este nuevo año te encuentre con algo bueno entre manos."
  },
  {
    "nombre": "Emma",
    "apellido": "Saita Porta",
    "dia": 23,
    "mes": 4,
    "curso": "4º Economía",
    "apodo": "Emmi",
    "mensaje": "Este mensaje tiene destinatario claro: Emmi. La fecha de hoy viene con espíritu de festejo y, sobre todo, que tengas razones de sobra para mirar el día con una sonrisa. En 4º Economía, la fecha de hoy no debería pasar desapercibida. Ojalá esta nueva etapa tenga desafíos que motiven y momentos que den ganas de repetir."
  },
  {
    "nombre": "Benjamín",
    "apellido": "Sánchez",
    "dia": 4,
    "mes": 11,
    "curso": "4º Economía",
    "apodo": "Benja",
    "mensaje": "Hoy merece una pausa especial. Que para Benja eso se traduzca en algo concreto: que el cariño se note en cada detalle. Que el saludo de 4º Economía se sume a todos los que lleguen durante el día. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Irina",
    "apellido": "Sisuk Ingaramo",
    "dia": 9,
    "mes": 4,
    "curso": "4º Economía",
    "apodo": "Iri",
    "mensaje": "Hay un motivo especial para que hoy sea diferente. En esta ocasión, Iri, te deseamos especialmente que el festejo tenga esa espontaneidad que hace todo más divertido. Que esta jornada en 4º Economía tenga un toque distinto por tu cumpleaños. Que lo que viene te permita mirar hacia adelante con curiosidad y hacia atrás con satisfacción."
  },
  {
    "nombre": "Santiago Tomás",
    "apellido": "Trinchieri",
    "dia": 21,
    "mes": 12,
    "curso": "4º Economía",
    "apodo": "Cheri",
    "mensaje": "Hay un motivo especial para que hoy sea diferente. Y como hoy el festejo es para Cheri, ojalá que sobren las sonrisas sinceras. Que el cumpleaños se haga sentir también en 4º Economía. Deseamos que esta nueva etapa sume historias que algún día te encante volver a contar."
  },
  {
    "nombre": "Brisa Nicol",
    "apellido": "Vicens",
    "dia": 7,
    "mes": 8,
    "curso": "4º Economía",
    "apodo": "Bri",
    "mensaje": "Este mensaje tiene destinatario claro: Bri. Que este cumpleaños se sienta verdaderamente tuyo y, sobre todo, que la celebración tenga tu propio estilo. Que entre las actividades de 4º Economía también haya un rato para festejar. Que lo próximo combine momentos tranquilos con aventuras que valga la pena contar."
  },
  {
    "nombre": "León",
    "apellido": "Auer",
    "dia": 27,
    "mes": 8,
    "curso": "4º Informática",
    "apodo": "León",
    "mensaje": "El cumpleaños invita a mirar lo vivido y entusiasmarse con lo que viene. Que para León eso se traduzca en algo concreto: que alguna sorpresa linda se cuele entre las horas. Que desde 4º Informática lleguen también risas, saludos y buenos deseos. Y que el año que empieza venga con proyectos que entusiasmen y caminos interesantes por recorrer."
  },
  {
    "nombre": "Josefina",
    "apellido": "Ballari",
    "dia": 16,
    "mes": 3,
    "curso": "4º Informática",
    "apodo": "Jose",
    "mensaje": "Para Jose, un deseo especial en este cumpleaños: que el día tenga una mezcla justa de alegría y tranquilidad. Hoy toca guardar la rutina por un rato. Hoy 4º Informática tiene una fecha especial marcada en el calendario. Ojalá los siguientes meses tengan ese equilibrio raro y lindo entre sorpresa y tranquilidad."
  },
  {
    "nombre": "Santiago Daniel",
    "apellido": "Ballari",
    "dia": 28,
    "mes": 12,
    "curso": "4º Informática",
    "apodo": "Bala",
    "mensaje": "Bala: Hoy comienza otro año personal para llenar de experiencias; que el festejo tenga esa espontaneidad que hace todo más divertido. Hoy 4º Informática tiene una fecha especial marcada en el calendario. Y que el año que empieza venga con proyectos que entusiasmen y caminos interesantes por recorrer."
  },
  {
    "nombre": "Facundo",
    "apellido": "Bertone",
    "dia": 19,
    "mes": 8,
    "curso": "4º Informática",
    "apodo": "Negro",
    "mensaje": "Negro, que haya tiempo para compartir y también para descansar. Hoy el protagonismo está más que justificado; después de todo, una fecha así lo merece. Hoy 4º Informática comparte un motivo para celebrar con vos. Deseamos que encuentres oportunidades para crecer, probar cosas nuevas y celebrar cada avance."
  },
  {
    "nombre": "Catalina",
    "apellido": "Bessi",
    "dia": 9,
    "mes": 12,
    "curso": "4º Informática",
    "apodo": "Cata",
    "mensaje": "Para Cata, un deseo especial en este cumpleaños: que el día te regale escenas simples pero inolvidables. Una nueva vuelta al sol siempre merece su momento. En 4º Informática, hoy hay un motivo extra para sumar un saludo. Deseamos un año que deje huella por las experiencias, no por la velocidad con que pase."
  },
  {
    "nombre": "Victoria",
    "apellido": "Bonafede",
    "dia": 18,
    "mes": 5,
    "curso": "4º Informática",
    "apodo": "Vicky",
    "mensaje": "Que este cumpleaños se sienta verdaderamente tuyo. Vicky, que la consigna del día sea que el día tenga una mezcla justa de alegría y tranquilidad. Hoy el calendario de 4º Informática tiene una buena razón para destacarse. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Giuliano",
    "apellido": "Cipolatti",
    "dia": 18,
    "mes": 5,
    "curso": "4º Informática",
    "apodo": "Peludo",
    "mensaje": "Este mensaje tiene destinatario claro: Peludo. Que este día tenga algo de inesperado y mucho de alegría y, sobre todo, que haya tiempo para compartir y también para descansar. Hoy el calendario de 4º Informática tiene una buena razón para destacarse. Deseamos que cada paso de esta nueva vuelta encuentre motivos para seguir adelante con entusiasmo."
  },
  {
    "nombre": "Julián",
    "apellido": "Cipolatti",
    "dia": 16,
    "mes": 6,
    "curso": "4º Informática",
    "apodo": "Cipo",
    "mensaje": "Una jornada como esta pide celebración. Que para Cipo eso se traduzca en algo concreto: que puedas disfrutar incluso de los momentos más tranquilos. Que esta jornada en 4º Informática tenga un toque distinto por tu cumpleaños. Ojalá cada estación de este nuevo año te encuentre con algo bueno entre manos."
  },
  {
    "nombre": "Yair Jonás",
    "apellido": "Yair",
    "dia": 15,
    "mes": 10,
    "curso": "4º Informática",
    "apodo": "Yair",
    "mensaje": "Para Yair, un deseo especial en este cumpleaños: que todo lo cotidiano hoy se sienta un poco más festivo. Hoy todo puede tener un pequeño toque de festejo. Que desde 4º Informática lleguen también risas, saludos y buenos deseos. Ojalá esta nueva etapa tenga desafíos que motiven y momentos que den ganas de repetir."
  },
  {
    "nombre": "Marco",
    "apellido": "Druetto Miretti",
    "dia": 23,
    "mes": 5,
    "curso": "4º Informática",
    "apodo": "Marquito",
    "mensaje": "Que quede anotado: hoy celebra Marquito. que no falten conversaciones, risas y buenos encuentros. Que desde 4º Informática lleguen también risas, saludos y buenos deseos. Ojalá este nuevo año te regale perspectivas nuevas y momentos que valgan mucho."
  },
  {
    "nombre": "Sofía",
    "apellido": "Fernández",
    "dia": 26,
    "mes": 6,
    "curso": "4º Informática",
    "apodo": "Sofi",
    "mensaje": "Un cumpleaños no necesita grandes discursos, Sofi. Alcanza con desear que puedas disfrutar sin estar mirando el reloj. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Irina Mirella",
    "apellido": "Giorgio Willer",
    "dia": 6,
    "mes": 7,
    "curso": "4º Informática",
    "apodo": "Gio",
    "mensaje": "Hoy vale bajar un cambio, Gio. Una nueva vuelta empieza justo ahora. Ojalá que la celebración tenga tu propio estilo. En 4º Informática, la fecha de hoy no debería pasar desapercibida. Ojalá esta vuelta nueva te acerque a proyectos que te den ganas de ponerles toda la energía."
  },
  {
    "nombre": "Joaquín",
    "apellido": "Guisasola",
    "dia": 8,
    "mes": 7,
    "curso": "4º Informática",
    "apodo": "Joaqui",
    "mensaje": "Un saludo grande para Joaqui. El día de hoy tiene un nombre propio y un motivo de festejo; por eso, que el festejo deje recuerdos de esos que vuelven con una sonrisa. Entre clases y proyectos, que en 4º Informática también se haga lugar para este cumpleaños. Ojalá este nuevo ciclo traiga oportunidades que hoy todavía ni imaginás."
  },
  {
    "nombre": "Santino",
    "apellido": "Maccari",
    "dia": 11,
    "mes": 11,
    "curso": "4º Informática",
    "apodo": "Code",
    "mensaje": "Hay un motivo especial para que hoy sea diferente. En esta ocasión, Code, te deseamos especialmente que el buen ánimo dure mucho más que las velitas. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Lucía Milagros",
    "apellido": "Machado",
    "dia": 1,
    "mes": 12,
    "curso": "4º Informática",
    "apodo": "Lu",
    "mensaje": "Una nueva vuelta al sol siempre merece su momento. Y como hoy el festejo es para Lu, ojalá que puedas disfrutar incluso de los momentos más tranquilos. Que el cumpleaños se haga sentir también en 4º Informática. Que lo próximo te encuentre rodeado de buenas personas y de proyectos con sentido."
  },
  {
    "nombre": "Ema Sol",
    "apellido": "Marotti",
    "dia": 6,
    "mes": 8,
    "curso": "4º Informática",
    "apodo": "Emita",
    "mensaje": "Hay días que se sienten distintos desde temprano. Emita, que esa sea la primera de muchas buenas cosas de esta nueva vuelta. Entre clases y proyectos, que en 4º Informática también se haga lugar para este cumpleaños. Que cada mes próximo tenga al menos una razón especial para entusiasmarte."
  },
  {
    "nombre": "Santino",
    "apellido": "Melano",
    "dia": 3,
    "mes": 11,
    "curso": "4º Informática",
    "apodo": "Mela",
    "mensaje": "Para Mela, un deseo especial en este cumpleaños: que el buen ánimo dure mucho más que las velitas. La jornada de hoy trae una buena excusa para festejar. Que el saludo de 4º Informática se sume a todos los que lleguen durante el día. Que esta etapa te permita sumar experiencias sin perder de vista todo lo bueno que ya construiste."
  },
  {
    "nombre": "Santino",
    "apellido": "Ortiz Beltramo",
    "dia": 11,
    "mes": 2,
    "curso": "4º Informática",
    "apodo": "Cali",
    "mensaje": "Hoy hay permiso para hacer del día algo distinto, Cali. La idea para hoy es simple: que el festejo encuentre su mejor momento cuando menos lo esperes. Esta fecha le agrega un pequeño festejo al día de 4º Informática. Que los próximos meses traigan aprendizajes, oportunidades y muchas historias para guardar."
  },
  {
    "nombre": "Rosella",
    "apellido": "Peresin Stefano",
    "dia": 13,
    "mes": 1,
    "curso": "4º Informática",
    "apodo": "Rose",
    "mensaje": "Que la fecha traiga afecto, calma y alegría, Rose. La idea para hoy es simple: que alguna sorpresa linda se cuele entre las horas. Hoy 4º Informática comparte un motivo para celebrar con vos. Deseamos que los meses siguientes dejen más sonrisas que preocupaciones y más recuerdos que pendientes."
  },
  {
    "nombre": "Facundo Sebastián",
    "apellido": "Perín Catalá",
    "dia": 9,
    "mes": 6,
    "curso": "4º Informática",
    "apodo": "Facu",
    "mensaje": "El día de hoy tiene un nombre propio y un motivo de festejo. Facu, aprovechá la fecha para disfrutar lo que ya está y entusiasmarte con lo que sigue. Hoy el calendario de 4º Informática tiene una buena razón para destacarse. Ojalá el próximo cumpleaños te encuentre recordando un año lleno de momentos que valieron la pena."
  },
  {
    "nombre": "Juan Ignacio",
    "apellido": "Pisciolari",
    "dia": 6,
    "mes": 7,
    "curso": "4º Informática",
    "apodo": "Piscio",
    "mensaje": "Hoy vale bajar un cambio, Piscio. Que esta jornada tenga un ritmo especial. Ojalá que cada momento tenga algo propio para disfrutar. Que la nueva vuelta tenga proyectos propios, desafíos interesantes y pausas necesarias."
  },
  {
    "nombre": "Valentina Luján",
    "apellido": "Pistarino",
    "dia": 3,
    "mes": 7,
    "curso": "4º Informática",
    "apodo": "Vale",
    "mensaje": "Vale, feliz cumpleaños. Hoy el protagonismo está más que justificado. Ojalá que cada saludo sume un poquito más de alegría. Entre clases y proyectos, que en 4º Informática también se haga lugar para este cumpleaños. Que lo que siga esté lleno de experiencias que sumen y personas que hagan bien."
  },
  {
    "nombre": "Ana Paula",
    "apellido": "Re",
    "dia": 11,
    "mes": 2,
    "curso": "4º Informática",
    "apodo": "Anita",
    "mensaje": "Que este cumpleaños se sienta verdaderamente tuyo. Para vos, Anita, deseamos que el día esté lleno de gestos simples y sinceros. En 4º Informática, la fecha de hoy no debería pasar desapercibida. Ojalá este nuevo ciclo traiga oportunidades que hoy todavía ni imaginás."
  },
  {
    "nombre": "Bautista",
    "apellido": "Solís",
    "dia": 14,
    "mes": 9,
    "curso": "4º Informática",
    "apodo": "Bauti",
    "mensaje": "Hoy suma una página nueva a tu historia. Y como hoy el festejo es para Bauti, ojalá que el día tenga una mezcla justa de alegría y tranquilidad. Que esta vuelta nueva te deje crecer a tu ritmo y disfrutar el camino mientras tanto."
  },
  {
    "nombre": "Mateo",
    "apellido": "Tamagnone",
    "dia": 29,
    "mes": 10,
    "curso": "4º Informática",
    "apodo": "Tama",
    "mensaje": "Tama, que puedas cerrar la jornada con la sensación de haberla aprovechado. Una fecha así merece buenos recuerdos; después de todo, una fecha así lo merece. Esta fecha le agrega un pequeño festejo al día de 4º Informática. Deseamos que lo que viene combine tranquilidad, desafíos interesantes y muchas satisfacciones."
  },
  {
    "nombre": "Salvador",
    "apellido": "Villareal",
    "dia": 14,
    "mes": 8,
    "curso": "4º Informática",
    "apodo": "Salva",
    "mensaje": "Que la fecha traiga afecto, calma y alegría. Con ese espíritu, Salva, esperamos que la fecha traiga encuentros que valgan la pena. Entre clases y proyectos, que en 4º Informática también se haga lugar para este cumpleaños. Deseamos que esta nueva etapa sume historias que algún día te encante volver a contar."
  },
  {
    "nombre": "Lorenzo",
    "apellido": "Alasia",
    "dia": 29,
    "mes": 1,
    "curso": "5º Economía",
    "apodo": "Lorenzo Alasia",
    "mensaje": "A Lorenzo Alasia le toca hoy recibir los saludos. El día de hoy tiene un nombre propio y un motivo de festejo; ojalá que el día tenga una mezcla justa de alegría y tranquilidad. Hoy 5º Economía comparte un motivo para celebrar con vos. Ojalá esta vuelta nueva te acerque a proyectos que te den ganas de ponerles toda la energía."
  },
  {
    "nombre": "Guillermina",
    "apellido": "Audicio",
    "dia": 16,
    "mes": 7,
    "curso": "5º Economía",
    "apodo": "Guille",
    "mensaje": "Para Guille, un deseo especial en este cumpleaños: que el día te regale escenas simples pero inolvidables. Hoy suma una página nueva a tu historia. Que el cumpleaños se haga sentir también en 5º Economía. Que esta vuelta nueva te deje crecer a tu ritmo y disfrutar el camino mientras tanto."
  },
  {
    "nombre": "Lucio",
    "apellido": "Barbero",
    "dia": 17,
    "mes": 11,
    "curso": "5º Economía",
    "apodo": "Lucio",
    "mensaje": "Este mensaje tiene destinatario claro: Lucio. Hoy hay una razón sencilla y enorme para brindar y, sobre todo, que recibas abrazos, mensajes y gestos que valgan la pena. Que el año que comienza tenga momentos de calma, otros de emoción y muchos de aprendizaje."
  },
  {
    "nombre": "Julieta",
    "apellido": "Chiappero",
    "dia": 28,
    "mes": 10,
    "curso": "5º Economía",
    "apodo": "Juli",
    "mensaje": "Esta fecha merece una sonrisa desde el comienzo. Con ese espíritu, Juli, esperamos que el cumpleaños se convierta en una excusa perfecta para disfrutar. Hoy 5º Economía comparte un motivo para celebrar con vos. Ojalá esta nueva etapa tenga desafíos que motiven y momentos que den ganas de repetir."
  },
  {
    "nombre": "Clara Emilia",
    "apellido": "Davicino Re",
    "dia": 2,
    "mes": 3,
    "curso": "5º Economía",
    "apodo": "Clari",
    "mensaje": "Clari, que no haya apuro y sí muchas ganas de celebrar. Hoy hay permiso para hacer del día algo distinto; después de todo, una fecha así lo merece. Esta fecha le agrega un pequeño festejo al día de 5º Economía. Deseamos un año que deje huella por las experiencias, no por la velocidad con que pase."
  },
  {
    "nombre": "Emiliano",
    "apellido": "Delpupo",
    "dia": 14,
    "mes": 7,
    "curso": "5º Economía",
    "apodo": "Emiliano",
    "mensaje": "Que la celebración llegue con buena compañía. Con ese espíritu, Emiliano, esperamos que el día te regale escenas simples pero inolvidables. Hoy 5º Economía comparte un motivo para celebrar con vos. Que los próximos meses traigan aprendizajes, oportunidades y muchas historias para guardar."
  },
  {
    "nombre": "Ana Paula",
    "apellido": "Enrici",
    "dia": 4,
    "mes": 3,
    "curso": "5º Economía",
    "apodo": "Ani",
    "mensaje": "Para celebrar a Ani, nada complicado: que el festejo encuentre su mejor momento cuando menos lo esperes. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Guillermina",
    "apellido": "Fler",
    "dia": 9,
    "mes": 4,
    "curso": "5º Economía",
    "apodo": "Guille",
    "mensaje": "Si hoy hubiera una sola recomendación para Guille, sería esta: que puedas compartir la fecha con personas que suman. Entre clases y proyectos, que en 5º Economía también se haga lugar para este cumpleaños. Ojalá este nuevo año te regale perspectivas nuevas y momentos que valgan mucho."
  },
  {
    "nombre": "Victoria",
    "apellido": "Gil",
    "dia": 12,
    "mes": 1,
    "curso": "5º Economía",
    "apodo": "Vicky",
    "mensaje": "Para Vicky, un deseo especial en este cumpleaños: que cada momento tenga algo propio para disfrutar. Este día merece disfrutarse sin apuro. Que el saludo de 5º Economía se sume a todos los que lleguen durante el día. Que la nueva vuelta tenga proyectos propios, desafíos interesantes y pausas necesarias."
  },
  {
    "nombre": "Tomás Uriel",
    "apellido": "Gornati",
    "dia": 17,
    "mes": 9,
    "curso": "5º Economía",
    "apodo": "Tomi",
    "mensaje": "Tomi, hoy queremos desearte algo sencillo: que el festejo tenga esa espontaneidad que hace todo más divertido. Que el cumpleaños se haga sentir también en 5º Economía. Ojalá los meses que siguen estén llenos de razones para sentir orgullo por lo recorrido."
  },
  {
    "nombre": "Jazmín",
    "apellido": "Juárez",
    "dia": 22,
    "mes": 6,
    "curso": "5º Economía",
    "apodo": "Jazz",
    "mensaje": "Hoy toca guardar la rutina por un rato. Así que, Jazz, hacé lugar para el festejo y para todo lo bueno que aparezca. Que el saludo de 5º Economía se sume a todos los que lleguen durante el día. Que los próximos meses te traigan ideas nuevas, buenos encuentros y metas alcanzables."
  },
  {
    "nombre": "Iara Nicole",
    "apellido": "Mansilla",
    "dia": 18,
    "mes": 7,
    "curso": "5º Economía",
    "apodo": "Iari",
    "mensaje": "Este mensaje tiene destinatario claro: Iari. Que la celebración llegue con buena compañía y, sobre todo, que no falten conversaciones, risas y buenos encuentros. En 5º Economía, la fecha de hoy no debería pasar desapercibida. Que esta etapa te permita sumar experiencias sin perder de vista todo lo bueno que ya construiste."
  },
  {
    "nombre": "Mía",
    "apellido": "Monzón",
    "dia": 11,
    "mes": 3,
    "curso": "5º Economía",
    "apodo": "Mía",
    "mensaje": "A Mía le toca hoy recibir los saludos. Este cumpleaños abre una nueva vuelta llena de posibilidades; ojalá que el día te regale escenas simples pero inolvidables. Deseamos un año con espacio para aprender, compartir, equivocarse, volver a intentar y disfrutar."
  },
  {
    "nombre": "Maximiliano Andrés",
    "apellido": "Ribotta",
    "dia": 30,
    "mes": 6,
    "curso": "5º Economía",
    "apodo": "Bocha",
    "mensaje": "Para Bocha, un deseo especial en este cumpleaños: que puedas compartir la fecha con personas que suman. El calendario marca un día que vale la pena celebrar. Que el cumpleaños se haga sentir también en 5º Economía. Ojalá el próximo cumpleaños te encuentre recordando un año lleno de momentos que valieron la pena."
  },
  {
    "nombre": "Catriel",
    "apellido": "Ricarte",
    "dia": 6,
    "mes": 3,
    "curso": "5º Economía",
    "apodo": "Catri",
    "mensaje": "Hoy se enciende una velita más para Catri. Que no falte una buena anécdota para contar después. Que el cumpleaños se haga sentir también en 5º Economía. Ojalá esta etapa te sorprenda para bien más de una vez."
  },
  {
    "nombre": "Inés",
    "apellido": "Sodero",
    "dia": 9,
    "mes": 3,
    "curso": "5º Economía",
    "apodo": "Ine",
    "mensaje": "Ine, hoy el día viene con una misión distinta: celebrar. Que aparezcan pequeñas sorpresas capaces de alegrarte el día. Que el saludo de 5º Economía se sume a todos los que lleguen durante el día. Que cada mes próximo tenga al menos una razón especial para entusiasmarte."
  },
  {
    "nombre": "Sara",
    "apellido": "Tercero",
    "dia": 26,
    "mes": 11,
    "curso": "5º Economía",
    "apodo": "Sari",
    "mensaje": "Hoy comienza otro año personal para llenar de experiencias. Que para Sari eso se traduzca en algo concreto: que haya tiempo para compartir y también para descansar. Que los próximos meses te traigan ideas nuevas, buenos encuentros y metas alcanzables."
  },
  {
    "nombre": "Lucas",
    "apellido": "Tosoratti",
    "dia": 8,
    "mes": 5,
    "curso": "5º Economía",
    "apodo": "Luc",
    "mensaje": "Hoy puede ser uno de esos días que quedan en la memoria. Así que, Luc, hacé lugar para el festejo y para todo lo bueno que aparezca. Que el cumpleaños se haga sentir también en 5º Economía. Deseamos que cada paso de esta nueva vuelta encuentre motivos para seguir adelante con entusiasmo."
  },
  {
    "nombre": "Catalina",
    "apellido": "Unrei",
    "dia": 29,
    "mes": 12,
    "curso": "5º Economía",
    "apodo": "Cati",
    "mensaje": "Para Cati, un deseo especial en este cumpleaños: que puedas quedarte con varios recuerdos lindos. Una jornada como esta pide celebración. Que desde 5º Economía lleguen también risas, saludos y buenos deseos. Deseamos que encuentres oportunidades para crecer, probar cosas nuevas y celebrar cada avance."
  },
  {
    "nombre": "Catalina",
    "apellido": "Viarengo",
    "dia": 12,
    "mes": 9,
    "curso": "5º Economía",
    "apodo": "Cata",
    "mensaje": "A Cata le toca hoy recibir los saludos. Hoy se abre un año nuevo en tu propio calendario; ojalá que haya tiempo para compartir y también para descansar. En 5º Economía, la fecha de hoy no debería pasar desapercibida. Que esta vuelta tenga espacio para nuevas amistades, aprendizajes y decisiones que te acerquen a lo que querés."
  },
  {
    "nombre": "Juan Ignacio",
    "apellido": "Astore",
    "dia": 4,
    "mes": 11,
    "curso": "5º Informática",
    "apodo": "Juani",
    "mensaje": "Hoy merece una pausa especial. Y como hoy el festejo es para Juani, ojalá que sobren las sonrisas sinceras. Hoy 5º Informática tiene una fecha especial marcada en el calendario. Que lo que viene tenga nuevos comienzos, avances importantes y mucho para celebrar."
  },
  {
    "nombre": "Sofía Angelina",
    "apellido": "Baccile Miretti",
    "dia": 10,
    "mes": 1,
    "curso": "5º Informática",
    "apodo": "Sofi",
    "mensaje": "Hoy comienza otro año personal para llenar de experiencias. En esta ocasión, Sofi, te deseamos especialmente que puedas cerrar la jornada con la sensación de haberla aprovechado. Ojalá este nuevo ciclo traiga oportunidades que hoy todavía ni imaginás."
  },
  {
    "nombre": "Cristian Javier",
    "apellido": "Balderrama",
    "dia": 13,
    "mes": 10,
    "curso": "5º Informática",
    "apodo": "Cris",
    "mensaje": "Un día, una fecha y una razón para celebrar a Cris. Que el festejo encuentre su mejor momento cuando menos lo esperes. Que entre las actividades de 5º Informática también haya un rato para festejar. Que la próxima vuelta al calendario venga con desafíos que te hagan crecer y descansos que te permitan disfrutarlos."
  },
  {
    "nombre": "Francisco",
    "apellido": "Beltramo",
    "dia": 30,
    "mes": 3,
    "curso": "5º Informática",
    "apodo": "Franche",
    "mensaje": "Franche, que el festejo deje recuerdos de esos que vuelven con una sonrisa. Este cumpleaños abre una nueva vuelta llena de posibilidades; después de todo, una fecha así lo merece. Hoy 5º Informática comparte un motivo para celebrar con vos. Ojalá los meses que siguen estén llenos de razones para sentir orgullo por lo recorrido."
  },
  {
    "nombre": "Clara",
    "apellido": "Berry",
    "dia": 12,
    "mes": 10,
    "curso": "5º Informática",
    "apodo": "Clari",
    "mensaje": "Una nueva vuelta al sol siempre merece su momento. En esta ocasión, Clari, te deseamos especialmente que alguna sorpresa linda se cuele entre las horas. En 5º Informática, hoy hay un motivo extra para sumar un saludo. Deseamos que cada paso de esta nueva vuelta encuentre motivos para seguir adelante con entusiasmo."
  },
  {
    "nombre": "Victoria",
    "apellido": "Bertolino",
    "dia": 21,
    "mes": 4,
    "curso": "5º Informática",
    "apodo": "Vicky",
    "mensaje": "Una nueva vuelta para Vicky. Hoy el tiempo hace una parada para celebrar. Que puedas decir al final del día que valió la pena, y que la buena energía encuentre la forma de quedarse. Que esta jornada en 5º Informática tenga un toque distinto por tu cumpleaños. Deseamos que encuentres oportunidades para crecer, probar cosas nuevas y celebrar cada avance."
  },
  {
    "nombre": "Juan Martín",
    "apellido": "Borda",
    "dia": 6,
    "mes": 3,
    "curso": "5º Informática",
    "apodo": "Borda",
    "mensaje": "Una nueva vuelta para Borda. Hoy comienza otro año personal para llenar de experiencias. Que puedas decir al final del día que valió la pena, y que el cumpleaños se convierta en una excusa perfecta para disfrutar. Que esta vuelta nueva te deje crecer a tu ritmo y disfrutar el camino mientras tanto."
  },
  {
    "nombre": "Esteban Luis",
    "apellido": "Cabral",
    "dia": 4,
    "mes": 5,
    "curso": "5º Informática",
    "apodo": "Esteban",
    "mensaje": "A Esteban le toca hoy recibir los saludos. Hoy hay permiso para hacer del día algo distinto; ojalá que haya tiempo para compartir y también para descansar. Ojalá este nuevo ciclo traiga oportunidades que hoy todavía ni imaginás."
  },
  {
    "nombre": "Bautista",
    "apellido": "Cravero",
    "dia": 3,
    "mes": 5,
    "curso": "5º Informática",
    "apodo": "Colo",
    "mensaje": "Colo, la fecha ya hizo su parte y llegó; ahora toca que el festejo encuentre su mejor momento cuando menos lo esperes. Que el próximo año personal tenga equilibrio entre sueños por cumplir y momentos para disfrutar."
  },
  {
    "nombre": "Lautaro",
    "apellido": "Culasso",
    "dia": 3,
    "mes": 3,
    "curso": "5º Informática",
    "apodo": "Cula",
    "mensaje": "Un saludo grande para Cula. Hoy hay permiso para hacer del día algo distinto; por eso, que el día tenga una mezcla justa de alegría y tranquilidad. Esta fecha le agrega un pequeño festejo al día de 5º Informática. Deseamos un año con espacio para aprender, compartir, equivocarse, volver a intentar y disfrutar."
  },
  {
    "nombre": "Máximo",
    "apellido": "Deluchi",
    "dia": 14,
    "mes": 1,
    "curso": "5º Informática",
    "apodo": "Tanke",
    "mensaje": "Hoy vale bajar un cambio, Tanke. Este cumpleaños abre una nueva vuelta llena de posibilidades. Ojalá que aparezcan pequeñas sorpresas capaces de alegrarte el día. Ojalá cada estación de este nuevo año te encuentre con algo bueno entre manos."
  },
  {
    "nombre": "Juan Ignacio",
    "apellido": "Federico",
    "dia": 15,
    "mes": 12,
    "curso": "5º Informática",
    "apodo": "JuanFe",
    "mensaje": "Para JuanFe, un deseo especial en este cumpleaños: que puedas disfrutar incluso de los momentos más tranquilos. Que el cumpleaños llegue con liviandad y entusiasmo. Deseamos que esta nueva vuelta te encuentre con ganas de descubrir, crear y disfrutar."
  },
  {
    "nombre": "Lautaro Jesús",
    "apellido": "Ferrero",
    "dia": 7,
    "mes": 1,
    "curso": "5º Informática",
    "apodo": "Ferre",
    "mensaje": "Hoy toca guardar la rutina por un rato. Y como hoy el festejo es para Ferre, ojalá que aparezcan pequeñas sorpresas capaces de alegrarte el día. Que el cumpleaños se haga sentir también en 5º Informática. Que esta etapa nueva venga con buenas decisiones, aprendizajes útiles y alegría compartida."
  },
  {
    "nombre": "Carola Luz",
    "apellido": "Galli Ballari",
    "dia": 20,
    "mes": 1,
    "curso": "5º Informática",
    "apodo": "Caro",
    "mensaje": "Hoy merece una pausa especial. En esta ocasión, Caro, te deseamos especialmente que el cumpleaños se convierta en una excusa perfecta para disfrutar. Que el cumpleaños se haga sentir también en 5º Informática. Que lo que siga esté lleno de experiencias que sumen y personas que hagan bien."
  },
  {
    "nombre": "Sofía",
    "apellido": "Gaydou",
    "dia": 11,
    "mes": 10,
    "curso": "5º Informática",
    "apodo": "Sofi",
    "mensaje": "Una nueva vuelta para Sofi. Hoy puede ser uno de esos días que quedan en la memoria. Que puedas decir al final del día que valió la pena, y que todo lo cotidiano hoy se sienta un poco más festivo. Que el saludo de 5º Informática se sume a todos los que lleguen durante el día. Que la próxima vuelta al calendario venga con desafíos que te hagan crecer y descansos que te permitan disfrutarlos."
  },
  {
    "nombre": "Ana",
    "apellido": "Matter",
    "dia": 11,
    "mes": 5,
    "curso": "5º Informática",
    "apodo": "Anita",
    "mensaje": "Un cumpleaños no necesita grandes discursos, Anita. Alcanza con desear que no haya apuro y sí muchas ganas de celebrar. Que el cumpleaños se haga sentir también en 5º Informática. Que el año nuevo en tu calendario personal tenga capítulos muy distintos, pero todos valiosos."
  },
  {
    "nombre": "Franco",
    "apellido": "Montini",
    "dia": 4,
    "mes": 9,
    "curso": "5º Informática",
    "apodo": "Franco",
    "mensaje": "Hay días que se sienten distintos desde temprano. Con ese espíritu, Franco, esperamos que puedas cerrar la jornada con la sensación de haberla aprovechado. En 5º Informática, la fecha de hoy no debería pasar desapercibida. Que lo próximo combine momentos tranquilos con aventuras que valga la pena contar."
  },
  {
    "nombre": "Lucas Pablo",
    "apellido": "Montini",
    "dia": 6,
    "mes": 8,
    "curso": "5º Informática",
    "apodo": "Lucas",
    "mensaje": "Lucas, que el festejo tenga esa espontaneidad que hace todo más divertido. Hoy toca recibir saludos y disfrutar cada uno; después de todo, una fecha así lo merece. Entre clases y proyectos, que en 5º Informática también se haga lugar para este cumpleaños. Que esta vuelta tenga espacio para nuevas amistades, aprendizajes y decisiones que te acerquen a lo que querés."
  },
  {
    "nombre": "Santiago Nicolás",
    "apellido": "Morat",
    "dia": 8,
    "mes": 2,
    "curso": "5º Informática",
    "apodo": "Bombe",
    "mensaje": "Este cumpleaños abre una nueva vuelta llena de posibilidades. Para vos, Bombe, deseamos que alguna sorpresa linda se cuele entre las horas. Esta fecha le agrega un pequeño festejo al día de 5º Informática. Que los próximos meses te traigan ideas nuevas, buenos encuentros y metas alcanzables."
  },
  {
    "nombre": "Maca",
    "apellido": "Pittavino",
    "dia": 17,
    "mes": 1,
    "curso": "5º Informática",
    "apodo": "Maca",
    "mensaje": "Para Maca, un deseo especial en este cumpleaños: que puedas cerrar la jornada con la sensación de haberla aprovechado. Una nueva vuelta al sol siempre merece su momento. Hoy 5º Informática tiene una fecha especial marcada en el calendario. Que lo que viene te permita mirar hacia adelante con curiosidad y hacia atrás con satisfacción."
  },
  {
    "nombre": "Juan Bautista",
    "apellido": "Re",
    "dia": 28,
    "mes": 4,
    "curso": "5º Informática",
    "apodo": "Bauti",
    "mensaje": "Bauti, hoy queremos desearte algo sencillo: que puedas cerrar la jornada con la sensación de haberla aprovechado. Que el saludo de 5º Informática se sume a todos los que lleguen durante el día. Que el año que comienza tenga momentos de calma, otros de emoción y muchos de aprendizaje."
  },
  {
    "nombre": "Clara",
    "apellido": "Rodríguez",
    "dia": 20,
    "mes": 5,
    "curso": "5º Informática",
    "apodo": "Clari",
    "mensaje": "Clari, hoy queremos desearte algo sencillo: que el festejo encuentre su mejor momento cuando menos lo esperes. Que esta jornada en 5º Informática tenga un toque distinto por tu cumpleaños. Que lo próximo combine momentos tranquilos con aventuras que valga la pena contar."
  },
  {
    "nombre": "Juan Bautista",
    "apellido": "Rollón",
    "dia": 1,
    "mes": 6,
    "curso": "5º Informática",
    "apodo": "Rollon",
    "mensaje": "Un saludo grande para Rollon. Que la celebración llegue con buena compañía; por eso, que cada momento tenga algo propio para disfrutar. Entre clases y proyectos, que en 5º Informática también se haga lugar para este cumpleaños. Deseamos un año que deje huella por las experiencias, no por la velocidad con que pase."
  },
  {
    "nombre": "Juliana",
    "apellido": "Trinchieri",
    "dia": 5,
    "mes": 2,
    "curso": "5º Informática",
    "apodo": "Juli",
    "mensaje": "Este día puede convertirse en un recuerdo muy lindo, Juli. La idea para hoy es simple: que puedas disfrutar incluso de los momentos más tranquilos. Esta fecha le agrega un pequeño festejo al día de 5º Informática. Que esta vuelta nueva te deje crecer a tu ritmo y disfrutar el camino mientras tanto."
  }
];
