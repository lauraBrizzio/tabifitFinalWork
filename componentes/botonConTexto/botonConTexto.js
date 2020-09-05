function cargarTemplate(referenciaTemplate, instanciaComponente) {
    const template = document.querySelector(referenciaTemplate);
    const templateContent = template.content;
    instanciaComponente.attachShadow({ mode: "open" })
      .appendChild(templateContent.cloneNode(true));
  }
  class BotonConTexto extends HTMLElement {
      constructor() {
          super ();
          cargarTemplate ("#boton-con-texto", this);
      }
  }
  customElements.define ("boton-con-texto",BotonConTexto);