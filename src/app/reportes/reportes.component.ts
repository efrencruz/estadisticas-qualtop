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

  public personas:any = {};
  public met1:any = {};
  public met2:any = {};
  public cer1:any = {};
  public cer2:any = {};
  public cer3:any = {};
  public idiomas:any = {};
  public sol:any = {};
  public len:any = {};
  public len2:any = {};
  public len3:any = {};
  public len4:any = {};
  public len5:any = {};
  public len6:any = {};
  public her:any = {};
  public her2:any = {};
  public her3:any = {};
  public her4:any = {};
  public her5:any = {};

  public barChartLabelsIdioma:string[] = ['Ingles', 'Frances', 'Italiano'];
  
  public barChartDataCertificacion1:any[] = [
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

  public barChartDataSolucion:any[] = [
    {
      data:[0,0],label:"A"
    },{
      data:[0,0],label:"B"
    },{
      data:[0,0],label:"C"
    },{
      data:[0,0],label:"D"
    },{
      data:[0,0],label:"E"
    },{
      data:[0,0],label:"F"
    },{
      data:[0,0],label:"G"
    }
  ];

  public barChartDataMetodologia:any[] = [
    {
      data:[0,0,0,0,0],label:"A"
    },{
      data:[0,0,0,0,0],label:"B"
    },{
      data:[0,0,0,0,0],label:"C"
    },{
      data:[0,0,0,0,0],label:"D"
    },{
      data:[0,0,0,0,0],label:"E"
    },{
      data:[0,0,0,0,0],label:"F"
    },{
      data:[0,0,0,0,0],label:"G"
    }
  ];

  public barChartDataHerramienta:any[] = [
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

  public barChartDataHerramienta5:any[] = [
    {
      data:[0,0,0,0],label:"A"
    },{
      data:[0,0,0,0],label:"B"
    },{
      data:[0,0,0,0],label:"C"
    },{
      data:[0,0,0,0],label:"D"
    },{
      data:[0,0,0,0],label:"E"
    },{
      data:[0,0,0,0],label:"F"
    },{
      data:[0,0,0,0],label:"G"
    }
  ];

  public barChartDataHerramienta6:any[] = [
    {
      data:[0,0,0],label:"A"
    },{
      data:[0,0,0],label:"B"
    },{
      data:[0,0,0],label:"C"
    },{
      data:[0,0,0],label:"D"
    },{
      data:[0,0,0],label:"E"
    },{
      data:[0,0,0],label:"F"
    },{
      data:[0,0,0],label:"G"
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
        if(lista == "C++"){
          lista = "C_plus_plus";
        }
        if(lista == "C#"){
          lista = "C_Sharp";
        }
        if(lista == "SQL"){
          lista = "SQL_1";
        }
        if(lista == "ASP.NET"){
          lista = "ASP_NET";
        }
        if(lista == "JSF 2.0"){
          lista = "JSF_2_0";
        }
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
        this.idiomas = data;
        this.barChartDataIdioma = [
          {
            data: [
              parseInt(this.idiomas.ingles.avanzado.total),
              parseInt(this.idiomas.frances.avanzado.total),
              parseInt(this.idiomas.italiano.avanzado.total)
            ],label: 'Avanzado'
          },{
            data: [
              parseInt(this.idiomas.ingles.intermedio.total),
              parseInt(this.idiomas.frances.intermedio.total),
              parseInt(this.idiomas.italiano.intermedio.total)
            ],label: 'Intermedio'
          },{
            data: [
              parseInt(this.idiomas.ingles.basico.total),
              parseInt(this.idiomas.frances.intermedio.total),
              parseInt(this.idiomas.italiano.intermedio.total)
            ],label: 'Basico'
          },{
            data: [
              parseInt(this.idiomas.ingles.ninguno.total),
              parseInt(this.idiomas.frances.intermedio.total),
              parseInt(this.idiomas.italiano.intermedio.total)
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
    this._datos.obtenerHerramientas1().subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = true;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
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
        this.her = data;
        this.barChartDataHerramienta = [
          {
            data: [
              parseInt(this.her.Microsoft_Office.Certificado.total),
              parseInt(this.her.JIRA.Certificado.total),
              parseInt(this.her.Confluence.Certificado.total),
              parseInt(this.her.Visual_Studio.Certificado.total),
              parseInt(this.her.Bamboo.Certificado.total),
              parseInt(this.her.JIRA_Portafolio.Certificado.total),
              parseInt(this.her.ALM_HP.Certificado.total)
            ],label: 'Certificado'
          },
          {
            data: [
              parseInt(this.her.Microsoft_Office.Curso.total),
              parseInt(this.her.JIRA.Curso.total),
              parseInt(this.her.Confluence.Curso.total),
              parseInt(this.her.Visual_Studio.Curso.total),
              parseInt(this.her.Bamboo.Curso.total),
              parseInt(this.her.JIRA_Portafolio.Curso.total),
              parseInt(this.her.ALM_HP.Curso.total)
            ],label: 'Curso oficial sin certificacion'
          },
          {
            data: [
              parseInt(this.her.Microsoft_Office.Avanzado.total),
              parseInt(this.her.JIRA.Avanzado.total),
              parseInt(this.her.Confluence.Avanzado.total),
              parseInt(this.her.Visual_Studio.Avanzado.total),
              parseInt(this.her.Bamboo.Avanzado.total),
              parseInt(this.her.JIRA_Portafolio.Avanzado.total),
              parseInt(this.her.ALM_HP.Avanzado.total)
            ],label: 'Avanzado'
          },{
            data: [
              parseInt(this.her.Microsoft_Office.Intermedio.total),
              parseInt(this.her.JIRA.Intermedio.total),
              parseInt(this.her.Confluence.Intermedio.total),
              parseInt(this.her.Visual_Studio.Intermedio.total),
              parseInt(this.her.Bamboo.Intermedio.total),
              parseInt(this.her.JIRA_Portafolio.Intermedio.total),
              parseInt(this.her.ALM_HP.Intermedio.total)
            ],label: 'Intermedio'
          },{
            data: [
              parseInt(this.her.Microsoft_Office.Basico.total),
              parseInt(this.her.JIRA.Basico.total),
              parseInt(this.her.Confluence.Basico.total),
              parseInt(this.her.Visual_Studio.Basico.total),
              parseInt(this.her.Bamboo.Basico.total),
              parseInt(this.her.JIRA_Portafolio.Basico.total),
              parseInt(this.her.ALM_HP.Basico.total)
            ],label: 'Basico'
          },{
            data: [
              parseInt(this.her.Microsoft_Office.Nocion.total),
              parseInt(this.her.JIRA.Nocion.total),
              parseInt(this.her.Confluence.Nocion.total),
              parseInt(this.her.Visual_Studio.Nocion.total),
              parseInt(this.her.Bamboo.Nocion.total),
              parseInt(this.her.JIRA_Portafolio.Nocion.total),
              parseInt(this.her.ALM_HP.Nocion.total)
            ],label: 'Nocion'
          },{
            data: [
              parseInt(this.her.Microsoft_Office.Ninguno.total),
              parseInt(this.her.JIRA.Ninguno.total),
              parseInt(this.her.Confluence.Ninguno.total),
              parseInt(this.her.Visual_Studio.Ninguno.total),
              parseInt(this.her.Bamboo.Ninguno.total),
              parseInt(this.her.JIRA_Portafolio.Ninguno.total),
              parseInt(this.her.ALM_HP.Ninguno.total)
            ],label: 'Ninguno'
          }
        ];
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerHerramientas2(){
    this._datos.obtenerHerramientas2().subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = true;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
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
        this.her2 = data;
        this.barChartDataHerramienta = [
          {
            data: [
              parseInt(this.her2.Android_Studio.Certificado.total),
              parseInt(this.her2.Balsamiq_Mockps.Certificado.total),
              parseInt(this.her2.Bitbucket.Certificado.total),
              parseInt(this.her2.Visio.Certificado.total),
              parseInt(this.her2.PhotoShop.Certificado.total),
              parseInt(this.her2.Ilustrator.Certificado.total),
              parseInt(this.her2.Microsoft_Project.Certificado.total)
            ],label: 'Certificado'
          },
          {
            data: [
              parseInt(this.her2.Android_Studio.Curso.total),
              parseInt(this.her2.Balsamiq_Mockps.Curso.total),
              parseInt(this.her2.Bitbucket.Curso.total),
              parseInt(this.her2.Visio.Curso.total),
              parseInt(this.her2.PhotoShop.Curso.total),
              parseInt(this.her2.Ilustrator.Curso.total),
              parseInt(this.her2.Microsoft_Project.Curso.total)
            ],label: 'Curso oficial sin certificacion'
          },
          {
            data: [
              parseInt(this.her2.Android_Studio.Avanzado.total),
              parseInt(this.her2.Balsamiq_Mockps.Avanzado.total),
              parseInt(this.her2.Bitbucket.Avanzado.total),
              parseInt(this.her2.Visio.Avanzado.total),
              parseInt(this.her2.PhotoShop.Avanzado.total),
              parseInt(this.her2.Ilustrator.Avanzado.total),
              parseInt(this.her2.Microsoft_Project.Avanzado.total)
            ],label: 'Avanzado'
          },{
            data: [
              parseInt(this.her2.Android_Studio.Intermedio.total),
              parseInt(this.her2.Balsamiq_Mockps.Intermedio.total),
              parseInt(this.her2.Bitbucket.Intermedio.total),
              parseInt(this.her2.Visio.Intermedio.total),
              parseInt(this.her2.PhotoShop.Intermedio.total),
              parseInt(this.her2.Ilustrator.Intermedio.total),
              parseInt(this.her2.Microsoft_Project.Intermedio.total)
            ],label: 'Intermedio'
          },{
            data: [
              parseInt(this.her2.Android_Studio.Basico.total),
              parseInt(this.her2.Balsamiq_Mockps.Basico.total),
              parseInt(this.her2.Bitbucket.Basico.total),
              parseInt(this.her2.Visio.Basico.total),
              parseInt(this.her2.PhotoShop.Basico.total),
              parseInt(this.her2.Ilustrator.Basico.total),
              parseInt(this.her2.Microsoft_Project.Basico.total)
            ],label: 'Basico'
          },{
            data: [
              parseInt(this.her2.Android_Studio.Nocion.total),
              parseInt(this.her2.Balsamiq_Mockps.Nocion.total),
              parseInt(this.her2.Bitbucket.Nocion.total),
              parseInt(this.her2.Visio.Nocion.total),
              parseInt(this.her2.PhotoShop.Nocion.total),
              parseInt(this.her2.Ilustrator.Nocion.total),
              parseInt(this.her2.Microsoft_Project.Nocion.total)
            ],label: 'Nocion'
          },{
            data: [
              parseInt(this.her2.Android_Studio.Ninguno.total),
              parseInt(this.her2.Balsamiq_Mockps.Ninguno.total),
              parseInt(this.her2.Bitbucket.Ninguno.total),
              parseInt(this.her2.Visio.Ninguno.total),
              parseInt(this.her2.PhotoShop.Ninguno.total),
              parseInt(this.her2.Ilustrator.Ninguno.total),
              parseInt(this.her2.Microsoft_Project.Ninguno.total)
            ],label: 'Ninguno'
          }
        ];
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerHerramientas3(){
    this._datos.obtenerHerramientas3().subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = true;
        this.herramienta4 = false;
        this.herramienta5 = false;
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
        this.her3 = data;
        this.barChartDataHerramienta = [
          {
            data: [
              parseInt(this.her3.SQL_Server.Certificado.total),
              parseInt(this.her3.Sublime_text.Certificado.total),
              parseInt(this.her3.Skype.Certificado.total),
              parseInt(this.her3.Team_Viewer.Certificado.total),
              parseInt(this.her3.GoTo_Meeting.Certificado.total),
              parseInt(this.her3.HipChat.Certificado.total),
              parseInt(this.her3.Appraisal_Assistant.Certificado.total)
            ],label: 'Certificado'
          },
          {
            data: [
              parseInt(this.her3.SQL_Server.Curso.total),
              parseInt(this.her3.Sublime_text.Curso.total),
              parseInt(this.her3.Skype.Curso.total),
              parseInt(this.her3.Team_Viewer.Curso.total),
              parseInt(this.her3.GoTo_Meeting.Curso.total),
              parseInt(this.her3.HipChat.Curso.total),
              parseInt(this.her3.Appraisal_Assistant.Curso.total)
            ],label: 'Curso oficial sin certificacion'
          },
          {
            data: [
              parseInt(this.her3.SQL_Server.Avanzado.total),
              parseInt(this.her3.Sublime_text.Avanzado.total),
              parseInt(this.her3.Skype.Avanzado.total),
              parseInt(this.her3.Team_Viewer.Avanzado.total),
              parseInt(this.her3.GoTo_Meeting.Avanzado.total),
              parseInt(this.her3.HipChat.Avanzado.total),
              parseInt(this.her3.Appraisal_Assistant.Avanzado.total)
            ],label: 'Avanzado'
          },{
            data: [
              parseInt(this.her3.SQL_Server.Intermedio.total),
              parseInt(this.her3.Sublime_text.Intermedio.total),
              parseInt(this.her3.Skype.Intermedio.total),
              parseInt(this.her3.Team_Viewer.Intermedio.total),
              parseInt(this.her3.GoTo_Meeting.Intermedio.total),
              parseInt(this.her3.HipChat.Intermedio.total),
              parseInt(this.her3.Appraisal_Assistant.Intermedio.total)
            ],label: 'Intermedio'
          },{
            data: [
              parseInt(this.her3.SQL_Server.Basico.total),
              parseInt(this.her3.Sublime_text.Basico.total),
              parseInt(this.her3.Skype.Basico.total),
              parseInt(this.her3.Team_Viewer.Basico.total),
              parseInt(this.her3.GoTo_Meeting.Basico.total),
              parseInt(this.her3.HipChat.Basico.total),
              parseInt(this.her3.Appraisal_Assistant.Basico.total)
            ],label: 'Basico'
          },{
            data: [
              parseInt(this.her3.SQL_Server.Nocion.total),
              parseInt(this.her3.Sublime_text.Nocion.total),
              parseInt(this.her3.Skype.Nocion.total),
              parseInt(this.her3.Team_Viewer.Nocion.total),
              parseInt(this.her3.GoTo_Meeting.Nocion.total),
              parseInt(this.her3.HipChat.Nocion.total),
              parseInt(this.her3.Appraisal_Assistant.Nocion.total)
            ],label: 'Nocion'
          },{
            data: [
              parseInt(this.her3.SQL_Server.Ninguno.total),
              parseInt(this.her3.Sublime_text.Ninguno.total),
              parseInt(this.her3.Skype.Ninguno.total),
              parseInt(this.her3.Team_Viewer.Ninguno.total),
              parseInt(this.her3.GoTo_Meeting.Ninguno.total),
              parseInt(this.her3.HipChat.Ninguno.total),
              parseInt(this.her3.Appraisal_Assistant.Ninguno.total)
            ],label: 'Ninguno'
          }
        ];
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerHerramientas4(){
    this._datos.obtenerHerramientas4().subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = true;
        this.herramienta5 = false;
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
        this.her4 = data;
        this.barChartDataHerramienta = [
          {
            data: [
              parseInt(this.her4.Dreamweaver.Certificado.total),
              parseInt(this.her4.Net_Beans.Certificado.total),
              parseInt(this.her4.Eclipse.Certificado.total),
              parseInt(this.her4.ABAP_Workbech.Certificado.total),
              parseInt(this.her4.ARIS.Certificado.total),
              parseInt(this.her4.Opera.Certificado.total),
              parseInt(this.her4.Bizagi.Certificado.total)
            ],label: 'Certificado'
          },
          {
            data: [
              parseInt(this.her4.Dreamweaver.Curso.total),
              parseInt(this.her4.Net_Beans.Curso.total),
              parseInt(this.her4.Eclipse.Curso.total),
              parseInt(this.her4.ABAP_Workbech.Curso.total),
              parseInt(this.her4.ARIS.Curso.total),
              parseInt(this.her4.Opera.Curso.total),
              parseInt(this.her4.Bizagi.Curso.total)
            ],label: 'Curso oficial sin certificacion'
          },
          {
            data: [
              parseInt(this.her4.Dreamweaver.Avanzado.total),
              parseInt(this.her4.Net_Beans.Avanzado.total),
              parseInt(this.her4.Eclipse.Avanzado.total),
              parseInt(this.her4.ABAP_Workbech.Avanzado.total),
              parseInt(this.her4.ARIS.Avanzado.total),
              parseInt(this.her4.Opera.Avanzado.total),
              parseInt(this.her4.Bizagi.Avanzado.total)
            ],label: 'Avanzado'
          },{
            data: [
              parseInt(this.her4.Dreamweaver.Intermedio.total),
              parseInt(this.her4.Net_Beans.Intermedio.total),
              parseInt(this.her4.Eclipse.Intermedio.total),
              parseInt(this.her4.ABAP_Workbech.Intermedio.total),
              parseInt(this.her4.ARIS.Intermedio.total),
              parseInt(this.her4.Opera.Intermedio.total),
              parseInt(this.her4.Bizagi.Intermedio.total)
            ],label: 'Intermedio'
          },{
            data: [
              parseInt(this.her4.Dreamweaver.Basico.total),
              parseInt(this.her4.Net_Beans.Basico.total),
              parseInt(this.her4.Eclipse.Basico.total),
              parseInt(this.her4.ABAP_Workbech.Basico.total),
              parseInt(this.her4.ARIS.Basico.total),
              parseInt(this.her4.Opera.Basico.total),
              parseInt(this.her4.Bizagi.Basico.total)
            ],label: 'Basico'
          },{
            data: [
              parseInt(this.her4.Dreamweaver.Nocion.total),
              parseInt(this.her4.Net_Beans.Nocion.total),
              parseInt(this.her4.Eclipse.Nocion.total),
              parseInt(this.her4.ABAP_Workbech.Nocion.total),
              parseInt(this.her4.ARIS.Nocion.total),
              parseInt(this.her4.Opera.Nocion.total),
              parseInt(this.her4.Bizagi.Nocion.total)
            ],label: 'Nocion'
          },{
            data: [
              parseInt(this.her4.Dreamweaver.Ninguno.total),
              parseInt(this.her4.Net_Beans.Ninguno.total),
              parseInt(this.her4.Eclipse.Ninguno.total),
              parseInt(this.her4.ABAP_Workbech.Ninguno.total),
              parseInt(this.her4.ARIS.Ninguno.total),
              parseInt(this.her4.Opera.Ninguno.total),
              parseInt(this.her4.Bizagi.Ninguno.total)
            ],label: 'Ninguno'
          }
        ];
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerHerramientas5(){
    this._datos.obtenerHerramientas5().subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = true;
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
        this.her5 = data;
        this.barChartDataHerramienta5 = [
          {
            data: [
              parseInt(this.her5.Microsoft_Project.Certificado.total),
              parseInt(this.her5.Excel.Certificado.total),
              parseInt(this.her5.Power_Point.Certificado.total),
              parseInt(this.her5.Word.Certificado.total),
            ],label: 'Certificado'
          },
          {
            data: [
              parseInt(this.her5.Microsoft_Project.Curso.total),
              parseInt(this.her5.Excel.Curso.total),
              parseInt(this.her5.Power_Point.Curso.total),
              parseInt(this.her5.Word.Curso.total)
            ],label: 'Curso oficial sin certificacion'
          },
          {
            data: [
              parseInt(this.her5.Microsoft_Project.Avanzado.total),
              parseInt(this.her5.Excel.Avanzado.total),
              parseInt(this.her5.Power_Point.Avanzado.total),
              parseInt(this.her5.Word.Avanzado.total)
            ],label: 'Avanzado'
          },{
            data: [
              parseInt(this.her5.Microsoft_Project.Intermedio.total),
              parseInt(this.her5.Excel.Intermedio.total),
              parseInt(this.her5.Power_Point.Intermedio.total),
              parseInt(this.her5.Word.Intermedio.total)
            ],label: 'Intermedio'
          },{
            data: [
              parseInt(this.her5.Microsoft_Project.Basico.total),
              parseInt(this.her5.Excel.Basico.total),
              parseInt(this.her5.Power_Point.Basico.total),
              parseInt(this.her5.Word.Basico.total)
            ],label: 'Basico'
          },{
            data: [
              parseInt(this.her5.Microsoft_Project.Nocion.total),
              parseInt(this.her5.Excel.Nocion.total),
              parseInt(this.her5.Power_Point.Nocion.total),
              parseInt(this.her5.Word.Nocion.total)
            ],label: 'Nocion'
          },{
            data: [
              parseInt(this.her5.Microsoft_Project.Ninguno.total),
              parseInt(this.her5.Excel.Ninguno.total),
              parseInt(this.her5.Power_Point.Ninguno.total),
              parseInt(this.her5.Word.Ninguno.total)
            ],label: 'Ninguno'
          }
        ];
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerLenguajes1(){
    this._datos.obtenerLenguajes1().subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
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
        this.len = data;
        this.barChartDataHerramienta = [
          {
            data: [
              parseInt(this.len.Java.Certificado.total),
              parseInt(this.len.C_plus_plus.Certificado.total),
              parseInt(this.len.PHP.Certificado.total),
              parseInt(this.len.iOS.Certificado.total),
              parseInt(this.len.C_Sharp.Certificado.total),
              parseInt(this.len.Ruby.Certificado.total),
              parseInt(this.len.SQL_1.Certificado.total)
            ],label: 'Certificado'
          },
          {
            data: [
              parseInt(this.len.Java.Curso.total),
              parseInt(this.len.C_plus_plus.Curso.total),
              parseInt(this.len.PHP.Curso.total),
              parseInt(this.len.iOS.Curso.total),
              parseInt(this.len.C_Sharp.Curso.total),
              parseInt(this.len.Ruby.Curso.total),
              parseInt(this.len.SQL_1.Curso.total)
            ],label: 'Curso oficial sin certificacion'
          },
          {
            data: [
              parseInt(this.len.Java.Avanzado.total),
              parseInt(this.len.C_plus_plus.Avanzado.total),
              parseInt(this.len.PHP.Avanzado.total),
              parseInt(this.len.iOS.Avanzado.total),
              parseInt(this.len.C_Sharp.Avanzado.total),
              parseInt(this.len.Ruby.Avanzado.total),
              parseInt(this.len.SQL_1.Avanzado.total)
            ],label: 'Avanzado'
          },{
            data: [
              parseInt(this.len.Java.Intermedio.total),
              parseInt(this.len.C_plus_plus.Intermedio.total),
              parseInt(this.len.PHP.Intermedio.total),
              parseInt(this.len.iOS.Intermedio.total),
              parseInt(this.len.C_Sharp.Intermedio.total),
              parseInt(this.len.Ruby.Intermedio.total),
              parseInt(this.len.SQL_1.Intermedio.total)
            ],label: 'Intermedio'
          },{
            data: [
              parseInt(this.len.Java.Basico.total),
              parseInt(this.len.C_plus_plus.Basico.total),
              parseInt(this.len.PHP.Basico.total),
              parseInt(this.len.iOS.Basico.total),
              parseInt(this.len.C_Sharp.Basico.total),
              parseInt(this.len.Ruby.Basico.total),
              parseInt(this.len.SQL_1.Basico.total)
            ],label: 'Basico'
          },{
            data: [
              parseInt(this.len.Java.Nocion.total),
              parseInt(this.len.C_plus_plus.Nocion.total),
              parseInt(this.len.PHP.Nocion.total),
              parseInt(this.len.iOS.Nocion.total),
              parseInt(this.len.C_Sharp.Nocion.total),
              parseInt(this.len.Ruby.Nocion.total),
              parseInt(this.len.SQL_1.Nocion.total)
            ],label: 'Nocion'
          },{
            data: [
              parseInt(this.len.Java.Ninguno.total),
              parseInt(this.len.C_plus_plus.Ninguno.total),
              parseInt(this.len.PHP.Ninguno.total),
              parseInt(this.len.iOS.Ninguno.total),
              parseInt(this.len.C_Sharp.Ninguno.total),
              parseInt(this.len.Ruby.Ninguno.total),
              parseInt(this.len.SQL_1.Ninguno.total)
            ],label: 'Ninguno'
          }
        ];
      },
      error => {
        console.log("ERROR");
        console.log(error);
      }
    );

  }

  obtenerLenguajes2(){
    this._datos.obtenerLenguajes2().subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
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
        this.len2 = data;
        this.barChartDataHerramienta = [
          {
            data: [
              parseInt(this.len2.Android.Certificado.total),
              parseInt(this.len2.ASP_NET.Certificado.total),
              parseInt(this.len2.HTML.Certificado.total),
              parseInt(this.len2.Java_Script.Certificado.total),
              parseInt(this.len2.Visual_Basic.Certificado.total),
              parseInt(this.len2.Phyton.Certificado.total),
              parseInt(this.len2.SAP_ABAP.Certificado.total)
            ],label: 'Certificado'
          },
          {
            data: [
              parseInt(this.len2.Android.Curso.total),
              parseInt(this.len2.ASP_NET.Curso.total),
              parseInt(this.len2.HTML.Curso.total),
              parseInt(this.len2.Java_Script.Curso.total),
              parseInt(this.len2.Visual_Basic.Curso.total),
              parseInt(this.len2.Phyton.Curso.total),
              parseInt(this.len2.SAP_ABAP.Curso.total)
            ],label: 'Curso oficial sin certificacion'
          },
          {
            data: [
              parseInt(this.len2.Android.Avanzado.total),
              parseInt(this.len2.ASP_NET.Avanzado.total),
              parseInt(this.len2.HTML.Avanzado.total),
              parseInt(this.len2.Java_Script.Avanzado.total),
              parseInt(this.len2.Visual_Basic.Avanzado.total),
              parseInt(this.len2.Phyton.Avanzado.total),
              parseInt(this.len2.SAP_ABAP.Avanzado.total)
            ],label: 'Avanzado'
          },{
            data: [
              parseInt(this.len2.Android.Intermedio.total),
              parseInt(this.len2.ASP_NET.Intermedio.total),
              parseInt(this.len2.HTML.Intermedio.total),
              parseInt(this.len2.Java_Script.Intermedio.total),
              parseInt(this.len2.Visual_Basic.Intermedio.total),
              parseInt(this.len2.Phyton.Intermedio.total),
              parseInt(this.len2.SAP_ABAP.Intermedio.total)
            ],label: 'Intermedio'
          },{
            data: [
              parseInt(this.len2.Android.Basico.total),
              parseInt(this.len2.ASP_NET.Basico.total),
              parseInt(this.len2.HTML.Basico.total),
              parseInt(this.len2.Java_Script.Basico.total),
              parseInt(this.len2.Visual_Basic.Basico.total),
              parseInt(this.len2.Phyton.Basico.total),
              parseInt(this.len2.SAP_ABAP.Basico.total)
            ],label: 'Basico'
          },{
            data: [
              parseInt(this.len2.Android.Nocion.total),
              parseInt(this.len2.ASP_NET.Nocion.total),
              parseInt(this.len2.HTML.Nocion.total),
              parseInt(this.len2.Java_Script.Nocion.total),
              parseInt(this.len2.Visual_Basic.Nocion.total),
              parseInt(this.len2.Phyton.Nocion.total),
              parseInt(this.len2.SAP_ABAP.Nocion.total)
            ],label: 'Nocion'
          },{
            data: [
              parseInt(this.len2.Android.Ninguno.total),
              parseInt(this.len2.ASP_NET.Ninguno.total),
              parseInt(this.len2.HTML.Ninguno.total),
              parseInt(this.len2.Java_Script.Ninguno.total),
              parseInt(this.len2.Visual_Basic.Ninguno.total),
              parseInt(this.len2.Phyton.Ninguno.total),
              parseInt(this.len2.SAP_ABAP.Ninguno.total)
            ],label: 'Ninguno'
          }
        ];
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerLenguajes3(){
    this._datos.obtenerLenguajes3().subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
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
        this.len3 = data;
        this.barChartDataHerramienta = [
          {
            data: [
              parseInt(this.len3.Oracle.Certificado.total),
              parseInt(this.len3.MySQL.Certificado.total),
              parseInt(this.len3.Postgre.Certificado.total),
              parseInt(this.len3.JSF_2_0.Certificado.total),
              parseInt(this.len3.Big_Data.Certificado.total),
              parseInt(this.len3.Hadoop.Certificado.total),
              parseInt(this.len3.SPARK.Certificado.total)
            ],label: 'Certificado'
          },
          {
            data: [
              parseInt(this.len3.Oracle.Curso.total),
              parseInt(this.len3.MySQL.Curso.total),
              parseInt(this.len3.Postgre.Curso.total),
              parseInt(this.len3.JSF_2_0.Curso.total),
              parseInt(this.len3.Big_Data.Curso.total),
              parseInt(this.len3.Hadoop.Curso.total),
              parseInt(this.len3.SPARK.Curso.total)
            ],label: 'Curso oficial sin certificacion'
          },
          {
            data: [
              parseInt(this.len3.Oracle.Avanzado.total),
              parseInt(this.len3.MySQL.Avanzado.total),
              parseInt(this.len3.Postgre.Avanzado.total),
              parseInt(this.len3.JSF_2_0.Avanzado.total),
              parseInt(this.len3.Big_Data.Avanzado.total),
              parseInt(this.len3.Hadoop.Avanzado.total),
              parseInt(this.len3.SPARK.Avanzado.total)
            ],label: 'Avanzado'
          },{
            data: [
              parseInt(this.len3.Oracle.Intermedio.total),
              parseInt(this.len3.MySQL.Intermedio.total),
              parseInt(this.len3.Postgre.Intermedio.total),
              parseInt(this.len3.JSF_2_0.Intermedio.total),
              parseInt(this.len3.Big_Data.Intermedio.total),
              parseInt(this.len3.Hadoop.Intermedio.total),
              parseInt(this.len3.SPARK.Intermedio.total)
            ],label: 'Intermedio'
          },{
            data: [
              parseInt(this.len3.Oracle.Basico.total),
              parseInt(this.len3.MySQL.Basico.total),
              parseInt(this.len3.Postgre.Basico.total),
              parseInt(this.len3.JSF_2_0.Basico.total),
              parseInt(this.len3.Big_Data.Basico.total),
              parseInt(this.len3.Hadoop.Basico.total),
              parseInt(this.len3.SPARK.Basico.total)
            ],label: 'Basico'
          },{
            data: [
              parseInt(this.len3.Oracle.Nocion.total),
              parseInt(this.len3.MySQL.Nocion.total),
              parseInt(this.len3.Postgre.Nocion.total),
              parseInt(this.len3.JSF_2_0.Nocion.total),
              parseInt(this.len3.Big_Data.Nocion.total),
              parseInt(this.len3.Hadoop.Nocion.total),
              parseInt(this.len3.SPARK.Nocion.total)
            ],label: 'Nocion'
          },{
            data: [
              parseInt(this.len3.Oracle.Ninguno.total),
              parseInt(this.len3.MySQL.Ninguno.total),
              parseInt(this.len3.Postgre.Ninguno.total),
              parseInt(this.len3.JSF_2_0.Ninguno.total),
              parseInt(this.len3.Big_Data.Ninguno.total),
              parseInt(this.len3.Hadoop.Ninguno.total),
              parseInt(this.len3.SPARK.Ninguno.total)
            ],label: 'Ninguno'
          }
        ];
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerLenguajes4(){
    this._datos.obtenerLenguajes4().subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
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
        this.len4 = data;
        this.barChartDataHerramienta = [
          {
            data: [
              parseInt(this.len4.Google_Maps.Certificado.total),
              parseInt(this.len4.MapReduce.Certificado.total),
              parseInt(this.len4.Tomcat.Certificado.total),
              parseInt(this.len4.Weblogic.Certificado.total),
              parseInt(this.len4.ISS.Certificado.total),
              parseInt(this.len4.BlockChain.Certificado.total),
              parseInt(this.len4.Wordpress.Certificado.total)
            ],label: 'Certificado'
          },
          {
            data: [
              parseInt(this.len4.Google_Maps.Curso.total),
              parseInt(this.len4.MapReduce.Curso.total),
              parseInt(this.len4.Tomcat.Curso.total),
              parseInt(this.len4.Weblogic.Curso.total),
              parseInt(this.len4.ISS.Curso.total),
              parseInt(this.len4.BlockChain.Curso.total),
              parseInt(this.len4.Wordpress.Curso.total)
            ],label: 'Curso oficial sin certificacion'
          },
          {
            data: [
              parseInt(this.len4.Google_Maps.Avanzado.total),
              parseInt(this.len4.MapReduce.Avanzado.total),
              parseInt(this.len4.Tomcat.Avanzado.total),
              parseInt(this.len4.Weblogic.Avanzado.total),
              parseInt(this.len4.ISS.Avanzado.total),
              parseInt(this.len4.BlockChain.Avanzado.total),
              parseInt(this.len4.Wordpress.Avanzado.total)
            ],label: 'Avanzado'
          },{
            data: [
              parseInt(this.len4.Google_Maps.Intermedio.total),
              parseInt(this.len4.MapReduce.Intermedio.total),
              parseInt(this.len4.Tomcat.Intermedio.total),
              parseInt(this.len4.Weblogic.Intermedio.total),
              parseInt(this.len4.ISS.Intermedio.total),
              parseInt(this.len4.BlockChain.Intermedio.total),
              parseInt(this.len4.Wordpress.Intermedio.total)
            ],label: 'Intermedio'
          },{
            data: [
              parseInt(this.len4.Google_Maps.Basico.total),
              parseInt(this.len4.MapReduce.Basico.total),
              parseInt(this.len4.Tomcat.Basico.total),
              parseInt(this.len4.Weblogic.Basico.total),
              parseInt(this.len4.ISS.Basico.total),
              parseInt(this.len4.BlockChain.Basico.total),
              parseInt(this.len4.Wordpress.Basico.total)
            ],label: 'Basico'
          },{
            data: [
              parseInt(this.len4.Google_Maps.Nocion.total),
              parseInt(this.len4.MapReduce.Nocion.total),
              parseInt(this.len4.Tomcat.Nocion.total),
              parseInt(this.len4.Weblogic.Nocion.total),
              parseInt(this.len4.ISS.Nocion.total),
              parseInt(this.len4.BlockChain.Nocion.total),
              parseInt(this.len4.Wordpress.Nocion.total)
            ],label: 'Nocion'
          },{
            data: [
              parseInt(this.len4.Google_Maps.Ninguno.total),
              parseInt(this.len4.MapReduce.Ninguno.total),
              parseInt(this.len4.Tomcat.Ninguno.total),
              parseInt(this.len4.Weblogic.Ninguno.total),
              parseInt(this.len4.ISS.Ninguno.total),
              parseInt(this.len4.BlockChain.Ninguno.total),
              parseInt(this.len4.Wordpress.Ninguno.total)
            ],label: 'Ninguno'
          }
        ];
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerLenguajes5(){
    this._datos.obtenerLenguajes5().subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
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
        this.len5 = data;
        this.barChartDataHerramienta = [
          {
            data: [
              parseInt(this.len5.Joomla.Certificado.total),
              parseInt(this.len5.Sharepoint.Certificado.total),
              parseInt(this.len5.Hybernate.Certificado.total),
              parseInt(this.len5.Angular.Certificado.total),
              parseInt(this.len5.Ember.Certificado.total),
              parseInt(this.len5.JSON.Certificado.total),
              parseInt(this.len5.IONIC.Certificado.total)
            ],label: 'Certificado'
          },
          {
            data: [
              parseInt(this.len5.Joomla.Curso.total),
              parseInt(this.len5.Sharepoint.Curso.total),
              parseInt(this.len5.Hybernate.Curso.total),
              parseInt(this.len5.Angular.Curso.total),
              parseInt(this.len5.Ember.Curso.total),
              parseInt(this.len5.JSON.Curso.total),
              parseInt(this.len5.IONIC.Curso.total)
            ],label: 'Curso oficial sin certificacion'
          },
          {
            data: [
              parseInt(this.len5.Joomla.Avanzado.total),
              parseInt(this.len5.Sharepoint.Avanzado.total),
              parseInt(this.len5.Hybernate.Avanzado.total),
              parseInt(this.len5.Angular.Avanzado.total),
              parseInt(this.len5.Ember.Avanzado.total),
              parseInt(this.len5.JSON.Avanzado.total),
              parseInt(this.len5.IONIC.Avanzado.total)
            ],label: 'Avanzado'
          },{
            data: [
              parseInt(this.len5.Joomla.Intermedio.total),
              parseInt(this.len5.Sharepoint.Intermedio.total),
              parseInt(this.len5.Hybernate.Intermedio.total),
              parseInt(this.len5.Angular.Intermedio.total),
              parseInt(this.len5.Ember.Intermedio.total),
              parseInt(this.len5.JSON.Intermedio.total),
              parseInt(this.len5.IONIC.Intermedio.total)
            ],label: 'Intermedio'
          },{
            data: [
              parseInt(this.len5.Joomla.Basico.total),
              parseInt(this.len5.Sharepoint.Basico.total),
              parseInt(this.len5.Hybernate.Basico.total),
              parseInt(this.len5.Angular.Basico.total),
              parseInt(this.len5.Ember.Basico.total),
              parseInt(this.len5.JSON.Basico.total),
              parseInt(this.len5.IONIC.Basico.total)
            ],label: 'Basico'
          },{
            data: [
              parseInt(this.len5.Joomla.Nocion.total),
              parseInt(this.len5.Sharepoint.Nocion.total),
              parseInt(this.len5.Hybernate.Nocion.total),
              parseInt(this.len5.Angular.Nocion.total),
              parseInt(this.len5.Ember.Nocion.total),
              parseInt(this.len5.JSON.Nocion.total),
              parseInt(this.len5.IONIC.Nocion.total)
            ],label: 'Nocion'
          },{
            data: [
              parseInt(this.len5.Joomla.Ninguno.total),
              parseInt(this.len5.Sharepoint.Ninguno.total),
              parseInt(this.len5.Hybernate.Ninguno.total),
              parseInt(this.len5.Angular.Ninguno.total),
              parseInt(this.len5.Ember.Ninguno.total),
              parseInt(this.len5.JSON.Ninguno.total),
              parseInt(this.len5.IONIC.Ninguno.total)
            ],label: 'Ninguno'
          }
        ];
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerLenguajes6(){
    this._datos.obtenerLenguajes6().subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
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
        this.len6 = data;
        this.barChartDataHerramienta6 = [
          {
            data: [
              parseInt(this.len6.SPRING.Certificado.total),
              parseInt(this.len6.Google_AD_Words.Certificado.total),
              parseInt(this.len6.Google_Analitics.Certificado.total)
            ],label: 'Certificado'
          },
          {
            data: [
              parseInt(this.len6.SPRING.Curso.total),
              parseInt(this.len6.Google_AD_Words.Curso.total),
              parseInt(this.len6.Google_Analitics.Curso.total)
            ],label: 'Curso oficial sin certificacion'
          },
          {
            data: [
              parseInt(this.len6.SPRING.Avanzado.total),
              parseInt(this.len6.Google_AD_Words.Avanzado.total),
              parseInt(this.len6.Google_Analitics.Avanzado.total)
            ],label: 'Avanzado'
          },{
            data: [
              parseInt(this.len6.SPRING.Intermedio.total),
              parseInt(this.len6.Google_AD_Words.Intermedio.total),
              parseInt(this.len6.Google_Analitics.Intermedio.total)
            ],label: 'Intermedio'
          },{
            data: [
              parseInt(this.len6.SPRING.Basico.total),
              parseInt(this.len6.Google_AD_Words.Basico.total),
              parseInt(this.len6.Google_Analitics.Basico.total)
            ],label: 'Basico'
          },{
            data: [
              parseInt(this.len6.SPRING.Nocion.total),
              parseInt(this.len6.Google_AD_Words.Nocion.total),
              parseInt(this.len6.Google_Analitics.Nocion.total)
            ],label: 'Nocion'
          },{
            data: [
              parseInt(this.len6.SPRING.Ninguno.total),
              parseInt(this.len6.Google_AD_Words.Ninguno.total),
              parseInt(this.len6.Google_Analitics.Ninguno.total)
            ],label: 'Ninguno'
          }
        ];
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerSoluciones(){
    this._datos.obtenerSoluciones().subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
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
        this.sol = data;
        this.barChartDataSolucion = [
          {
            data: [
              parseInt(this.sol.Soluciones_en_la_nube_Amazon.Certificado.total),
              parseInt(this.sol.Soluciones_en_la_nube_Azure.Certificado.total)
            ],label: 'Certificado'
          },
          {
            data: [
              parseInt(this.sol.Soluciones_en_la_nube_Amazon.Curso.total),
              parseInt(this.sol.Soluciones_en_la_nube_Azure.Curso.total)
            ],label: 'Curso oficial sin certificacion'
          },
          {
            data: [
              parseInt(this.sol.Soluciones_en_la_nube_Amazon.Avanzado.total),
              parseInt(this.sol.Soluciones_en_la_nube_Azure.Avanzado.total)
            ],label: 'Avanzado'
          },{
            data: [
              parseInt(this.sol.Soluciones_en_la_nube_Amazon.Intermedio.total),
              parseInt(this.sol.Soluciones_en_la_nube_Azure.Intermedio.total)
            ],label: 'Intermedio'
          },{
            data: [
              parseInt(this.sol.Soluciones_en_la_nube_Amazon.Basico.total),
              parseInt(this.sol.Soluciones_en_la_nube_Azure.Basico.total)
            ],label: 'Basico'
          },{
            data: [
              parseInt(this.sol.Soluciones_en_la_nube_Amazon.Nocion.total),
              parseInt(this.sol.Soluciones_en_la_nube_Azure.Nocion.total)
            ],label: 'Nocion'
          },{
            data: [
              parseInt(this.sol.Soluciones_en_la_nube_Amazon.Ninguno.total),
              parseInt(this.sol.Soluciones_en_la_nube_Azure.Ninguno.total)
            ],label: 'Ninguno'
          }
        ];
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerCertificaciones1(){
    this._datos.obtenerCertificaciones1().subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
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
        this.cer1 = data;
        this.barChartDataCertificacion1 = [
          {
            data: [
              parseInt(this.cer1.Scrum_Master.Certificado.total),
              parseInt(this.cer1.Scrum_Team_Member.Certificado.total),
              parseInt(this.cer1.Scrum_Product_Owner.Certificado.total),
              parseInt(this.cer1.ITIL_Fundamentos.Certificado.total),
              parseInt(this.cer1.ITIL_Intermedio.Certificado.total),
              parseInt(this.cer1.ITIL_Expert.Certificado.total),
              parseInt(this.cer1.Six_Sigma_Black_Belt.Certificado.total)
            ],label: 'Certificado'
          },
          {
            data: [
              parseInt(this.cer1.Scrum_Master.Curso.total),
              parseInt(this.cer1.Scrum_Team_Member.Curso.total),
              parseInt(this.cer1.Scrum_Product_Owner.Curso.total),
              parseInt(this.cer1.ITIL_Fundamentos.Curso.total),
              parseInt(this.cer1.ITIL_Intermedio.Curso.total),
              parseInt(this.cer1.ITIL_Expert.Curso.total),
              parseInt(this.cer1.Six_Sigma_Black_Belt.Curso.total)
            ],label: 'Curso oficial sin certificacion'
          },
          {
            data: [
              parseInt(this.cer1.Scrum_Master.Avanzado.total),
              parseInt(this.cer1.Scrum_Team_Member.Avanzado.total),
              parseInt(this.cer1.Scrum_Product_Owner.Avanzado.total),
              parseInt(this.cer1.ITIL_Fundamentos.Avanzado.total),
              parseInt(this.cer1.ITIL_Intermedio.Avanzado.total),
              parseInt(this.cer1.ITIL_Expert.Avanzado.total),
              parseInt(this.cer1.Six_Sigma_Black_Belt.Avanzado.total)
            ],label: 'Avanzado'
          },{
            data: [
              parseInt(this.cer1.Scrum_Master.Intermedio.total),
              parseInt(this.cer1.Scrum_Team_Member.Intermedio.total),
              parseInt(this.cer1.Scrum_Product_Owner.Intermedio.total),
              parseInt(this.cer1.ITIL_Fundamentos.Intermedio.total),
              parseInt(this.cer1.ITIL_Intermedio.Intermedio.total),
              parseInt(this.cer1.ITIL_Expert.Intermedio.total),
              parseInt(this.cer1.Six_Sigma_Black_Belt.Intermedio.total)
            ],label: 'Intermedio'
          },{
            data: [
              parseInt(this.cer1.Scrum_Master.Basico.total),
              parseInt(this.cer1.Scrum_Team_Member.Basico.total),
              parseInt(this.cer1.Scrum_Product_Owner.Basico.total),
              parseInt(this.cer1.ITIL_Fundamentos.Basico.total),
              parseInt(this.cer1.ITIL_Intermedio.Basico.total),
              parseInt(this.cer1.ITIL_Expert.Basico.total),
              parseInt(this.cer1.Six_Sigma_Black_Belt.Basico.total)
            ],label: 'Basico'
          },{
            data: [
              parseInt(this.cer1.Scrum_Master.Nocion.total),
              parseInt(this.cer1.Scrum_Team_Member.Nocion.total),
              parseInt(this.cer1.Scrum_Product_Owner.Nocion.total),
              parseInt(this.cer1.ITIL_Fundamentos.Nocion.total),
              parseInt(this.cer1.ITIL_Intermedio.Nocion.total),
              parseInt(this.cer1.ITIL_Expert.Nocion.total),
              parseInt(this.cer1.Six_Sigma_Black_Belt.Nocion.total)
            ],label: 'Nocion'
          },{
            data: [
              parseInt(this.cer1.Scrum_Master.Ninguno.total),
              parseInt(this.cer1.Scrum_Team_Member.Ninguno.total),
              parseInt(this.cer1.Scrum_Product_Owner.Ninguno.total),
              parseInt(this.cer1.ITIL_Fundamentos.Ninguno.total),
              parseInt(this.cer1.ITIL_Intermedio.Ninguno.total),
              parseInt(this.cer1.ITIL_Expert.Ninguno.total),
              parseInt(this.cer1.Six_Sigma_Black_Belt.Ninguno.total)
            ],label: 'Ninguno'
          }
        ];
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerCertificaciones2(){
    this._datos.obtenerCertificaciones2().subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
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
        this.cer2 = data;
        this.barChartDataCertificacion1 = [
          {
            data: [
              parseInt(this.cer2.PMP.Certificado.total),
              parseInt(this.cer2.ISTQB.Certificado.total),
              parseInt(this.cer2.CMMI_Oficial.Certificado.total),
              parseInt(this.cer2.Oracle_Certified_Profesional_Java_SE.Certificado.total),
              parseInt(this.cer2.ISO_27000.Certificado.total),
              parseInt(this.cer2.ISO_20000.Certificado.total),
              parseInt(this.cer2.COBIT.Certificado.total)
            ],label: 'Certificado'
          },
          {
            data: [
              parseInt(this.cer2.PMP.Curso.total),
              parseInt(this.cer2.ISTQB.Curso.total),
              parseInt(this.cer2.CMMI_Oficial.Curso.total),
              parseInt(this.cer2.Oracle_Certified_Profesional_Java_SE.Curso.total),
              parseInt(this.cer2.ISO_27000.Curso.total),
              parseInt(this.cer2.ISO_20000.Curso.total),
              parseInt(this.cer2.COBIT.Curso.total)
            ],label: 'Curso oficial sin certificacion'
          },
          {
            data: [
              parseInt(this.cer2.PMP.Avanzado.total),
              parseInt(this.cer2.ISTQB.Avanzado.total),
              parseInt(this.cer2.CMMI_Oficial.Avanzado.total),
              parseInt(this.cer2.Oracle_Certified_Profesional_Java_SE.Avanzado.total),
              parseInt(this.cer2.ISO_27000.Avanzado.total),
              parseInt(this.cer2.ISO_20000.Avanzado.total),
              parseInt(this.cer2.COBIT.Avanzado.total)
            ],label: 'Avanzado'
          },{
            data: [
              parseInt(this.cer2.PMP.Intermedio.total),
              parseInt(this.cer2.ISTQB.Intermedio.total),
              parseInt(this.cer2.CMMI_Oficial.Intermedio.total),
              parseInt(this.cer2.Oracle_Certified_Profesional_Java_SE.Intermedio.total),
              parseInt(this.cer2.ISO_27000.Intermedio.total),
              parseInt(this.cer2.ISO_20000.Intermedio.total),
              parseInt(this.cer2.COBIT.Intermedio.total)
            ],label: 'Intermedio'
          },{
            data: [
              parseInt(this.cer2.PMP.Basico.total),
              parseInt(this.cer2.ISTQB.Basico.total),
              parseInt(this.cer2.CMMI_Oficial.Basico.total),
              parseInt(this.cer2.Oracle_Certified_Profesional_Java_SE.Basico.total),
              parseInt(this.cer2.ISO_27000.Basico.total),
              parseInt(this.cer2.ISO_20000.Basico.total),
              parseInt(this.cer2.COBIT.Basico.total)
            ],label: 'Basico'
          },{
            data: [
              parseInt(this.cer2.PMP.Nocion.total),
              parseInt(this.cer2.ISTQB.Nocion.total),
              parseInt(this.cer2.CMMI_Oficial.Nocion.total),
              parseInt(this.cer2.Oracle_Certified_Profesional_Java_SE.Nocion.total),
              parseInt(this.cer2.ISO_27000.Nocion.total),
              parseInt(this.cer2.ISO_20000.Nocion.total),
              parseInt(this.cer2.COBIT.Nocion.total)
            ],label: 'Nocion'
          },{
            data: [
              parseInt(this.cer2.PMP.Ninguno.total),
              parseInt(this.cer2.ISTQB.Ninguno.total),
              parseInt(this.cer2.CMMI_Oficial.Ninguno.total),
              parseInt(this.cer2.Oracle_Certified_Profesional_Java_SE.Ninguno.total),
              parseInt(this.cer2.ISO_27000.Ninguno.total),
              parseInt(this.cer2.ISO_20000.Ninguno.total),
              parseInt(this.cer2.COBIT.Ninguno.total)
            ],label: 'Ninguno'
          }
        ];
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerCertificaciones3(){
    this._datos.obtenerCertificaciones2().subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
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
        this.cer3 = data;
        this.barChartDataCertificacion1 = [
          {
            data: [
              parseInt(this.cer3.CRISC.Certificado.total),
              parseInt(this.cer3.GRCP.Certificado.total),
              parseInt(this.cer3.ISO_9000.Certificado.total),
              parseInt(this.cer3.Prince.Certificado.total),
              parseInt(this.cer3.COSO.Certificado.total),
              parseInt(this.cer3.SOX.Certificado.total),
              parseInt(this.cer3.BPM.Certificado.total)
            ],label: 'Certificado'
          },
          {
            data: [
              parseInt(this.cer3.CRISC.Curso.total),
              parseInt(this.cer3.GRCP.Curso.total),
              parseInt(this.cer3.ISO_9000.Curso.total),
              parseInt(this.cer3.Prince.Curso.total),
              parseInt(this.cer3.COSO.Curso.total),
              parseInt(this.cer3.SOX.Curso.total),
              parseInt(this.cer3.BPM.Curso.total)
            ],label: 'Curso oficial sin certificacion'
          },
          {
            data: [
              parseInt(this.cer3.CRISC.Avanzado.total),
              parseInt(this.cer3.GRCP.Avanzado.total),
              parseInt(this.cer3.ISO_9000.Avanzado.total),
              parseInt(this.cer3.Prince.Avanzado.total),
              parseInt(this.cer3.COSO.Avanzado.total),
              parseInt(this.cer3.SOX.Avanzado.total),
              parseInt(this.cer3.BPM.Avanzado.total)
            ],label: 'Avanzado'
          },{
            data: [
              parseInt(this.cer3.CRISC.Intermedio.total),
              parseInt(this.cer3.GRCP.Intermedio.total),
              parseInt(this.cer3.ISO_9000.Intermedio.total),
              parseInt(this.cer3.Prince.Intermedio.total),
              parseInt(this.cer3.COSO.Intermedio.total),
              parseInt(this.cer3.SOX.Intermedio.total),
              parseInt(this.cer3.BPM.Intermedio.total)
            ],label: 'Intermedio'
          },{
            data: [
              parseInt(this.cer3.CRISC.Basico.total),
              parseInt(this.cer3.GRCP.Basico.total),
              parseInt(this.cer3.ISO_9000.Basico.total),
              parseInt(this.cer3.Prince.Basico.total),
              parseInt(this.cer3.COSO.Basico.total),
              parseInt(this.cer3.SOX.Basico.total),
              parseInt(this.cer3.BPM.Basico.total)
            ],label: 'Basico'
          },{
            data: [
              parseInt(this.cer3.CRISC.Nocion.total),
              parseInt(this.cer3.GRCP.Nocion.total),
              parseInt(this.cer3.ISO_9000.Nocion.total),
              parseInt(this.cer3.Prince.Nocion.total),
              parseInt(this.cer3.COSO.Nocion.total),
              parseInt(this.cer3.SOX.Nocion.total),
              parseInt(this.cer3.BPM.Nocion.total)
            ],label: 'Nocion'
          },{
            data: [
              parseInt(this.cer3.CRISC.Ninguno.total),
              parseInt(this.cer3.GRCP.Ninguno.total),
              parseInt(this.cer3.ISO_9000.Ninguno.total),
              parseInt(this.cer3.Prince.Ninguno.total),
              parseInt(this.cer3.COSO.Ninguno.total),
              parseInt(this.cer3.SOX.Ninguno.total),
              parseInt(this.cer3.BPM.Ninguno.total)
            ],label: 'Ninguno'
          }
        ];
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerMetodologias1(){
    this._datos.obtenerMetodologias1().subscribe(
      data => {
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
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
        this.met1 = data;
        this.barChartDataCertificacion1 = [
          {
            data: [
              parseInt(this.met1.Metodologias_ISTQB.Certificado.total),
              parseInt(this.met1.Metodologias_Agile_Testing.Certificado.total),
              parseInt(this.met1.Metodologias_ISEB.Certificado.total),
              parseInt(this.met1.Metodologias_CAST.Certificado.total),
              parseInt(this.met1.Metodologias_CSTE.Certificado.total),
              parseInt(this.met1.Metodologias_CSQA.Certificado.total),
              parseInt(this.met1.Metodologias_TMap.Certificado.total)
            ],label: 'Certificado'
          },
          {
            data: [
              parseInt(this.met1.Metodologias_ISTQB.Curso.total),
              parseInt(this.met1.Metodologias_Agile_Testing.Curso.total),
              parseInt(this.met1.Metodologias_ISEB.Curso.total),
              parseInt(this.met1.Metodologias_CAST.Curso.total),
              parseInt(this.met1.Metodologias_CSTE.Curso.total),
              parseInt(this.met1.Metodologias_CSQA.Curso.total),
              parseInt(this.met1.Metodologias_TMap.Curso.total)
            ],label: 'Curso oficial sin certificacion'
          },
          {
            data: [
              parseInt(this.met1.Metodologias_ISTQB.Avanzado.total),
              parseInt(this.met1.Metodologias_Agile_Testing.Avanzado.total),
              parseInt(this.met1.Metodologias_ISEB.Avanzado.total),
              parseInt(this.met1.Metodologias_CAST.Avanzado.total),
              parseInt(this.met1.Metodologias_CSTE.Avanzado.total),
              parseInt(this.met1.Metodologias_CSQA.Avanzado.total),
              parseInt(this.met1.Metodologias_TMap.Avanzado.total)
            ],label: 'Avanzado'
          },{
            data: [
              parseInt(this.met1.Metodologias_ISTQB.Intermedio.total),
              parseInt(this.met1.Metodologias_Agile_Testing.Intermedio.total),
              parseInt(this.met1.Metodologias_ISEB.Intermedio.total),
              parseInt(this.met1.Metodologias_CAST.Intermedio.total),
              parseInt(this.met1.Metodologias_CSTE.Intermedio.total),
              parseInt(this.met1.Metodologias_CSQA.Intermedio.total),
              parseInt(this.met1.Metodologias_TMap.Intermedio.total)
            ],label: 'Intermedio'
          },{
            data: [
              parseInt(this.met1.Metodologias_ISTQB.Basico.total),
              parseInt(this.met1.Metodologias_Agile_Testing.Basico.total),
              parseInt(this.met1.Metodologias_ISEB.Basico.total),
              parseInt(this.met1.Metodologias_CAST.Basico.total),
              parseInt(this.met1.Metodologias_CSTE.Basico.total),
              parseInt(this.met1.Metodologias_CSQA.Basico.total),
              parseInt(this.met1.Metodologias_TMap.Basico.total)
            ],label: 'Basico'
          },{
            data: [
              parseInt(this.met1.Metodologias_ISTQB.Nocion.total),
              parseInt(this.met1.Metodologias_Agile_Testing.Nocion.total),
              parseInt(this.met1.Metodologias_ISEB.Nocion.total),
              parseInt(this.met1.Metodologias_CAST.Nocion.total),
              parseInt(this.met1.Metodologias_CSTE.Nocion.total),
              parseInt(this.met1.Metodologias_CSQA.Nocion.total),
              parseInt(this.met1.Metodologias_TMap.Nocion.total)
            ],label: 'Nocion'
          },{
            data: [
              parseInt(this.met1.Metodologias_ISTQB.Ninguno.total),
              parseInt(this.met1.Metodologias_Agile_Testing.Ninguno.total),
              parseInt(this.met1.Metodologias_ISEB.Ninguno.total),
              parseInt(this.met1.Metodologias_CAST.Ninguno.total),
              parseInt(this.met1.Metodologias_CSTE.Ninguno.total),
              parseInt(this.met1.Metodologias_CSQA.Ninguno.total),
              parseInt(this.met1.Metodologias_TMap.Ninguno.total)
            ],label: 'Ninguno'
          }
        ];
      },
      error => {
        console.log(error);
      }
    );

  }

  obtenerMetodologias2(){
    this._datos.obtenerMetodologias2().subscribe(
      data => {
        console.log(data);
        this.idioma = false;
        this.herramienta1 = false;
        this.herramienta2 = false;
        this.herramienta3 = false;
        this.herramienta4 = false;
        this.herramienta5 = false;
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
        this.met2 = data;
        this.barChartDataMetodologia = [
          {
            data: [
              parseInt(this.met2.Metodologias_TMMi.Certificado.total),
              parseInt(this.met2.Metodologias_CMMI_PPQA_VER_VAL.Certificado.total),
              parseInt(this.met2.Metodologias_SCENT.Certificado.total),
              parseInt(this.met2.Metodologias_AGEDIS.Certificado.total),
              parseInt(this.met2.Metodologias_ITIL_QA.Certificado.total)
            ],label: 'Certificado'
          },
          {
            data: [
              parseInt(this.met2.Metodologias_TMMi.Curso.total),
              parseInt(this.met2.Metodologias_CMMI_PPQA_VER_VAL.Curso.total),
              parseInt(this.met2.Metodologias_SCENT.Curso.total),
              parseInt(this.met2.Metodologias_AGEDIS.Curso.total),
              parseInt(this.met2.Metodologias_ITIL_QA.Curso.total)
            ],label: 'Curso oficial sin certificacion'
          },
          {
            data: [
              parseInt(this.met2.Metodologias_TMMi.Avanzado.total),
              parseInt(this.met2.Metodologias_CMMI_PPQA_VER_VAL.Avanzado.total),
              parseInt(this.met2.Metodologias_SCENT.Avanzado.total),
              parseInt(this.met2.Metodologias_AGEDIS.Avanzado.total),
              parseInt(this.met2.Metodologias_ITIL_QA.Avanzado.total)
            ],label: 'Avanzado'
          },{
            data: [
              parseInt(this.met2.Metodologias_TMMi.Intermedio.total),
              parseInt(this.met2.Metodologias_CMMI_PPQA_VER_VAL.Intermedio.total),
              parseInt(this.met2.Metodologias_SCENT.Intermedio.total),
              parseInt(this.met2.Metodologias_AGEDIS.Intermedio.total),
              parseInt(this.met2.Metodologias_ITIL_QA.Intermedio.total)
            ],label: 'Intermedio'
          },{
            data: [
              parseInt(this.met2.Metodologias_TMMi.Basico.total),
              parseInt(this.met2.Metodologias_CMMI_PPQA_VER_VAL.Basico.total),
              parseInt(this.met2.Metodologias_SCENT.Basico.total),
              parseInt(this.met2.Metodologias_AGEDIS.Basico.total),
              parseInt(this.met2.Metodologias_ITIL_QA.Basico.total)
            ],label: 'Basico'
          },{
            data: [
              parseInt(this.met2.Metodologias_TMMi.Nocion.total),
              parseInt(this.met2.Metodologias_CMMI_PPQA_VER_VAL.Nocion.total),
              parseInt(this.met2.Metodologias_SCENT.Nocion.total),
              parseInt(this.met2.Metodologias_AGEDIS.Nocion.total),
              parseInt(this.met2.Metodologias_ITIL_QA.Nocion.total)
            ],label: 'Nocion'
          },{
            data: [
              parseInt(this.met2.Metodologias_TMMi.Ninguno.total),
              parseInt(this.met2.Metodologias_CMMI_PPQA_VER_VAL.Ninguno.total),
              parseInt(this.met2.Metodologias_SCENT.Ninguno.total),
              parseInt(this.met2.Metodologias_AGEDIS.Ninguno.total),
              parseInt(this.met2.Metodologias_ITIL_QA.Ninguno.total)
              
            ],label: 'Ninguno'
          }
        ];
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

  verHerramientas1(){
    this.descativarOpcionesMenu();
    $("#h1").addClass("list-group-item-info");
    this.obtenerHerramientas1();
  }

  verHerramientas2(){
    this.descativarOpcionesMenu();
    $("#h2").addClass("list-group-item-info");
    this.obtenerHerramientas2();
  }

  verHerramientas3(){
    this.descativarOpcionesMenu();
    $("#h3").addClass("list-group-item-info");
    this.obtenerHerramientas3();
  }

  verHerramientas4(){
    this.descativarOpcionesMenu();
    $("#h4").addClass("list-group-item-info");
    this.obtenerHerramientas4();
  }

  verHerramientas5(){
    this.descativarOpcionesMenu();
    $("#h5").addClass("list-group-item-info");
    this.obtenerHerramientas5();
  }

  verLenguajes1(){
    this.descativarOpcionesMenu();
    $("#l1").addClass("list-group-item-info");
    this.obtenerLenguajes1();
  }

  verLenguajes2(){
    this.descativarOpcionesMenu();
    $("#l2").addClass("list-group-item-info");
    this.obtenerLenguajes2();
  }

  verLenguajes3(){
    this.descativarOpcionesMenu();
    $("#l3").addClass("list-group-item-info");
    this.obtenerLenguajes3();
  }

  verLenguajes4(){
    this.descativarOpcionesMenu();
    $("#l4").addClass("list-group-item-info");
    this.obtenerLenguajes4();
  }

  verLenguajes5(){
    this.descativarOpcionesMenu();
    $("#l5").addClass("list-group-item-info");
    this.obtenerLenguajes5();
  }

  verLenguajes6(){
    this.descativarOpcionesMenu();
    $("#l6").addClass("list-group-item-info");
    this.obtenerLenguajes6();
  }

  verSoluciones(){
    this.descativarOpcionesMenu();
    $("#s").addClass("list-group-item-info");
    this.obtenerSoluciones();
  }

  verCertificaciones1(){
    this.descativarOpcionesMenu();
    $("#c1").addClass("list-group-item-info");
    this.obtenerCertificaciones1();
  }

  verCertificaciones2(){
    this.descativarOpcionesMenu();
    $("#c2").addClass("list-group-item-info");
    this.obtenerCertificaciones2();
  }

  verCertificaciones3(){
    this.descativarOpcionesMenu();
    $("#c3").addClass("list-group-item-info");
    this.obtenerCertificaciones3();
  }

  verMetodologias1(){
    this.descativarOpcionesMenu();
    $("#m1").addClass("list-group-item-info");
    this.obtenerMetodologias1();
  }

  verMetodologias2(){
    this.descativarOpcionesMenu();
    $("#m2").addClass("list-group-item-info");
    this.obtenerMetodologias2();
  }

}
