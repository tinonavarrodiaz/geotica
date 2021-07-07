(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _isMobile = require("./modules/isMobile");

var _initialVariables = require("./modules/initialVariables");

var _loading = require("./modules/loading");

var _scrollSmooth = require("./modules/scrollSmooth");

var _activeMenu = require("./modules/active-menu");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(0, _isMobile.setMobileClass)(_initialVariables.dd, "mobile", "desktop"); // activeMenu();

var loadingEle = document.getElementById("loading");

var isTable = function isTable() {
  var mm = window.matchMedia('(min-width: 768px)');
  return mm.matches;
}; // if (verifyMobile){
//   document.querySelector('head').insertAdjacentHTML('afterend', '<script src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js"></script>')
// }


addEventListener("load", function () {
  (0, _initialVariables.cssScrollBarWidth)();
  if (loadingEle) (0, _loading.loading)(loadingEle, 500);
});
addEventListener("resize", function () {
  (0, _initialVariables.cssScrollBarWidth)();
  (0, _isMobile.setMobileClass)(_initialVariables.dd, "mobile", "desktop");
});

if ((0, _isMobile.verifyMobile)() && !isTable()) {
  var uno = (0, _initialVariables.id)('uno');
  var dos = (0, _initialVariables.id)('dos');
  var tres = (0, _initialVariables.id)('tres');
  var cuatro = (0, _initialVariables.id)('cuatro');
  var software = (0, _initialVariables.id)('software');
  tres.remove();
  cuatro.remove();

  var software2 = _initialVariables.d.createElement('section');

  software2.id = "software2";
  software2.className = "section software";
  software2.innerHTML = "\n    <div class=\"section__container softwareSection logo-right\">\n        <aside class=\"title show slide-down\">EQUIPO Y RECURSOS\n        <h2 class=\"section-title show left\">Software</h2>\n        </aside>\n        <div id=\"newTres\"></div>\n        <div id=\"newCuatro\"></div>\n    </div>\n  ";
  software2.querySelector('#newTres').appendChild(tres);
  software2.querySelector('#newCuatro').appendChild(cuatro);
  software.insertAdjacentElement('afterend', software2);
  var contacto = (0, _initialVariables.id)('contacto');
  var eg = (0, _initialVariables.id)('eg');
  var texto = (0, _initialVariables.id)('texto');
  eg.remove();
  texto.remove();

  var contacto2 = _initialVariables.d.createElement('section');

  contacto2.id = "contacto2";
  contacto2.className = "section contacto";
  contacto2.innerHTML = "\n    <div class=\"section__container\">\n        \n    </div>\n  ";
  var container = contacto2.querySelector('.section__container');
  container.appendChild(texto);
  container.appendChild(eg);
  contacto.insertAdjacentElement('afterend', contacto2);
}

var setCurrentYear = function setCurrentYear(ele) {
  ele.innerText = new Date().getFullYear();
};

var currentYearElement = (0, _initialVariables.id)("currentYear");
if (currentYearElement) setCurrentYear(currentYearElement);

(function () {// scrollTo(".scroll", false, ".main-header");
})(); // toggleMenu(verifyMobile(), "#toggle", "#main-menu");


var bienvenida = (0, _initialVariables.id)('bienvenida');

var bienvenidaActions = function bienvenidaActions(el) {
  var btnIngresar = el.querySelector('#btn-ingresar');
  btnIngresar.addEventListener('click', function (e) {
    e.preventDefault();
    el.classList.add('remove');
    location.hash = "inicio"; // if (verifyMobile){
    //   body.style.overflowY = "auto"
    //
    // }

    setTimeout(function () {
      el.remove();
    }, 800);
    (0, _initialVariables.id)('inicio').classList.add('active');
  });
};

bienvenidaActions(bienvenida);
var hamburger = document.querySelector(".hamburger");

var submenus = _toConsumableArray((0, _initialVariables.all)('.main-menu__submenu'));

var nav = (0, _initialVariables.id)('main-nav'); // c.log(hamburger)

hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
  nav.classList.toggle("is-active");
  submenus.map(function (el) {
    return el.classList.remove('is-active');
  });
}, false);

var sections = _toConsumableArray((0, _initialVariables.all)('.section'));

var sectionsHash = []; // sections.map(el=>c.dir(el))
// sections.map(el=>c.dir(el.scrollHeight))

sections.map(function (el) {
  return sectionsHash.push("#".concat(el.id));
});

(function () {
  var buttonPage = _toConsumableArray((0, _initialVariables.all)('.nextPage'));

  _initialVariables.c.log(buttonPage);

  buttonPage.map(function (el) {
    el.addEventListener('click', function (e) {
      var hash = location.hash;
      var Target = e.target;
      var hashIndex = sectionsHash.indexOf(hash);

      _initialVariables.c.log(hashIndex);

      if (Target.classList.contains('prevPage')) {
        location.hash = sectionsHash[hashIndex - 1];
        sections[hashIndex - 1].classList.add('active');
      } else {
        location.hash = sectionsHash[hashIndex + 1];
        sections[hashIndex + 1].classList.add('active');

        _initialVariables.c.log(sections[hashIndex + 1].id);
      }
    });
  });
})();

if ((0, _isMobile.verifyMobile)()) {// addEventListener("scroll", e=>{
  //   console.log(e)
  //   e.preventDefault()
  // })
  //   sections.map(el => {
  //     let hammer = new Hammer(el)
  //     hammer.get('swipe').set({ direction: Hammer.DIRECTION_ALL })
  //     hammer.on("swipeup swipedown", (e)=>{
  //       let Target =  e.target
  //       let hash = location.hash
  //       while (Target.nodeName!=='SECTION'){
  //         Target = Target.parentElement
  //       }
  //       let Lenght = sectionsHash.length
  //       let hashIndex = sectionsHash.indexOf(hash)
  //       if (e.type === "swipeup" && hashIndex < Lenght - 1) {
  //         sections.map(el => el.classList.remove('active'))
  //         location.hash=sectionsHash[hashIndex+1]
  //         sections[hashIndex+1].classList.add('active')
  //       }
  //       if (e.type === "swipedown" && hashIndex > 0) {
  //         sections.map(el => el.classList.remove('active'))
  //         location.hash=sectionsHash[hashIndex-1]
  //         sections[hashIndex-1].classList.add('active')
  //       }
  //     })
  //   })
  // }else {
  //
  //   sections.map(el => el.addEventListener('wheel', function (e) {
  //     // if (!e.target.classList.contains('scroll-ele')) {
  //       // e.preventDefault()
  //       e.preventDefault();
  //       e.stopImmediatePropagation();
  //       e.stopPropagation();
  //
  //
  //     if(!e.target.classList.contains('scroll-ele')){
  //       c.log(e.target)
  //       let path = `#${this.id}`
  //       const move = e.deltaY
  //       let hash = location.hash
  //       if (hash === path) {
  //         let destino = "#inicio"
  //         let hashIndex = sectionsHash.indexOf(hash)
  //         setTimeout(() => {
  //           sections[hashIndex].classList.remove('active')
  //         }, .800)
  //         if (e.deltaY === 100) {
  //           destino = sectionsHash[hashIndex + 1] ? sectionsHash[hashIndex + 1] : sectionsHash[hashIndex]
  //         } else {
  //           destino = sectionsHash[hashIndex - 1] ? sectionsHash[hashIndex - 1] : sectionsHash[hashIndex]
  //         }
  //         d.querySelector(destino).classList.add('active')
  //         let destino1 = $(destino)
  //         location.hash = destino
  //         $('html, body').animate({scrollTop: destino1.offset().top}, 200);
  //       }
  //     }
  //   }))
}

var submenu = _toConsumableArray((0, _initialVariables.all)('.main-menu__submenu'));

nav.addEventListener('click', function (e) {
  if (e.target.classList.contains('main-menu__link')) {
    e.preventDefault();
    var parentEl = e.target.parentElement.querySelector('.main-menu__submenu');

    if (!parentEl.classList.contains('is-active')) {
      submenu.map(function (el) {
        el.classList.remove('is-active');
      });
    }

    parentEl.classList.toggle('is-active');
  }
});

var submenuLinks = _toConsumableArray((0, _initialVariables.all)('.submenu-link'));

submenuLinks.map(function (link) {
  return link.addEventListener('click', function (e) {
    e.preventDefault;
    var T = e.target;
    var hash = T.hash;
    hamburger.click();
    sections.map(function (el) {
      return el.classList.remove('active');
    });
    setTimeout(function () {
      (0, _initialVariables.q)(hash).classList.add('active');
    }, 200);
  });
});
(0, _initialVariables.id)('link-logo').addEventListener('click', function () {
  (0, _initialVariables.id)('main-nav').classList.remove('is-active');
  hamburger.classList.remove('is-active');
});
var nextPage = (0, _initialVariables.id)('nextPage');
var prevPage = (0, _initialVariables.id)('prevPage');
addEventListener('scroll', function (e) {
  var hash = location.hash;

  if (hash === "#inicio") {
    prevPage.style.display = "none";
  } else {
    prevPage.style.display = "block";
  }

  var page = !(0, _isMobile.verifyMobile)() ? "#contacto" : "#contacto2";

  if (hash === page) {
    nextPage.style.display = "none";
  } else {
    nextPage.style.display = "block";
  }
});
var empresasEl = (0, _initialVariables.id)('empresasSlider');

var empresasSlider = function empresasSlider(empresasEl) {
  var empresas = _toConsumableArray(empresasEl.querySelectorAll('li'));

  var empresasTotal = empresas.length;
  setInterval(function () {
    var active = empresasEl.querySelector('.is-active');
    var index = empresas.indexOf(active);
    empresas.map(function (el) {
      return el.classList.remove('is-active');
    });

    if (index < empresasTotal - 1) {
      empresas[index + 1].classList.add('is-active');
    } else {
      empresas[0].classList.add('is-active');
    }
  }, 7000);
};

(0, _isMobile.verifyMobile)() ? empresasSlider(empresasEl) : null;

var formModal = function formModal(form) {
  // const newForm = form.cloneNode(true)
  // const button = form.querySelector('button')
  // button.type="button"
  var inputs = _toConsumableArray(form.querySelectorAll('textarea, input'));

  inputs.map(function (input) {
    return input.setAttribute('readonly', 'readonly');
  }); // inputs.map(input=>input.setAttribute('disabled', 'disabled'))

  form.addEventListener('click', function (e) {
    var Target = e.target;
    var y = window.scrollY;

    if (Target.nodeName === "INPUT" || Target.nodeName === "TEXTAREA") {
      e.preventDefault();
      var newInput = Target.cloneNode(true);
      newInput.removeAttribute('readonly');
      newInput.focus();

      var modalForm = _initialVariables.d.createElement('div');

      modalForm.className = "modal modalForm";
      modalForm.id = "modaForm";
      modalForm.innerHTML = "\n          <div class='modal__close'></div>\n          <form class=\"contacto__form\" id=\"mfFor\">\n          <button type=\"submit\" class=\"btn-insertar\">Insertar</button>\n          </form>\n        ";
      modalForm.querySelector('form').insertAdjacentElement('afterbegin', newInput);

      _initialVariables.body.appendChild(modalForm);

      Array.from(modalForm.querySelectorAll('input, textarea')).map(function (el) {
        return el.focus();
      });
      modalClose(modalForm);
      modalForm.addEventListener('submit', function (e) {
        e.preventDefault();
        Target.value = e.target.firstElementChild.value;

        _initialVariables.dd.style.setProperty('scroll-behavior', 'unset'); // window.scroll({
        //   top: y - 500,
        //   left: 0
        // })


        setTimeout(function () {
          window.scrollTo({
            top: y
          });
          modalForm.querySelector('.modal__close').click();

          _initialVariables.dd.style.setProperty('scroll-behavior', 'smooth');
        }, 250);
      });
    }
  });
};

var modalClose = function modalClose(modalForm) {
  modalForm.querySelector('.modal__close').addEventListener('click', function (e) {
    return modalForm.remove();
  });
};

var formModalAction = function formModalAction(modal, form, newForm) {};

var sendForm = function sendForm(form) {};

var contactForm = (0, _initialVariables.id)('contact-form');
(0, _isMobile.verifyMobile)() ? formModal(contactForm) : null;
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var This = e.target;
  var button = This.querySelector('button');
  var url = This.action;
  var method = This.method;
  var data = new FormData(This);
  var init = {
    method: method,
    body: data
  };
  button.insertAdjacentHTML('beforeend', '<img src="img/Spinner.svg">');
  fetch(url, init).then(function (res) {
    return res.json();
  }).then(function (response) {
    return drawResponse(This, response, button);
  }); // })
});

var drawResponse = function drawResponse(form, res, button) {
  button.innerHTML = "Enviado";

  if (!res.error) {
    button.innerHTML = "Enviado";
    button.style.color = "#222";
    button.style.background = "#999";
    button.style.cursor = "default";
    spop(res.msg, 'success');
    Array.from(form.querySelectorAll('input, textarea')).map(function (input) {
      return input.setAttribute('readonly', 'readonly');
    });
  } else {
    spop(res.msg, 'error');
    button.innerHTML = "Enviar";
  }
};

if (true) {
  var map = document.querySelector(".map");

  var states = _toConsumableArray(document.querySelectorAll("use"));

  var listaEstados = (0, _initialVariables.q)('.presencia__estados');

  var estadosLi = _toConsumableArray(listaEstados.querySelectorAll('li'));

  map.addEventListener("click", function (e) {
    if (e.target.nodeName === "use") {
      var estado = e.target.parentElement.id; // states.map(el => el.parentElement.classList.remove('state--selected'))
      // estadosLi.map(el=>el.classList.remove('state--selected'))
      // e.target.parentElement.classList.add('state--selected')
      // c.log(listaEstados)
      // console.log(listaEstados.querySelector(`.${estado}`))

      listaEstados.querySelector(".".concat(estado)).click();
    } else {// states.map(el => el.parentElement.classList.remove('state--selected'))
    }
  });
  listaEstados.addEventListener('click', function (e) {
    // !verifyMobile() ? fullpage_api.setAllowScrolling(false) : null
    if ((0, _initialVariables.q)('.modal-proyectos')) (0, _initialVariables.q)('.modal-proyectos').remove();

    if (e.target.classList.contains('estado')) {
      var _id = e.target.dataset.clave;
      var nombreEstado = e.target.dataset.nombre.toLowerCase();
      states.map(function (el) {
        return el.parentElement.classList.remove('state--selected');
      });
      estadosLi.map(function (el) {
        return el.classList.remove('state--selected');
      });
      e.target.classList.add('state--selected');
      map.querySelector("#".concat(_id)).classList.add('state--selected');

      _initialVariables.dd.style.setProperty('--color-estado', e.target.dataset.color);

      fetch('assets/json/proyectos.json').then(function (res) {
        return res.ok ? res.json() : Promise.reject();
      }).then(function (json) {
        var Proyectos = json.Proyectos;
        var ProyectosEstado = Proyectos.filter(function (proy) {
          return proy.UBICACION.toLowerCase() === nombreEstado;
        });

        if (ProyectosEstado.length > 0) {
          dibujarProyectos(ProyectosEstado, nombreEstado);
        } // c.log(ProyectosEstado)

      })["catch"](function (err) {
        _initialVariables.c.log(err);
      })["finally"](function () {});
    }
  });
}

var dibujarProyectos = function dibujarProyectos(datos, estado) {
  var fragment = document.createDocumentFragment();
  datos.map(function (item) {
    // console.log(item)
    var li = _initialVariables.d.createElement('li');

    li.innerHTML = "\n        <p>".concat(item.TRABAJO, "</p>\n        <p><span>Cliente:</span> ").concat(item.CLIENTE, "</p>\n        <p><span>A\xF1o:</span> ").concat(item.ANO, "</p>\n    ");
    fragment.appendChild(li);
  });
  var modalProyectos = document.createElement('div');
  modalProyectos.className = "modal modal-proyectos";
  modalProyectos.id = "modal-proyectos";
  modalProyectos.innerHTML = "";
  modalProyectos.innerHTML = "\n    <div class=\"modal-proyectos__close\"></div>\n    <div class=\"modal-proyectos__container\">\n        <h2 class=\"section-title\">".concat(estado.toUpperCase(), "</h2>\n        <div class=\"table-container\">\n        <p>Proyectos:</p>\n        <ul class=\"proyectos__list equipos_text-container\"></ul>\n        </div>\n    </div>\n  ");
  modalProyectos.querySelector('.proyectos__list').appendChild(fragment);
  (0, _initialVariables.q)('.presencia').appendChild(modalProyectos);
  document.querySelector('.modal-proyectos__close').addEventListener('click', function (e) {
    // location.hash="presencia"
    // fullpage_api.setAllowScrolling(true);
    var states = _toConsumableArray(document.querySelectorAll("use"));

    var listaEstados = (0, _initialVariables.q)('.presencia__estados');

    var estadosLi = _toConsumableArray(listaEstados.querySelectorAll('li'));

    states.map(function (el) {
      return el.parentElement.classList.remove('state--selected');
    });
    estadosLi.map(function (el) {
      return el.classList.remove('state--selected');
    });
    modalProyectos.remove();
  });
};

if ((0, _isMobile.verifyMobile)() && isTable()) {
  var eleImg = (0, _initialVariables.id)('dos');

  var imgC = _initialVariables.d.createElement('div');

  imgC.className = "imgC";

  var images = _toConsumableArray(eleImg.querySelectorAll('img'));

  images.map(function (img) {
    return imgC.insertAdjacentElement('beforeend', img);
  });
  eleImg.appendChild(imgC);
}

},{"./modules/active-menu":2,"./modules/initialVariables":3,"./modules/isMobile":4,"./modules/loading":5,"./modules/scrollSmooth":6}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleMenu = exports.activeMenu = void 0;

var _initialVariables = require("./initialVariables");

var activeMenu = function activeMenu() {
  var menu = document.getElementById("main-menu");

  if (menu) {
    var links = Array.from(menu.querySelectorAll("a"));
    links.map(function (link) {
      if (link.href === location.href || link.href === location.href.slice(0, -1)) link.classList.add("active");
    });
  }
};

exports.activeMenu = activeMenu;

var toggleMenu = function toggleMenu(isMobile, toggleElement, mainMenu) {
  var toggle = _initialVariables.d.querySelector(toggleElement),
      menu = _initialVariables.d.querySelector(mainMenu);

  if (!isMobile) {
    toggle.remove();
  } else {
    toggleMenuAction(toggle, menu);
  }
};

exports.toggleMenu = toggleMenu;

var toggleMenuAction = function toggleMenuAction(toggle, menu) {
  var links = Array.from(_initialVariables.d.querySelectorAll("a"));
  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    menu.classList.toggle("active");
  });
  menu.addEventListener("click", function (e) {
    var t = e.target;

    if (t.nodeName === "A") {
      menu.classList.remove("active");
    }
  });
};

},{"./initialVariables":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cssScrollBarWidth = exports.body = exports.all = exports.q = exports.id = exports.dd = exports.dir = exports.log = exports.c = exports.w = exports.d = void 0;
var d = document,
    w = window,
    c = console,
    log = console.log,
    dir = console.dir,
    dd = document.documentElement,
    id = document.getElementById.bind(document),
    q = document.querySelector.bind(document),
    all = document.querySelectorAll.bind(document),
    body = document.body;
exports.body = body;
exports.all = all;
exports.q = q;
exports.id = id;
exports.dd = dd;
exports.dir = dir;
exports.log = log;
exports.c = c;
exports.w = w;
exports.d = d;

var getScrollBarWidth = function getScrollBarWidth() {
  return window.innerWidth - document.documentElement.getBoundingClientRect().width;
}; // funcion para asignar ese valor a una variable css


var cssScrollBarWidth = function cssScrollBarWidth() {
  return document.documentElement.style.setProperty("--scrollbar", "".concat(getScrollBarWidth(), "px"));
};

exports.cssScrollBarWidth = cssScrollBarWidth;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMobileClass = exports.verifyMobile = exports.isMobile = void 0;
var isMobile = {
  mobilecheck: function mobilecheck() {
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4));
  }
};
exports.isMobile = isMobile;

var verifyMobile = function verifyMobile() {
  return isMobile.mobilecheck();
};

exports.verifyMobile = verifyMobile;

var setMobileClass = function setMobileClass(ele, classNameMobile, classNameDesktop) {
  if (verifyMobile()) {
    ele.classList.add(classNameMobile);
    ele.classList.remove(classNameDesktop);
  } else {
    ele.classList.remove(classNameMobile);
    ele.classList.add(classNameDesktop);
  }
};

exports.setMobileClass = setMobileClass;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loading = void 0;

var loading = function loading(ele, time) {
  ele.style.transition = "opacity ".concat(time, "ms");
  ele.style.opacity = "0";
  setTimeout(function () {
    ele.remove();
  }, time);
};

exports.loading = loading;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollTo = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var scrollAnchors = function scrollAnchors(e) {
  var respond = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var history = arguments.length > 2 ? arguments[2] : undefined;
  var hh = arguments.length > 3 ? arguments[3] : undefined;

  var distanceToTop = function distanceToTop(el) {
    return Math.floor(el.getBoundingClientRect().top);
  };

  e.preventDefault();
  var targetID = respond ? respond.getAttribute("href") : e.target.getAttribute("href");
  var targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  var originalTop = distanceToTop(targetAnchor);
  window.scrollBy({
    top: originalTop - hh,
    left: 0,
    behavior: "smooth"
  });
  if (history) window.history.pushState("", "", targetID);
  var checkIfDone = setInterval(function () {
    var atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;

    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      // targetAnchor.tabIndex = "-1";
      targetAnchor.focus();
      clearInterval(checkIfDone);
    }
  }, 100);
};

var scrollTo = function scrollTo(scrollEle) {
  var history = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var elementOffSetId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var links = _toConsumableArray(document.querySelectorAll(scrollEle));

  var elementOffSetHeight = elementOffSetId ? document.querySelector(elementOffSetId).clientHeight : 0;
  if (elementOffSetHeight !== 0) document.documentElement.style.setProperty("--header-height", "".concat(elementOffSetHeight, "px"));
  links.map(function (each) {
    return each.addEventListener("click", function (e) {
      e.preventDefault();
      scrollAnchors(e, each, history, elementOffSetHeight);
    });
  });
};

exports.scrollTo = scrollTo;

},{}]},{},[1]);

//# sourceMappingURL=scripts-min.js.map
