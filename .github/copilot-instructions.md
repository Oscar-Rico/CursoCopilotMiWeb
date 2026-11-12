# Instrucciones del proyecto para Copilot

## Contexto general
Este repositorio es una landing page estática para la marca "Frío Norte". El proyecto está desarrollado con HTML, CSS y JavaScript vanilla, sin dependencias externas ni frameworks. El objetivo es mantener una web accesible, visualmente consistente y fácil de mantener.

## Tecnologías y enfoque
- HTML5 semántico y accesible.
- CSS moderno y responsivo, con estilos reutilizables.
- JavaScript vanilla para interacciones del DOM.
- No añadir dependencias ni librerías externas salvo que el proyecto lo requiera explícitamente.
- Las funciones de lógica de negocio deben mantenerse simples y testeables.

## Estructura recomendada
- `index.html`: estructura y contenido principal de la página.
- `styles.css`: estilos visuales, layout y diseño responsive.
- `main.js`: comportamiento interactivo de la web (menús, formularios, reloj, regiones del mapa y elementos dinámicos).
- `calculadora.js`: funciones auxiliares y lógica de cálculo.
- `calculadora.test.js`: pruebas automáticas del código JavaScript.
- `README.md`: documentación general del proyecto.

## Convenciones de código
- Escribe código claro, legible y consistente con el estilo existente.
- Usa nombres descriptivos en JavaScript y CSS.
- Mantén las funciones pequeñas y con una sola responsabilidad.
- En JavaScript del DOM, comprueba siempre si el elemento existe antes de manipularlo.
- Evita duplicar lógica; reutiliza patrones ya presentes en el proyecto.
- Mantén el código compatible con navegadores modernos sin requerir transpiladores.
- No añadas comentarios innecesarios; solo documenta lo que realmente ayude a entender el comportamiento.

## Accesibilidad
- Prioriza HTML semántico (`header`, `nav`, `main`, `section`, `footer`, etc.).
- Mantén buenas relaciones de contraste y texto legible.
- Usa `aria-label`, `aria-live`, `aria-expanded` y `role` cuando sea necesario.
- Asegura que los elementos interactivos sean operables por teclado.
- Conserva el enfoque visual (`:focus-visible`) en botones, enlaces y controles.

## Estilo visual y UX
- Mantén la identidad visual actual: elegante, cálida y cercana a un branding premium para productos frescos.
- Preserva el diseño responsive para pantallas pequeñas y medianas.
- Evita cambios visuales drásticos que rompan la coherencia del sitio.
- Cuando modifiques la interfaz, asegúrate de conservar la experiencia de usuario y la estructura general del layout.

## Pruebas y validación
- Para validar la lógica JavaScript, usa el runner nativo de Node:
  - `node --test calculadora.test.js`
- Si cambias la lógica de negocio o se añaden nuevas funciones, añade pruebas que cubran el comportamiento esperado.
- Antes de cerrar cambios, verifica que no se haya roto la funcionalidad existente.

## Reglas de contribución
- Haz cambios precisos y orientados al problema solicitado.
- No introduzcas refactors innecesarios si no son necesarios para la tarea.
- Si modificas la interfaz, considera también el impacto en accesibilidad, responsive y coherencia visual.
- Mantén la documentación actualizada si cambian las instrucciones de uso o la estructura del proyecto.
- No modifiques archivos de configuración o dependencias sin una necesidad clara y justificada.

## Objetivo general
Contribuir a un proyecto sencillo, mantenible y bien estructurado, priorizando claridad, accesibilidad y calidad del código sin introducir complejidad innecesaria.
