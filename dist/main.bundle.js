webpackJsonp([1,4],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_datos_service__ = __webpack_require__(331);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportesComponent = (function () {
    function ReportesComponent(_datos) {
        this._datos = _datos;
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartOptions = { scaleShowVerticalLines: true, responsive: true };
        this.certificado = false;
        this.curso = false;
        this.avanzado = false;
        this.intermedio = false;
        this.basico = false;
        this.nocion = false;
        this.ninguno = false;
        this.seleccionado = false;
        this.tipo = "";
        this.solucion = false;
        this.idioma = true;
        this.metodologia1 = false;
        this.metodologia2 = false;
        this.certificacion1 = false;
        this.certificacion2 = false;
        this.certificacion3 = false;
        this.lenguaje1 = false;
        this.lenguaje2 = false;
        this.lenguaje3 = false;
        this.lenguaje4 = false;
        this.lenguaje5 = false;
        this.lenguaje6 = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
        this.personas = {};
        this.met1 = {};
        this.met2 = {};
        this.cer1 = {};
        this.cer2 = {};
        this.cer3 = {};
        this.idiomas = {};
        this.sol = {};
        this.len = {};
        this.len2 = {};
        this.len3 = {};
        this.len4 = {};
        this.len5 = {};
        this.len6 = {};
        this.her = {};
        this.her2 = {};
        this.her3 = {};
        this.her4 = {};
        this.her5 = {};
        this.barChartLabelsIdioma = ['Ingles', 'Frances', 'Italiano'];
        this.barChartDataCertificacion1 = [
            {
                data: [0, 0, 0, 0, 0, 0, 0], label: "A"
            }, {
                data: [0, 0, 0, 0, 0, 0, 0], label: "B"
            }, {
                data: [0, 0, 0, 0, 0, 0, 0], label: "C"
            }, {
                data: [0, 0, 0, 0, 0, 0, 0], label: "D"
            }, {
                data: [0, 0, 0, 0, 0, 0, 0], label: "E"
            }, {
                data: [0, 0, 0, 0, 0, 0, 0], label: "F"
            }, {
                data: [0, 0, 0, 0, 0, 0, 0], label: "G"
            }
        ];
        this.barChartDataIdioma = [
            {
                data: [0, 0, 0], label: "A"
            }, {
                data: [0, 0, 0], label: "B"
            }, {
                data: [0, 0, 0], label: "C"
            }, {
                data: [0, 0, 0], label: "D"
            }
        ];
        this.barChartDataSolucion = [
            {
                data: [0, 0], label: "A"
            }, {
                data: [0, 0], label: "B"
            }, {
                data: [0, 0], label: "C"
            }, {
                data: [0, 0], label: "D"
            }, {
                data: [0, 0], label: "E"
            }, {
                data: [0, 0], label: "F"
            }, {
                data: [0, 0], label: "G"
            }
        ];
        this.barChartDataMetodologia = [
            {
                data: [0, 0, 0, 0, 0], label: "A"
            }, {
                data: [0, 0, 0, 0, 0], label: "B"
            }, {
                data: [0, 0, 0, 0, 0], label: "C"
            }, {
                data: [0, 0, 0, 0, 0], label: "D"
            }, {
                data: [0, 0, 0, 0, 0], label: "E"
            }, {
                data: [0, 0, 0, 0, 0], label: "F"
            }, {
                data: [0, 0, 0, 0, 0], label: "G"
            }
        ];
        this.barChartDataHerramienta = [
            {
                data: [0, 0, 0, 0, 0, 0, 0], label: "A"
            }, {
                data: [0, 0, 0, 0, 0, 0, 0], label: "B"
            }, {
                data: [0, 0, 0, 0, 0, 0, 0], label: "C"
            }, {
                data: [0, 0, 0, 0, 0, 0, 0], label: "D"
            }, {
                data: [0, 0, 0, 0, 0, 0, 0], label: "E"
            }, {
                data: [0, 0, 0, 0, 0, 0, 0], label: "F"
            }, {
                data: [0, 0, 0, 0, 0, 0, 0], label: "G"
            }
        ];
        this.barChartDataHerramienta5 = [
            {
                data: [0, 0, 0, 0], label: "A"
            }, {
                data: [0, 0, 0, 0], label: "B"
            }, {
                data: [0, 0, 0, 0], label: "C"
            }, {
                data: [0, 0, 0, 0], label: "D"
            }, {
                data: [0, 0, 0, 0], label: "E"
            }, {
                data: [0, 0, 0, 0], label: "F"
            }, {
                data: [0, 0, 0, 0], label: "G"
            }
        ];
        this.barChartDataHerramienta6 = [
            {
                data: [0, 0, 0], label: "A"
            }, {
                data: [0, 0, 0], label: "B"
            }, {
                data: [0, 0, 0], label: "C"
            }, {
                data: [0, 0, 0], label: "D"
            }, {
                data: [0, 0, 0], label: "E"
            }, {
                data: [0, 0, 0], label: "F"
            }, {
                data: [0, 0, 0], label: "G"
            }
        ];
        this.barChartLabelsMetodologia1 = [
            'ISTQB', 'Agile Testing', 'ISEB',
            'CAST', 'CSTE', 'CSQA', 'TMap'
        ];
        this.barChartLabelsMetodologia2 = [
            'TMMi', 'CMMI PPQA:VER&VAL',
            'SCENT', 'AGEDIS', 'ITIL QA'
        ];
        this.barChartLabelsCertificacion1 = [
            'Scrum Master', 'Scrum Team Member', 'Scrum Product Owner',
            'ITIL Fundamentos', 'ITIL Intermedio', 'ITIL Expert', 'Six Sigma Black Belt'
        ];
        this.barChartLabelsCertificacion2 = [
            'PMP', 'ISTQB', 'CMMI Oficial',
            'Oracle Certified Profesional Java SE', 'ISO 27000',
            'ISO 20000', 'COBIT'
        ];
        this.barChartLabelsCertificacion3 = [
            'CRISC', 'GRCP', 'ISO 9000',
            'Prince', 'COSO', 'SOX', 'BPM'
        ];
        this.barChartLabelsSolucion = [
            'Amazon', 'Azure'
        ];
        this.barChartLabelsLenguaje1 = [
            'Java', 'C++',
            'PHP', 'iOS',
            'C#', 'Ruby',
            'SQL'
        ];
        this.barChartLabelsLenguaje2 = [
            'Android', 'ASP.NET',
            'HTML', 'Java Script',
            'Visual Basic', 'Phyton',
            'SAP ABAP'
        ];
        this.barChartLabelsLenguaje3 = [
            'Oracle', 'MySQL',
            'Postgre', 'JSF 2.0',
            'Big Data', 'Hadoop',
            'SPARK'
        ];
        this.barChartLabelsLenguaje4 = [
            'Google Maps',
            'MapReduce', 'Tomcat',
            'Weblogic', 'ISS',
            'BlockChain', 'Wordpress'
        ];
        this.barChartLabelsLenguaje5 = [
            'Joomla',
            'Sharepoint', 'Hybernate',
            'Angular', 'Ember',
            'JSON', 'IONIC'
        ];
        this.barChartLabelsHerramienta5 = [
            'Microsoft Project', 'Excel',
            'Power Point', 'Word'
        ];
        this.barChartLabelsHerramienta4 = [
            'Dreamweaver', 'Net Beans',
            'Eclipse', 'ABAP Workbech',
            'ARIS', 'Opera',
            'Bizagi'
        ];
        this.barChartLabelsHerramienta3 = [
            'SQL Server', 'Sublime text',
            'Skype', 'Team Viewer',
            'GoTo Meeting', 'HipChat',
            'Appraisal Assistant'
        ];
        this.barChartLabelsHerramienta2 = [
            'Android Studio', 'Balsamiq Mockps',
            'Bitbucket', 'Visio',
            'PhotoShop', 'Ilustrator',
            'Microsoft Project'
        ];
        this.barChartLabelsHerramienta = [
            'Microsoft Office', 'JIRA',
            'Confluence', 'Visual Studio',
            'Bamboo', 'JIRA Portafolio',
            'ALM HP'
        ];
        this.barChartLabelsLenguaje6 = [
            'SPRING', 'Google AD Words', 'Google Analitics'
        ];
    }
    ReportesComponent.prototype.ngOnInit = function () {
        this.obtenerHerramientas1();
    };
    ReportesComponent.prototype.verDatos = function (e) {
        var _this = this;
        if (e.active.length > 0) {
            this.tipo = e.active[0]._model.label;
            var lista = this.tipo;
            if (lista == "C++") {
                lista = "C_plus_plus";
            }
            if (lista == "C#") {
                lista = "C_Sharp";
            }
            if (lista == "SQL") {
                lista = "SQL_1";
            }
            if (lista == "ASP.NET") {
                lista = "ASP_NET";
            }
            if (lista == "JSF 2.0") {
                lista = "JSF_2_0";
            }
            lista = lista.split(" ").join("_");
            this._datos.obtenerDatos(lista).subscribe(function (data) {
                _this.personas = data;
                _this.seleccionado = true;
                _this.certificado = true;
                _this.curso = false;
                _this.avanzado = false;
                _this.intermedio = false;
                _this.basico = false;
                _this.nocion = false;
                _this.ninguno = false;
                $("#certificadoMenu").removeClass("active");
                $("#cursoMenu").removeClass("active");
                $("#avanzadoMenu").removeClass("active");
                $("#intermedioMenu").removeClass("active");
                $("#basicoMenu").removeClass("active");
                $("#nocionMenu").removeClass("active");
                $("#ningunoMenu").removeClass("active");
                $("#certificadoMenu").addClass("active");
            }, function (error) {
                console.log(error);
            });
        }
    };
    ReportesComponent.prototype.verDatosHerramienta = function (e) {
        var _this = this;
        if (e.active.length > 0) {
            this.tipo = e.active[0]._model.label;
            var lista = this.tipo;
            lista = lista.split(" ").join("_");
            lista = "Herramientas_de_trabajo_" + lista;
            this._datos.obtenerDatos(lista).subscribe(function (data) {
                _this.personas = data;
                _this.seleccionado = true;
                _this.certificado = true;
                _this.curso = false;
                _this.avanzado = false;
                _this.intermedio = false;
                _this.basico = false;
                _this.nocion = false;
                _this.ninguno = false;
                $("#certificadoMenu").removeClass("active");
                $("#cursoMenu").removeClass("active");
                $("#avanzadoMenu").removeClass("active");
                $("#intermedioMenu").removeClass("active");
                $("#basicoMenu").removeClass("active");
                $("#nocionMenu").removeClass("active");
                $("#ningunoMenu").removeClass("active");
                $("#certificadoMenu").addClass("active");
            }, function (error) {
                console.log(error);
            });
        }
    };
    ReportesComponent.prototype.verDatosSoluciones = function (e) {
        var _this = this;
        if (e.active.length > 0) {
            this.tipo = e.active[0]._model.label;
            var lista = this.tipo;
            lista = lista.split(" ").join("_");
            lista = "Soluciones_en_la_nube_" + lista;
            this._datos.obtenerDatos(lista).subscribe(function (data) {
                _this.personas = data;
                _this.seleccionado = true;
                _this.certificado = true;
                _this.curso = false;
                _this.avanzado = false;
                _this.intermedio = false;
                _this.basico = false;
                _this.nocion = false;
                _this.ninguno = false;
                $("#certificadoMenu").removeClass("active");
                $("#cursoMenu").removeClass("active");
                $("#avanzadoMenu").removeClass("active");
                $("#intermedioMenu").removeClass("active");
                $("#basicoMenu").removeClass("active");
                $("#nocionMenu").removeClass("active");
                $("#ningunoMenu").removeClass("active");
                $("#certificadoMenu").addClass("active");
            }, function (error) {
                console.log(error);
            });
        }
    };
    ReportesComponent.prototype.verDatosMetodologias = function (e) {
        var _this = this;
        if (e.active.length > 0) {
            this.tipo = e.active[0]._model.label;
            var lista = this.tipo;
            if (lista == "CMMI PPQA:VER&VAL") {
                lista = "CMMI_PPQA_VER_VAL";
            }
            lista = lista.split(" ").join("_");
            lista = "Metodologias_" + lista;
            this._datos.obtenerDatos(lista).subscribe(function (data) {
                _this.personas = data;
                _this.seleccionado = true;
                _this.certificado = true;
                _this.curso = false;
                _this.avanzado = false;
                _this.intermedio = false;
                _this.basico = false;
                _this.nocion = false;
                _this.ninguno = false;
                $("#certificadoMenu").removeClass("active");
                $("#cursoMenu").removeClass("active");
                $("#avanzadoMenu").removeClass("active");
                $("#intermedioMenu").removeClass("active");
                $("#basicoMenu").removeClass("active");
                $("#nocionMenu").removeClass("active");
                $("#ningunoMenu").removeClass("active");
                $("#certificadoMenu").addClass("active");
            }, function (error) {
                console.log(error);
            });
        }
    };
    ReportesComponent.prototype.verLista = function (tipo) {
        $("#certificadoMenu").removeClass("active");
        $("#cursoMenu").removeClass("active");
        $("#avanzadoMenu").removeClass("active");
        $("#intermedioMenu").removeClass("active");
        $("#basicoMenu").removeClass("active");
        $("#nocionMenu").removeClass("active");
        $("#ningunoMenu").removeClass("active");
        $("#" + tipo + "Menu").addClass("active");
        this.curso = false;
        this.avanzado = false;
        this.intermedio = false;
        this.basico = false;
        this.nocion = false;
        this.ninguno = false;
        this.certificado = false;
        if (tipo == "certificado") {
            this.certificado = true;
        }
        if (tipo == "curso") {
            this.curso = true;
        }
        if (tipo == "avanzado") {
            this.avanzado = true;
        }
        if (tipo == "intermedio") {
            this.intermedio = true;
        }
        if (tipo == "basico") {
            this.basico = true;
        }
        if (tipo == "nocion") {
            this.nocion = true;
        }
        if (tipo == "ninguno") {
            this.ninguno = true;
        }
    };
    ReportesComponent.prototype.obtenerIdiomas = function () {
        var _this = this;
        this._datos.obtenerIdiomas().subscribe(function (data) {
            _this.herramienta1 = false;
            _this.herramienta2 = false;
            _this.herramienta3 = false;
            _this.herramienta4 = false;
            _this.herramienta5 = false;
            _this.lenguaje1 = false;
            _this.lenguaje2 = false;
            _this.lenguaje3 = false;
            _this.lenguaje4 = false;
            _this.lenguaje5 = false;
            _this.lenguaje6 = false;
            _this.solucion = false;
            _this.certificacion1 = false;
            _this.certificacion2 = false;
            _this.certificacion3 = false;
            _this.metodologia1 = false;
            _this.metodologia2 = false;
            _this.idioma = true;
            _this.idiomas = data;
            _this.barChartDataIdioma = [
                {
                    data: [
                        parseInt(_this.idiomas.ingles.avanzado.total),
                        parseInt(_this.idiomas.frances.avanzado.total),
                        parseInt(_this.idiomas.italiano.avanzado.total)
                    ], label: 'Avanzado'
                }, {
                    data: [
                        parseInt(_this.idiomas.ingles.intermedio.total),
                        parseInt(_this.idiomas.frances.intermedio.total),
                        parseInt(_this.idiomas.italiano.intermedio.total)
                    ], label: 'Intermedio'
                }, {
                    data: [
                        parseInt(_this.idiomas.ingles.basico.total),
                        parseInt(_this.idiomas.frances.intermedio.total),
                        parseInt(_this.idiomas.italiano.intermedio.total)
                    ], label: 'Basico'
                }, {
                    data: [
                        parseInt(_this.idiomas.ingles.ninguno.total),
                        parseInt(_this.idiomas.frances.intermedio.total),
                        parseInt(_this.idiomas.italiano.intermedio.total)
                    ], label: 'Ninguno'
                }
            ];
        }, function (error) {
            console.log(error);
        });
    };
    ReportesComponent.prototype.obtenerHerramientas1 = function () {
        var _this = this;
        this._datos.obtenerHerramientas1().subscribe(function (data) {
            _this.idioma = false;
            _this.herramienta1 = true;
            _this.herramienta2 = false;
            _this.herramienta3 = false;
            _this.herramienta4 = false;
            _this.herramienta5 = false;
            _this.lenguaje1 = false;
            _this.lenguaje2 = false;
            _this.lenguaje3 = false;
            _this.lenguaje4 = false;
            _this.lenguaje5 = false;
            _this.lenguaje6 = false;
            _this.solucion = false;
            _this.certificacion1 = false;
            _this.certificacion2 = false;
            _this.certificacion3 = false;
            _this.metodologia1 = false;
            _this.metodologia2 = false;
            _this.her = data;
            _this.barChartDataHerramienta = [
                {
                    data: [
                        parseInt(_this.her.Microsoft_Office.Certificado.total),
                        parseInt(_this.her.JIRA.Certificado.total),
                        parseInt(_this.her.Confluence.Certificado.total),
                        parseInt(_this.her.Visual_Studio.Certificado.total),
                        parseInt(_this.her.Bamboo.Certificado.total),
                        parseInt(_this.her.JIRA_Portafolio.Certificado.total),
                        parseInt(_this.her.ALM_HP.Certificado.total)
                    ], label: 'Certificado'
                },
                {
                    data: [
                        parseInt(_this.her.Microsoft_Office.Curso.total),
                        parseInt(_this.her.JIRA.Curso.total),
                        parseInt(_this.her.Confluence.Curso.total),
                        parseInt(_this.her.Visual_Studio.Curso.total),
                        parseInt(_this.her.Bamboo.Curso.total),
                        parseInt(_this.her.JIRA_Portafolio.Curso.total),
                        parseInt(_this.her.ALM_HP.Curso.total)
                    ], label: 'Curso oficial sin certificacion'
                },
                {
                    data: [
                        parseInt(_this.her.Microsoft_Office.Avanzado.total),
                        parseInt(_this.her.JIRA.Avanzado.total),
                        parseInt(_this.her.Confluence.Avanzado.total),
                        parseInt(_this.her.Visual_Studio.Avanzado.total),
                        parseInt(_this.her.Bamboo.Avanzado.total),
                        parseInt(_this.her.JIRA_Portafolio.Avanzado.total),
                        parseInt(_this.her.ALM_HP.Avanzado.total)
                    ], label: 'Avanzado'
                }, {
                    data: [
                        parseInt(_this.her.Microsoft_Office.Intermedio.total),
                        parseInt(_this.her.JIRA.Intermedio.total),
                        parseInt(_this.her.Confluence.Intermedio.total),
                        parseInt(_this.her.Visual_Studio.Intermedio.total),
                        parseInt(_this.her.Bamboo.Intermedio.total),
                        parseInt(_this.her.JIRA_Portafolio.Intermedio.total),
                        parseInt(_this.her.ALM_HP.Intermedio.total)
                    ], label: 'Intermedio'
                }, {
                    data: [
                        parseInt(_this.her.Microsoft_Office.Basico.total),
                        parseInt(_this.her.JIRA.Basico.total),
                        parseInt(_this.her.Confluence.Basico.total),
                        parseInt(_this.her.Visual_Studio.Basico.total),
                        parseInt(_this.her.Bamboo.Basico.total),
                        parseInt(_this.her.JIRA_Portafolio.Basico.total),
                        parseInt(_this.her.ALM_HP.Basico.total)
                    ], label: 'Basico'
                }, {
                    data: [
                        parseInt(_this.her.Microsoft_Office.Nocion.total),
                        parseInt(_this.her.JIRA.Nocion.total),
                        parseInt(_this.her.Confluence.Nocion.total),
                        parseInt(_this.her.Visual_Studio.Nocion.total),
                        parseInt(_this.her.Bamboo.Nocion.total),
                        parseInt(_this.her.JIRA_Portafolio.Nocion.total),
                        parseInt(_this.her.ALM_HP.Nocion.total)
                    ], label: 'Nocion'
                }, {
                    data: [
                        parseInt(_this.her.Microsoft_Office.Ninguno.total),
                        parseInt(_this.her.JIRA.Ninguno.total),
                        parseInt(_this.her.Confluence.Ninguno.total),
                        parseInt(_this.her.Visual_Studio.Ninguno.total),
                        parseInt(_this.her.Bamboo.Ninguno.total),
                        parseInt(_this.her.JIRA_Portafolio.Ninguno.total),
                        parseInt(_this.her.ALM_HP.Ninguno.total)
                    ], label: 'Ninguno'
                }
            ];
        }, function (error) {
            console.log(error);
        });
    };
    ReportesComponent.prototype.obtenerHerramientas2 = function () {
        var _this = this;
        this._datos.obtenerHerramientas2().subscribe(function (data) {
            _this.idioma = false;
            _this.herramienta1 = false;
            _this.herramienta2 = true;
            _this.herramienta3 = false;
            _this.herramienta4 = false;
            _this.herramienta5 = false;
            _this.lenguaje1 = false;
            _this.lenguaje2 = false;
            _this.lenguaje3 = false;
            _this.lenguaje4 = false;
            _this.lenguaje5 = false;
            _this.lenguaje6 = false;
            _this.solucion = false;
            _this.certificacion1 = false;
            _this.certificacion2 = false;
            _this.certificacion3 = false;
            _this.metodologia1 = false;
            _this.metodologia2 = false;
            _this.her2 = data;
            _this.barChartDataHerramienta = [
                {
                    data: [
                        parseInt(_this.her2.Android_Studio.Certificado.total),
                        parseInt(_this.her2.Balsamiq_Mockps.Certificado.total),
                        parseInt(_this.her2.Bitbucket.Certificado.total),
                        parseInt(_this.her2.Visio.Certificado.total),
                        parseInt(_this.her2.PhotoShop.Certificado.total),
                        parseInt(_this.her2.Ilustrator.Certificado.total),
                        parseInt(_this.her2.Microsoft_Project.Certificado.total)
                    ], label: 'Certificado'
                },
                {
                    data: [
                        parseInt(_this.her2.Android_Studio.Curso.total),
                        parseInt(_this.her2.Balsamiq_Mockps.Curso.total),
                        parseInt(_this.her2.Bitbucket.Curso.total),
                        parseInt(_this.her2.Visio.Curso.total),
                        parseInt(_this.her2.PhotoShop.Curso.total),
                        parseInt(_this.her2.Ilustrator.Curso.total),
                        parseInt(_this.her2.Microsoft_Project.Curso.total)
                    ], label: 'Curso oficial sin certificacion'
                },
                {
                    data: [
                        parseInt(_this.her2.Android_Studio.Avanzado.total),
                        parseInt(_this.her2.Balsamiq_Mockps.Avanzado.total),
                        parseInt(_this.her2.Bitbucket.Avanzado.total),
                        parseInt(_this.her2.Visio.Avanzado.total),
                        parseInt(_this.her2.PhotoShop.Avanzado.total),
                        parseInt(_this.her2.Ilustrator.Avanzado.total),
                        parseInt(_this.her2.Microsoft_Project.Avanzado.total)
                    ], label: 'Avanzado'
                }, {
                    data: [
                        parseInt(_this.her2.Android_Studio.Intermedio.total),
                        parseInt(_this.her2.Balsamiq_Mockps.Intermedio.total),
                        parseInt(_this.her2.Bitbucket.Intermedio.total),
                        parseInt(_this.her2.Visio.Intermedio.total),
                        parseInt(_this.her2.PhotoShop.Intermedio.total),
                        parseInt(_this.her2.Ilustrator.Intermedio.total),
                        parseInt(_this.her2.Microsoft_Project.Intermedio.total)
                    ], label: 'Intermedio'
                }, {
                    data: [
                        parseInt(_this.her2.Android_Studio.Basico.total),
                        parseInt(_this.her2.Balsamiq_Mockps.Basico.total),
                        parseInt(_this.her2.Bitbucket.Basico.total),
                        parseInt(_this.her2.Visio.Basico.total),
                        parseInt(_this.her2.PhotoShop.Basico.total),
                        parseInt(_this.her2.Ilustrator.Basico.total),
                        parseInt(_this.her2.Microsoft_Project.Basico.total)
                    ], label: 'Basico'
                }, {
                    data: [
                        parseInt(_this.her2.Android_Studio.Nocion.total),
                        parseInt(_this.her2.Balsamiq_Mockps.Nocion.total),
                        parseInt(_this.her2.Bitbucket.Nocion.total),
                        parseInt(_this.her2.Visio.Nocion.total),
                        parseInt(_this.her2.PhotoShop.Nocion.total),
                        parseInt(_this.her2.Ilustrator.Nocion.total),
                        parseInt(_this.her2.Microsoft_Project.Nocion.total)
                    ], label: 'Nocion'
                }, {
                    data: [
                        parseInt(_this.her2.Android_Studio.Ninguno.total),
                        parseInt(_this.her2.Balsamiq_Mockps.Ninguno.total),
                        parseInt(_this.her2.Bitbucket.Ninguno.total),
                        parseInt(_this.her2.Visio.Ninguno.total),
                        parseInt(_this.her2.PhotoShop.Ninguno.total),
                        parseInt(_this.her2.Ilustrator.Ninguno.total),
                        parseInt(_this.her2.Microsoft_Project.Ninguno.total)
                    ], label: 'Ninguno'
                }
            ];
        }, function (error) {
            console.log(error);
        });
    };
    ReportesComponent.prototype.obtenerHerramientas3 = function () {
        var _this = this;
        this._datos.obtenerHerramientas3().subscribe(function (data) {
            _this.idioma = false;
            _this.herramienta1 = false;
            _this.herramienta2 = false;
            _this.herramienta3 = true;
            _this.herramienta4 = false;
            _this.herramienta5 = false;
            _this.lenguaje1 = false;
            _this.lenguaje2 = false;
            _this.lenguaje3 = false;
            _this.lenguaje4 = false;
            _this.lenguaje5 = false;
            _this.lenguaje6 = false;
            _this.solucion = false;
            _this.certificacion1 = false;
            _this.certificacion2 = false;
            _this.certificacion3 = false;
            _this.metodologia1 = false;
            _this.metodologia2 = false;
            _this.her3 = data;
            _this.barChartDataHerramienta = [
                {
                    data: [
                        parseInt(_this.her3.SQL_Server.Certificado.total),
                        parseInt(_this.her3.Sublime_text.Certificado.total),
                        parseInt(_this.her3.Skype.Certificado.total),
                        parseInt(_this.her3.Team_Viewer.Certificado.total),
                        parseInt(_this.her3.GoTo_Meeting.Certificado.total),
                        parseInt(_this.her3.HipChat.Certificado.total),
                        parseInt(_this.her3.Appraisal_Assistant.Certificado.total)
                    ], label: 'Certificado'
                },
                {
                    data: [
                        parseInt(_this.her3.SQL_Server.Curso.total),
                        parseInt(_this.her3.Sublime_text.Curso.total),
                        parseInt(_this.her3.Skype.Curso.total),
                        parseInt(_this.her3.Team_Viewer.Curso.total),
                        parseInt(_this.her3.GoTo_Meeting.Curso.total),
                        parseInt(_this.her3.HipChat.Curso.total),
                        parseInt(_this.her3.Appraisal_Assistant.Curso.total)
                    ], label: 'Curso oficial sin certificacion'
                },
                {
                    data: [
                        parseInt(_this.her3.SQL_Server.Avanzado.total),
                        parseInt(_this.her3.Sublime_text.Avanzado.total),
                        parseInt(_this.her3.Skype.Avanzado.total),
                        parseInt(_this.her3.Team_Viewer.Avanzado.total),
                        parseInt(_this.her3.GoTo_Meeting.Avanzado.total),
                        parseInt(_this.her3.HipChat.Avanzado.total),
                        parseInt(_this.her3.Appraisal_Assistant.Avanzado.total)
                    ], label: 'Avanzado'
                }, {
                    data: [
                        parseInt(_this.her3.SQL_Server.Intermedio.total),
                        parseInt(_this.her3.Sublime_text.Intermedio.total),
                        parseInt(_this.her3.Skype.Intermedio.total),
                        parseInt(_this.her3.Team_Viewer.Intermedio.total),
                        parseInt(_this.her3.GoTo_Meeting.Intermedio.total),
                        parseInt(_this.her3.HipChat.Intermedio.total),
                        parseInt(_this.her3.Appraisal_Assistant.Intermedio.total)
                    ], label: 'Intermedio'
                }, {
                    data: [
                        parseInt(_this.her3.SQL_Server.Basico.total),
                        parseInt(_this.her3.Sublime_text.Basico.total),
                        parseInt(_this.her3.Skype.Basico.total),
                        parseInt(_this.her3.Team_Viewer.Basico.total),
                        parseInt(_this.her3.GoTo_Meeting.Basico.total),
                        parseInt(_this.her3.HipChat.Basico.total),
                        parseInt(_this.her3.Appraisal_Assistant.Basico.total)
                    ], label: 'Basico'
                }, {
                    data: [
                        parseInt(_this.her3.SQL_Server.Nocion.total),
                        parseInt(_this.her3.Sublime_text.Nocion.total),
                        parseInt(_this.her3.Skype.Nocion.total),
                        parseInt(_this.her3.Team_Viewer.Nocion.total),
                        parseInt(_this.her3.GoTo_Meeting.Nocion.total),
                        parseInt(_this.her3.HipChat.Nocion.total),
                        parseInt(_this.her3.Appraisal_Assistant.Nocion.total)
                    ], label: 'Nocion'
                }, {
                    data: [
                        parseInt(_this.her3.SQL_Server.Ninguno.total),
                        parseInt(_this.her3.Sublime_text.Ninguno.total),
                        parseInt(_this.her3.Skype.Ninguno.total),
                        parseInt(_this.her3.Team_Viewer.Ninguno.total),
                        parseInt(_this.her3.GoTo_Meeting.Ninguno.total),
                        parseInt(_this.her3.HipChat.Ninguno.total),
                        parseInt(_this.her3.Appraisal_Assistant.Ninguno.total)
                    ], label: 'Ninguno'
                }
            ];
        }, function (error) {
            console.log(error);
        });
    };
    ReportesComponent.prototype.obtenerHerramientas4 = function () {
        var _this = this;
        this._datos.obtenerHerramientas4().subscribe(function (data) {
            _this.idioma = false;
            _this.herramienta1 = false;
            _this.herramienta2 = false;
            _this.herramienta3 = false;
            _this.herramienta4 = true;
            _this.herramienta5 = false;
            _this.lenguaje1 = false;
            _this.lenguaje2 = false;
            _this.lenguaje3 = false;
            _this.lenguaje4 = false;
            _this.lenguaje5 = false;
            _this.lenguaje6 = false;
            _this.solucion = false;
            _this.certificacion1 = false;
            _this.certificacion2 = false;
            _this.certificacion3 = false;
            _this.metodologia1 = false;
            _this.metodologia2 = false;
            _this.her4 = data;
            _this.barChartDataHerramienta = [
                {
                    data: [
                        parseInt(_this.her4.Dreamweaver.Certificado.total),
                        parseInt(_this.her4.Net_Beans.Certificado.total),
                        parseInt(_this.her4.Eclipse.Certificado.total),
                        parseInt(_this.her4.ABAP_Workbech.Certificado.total),
                        parseInt(_this.her4.ARIS.Certificado.total),
                        parseInt(_this.her4.Opera.Certificado.total),
                        parseInt(_this.her4.Bizagi.Certificado.total)
                    ], label: 'Certificado'
                },
                {
                    data: [
                        parseInt(_this.her4.Dreamweaver.Curso.total),
                        parseInt(_this.her4.Net_Beans.Curso.total),
                        parseInt(_this.her4.Eclipse.Curso.total),
                        parseInt(_this.her4.ABAP_Workbech.Curso.total),
                        parseInt(_this.her4.ARIS.Curso.total),
                        parseInt(_this.her4.Opera.Curso.total),
                        parseInt(_this.her4.Bizagi.Curso.total)
                    ], label: 'Curso oficial sin certificacion'
                },
                {
                    data: [
                        parseInt(_this.her4.Dreamweaver.Avanzado.total),
                        parseInt(_this.her4.Net_Beans.Avanzado.total),
                        parseInt(_this.her4.Eclipse.Avanzado.total),
                        parseInt(_this.her4.ABAP_Workbech.Avanzado.total),
                        parseInt(_this.her4.ARIS.Avanzado.total),
                        parseInt(_this.her4.Opera.Avanzado.total),
                        parseInt(_this.her4.Bizagi.Avanzado.total)
                    ], label: 'Avanzado'
                }, {
                    data: [
                        parseInt(_this.her4.Dreamweaver.Intermedio.total),
                        parseInt(_this.her4.Net_Beans.Intermedio.total),
                        parseInt(_this.her4.Eclipse.Intermedio.total),
                        parseInt(_this.her4.ABAP_Workbech.Intermedio.total),
                        parseInt(_this.her4.ARIS.Intermedio.total),
                        parseInt(_this.her4.Opera.Intermedio.total),
                        parseInt(_this.her4.Bizagi.Intermedio.total)
                    ], label: 'Intermedio'
                }, {
                    data: [
                        parseInt(_this.her4.Dreamweaver.Basico.total),
                        parseInt(_this.her4.Net_Beans.Basico.total),
                        parseInt(_this.her4.Eclipse.Basico.total),
                        parseInt(_this.her4.ABAP_Workbech.Basico.total),
                        parseInt(_this.her4.ARIS.Basico.total),
                        parseInt(_this.her4.Opera.Basico.total),
                        parseInt(_this.her4.Bizagi.Basico.total)
                    ], label: 'Basico'
                }, {
                    data: [
                        parseInt(_this.her4.Dreamweaver.Nocion.total),
                        parseInt(_this.her4.Net_Beans.Nocion.total),
                        parseInt(_this.her4.Eclipse.Nocion.total),
                        parseInt(_this.her4.ABAP_Workbech.Nocion.total),
                        parseInt(_this.her4.ARIS.Nocion.total),
                        parseInt(_this.her4.Opera.Nocion.total),
                        parseInt(_this.her4.Bizagi.Nocion.total)
                    ], label: 'Nocion'
                }, {
                    data: [
                        parseInt(_this.her4.Dreamweaver.Ninguno.total),
                        parseInt(_this.her4.Net_Beans.Ninguno.total),
                        parseInt(_this.her4.Eclipse.Ninguno.total),
                        parseInt(_this.her4.ABAP_Workbech.Ninguno.total),
                        parseInt(_this.her4.ARIS.Ninguno.total),
                        parseInt(_this.her4.Opera.Ninguno.total),
                        parseInt(_this.her4.Bizagi.Ninguno.total)
                    ], label: 'Ninguno'
                }
            ];
        }, function (error) {
            console.log(error);
        });
    };
    ReportesComponent.prototype.obtenerHerramientas5 = function () {
        var _this = this;
        this._datos.obtenerHerramientas5().subscribe(function (data) {
            _this.idioma = false;
            _this.herramienta1 = false;
            _this.herramienta2 = false;
            _this.herramienta3 = false;
            _this.herramienta4 = false;
            _this.herramienta5 = true;
            _this.lenguaje1 = false;
            _this.lenguaje2 = false;
            _this.lenguaje3 = false;
            _this.lenguaje4 = false;
            _this.lenguaje5 = false;
            _this.lenguaje6 = false;
            _this.solucion = false;
            _this.certificacion1 = false;
            _this.certificacion2 = false;
            _this.certificacion3 = false;
            _this.metodologia1 = false;
            _this.metodologia2 = false;
            _this.her5 = data;
            _this.barChartDataHerramienta5 = [
                {
                    data: [
                        parseInt(_this.her5.Microsoft_Project.Certificado.total),
                        parseInt(_this.her5.Excel.Certificado.total),
                        parseInt(_this.her5.Power_Point.Certificado.total),
                        parseInt(_this.her5.Word.Certificado.total),
                    ], label: 'Certificado'
                },
                {
                    data: [
                        parseInt(_this.her5.Microsoft_Project.Curso.total),
                        parseInt(_this.her5.Excel.Curso.total),
                        parseInt(_this.her5.Power_Point.Curso.total),
                        parseInt(_this.her5.Word.Curso.total)
                    ], label: 'Curso oficial sin certificacion'
                },
                {
                    data: [
                        parseInt(_this.her5.Microsoft_Project.Avanzado.total),
                        parseInt(_this.her5.Excel.Avanzado.total),
                        parseInt(_this.her5.Power_Point.Avanzado.total),
                        parseInt(_this.her5.Word.Avanzado.total)
                    ], label: 'Avanzado'
                }, {
                    data: [
                        parseInt(_this.her5.Microsoft_Project.Intermedio.total),
                        parseInt(_this.her5.Excel.Intermedio.total),
                        parseInt(_this.her5.Power_Point.Intermedio.total),
                        parseInt(_this.her5.Word.Intermedio.total)
                    ], label: 'Intermedio'
                }, {
                    data: [
                        parseInt(_this.her5.Microsoft_Project.Basico.total),
                        parseInt(_this.her5.Excel.Basico.total),
                        parseInt(_this.her5.Power_Point.Basico.total),
                        parseInt(_this.her5.Word.Basico.total)
                    ], label: 'Basico'
                }, {
                    data: [
                        parseInt(_this.her5.Microsoft_Project.Nocion.total),
                        parseInt(_this.her5.Excel.Nocion.total),
                        parseInt(_this.her5.Power_Point.Nocion.total),
                        parseInt(_this.her5.Word.Nocion.total)
                    ], label: 'Nocion'
                }, {
                    data: [
                        parseInt(_this.her5.Microsoft_Project.Ninguno.total),
                        parseInt(_this.her5.Excel.Ninguno.total),
                        parseInt(_this.her5.Power_Point.Ninguno.total),
                        parseInt(_this.her5.Word.Ninguno.total)
                    ], label: 'Ninguno'
                }
            ];
        }, function (error) {
            console.log(error);
        });
    };
    ReportesComponent.prototype.obtenerLenguajes1 = function () {
        var _this = this;
        this._datos.obtenerLenguajes1().subscribe(function (data) {
            _this.idioma = false;
            _this.herramienta1 = false;
            _this.herramienta2 = false;
            _this.herramienta3 = false;
            _this.herramienta4 = false;
            _this.herramienta5 = false;
            _this.lenguaje1 = true;
            _this.lenguaje2 = false;
            _this.lenguaje3 = false;
            _this.lenguaje4 = false;
            _this.lenguaje5 = false;
            _this.lenguaje6 = false;
            _this.solucion = false;
            _this.certificacion1 = false;
            _this.certificacion2 = false;
            _this.certificacion3 = false;
            _this.metodologia1 = false;
            _this.metodologia2 = false;
            _this.len = data;
            _this.barChartDataHerramienta = [
                {
                    data: [
                        parseInt(_this.len.Java.Certificado.total),
                        parseInt(_this.len.C_plus_plus.Certificado.total),
                        parseInt(_this.len.PHP.Certificado.total),
                        parseInt(_this.len.iOS.Certificado.total),
                        parseInt(_this.len.C_Sharp.Certificado.total),
                        parseInt(_this.len.Ruby.Certificado.total),
                        parseInt(_this.len.SQL_1.Certificado.total)
                    ], label: 'Certificado'
                },
                {
                    data: [
                        parseInt(_this.len.Java.Curso.total),
                        parseInt(_this.len.C_plus_plus.Curso.total),
                        parseInt(_this.len.PHP.Curso.total),
                        parseInt(_this.len.iOS.Curso.total),
                        parseInt(_this.len.C_Sharp.Curso.total),
                        parseInt(_this.len.Ruby.Curso.total),
                        parseInt(_this.len.SQL_1.Curso.total)
                    ], label: 'Curso oficial sin certificacion'
                },
                {
                    data: [
                        parseInt(_this.len.Java.Avanzado.total),
                        parseInt(_this.len.C_plus_plus.Avanzado.total),
                        parseInt(_this.len.PHP.Avanzado.total),
                        parseInt(_this.len.iOS.Avanzado.total),
                        parseInt(_this.len.C_Sharp.Avanzado.total),
                        parseInt(_this.len.Ruby.Avanzado.total),
                        parseInt(_this.len.SQL_1.Avanzado.total)
                    ], label: 'Avanzado'
                }, {
                    data: [
                        parseInt(_this.len.Java.Intermedio.total),
                        parseInt(_this.len.C_plus_plus.Intermedio.total),
                        parseInt(_this.len.PHP.Intermedio.total),
                        parseInt(_this.len.iOS.Intermedio.total),
                        parseInt(_this.len.C_Sharp.Intermedio.total),
                        parseInt(_this.len.Ruby.Intermedio.total),
                        parseInt(_this.len.SQL_1.Intermedio.total)
                    ], label: 'Intermedio'
                }, {
                    data: [
                        parseInt(_this.len.Java.Basico.total),
                        parseInt(_this.len.C_plus_plus.Basico.total),
                        parseInt(_this.len.PHP.Basico.total),
                        parseInt(_this.len.iOS.Basico.total),
                        parseInt(_this.len.C_Sharp.Basico.total),
                        parseInt(_this.len.Ruby.Basico.total),
                        parseInt(_this.len.SQL_1.Basico.total)
                    ], label: 'Basico'
                }, {
                    data: [
                        parseInt(_this.len.Java.Nocion.total),
                        parseInt(_this.len.C_plus_plus.Nocion.total),
                        parseInt(_this.len.PHP.Nocion.total),
                        parseInt(_this.len.iOS.Nocion.total),
                        parseInt(_this.len.C_Sharp.Nocion.total),
                        parseInt(_this.len.Ruby.Nocion.total),
                        parseInt(_this.len.SQL_1.Nocion.total)
                    ], label: 'Nocion'
                }, {
                    data: [
                        parseInt(_this.len.Java.Ninguno.total),
                        parseInt(_this.len.C_plus_plus.Ninguno.total),
                        parseInt(_this.len.PHP.Ninguno.total),
                        parseInt(_this.len.iOS.Ninguno.total),
                        parseInt(_this.len.C_Sharp.Ninguno.total),
                        parseInt(_this.len.Ruby.Ninguno.total),
                        parseInt(_this.len.SQL_1.Ninguno.total)
                    ], label: 'Ninguno'
                }
            ];
        }, function (error) {
            console.log("ERROR");
            console.log(error);
        });
    };
    ReportesComponent.prototype.obtenerLenguajes2 = function () {
        var _this = this;
        this._datos.obtenerLenguajes2().subscribe(function (data) {
            _this.idioma = false;
            _this.herramienta1 = false;
            _this.herramienta2 = false;
            _this.herramienta3 = false;
            _this.herramienta4 = false;
            _this.herramienta5 = false;
            _this.lenguaje1 = false;
            _this.lenguaje2 = true;
            _this.lenguaje3 = false;
            _this.lenguaje4 = false;
            _this.lenguaje5 = false;
            _this.lenguaje6 = false;
            _this.solucion = false;
            _this.certificacion1 = false;
            _this.certificacion2 = false;
            _this.certificacion3 = false;
            _this.metodologia1 = false;
            _this.metodologia2 = false;
            _this.len2 = data;
            _this.barChartDataHerramienta = [
                {
                    data: [
                        parseInt(_this.len2.Android.Certificado.total),
                        parseInt(_this.len2.ASP_NET.Certificado.total),
                        parseInt(_this.len2.HTML.Certificado.total),
                        parseInt(_this.len2.Java_Script.Certificado.total),
                        parseInt(_this.len2.Visual_Basic.Certificado.total),
                        parseInt(_this.len2.Phyton.Certificado.total),
                        parseInt(_this.len2.SAP_ABAP.Certificado.total)
                    ], label: 'Certificado'
                },
                {
                    data: [
                        parseInt(_this.len2.Android.Curso.total),
                        parseInt(_this.len2.ASP_NET.Curso.total),
                        parseInt(_this.len2.HTML.Curso.total),
                        parseInt(_this.len2.Java_Script.Curso.total),
                        parseInt(_this.len2.Visual_Basic.Curso.total),
                        parseInt(_this.len2.Phyton.Curso.total),
                        parseInt(_this.len2.SAP_ABAP.Curso.total)
                    ], label: 'Curso oficial sin certificacion'
                },
                {
                    data: [
                        parseInt(_this.len2.Android.Avanzado.total),
                        parseInt(_this.len2.ASP_NET.Avanzado.total),
                        parseInt(_this.len2.HTML.Avanzado.total),
                        parseInt(_this.len2.Java_Script.Avanzado.total),
                        parseInt(_this.len2.Visual_Basic.Avanzado.total),
                        parseInt(_this.len2.Phyton.Avanzado.total),
                        parseInt(_this.len2.SAP_ABAP.Avanzado.total)
                    ], label: 'Avanzado'
                }, {
                    data: [
                        parseInt(_this.len2.Android.Intermedio.total),
                        parseInt(_this.len2.ASP_NET.Intermedio.total),
                        parseInt(_this.len2.HTML.Intermedio.total),
                        parseInt(_this.len2.Java_Script.Intermedio.total),
                        parseInt(_this.len2.Visual_Basic.Intermedio.total),
                        parseInt(_this.len2.Phyton.Intermedio.total),
                        parseInt(_this.len2.SAP_ABAP.Intermedio.total)
                    ], label: 'Intermedio'
                }, {
                    data: [
                        parseInt(_this.len2.Android.Basico.total),
                        parseInt(_this.len2.ASP_NET.Basico.total),
                        parseInt(_this.len2.HTML.Basico.total),
                        parseInt(_this.len2.Java_Script.Basico.total),
                        parseInt(_this.len2.Visual_Basic.Basico.total),
                        parseInt(_this.len2.Phyton.Basico.total),
                        parseInt(_this.len2.SAP_ABAP.Basico.total)
                    ], label: 'Basico'
                }, {
                    data: [
                        parseInt(_this.len2.Android.Nocion.total),
                        parseInt(_this.len2.ASP_NET.Nocion.total),
                        parseInt(_this.len2.HTML.Nocion.total),
                        parseInt(_this.len2.Java_Script.Nocion.total),
                        parseInt(_this.len2.Visual_Basic.Nocion.total),
                        parseInt(_this.len2.Phyton.Nocion.total),
                        parseInt(_this.len2.SAP_ABAP.Nocion.total)
                    ], label: 'Nocion'
                }, {
                    data: [
                        parseInt(_this.len2.Android.Ninguno.total),
                        parseInt(_this.len2.ASP_NET.Ninguno.total),
                        parseInt(_this.len2.HTML.Ninguno.total),
                        parseInt(_this.len2.Java_Script.Ninguno.total),
                        parseInt(_this.len2.Visual_Basic.Ninguno.total),
                        parseInt(_this.len2.Phyton.Ninguno.total),
                        parseInt(_this.len2.SAP_ABAP.Ninguno.total)
                    ], label: 'Ninguno'
                }
            ];
        }, function (error) {
            console.log(error);
        });
    };
    ReportesComponent.prototype.obtenerLenguajes3 = function () {
        var _this = this;
        this._datos.obtenerLenguajes3().subscribe(function (data) {
            _this.idioma = false;
            _this.herramienta1 = false;
            _this.herramienta2 = false;
            _this.herramienta3 = false;
            _this.herramienta4 = false;
            _this.herramienta5 = false;
            _this.lenguaje1 = false;
            _this.lenguaje2 = false;
            _this.lenguaje3 = true;
            _this.lenguaje4 = false;
            _this.lenguaje5 = false;
            _this.lenguaje6 = false;
            _this.solucion = false;
            _this.certificacion1 = false;
            _this.certificacion2 = false;
            _this.certificacion3 = false;
            _this.metodologia1 = false;
            _this.metodologia2 = false;
            _this.len3 = data;
            _this.barChartDataHerramienta = [
                {
                    data: [
                        parseInt(_this.len3.Oracle.Certificado.total),
                        parseInt(_this.len3.MySQL.Certificado.total),
                        parseInt(_this.len3.Postgre.Certificado.total),
                        parseInt(_this.len3.JSF_2_0.Certificado.total),
                        parseInt(_this.len3.Big_Data.Certificado.total),
                        parseInt(_this.len3.Hadoop.Certificado.total),
                        parseInt(_this.len3.SPARK.Certificado.total)
                    ], label: 'Certificado'
                },
                {
                    data: [
                        parseInt(_this.len3.Oracle.Curso.total),
                        parseInt(_this.len3.MySQL.Curso.total),
                        parseInt(_this.len3.Postgre.Curso.total),
                        parseInt(_this.len3.JSF_2_0.Curso.total),
                        parseInt(_this.len3.Big_Data.Curso.total),
                        parseInt(_this.len3.Hadoop.Curso.total),
                        parseInt(_this.len3.SPARK.Curso.total)
                    ], label: 'Curso oficial sin certificacion'
                },
                {
                    data: [
                        parseInt(_this.len3.Oracle.Avanzado.total),
                        parseInt(_this.len3.MySQL.Avanzado.total),
                        parseInt(_this.len3.Postgre.Avanzado.total),
                        parseInt(_this.len3.JSF_2_0.Avanzado.total),
                        parseInt(_this.len3.Big_Data.Avanzado.total),
                        parseInt(_this.len3.Hadoop.Avanzado.total),
                        parseInt(_this.len3.SPARK.Avanzado.total)
                    ], label: 'Avanzado'
                }, {
                    data: [
                        parseInt(_this.len3.Oracle.Intermedio.total),
                        parseInt(_this.len3.MySQL.Intermedio.total),
                        parseInt(_this.len3.Postgre.Intermedio.total),
                        parseInt(_this.len3.JSF_2_0.Intermedio.total),
                        parseInt(_this.len3.Big_Data.Intermedio.total),
                        parseInt(_this.len3.Hadoop.Intermedio.total),
                        parseInt(_this.len3.SPARK.Intermedio.total)
                    ], label: 'Intermedio'
                }, {
                    data: [
                        parseInt(_this.len3.Oracle.Basico.total),
                        parseInt(_this.len3.MySQL.Basico.total),
                        parseInt(_this.len3.Postgre.Basico.total),
                        parseInt(_this.len3.JSF_2_0.Basico.total),
                        parseInt(_this.len3.Big_Data.Basico.total),
                        parseInt(_this.len3.Hadoop.Basico.total),
                        parseInt(_this.len3.SPARK.Basico.total)
                    ], label: 'Basico'
                }, {
                    data: [
                        parseInt(_this.len3.Oracle.Nocion.total),
                        parseInt(_this.len3.MySQL.Nocion.total),
                        parseInt(_this.len3.Postgre.Nocion.total),
                        parseInt(_this.len3.JSF_2_0.Nocion.total),
                        parseInt(_this.len3.Big_Data.Nocion.total),
                        parseInt(_this.len3.Hadoop.Nocion.total),
                        parseInt(_this.len3.SPARK.Nocion.total)
                    ], label: 'Nocion'
                }, {
                    data: [
                        parseInt(_this.len3.Oracle.Ninguno.total),
                        parseInt(_this.len3.MySQL.Ninguno.total),
                        parseInt(_this.len3.Postgre.Ninguno.total),
                        parseInt(_this.len3.JSF_2_0.Ninguno.total),
                        parseInt(_this.len3.Big_Data.Ninguno.total),
                        parseInt(_this.len3.Hadoop.Ninguno.total),
                        parseInt(_this.len3.SPARK.Ninguno.total)
                    ], label: 'Ninguno'
                }
            ];
        }, function (error) {
            console.log(error);
        });
    };
    ReportesComponent.prototype.obtenerLenguajes4 = function () {
        var _this = this;
        this._datos.obtenerLenguajes4().subscribe(function (data) {
            _this.idioma = false;
            _this.herramienta1 = false;
            _this.herramienta2 = false;
            _this.herramienta3 = false;
            _this.herramienta4 = false;
            _this.herramienta5 = false;
            _this.lenguaje1 = false;
            _this.lenguaje2 = false;
            _this.lenguaje3 = false;
            _this.lenguaje4 = true;
            _this.lenguaje5 = false;
            _this.lenguaje6 = false;
            _this.solucion = false;
            _this.certificacion1 = false;
            _this.certificacion2 = false;
            _this.certificacion3 = false;
            _this.metodologia1 = false;
            _this.metodologia2 = false;
            _this.len4 = data;
            _this.barChartDataHerramienta = [
                {
                    data: [
                        parseInt(_this.len4.Google_Maps.Certificado.total),
                        parseInt(_this.len4.MapReduce.Certificado.total),
                        parseInt(_this.len4.Tomcat.Certificado.total),
                        parseInt(_this.len4.Weblogic.Certificado.total),
                        parseInt(_this.len4.ISS.Certificado.total),
                        parseInt(_this.len4.BlockChain.Certificado.total),
                        parseInt(_this.len4.Wordpress.Certificado.total)
                    ], label: 'Certificado'
                },
                {
                    data: [
                        parseInt(_this.len4.Google_Maps.Curso.total),
                        parseInt(_this.len4.MapReduce.Curso.total),
                        parseInt(_this.len4.Tomcat.Curso.total),
                        parseInt(_this.len4.Weblogic.Curso.total),
                        parseInt(_this.len4.ISS.Curso.total),
                        parseInt(_this.len4.BlockChain.Curso.total),
                        parseInt(_this.len4.Wordpress.Curso.total)
                    ], label: 'Curso oficial sin certificacion'
                },
                {
                    data: [
                        parseInt(_this.len4.Google_Maps.Avanzado.total),
                        parseInt(_this.len4.MapReduce.Avanzado.total),
                        parseInt(_this.len4.Tomcat.Avanzado.total),
                        parseInt(_this.len4.Weblogic.Avanzado.total),
                        parseInt(_this.len4.ISS.Avanzado.total),
                        parseInt(_this.len4.BlockChain.Avanzado.total),
                        parseInt(_this.len4.Wordpress.Avanzado.total)
                    ], label: 'Avanzado'
                }, {
                    data: [
                        parseInt(_this.len4.Google_Maps.Intermedio.total),
                        parseInt(_this.len4.MapReduce.Intermedio.total),
                        parseInt(_this.len4.Tomcat.Intermedio.total),
                        parseInt(_this.len4.Weblogic.Intermedio.total),
                        parseInt(_this.len4.ISS.Intermedio.total),
                        parseInt(_this.len4.BlockChain.Intermedio.total),
                        parseInt(_this.len4.Wordpress.Intermedio.total)
                    ], label: 'Intermedio'
                }, {
                    data: [
                        parseInt(_this.len4.Google_Maps.Basico.total),
                        parseInt(_this.len4.MapReduce.Basico.total),
                        parseInt(_this.len4.Tomcat.Basico.total),
                        parseInt(_this.len4.Weblogic.Basico.total),
                        parseInt(_this.len4.ISS.Basico.total),
                        parseInt(_this.len4.BlockChain.Basico.total),
                        parseInt(_this.len4.Wordpress.Basico.total)
                    ], label: 'Basico'
                }, {
                    data: [
                        parseInt(_this.len4.Google_Maps.Nocion.total),
                        parseInt(_this.len4.MapReduce.Nocion.total),
                        parseInt(_this.len4.Tomcat.Nocion.total),
                        parseInt(_this.len4.Weblogic.Nocion.total),
                        parseInt(_this.len4.ISS.Nocion.total),
                        parseInt(_this.len4.BlockChain.Nocion.total),
                        parseInt(_this.len4.Wordpress.Nocion.total)
                    ], label: 'Nocion'
                }, {
                    data: [
                        parseInt(_this.len4.Google_Maps.Ninguno.total),
                        parseInt(_this.len4.MapReduce.Ninguno.total),
                        parseInt(_this.len4.Tomcat.Ninguno.total),
                        parseInt(_this.len4.Weblogic.Ninguno.total),
                        parseInt(_this.len4.ISS.Ninguno.total),
                        parseInt(_this.len4.BlockChain.Ninguno.total),
                        parseInt(_this.len4.Wordpress.Ninguno.total)
                    ], label: 'Ninguno'
                }
            ];
        }, function (error) {
            console.log(error);
        });
    };
    ReportesComponent.prototype.obtenerLenguajes5 = function () {
        var _this = this;
        this._datos.obtenerLenguajes5().subscribe(function (data) {
            _this.idioma = false;
            _this.herramienta1 = false;
            _this.herramienta2 = false;
            _this.herramienta3 = false;
            _this.herramienta4 = false;
            _this.herramienta5 = false;
            _this.lenguaje1 = false;
            _this.lenguaje2 = false;
            _this.lenguaje3 = false;
            _this.lenguaje4 = false;
            _this.lenguaje5 = true;
            _this.lenguaje6 = false;
            _this.solucion = false;
            _this.certificacion1 = false;
            _this.certificacion2 = false;
            _this.certificacion3 = false;
            _this.metodologia1 = false;
            _this.metodologia2 = false;
            _this.len5 = data;
            _this.barChartDataHerramienta = [
                {
                    data: [
                        parseInt(_this.len5.Joomla.Certificado.total),
                        parseInt(_this.len5.Sharepoint.Certificado.total),
                        parseInt(_this.len5.Hybernate.Certificado.total),
                        parseInt(_this.len5.Angular.Certificado.total),
                        parseInt(_this.len5.Ember.Certificado.total),
                        parseInt(_this.len5.JSON.Certificado.total),
                        parseInt(_this.len5.IONIC.Certificado.total)
                    ], label: 'Certificado'
                },
                {
                    data: [
                        parseInt(_this.len5.Joomla.Curso.total),
                        parseInt(_this.len5.Sharepoint.Curso.total),
                        parseInt(_this.len5.Hybernate.Curso.total),
                        parseInt(_this.len5.Angular.Curso.total),
                        parseInt(_this.len5.Ember.Curso.total),
                        parseInt(_this.len5.JSON.Curso.total),
                        parseInt(_this.len5.IONIC.Curso.total)
                    ], label: 'Curso oficial sin certificacion'
                },
                {
                    data: [
                        parseInt(_this.len5.Joomla.Avanzado.total),
                        parseInt(_this.len5.Sharepoint.Avanzado.total),
                        parseInt(_this.len5.Hybernate.Avanzado.total),
                        parseInt(_this.len5.Angular.Avanzado.total),
                        parseInt(_this.len5.Ember.Avanzado.total),
                        parseInt(_this.len5.JSON.Avanzado.total),
                        parseInt(_this.len5.IONIC.Avanzado.total)
                    ], label: 'Avanzado'
                }, {
                    data: [
                        parseInt(_this.len5.Joomla.Intermedio.total),
                        parseInt(_this.len5.Sharepoint.Intermedio.total),
                        parseInt(_this.len5.Hybernate.Intermedio.total),
                        parseInt(_this.len5.Angular.Intermedio.total),
                        parseInt(_this.len5.Ember.Intermedio.total),
                        parseInt(_this.len5.JSON.Intermedio.total),
                        parseInt(_this.len5.IONIC.Intermedio.total)
                    ], label: 'Intermedio'
                }, {
                    data: [
                        parseInt(_this.len5.Joomla.Basico.total),
                        parseInt(_this.len5.Sharepoint.Basico.total),
                        parseInt(_this.len5.Hybernate.Basico.total),
                        parseInt(_this.len5.Angular.Basico.total),
                        parseInt(_this.len5.Ember.Basico.total),
                        parseInt(_this.len5.JSON.Basico.total),
                        parseInt(_this.len5.IONIC.Basico.total)
                    ], label: 'Basico'
                }, {
                    data: [
                        parseInt(_this.len5.Joomla.Nocion.total),
                        parseInt(_this.len5.Sharepoint.Nocion.total),
                        parseInt(_this.len5.Hybernate.Nocion.total),
                        parseInt(_this.len5.Angular.Nocion.total),
                        parseInt(_this.len5.Ember.Nocion.total),
                        parseInt(_this.len5.JSON.Nocion.total),
                        parseInt(_this.len5.IONIC.Nocion.total)
                    ], label: 'Nocion'
                }, {
                    data: [
                        parseInt(_this.len5.Joomla.Ninguno.total),
                        parseInt(_this.len5.Sharepoint.Ninguno.total),
                        parseInt(_this.len5.Hybernate.Ninguno.total),
                        parseInt(_this.len5.Angular.Ninguno.total),
                        parseInt(_this.len5.Ember.Ninguno.total),
                        parseInt(_this.len5.JSON.Ninguno.total),
                        parseInt(_this.len5.IONIC.Ninguno.total)
                    ], label: 'Ninguno'
                }
            ];
        }, function (error) {
            console.log(error);
        });
    };
    ReportesComponent.prototype.obtenerLenguajes6 = function () {
        var _this = this;
        this._datos.obtenerLenguajes6().subscribe(function (data) {
            _this.idioma = false;
            _this.herramienta1 = false;
            _this.herramienta2 = false;
            _this.herramienta3 = false;
            _this.herramienta4 = false;
            _this.herramienta5 = false;
            _this.lenguaje1 = false;
            _this.lenguaje2 = false;
            _this.lenguaje3 = false;
            _this.lenguaje4 = false;
            _this.lenguaje5 = false;
            _this.lenguaje6 = true;
            _this.solucion = false;
            _this.certificacion1 = false;
            _this.certificacion2 = false;
            _this.certificacion3 = false;
            _this.metodologia1 = false;
            _this.metodologia2 = false;
            _this.len6 = data;
            _this.barChartDataHerramienta6 = [
                {
                    data: [
                        parseInt(_this.len6.SPRING.Certificado.total),
                        parseInt(_this.len6.Google_AD_Words.Certificado.total),
                        parseInt(_this.len6.Google_Analitics.Certificado.total)
                    ], label: 'Certificado'
                },
                {
                    data: [
                        parseInt(_this.len6.SPRING.Curso.total),
                        parseInt(_this.len6.Google_AD_Words.Curso.total),
                        parseInt(_this.len6.Google_Analitics.Curso.total)
                    ], label: 'Curso oficial sin certificacion'
                },
                {
                    data: [
                        parseInt(_this.len6.SPRING.Avanzado.total),
                        parseInt(_this.len6.Google_AD_Words.Avanzado.total),
                        parseInt(_this.len6.Google_Analitics.Avanzado.total)
                    ], label: 'Avanzado'
                }, {
                    data: [
                        parseInt(_this.len6.SPRING.Intermedio.total),
                        parseInt(_this.len6.Google_AD_Words.Intermedio.total),
                        parseInt(_this.len6.Google_Analitics.Intermedio.total)
                    ], label: 'Intermedio'
                }, {
                    data: [
                        parseInt(_this.len6.SPRING.Basico.total),
                        parseInt(_this.len6.Google_AD_Words.Basico.total),
                        parseInt(_this.len6.Google_Analitics.Basico.total)
                    ], label: 'Basico'
                }, {
                    data: [
                        parseInt(_this.len6.SPRING.Nocion.total),
                        parseInt(_this.len6.Google_AD_Words.Nocion.total),
                        parseInt(_this.len6.Google_Analitics.Nocion.total)
                    ], label: 'Nocion'
                }, {
                    data: [
                        parseInt(_this.len6.SPRING.Ninguno.total),
                        parseInt(_this.len6.Google_AD_Words.Ninguno.total),
                        parseInt(_this.len6.Google_Analitics.Ninguno.total)
                    ], label: 'Ninguno'
                }
            ];
        }, function (error) {
            console.log(error);
        });
    };
    ReportesComponent.prototype.obtenerSoluciones = function () {
        var _this = this;
        this._datos.obtenerSoluciones().subscribe(function (data) {
            _this.idioma = false;
            _this.herramienta1 = false;
            _this.herramienta2 = false;
            _this.herramienta3 = false;
            _this.herramienta4 = false;
            _this.herramienta5 = false;
            _this.lenguaje1 = false;
            _this.lenguaje2 = false;
            _this.lenguaje3 = false;
            _this.lenguaje4 = false;
            _this.lenguaje5 = false;
            _this.lenguaje6 = false;
            _this.solucion = true;
            _this.certificacion1 = false;
            _this.certificacion2 = false;
            _this.certificacion3 = false;
            _this.metodologia1 = false;
            _this.metodologia2 = false;
            _this.sol = data;
            _this.barChartDataSolucion = [
                {
                    data: [
                        parseInt(_this.sol.Soluciones_en_la_nube_Amazon.Certificado.total),
                        parseInt(_this.sol.Soluciones_en_la_nube_Azure.Certificado.total)
                    ], label: 'Certificado'
                },
                {
                    data: [
                        parseInt(_this.sol.Soluciones_en_la_nube_Amazon.Curso.total),
                        parseInt(_this.sol.Soluciones_en_la_nube_Azure.Curso.total)
                    ], label: 'Curso oficial sin certificacion'
                },
                {
                    data: [
                        parseInt(_this.sol.Soluciones_en_la_nube_Amazon.Avanzado.total),
                        parseInt(_this.sol.Soluciones_en_la_nube_Azure.Avanzado.total)
                    ], label: 'Avanzado'
                }, {
                    data: [
                        parseInt(_this.sol.Soluciones_en_la_nube_Amazon.Intermedio.total),
                        parseInt(_this.sol.Soluciones_en_la_nube_Azure.Intermedio.total)
                    ], label: 'Intermedio'
                }, {
                    data: [
                        parseInt(_this.sol.Soluciones_en_la_nube_Amazon.Basico.total),
                        parseInt(_this.sol.Soluciones_en_la_nube_Azure.Basico.total)
                    ], label: 'Basico'
                }, {
                    data: [
                        parseInt(_this.sol.Soluciones_en_la_nube_Amazon.Nocion.total),
                        parseInt(_this.sol.Soluciones_en_la_nube_Azure.Nocion.total)
                    ], label: 'Nocion'
                }, {
                    data: [
                        parseInt(_this.sol.Soluciones_en_la_nube_Amazon.Ninguno.total),
                        parseInt(_this.sol.Soluciones_en_la_nube_Azure.Ninguno.total)
                    ], label: 'Ninguno'
                }
            ];
        }, function (error) {
            console.log(error);
        });
    };
    ReportesComponent.prototype.obtenerCertificaciones1 = function () {
        var _this = this;
        this._datos.obtenerCertificaciones1().subscribe(function (data) {
            _this.idioma = false;
            _this.herramienta1 = false;
            _this.herramienta2 = false;
            _this.herramienta3 = false;
            _this.herramienta4 = false;
            _this.herramienta5 = false;
            _this.lenguaje1 = false;
            _this.lenguaje2 = false;
            _this.lenguaje3 = false;
            _this.lenguaje4 = false;
            _this.lenguaje5 = false;
            _this.lenguaje6 = false;
            _this.solucion = false;
            _this.certificacion1 = true;
            _this.certificacion2 = false;
            _this.certificacion3 = false;
            _this.metodologia1 = false;
            _this.metodologia2 = false;
            _this.cer1 = data;
            _this.barChartDataCertificacion1 = [
                {
                    data: [
                        parseInt(_this.cer1.Scrum_Master.Certificado.total),
                        parseInt(_this.cer1.Scrum_Team_Member.Certificado.total),
                        parseInt(_this.cer1.Scrum_Product_Owner.Certificado.total),
                        parseInt(_this.cer1.ITIL_Fundamentos.Certificado.total),
                        parseInt(_this.cer1.ITIL_Intermedio.Certificado.total),
                        parseInt(_this.cer1.ITIL_Expert.Certificado.total),
                        parseInt(_this.cer1.Six_Sigma_Black_Belt.Certificado.total)
                    ], label: 'Certificado'
                },
                {
                    data: [
                        parseInt(_this.cer1.Scrum_Master.Curso.total),
                        parseInt(_this.cer1.Scrum_Team_Member.Curso.total),
                        parseInt(_this.cer1.Scrum_Product_Owner.Curso.total),
                        parseInt(_this.cer1.ITIL_Fundamentos.Curso.total),
                        parseInt(_this.cer1.ITIL_Intermedio.Curso.total),
                        parseInt(_this.cer1.ITIL_Expert.Curso.total),
                        parseInt(_this.cer1.Six_Sigma_Black_Belt.Curso.total)
                    ], label: 'Curso oficial sin certificacion'
                },
                {
                    data: [
                        parseInt(_this.cer1.Scrum_Master.Avanzado.total),
                        parseInt(_this.cer1.Scrum_Team_Member.Avanzado.total),
                        parseInt(_this.cer1.Scrum_Product_Owner.Avanzado.total),
                        parseInt(_this.cer1.ITIL_Fundamentos.Avanzado.total),
                        parseInt(_this.cer1.ITIL_Intermedio.Avanzado.total),
                        parseInt(_this.cer1.ITIL_Expert.Avanzado.total),
                        parseInt(_this.cer1.Six_Sigma_Black_Belt.Avanzado.total)
                    ], label: 'Avanzado'
                }, {
                    data: [
                        parseInt(_this.cer1.Scrum_Master.Intermedio.total),
                        parseInt(_this.cer1.Scrum_Team_Member.Intermedio.total),
                        parseInt(_this.cer1.Scrum_Product_Owner.Intermedio.total),
                        parseInt(_this.cer1.ITIL_Fundamentos.Intermedio.total),
                        parseInt(_this.cer1.ITIL_Intermedio.Intermedio.total),
                        parseInt(_this.cer1.ITIL_Expert.Intermedio.total),
                        parseInt(_this.cer1.Six_Sigma_Black_Belt.Intermedio.total)
                    ], label: 'Intermedio'
                }, {
                    data: [
                        parseInt(_this.cer1.Scrum_Master.Basico.total),
                        parseInt(_this.cer1.Scrum_Team_Member.Basico.total),
                        parseInt(_this.cer1.Scrum_Product_Owner.Basico.total),
                        parseInt(_this.cer1.ITIL_Fundamentos.Basico.total),
                        parseInt(_this.cer1.ITIL_Intermedio.Basico.total),
                        parseInt(_this.cer1.ITIL_Expert.Basico.total),
                        parseInt(_this.cer1.Six_Sigma_Black_Belt.Basico.total)
                    ], label: 'Basico'
                }, {
                    data: [
                        parseInt(_this.cer1.Scrum_Master.Nocion.total),
                        parseInt(_this.cer1.Scrum_Team_Member.Nocion.total),
                        parseInt(_this.cer1.Scrum_Product_Owner.Nocion.total),
                        parseInt(_this.cer1.ITIL_Fundamentos.Nocion.total),
                        parseInt(_this.cer1.ITIL_Intermedio.Nocion.total),
                        parseInt(_this.cer1.ITIL_Expert.Nocion.total),
                        parseInt(_this.cer1.Six_Sigma_Black_Belt.Nocion.total)
                    ], label: 'Nocion'
                }, {
                    data: [
                        parseInt(_this.cer1.Scrum_Master.Ninguno.total),
                        parseInt(_this.cer1.Scrum_Team_Member.Ninguno.total),
                        parseInt(_this.cer1.Scrum_Product_Owner.Ninguno.total),
                        parseInt(_this.cer1.ITIL_Fundamentos.Ninguno.total),
                        parseInt(_this.cer1.ITIL_Intermedio.Ninguno.total),
                        parseInt(_this.cer1.ITIL_Expert.Ninguno.total),
                        parseInt(_this.cer1.Six_Sigma_Black_Belt.Ninguno.total)
                    ], label: 'Ninguno'
                }
            ];
        }, function (error) {
            console.log(error);
        });
    };
    ReportesComponent.prototype.obtenerCertificaciones2 = function () {
        var _this = this;
        this._datos.obtenerCertificaciones2().subscribe(function (data) {
            _this.idioma = false;
            _this.herramienta1 = false;
            _this.herramienta2 = false;
            _this.herramienta3 = false;
            _this.herramienta4 = false;
            _this.herramienta5 = false;
            _this.lenguaje1 = false;
            _this.lenguaje2 = false;
            _this.lenguaje3 = false;
            _this.lenguaje4 = false;
            _this.lenguaje5 = false;
            _this.lenguaje6 = false;
            _this.solucion = false;
            _this.certificacion1 = false;
            _this.certificacion2 = true;
            _this.certificacion3 = false;
            _this.metodologia1 = false;
            _this.metodologia2 = false;
            _this.cer2 = data;
            _this.barChartDataCertificacion1 = [
                {
                    data: [
                        parseInt(_this.cer2.PMP.Certificado.total),
                        parseInt(_this.cer2.ISTQB.Certificado.total),
                        parseInt(_this.cer2.CMMI_Oficial.Certificado.total),
                        parseInt(_this.cer2.Oracle_Certified_Profesional_Java_SE.Certificado.total),
                        parseInt(_this.cer2.ISO_27000.Certificado.total),
                        parseInt(_this.cer2.ISO_20000.Certificado.total),
                        parseInt(_this.cer2.COBIT.Certificado.total)
                    ], label: 'Certificado'
                },
                {
                    data: [
                        parseInt(_this.cer2.PMP.Curso.total),
                        parseInt(_this.cer2.ISTQB.Curso.total),
                        parseInt(_this.cer2.CMMI_Oficial.Curso.total),
                        parseInt(_this.cer2.Oracle_Certified_Profesional_Java_SE.Curso.total),
                        parseInt(_this.cer2.ISO_27000.Curso.total),
                        parseInt(_this.cer2.ISO_20000.Curso.total),
                        parseInt(_this.cer2.COBIT.Curso.total)
                    ], label: 'Curso oficial sin certificacion'
                },
                {
                    data: [
                        parseInt(_this.cer2.PMP.Avanzado.total),
                        parseInt(_this.cer2.ISTQB.Avanzado.total),
                        parseInt(_this.cer2.CMMI_Oficial.Avanzado.total),
                        parseInt(_this.cer2.Oracle_Certified_Profesional_Java_SE.Avanzado.total),
                        parseInt(_this.cer2.ISO_27000.Avanzado.total),
                        parseInt(_this.cer2.ISO_20000.Avanzado.total),
                        parseInt(_this.cer2.COBIT.Avanzado.total)
                    ], label: 'Avanzado'
                }, {
                    data: [
                        parseInt(_this.cer2.PMP.Intermedio.total),
                        parseInt(_this.cer2.ISTQB.Intermedio.total),
                        parseInt(_this.cer2.CMMI_Oficial.Intermedio.total),
                        parseInt(_this.cer2.Oracle_Certified_Profesional_Java_SE.Intermedio.total),
                        parseInt(_this.cer2.ISO_27000.Intermedio.total),
                        parseInt(_this.cer2.ISO_20000.Intermedio.total),
                        parseInt(_this.cer2.COBIT.Intermedio.total)
                    ], label: 'Intermedio'
                }, {
                    data: [
                        parseInt(_this.cer2.PMP.Basico.total),
                        parseInt(_this.cer2.ISTQB.Basico.total),
                        parseInt(_this.cer2.CMMI_Oficial.Basico.total),
                        parseInt(_this.cer2.Oracle_Certified_Profesional_Java_SE.Basico.total),
                        parseInt(_this.cer2.ISO_27000.Basico.total),
                        parseInt(_this.cer2.ISO_20000.Basico.total),
                        parseInt(_this.cer2.COBIT.Basico.total)
                    ], label: 'Basico'
                }, {
                    data: [
                        parseInt(_this.cer2.PMP.Nocion.total),
                        parseInt(_this.cer2.ISTQB.Nocion.total),
                        parseInt(_this.cer2.CMMI_Oficial.Nocion.total),
                        parseInt(_this.cer2.Oracle_Certified_Profesional_Java_SE.Nocion.total),
                        parseInt(_this.cer2.ISO_27000.Nocion.total),
                        parseInt(_this.cer2.ISO_20000.Nocion.total),
                        parseInt(_this.cer2.COBIT.Nocion.total)
                    ], label: 'Nocion'
                }, {
                    data: [
                        parseInt(_this.cer2.PMP.Ninguno.total),
                        parseInt(_this.cer2.ISTQB.Ninguno.total),
                        parseInt(_this.cer2.CMMI_Oficial.Ninguno.total),
                        parseInt(_this.cer2.Oracle_Certified_Profesional_Java_SE.Ninguno.total),
                        parseInt(_this.cer2.ISO_27000.Ninguno.total),
                        parseInt(_this.cer2.ISO_20000.Ninguno.total),
                        parseInt(_this.cer2.COBIT.Ninguno.total)
                    ], label: 'Ninguno'
                }
            ];
        }, function (error) {
            console.log(error);
        });
    };
    ReportesComponent.prototype.obtenerCertificaciones3 = function () {
        var _this = this;
        this._datos.obtenerCertificaciones2().subscribe(function (data) {
            _this.idioma = false;
            _this.herramienta1 = false;
            _this.herramienta2 = false;
            _this.herramienta3 = false;
            _this.herramienta4 = false;
            _this.herramienta5 = false;
            _this.lenguaje1 = false;
            _this.lenguaje2 = false;
            _this.lenguaje3 = false;
            _this.lenguaje4 = false;
            _this.lenguaje5 = false;
            _this.lenguaje6 = false;
            _this.solucion = false;
            _this.certificacion1 = false;
            _this.certificacion2 = false;
            _this.certificacion3 = true;
            _this.metodologia1 = false;
            _this.metodologia2 = false;
            _this.cer3 = data;
            _this.barChartDataCertificacion1 = [
                {
                    data: [
                        parseInt(_this.cer3.CRISC.Certificado.total),
                        parseInt(_this.cer3.GRCP.Certificado.total),
                        parseInt(_this.cer3.ISO_9000.Certificado.total),
                        parseInt(_this.cer3.Prince.Certificado.total),
                        parseInt(_this.cer3.COSO.Certificado.total),
                        parseInt(_this.cer3.SOX.Certificado.total),
                        parseInt(_this.cer3.BPM.Certificado.total)
                    ], label: 'Certificado'
                },
                {
                    data: [
                        parseInt(_this.cer3.CRISC.Curso.total),
                        parseInt(_this.cer3.GRCP.Curso.total),
                        parseInt(_this.cer3.ISO_9000.Curso.total),
                        parseInt(_this.cer3.Prince.Curso.total),
                        parseInt(_this.cer3.COSO.Curso.total),
                        parseInt(_this.cer3.SOX.Curso.total),
                        parseInt(_this.cer3.BPM.Curso.total)
                    ], label: 'Curso oficial sin certificacion'
                },
                {
                    data: [
                        parseInt(_this.cer3.CRISC.Avanzado.total),
                        parseInt(_this.cer3.GRCP.Avanzado.total),
                        parseInt(_this.cer3.ISO_9000.Avanzado.total),
                        parseInt(_this.cer3.Prince.Avanzado.total),
                        parseInt(_this.cer3.COSO.Avanzado.total),
                        parseInt(_this.cer3.SOX.Avanzado.total),
                        parseInt(_this.cer3.BPM.Avanzado.total)
                    ], label: 'Avanzado'
                }, {
                    data: [
                        parseInt(_this.cer3.CRISC.Intermedio.total),
                        parseInt(_this.cer3.GRCP.Intermedio.total),
                        parseInt(_this.cer3.ISO_9000.Intermedio.total),
                        parseInt(_this.cer3.Prince.Intermedio.total),
                        parseInt(_this.cer3.COSO.Intermedio.total),
                        parseInt(_this.cer3.SOX.Intermedio.total),
                        parseInt(_this.cer3.BPM.Intermedio.total)
                    ], label: 'Intermedio'
                }, {
                    data: [
                        parseInt(_this.cer3.CRISC.Basico.total),
                        parseInt(_this.cer3.GRCP.Basico.total),
                        parseInt(_this.cer3.ISO_9000.Basico.total),
                        parseInt(_this.cer3.Prince.Basico.total),
                        parseInt(_this.cer3.COSO.Basico.total),
                        parseInt(_this.cer3.SOX.Basico.total),
                        parseInt(_this.cer3.BPM.Basico.total)
                    ], label: 'Basico'
                }, {
                    data: [
                        parseInt(_this.cer3.CRISC.Nocion.total),
                        parseInt(_this.cer3.GRCP.Nocion.total),
                        parseInt(_this.cer3.ISO_9000.Nocion.total),
                        parseInt(_this.cer3.Prince.Nocion.total),
                        parseInt(_this.cer3.COSO.Nocion.total),
                        parseInt(_this.cer3.SOX.Nocion.total),
                        parseInt(_this.cer3.BPM.Nocion.total)
                    ], label: 'Nocion'
                }, {
                    data: [
                        parseInt(_this.cer3.CRISC.Ninguno.total),
                        parseInt(_this.cer3.GRCP.Ninguno.total),
                        parseInt(_this.cer3.ISO_9000.Ninguno.total),
                        parseInt(_this.cer3.Prince.Ninguno.total),
                        parseInt(_this.cer3.COSO.Ninguno.total),
                        parseInt(_this.cer3.SOX.Ninguno.total),
                        parseInt(_this.cer3.BPM.Ninguno.total)
                    ], label: 'Ninguno'
                }
            ];
        }, function (error) {
            console.log(error);
        });
    };
    ReportesComponent.prototype.obtenerMetodologias1 = function () {
        var _this = this;
        this._datos.obtenerMetodologias1().subscribe(function (data) {
            _this.idioma = false;
            _this.herramienta1 = false;
            _this.herramienta2 = false;
            _this.herramienta3 = false;
            _this.herramienta4 = false;
            _this.herramienta5 = false;
            _this.lenguaje1 = false;
            _this.lenguaje2 = false;
            _this.lenguaje3 = false;
            _this.lenguaje4 = false;
            _this.lenguaje5 = false;
            _this.lenguaje6 = false;
            _this.solucion = false;
            _this.certificacion1 = false;
            _this.certificacion2 = false;
            _this.certificacion3 = false;
            _this.metodologia1 = true;
            _this.metodologia2 = false;
            _this.met1 = data;
            _this.barChartDataCertificacion1 = [
                {
                    data: [
                        parseInt(_this.met1.Metodologias_ISTQB.Certificado.total),
                        parseInt(_this.met1.Metodologias_Agile_Testing.Certificado.total),
                        parseInt(_this.met1.Metodologias_ISEB.Certificado.total),
                        parseInt(_this.met1.Metodologias_CAST.Certificado.total),
                        parseInt(_this.met1.Metodologias_CSTE.Certificado.total),
                        parseInt(_this.met1.Metodologias_CSQA.Certificado.total),
                        parseInt(_this.met1.Metodologias_TMap.Certificado.total)
                    ], label: 'Certificado'
                },
                {
                    data: [
                        parseInt(_this.met1.Metodologias_ISTQB.Curso.total),
                        parseInt(_this.met1.Metodologias_Agile_Testing.Curso.total),
                        parseInt(_this.met1.Metodologias_ISEB.Curso.total),
                        parseInt(_this.met1.Metodologias_CAST.Curso.total),
                        parseInt(_this.met1.Metodologias_CSTE.Curso.total),
                        parseInt(_this.met1.Metodologias_CSQA.Curso.total),
                        parseInt(_this.met1.Metodologias_TMap.Curso.total)
                    ], label: 'Curso oficial sin certificacion'
                },
                {
                    data: [
                        parseInt(_this.met1.Metodologias_ISTQB.Avanzado.total),
                        parseInt(_this.met1.Metodologias_Agile_Testing.Avanzado.total),
                        parseInt(_this.met1.Metodologias_ISEB.Avanzado.total),
                        parseInt(_this.met1.Metodologias_CAST.Avanzado.total),
                        parseInt(_this.met1.Metodologias_CSTE.Avanzado.total),
                        parseInt(_this.met1.Metodologias_CSQA.Avanzado.total),
                        parseInt(_this.met1.Metodologias_TMap.Avanzado.total)
                    ], label: 'Avanzado'
                }, {
                    data: [
                        parseInt(_this.met1.Metodologias_ISTQB.Intermedio.total),
                        parseInt(_this.met1.Metodologias_Agile_Testing.Intermedio.total),
                        parseInt(_this.met1.Metodologias_ISEB.Intermedio.total),
                        parseInt(_this.met1.Metodologias_CAST.Intermedio.total),
                        parseInt(_this.met1.Metodologias_CSTE.Intermedio.total),
                        parseInt(_this.met1.Metodologias_CSQA.Intermedio.total),
                        parseInt(_this.met1.Metodologias_TMap.Intermedio.total)
                    ], label: 'Intermedio'
                }, {
                    data: [
                        parseInt(_this.met1.Metodologias_ISTQB.Basico.total),
                        parseInt(_this.met1.Metodologias_Agile_Testing.Basico.total),
                        parseInt(_this.met1.Metodologias_ISEB.Basico.total),
                        parseInt(_this.met1.Metodologias_CAST.Basico.total),
                        parseInt(_this.met1.Metodologias_CSTE.Basico.total),
                        parseInt(_this.met1.Metodologias_CSQA.Basico.total),
                        parseInt(_this.met1.Metodologias_TMap.Basico.total)
                    ], label: 'Basico'
                }, {
                    data: [
                        parseInt(_this.met1.Metodologias_ISTQB.Nocion.total),
                        parseInt(_this.met1.Metodologias_Agile_Testing.Nocion.total),
                        parseInt(_this.met1.Metodologias_ISEB.Nocion.total),
                        parseInt(_this.met1.Metodologias_CAST.Nocion.total),
                        parseInt(_this.met1.Metodologias_CSTE.Nocion.total),
                        parseInt(_this.met1.Metodologias_CSQA.Nocion.total),
                        parseInt(_this.met1.Metodologias_TMap.Nocion.total)
                    ], label: 'Nocion'
                }, {
                    data: [
                        parseInt(_this.met1.Metodologias_ISTQB.Ninguno.total),
                        parseInt(_this.met1.Metodologias_Agile_Testing.Ninguno.total),
                        parseInt(_this.met1.Metodologias_ISEB.Ninguno.total),
                        parseInt(_this.met1.Metodologias_CAST.Ninguno.total),
                        parseInt(_this.met1.Metodologias_CSTE.Ninguno.total),
                        parseInt(_this.met1.Metodologias_CSQA.Ninguno.total),
                        parseInt(_this.met1.Metodologias_TMap.Ninguno.total)
                    ], label: 'Ninguno'
                }
            ];
        }, function (error) {
            console.log(error);
        });
    };
    ReportesComponent.prototype.obtenerMetodologias2 = function () {
        var _this = this;
        this._datos.obtenerMetodologias2().subscribe(function (data) {
            console.log(data);
            _this.idioma = false;
            _this.herramienta1 = false;
            _this.herramienta2 = false;
            _this.herramienta3 = false;
            _this.herramienta4 = false;
            _this.herramienta5 = false;
            _this.lenguaje1 = false;
            _this.lenguaje2 = false;
            _this.lenguaje3 = false;
            _this.lenguaje4 = false;
            _this.lenguaje5 = false;
            _this.lenguaje6 = false;
            _this.solucion = false;
            _this.certificacion1 = false;
            _this.certificacion2 = false;
            _this.certificacion3 = false;
            _this.metodologia1 = false;
            _this.metodologia2 = true;
            _this.met2 = data;
            _this.barChartDataMetodologia = [
                {
                    data: [
                        parseInt(_this.met2.Metodologias_TMMi.Certificado.total),
                        parseInt(_this.met2.Metodologias_CMMI_PPQA_VER_VAL.Certificado.total),
                        parseInt(_this.met2.Metodologias_SCENT.Certificado.total),
                        parseInt(_this.met2.Metodologias_AGEDIS.Certificado.total),
                        parseInt(_this.met2.Metodologias_ITIL_QA.Certificado.total)
                    ], label: 'Certificado'
                },
                {
                    data: [
                        parseInt(_this.met2.Metodologias_TMMi.Curso.total),
                        parseInt(_this.met2.Metodologias_CMMI_PPQA_VER_VAL.Curso.total),
                        parseInt(_this.met2.Metodologias_SCENT.Curso.total),
                        parseInt(_this.met2.Metodologias_AGEDIS.Curso.total),
                        parseInt(_this.met2.Metodologias_ITIL_QA.Curso.total)
                    ], label: 'Curso oficial sin certificacion'
                },
                {
                    data: [
                        parseInt(_this.met2.Metodologias_TMMi.Avanzado.total),
                        parseInt(_this.met2.Metodologias_CMMI_PPQA_VER_VAL.Avanzado.total),
                        parseInt(_this.met2.Metodologias_SCENT.Avanzado.total),
                        parseInt(_this.met2.Metodologias_AGEDIS.Avanzado.total),
                        parseInt(_this.met2.Metodologias_ITIL_QA.Avanzado.total)
                    ], label: 'Avanzado'
                }, {
                    data: [
                        parseInt(_this.met2.Metodologias_TMMi.Intermedio.total),
                        parseInt(_this.met2.Metodologias_CMMI_PPQA_VER_VAL.Intermedio.total),
                        parseInt(_this.met2.Metodologias_SCENT.Intermedio.total),
                        parseInt(_this.met2.Metodologias_AGEDIS.Intermedio.total),
                        parseInt(_this.met2.Metodologias_ITIL_QA.Intermedio.total)
                    ], label: 'Intermedio'
                }, {
                    data: [
                        parseInt(_this.met2.Metodologias_TMMi.Basico.total),
                        parseInt(_this.met2.Metodologias_CMMI_PPQA_VER_VAL.Basico.total),
                        parseInt(_this.met2.Metodologias_SCENT.Basico.total),
                        parseInt(_this.met2.Metodologias_AGEDIS.Basico.total),
                        parseInt(_this.met2.Metodologias_ITIL_QA.Basico.total)
                    ], label: 'Basico'
                }, {
                    data: [
                        parseInt(_this.met2.Metodologias_TMMi.Nocion.total),
                        parseInt(_this.met2.Metodologias_CMMI_PPQA_VER_VAL.Nocion.total),
                        parseInt(_this.met2.Metodologias_SCENT.Nocion.total),
                        parseInt(_this.met2.Metodologias_AGEDIS.Nocion.total),
                        parseInt(_this.met2.Metodologias_ITIL_QA.Nocion.total)
                    ], label: 'Nocion'
                }, {
                    data: [
                        parseInt(_this.met2.Metodologias_TMMi.Ninguno.total),
                        parseInt(_this.met2.Metodologias_CMMI_PPQA_VER_VAL.Ninguno.total),
                        parseInt(_this.met2.Metodologias_SCENT.Ninguno.total),
                        parseInt(_this.met2.Metodologias_AGEDIS.Ninguno.total),
                        parseInt(_this.met2.Metodologias_ITIL_QA.Ninguno.total)
                    ], label: 'Ninguno'
                }
            ];
        }, function (error) {
            console.log(error);
        });
    };
    /* Funciones de la lista de opciones */
    ReportesComponent.prototype.verIdiomas = function () {
        this.obtenerIdiomas();
    };
    ReportesComponent.prototype.descativarOpcionesMenu = function () {
        $("#h1").removeClass("list-group-item-info");
        $("#h2").removeClass("list-group-item-info");
        $("#h3").removeClass("list-group-item-info");
        $("#h4").removeClass("list-group-item-info");
        $("#h5").removeClass("list-group-item-info");
        $("#l1").removeClass("list-group-item-info");
        $("#l2").removeClass("list-group-item-info");
        $("#l3").removeClass("list-group-item-info");
        $("#l4").removeClass("list-group-item-info");
        $("#l5").removeClass("list-group-item-info");
        $("#l6").removeClass("list-group-item-info");
        $("#s").removeClass("list-group-item-info");
        $("#c1").removeClass("list-group-item-info");
        $("#c2").removeClass("list-group-item-info");
        $("#c3").removeClass("list-group-item-info");
        $("#m1").removeClass("list-group-item-info");
        $("#m2").removeClass("list-group-item-info");
    };
    ReportesComponent.prototype.verHerramientas1 = function () {
        this.descativarOpcionesMenu();
        $("#h1").addClass("list-group-item-info");
        this.obtenerHerramientas1();
    };
    ReportesComponent.prototype.verHerramientas2 = function () {
        this.descativarOpcionesMenu();
        $("#h2").addClass("list-group-item-info");
        this.obtenerHerramientas2();
    };
    ReportesComponent.prototype.verHerramientas3 = function () {
        this.descativarOpcionesMenu();
        $("#h3").addClass("list-group-item-info");
        this.obtenerHerramientas3();
    };
    ReportesComponent.prototype.verHerramientas4 = function () {
        this.descativarOpcionesMenu();
        $("#h4").addClass("list-group-item-info");
        this.obtenerHerramientas4();
    };
    ReportesComponent.prototype.verHerramientas5 = function () {
        this.descativarOpcionesMenu();
        $("#h5").addClass("list-group-item-info");
        this.obtenerHerramientas5();
    };
    ReportesComponent.prototype.verLenguajes1 = function () {
        this.descativarOpcionesMenu();
        $("#l1").addClass("list-group-item-info");
        this.obtenerLenguajes1();
    };
    ReportesComponent.prototype.verLenguajes2 = function () {
        this.descativarOpcionesMenu();
        $("#l2").addClass("list-group-item-info");
        this.obtenerLenguajes2();
    };
    ReportesComponent.prototype.verLenguajes3 = function () {
        this.descativarOpcionesMenu();
        $("#l3").addClass("list-group-item-info");
        this.obtenerLenguajes3();
    };
    ReportesComponent.prototype.verLenguajes4 = function () {
        this.descativarOpcionesMenu();
        $("#l4").addClass("list-group-item-info");
        this.obtenerLenguajes4();
    };
    ReportesComponent.prototype.verLenguajes5 = function () {
        this.descativarOpcionesMenu();
        $("#l5").addClass("list-group-item-info");
        this.obtenerLenguajes5();
    };
    ReportesComponent.prototype.verLenguajes6 = function () {
        this.descativarOpcionesMenu();
        $("#l6").addClass("list-group-item-info");
        this.obtenerLenguajes6();
    };
    ReportesComponent.prototype.verSoluciones = function () {
        this.descativarOpcionesMenu();
        $("#s").addClass("list-group-item-info");
        this.obtenerSoluciones();
    };
    ReportesComponent.prototype.verCertificaciones1 = function () {
        this.descativarOpcionesMenu();
        $("#c1").addClass("list-group-item-info");
        this.obtenerCertificaciones1();
    };
    ReportesComponent.prototype.verCertificaciones2 = function () {
        this.descativarOpcionesMenu();
        $("#c2").addClass("list-group-item-info");
        this.obtenerCertificaciones2();
    };
    ReportesComponent.prototype.verCertificaciones3 = function () {
        this.descativarOpcionesMenu();
        $("#c3").addClass("list-group-item-info");
        this.obtenerCertificaciones3();
    };
    ReportesComponent.prototype.verMetodologias1 = function () {
        this.descativarOpcionesMenu();
        $("#m1").addClass("list-group-item-info");
        this.obtenerMetodologias1();
    };
    ReportesComponent.prototype.verMetodologias2 = function () {
        this.descativarOpcionesMenu();
        $("#m2").addClass("list-group-item-info");
        this.obtenerMetodologias2();
    };
    ReportesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reportes',
            template: __webpack_require__(831),
            styles: [__webpack_require__(829)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_datos_service__["a" /* DatosService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__servicios_datos_service__["a" /* DatosService */]) === 'function' && _a) || Object])
    ], ReportesComponent);
    return ReportesComponent;
    var _a;
}());
//# sourceMappingURL=/var/www/html/reportes-qualtop/src/reportes.component.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DatosService = (function () {
    function DatosService(__http) {
        this.__http = __http;
        this.url = 'http://localhost/reportes-qualtop/api/';
    }
    DatosService.prototype.obtenerDatos = function (dato) {
        var params = { op: 'obtenerDatos', dato: dato };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.__http.post(this.url + 'datos.php', params)
            .map(function (res) { return res.json(); });
    };
    DatosService.prototype.obtenerIdiomas = function () {
        var params = { op: 'obtenerIdiomas' };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.__http.post(this.url + 'datos.php', params)
            .map(function (res) { return res.json(); });
    };
    DatosService.prototype.obtenerHerramientas1 = function () {
        var params = { op: 'obtenerHerramientas1' };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.__http.post(this.url + 'datos.php', params)
            .map(function (res) { return res.json(); });
    };
    DatosService.prototype.obtenerHerramientas2 = function () {
        var params = { op: 'obtenerHerramientas2' };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.__http.post(this.url + 'datos.php', params)
            .map(function (res) { return res.json(); });
    };
    DatosService.prototype.obtenerHerramientas3 = function () {
        var params = { op: 'obtenerHerramientas3' };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.__http.post(this.url + 'datos.php', params)
            .map(function (res) { return res.json(); });
    };
    DatosService.prototype.obtenerHerramientas4 = function () {
        var params = { op: 'obtenerHerramientas4' };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.__http.post(this.url + 'datos.php', params)
            .map(function (res) { return res.json(); });
    };
    DatosService.prototype.obtenerHerramientas5 = function () {
        var params = { op: 'obtenerHerramientas5' };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.__http.post(this.url + 'datos.php', params)
            .map(function (res) { return res.json(); });
    };
    DatosService.prototype.obtenerLenguajes1 = function () {
        var params = { op: 'obtenerLenguajes1' };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.__http.post(this.url + 'datos.php', params)
            .map(function (res) { return res.json(); });
    };
    DatosService.prototype.obtenerLenguajes2 = function () {
        var params = { op: 'obtenerLenguajes2' };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.__http.post(this.url + 'datos.php', params)
            .map(function (res) { return res.json(); });
    };
    DatosService.prototype.obtenerLenguajes3 = function () {
        var params = { op: 'obtenerLenguajes3' };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.__http.post(this.url + 'datos.php', params)
            .map(function (res) { return res.json(); });
    };
    DatosService.prototype.obtenerLenguajes4 = function () {
        var params = { op: 'obtenerLenguajes4' };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.__http.post(this.url + 'datos.php', params)
            .map(function (res) { return res.json(); });
    };
    DatosService.prototype.obtenerLenguajes5 = function () {
        var params = { op: 'obtenerLenguajes5' };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.__http.post(this.url + 'datos.php', params)
            .map(function (res) { return res.json(); });
    };
    DatosService.prototype.obtenerLenguajes6 = function () {
        var params = { op: 'obtenerLenguajes6' };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.__http.post(this.url + 'datos.php', params)
            .map(function (res) { return res.json(); });
    };
    DatosService.prototype.obtenerSoluciones = function () {
        var params = { op: 'obtenerSoluciones' };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.__http.post(this.url + 'datos.php', params)
            .map(function (res) { return res.json(); });
    };
    DatosService.prototype.obtenerCertificaciones1 = function () {
        var params = { op: 'obtenerCertificaciones1' };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.__http.post(this.url + 'datos.php', params)
            .map(function (res) { return res.json(); });
    };
    DatosService.prototype.obtenerCertificaciones2 = function () {
        var params = { op: 'obtenerCertificaciones2' };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.__http.post(this.url + 'datos.php', params)
            .map(function (res) { return res.json(); });
    };
    DatosService.prototype.obtenerCertificaciones3 = function () {
        var params = { op: 'obtenerCertificaciones3' };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.__http.post(this.url + 'datos.php', params)
            .map(function (res) { return res.json(); });
    };
    DatosService.prototype.obtenerMetodologias1 = function () {
        var params = { op: 'obtenerMetodologias1' };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.__http.post(this.url + 'datos.php', params)
            .map(function (res) { return res.json(); });
    };
    DatosService.prototype.obtenerMetodologias2 = function () {
        var params = { op: 'obtenerMetodologias2' };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.__http.post(this.url + 'datos.php', params)
            .map(function (res) { return res.json(); });
    };
    DatosService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], DatosService);
    return DatosService;
    var _a;
}());
//# sourceMappingURL=/var/www/html/reportes-qualtop/src/datos.service.js.map

/***/ }),

/***/ 502:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 502;


/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(623);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/var/www/html/reportes-qualtop/src/main.js.map

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reportes_reportes_component__ = __webpack_require__(330);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var routes = [
    { path: '', redirectTo: '/reportes', pathMatch: 'full' },
    { path: 'reportes', component: __WEBPACK_IMPORTED_MODULE_2__reportes_reportes_component__["a" /* ReportesComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/var/www/html/reportes-qualtop/src/app-routing.module.js.map

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(830),
            styles: [__webpack_require__(828)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/var/www/html/reportes-qualtop/src/app.component.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reportes_reportes_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__servicios_datos_service__ = __webpack_require__(331);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__reportes_reportes_component__["a" /* ReportesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_charts__["ChartsModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__servicios_datos_service__["a" /* DatosService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/var/www/html/reportes-qualtop/src/app.module.js.map

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/var/www/html/reportes-qualtop/src/environment.js.map

/***/ }),

/***/ 824:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 370,
	"./af.js": 370,
	"./ar": 377,
	"./ar-dz": 371,
	"./ar-dz.js": 371,
	"./ar-kw": 372,
	"./ar-kw.js": 372,
	"./ar-ly": 373,
	"./ar-ly.js": 373,
	"./ar-ma": 374,
	"./ar-ma.js": 374,
	"./ar-sa": 375,
	"./ar-sa.js": 375,
	"./ar-tn": 376,
	"./ar-tn.js": 376,
	"./ar.js": 377,
	"./az": 378,
	"./az.js": 378,
	"./be": 379,
	"./be.js": 379,
	"./bg": 380,
	"./bg.js": 380,
	"./bn": 381,
	"./bn.js": 381,
	"./bo": 382,
	"./bo.js": 382,
	"./br": 383,
	"./br.js": 383,
	"./bs": 384,
	"./bs.js": 384,
	"./ca": 385,
	"./ca.js": 385,
	"./cs": 386,
	"./cs.js": 386,
	"./cv": 387,
	"./cv.js": 387,
	"./cy": 388,
	"./cy.js": 388,
	"./da": 389,
	"./da.js": 389,
	"./de": 392,
	"./de-at": 390,
	"./de-at.js": 390,
	"./de-ch": 391,
	"./de-ch.js": 391,
	"./de.js": 392,
	"./dv": 393,
	"./dv.js": 393,
	"./el": 394,
	"./el.js": 394,
	"./en-au": 395,
	"./en-au.js": 395,
	"./en-ca": 396,
	"./en-ca.js": 396,
	"./en-gb": 397,
	"./en-gb.js": 397,
	"./en-ie": 398,
	"./en-ie.js": 398,
	"./en-nz": 399,
	"./en-nz.js": 399,
	"./eo": 400,
	"./eo.js": 400,
	"./es": 402,
	"./es-do": 401,
	"./es-do.js": 401,
	"./es.js": 402,
	"./et": 403,
	"./et.js": 403,
	"./eu": 404,
	"./eu.js": 404,
	"./fa": 405,
	"./fa.js": 405,
	"./fi": 406,
	"./fi.js": 406,
	"./fo": 407,
	"./fo.js": 407,
	"./fr": 410,
	"./fr-ca": 408,
	"./fr-ca.js": 408,
	"./fr-ch": 409,
	"./fr-ch.js": 409,
	"./fr.js": 410,
	"./fy": 411,
	"./fy.js": 411,
	"./gd": 412,
	"./gd.js": 412,
	"./gl": 413,
	"./gl.js": 413,
	"./gom-latn": 414,
	"./gom-latn.js": 414,
	"./he": 415,
	"./he.js": 415,
	"./hi": 416,
	"./hi.js": 416,
	"./hr": 417,
	"./hr.js": 417,
	"./hu": 418,
	"./hu.js": 418,
	"./hy-am": 419,
	"./hy-am.js": 419,
	"./id": 420,
	"./id.js": 420,
	"./is": 421,
	"./is.js": 421,
	"./it": 422,
	"./it.js": 422,
	"./ja": 423,
	"./ja.js": 423,
	"./jv": 424,
	"./jv.js": 424,
	"./ka": 425,
	"./ka.js": 425,
	"./kk": 426,
	"./kk.js": 426,
	"./km": 427,
	"./km.js": 427,
	"./kn": 428,
	"./kn.js": 428,
	"./ko": 429,
	"./ko.js": 429,
	"./ky": 430,
	"./ky.js": 430,
	"./lb": 431,
	"./lb.js": 431,
	"./lo": 432,
	"./lo.js": 432,
	"./lt": 433,
	"./lt.js": 433,
	"./lv": 434,
	"./lv.js": 434,
	"./me": 435,
	"./me.js": 435,
	"./mi": 436,
	"./mi.js": 436,
	"./mk": 437,
	"./mk.js": 437,
	"./ml": 438,
	"./ml.js": 438,
	"./mr": 439,
	"./mr.js": 439,
	"./ms": 441,
	"./ms-my": 440,
	"./ms-my.js": 440,
	"./ms.js": 441,
	"./my": 442,
	"./my.js": 442,
	"./nb": 443,
	"./nb.js": 443,
	"./ne": 444,
	"./ne.js": 444,
	"./nl": 446,
	"./nl-be": 445,
	"./nl-be.js": 445,
	"./nl.js": 446,
	"./nn": 447,
	"./nn.js": 447,
	"./pa-in": 448,
	"./pa-in.js": 448,
	"./pl": 449,
	"./pl.js": 449,
	"./pt": 451,
	"./pt-br": 450,
	"./pt-br.js": 450,
	"./pt.js": 451,
	"./ro": 452,
	"./ro.js": 452,
	"./ru": 453,
	"./ru.js": 453,
	"./sd": 454,
	"./sd.js": 454,
	"./se": 455,
	"./se.js": 455,
	"./si": 456,
	"./si.js": 456,
	"./sk": 457,
	"./sk.js": 457,
	"./sl": 458,
	"./sl.js": 458,
	"./sq": 459,
	"./sq.js": 459,
	"./sr": 461,
	"./sr-cyrl": 460,
	"./sr-cyrl.js": 460,
	"./sr.js": 461,
	"./ss": 462,
	"./ss.js": 462,
	"./sv": 463,
	"./sv.js": 463,
	"./sw": 464,
	"./sw.js": 464,
	"./ta": 465,
	"./ta.js": 465,
	"./te": 466,
	"./te.js": 466,
	"./tet": 467,
	"./tet.js": 467,
	"./th": 468,
	"./th.js": 468,
	"./tl-ph": 469,
	"./tl-ph.js": 469,
	"./tlh": 470,
	"./tlh.js": 470,
	"./tr": 471,
	"./tr.js": 471,
	"./tzl": 472,
	"./tzl.js": 472,
	"./tzm": 474,
	"./tzm-latn": 473,
	"./tzm-latn.js": 473,
	"./tzm.js": 474,
	"./uk": 475,
	"./uk.js": 475,
	"./ur": 476,
	"./ur.js": 476,
	"./uz": 478,
	"./uz-latn": 477,
	"./uz-latn.js": 477,
	"./uz.js": 478,
	"./vi": 479,
	"./vi.js": 479,
	"./x-pseudo": 480,
	"./x-pseudo.js": 480,
	"./yo": 481,
	"./yo.js": 481,
	"./zh-cn": 482,
	"./zh-cn.js": 482,
	"./zh-hk": 483,
	"./zh-hk.js": 483,
	"./zh-tw": 484,
	"./zh-tw.js": 484
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 824;


/***/ }),

/***/ 828:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

module.exports = ".lista {\n  width: 220px;\n  height: 592px;\n  overflow-y: auto;\n}\n\ntable {\n  width: 100%;\n}\n\nthead, tbody, tr, td, th { \n  display: block; \n}\n\ntr:after {\n  content: ' ';\n  display: block;\n  visibility: hidden;\n  clear: both;\n}\n\nthead th {\n  height: 40px;\n  /*text-align: left;*/\n}\n\ntbody {\n  height: 320px;\n  overflow-y: auto;\n}\n\nthead {\n    /* fallback */\n}\n\ntbody td, thead th {\n  width: 50%;\n  float: left;\n}"

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"col-md-2 menu\">\n    <h4>Lista de categorías</h4>\n    <div class=\"list-group lista\">\n      <!-- <a href=\"#\" class=\"list-group-item\" (click)=\"verIdiomas()\">Idiomas</a> -->\n      <a id=\"h1\" href=\"#\" class=\"list-group-item\" (click)=\"verHerramientas1()\">1 Herramientas de trabajo</a>\n      <a id=\"h2\" href=\"#\" class=\"list-group-item\" (click)=\"verHerramientas2()\">2 Herramientas de trabajo</a>\n      <a id=\"h3\" href=\"#\" class=\"list-group-item\" (click)=\"verHerramientas3()\">3 Herramientas de trabajo</a>\n      <a id=\"h4\" href=\"#\" class=\"list-group-item\" (click)=\"verHerramientas4()\">4 Herramientas de trabajo</a>\n      <a id=\"h5\" href=\"#\" class=\"list-group-item\" (click)=\"verHerramientas5()\">5 Herramientas de trabajo</a>\n      <a id=\"l1\" href=\"#\" class=\"list-group-item\" (click)=\"verLenguajes1()\">1 Leng. de programación</a>\n      <a id=\"l2\" href=\"#\" class=\"list-group-item\" (click)=\"verLenguajes2()\">2 Leng. de programación</a>\n      <a id=\"l3\" href=\"#\" class=\"list-group-item\" (click)=\"verLenguajes3()\">3 Leng. de programación</a>\n      <a id=\"l4\" href=\"#\" class=\"list-group-item\" (click)=\"verLenguajes4()\">4 Leng. de programación</a>\n      <a id=\"l5\" href=\"#\" class=\"list-group-item\" (click)=\"verLenguajes5()\">5 Leng. de programación</a>\n      <a id=\"l6\" href=\"#\" class=\"list-group-item\" (click)=\"verLenguajes6()\">6 Leng. de programación</a>\n      <a id=\"s\" href=\"#\" class=\"list-group-item\" (click)=\"verSoluciones()\">Soluciones en la nube</a>\n      <a id=\"c1\" href=\"#\" class=\"list-group-item\" (click)=\"verCertificaciones1()\">1 Certificaciones</a>\n      <a id=\"c2\" href=\"#\" class=\"list-group-item\" (click)=\"verCertificaciones2()\">2 Certificaciones</a>\n      <a id=\"c3\" href=\"#\" class=\"list-group-item\" (click)=\"verCertificaciones3()\">3 Certificaciones</a>\n      <a id=\"m1\" href=\"#\" class=\"list-group-item\" (click)=\"verMetodologias1()\">1 Metodologías</a>\n      <a id=\"m2\" href=\"#\" class=\"list-group-item\" (click)=\"verMetodologias2()\">2 Metodologías</a>\n    </div>\n  </div>\n\n  <div class=\"col-md-10\">\n\n    <div [hidden]=\"!metodologia1\">\n      <canvas height=\"90px\" baseChart\n              [datasets]=\"barChartDataCertificacion1\"\n              [labels]=\"barChartLabelsMetodologia1\"\n              [options]=\"barChartOptions\"\n              [chartType]=\"barChartType\"\n              (chartClick)=\"verDatosMetodologias($event)\"></canvas>\n    </div>\n\n    <div [hidden]=\"!metodologia2\">\n      <canvas height=\"90px\" baseChart\n              [datasets]=\"barChartDataMetodologia\"\n              [labels]=\"barChartLabelsMetodologia2\"\n              [options]=\"barChartOptions\"\n              [chartType]=\"barChartType\"\n              (chartClick)=\"verDatosMetodologias($event)\"></canvas>\n    </div>\n\n    <div [hidden]=\"!certificacion1\">\n      <canvas height=\"90px\" baseChart\n              [datasets]=\"barChartDataCertificacion1\"\n              [labels]=\"barChartLabelsCertificacion1\"\n              [options]=\"barChartOptions\"\n              [chartType]=\"barChartType\"\n              (chartClick)=\"verDatos($event)\"></canvas>\n    </div>\n\n    <div [hidden]=\"!certificacion2\">\n      <canvas height=\"90px\" baseChart\n              [datasets]=\"barChartDataCertificacion1\"\n              [labels]=\"barChartLabelsCertificacion2\"\n              [options]=\"barChartOptions\"\n              [chartType]=\"barChartType\"\n              (chartClick)=\"verDatos($event)\"></canvas>\n    </div>\n\n    <div [hidden]=\"!certificacion3\">\n      <canvas height=\"90px\" baseChart\n              [datasets]=\"barChartDataCertificacion1\"\n              [labels]=\"barChartLabelsCertificacion3\"\n              [options]=\"barChartOptions\"\n              [chartType]=\"barChartType\"\n              (chartClick)=\"verDatos($event)\"></canvas>\n    </div>\n\n    <div [hidden]=\"!idioma\">\n      <canvas height=\"90px\" baseChart\n              [datasets]=\"barChartDataIdioma\"\n              [labels]=\"barChartLabelsIdioma\"\n              [options]=\"barChartOptions\"\n              [chartType]=\"barChartType\"\n              (chartClick)=\"verDatos($event)\"></canvas>\n    </div>\n\n    <div [hidden]=\"!solucion\">\n      <canvas height=\"90px\" baseChart\n              [datasets]=\"barChartDataSolucion\"\n              [labels]=\"barChartLabelsSolucion\"\n              [options]=\"barChartOptions\"\n              [chartType]=\"barChartType\"\n              (chartClick)=\"verDatosSoluciones($event)\"></canvas>\n    </div>\n\n    <div [hidden]=\"!lenguaje1\">\n      <canvas height=\"90px\" baseChart\n              [datasets]=\"barChartDataHerramienta\"\n              [labels]=\"barChartLabelsLenguaje1\"\n              [options]=\"barChartOptions\"\n              [chartType]=\"barChartType\"\n              (chartClick)=\"verDatos($event)\"></canvas>\n    </div>\n\n    <div [hidden]=\"!lenguaje2\">\n      <canvas height=\"90px\" baseChart\n              [datasets]=\"barChartDataHerramienta\"\n              [labels]=\"barChartLabelsLenguaje2\"\n              [options]=\"barChartOptions\"\n              [chartType]=\"barChartType\"\n              (chartClick)=\"verDatos($event)\"></canvas>\n    </div>\n\n    <div [hidden]=\"!lenguaje3\">\n      <canvas height=\"90px\" baseChart\n              [datasets]=\"barChartDataHerramienta\"\n              [labels]=\"barChartLabelsLenguaje3\"\n              [options]=\"barChartOptions\"\n              [chartType]=\"barChartType\"\n              (chartClick)=\"verDatos($event)\"></canvas>\n    </div>\n\n    <div [hidden]=\"!lenguaje4\">\n      <canvas height=\"90px\" baseChart\n              [datasets]=\"barChartDataHerramienta\"\n              [labels]=\"barChartLabelsLenguaje4\"\n              [options]=\"barChartOptions\"\n              [chartType]=\"barChartType\"\n              (chartClick)=\"verDatos($event)\"></canvas>\n    </div>\n\n    <div [hidden]=\"!lenguaje5\">\n      <canvas height=\"90px\" baseChart\n              [datasets]=\"barChartDataHerramienta\"\n              [labels]=\"barChartLabelsLenguaje5\"\n              [options]=\"barChartOptions\"\n              [chartType]=\"barChartType\"\n              (chartClick)=\"verDatos($event)\"></canvas>\n    </div>\n\n    <div [hidden]=\"!lenguaje6\">\n      <canvas height=\"90px\" baseChart\n              [datasets]=\"barChartDataHerramienta6\"\n              [labels]=\"barChartLabelsLenguaje6\"\n              [options]=\"barChartOptions\"\n              [chartType]=\"barChartType\"\n              (chartHover)=\"chartHovered($event)\"\n              (chartClick)=\"verDatos($event)\"></canvas>\n    </div>\n\n    <div [hidden]=\"!herramienta1\">\n      <canvas height=\"90px\" baseChart\n              [datasets]=\"barChartDataHerramienta\"\n              [labels]=\"barChartLabelsHerramienta\"\n              [options]=\"barChartOptions\"\n              [chartType]=\"barChartType\"\n              (chartClick)=\"verDatosHerramienta($event)\"></canvas>\n    </div>\n\n    <div [hidden]=\"!herramienta2\">\n      <canvas height=\"90px\" baseChart\n              [datasets]=\"barChartDataHerramienta\"\n              [labels]=\"barChartLabelsHerramienta2\"\n              [options]=\"barChartOptions\"\n              [chartType]=\"barChartType\"\n              (chartClick)=\"verDatosHerramienta($event)\"></canvas>\n    </div>\n\n    <div [hidden]=\"!herramienta3\">\n      <canvas height=\"90px\" baseChart\n              [datasets]=\"barChartDataHerramienta\"\n              [labels]=\"barChartLabelsHerramienta3\"\n              [options]=\"barChartOptions\"\n              [chartType]=\"barChartType\"\n              (chartClick)=\"verDatosHerramienta($event)\"></canvas>\n    </div>\n\n    <div [hidden]=\"!herramienta4\">\n      <canvas height=\"90px\" baseChart\n              [datasets]=\"barChartDataHerramienta\"\n              [labels]=\"barChartLabelsHerramienta4\"\n              [options]=\"barChartOptions\"\n              [chartType]=\"barChartType\"\n              (chartClick)=\"verDatosHerramienta($event)\"></canvas>\n    </div>\n\n    <div [hidden]=\"!herramienta5\">\n      <canvas height=\"90px\" baseChart\n              [datasets]=\"barChartDataHerramienta5\"\n              [labels]=\"barChartLabelsHerramienta5\"\n              [options]=\"barChartOptions\"\n              [chartType]=\"barChartType\"\n              (chartClick)=\"verDatosHerramienta($event)\"></canvas>\n    </div>\n\n    <hr>\n\n    <h3>{{tipo}}</h3>\n\n    <ul *ngIf=\"seleccionado\" class=\"nav nav-tabs nav-justified\">\n      <li id=\"certificadoMenu\" (click)=\"verLista('certificado')\" class=\"active\"><a href=\"#\">Certificado</a></li>\n      <li id=\"cursoMenu\" (click)=\"verLista('curso')\" class=\"\"><a href=\"#\">Curso sin certificación</a></li>\n      <li id=\"avanzadoMenu\" (click)=\"verLista('avanzado')\" class=\"\"><a href=\"#\">Avanzado</a></li>\n      <li id=\"intermedioMenu\" (click)=\"verLista('intermedio')\" class=\"\"><a href=\"#\">Intermedio</a></li>\n      <li id=\"basicoMenu\" (click)=\"verLista('basico')\" class=\"\"><a href=\"#\">Básico</a></li>\n      <li id=\"nocionMenu\" (click)=\"verLista('nocion')\" class=\"\"><a href=\"#\">Noción</a></li>\n      <li id=\"ningunoMenu\" (click)=\"verLista('ninguno')\" class=\"\"><a href=\"#\">Ninguno</a></li>\n    </ul>\n\n    <div id=\"certificado\" *ngIf=\"certificado\">\n      <h4 class=\"text-primary\">Certificado</h4>\n      <div class=\"tab-pane fade in active\" *ngIf=\"personas.Certificado\">\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th>Nombre completo</th>\n              <th>Cargo actual</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let persona of personas.Certificado\">\n              <td>{{persona.Nombre}}</td>\n              <td>{{persona.Cargo_actual}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div *ngIf=\"!personas.Certificado\">\n        <div class=\"alert alert-danger\" role=\"alert\">No hay personas para mostrar</div>\n      </div>\n    </div>\n\n    <div id=\"curso\" *ngIf=\"curso\">\n      <h4 class=\"text-primary\">Curso sin certificación</h4>\n      <div class=\"tab-pane fade in active\" *ngIf=\"personas.Curso\">\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th>Nombre completo</th>\n              <th>Cargo actual</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let persona of personas.Curso\">\n              <td>{{persona.Nombre}}</td>\n              <td>{{persona.Cargo_actual}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div *ngIf=\"!personas.Curso\">\n        <div class=\"alert alert-danger\" role=\"alert\">No hay personas para mostrar</div>\n      </div>\n    </div>\n\n    <div id=\"avanzado\" *ngIf=\"avanzado\">\n      <h4 class=\"text-primary\">Avanzado</h4>\n      <div  class=\"tab-pane fade in active\" *ngIf=\"personas.Avanzado\">\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th>Nombre completo</th>\n              <th>Cargo actual</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let persona of personas.Avanzado\">\n              <td>{{persona.Nombre}}</td>\n              <td>{{persona.Cargo_actual}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div *ngIf=\"!personas.Avanzado\">\n        <div class=\"alert alert-danger\" role=\"alert\">No hay personas para mostrar</div>\n      </div>\n    </div>\n\n    <div id=\"intermedio\" *ngIf=\"intermedio\">\n      <h4 class=\"text-primary\">Intermedio</h4>\n      <div class=\"tab-pane fade in active\" *ngIf=\"personas.Intermedio\">\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th>Nombre completo</th>\n              <th>Cargo actual</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let persona of personas.Intermedio\">\n              <td>{{persona.Nombre}}</td>\n              <td>{{persona.Cargo_actual}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div *ngIf=\"!personas.Intermedio\">\n        <div class=\"alert alert-danger\" role=\"alert\">No hay personas para mostrar</div>\n      </div>\n    </div>\n\n    <div id=\"basico\" *ngIf=\"basico\">\n      <h4 class=\"text-primary\">Básico</h4>\n      <div class=\"tab-pane fade in active\" *ngIf=\"personas.Basico\">\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th>Nombre completo</th>\n              <th>Cargo actual</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let persona of personas.Basico\">\n              <td>{{persona.Nombre}}</td>\n              <td>{{persona.Cargo_actual}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div *ngIf=\"!personas.Basico\">\n        <div class=\"alert alert-danger\" role=\"alert\">No hay personas para mostrar</div>\n      </div>\n    </div>\n\n    <div id=\"nocion\" *ngIf=\"nocion\">\n      <h4 class=\"text-primary\">Noción</h4>\n      <div class=\"tab-pane fade in active\" *ngIf=\"personas.Nocion\">\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th>Nombre completo</th>\n              <th>Cargo actual</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let persona of personas.Nocion\">\n              <td>{{persona.Nombre}}</td>\n              <td>{{persona.Cargo_actual}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div *ngIf=\"!personas.Nocion\">\n        <div class=\"alert alert-danger\" role=\"alert\">No hay personas para mostrar</div>\n      </div>\n    </div>\n\n    <div id=\"ninguno\" *ngIf=\"ninguno\">\n      <h4 class=\"text-primary\">Ninguno</h4>\n      <div class=\"tab-pane fade in active\" *ngIf=\"personas.Ninguno\">\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th>Nombre completo</th>\n              <th>Cargo actual</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let persona of personas.Ninguno\">\n              <td>{{persona.Nombre}}</td>\n              <td>{{persona.Cargo_actual}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div *ngIf=\"!personas.Ninguno\">\n        <div class=\"alert alert-danger\" role=\"alert\">No hay personas para mostrar</div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 851:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(503);


/***/ })

},[851]);
//# sourceMappingURL=main.bundle.map