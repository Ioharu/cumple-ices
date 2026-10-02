"use strict";

const MESES = ["", "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const COLORES_CURSO = { "1": "#8f1d4a", "2": "#a43a62", "3": "#b86a45", "4": "#7d4664", "5": "#5f314d", "profe": "#9a7a3e" };
const ZONA_HORARIA = "America/Argentina/Cordoba";

function partesHoy() {
  const p = new Intl.DateTimeFormat("es-AR", { timeZone: ZONA_HORARIA, year: "numeric", month: "numeric", day: "numeric" }).formatToParts(new Date());
  const get = tipo => Number(p.find(x => x.type === tipo)?.value || 0);
  return { anio: get("year"), mes: get("month"), dia: get("day") };
}

function fechaActualTexto() {
  const { anio, mes, dia } = partesHoy();
  return `${String(dia).padStart(2,"0")} / ${String(mes).padStart(2,"0")} / ${anio}`;
}

function escaparHTML(valor) {
  return String(valor ?? "").replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#039;",'"':"&quot;"}[c]));
}

function nombreVisible(a) {
  return String(a.apodo || "").trim() || `${a.nombre || ""} ${a.apellido || ""}`.trim();
}

function anioDelCurso(curso) {
  const c = String(curso || "").trim();
  if (/profe/i.test(c)) return "profe";
  const m = c.match(/^\s*([1-5])/);
  return m ? m[1] : "profe";
}

function imagenDelCurso(curso) { return `imagenes/curso-${anioDelCurso(curso)}.png`; }
function colorDelCurso(curso) { return COLORES_CURSO[anioDelCurso(curso)] || COLORES_CURSO["1"]; }
function formatearFecha(dia, mes) { return `${Number(dia)} de ${MESES[Number(mes)] || ""}`; }

function obtenerSigno(dia, mes) {
  dia = Number(dia); mes = Number(mes);
  const limites = [[1,19,"Capricornio"],[2,18,"Acuario"],[3,20,"Piscis"],[4,19,"Aries"],[5,20,"Tauro"],[6,20,"Géminis"],[7,22,"Cáncer"],[8,22,"Leo"],[9,22,"Virgo"],[10,22,"Libra"],[11,21,"Escorpio"],[12,21,"Sagitario"]];
  for (const [m,d,s] of limites) if (mes < m || (mes === m && dia <= d)) return s;
  return "Capricornio";
}

function fechaUTCValida(anio, mes, dia) {
  const f = new Date(Date.UTC(anio, mes - 1, dia));
  return f.getUTCFullYear() === anio && f.getUTCMonth() === mes - 1 && f.getUTCDate() === dia ? f : null;
}

function esBisiesto(anio) { return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0; }

// Los nacidos el 29/2 festejan el 28/2 en los años no bisiestos.
function coincideConHoy(a, h) {
  const dia = Number(a.dia), mes = Number(a.mes);
  if (dia === 29 && mes === 2 && !esBisiesto(h.anio)) return h.dia === 28 && h.mes === 2;
  return dia === h.dia && mes === h.mes;
}

function fechaCumpleanios(anio, mes, dia) {
  if (mes === 2 && dia === 29 && !esBisiesto(anio)) dia = 28;
  return fechaUTCValida(anio, mes, dia);
}

function diasHastaCumpleanios(dia, mes) {
  const h = partesHoy();
  const hoy = Date.UTC(h.anio, h.mes - 1, h.dia);
  let f = fechaCumpleanios(h.anio, Number(mes), Number(dia));
  if (!f) return 0;
  if (f.getTime() <= hoy) f = fechaCumpleanios(h.anio + 1, Number(mes), Number(dia));
  if (!f) return 0;
  return Math.round((f.getTime() - hoy) / 86400000);
}

function mensajeCumpleanios(a) {
  if (String(a.mensaje || "").trim()) return a.mensaje.trim();
  const destinatario = /profe/i.test(String(a.curso || "")) ? String(a.nombre || "").trim() : nombreVisible(a);
  return `¡Feliz cumpleaños, ${destinatario}! Todo el ICES te desea un excelente día.`;
}

function tarjetaHoy(a) {
  return `<article class="tarjeta tarjeta-hoy" style="--color-curso: ${colorDelCurso(a.curso)};">
    <div class="hoy-media">
      <img src="imagenes/cumple.jpeg" alt="Feliz cumpleaños" onerror="this.closest('.tarjeta').classList.add('sin-imagen')">
    </div>
    <div class="tarjeta-contenido">
      <p class="etiqueta-curso">${escaparHTML(a.curso)}</p>
      <h3>${escaparHTML(nombreVisible(a))}</h3>
      <p class="tarjeta-fecha">${escaparHTML(formatearFecha(a.dia, a.mes))} · ${escaparHTML(obtenerSigno(a.dia, a.mes))}</p>
      <p class="tarjeta-felicitacion">${escaparHTML(mensajeCumpleanios(a))}</p>
    </div>
  </article>`;
}

function tarjetaAlumno(a, opciones = {}) {
  if (opciones.esHoy) return tarjetaHoy(a);
  const mostrarDias = Object.prototype.hasOwnProperty.call(opciones, "dias");
  const dias = Number(opciones.dias || 0);
  const bloqueDias = mostrarDias ? `<p class="tarjeta-dias">${dias === 1 ? "Falta 1 día" : `Faltan ${dias} días`}</p>` : "";
  return `<article class="tarjeta" style="--color-curso: ${colorDelCurso(a.curso)};">
    <div class="tarjeta-imagen-contenedor">
      <img class="tarjeta-imagen" src="${escaparHTML(imagenDelCurso(a.curso))}" alt="Imagen institucional correspondiente a ${escaparHTML(a.curso)}" onerror="this.closest('.tarjeta-imagen-contenedor').hidden=true">
    </div>
    <div class="tarjeta-contenido">
      <p class="etiqueta-curso">${escaparHTML(a.curso)}</p>
      <h3>${escaparHTML(nombreVisible(a))}</h3>
      <p class="tarjeta-fecha">${escaparHTML(formatearFecha(a.dia, a.mes))}</p>
      <p class="tarjeta-dato">Signo: ${escaparHTML(obtenerSigno(a.dia, a.mes))}</p>
      ${bloqueDias}
    </div>
  </article>`;
}

function mensajeEstado(texto, tipo = "informacion") { return `<p class="mensaje mensaje-${escaparHTML(tipo)}">${escaparHTML(texto)}</p>`; }

function ordenarNombre(a,b) {
  return nombreVisible(a).localeCompare(nombreVisible(b), "es", { sensitivity: "base" });
}

function cumpleaniosHoy() {
  const h = partesHoy();
  return CUMPLEANIOS_ICES.filter(a => coincideConHoy(a, h)).sort(ordenarNombre);
}

function proximosCumpleanios(limite, curso = "") {
  const h = partesHoy();
  return CUMPLEANIOS_ICES
    .filter(a => !coincideConHoy(a, h))
    .filter(a => !curso || a.curso === curso)
    .map(a => ({ ...a, dias_faltan: diasHastaCumpleanios(a.dia, a.mes) }))
    .sort((a,b) => a.dias_faltan - b.dias_faltan || Number(a.mes)-Number(b.mes) || Number(a.dia)-Number(b.dia) || nombreVisible(a).localeCompare(nombreVisible(b), "es", { sensitivity:"base" }))
    .slice(0, limite);
}

function cargarTema() {
  const boton = document.getElementById("boton-tema");
  const refrescar = () => {
    if (!boton) return;
    const oscuro = document.documentElement.dataset.tema === "oscuro";
    boton.textContent = oscuro ? "☀ Modo claro" : "☾ Modo oscuro";
    boton.setAttribute("aria-pressed", oscuro ? "true" : "false");
  };
  refrescar();
  boton?.addEventListener("click", () => {
    const oscuro = document.documentElement.dataset.tema === "oscuro";
    if (oscuro) {
      delete document.documentElement.dataset.tema;
      try { localStorage.setItem("tema-ices", "claro"); } catch(e) {}
    } else {
      document.documentElement.dataset.tema = "oscuro";
      try { localStorage.setItem("tema-ices", "oscuro"); } catch(e) {}
    }
    refrescar();
  });
}

function cargarFechaEncabezado() {
  document.querySelectorAll(".marca-fecha").forEach(el => el.textContent = fechaActualTexto());
}

function iniciarInicio() {
  const hoy = document.getElementById("lista-hoy");
  const prox = document.getElementById("lista-proximos-inicio");
  if (!hoy || !prox) return;
  const cumple = cumpleaniosHoy();
  hoy.innerHTML = cumple.length ? cumple.map(a => tarjetaAlumno(a, { esHoy: true })).join("") : mensajeEstado("Hoy no hay cumpleaños registrados.");
  prox.innerHTML = proximosCumpleanios(5).map(a => tarjetaAlumno(a, { dias: a.dias_faltan })).join("");
}

function iniciarProximos() {
  const select = document.getElementById("filtro-curso");
  const lista = document.getElementById("lista-proximos");
  const form = document.getElementById("formulario-filtro");
  if (!select || !lista) return;
  const cursos = [...new Set(CUMPLEANIOS_ICES.map(a => a.curso).filter(Boolean))].sort((a,b) => a.localeCompare(b, "es", { numeric:true, sensitivity:"base" }));
  select.insertAdjacentHTML("beforeend", cursos.map(c => `<option value="${escaparHTML(c)}">${escaparHTML(c)}</option>`).join(""));
  try {
    const q = new URLSearchParams(location.search).get("curso") || "";
    if (cursos.includes(q)) select.value = q;
  } catch(e) {}
  const render = () => {
    const filas = proximosCumpleanios(10, select.value);
    lista.innerHTML = filas.length ? filas.map(a => tarjetaAlumno(a, { dias: a.dias_faltan })).join("") : mensajeEstado("No hay cumpleaños registrados para el curso seleccionado.");
    try {
      const u = new URL(location.href);
      select.value ? u.searchParams.set("curso", select.value) : u.searchParams.delete("curso");
      history.replaceState(null, "", u);
    } catch(e) {}
  };
  form?.addEventListener("submit", e => e.preventDefault());
  select.addEventListener("change", render);
  render();
}

function iniciarBuscar() {
  const formFecha = document.getElementById("formulario-busqueda-fecha");
  const inputFecha = document.getElementById("fecha-busqueda");
  const resFecha = document.getElementById("resultado-busqueda-fecha");
  if (formFecha && inputFecha && resFecha) {
    formFecha.addEventListener("submit", e => {
      e.preventDefault();
      if (!inputFecha.value) return;
      const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(inputFecha.value);
      if (!m) { resFecha.innerHTML = mensajeEstado("No hay cumpleaños registrados para esa fecha."); return; }
      const dia = Number(m[3]), mes = Number(m[2]);
      const filas = CUMPLEANIOS_ICES.filter(a => Number(a.dia) === dia && Number(a.mes) === mes).sort(ordenarNombre);
      resFecha.innerHTML = filas.length ? filas.map(a => tarjetaAlumno(a)).join("") : mensajeEstado("No hay cumpleaños registrados para esa fecha.");
    });
  }

  const formNombre = document.getElementById("formulario-busqueda-nombre");
  const campo = document.getElementById("texto-busqueda-nombre");
  const resultados = document.getElementById("resultado-busqueda-nombre");
  if (!formNombre || !campo || !resultados) return;
  let temporizador = null;
  formNombre.addEventListener("submit", e => e.preventDefault());
  campo.addEventListener("input", () => {
    clearTimeout(temporizador);
    const texto = campo.value.trim();
    if (texto.length < 2) { resultados.innerHTML = ""; resultados.setAttribute("aria-busy", "false"); return; }
    resultados.setAttribute("aria-busy", "true");
    resultados.innerHTML = '<p class="mensaje">Buscando…</p>';
    temporizador = setTimeout(() => {
      const normalizarBusqueda = valor => String(valor || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLocaleLowerCase("es");
      const q = normalizarBusqueda(texto);
      const filas = CUMPLEANIOS_ICES.filter(a => normalizarBusqueda(`${a.apodo} ${a.nombre} ${a.apellido}`).includes(q)).sort(ordenarNombre);
      const LIMITE = 30;
      const aviso = filas.length > LIMITE ? mensajeEstado(`Se muestran ${LIMITE} de ${filas.length} resultados. Escribí más letras para acotar la búsqueda.`) : "";
      resultados.innerHTML = filas.length ? filas.slice(0, LIMITE).map(a => tarjetaAlumno(a)).join("") + aviso : mensajeEstado(`No se encontraron resultados para "${texto}".`);
      resultados.setAttribute("aria-busy", "false");
    }, 300);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  cargarTema();
  cargarFechaEncabezado();
  const pagina = document.body.dataset.pagina;
  if (pagina === "inicio") iniciarInicio();
  if (pagina === "proximos") iniciarProximos();
  if (pagina === "buscar") iniciarBuscar();
});
