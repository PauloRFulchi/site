var btnflag_usa = document.querySelector(".flag_usa");
btnflag_usa.addEventListener("click", function(){
    
    english();
    currentSlide(1);
    Mensagem('English');

});

var btnflag_bra = document.querySelector(".flag_bra");
btnflag_bra.addEventListener("click", function(){
    
     portuguese();
     currentSlide(1);
     Mensagem('Portuguese');

});

var btnflag_ita = document.querySelector(".flag_ita");
btnflag_ita.addEventListener("click", function(){
    
     italian();
     currentSlide(1);
     Mensagem('Italian');

});


function translate(nome, tipo, texto) {
  var html = null;

  if(tipo == 'ID'){

    html = document.getElementById(nome);
    html.innerHTML = texto;

  }else if(tipo == 'CLASS'){

    html = document.querySelector(nome);
    html.innerHTML = texto;

  }
}

function english(){        
  translate('.btnPdf','CLASS',"MY RESUME");
  translate('.Profissao','CLASS',"Developer");
  translate('.mySlides-title','CLASS',"| Who am I");
  
  translate('Slide_quemsoueu1','ID',"Previously");
  translate('Slide_texto1','ID',"I worked on the development of a system focused on commercial management. System that has functions such as detailed customer records, supplier, employees, incoming and outgoing invoice and relevant reports.");
  translate('Slide_quemsoueu2','ID',"Currently");
  translate('Slide_texto2','ID',"I work as a trainee Java developer, in an HR system for people management. Being Java for the back-end and JSF (Java Serves Faces) for the front-end.");
  translate('Slide_texto3','ID',"Complete High School");
  translate('Slide_texto4','ID',"Higher Education – Computer Science – Complete");
  translate('Slide_texto5','ID',"General English – Classic Programme 400 hours – Complete");
  translate('Slide_texto6','ID',"Nuovissimo Progetto Italiano - Studying");
  translate('Slide_texto7','ID',"Java Trainee Programmer - Java Web JSF");
  translate('Slide_texto8','ID',"Development / Full Analyst");
  translate('Slide_texto9','ID',"CLT - 1st Level Support Analyst");
 
  translate('.Conhecimentos','CLASS',"| knowledge");
  
  translate('hdados_texto','ID',"| PERSONAL DATA");
  translate('dados_texto1','ID','<img class="pDadosIcon" src="img/icon1.png" />WhatsApp:');
  translate('dados_texto2','ID','<img class="pDadosIcon" src="img/icon2.png" />Email:');
  translate('dados_texto3','ID','<img class="pDadosIcon" src="img/icon3.png" />Hometown:');

  translate('.txtautoria','CLASS',"&copy; 2022 by Paulo R. Fulchi. Created with SublimeText 3");    
}

function italian(){
  translate('.btnPdf','CLASS',"CURRICULUM VITAE");
  translate('.Profissao','CLASS',"Sviluppatore");
  translate('.mySlides-title','CLASS',"| Personali");
  
  translate('Slide_quemsoueu1','ID',"In precedenza");
  translate('Slide_texto1','ID',"Ho lavorato allo sviluppo di un sistema focalizzato sulla gestione commerciale. Questo sistema ha funzioni come anagrafiche dettagliate di clienti, fornitori, dipendenti, ingresso e uscita fattura e relativi report.");
  translate('Slide_quemsoueu2','ID',"Attualmente");
  translate('Slide_texto2','ID',"Lavoro come apprendista sviluppatore Java, in un sistema HR per la gestione delle persone. Essendo Java per il back-end e JSF (Java Serves Faces) per il front-end.");
  translate('Slide_texto3','ID',"Completa il liceo");
  translate('Slide_texto4','ID',"Istruzione superiore – Informatica – Completa");
  translate('Slide_texto5','ID',"General English – Classic Programme 400 hours – Completo");
  translate('Slide_texto6','ID',"Nuovissimo Progetto Italiano - Cursando");
  translate('Slide_texto7','ID',"Programmatore in formazione Java - Java Web JSF");
  translate('Slide_texto8','ID',"Sviluppo / Analista");
  translate('Slide_texto9','ID',"CLT - Analista di supporto di primo livello");  

  translate('.Conhecimentos','CLASS',"| Conoscenza");
  
  translate('hdados_texto','ID',"| DATI PERSONALI");
  translate('dados_texto1','ID','<img class="pDadosIcon" src="img/icon1.png" />WhatsApp:');
  translate('dados_texto2','ID','<img class="pDadosIcon" src="img/icon2.png" />Email:');
  translate('dados_texto3','ID','<img class="pDadosIcon" src="img/icon3.png" />Luogo di Nascita:');

  translate('.txtautoria','CLASS',"&copy; 2022 di Paulo R. Fulchi. Creato con SublimeText 3");
}

function portuguese(){
  translate('.btnPdf','CLASS',"MEU CURRÍCULO");
  translate('.Profissao','CLASS',"Desenvolvedor");
  translate('.mySlides-title','CLASS',"| Quem sou");
  
  translate('Slide_quemsoueu1','ID',"Anteriormente");
  translate('Slide_texto1','ID',"Atuei no desenvolvimento em um sistema focado na gestão comercial. Sistema esse que possui funções tais como cadastros de clientes detalhado, fornecedor, funcionários, entrada e saída nota fiscal e relatórios pertinentes.");
  translate('Slide_quemsoueu2','ID',"Atualmente");
  translate('Slide_texto2','ID',"Atuo como desenvolvedor Java de nivel Trainee. Java sendo para o back-end e JSF (Java Serves Faces) para o front-end, em um sistema de RH para gestão de pessoas.");
  translate('Slide_texto3','ID',"Ensino Médio Completo");
  translate('Slide_texto4','ID',"Ensino Superior – Ciência da Computação – Completo");
  translate('Slide_texto5','ID',"General English – Classic Programme 400 hours – Completo");
  translate('Slide_texto6','ID',"Nuovissimo Progetto Italiano - Cursando");
  translate('Slide_texto7','ID',"Programador Java Trainee - Java Web JSF");
  translate('Slide_texto8','ID',"Desenvolvimento / Analista Pleno");
  translate('Slide_texto9','ID',"CLT - Analista de Suporte 1º Nível");  

  translate('.Conhecimentos','CLASS',"| Conhecimentos");
  
  translate('hdados_texto','ID',"| DADOS PESSOAIS");
  translate('dados_texto1','ID','<img class="pDadosIcon" src="img/icon1.png" />WhatsApp:');
  translate('dados_texto2','ID','<img class="pDadosIcon" src="img/icon2.png" />Email:');
  translate('dados_texto3','ID','<img class="pDadosIcon" src="img/icon3.png" />Cidade Natal:');

  translate('.txtautoria','CLASS',"&copy; 2022 por Paulo R. Fulchi. Criado com SublimeText 3"); 
}
