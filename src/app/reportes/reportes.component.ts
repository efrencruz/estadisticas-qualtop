import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';
declare var $: any;

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})

export class ReportesComponent implements OnInit {
  
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartOptions:any = { scaleShowVerticalLines: true, responsive: true };

  public certificado:boolean = false;
  public curso:boolean = false;
  public avanzado:boolean = false;
  public intermedio:boolean = false;
  public basico:boolean = false;
  public nocion:boolean = false;
  public ninguno:boolean = false;

  public seleccionado:boolean = false;
  public tipo:string = "";
  public cargando:boolean = true;

  public solucion:boolean = false;
  public idioma:boolean = true;
  public metodologia1:boolean = false;
  public metodologia2:boolean = false;
  public certificacion1:boolean = false;
  public certificacion2:boolean = false;
  public certificacion3:boolean = false;
  public lenguaje1:boolean = false;
  public lenguaje2:boolean = false;
  public lenguaje3:boolean = false;
  public lenguaje4:boolean = false;
  public lenguaje5:boolean = false;
  public lenguaje6:boolean = false;
  public herramienta1:boolean = false;
  public herramienta2:boolean = false;
  public herramienta3:boolean = false;
  public herramienta4:boolean = false;
  public herramienta5:boolean = false;
  public herramienta6:boolean = false;
  public herramienta7:boolean = false;
  public herramienta8:boolean = false;
  public herramienta9:boolean = false;
  public herramienta10:boolean = false;
  public herramienta11:boolean = false;
  public herramienta12:boolean = false;
  public herramienta13:boolean = false;
  public herramienta14:boolean = false;

  public personas:any = {};
  public res: any = {};

  public barChartLabelsIdioma:string[] = ['Ingles', 'Frances', 'Italiano'];
  public nivel_label:any = ["Certificado","Curso","Avanzado","Intermedio","Basico","Nocion","Ninguno"];

  public barChartDataIdioma:any[] = [
    {
      data:[0,0,0],label:"A"
    },{
      data:[0,0,0],label:"B"
    },{
      data:[0,0,0],label:"C"
    },{
      data:[0,0,0],label:"D"
    }
  ];


  public barChartData:any[] = [
    {
      data:[0,0,0,0,0,0,0],label:"A"
    },{
      data:[0,0,0,0,0,0,0],label:"B"
    },{
      data:[0,0,0,0,0,0,0],label:"C"
    },{
      data:[0,0,0,0,0,0,0],label:"D"
    },{
      data:[0,0,0,0,0,0,0],label:"E"
    },{
      data:[0,0,0,0,0,0,0],label:"F"
    },{
      data:[0,0,0,0,0,0,0],label:"G"
    }
  ];


  public barChartLabelsMetodologia1:string[] = [
    'ISTQB', 'Agile Testing', 'ISEB', 
    'CAST', 'CSTE', 'CSQA', 'TMap'
  ];

  public barChartLabelsMetodologia2:string[] = [
    'TMMi', 'CMMI PPQA:VER&VAL',
    'SCENT', 'AGEDIS',	'ITIL QA'
  ];

  public barChartLabelsCertificacion1:string[] = [
    'Scrum Master',	'Scrum Team Member', 'Scrum Product Owner', 
    'ITIL Fundamentos',	'ITIL Intermedio', 'ITIL Expert', 'Six Sigma Black Belt'
  ];

  public barChartLabelsCertificacion2:string[] = [
    'PMP', 'ISTQB', 'CMMI Oficial', 
    'Oracle Certified Profesional Java SE', 'ISO 27000', 
    'ISO 20000', 'COBIT'
  ];

  public barChartLabelsCertificacion3:string[] = [
    'CRISC','GRCP', 'ISO 9000', 
    'Prince', 'COSO', 'SOX', 'BPM'
  ];

  public barChartLabelsSolucion:string[] = [
    'Amazon', 'Azure'
  ];

  public barChartLabelsLenguaje1:string[] = [
    'Java', 'C++', 
    'PHP', 'iOS',
    'C#','Ruby',
    'SQL'
  ];

  public barChartLabelsLenguaje2:string[] = [
    'Android', 'ASP.NET', 
    'HTML', 'Java Script',
    'Visual Basic','Phyton',
    'SAP ABAP'
  ];

  public barChartLabelsLenguaje3:string[] = [
    'Oracle', 'MySQL', 
    'Postgre', 'JSF 2.0',
    'Big Data', 'Hadoop',
    'SPARK'
  ];

  public barChartLabelsLenguaje4:string[] = [
    'Google Maps', 
    'MapReduce', 'Tomcat',
    'Weblogic','ISS',
    'BlockChain', 'Wordpress'
  ];				

  public barChartLabelsLenguaje5:string[] = [
    'Joomla', 
    'Sharepoint', 'Hybernate',
    'Angular','Ember',
    'JSON','IONIC'
  ];  

  public barChartLabelsHerramienta14:string[] = [
    'NeoLoad', 'WebLOAD Professional', 'Forecast',
    'ANTIS Advanced NET Testing System', 'Webserver Stress Tool', 'Load Impact'
  ];

  public barChartLabelsHerramienta13:string[] = [
    'QA Wizard', 'Squish', 'vTest',
    'Internet Macros', 'Testdroid', 'HP LoadRunner',
    'LoadStorm'
  ];

  public barChartLabelsHerramienta12:string[] = [
    'TestRail', 'QuickTest Pro', 'SeeTest',
    'Rational Robot', 'Sahi', 'SoapTest',
    'Test Complete'
  ];

  public barChartLabelsHerramienta11:string[] = [
    'SMARTS', 'QAS Test Case Studio', 'PractiTest',
    'SpiraTest', 'TestLog', 'ApTest Manager',
    'Zephyr'
  ];

  public barChartLabelsHerramienta10:string[] = [
    'FunkLoad', 'FWPTT load testing', 'LoadUI',
    'JMeter', 'HP Quality Center ALM', 'QA Complete',
    'T Plan Professional'
  ];

  public barChartLabelsHerramienta9:string[] = [
    'Canoo WebTest', 'Solex', 'Imprimatur',
    'SAMIE', 'ITP', 'WET',
    'Weblnject'
  ];

  public barChartLabelsHerramienta8:string[] = [
    'Selenium', 'Apium', 'Selendroid',
    'Soapui', 'Watir Ruby', 'Watin Net',
    'Capedit'
  ];

  public barChartLabelsHerramienta7:string[] = [
    'Test Environment Toolkit', 'TestLink', 'Testitool',
    'XQual Studio', 'Radi testdir', 'Data Generator',
    'Mantis'
  ];

  public barChartLabelsHerramienta6:string[] = [
    'Bugzila Testopia', 'FitNesse', 'qaManager',
    'qaBook', 'RTH open source', 'Salome tmf',
    'Squash TM'
  ];
    					
  public barChartLabelsHerramienta5:string[] = [
    'Microsoft Project', 'Excel', 
    'Power Point', 'Word'
  ];

  public barChartLabelsHerramienta4:string[] = [
    'Dreamweaver', 'Net Beans', 
    'Eclipse', 'ABAP Workbech',
    'ARIS','Opera',
    'Bizagi'
  ];

  public barChartLabelsHerramienta3:string[] = [
    'SQL Server', 'Sublime text', 
    'Skype', 'Team Viewer',
    'GoTo Meeting','HipChat',
    'Appraisal Assistant'
  ];

  public barChartLabelsHerramienta2:string[] = [
    'Android Studio', 'Balsamiq Mockps', 
    'Bitbucket', 'Visio',
    'PhotoShop','Ilustrator',
    'Microsoft Project'
  ];

  public barChartLabelsHerramienta:string[] = [
    'Microsoft Office', 'JIRA', 
    'Confluence', 'Visual Studio',
    'Bamboo','JIRA Portafolio',
    'ALM HP'
  ];

  public barChartLabelsLenguaje6:string[] = [
    'SPRING', 'Google AD Words', 'Google Analitics' 
  ];

  constructor(
    private _datos: DatosService,
  ) { }

  ngOnInit() {
    this.obtenerHerramientas1();
  }

  public verDatos(e:any):void {
    if(e.active.length > 0){
      this.tipo = e.active[0]._model.label;
      let lista = this.tipo;
        if(lista == "C++"){ lista = "C_plus_plus"; }
        if(lista == "C#"){ lista = "C_Sharp"; }
        if(lista == "SQL"){ lista = "SQL_1"; }
        if(lista == "ASP.NET"){ lista = "ASP_NET"; }
        if(lista == "JSF 2.0"){ lista = "JSF_2_0"; }

      lista = lista.split(" ").join("_");
      this._datos.obtenerDatos(lista).subscribe(
        data => {
          this.personas = data;
          this.seleccionado = true;
          this.certificado = true;
          this.curso = false;
          this.avanzado = false;
          this.intermedio = false;
          this.basico = false;
          this.nocion = false;
          this.ninguno = false;

          $("#certificadoMenu").removeClass( "active");
          $("#cursoMenu").removeClass( "active");
          $("#avanzadoMenu").removeClass( "active");
          $("#intermedioMenu").removeClass( "active");
          $("#basicoMenu").removeClass( "active");
          $("#nocionMenu").removeClass( "active");
          $("#ningunoMenu").removeClass( "active");

          $("#certificadoMenu").addClass("active");
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  public verDatosHerramienta(e:any):void {
    if(e.active.length > 0){
      this.tipo = e.active[0]._model.label;
      let lista = this.tipo;
      lista = lista.split(" ").join("_");
      lista = "Herramientas_de_trabajo_"+lista;
      this._datos.obtenerDatos(lista).subscribe(
        data => {
          this.personas = data;
          this.seleccionado = true;
          this.certificado = true;
          this.curso = false;
          this.avanzado = false;
          this.intermedio = false;
          this.basico = false;
          this.nocion = false;
          this.ninguno = false;
          $("#certificadoMenu").removeClass( "active");
          $("#cursoMenu").removeClass( "active");
          $("#avanzadoMenu").removeClass( "active");
          $("#intermedioMenu").removeClass( "active");
          $("#basicoMenu").removeClass( "active");
          $("#nocionMenu").removeClass( "active");
          $("#ningunoMenu").removeClass( "active");

          $("#certificadoMenu").addClass("active");
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  public verDatosSoluciones(e:any):void {
    if(e.active.length > 0){
      this.tipo = e.active[0]._model.label;
      let lista = this.tipo;
      lista = lista.split(" ").join("_");
      lista = "Soluciones_en_la_nube_"+lista;
      this._datos.obtenerDatos(lista).subscribe(
        data => {
          this.personas = data;
          this.seleccionado = true;
          this.certificado = true;
          this.curso = false;
          this.avanzado = false;
          this.intermedio = false;
          this.basico = false;
          this.nocion = false;
          this.ninguno = false;
          $("#certificadoMenu").removeClass( "active");
          $("#cursoMenu").removeClass( "active");
          $("#avanzadoMenu").removeClass( "active");
          $("#intermedioMenu").removeClass( "active");
          $("#basicoMenu").removeClass( "active");
          $("#nocionMenu").removeClass( "active");
          $("#ningunoMenu").removeClass( "active");

          $("#certificadoMenu").addClass("active");
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  public verDatosMetodologias(e:any):void {
    if(e.active.length > 0){
      this.tipo = e.active[0]._model.label;
      let lista = this.tipo;
        if(lista == "CMMI PPQA:VER&VAL"){
          lista = "CMMI_PPQA_VER_VAL";
        }
      lista = lista.split(" ").join("_");
      lista = "Metodologias_"+lista;
      this._datos.obtenerDatos(lista).subscribe(
        data => {
          this.personas = data;
          this.seleccionado = true;
          this.certificado = true;
          this.curso = false;
          this.avanzado = false;
          this.intermedio = false;
          this.basico = false;
          this.nocion = false;
          this.ninguno = false;
          $("#certificadoMenu").removeClass( "active");
          $("#cursoMenu").removeClass( "active");
          $("#avanzadoMenu").removeClass( "active");
          $("#intermedioMenu").removeClass( "active");
          $("#basicoMenu").removeClass( "active");
          $("#nocionMenu").removeClass( "active");
          $("#ningunoMenu").removeClass( "active");

          $("#certificadoMenu").addClass("active");
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  verLista(tipo){
    $("#certificadoMenu").removeClass( "active");
    $("#cursoMenu").removeClass( "active");
    $("#avanzadoMenu").removeClass( "active");
    $("#intermedioMenu").removeClass( "active");
    $("#basicoMenu").removeClass( "active");
    $("#nocionMenu").removeClass( "active");
    $("#ningunoMenu").removeClass( "active");

    $("#"+tipo+"Menu").addClass("active");
    this.curso = false;
    this.avanzado = false;
    this.intermedio = false;
    this.basico = false;
    this.nocion = false;
    this.ninguno = false;
    this.certificado = false;

      if(tipo == "certificado"){
        this.certificado = true;
      }
      if(tipo == "curso"){
        this.curso = true;
      }
      if(tipo == "avanzado"){
        this.avanzado = true;
      }
      if(tipo == "intermedio"){
        this.intermedio = true;
      }
      if(tipo == "basico"){
        this.basico = true;
      }
      if(tipo == "nocion"){
        this.nocion = true;
      }
      if(tipo == "ninguno"){
        this.ninguno = true;
      }
  }

  obtenerIdiomas(){
    this._datos.obtenerIdiomas().subscribe(
      data => {
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
        this.herramienta6 = false;
        this.herramienta7 = false;
        this.herramienta8 = false;
        this.herramienta9 = false;
        this.herramienta10 = false;
        this.herramienta11 = false;
        this.herramienta12 = false;
        this.herramienta13 = false;
        this.herramienta14 = false;
        this.lenguaje1 = false;
        this.lenguaje2 = false;
        this.lenguaje3 = false;
        this.lenguaje4 = false;
        this.lenguaje5 = false;
        this.lenguaje6 = false;
        this.solucion = false;
        this.certificacion1 = false;
        this.certificacion2 = false;
        this.certificacion3 = false;
        this.metodologia1 = false;
        this.metodologia2 = false;
        this.idioma = true;
        this.res = data;
        this.barChartDataIdioma = [
          {
            data: [
              parseInt(this.res.ingles.avanzado.total),
              parseInt(this.res.frances.avanzado.total),
              parseInt(this.res.italiano.avanzado.total)
            ],label: 'Avanzado'
          },{
            data: [
              parseInt(this.res.ingles.intermedio.total),
              parseInt(this.res.frances.intermedio.total),
              parseInt(this.res.italiano.intermedio.total)
            ],label: 'Intermedio'
          },{
            data: [
              parseInt(this.res.ingles.basico.total),
              parseInt(this.res.frances.intermedio.total),
              parseInt(this.res.italiano.intermedio.total)
            ],label: 'Basico'
          },{
            data: [
              parseInt(this.res.ingles.ninguno.total),
              parseInt(this.res.frances.intermedio.total),
              parseInt(this.res.italiano.intermedio.total)
            ],label: 'Ninguno'
          }
        ];
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerHerramientas1(){
    this.cargando = true;
    this._datos.obtenerDatosGrafica("herramienta",7,this.barChartLabelsHerramienta).subscribe(
      data => {
        this.cargando = false;
        this.idioma = false;
        this.herramienta1 = true;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
        this.herramienta6 = false;
        this.herramienta7 = false;
        this.herramienta8 = false;
        this.herramienta9 = false;
        this.herramienta10 = false;
        this.herramienta11 = false;
        this.herramienta12 = false;
        this.herramienta13 = false;
        this.herramienta14 = false;
        this.lenguaje1 = false;
        this.lenguaje2 = false;
        this.lenguaje3 = false;
        this.lenguaje4 = false;
        this.lenguaje5 = false;
        this.lenguaje6 = false;
        this.solucion = false;
        this.certificacion1 = false;
        this.certificacion2 = false;
        this.certificacion3 = false;
        this.metodologia1 = false;
        this.metodologia2 = false;
        this.res = data;

        let numeros = [];
        let clone = [];
        clone = this.barChartData.slice();

        for(let x=0; x<this.nivel_label.length; x++){
          numeros = [];
          for(let y=0; y<this.barChartLabelsHerramienta.length; y++){
            let label = this.barChartLabelsHerramienta[y].split(" ").join("_");
            numeros[y] = parseInt(this.res[label][this.nivel_label[x]].total);
          }
          clone[x].data = numeros;
          clone[x].label = this.nivel_label[x];
        }
        this.barChartData = clone;
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerHerramientas2(){
    this.cargando = true;
    this._datos.obtenerDatosGrafica("herramienta",7,this.barChartLabelsHerramienta2).subscribe(
      data => {
        this.cargando = false;
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = true;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
        this.herramienta6 = false;
        this.herramienta7 = false;
        this.herramienta8 = false;
        this.herramienta9 = false;
        this.herramienta10 = false;
        this.herramienta11 = false;
        this.herramienta12 = false;
        this.herramienta13 = false;
        this.herramienta14 = false;
        this.lenguaje1 = false;
        this.lenguaje2 = false;
        this.lenguaje3 = false;
        this.lenguaje4 = false;
        this.lenguaje5 = false;
        this.lenguaje6 = false;
        this.solucion = false;
        this.certificacion1 = false;
        this.certificacion2 = false;
        this.certificacion3 = false;
        this.metodologia1 = false;
        this.metodologia2 = false;
        this.res = data;
        
        let numeros = [];
        let clone = [];
        clone = this.barChartData.slice();

        for(let x=0; x<this.nivel_label.length; x++){
          numeros = [];
          for(let y=0; y<this.barChartLabelsHerramienta2.length; y++){
            let label = this.barChartLabelsHerramienta2[y].split(" ").join("_");
            numeros[y] = parseInt(this.res[label][this.nivel_label[x]].total);
          }
          clone[x].data = numeros;
          clone[x].label = this.nivel_label[x];
        }
        this.barChartData = clone;
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerHerramientas3(){
    this._datos.obtenerDatosGrafica("herramienta",7,this.barChartLabelsHerramienta3).subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = true;
        this.herramienta4 = false;
        this.herramienta5 = false;
        this.herramienta6 = false;
        this.herramienta7 = false;
        this.herramienta8 = false;
        this.herramienta9 = false;
        this.herramienta10 = false;
        this.herramienta11 = false;
        this.herramienta12 = false;
        this.herramienta13 = false;
        this.herramienta14 = false;
        this.lenguaje1 = false;
        this.lenguaje2 = false;
        this.lenguaje3 = false;
        this.lenguaje4 = false;
        this.lenguaje5 = false;
        this.lenguaje6 = false;
        this.solucion = false;
        this.certificacion1 = false;
        this.certificacion2 = false;
        this.certificacion3 = false;
        this.metodologia1 = false;
        this.metodologia2 = false;
        this.res = data;

        let numeros = [];
        let clone = [];
        clone = this.barChartData.slice();

        for(let x=0; x<this.nivel_label.length; x++){
          numeros = [];
          for(let y=0; y<this.barChartLabelsHerramienta3.length; y++){
            let label = this.barChartLabelsHerramienta3[y].split(" ").join("_");
            numeros[y] = parseInt(this.res[label][this.nivel_label[x]].total);
          }
          clone[x].data = numeros;
          clone[x].label = this.nivel_label[x];
        }
        this.barChartData = clone;
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerHerramientas4(){
    this._datos.obtenerDatosGrafica("herramienta",7,this.barChartLabelsHerramienta4).subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = true;
        this.herramienta5 = false;
        this.herramienta6 = false;
        this.herramienta7 = false;
        this.herramienta8 = false;
        this.herramienta9 = false;
        this.herramienta10 = false;
        this.herramienta11 = false;
        this.herramienta12 = false;
        this.herramienta13 = false;
        this.herramienta14 = false;
        this.lenguaje1 = false;
        this.lenguaje2 = false;
        this.lenguaje3 = false;
        this.lenguaje4 = false;
        this.lenguaje5 = false;
        this.lenguaje6 = false;
        this.solucion = false;
        this.certificacion1 = false;
        this.certificacion2 = false;
        this.certificacion3 = false;
        this.metodologia1 = false;
        this.metodologia2 = false;
        this.res = data;

        let numeros = [];
        let clone = [];
        clone = this.barChartData.slice();

        for(let x=0; x<this.nivel_label.length; x++){
          numeros = [];
          for(let y=0; y<this.barChartLabelsHerramienta4.length; y++){
            let label = this.barChartLabelsHerramienta4[y].split(" ").join("_");
            numeros[y] = parseInt(this.res[label][this.nivel_label[x]].total);
          }
          clone[x].data = numeros;
          clone[x].label = this.nivel_label[x];
        }
        this.barChartData = clone;
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerHerramientas5(){
    this._datos.obtenerDatosGrafica("herramienta",4,this.barChartLabelsHerramienta5).subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = true;
        this.herramienta6 = false;
        this.herramienta7 = false;
        this.herramienta8 = false;
        this.herramienta9 = false;
        this.herramienta10 = false;
        this.herramienta11 = false;
        this.herramienta12 = false;
        this.herramienta13 = false;
        this.herramienta14 = false;
        this.lenguaje1 = false;
        this.lenguaje2 = false;
        this.lenguaje3 = false;
        this.lenguaje4 = false;
        this.lenguaje5 = false;
        this.lenguaje6 = false;
        this.solucion = false;
        this.certificacion1 = false;
        this.certificacion2 = false;
        this.certificacion3 = false;
        this.metodologia1 = false;
        this.metodologia2 = false;
        this.res = data;

        let numeros = [];
        let clone = [];
        clone = this.barChartData.slice();

        for(let x=0; x<this.nivel_label.length; x++){
          numeros = [];
          for(let y=0; y<this.barChartLabelsHerramienta5.length; y++){
            let label = this.barChartLabelsHerramienta5[y].split(" ").join("_");
            numeros[y] = parseInt(this.res[label][this.nivel_label[x]].total);
          }
          clone[x].data = numeros;
          clone[x].label = this.nivel_label[x];
        }
        this.barChartData = clone;
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerHerramientas6(){
    this._datos.obtenerDatosGrafica("herramienta",7,this.barChartLabelsHerramienta6).subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
        this.herramienta6 = true;
        this.herramienta7 = false;
        this.herramienta8 = false;
        this.herramienta9 = false;
        this.herramienta10 = false;
        this.herramienta11 = false;
        this.herramienta12 = false;
        this.herramienta13 = false;
        this.herramienta14 = false;
        this.lenguaje1 = false;
        this.lenguaje2 = false;
        this.lenguaje3 = false;
        this.lenguaje4 = false;
        this.lenguaje5 = false;
        this.lenguaje6 = false;
        this.solucion = false;
        this.certificacion1 = false;
        this.certificacion2 = false;
        this.certificacion3 = false;
        this.metodologia1 = false;
        this.metodologia2 = false;
        this.res = data;

        let numeros = [];
        let clone = [];
        clone = this.barChartData.slice();

        for(let x=0; x<this.nivel_label.length; x++){
          numeros = [];
          for(let y=0; y<this.barChartLabelsHerramienta6.length; y++){
            let label = this.barChartLabelsHerramienta6[y].split(" ").join("_");
            numeros[y] = parseInt(this.res[label][this.nivel_label[x]].total);
          }
          clone[x].data = numeros;
          clone[x].label = this.nivel_label[x];
        }
        this.barChartData = clone;
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerHerramientas7(){
    this._datos.obtenerDatosGrafica("herramienta",7,this.barChartLabelsHerramienta7).subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
        this.herramienta6 = false;
        this.herramienta7 = true;
        this.herramienta8 = false;
        this.herramienta9 = false;
        this.herramienta10 = false;
        this.herramienta11 = false;
        this.herramienta12 = false;
        this.herramienta13 = false;
        this.herramienta14 = false;
        this.lenguaje1 = false;
        this.lenguaje2 = false;
        this.lenguaje3 = false;
        this.lenguaje4 = false;
        this.lenguaje5 = false;
        this.lenguaje6 = false;
        this.solucion = false;
        this.certificacion1 = false;
        this.certificacion2 = false;
        this.certificacion3 = false;
        this.metodologia1 = false;
        this.metodologia2 = false;
        this.res = data;

        let numeros = [];
        let clone = [];
        clone = this.barChartData.slice();

        for(let x=0; x<this.nivel_label.length; x++){
          numeros = [];
          for(let y=0; y<this.barChartLabelsHerramienta7.length; y++){
            let label = this.barChartLabelsHerramienta7[y].split(" ").join("_");
            numeros[y] = parseInt(this.res[label][this.nivel_label[x]].total);
          }
          clone[x].data = numeros;
          clone[x].label = this.nivel_label[x];
        }
        this.barChartData = clone;
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerHerramientas8(){
    this._datos.obtenerDatosGrafica("herramienta",7,this.barChartLabelsHerramienta8).subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
        this.herramienta6 = false;
        this.herramienta7 = false;
        this.herramienta8 = true;
        this.herramienta9 = false;
        this.herramienta10 = false;
        this.herramienta11 = false;
        this.herramienta12 = false;
        this.herramienta13 = false;
        this.herramienta14 = false;
        this.lenguaje1 = false;
        this.lenguaje2 = false;
        this.lenguaje3 = false;
        this.lenguaje4 = false;
        this.lenguaje5 = false;
        this.lenguaje6 = false;
        this.solucion = false;
        this.certificacion1 = false;
        this.certificacion2 = false;
        this.certificacion3 = false;
        this.metodologia1 = false;
        this.metodologia2 = false;
        this.res = data;

        let numeros = [];
        let clone = [];
        clone = this.barChartData.slice();

        for(let x=0; x<this.nivel_label.length; x++){
          numeros = [];
          for(let y=0; y<this.barChartLabelsHerramienta8.length; y++){
            let label = this.barChartLabelsHerramienta8[y].split(" ").join("_");
            numeros[y] = parseInt(this.res[label][this.nivel_label[x]].total);
          }
          clone[x].data = numeros;
          clone[x].label = this.nivel_label[x];
        }
        this.barChartData = clone;
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerHerramientas9(){
    this._datos.obtenerDatosGrafica("herramienta",7,this.barChartLabelsHerramienta9).subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
        this.herramienta6 = false;
        this.herramienta7 = false;
        this.herramienta8 = false;
        this.herramienta9 = true;
        this.herramienta10 = false;
        this.herramienta11 = false;
        this.herramienta12 = false;
        this.herramienta13 = false;
        this.herramienta14 = false;
        this.lenguaje1 = false;
        this.lenguaje2 = false;
        this.lenguaje3 = false;
        this.lenguaje4 = false;
        this.lenguaje5 = false;
        this.lenguaje6 = false;
        this.solucion = false;
        this.certificacion1 = false;
        this.certificacion2 = false;
        this.certificacion3 = false;
        this.metodologia1 = false;
        this.metodologia2 = false;
        this.res = data;

        let numeros = [];
        let clone = [];
        clone = this.barChartData.slice();

        for(let x=0; x<this.nivel_label.length; x++){
          numeros = [];
          for(let y=0; y<this.barChartLabelsHerramienta9.length; y++){
            let label = this.barChartLabelsHerramienta9[y].split(" ").join("_");
            numeros[y] = parseInt(this.res[label][this.nivel_label[x]].total);
          }
          clone[x].data = numeros;
          clone[x].label = this.nivel_label[x];
        }
        this.barChartData = clone;
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerHerramientas10(){
    this._datos.obtenerDatosGrafica("herramienta",7,this.barChartLabelsHerramienta10).subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
        this.herramienta6 = false;
        this.herramienta7 = false;
        this.herramienta8 = false;
        this.herramienta9 = false;
        this.herramienta10 = true;
        this.herramienta11 = false;
        this.herramienta12 = false;
        this.herramienta13 = false;
        this.herramienta14 = false;
        this.lenguaje1 = false;
        this.lenguaje2 = false;
        this.lenguaje3 = false;
        this.lenguaje4 = false;
        this.lenguaje5 = false;
        this.lenguaje6 = false;
        this.solucion = false;
        this.certificacion1 = false;
        this.certificacion2 = false;
        this.certificacion3 = false;
        this.metodologia1 = false;
        this.metodologia2 = false;
        this.res = data;

        let numeros = [];
        let clone = [];
        clone = this.barChartData.slice();

        for(let x=0; x<this.nivel_label.length; x++){
          numeros = [];
          for(let y=0; y<this.barChartLabelsHerramienta10.length; y++){
            let label = this.barChartLabelsHerramienta10[y].split(" ").join("_");
            numeros[y] = parseInt(this.res[label][this.nivel_label[x]].total);
          }
          clone[x].data = numeros;
          clone[x].label = this.nivel_label[x];
        }
        this.barChartData = clone;
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerHerramientas11(){
    this._datos.obtenerDatosGrafica("herramienta",7,this.barChartLabelsHerramienta11).subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
        this.herramienta6 = false;
        this.herramienta7 = false;
        this.herramienta8 = false;
        this.herramienta9 = false;
        this.herramienta10 = false;
        this.herramienta11 = true;
        this.herramienta12 = false;
        this.herramienta13 = false;
        this.herramienta14 = false;
        this.lenguaje1 = false;
        this.lenguaje2 = false;
        this.lenguaje3 = false;
        this.lenguaje4 = false;
        this.lenguaje5 = false;
        this.lenguaje6 = false;
        this.solucion = false;
        this.certificacion1 = false;
        this.certificacion2 = false;
        this.certificacion3 = false;
        this.metodologia1 = false;
        this.metodologia2 = false;
        this.res = data;

        let numeros = [];
        let clone = [];
        clone = this.barChartData.slice();

        for(let x=0; x<this.nivel_label.length; x++){
          numeros = [];
          for(let y=0; y<this.barChartLabelsHerramienta11.length; y++){
            let label = this.barChartLabelsHerramienta11[y].split(" ").join("_");
            numeros[y] = parseInt(this.res[label][this.nivel_label[x]].total);
          }
          clone[x].data = numeros;
          clone[x].label = this.nivel_label[x];
        }
        this.barChartData = clone;
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerHerramientas12(){
    this._datos.obtenerDatosGrafica("herramienta",7,this.barChartLabelsHerramienta12).subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
        this.herramienta6 = false;
        this.herramienta7 = false;
        this.herramienta8 = false;
        this.herramienta9 = false;
        this.herramienta10 = false;
        this.herramienta11 = false;
        this.herramienta12 = true;
        this.herramienta13 = false;
        this.herramienta14 = false;
        this.lenguaje1 = false;
        this.lenguaje2 = false;
        this.lenguaje3 = false;
        this.lenguaje4 = false;
        this.lenguaje5 = false;
        this.lenguaje6 = false;
        this.solucion = false;
        this.certificacion1 = false;
        this.certificacion2 = false;
        this.certificacion3 = false;
        this.metodologia1 = false;
        this.metodologia2 = false;
        this.res = data;

        let numeros = [];
        let clone = [];
        clone = this.barChartData.slice();

        for(let x=0; x<this.nivel_label.length; x++){
          numeros = [];
          for(let y=0; y<this.barChartLabelsHerramienta12.length; y++){
            let label = this.barChartLabelsHerramienta12[y].split(" ").join("_");
            numeros[y] = parseInt(this.res[label][this.nivel_label[x]].total);
          }
          clone[x].data = numeros;
          clone[x].label = this.nivel_label[x];
        }
        this.barChartData = clone;
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerHerramientas13(){
    this._datos.obtenerDatosGrafica("herramienta",7,this.barChartLabelsHerramienta13).subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
        this.herramienta6 = false;
        this.herramienta7 = false;
        this.herramienta8 = false;
        this.herramienta9 = false;
        this.herramienta10 = false;
        this.herramienta11 = false;
        this.herramienta12 = false;
        this.herramienta13 = true;
        this.herramienta14 = false;
        this.lenguaje1 = false;
        this.lenguaje2 = false;
        this.lenguaje3 = false;
        this.lenguaje4 = false;
        this.lenguaje5 = false;
        this.lenguaje6 = false;
        this.solucion = false;
        this.certificacion1 = false;
        this.certificacion2 = false;
        this.certificacion3 = false;
        this.metodologia1 = false;
        this.metodologia2 = false;
        this.res = data;

        let numeros = [];
        let clone = [];
        clone = this.barChartData.slice();

        for(let x=0; x<this.nivel_label.length; x++){
          numeros = [];
          for(let y=0; y<this.barChartLabelsHerramienta13.length; y++){
            let label = this.barChartLabelsHerramienta13[y].split(" ").join("_");
            numeros[y] = parseInt(this.res[label][this.nivel_label[x]].total);
          }
          clone[x].data = numeros;
          clone[x].label = this.nivel_label[x];
        }
        this.barChartData = clone;
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerHerramientas14(){
    this._datos.obtenerDatosGrafica("herramienta",6,this.barChartLabelsHerramienta14).subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
        this.herramienta6 = false;
        this.herramienta7 = false;
        this.herramienta8 = false;
        this.herramienta9 = false;
        this.herramienta10 = false;
        this.herramienta11 = false;
        this.herramienta12 = false;
        this.herramienta13 = false;
        this.herramienta14 = true;
        this.lenguaje1 = false;
        this.lenguaje2 = false;
        this.lenguaje3 = false;
        this.lenguaje4 = false;
        this.lenguaje5 = false;
        this.lenguaje6 = false;
        this.solucion = false;
        this.certificacion1 = false;
        this.certificacion2 = false;
        this.certificacion3 = false;
        this.metodologia1 = false;
        this.metodologia2 = false;
        this.res = data;

        let numeros = [];
        let clone = [];
        clone = this.barChartData.slice();

        for(let x=0; x<this.nivel_label.length; x++){
          numeros = [];
          for(let y=0; y<this.barChartLabelsHerramienta14.length; y++){
            let label = this.barChartLabelsHerramienta14[y].split(" ").join("_");
            numeros[y] = parseInt(this.res[label][this.nivel_label[x]].total);
          }
          clone[x].data = numeros;
          clone[x].label = this.nivel_label[x];
        }
        this.barChartData = clone;
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerLenguajes1(){
    this._datos.obtenerDatosGrafica("lenguaje",7,this.barChartLabelsLenguaje1).subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
        this.herramienta6 = false;
        this.herramienta7 = false;
        this.herramienta8 = false;
        this.herramienta9 = false;
        this.herramienta10 = false;
        this.herramienta11 = false;
        this.herramienta12 = false;
        this.herramienta13 = false;
        this.herramienta14 = false;
        this.lenguaje1 = true;
        this.lenguaje2 = false;
        this.lenguaje3 = false;
        this.lenguaje4 = false;
        this.lenguaje5 = false;
        this.lenguaje6 = false;
        this.solucion = false;
        this.certificacion1 = false;
        this.certificacion2 = false;
        this.certificacion3 = false;
        this.metodologia1 = false;
        this.metodologia2 = false;
        this.res = data;

        let numeros = [];
        let clone = [];
        clone = this.barChartData.slice();

        for(let x=0; x<this.nivel_label.length; x++){
          numeros = [];
          for(let y=0; y<this.barChartLabelsLenguaje1.length; y++){
            let label = this.barChartLabelsLenguaje1[y].split(" ").join("_");
            if(label == "C++"){ label = "C_plus_plus"; }
            if(label == "C#"){ label = "C_Sharp"; }
            if(label == "SQL"){ label = "SQL_1"; }
            numeros[y] = parseInt(this.res[label][this.nivel_label[x]].total);
          }
          clone[x].data = numeros;
          clone[x].label = this.nivel_label[x];
        }
        this.barChartData = clone;
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerLenguajes2(){
    this._datos.obtenerDatosGrafica("lenguaje",7,this.barChartLabelsLenguaje2).subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
        this.herramienta6 = false;
        this.herramienta7 = false;
        this.herramienta8 = false;
        this.herramienta9 = false;
        this.herramienta10 = false;
        this.herramienta11 = false;
        this.herramienta12 = false;
        this.herramienta13 = false;
        this.herramienta14 = false;
        this.lenguaje1 = false;
        this.lenguaje2 = true;
        this.lenguaje3 = false;
        this.lenguaje4 = false;
        this.lenguaje5 = false;
        this.lenguaje6 = false;
        this.solucion = false;
        this.certificacion1 = false;
        this.certificacion2 = false;
        this.certificacion3 = false;
        this.metodologia1 = false;
        this.metodologia2 = false;
        this.res = data;

        let numeros = [];
        let clone = [];
        clone = this.barChartData.slice();
        
        for(let x=0; x<this.nivel_label.length; x++){
          numeros = [];
          for(let y=0; y<this.barChartLabelsLenguaje2.length; y++){
            let label = this.barChartLabelsLenguaje2[y].split(" ").join("_");
            if(label == "ASP.NET"){ label = "ASP_NET"; }
            numeros[y] = parseInt(this.res[label][this.nivel_label[x]].total);
          }
          clone[x].data = numeros;
          clone[x].label = this.nivel_label[x];
        }
        this.barChartData = clone;
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerLenguajes3(){
    this._datos.obtenerDatosGrafica("lenguaje",7,this.barChartLabelsLenguaje3).subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
        this.herramienta6 = false;
        this.herramienta7 = false;
        this.herramienta8 = false;
        this.herramienta9 = false;
        this.herramienta10 = false;
        this.herramienta11 = false;
        this.herramienta12 = false;
        this.herramienta13 = false;
        this.herramienta14 = false;
        this.lenguaje1 = false;
        this.lenguaje2 = false;
        this.lenguaje3 = true;
        this.lenguaje4 = false;
        this.lenguaje5 = false;
        this.lenguaje6 = false;
        this.solucion = false;
        this.certificacion1 = false;
        this.certificacion2 = false;
        this.certificacion3 = false;
        this.metodologia1 = false;
        this.metodologia2 = false;
        this.res = data;

        let numeros = [];
        let clone = [];
        clone = this.barChartData.slice();
        
        for(let x=0; x<this.nivel_label.length; x++){
          numeros = [];
          for(let y=0; y<this.barChartLabelsLenguaje3.length; y++){
            let label = this.barChartLabelsLenguaje3[y].split(" ").join("_");
            if(label == "JSF_2.0"){ label = "JSF_2_0"; }
            numeros[y] = parseInt(this.res[label][this.nivel_label[x]].total);
          }
          clone[x].data = numeros;
          clone[x].label = this.nivel_label[x];
        }
        this.barChartData = clone;
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerLenguajes4(){
    this._datos.obtenerDatosGrafica("lenguaje",7,this.barChartLabelsLenguaje4).subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
        this.herramienta6 = false;
        this.herramienta7 = false;
        this.herramienta8 = false;
        this.herramienta9 = false;
        this.herramienta10 = false;
        this.herramienta11 = false;
        this.herramienta12 = false;
        this.herramienta13 = false;
        this.herramienta14 = false;
        this.lenguaje1 = false;
        this.lenguaje2 = false;
        this.lenguaje3 = false;
        this.lenguaje4 = true;
        this.lenguaje5 = false;
        this.lenguaje6 = false;
        this.solucion = false;
        this.certificacion1 = false;
        this.certificacion2 = false;
        this.certificacion3 = false;
        this.metodologia1 = false;
        this.metodologia2 = false;
        this.res = data;

        let numeros = [];
        let clone = [];
        clone = this.barChartData.slice();
        
        for(let x=0; x<this.nivel_label.length; x++){
          numeros = [];
          for(let y=0; y<this.barChartLabelsLenguaje4.length; y++){
            let label = this.barChartLabelsLenguaje4[y].split(" ").join("_");
            numeros[y] = parseInt(this.res[label][this.nivel_label[x]].total);
          }
          clone[x].data = numeros;
          clone[x].label = this.nivel_label[x];
        }
        this.barChartData = clone;
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerLenguajes5(){
    this._datos.obtenerDatosGrafica("lenguaje",7,this.barChartLabelsLenguaje5).subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
        this.herramienta6 = false;
        this.herramienta7 = false;
        this.herramienta8 = false;
        this.herramienta9 = false;
        this.herramienta10 = false;
        this.herramienta11 = false;
        this.herramienta12 = false;
        this.herramienta13 = false;
        this.herramienta14 = false;
        this.lenguaje1 = false;
        this.lenguaje2 = false;
        this.lenguaje3 = false;
        this.lenguaje4 = false;
        this.lenguaje5 = true;
        this.lenguaje6 = false;
        this.solucion = false;
        this.certificacion1 = false;
        this.certificacion2 = false;
        this.certificacion3 = false;
        this.metodologia1 = false;
        this.metodologia2 = false;
        this.res = data;
        
        let numeros = [];
        let clone = [];
        clone = this.barChartData.slice();
        
        for(let x=0; x<this.nivel_label.length; x++){
          numeros = [];
          for(let y=0; y<this.barChartLabelsLenguaje5.length; y++){
            let label = this.barChartLabelsLenguaje5[y].split(" ").join("_");
            numeros[y] = parseInt(this.res[label][this.nivel_label[x]].total);
          }
          clone[x].data = numeros;
          clone[x].label = this.nivel_label[x];
        }
        this.barChartData = clone;
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerLenguajes6(){
    this._datos.obtenerDatosGrafica("lenguaje",3,this.barChartLabelsLenguaje6).subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
        this.herramienta6 = false;
        this.herramienta7 = false;
        this.herramienta8 = false;
        this.herramienta9 = false;
        this.herramienta10 = false;
        this.herramienta11 = false;
        this.herramienta12 = false;
        this.herramienta13 = false;
        this.herramienta14 = false;
        this.lenguaje1 = false;
        this.lenguaje2 = false;
        this.lenguaje3 = false;
        this.lenguaje4 = false;
        this.lenguaje5 = false;
        this.lenguaje6 = true;
        this.solucion = false;
        this.certificacion1 = false;
        this.certificacion2 = false;
        this.certificacion3 = false;
        this.metodologia1 = false;
        this.metodologia2 = false;
        this.res = data;
        
        let numeros = [];
        let clone = [];
        clone = this.barChartData.slice();
        
        for(let x=0; x<this.nivel_label.length; x++){
          numeros = [];
          for(let y=0; y<this.barChartLabelsLenguaje6.length; y++){
            let label = this.barChartLabelsLenguaje6[y].split(" ").join("_");
            numeros[y] = parseInt(this.res[label][this.nivel_label[x]].total);
          }
          clone[x].data = numeros;
          clone[x].label = this.nivel_label[x];
        }
        this.barChartData = clone;
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerSoluciones(){
    this._datos.obtenerDatosGrafica("solucion",2,this.barChartLabelsSolucion).subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
        this.herramienta6 = false;
        this.herramienta7 = false;
        this.herramienta8 = false;
        this.herramienta9 = false;
        this.herramienta10 = false;
        this.herramienta11 = false;
        this.herramienta12 = false;
        this.herramienta13 = false;
        this.herramienta14 = false;
        this.lenguaje1 = false;
        this.lenguaje2 = false;
        this.lenguaje3 = false;
        this.lenguaje4 = false;
        this.lenguaje5 = false;
        this.lenguaje6 = false;
        this.solucion = true;
        this.certificacion1 = false;
        this.certificacion2 = false;
        this.certificacion3 = false;
        this.metodologia1 = false;
        this.metodologia2 = false;
        this.res = data;
        
        let numeros = [];
        let clone = [];
        clone = this.barChartData.slice();
        
        for(let x=0; x<this.nivel_label.length; x++){
          numeros = [];
          for(let y=0; y<this.barChartLabelsSolucion.length; y++){
            let label = this.barChartLabelsSolucion[y].split(" ").join("_");
            numeros[y] = parseInt(this.res[label][this.nivel_label[x]].total);
          }
          clone[x].data = numeros;
          clone[x].label = this.nivel_label[x];
        }
        this.barChartData = clone;
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerCertificaciones1(){
    this._datos.obtenerDatosGrafica("certificacion",7,this.barChartLabelsCertificacion1).subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
        this.herramienta6 = false;
        this.herramienta7 = false;
        this.herramienta8 = false;
        this.herramienta9 = false;
        this.herramienta10 = false;
        this.herramienta11 = false;
        this.herramienta12 = false;
        this.herramienta13 = false;
        this.herramienta14 = false;
        this.lenguaje1 = false;
        this.lenguaje2 = false;
        this.lenguaje3 = false;
        this.lenguaje4 = false;
        this.lenguaje5 = false;
        this.lenguaje6 = false;
        this.solucion = false;
        this.certificacion1 = true;
        this.certificacion2 = false;
        this.certificacion3 = false;
        this.metodologia1 = false;
        this.metodologia2 = false;
        this.res = data;
        
        let numeros = [];
        let clone = [];
        clone = this.barChartData.slice();
        
        for(let x=0; x<this.nivel_label.length; x++){
          numeros = [];
          for(let y=0; y<this.barChartLabelsCertificacion1.length; y++){
            let label = this.barChartLabelsCertificacion1[y].split(" ").join("_");
            numeros[y] = parseInt(this.res[label][this.nivel_label[x]].total);
          }
          clone[x].data = numeros;
          clone[x].label = this.nivel_label[x];
        }
        this.barChartData = clone;
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerCertificaciones2(){
    this._datos.obtenerDatosGrafica("certificacion",7,this.barChartLabelsCertificacion2).subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
        this.herramienta6 = false;
        this.herramienta7 = false;
        this.herramienta8 = false;
        this.herramienta9 = false;
        this.herramienta10 = false;
        this.herramienta11 = false;
        this.herramienta12 = false;
        this.herramienta13 = false;
        this.herramienta14 = false;
        this.lenguaje1 = false;
        this.lenguaje2 = false;
        this.lenguaje3 = false;
        this.lenguaje4 = false;
        this.lenguaje5 = false;
        this.lenguaje6 = false;
        this.solucion = false;
        this.certificacion1 = false;
        this.certificacion2 = true;
        this.certificacion3 = false;
        this.metodologia1 = false;
        this.metodologia2 = false;
        this.res = data;
        
        let numeros = [];
        let clone = [];
        clone = this.barChartData.slice();
        
        for(let x=0; x<this.nivel_label.length; x++){
          numeros = [];
          for(let y=0; y<this.barChartLabelsCertificacion2.length; y++){
            let label = this.barChartLabelsCertificacion2[y].split(" ").join("_");
            numeros[y] = parseInt(this.res[label][this.nivel_label[x]].total);
          }
          clone[x].data = numeros;
          clone[x].label = this.nivel_label[x];
        }
        this.barChartData = clone;
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerCertificaciones3(){
    this._datos.obtenerDatosGrafica("certificacion",7,this.barChartLabelsCertificacion3).subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
        this.herramienta6 = false;
        this.herramienta7 = false;
        this.herramienta8 = false;
        this.herramienta9 = false;
        this.herramienta10 = false;
        this.herramienta11 = false;
        this.herramienta12 = false;
        this.herramienta13 = false;
        this.herramienta14 = false;
        this.lenguaje1 = false;
        this.lenguaje2 = false;
        this.lenguaje3 = false;
        this.lenguaje4 = false;
        this.lenguaje5 = false;
        this.lenguaje6 = false;
        this.solucion = false;
        this.certificacion1 = false;
        this.certificacion2 = false;
        this.certificacion3 = true;
        this.metodologia1 = false;
        this.metodologia2 = false;
        this.res = data;
        
        let numeros = [];
        let clone = [];
        clone = this.barChartData.slice();
        
        for(let x=0; x<this.nivel_label.length; x++){
          numeros = [];
          for(let y=0; y<this.barChartLabelsCertificacion3.length; y++){
            let label = this.barChartLabelsCertificacion3[y].split(" ").join("_");
            numeros[y] = parseInt(this.res[label][this.nivel_label[x]].total);
          }
          clone[x].data = numeros;
          clone[x].label = this.nivel_label[x];
        }
        this.barChartData = clone;
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerMetodologias1(){
    this._datos.obtenerDatosGrafica("metodologia",7,this.barChartLabelsMetodologia1).subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
        this.herramienta6 = false;
        this.herramienta7 = false;
        this.herramienta8 = false;
        this.herramienta9 = false;
        this.herramienta10 = false;
        this.herramienta11 = false;
        this.herramienta12 = false;
        this.herramienta13 = false;
        this.herramienta14 = false;
        this.lenguaje1 = false;
        this.lenguaje2 = false;
        this.lenguaje3 = false;
        this.lenguaje4 = false;
        this.lenguaje5 = false;
        this.lenguaje6 = false;
        this.solucion = false;
        this.certificacion1 = false;
        this.certificacion2 = false;
        this.certificacion3 = false;
        this.metodologia1 = true;
        this.metodologia2 = false;
        this.res = data;

        let numeros = [];
        let clone = [];
        clone = this.barChartData.slice();
        
        for(let x=0; x<this.nivel_label.length; x++){
          numeros = [];
          for(let y=0; y<this.barChartLabelsMetodologia1.length; y++){
            let label = this.barChartLabelsMetodologia1[y].split(" ").join("_");
            numeros[y] = parseInt(this.res[label][this.nivel_label[x]].total);
          }
          clone[x].data = numeros;
          clone[x].label = this.nivel_label[x];
        }
        this.barChartData = clone;
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerMetodologias2(){
    this._datos.obtenerDatosGrafica("metodologia",5,this.barChartLabelsMetodologia2).subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
        this.herramienta6 = false;
        this.herramienta7 = false;
        this.herramienta8 = false;
        this.herramienta9 = false;
        this.herramienta10 = false;
        this.herramienta11 = false;
        this.herramienta12 = false;
        this.herramienta13 = false;
        this.herramienta14 = false;
        this.lenguaje1 = false;
        this.lenguaje2 = false;
        this.lenguaje3 = false;
        this.lenguaje4 = false;
        this.lenguaje5 = false;
        this.lenguaje6 = false;
        this.solucion = false;
        this.certificacion1 = false;
        this.certificacion2 = false;
        this.certificacion3 = false;
        this.metodologia1 = false;
        this.metodologia2 = true;
        this.res = data;
        
        let numeros = [];
        let clone = [];
        clone = this.barChartData.slice();
        
        for(let x=0; x<this.nivel_label.length; x++){
          numeros = [];
          for(let y=0; y<this.barChartLabelsMetodologia2.length; y++){
            let label = this.barChartLabelsMetodologia2[y].split(" ").join("_");
            if(label == "CMMI_PPQA:VER&VAL"){ label = "CMMI_PPQA_VER_VAL"; }
            numeros[y] = parseInt(this.res[label][this.nivel_label[x]].total);
          }
          clone[x].data = numeros;
          clone[x].label = this.nivel_label[x];
        }
        this.barChartData = clone;
      },
      error => {
        console.log(error);
      }
    );

  }

  /* Funciones de la lista de opciones */
  verIdiomas(){
    this.obtenerIdiomas();
  }

  descativarOpcionesMenu(){
    $("#h1").removeClass("list-group-item-info");
    $("#h2").removeClass("list-group-item-info");
    $("#h3").removeClass("list-group-item-info");
    $("#h4").removeClass("list-group-item-info");
    $("#h5").removeClass("list-group-item-info");
    $("#h6").removeClass("list-group-item-info");
    $("#h7").removeClass("list-group-item-info");
    $("#h8").removeClass("list-group-item-info");
    $("#h9").removeClass("list-group-item-info");
    $("#h10").removeClass("list-group-item-info");
    $("#h11").removeClass("list-group-item-info");
    $("#h12").removeClass("list-group-item-info");
    $("#h13").removeClass("list-group-item-info");
    $("#h14").removeClass("list-group-item-info");
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
  }

  quitarGraficas(){
    this.ninguno = false;
    this.nocion = false;
    this.basico = false;
    this.intermedio = false;
    this.avanzado = false;
    this.curso = false;
    this.certificado = false;
    this.seleccionado = false;
  }

  verGrafica(id){

    this.quitarGraficas();
    this.descativarOpcionesMenu();
    $(id).addClass("list-group-item-info");

    if(id == "#h1"){ this.obtenerHerramientas1(); }
    if(id == "#h2"){ this.obtenerHerramientas2(); }
    if(id == "#h3"){ this.obtenerHerramientas3(); }
    if(id == "#h4"){ this.obtenerHerramientas4(); }
    if(id == "#h5"){ this.obtenerHerramientas5(); }

    if(id == "#l1"){ this.obtenerLenguajes1(); }
    if(id == "#l2"){ this.obtenerLenguajes2(); }
    if(id == "#l3"){ this.obtenerLenguajes3(); }
    if(id == "#l4"){ this.obtenerLenguajes4(); }
    if(id == "#l5"){ this.obtenerLenguajes5(); }
    if(id == "#l6"){ this.obtenerLenguajes6(); }

    if(id == "#s"){ this.obtenerSoluciones(); }

    if(id == "#c1"){ this.obtenerCertificaciones1(); }
    if(id == "#c2"){ this.obtenerCertificaciones2(); }
    if(id == "#c3"){ this.obtenerCertificaciones3(); }

    if(id == "#m1"){ this.obtenerMetodologias1(); }
    if(id == "#m2"){ this.obtenerMetodologias2(); }

    if(id == "#h6"){ this.obtenerHerramientas6(); }
    if(id == "#h7"){ this.obtenerHerramientas7(); }
    if(id == "#h8"){ this.obtenerHerramientas8(); }
    if(id == "#h9"){ this.obtenerHerramientas9(); }
    if(id == "#h10"){ this.obtenerHerramientas10(); }
    if(id == "#h11"){ this.obtenerHerramientas11(); }
    if(id == "#h12"){ this.obtenerHerramientas12(); }
    if(id == "#h13"){ this.obtenerHerramientas13(); }
    if(id == "#h14"){ this.obtenerHerramientas14(); }
  }

}