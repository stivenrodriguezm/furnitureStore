(this.webpackJsonpintermuebles=this.webpackJsonpintermuebles||[]).push([[0],{30:function(e,s,c){},31:function(e,s,c){"use strict";c.r(s);var t=c(2),a=c.n(t),n=c(17),i=c.n(n),o=c.p+"static/media/logointerm.ef357807.webp",r=c(1);var l=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("header",{children:Object(r.jsxs)("div",{className:"divHeader container",children:[Object(r.jsx)("div",{className:"logo",children:Object(r.jsx)("a",{href:"#inicio",children:Object(r.jsx)("img",{src:o,height:"60px",alt:"Logo Intermuebles"})})}),Object(r.jsxs)("nav",{className:"menuHeader",children:[Object(r.jsx)("a",{href:"#inicio",children:"Inicio"}),Object(r.jsx)("a",{href:"#catalogoSeccionado",children:"Cat\xe1logo"}),Object(r.jsx)("a",{href:"#nosotros",children:"Sobre Nosotros"}),Object(r.jsx)("a",{href:"#contactanos",children:"Contactanos"})]})]})})})},d=c.p+"static/media/portada2.864aa962.webp";var j=function(){return Object(r.jsxs)("div",{className:"divPortada",id:"inicio",children:[Object(r.jsx)("img",{rel:"preload",src:d,className:"fotoPortada",alt:"foto portada pagina intermuebles"}),Object(r.jsx)("div",{className:"textoPortada",children:Object(r.jsx)("h1",{children:"Muebles para el hogar"})})]})},b=c(4),m=[[c.p+"static/media/comedor1.525ce3b8.webp","id1","1","i1","Comedor1","Descripci\xf3n comedor 1"],[c.p+"static/media/comedor2.9f738f97.webp","id2","2","i2","Comedor2","Descripci\xf3n comedor 2"],[c.p+"static/media/comedor3.09105cc2.webp","id3","3","i3","Comedor3","Descripci\xf3n comedor 3"],[c.p+"static/media/comedor4.bd088fcc.webp","id4","4","i4","Comedor4","Descripci\xf3n comedor 4"],[c.p+"static/media/comedor5.285e2f13.webp","id5","5","i5","Comedor5","Descripci\xf3n comedor 5"],[c.p+"static/media/comedor6.47c61667.webp","id6","6","i6","Comedor6","Descripci\xf3n comedor 6"],[c.p+"static/media/comedor7.59a7b647.webp","id7","7","i7","Comedor7","Descripci\xf3n comedor 7"]];function u(e){var s=document.getElementById("galeria"),c=e.target.id,t=Number(c[2]);return s.classList.remove("noneDisplay"),s.classList.add("galeria"),s.children[t].classList.remove("noneDisplay"),s.children[t].classList.add("active")}function x(){var e,s=document.getElementById("galeria"),c=document.getElementsByClassName("active"),t=c[0].id,a=Number(t[1]);for(e=0;e<a;e++)e>0&&(c[0].classList.add("noneDisplay"),c[0].classList.remove("active"),s.children[e].classList.remove("noneDisplay"),s.children[e].classList.add("active"))}function h(){var e=document.getElementById("galeria"),s=document.getElementsByClassName("active"),c=s[0].id,t=Number(c[1]),a=t++;a<e.childElementCount-3&&(s[0].classList.add("noneDisplay"),s[0].classList.remove("active"),e.children[a+1].classList.remove("noneDisplay"),e.children[a+1].classList.add("active"))}function O(){var e=document.getElementById("galeria"),s=document.getElementsByClassName("active");return s&&(s[0].classList.add("noneDisplay"),s[0].classList.remove("active")),e.classList.remove("galeria"),e.classList.add("noneDisplay")}var p=function(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"comedoresCS animado",children:[Object(r.jsx)("h2",{children:"Comedores"},"titulo"),Object(r.jsx)("div",{className:"divImagenCS",id:"divImagenCS",children:m.map((function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:u,className:"btnGaleria",children:Object(r.jsx)("img",{src:e[0],className:"imagenCS",id:e[1],alt:e[4]},e[1])})},e[4])}))}),Object(r.jsxs)("div",{className:"noneDisplay",id:"galeria",children:[Object(r.jsx)("button",{onClick:x,className:"btnScroll",children:Object(r.jsx)(b.a,{})}),m.map((function(e){return Object(r.jsx)("img",{src:e[0],className:"noneDisplay",id:e[3],alt:e[2]},e[4])})),Object(r.jsx)("div",{children:Object(r.jsx)("p",{className:"cerrar",onClick:O,children:"X"})}),Object(r.jsx)("button",{onClick:h,className:"btnScroll",children:Object(r.jsx)(b.b,{})})]})]}),Object(r.jsx)("button",{onClick:function(){return document.getElementById("divImagenCS").scrollLeft-=180},className:"btnScroll btnLeft",children:Object(r.jsx)(b.a,{})}),Object(r.jsx)("button",{onClick:function(){return document.getElementById("divImagenCS").scrollLeft+=180},className:"btnScroll btnRight",children:Object(r.jsx)(b.b,{})})]})};var v=function(){return Object(r.jsxs)("div",{className:"divCSmargin animado",children:[Object(r.jsxs)("div",{className:"comedoresCS",children:[Object(r.jsx)("h2",{children:"Alcobas"},"titulo"),Object(r.jsx)("div",{className:"divImagenCS",id:"divImagenCSalcobas",children:m.map((function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:u,className:"btnGaleria",children:Object(r.jsx)("img",{src:e[0],className:"imagenCS",id:e[1],alt:e[4]},e[1])})},e[4])}))}),Object(r.jsxs)("div",{className:"noneDisplay",id:"galeria",children:[Object(r.jsx)("button",{onClick:x,className:"btnScroll",children:Object(r.jsx)(b.a,{})}),m.map((function(e){return Object(r.jsx)("img",{src:e[0],className:"noneDisplay",id:e[3],alt:e[2]},e[4])})),Object(r.jsx)("div",{children:Object(r.jsx)("p",{className:"cerrar",onClick:O,children:"CERRAR"})}),Object(r.jsx)("button",{onClick:h,className:"btnScroll",children:Object(r.jsx)(b.b,{})})]})]}),Object(r.jsx)("button",{onClick:function(){return document.getElementById("divImagenCSalcobas").scrollLeft-=180},className:"btnScroll btnLeft",children:Object(r.jsx)(b.a,{})}),Object(r.jsx)("button",{onClick:function(){return document.getElementById("divImagenCSalcobas").scrollLeft+=180},className:"btnScroll btnRight",children:Object(r.jsx)(b.b,{})})]})};var g=function(){return Object(r.jsxs)("div",{className:"divCSmargin animado",children:[Object(r.jsxs)("div",{className:"comedoresCS",children:[Object(r.jsx)("h2",{children:"Salas"},"titulo"),Object(r.jsx)("div",{className:"divImagenCS",id:"divImagenCSsalas",children:m.map((function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:u,className:"btnGaleria",children:Object(r.jsx)("img",{src:e[0],className:"imagenCS",id:e[1],alt:e[4]},e[1])})},e[4])}))}),Object(r.jsxs)("div",{className:"noneDisplay",id:"galeria",children:[Object(r.jsx)("button",{onClick:x,className:"btnScroll",children:Object(r.jsx)(b.a,{})}),m.map((function(e){return Object(r.jsx)("img",{src:e[0],className:"noneDisplay",id:e[3],alt:e[2]},e[4])})),Object(r.jsx)("div",{children:Object(r.jsx)("p",{className:"cerrar",onClick:O,children:"CERRAR"})}),Object(r.jsx)("button",{onClick:h,className:"btnScroll",children:Object(r.jsx)(b.b,{})})]})]}),Object(r.jsx)("button",{onClick:function(){return document.getElementById("divImagenCSsalas").scrollLeft-=180},className:"btnScroll btnLeft",children:Object(r.jsx)(b.a,{})}),Object(r.jsx)("button",{onClick:function(){return document.getElementById("divImagenCSsalas").scrollLeft+=180},className:"btnScroll btnRight",children:Object(r.jsx)(b.b,{})})]})};var N=function(){return Object(r.jsxs)("div",{className:"divCSmargin animado",children:[Object(r.jsxs)("div",{className:"comedoresCS",children:[Object(r.jsx)("h2",{children:"Accesorios"},"titulo"),Object(r.jsx)("div",{className:"divImagenCS",id:"divImagenCSaccesorios",children:m.map((function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:u,className:"btnGaleria",children:Object(r.jsx)("img",{src:e[0],className:"imagenCS",id:e[1],alt:e[4]},e[1])})},e[4])}))}),Object(r.jsxs)("div",{className:"noneDisplay",id:"galeria",children:[Object(r.jsx)("button",{onClick:x,className:"btnScroll",children:Object(r.jsx)(b.a,{})}),m.map((function(e){return Object(r.jsx)("img",{src:e[0],className:"noneDisplay",id:e[3],alt:e[2]},e[4])})),Object(r.jsx)("div",{children:Object(r.jsx)("p",{className:"cerrar",onClick:O,children:"CERRAR"})}),Object(r.jsx)("button",{onClick:h,className:"btnScroll",children:Object(r.jsx)(b.b,{})})]})]}),Object(r.jsx)("button",{onClick:function(){return document.getElementById("divImagenCSaccesorios").scrollLeft-=180},className:"btnScroll btnLeft",children:Object(r.jsx)(b.a,{})}),Object(r.jsx)("button",{onClick:function(){return document.getElementById("divImagenCSaccesorios").scrollLeft+=180},className:"btnScroll btnRight",children:Object(r.jsx)(b.b,{})})]})};var C=function(){var e=window.screen.availHeight;function s(){for(var s=Number(e-200),c=document.querySelectorAll(".animado"),t=document.documentElement.scrollTop,a=0;a<c.length;a++){c[a].offsetTop-s<t&&(c[a].style.opacity=1)}}return Object(t.useEffect)((function(){window.addEventListener("scroll",s)})),Object(r.jsxs)("div",{id:"catalogoSeccionado",children:[Object(r.jsxs)("h3",{className:"container titloCatalogoInicio",children:["Catalogo de ",Object(r.jsx)("span",{children:"Muebles"})]}),Object(r.jsxs)("div",{className:"divContainerCS",children:[Object(r.jsx)(p,{}),Object(r.jsx)(v,{}),Object(r.jsx)(g,{}),Object(r.jsx)(N,{})]})]})},f=c.p+"static/media/edificio.846ee6ac.webp",y=c(11),S=c.p+"static/media/INTERMUEBLES19.65569c57.webp";var I=function(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"nosotrosContainer",id:"nosotros",children:[Object(r.jsxs)("div",{className:"nosotros",children:[Object(r.jsx)("h4",{className:"animado",children:"Sobre Nosotros"}),Object(r.jsxs)("div",{className:"divNosotros container animado",children:[Object(r.jsx)("div",{className:"edificio",children:Object(r.jsx)("img",{src:f,alt:"Foto almacen Intermuebles"})}),Object(r.jsxs)("div",{className:"textoNosotros",children:["Nos dedicamos a llenar tus espacios con dise\xf1o y calidad para que en tus momentos familiares y con amigos nunca falten el estilo y elegancia que te caracterizan",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"Desde el a\xf1o 1992 estamos entregando muebles exclusivos y dise\xf1os arm\xf3nicos en todo el territorio nacional. Contamos con un equipo comprometido con satisfacer tus necesidades y asesorarte para que elijas los materiales, colores y dise\xf1os que mejor se adapten a tu estilo."]})]})]}),Object(r.jsx)("div",{className:"nosotrosDosP",children:Object(r.jsxs)("div",{className:"container NosotrosDos animado",children:[Object(r.jsxs)("div",{className:"nosotrosAtributo",children:[Object(r.jsx)(y.a,{}),Object(r.jsx)("h4",{children:"Calidad Garantizada"}),Object(r.jsx)("p",{children:"Maderas seleccionadas y materiales de la mejor calidad"})]}),Object(r.jsxs)("div",{className:"nosotrosAtributo",children:[Object(r.jsx)(y.c,{}),Object(r.jsx)("h4",{children:"Seguridad"}),Object(r.jsx)("p",{children:"Contamos con un equipo de expertos dispuestos a solucionar tus dudas y a brindarte la mejor atenci\xf3n"})]}),Object(r.jsxs)("div",{className:"nosotrosAtributo",children:[Object(r.jsx)(y.b,{}),Object(r.jsx)("h4",{children:"Transporte e Instalaci\xf3n Gratis"}),Object(r.jsx)("p",{className:"lessMargin",children:"Por compras superiores a $1'000.000 en la ciudad de Bogot\xe1"})]})]})})]}),Object(r.jsx)("div",{className:"backgroundPQ",children:Object(r.jsxs)("div",{className:"porQueNosotros",children:[Object(r.jsx)("h4",{className:"animado",children:"\xbfPor qu\xe9 Comprar en Intermuebles?"}),Object(r.jsxs)("div",{className:"divPQNosotros animado",children:[Object(r.jsxs)("ul",{className:"textoPorQueNosotros",children:[Object(r.jsxs)("li",{children:["Te ofrecemos ",Object(r.jsx)("span",{children:"garant\xeda"})," de hasta 10 a\xf1os en la mayoria de nuestros productos, pues los materiales que utilizamos son de la mejor ",Object(r.jsx)("span",{children:"calidad"})," del mercado."]}),Object(r.jsxs)("li",{children:["Nuestro equipo de ",Object(r.jsx)("span",{children:"asesores de ventas"})," te guiar\xe1n hasta que encuentres el producto que mejor se ajuste a tus espacios."]}),Object(r.jsxs)("li",{children:["\xc1mplia variedad de productos, visitanos en nuestras instalaciones y conoce los ",Object(r.jsx)("span",{children:"productos exclusivos"})," que all\xed exhibimos."]}),Object(r.jsxs)("li",{children:["Tenemos mas de ",Object(r.jsx)("span",{children:"25 a\xf1os en el mercado"}),", hemos enviado muebles a la mayoria de ciudades en toda Colombia y nuestro mayor logro es tener ",Object(r.jsx)("span",{children:"miles de clientes"})," satisfechos y que recomiendan nuestros productos."]})]}),Object(r.jsx)("img",{src:S,alt:"foto sala intermuebles nosotros"})]})]})})]})};var L=function(){return Object(r.jsxs)("div",{className:"container divContactanos",id:"contactanos",children:[Object(r.jsx)("h4",{className:"animado",children:"Contactanos"}),Object(r.jsxs)("div",{className:"displayFlex animado",children:[Object(r.jsx)("div",{className:"formulario ",children:Object(r.jsxs)("form",{children:[Object(r.jsx)("label",{htmlFor:"nombre",children:"Nombre: "}),Object(r.jsx)("input",{type:"text",id:"nombre",placeholder:"Ingresa tu nombre..."}),Object(r.jsx)("label",{htmlFor:"correo",children:"Correo: "}),Object(r.jsx)("input",{type:"email",id:"correo",placeholder:"Ingresa tu correo..."}),Object(r.jsx)("label",{htmlFor:"mensaje",children:"Mensaje: "}),Object(r.jsx)("textarea",{id:"mensaje",placeholder:"Dejanos tu mensaje..."}),Object(r.jsx)("button",{type:"submit",id:"btnEnviar",children:"Enviar"})]})}),Object(r.jsxs)("div",{className:"contactanosTexto",children:[Object(r.jsx)("p",{children:"Estimado cliente, tambien puedes contactarnos por alguno de los siguientes medios:"}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{children:"Tel\xe9fono:"})," 713 6067 \xf3 727 2887 (PBX Bogot\xe1)"]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{children:"Correo:"})," contacto@intermueblesbogota.com"]}),Object(r.jsx)("p",{children:"Visitanos en nuestras instalaciones"}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{children:"Direcci\xf3n:"}),"  Av. 1 de Mayo #36 - 24 Horario de atencion: Lunes - Domingo 9:30 am - 7:30 pm"]})]})]})]})};var D=function(){return Object(r.jsx)("div",{className:"footerDiv",children:Object(r.jsxs)("div",{className:"footer container",children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{children:"Direcci\xf3n:"})," Av. 1 de Mayo #36 - 24"]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{children:"Telefono:"})," 727 28 87"]}),Object(r.jsx)("p",{children:"\xa9 Todos los derechos reservados 2021"})]})})};var E=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(l,{}),Object(r.jsx)(j,{}),Object(r.jsx)(C,{}),Object(r.jsx)(I,{}),Object(r.jsx)(L,{}),Object(r.jsx)(D,{})]})},k=c(18),B=c(3);var w=function(){return Object(r.jsx)(k.a,{basename:"/FurnitureStore",children:Object(r.jsx)("div",{children:Object(r.jsx)(B.a,{path:"/",component:E,exact:!0})})})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(s){var c=s.getCLS,t=s.getFID,a=s.getFCP,n=s.getLCP,i=s.getTTFB;c(e),t(e),a(e),n(e),i(e)}))};c(30);i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(w,{})}),document.getElementById("root")),q()}},[[31,1,2]]]);
//# sourceMappingURL=main.8d7f2ca0.chunk.js.map