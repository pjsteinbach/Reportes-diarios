window.addEventListener('load', function() {
    const monthSelect = document.getElementById('month');
    const monthNames = [ "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre" ];
    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();
    const previousMonthIndex = (currentMonthIndex === 0) ? 11 : currentMonthIndex - 1; const previousMonth = monthNames[previousMonthIndex];
    monthSelect.value = previousMonth;
});

document.getElementById('agent').addEventListener('change', actualizarActiveWork);
document.getElementById('active-work').addEventListener('change', actualizarObra);
document.getElementById('month').addEventListener('change', actualizarObra);
document.getElementById('copy-reference').addEventListener('click', showCopyCompleteReference);
document.getElementById('copy-content').addEventListener('click', showCopyCompleteContent);

function actualizarObra() {
    var activeWork = document.getElementById("active-work").value;
    var formLink = document.getElementById("diary-report");
    var reportLink = document.getElementById("weekly-report");
    var referenceParagraph = document.getElementById('reference-paragraph');
    var contentParagraph = document.getElementById('content-paragraph');
    var month = document.getElementById('month').value;
    var copyIcon = document.querySelectorAll('.copy-icon');
    var mapIframe = document.getElementById('map-iframe');

    switch (activeWork) {
        case "Almirante Brown (Asociación Civil La Fábrica) - Saneamiento, limpieza y mantenimiento del Arroyo San Francisco aguas abajo":
            formLink.href = "https://forms.gle/aTcvy13Ci5vTVP127";
            reportLink.href = "https://docs.google.com/spreadsheets/d/18b6QPSs3puitRkqEvS0AfXvq8n8snxadeTrUDZwKCWg/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1g-iT_84k6LdDe-PWtPXssP8BVdoAQbo&ehbc=2E312F&noprof=1";
            entity = "Asociación Civil La Fábrica Emprendimeinto Productivo y Cultural";
            resumeEntity = "La Fábrica";
            municipality = "Almirante Brown";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo San Francisco aguas abajo"
            resumeWork = "Arroyo San Francisco aguas abajo";
        break;
        case "Almirante Brown (Asociación Civil La Fábrica) - Saneamiento, limpieza y mantenimiento del Arroyo San Francisco aguas arriba":
            formLink.href = "https://forms.gle/aTcvy13Ci5vTVP127";
            reportLink.href = "https://docs.google.com/spreadsheets/d/18b6QPSs3puitRkqEvS0AfXvq8n8snxadeTrUDZwKCWg/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1WfBheXQy3jyQyv40PA0wn5vykw2ilsc&ehbc=2E312F&noprof=1";
            entity = "Asociación Civil La Fábrica Emprendimeinto Productivo y Cultural";
            resumeEntity = "La Fábrica";
            municipality = "Almirante Brown";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo San Francisco aguas arriba"
            resumeWork = "Arroyo San Francisco aguas arriba";
        break;
        case "La Plata (Cooperativa de Trabajo 3 de Diciembre Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Garibaldi y afluentes, canales de desagüe del Barrio Garibaldi y paseo del Arroyo El Pescado":
            formLink.href = "https://forms.gle/jYJ3EZ7jtccBWqJr8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1XSi6yA8Guj4Lqq5BtjjcLIHWPgRNS_Z6z1O2vTZXZi4/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1bQ8bJboNaDi--WrpqUGPrbK9vGHv0NY&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo 3 de Diciembre Ltda.";
            resumeEntity = "3 de Diciembre";
            municipality = "La Plata";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Garibaldi y afluentes, canales de desagüe del Barrio Garibaldi y paseo del Arroyo El Pescado"
            resumeWork = "Arroyo Garibaldi y otros";
        break;
        case "La Plata (Cooperativa de Trabajo 3 de Diciembre Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Rodríguez desde 28 hasta 141, Arroyo Don Carlos desde 185 hasta 189 y zanjón paralelo a calle 486":
            formLink.href = "https://forms.gle/jYJ3EZ7jtccBWqJr8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1XSi6yA8Guj4Lqq5BtjjcLIHWPgRNS_Z6z1O2vTZXZi4/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1SGgekCZ5USp2CjVEBB4ihaj_d0Dwj6Y&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo 3 de Diciembre Ltda.";
            resumeEntity = "3 de Diciembre";
            municipality = "La Plata";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Rodríguez desde 28 hasta 141, Arroyo Don Carlos desde 185 hasta 189 y zanjón paralelo a calle 486"
            resumeWork = "Arroyos Don Carlos y Rodríguez";
        break;
        case "La Plata (Cooperativa de Trabajo 3 de Diciembre Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Juan y afluentes del Arroyo Carnaval":
            formLink.href = "https://forms.gle/jYJ3EZ7jtccBWqJr8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1XSi6yA8Guj4Lqq5BtjjcLIHWPgRNS_Z6z1O2vTZXZi4/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1wSN6hA0hQJnVB3vhngjFqR3YjsHRtsE&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo 3 de Diciembre Ltda.";
            resumeEntity = "3 de Diciembre";
            municipality = "La Plata";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo San Juan y afluentes del Arroyo Carnaval"
            resumeWork = "Arroyo San Juan y otros";
        break;
        case "General San Martín (Cooperativa de Trabajo 9 de Julio Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales José León Suárez Norte, Esmeralda y afluentes de calle San Martín y paralelo a Au. Camino del Buen Ayre":
            formLink.href = "https://forms.gle/vkJEQQxhp8pJr1oG8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1D0vucFDE78s90JexjozsD5sf6EgvOOOkBEDArXZS6t0/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1iSnB6RWpqxuxeNjNj4oN7LHYkHG7vcI&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo 9 de Julio Ltda.";
            resumeEntity = "9 de Julio";
            municipality = "General San Martín";
            work = "Saneamiento, limpieza y mantenimiento de los Canales José León Suárez Norte, Esmeralda y afluentes de calle San Martín y paralelo a Au. Camino del Buen Ayre"
            resumeWork = "Canal José León Suárez y otros";
        break;
        case "Lomas de Zamora (Cooperativa de Trabajo 9 de Julio Ltda.) - Saneamiento, limpieza y mantenimiento del Cauce Viejo del Arroyo del Rey":
            formLink.href = "https://forms.gle/yZEhxUzYLwbZXRwKA";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1pZpwuMfyEmqJjYhmGAwQI4_EstRdHHugBBG2PNW-_ow/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1xOZ1-a9GvWLNc-4xO5bBz4xIuZM50-c&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo 9 de Julio Ltda.";
            resumeEntity = "9 de Julio";
            municipality = "Lomas de Zamora";
            work = "Saneamiento, limpieza y mantenimiento del Cauce Viejo del Arroyo del Rey"
            resumeWork = "Cauce viejo del Arroyo del Rey";
        break;
        case "La Plata (Cooperativa de Trabajo Almagro Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo El Gato y afluentes en las localidades de Gonnet y Ringuelet":
            formLink.href = "https://forms.gle/EchN3u9UmVT8DSQX9";
            reportLink.href = "https://docs.google.com/spreadsheets/d/12MYmHwQMfIpyWRevzmfuH2gGwdwPq-0qP4Uhj0X32Kg/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=194pv0L_akEFi1bUJ31SW8E9N05xuzNs&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Almagro Ltda.";
            resumeEntity = "Almagro";
            municipality = "La Plata";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo El Gato y afluentes en las localidades de Gonnet y Ringuelet"
            resumeWork = "Arroyo El Gato (Gonnet)";
        break;
        case "La Plata (Cooperativa de Trabajo Almagro Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo El Gato y afluentes en Melchor Romero y Lisandro Olmos":
            formLink.href = "https://forms.gle/EchN3u9UmVT8DSQX9";
            reportLink.href = "https://docs.google.com/spreadsheets/d/12MYmHwQMfIpyWRevzmfuH2gGwdwPq-0qP4Uhj0X32Kg/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1v-G9lw8NogCvvk2fxTZhJyKcmiuU1lo&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Almagro Ltda.";
            resumeEntity = "Almagro";
            municipality = "La Plata";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo El Gato y afluentes en Melchor Romero y Lisandro Olmos"
            resumeWork = "Arroyo El Gato (M. Romero)";
        break;
        case "La Plata (Cooperativa de Trabajo Almagro Ltda.) - Saneamiento, limpieza y mantenimiento del Tramo inferior del Arroyo El Gato":
            formLink.href = "https://forms.gle/EchN3u9UmVT8DSQX9";
            reportLink.href = "https://docs.google.com/spreadsheets/d/12MYmHwQMfIpyWRevzmfuH2gGwdwPq-0qP4Uhj0X32Kg/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=199fEpWR1mdQ3tikXNXX3PCUs1BoY_N4&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Almagro Ltda.";
            resumeEntity = "Almagro";
            municipality = "La Plata";
            work = "Saneamiento, limpieza y mantenimiento del Tramo inferior del Arroyo El Gato"
            resumeWork = "Arroyo El Gato tramo inferior";
        break;
        case "La Plata (Cooperativa de Trabajo Amasando Sueños Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Regimiento y su afluente":
            formLink.href = "https://forms.gle/NrXix6pX65XGtZaSA";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1TIa5CMJF9njF6J5eS9YqNY6k76kVWS4PMFawLCGe0Fk/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1xvtCEs1BAwitxyBYD6jYq0GaPqy6drs&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Amasando Sueños Ltda.";
            resumeEntity = "Amasando Sueños";
            municipality = "La Plata";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Regimiento y su afluente"
            resumeWork = "Arroyo Regimiento";
        break;
        case "La Plata (Cooperativa de Trabajo Argentina Resiste Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Martín y Carnaval":
            formLink.href = "https://forms.gle/GLVbc5ji4nLpgAHF8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1ocD2Zb-edS6NjmHCOml8Cn3OjPN6jDjUp6VuknlOTGw/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=18j-khS5Gq3xGSDmf_MCC5LSUB4XdWPs&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Argentina Resiste Ltda.";
            resumeEntity = "Argentina Resiste";
            municipality = "La Plata";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos Martín y Carnaval"
            resumeWork = "Arroyos Martín y Carnaval";
        break;
        case "La Plata (Cooperativa de Trabajo Argentina Resiste Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Pérez y afluentes":
            formLink.href = "https://forms.gle/GLVbc5ji4nLpgAHF8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1ocD2Zb-edS6NjmHCOml8Cn3OjPN6jDjUp6VuknlOTGw/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1FlG6XP3ANuS1nzgA1IwIrrDKalOHXGQ&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Argentina Resiste Ltda.";
            resumeEntity = "Argentina Resiste";
            municipality = "La Plata";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Pérez y afluentes"
            resumeWork = "Arroyo Pérez";
        break;
        case "Moreno (Cooperativa de Trabajo Ayelén Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Villanueva y Los Perros y los Canales 25 de Mayo, Acoyte y Gálvez González":
            formLink.href = "https://forms.gle/ZUbcY1nuwZszbVph8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/12kPMqaYSEPzkaFv1C_PRfYDeqSiCzOXWo-gnWZL47mo/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1oz77jXM-dVvhdThDzasXDE_nZIPjOKY&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Ayelén Ltda.";
            resumeEntity = "Ayelén";
            municipality = "Moreno";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos Villanueva y Los Perros y los Canales 25 de Mayo, Acoyte y Gálvez González"
            resumeWork = "Arroyo Villanueva y otros";
        break;
        case "La Matanza (Cooperativa de Trabajo Cada día un Sueño Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Morales y Las Víboras y los canales de desagüe del Barrio Nicole":
            formLink.href = "https://forms.gle/7kgDoL3DYPEFShH6A";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1cqTG9NeTi9r44yoII5jCstflSHprWpGu7fGuKetsyMw/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1OWuWbSazSY8MFnlAXj6AsSIFsF3hUBQ&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Cada día un Sueño Ltda.";
            resumeEntity = "Cada día un Sueño";
            municipality = "La Matanza";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos Morales y Las Víboras y los canales de desagüe del Barrio Nicole"
            resumeWork = "Arroyos Morales y Las Víboras";
        break;
        case "La Matanza (Cooperativa de Trabajo Cada día un Sueño Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Morales y afluentes y el canal Apipé":
            formLink.href = "https://forms.gle/7kgDoL3DYPEFShH6A";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1cqTG9NeTi9r44yoII5jCstflSHprWpGu7fGuKetsyMw/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1dzTSdqR-niDoaRtMEia1W8ChXZnUrOQ&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Cada día un Sueño Ltda.";
            resumeEntity = "Cada día un Sueño";
            municipality = "La Matanza";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Morales y afluentes y el canal Apipé"
            resumeWork = "Arroyos Morales y Apipé";
        break;
        case "Lomas de Zamora (Cooperativa de Trabajo Cada día un Sueño Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo del Rey":
            formLink.href = "https://forms.gle/7kgDoL3DYPEFShH6A";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1cqTG9NeTi9r44yoII5jCstflSHprWpGu7fGuKetsyMw/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1c6Cpv4DmWZ38vNy_rjpWlGrTsLXgOJ0&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Cada día un Sueño Ltda.";
            resumeEntity = "Cada día un Sueño";
            municipality = "Lomas de Zamora";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo del Rey"
            resumeWork = "Arroyo del Rey";
        break;
        case "Merlo (Cooperativa de Trabajo Cada día un Sueño Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Gregorio de Laferrere y Afluente Bustillo":
            formLink.href = "https://forms.gle/7kgDoL3DYPEFShH6A";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1cqTG9NeTi9r44yoII5jCstflSHprWpGu7fGuKetsyMw/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1VKYn2MCDk-T0mxwhMRgtujvM3vocxMM&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Cada día un Sueño Ltda.";
            resumeEntity = "Cada día un Sueño";
            municipality = "Merlo";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Gregorio de Laferrere y Afluente Bustillo"
            resumeWork = "Arroyos Laferrere y Bustillo";
        break;
        case "Escobar (Cooperativa de Trabajo Che Guevara Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Bedoya, Saboya y Los Pinos y el afluente del Arroyo Garín":
            formLink.href = "https://forms.gle/UH2fVE9J7JRFyC8F9";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1514MYFLr8zU047lAqJcq1IM8wbh-XGLRusROjJ4eIj4/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1IerT4dg-VAgu3MhyfRiHtRf83vE7ZHE&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Che Guevara Ltda.";
            resumeEntity = "Che Guevara";
            municipality = "Escobar";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos Bedoya, Saboya y Los Pinos y el afluente del Arroyo Garín"
            resumeWork = "Arroyo Bedoya y otros";
        break;
        case "General San Martín (Cooperativa de Trabajo Che Guevara Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales de calle 135, José Ingenieros y Eva Perón":
            formLink.href = "https://forms.gle/UH2fVE9J7JRFyC8F9";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1514MYFLr8zU047lAqJcq1IM8wbh-XGLRusROjJ4eIj4/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=18KE5HqIDbjEozoiaW_Md8wz9LrWnaoc&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Che Guevara Ltda.";
            resumeEntity = "Che Guevara";
            municipality = "General San Martín";
            work = "aneamiento, limpieza y mantenimiento de los Canales de calle 135, José Ingenieros y Eva Perón"
            resumeWork = "Canal José Ingenieros y otros";
        break;
        case "San Miguel (Cooperativa de Trabajo Cielos Abiertos Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales Manuel Fraga y Bragado y sus afluentes":
            formLink.href = "https://forms.gle/LmV29sQ4sn6mYAJd7";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1-WFe0YRYY3eqy1DzI12Y_H1FW5REKkBSc3EgFQx5VD4/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=17A_ICRevoHroL87s61g4DdUXq0J2ISQ&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Cielos Abiertos Ltda.";
            resumeEntity = "Cielos Abiertos";
            municipality = "San Miguel";
            work = "Saneamiento, limpieza y mantenimiento de los Canales Manuel Fraga y Bragado y sus afluentes"
            resumeWork = "Canal Bragado y otros";
        break;
        case "Pilar (Cooperativa de Trabajo Construyendo Patria Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Burgueño y afluentes":
            formLink.href = "https://forms.gle/n4ToWB2g6CjUWGLG8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1IPlQKSuhiVkxbfM0PWWJwuEKi3hAY6EpoOxD737j-o4/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=11Ky_DFrBltNcZOwJCRruvFtBEZST62Y&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Construyendo Patria Ltda.";
            resumeEntity = "Constuyendo Patria";
            municipality = "Pilar";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Burgueño y afluentes"
            resumeWork = "Arroyo Burgueño";
        break;
        case "Berisso (Cooperativa de Trabajo El Hornero Comunitario Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Saladero y su afluente":
            formLink.href = "https://forms.gle/RhcSF3t6EkxRYVt89";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1AJ9D1F8eXSUqMFYCMnJ7XLdUJhO9pfzz3JCQY4QLIdA/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1uB0J_3IAgJ-p2buBscNBihiDOMVwva8&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo El Hornero Comunitario Ltda.";
            resumeEntity = "El Hornero Comunitario";
            municipality = "Berisso";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Saladero y su afluente"
            resumeWork = "Arroyo Saladero";
        break;
        case "Hurlingham (Cooperativa de Trabajo El Hornero Comunitario Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Soto":
            formLink.href = "https://forms.gle/RhcSF3t6EkxRYVt89";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1AJ9D1F8eXSUqMFYCMnJ7XLdUJhO9pfzz3JCQY4QLIdA/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1P7i2ELJU3A8T_KjBMN40fvZTUoiADE8&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo El Hornero Comunitario Ltda.";
            resumeEntity = "El Hornero Comunitario";
            municipality = "Hurlingham";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Soto"
            resumeWork = "Arroyo Soto";
        break;
        case "Tandil (Cooperativa de Trabajo El Laurel Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Langueyú, La Cascada y San Gabriel, Ramal H y áreas de regulación":
            formLink.href = "https://forms.gle/4GsmNzaapMh2gUay8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1i7bZpnnvBDWU_wMr7CmsgVbgYKxDxwtNen_ggSNQRqQ/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1SPHaWRw_cA_fl7QhFMnzi21Vm_l7cpI&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo El Laurel Ltda.";
            resumeEntity = "El Laurel";
            municipality = "Tandil";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos Langueyú, La Cascada y San Gabriel, Ramal H y áreas de regulación"
            resumeWork = "Arroyo Langueyú y otros";
        break;
        case "Quilmes (Cooperativa de Trabajo El Ombú Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Giménez y su aliviador y los canales IMPA y Monteagudo":
            formLink.href = "https://forms.gle/uU8Dr7hHYKWHuk1B7";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1wG-n3mo5273-YlqTILSZ-DnKuoltMszaP-Lr-18rpWY/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1Qinff9p-2DX-9ECUBVpPvHunmVCPV7U&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo El Ombú Ltda.";
            resumeEntity = "El Ombú";
            municipality = "Quilmes";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Giménez y su aliviador y los canales IMPA y Monteagudo"
            resumeWork = "Arroyo Giménez y otros";
        break;
        case "Florencio Varela (Cooperativa de Trabajo Evita 4 Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Conchitas":
            formLink.href = "https://forms.gle/RuGDzASz6EaPGMdF7";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1ZQmUsUw9NY3VJScYySPM7plkGxImh88-5XheqYQ5oVI/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1pk-rjaF9pRs2Xf7Z9QaHv7244gHZAx4&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Evita 4 Ltda.";
            resumeEntity = "Evita 4";
            municipality = "Florencio Varela";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Las Conchitas"
            resumeWork = "Arroyo Las Conchitas";
        break;
        case "Florencio Varela (Cooperativa de Trabajo Evita 4 Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Juan":
            formLink.href = "https://forms.gle/RuGDzASz6EaPGMdF7";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1ZQmUsUw9NY3VJScYySPM7plkGxImh88-5XheqYQ5oVI/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1UTDqF4osx2W48X7CN4DVw7a8LXskziI&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Evita 4 Ltda.";
            resumeEntity = "Evita 4";
            municipality = "Florencio Varela";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo San Juan"
            resumeWork = "Arroyo San Juan";
        break;
        case "General Rodríguez (Cooperativa de Trabajo Evita Compañera Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos El Carpincho, Parque Granadero y los canales de Planta Urbana y Horacio Quiroga":
            formLink.href = "https://forms.gle/AHynUcJDk38jTzuM7";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1fJdxIsIqE3fB1GApyCJWFWHesZv79SdyCZp8lrPgYmU/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1akg1fx61sghlDenviDe64gJUBqMblug&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Evita Compañera Ltda.";
            resumeEntity = "Evita Compañera";
            municipality = "General Rodríguez";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos El Carpincho, Parque Granadero y los canales de Planta Urbana y Horacio Quiroga"
            resumeWork = "Arroyo El Carpincho y otros";
        break;
        case "Quilmes (Cooperativa de Trabajo Evita Compañera Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Piedras desde Comandante Franco hasta Rodolfo López":
            formLink.href = "https://forms.gle/AHynUcJDk38jTzuM7";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1fJdxIsIqE3fB1GApyCJWFWHesZv79SdyCZp8lrPgYmU/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=17j_mm-VBB53P-Z2RPsl-wunujza8VTo&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Evita Compañera Ltda.";
            resumeEntity = "Evita Compañera";
            municipality = "Quilmes";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Las Piedras desde Comandante Franco hasta Rodolfo López"
            resumeWork = "Arroyo Las Piedras desde Cte. Franco";
        break;
        case "Quilmes (Cooperativa de Trabajo Evita Compañera Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Piedras desde Rodolfo López hasta C.816":
            formLink.href = "https://forms.gle/AHynUcJDk38jTzuM7";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1fJdxIsIqE3fB1GApyCJWFWHesZv79SdyCZp8lrPgYmU/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1a_WDbvXocoOE3zcpMHgJZa17VPVpJZQ&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Evita Compañera Ltda.";
            resumeEntity = "Evita Compañera";
            municipality = "Quilmes";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Las Piedras desde Rodolfo López hasta C.816"
            resumeWork = "Arroyo Las Piedras desde R. López";
        break;
        case "Quilmes (Cooperativa de Trabajo Evita Compañera Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Francisco desde su confluencia con el Arroyo Santo Domingo hasta Av. Zapiola":
            formLink.href = "https://forms.gle/AHynUcJDk38jTzuM7";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1fJdxIsIqE3fB1GApyCJWFWHesZv79SdyCZp8lrPgYmU/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1TgvfSACqKfYriVnloZM4K8Cj5lFPcGg&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Evita Compañera Ltda.";
            resumeEntity = "Evita Compañera";
            municipality = "Quilmes";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo San Francisco desde su confluencia con el Arroyo Santo Domingo hasta Av. Zapiola"
            resumeWork = "Arroyo San Francisco desde Sto. Domingo";
        break;
        case "Berazategui (Cooperativa de Trabajo Fuerzas del Alma Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Conchitas y su Afluente":
            formLink.href = "https://forms.gle/CX8KuAXux6hx3fdb8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1ADldQ3poqRimI7RYuqG5nNXlq0gQq5KWt26O9DIW3kY/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1ehE6W5zIZrb7piWPCtZf6TgIiGx-ivY&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Fuerzas del Alma Ltda.";
            resumeEntity = "Fuerzas del Alma";
            municipality = "Berazategui";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Las Conchitas y su Afluente"
            resumeWork = "Arroyo Las Conchitas";
        break;
        case "General Rodríguez (Cooperativa de Trabajo Fuerzas del Alma Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Catonas":
            formLink.href = "https://forms.gle/CX8KuAXux6hx3fdb8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1ADldQ3poqRimI7RYuqG5nNXlq0gQq5KWt26O9DIW3kY/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1Pwqtg-Da-L3Wq2kEJKL63Tt1eGGGRXQ&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Fuerzas del Alma Ltda.";
            resumeEntity = "Fuerzas del Alma";
            municipality = "General Rodríguez";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Las Catonas"
            resumeWork = "Arroyo Las Catonas";
        break;
        case "La Matanza (Cooperativa de Trabajo Fuerzas del Alma Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Dupi":
            formLink.href = "https://forms.gle/CX8KuAXux6hx3fdb8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1ADldQ3poqRimI7RYuqG5nNXlq0gQq5KWt26O9DIW3kY/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1ltjxaLd_iXOBuMr4b8Y6qtf2-jbw1XY&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Fuerzas del Alma Ltda.";
            resumeEntity = "Fuerzas del Alma";
            municipality = "La Matanza";
            work = ""
            resumeWork = "";
        break;
        case "Quilmes (Cooperativa de Trabajo Fuerzas del Alma Ltda.) - Saneamiento, limpieza y mantenimiento de la Cava y Canal de desagüe en Barrio Itati":
            formLink.href = "https://forms.gle/CX8KuAXux6hx3fdb8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1ADldQ3poqRimI7RYuqG5nNXlq0gQq5KWt26O9DIW3kY/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1Ih6pllU2X1DmYh4h5eZVTvIw3UsO4M4&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Fuerzas del Alma Ltda.";
            resumeEntity = "Fuerzas del Alma";
            municipality = "Quilmes";
            work = "Saneamiento, limpieza y mantenimiento de la Cava y Canal de desagüe en Barrio Itati"
            resumeWork = "Cava de Itati";
        break;
        case "Quilmes (Cooperativa de Trabajo Fuerzas del Alma Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Santo Domingo y Las Piedras aguas abajo":
            formLink.href = "https://forms.gle/CX8KuAXux6hx3fdb8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1ADldQ3poqRimI7RYuqG5nNXlq0gQq5KWt26O9DIW3kY/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1b11Rc1mDtKXxVldp5B7rsTDEUqlVZ1s&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Fuerzas del Alma Ltda.";
            resumeEntity = "Fuerzas del Alma";
            municipality = "Quilmes";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos Santo Domingo y Las Piedras aguas abajo"
            resumeWork = "Arroyo Santo Domingo";
        break;
        case "Quilmes (Cooperativa de Trabajo Fuerzas del Alma Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Francisco entre 888 y Tte. Gral. Donato Álvarez":
            formLink.href = "https://forms.gle/CX8KuAXux6hx3fdb8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1ADldQ3poqRimI7RYuqG5nNXlq0gQq5KWt26O9DIW3kY/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1xCPCmKfDZQrC8C1epLGBKSLiTThYgSM&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Fuerzas del Alma Ltda.";
            resumeEntity = "Fuerzas del Alma";
            municipality = "Quilmes";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo San Francisco entre 888 y Tte. Gral. Donato Álvarez"
            resumeWork = "Arroyo San Francisco desde C. 888";
        break;
        case "General Rodríguez (Cooperativa de Trabajo La Gaviota Ltda.) - Saneamiento, limpieza y mantenimiento de la Cañada San Antonio Brazo Corto y Canal Ricardo Balbin":
            formLink.href = "https://forms.gle/PvkjJj6iEt8wuhcSA";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1YUP9OhQVS5dhGMzlvbn_SdVb7ZiJfrZCAuQIOZMIVzY/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1Ij5U18px3OakN_esHdSez7cbVLcOGH0&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo La Gaviota Ltda.";
            resumeEntity = "La Gaviota";
            municipality = "General Rodríguez";
            work = "Saneamiento, limpieza y mantenimiento de la Cañada San Antonio Brazo Corto y Canal Ricardo Balbin"
            resumeWork = "Cañada San Antonio Brazo Corto";
        break;
        case "General Rodríguez (Cooperativa de Trabajo La Gaviota Ltda.) - Saneamiento, limpieza y mantenimiento de la Cañada San Antonio Brazo Largo":
            formLink.href = "https://forms.gle/PvkjJj6iEt8wuhcSA";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1YUP9OhQVS5dhGMzlvbn_SdVb7ZiJfrZCAuQIOZMIVzY/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1NXF7E54gnJ08B4bIc3PJtK0RvlZca0c&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo La Gaviota Ltda.";
            resumeEntity = "La Gaviota";
            municipality = "General Rodríguez";
            work = "Saneamiento, limpieza y mantenimiento de la Cañada San Antonio Brazo Largo"
            resumeWork = "Cañada San Antonio Brazo Largo";
        break;
        case "La Matanza (Cooperativa de Trabajo La Gaviota Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Susana y Don Mario y sus afluentes":
            formLink.href = "https://forms.gle/PvkjJj6iEt8wuhcSA";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1YUP9OhQVS5dhGMzlvbn_SdVb7ZiJfrZCAuQIOZMIVzY/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1u1C0rAcznAxqE_jimnF0-0IEO9Z7U3U&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo La Gaviota Ltda.";
            resumeEntity = "La Gaviota";
            municipality = "La Matanza";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos Susana y Don Mario y sus afluentes"
            resumeWork = "Arroyos Susana y Don Mario";
        break;
        case "La Matanza (Cooperativa de Trabajo La Gaviota Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Susana y Dupi y los zanjones García Merou y de la Fuente":
            formLink.href = "https://forms.gle/PvkjJj6iEt8wuhcSA";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1YUP9OhQVS5dhGMzlvbn_SdVb7ZiJfrZCAuQIOZMIVzY/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1F1cymQLMq6BRSLytE8ZZex3nTWimaik&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo La Gaviota Ltda.";
            resumeEntity = "La Gaviota";
            municipality = "La Matanza";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos Susana y Dupi y los zanjones García Merou y de la Fuente"
            resumeWork = "Arroyos Susana y Dupi";
        break;
        case "La Matanza (Cooperativa de Trabajo La Gaviota Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Dupi y afluente Iguazú":
            formLink.href = "https://forms.gle/PvkjJj6iEt8wuhcSA";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1YUP9OhQVS5dhGMzlvbn_SdVb7ZiJfrZCAuQIOZMIVzY/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=14hsyqXO5ZsU9e2SRrlA9cj_8Y9YIhnc&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo La Gaviota Ltda.";
            resumeEntity = "La Gaviota";
            municipality = "La Matanza";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Dupi y afluente Iguazú"
            resumeWork = "Arroyo Dupi y afluente";
        break;
        case "Quilmes (Cooperativa de Trabajo La Gaviota Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Francisco, desde Av. Zapiola hasta calle 888":
            formLink.href = "https://forms.gle/PvkjJj6iEt8wuhcSA";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1YUP9OhQVS5dhGMzlvbn_SdVb7ZiJfrZCAuQIOZMIVzY/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1hpEhLV4TWNv5AFJ47KLhXUT8nJnODCM&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo La Gaviota Ltda.";
            resumeEntity = "La Gaviota";
            municipality = "Quilmes";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo San Francisco, desde Av. Zapiola hasta calle 888"
            resumeWork = "Arroyo San francisco desde Zapiola";
        break;
        case "Ensenada (Cooperativa de Trabajo La Morita Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Doña Flora y su afluente y los canales Barragán y de Zona Franca":
            formLink.href = "https://forms.gle/ud3dx1BaN8ViFJCN8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1n1LPRGw5YQ-nFwOAJvrohbK8hBgqu0mzWtoRPdhEUb4/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1QGsrgKSfjJHF0Ia3SKTukMI7ky1OeTE&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo La Morita Ltda.";
            resumeEntity = "La Morita";
            municipality = "Ensenada";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Doña Flora y su afluente y los canales Barragán y de Zona Franca"
            resumeWork = "Arroyo Doña Flora y otros";
        break;
        case "Esteban Echeverría (Cooperativa de Trabajo La Morita Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Medrano, El Triángulo, Ortega y Santa Catalina":
            formLink.href = "https://forms.gle/ud3dx1BaN8ViFJCN8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1n1LPRGw5YQ-nFwOAJvrohbK8hBgqu0mzWtoRPdhEUb4/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1Z6rEUVcHJJdC1OtLTg_SjNueN7-kZXk&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo La Morita Ltda.";
            resumeEntity = "La Morita";
            municipality = "Esteban Echeverría";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos Medrano, El Triángulo, Ortega y Santa Catalina"
            resumeWork = "Arroyo Medrano y otros";
        break;
        case "Escobar (Cooperativa de Trabajo La Plebeya Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Loma Verde":
            formLink.href = "https://forms.gle/c4hR4jrs3QvxWZTT9";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1MEhbwHVMAyukQxtaToIShxk7X7_0EB7K5AYgHCM5qdM/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=15dzWgd9G41cXrd1QCCWwd8H8lpjjw6M&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo La Plebeya Ltda.";
            resumeEntity = "La Plebeya";
            municipality = "Escobar";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Loma Verde"
            resumeWork = "Arroyo Loma Verde";
        break;
        case "Tigre (Cooperativa de Trabajo La Plebeya Ltda.) - Saneamiento, limpieza y mantenimiento del Canal El Dorado, Arroyo Lola y zanjas del Barrio Las Mascotas":
            formLink.href = "https://forms.gle/c4hR4jrs3QvxWZTT9";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1MEhbwHVMAyukQxtaToIShxk7X7_0EB7K5AYgHCM5qdM/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1Mqss6nUvfrfV9kKEPEjqr0Zf22KZS_c&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo La Plebeya Ltda.";
            resumeEntity = "La Plebeya";
            municipality = "Tigre";
            work = "Saneamiento, limpieza y mantenimiento del Canal El Dorado, Arroyo Lola y zanjas del Barrio Las Mascotas"
            resumeWork = "Canal El Dorado y otros";
        break;
        case "Zárate (Cooperativa de Trabajo La Plebeya Ltda.) - Saneamiento, limpieza y mantenimiento de los Zanjones en la localidad de Zárate":
            formLink.href = "https://forms.gle/c4hR4jrs3QvxWZTT9";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1MEhbwHVMAyukQxtaToIShxk7X7_0EB7K5AYgHCM5qdM/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1AC-HY2vbDC_566Lun95o4bDzPwJy8aw&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo La Plebeya Ltda.";
            resumeEntity = "La Plebeya";
            municipality = "Zárate";
            work = "Saneamiento, limpieza y mantenimiento de los Zanjones en la localidad de Zárate"
            resumeWork = "Zanjones en Zárate";
        break;
        case "Ezeiza (Cooperativa de Trabajo Las Colinas Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Aguirre y Rossi":
            formLink.href = "https://forms.gle/Tyy1q2JUViRn8yEX8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1z_GtzOvi_BCv2ktJjO6u4yUxFekA0GL3bS9S1admUiI/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1VMwcQs2Nv0bAHCRAsZay1G_e2xxBd9U&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Las Colinas Ltda.";
            resumeEntity = "Las Colinas";
            municipality = "Ezeiza";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos Aguirre y Rossi"
            resumeWork = "Arroyos Aguirre y Rossi";
        break;
        case "Ezeiza (Cooperativa de Trabajo Las Colinas Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales Cortez y Vista Alegre":
            formLink.href = "https://forms.gle/Tyy1q2JUViRn8yEX8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1z_GtzOvi_BCv2ktJjO6u4yUxFekA0GL3bS9S1admUiI/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1rX5I4soE6taZY4SaZwvaHzkHLIu01BY&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Las Colinas Ltda.";
            resumeEntity = "Las Colinas";
            municipality = "Ezeiza";
            work = "Saneamiento, limpieza y mantenimiento de los Canales Cortez y Vista Alegre"
            resumeWork = "Canales Cortez y Vista Alegre";
        break;
        case "Malvinas Argentinas (Cooperativa de Trabajo Las Colinas Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Horquetas":
            formLink.href = "https://forms.gle/Tyy1q2JUViRn8yEX8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1z_GtzOvi_BCv2ktJjO6u4yUxFekA0GL3bS9S1admUiI/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=18kTtVKsKrd36kOv0H7tcM3Q50QXAVQ8&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Las Colinas Ltda.";
            resumeEntity = "Las Colinas";
            municipality = "Malvinas Argentinas";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Las Horquetas"
            resumeWork = "Arroyo Las Horquetas";
        break;
        case "Malvinas Argentinas (Cooperativa de Trabajo Las Colinas Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Tunas":
            formLink.href = "https://forms.gle/Tyy1q2JUViRn8yEX8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1z_GtzOvi_BCv2ktJjO6u4yUxFekA0GL3bS9S1admUiI/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1buhFaulSPd4t3e6Q_yFwPxI171KlvNU&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Las Colinas Ltda.";
            resumeEntity = "Las Colinas";
            municipality = "Malvinas Argentinas";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Las Tunas"
            resumeWork = "Arroyo Las Tunas";
        break;
        case "San Miguel (Cooperativa de Trabajo Latinoamericana Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales Pascuala Cueto, Luis Viale y afluente del Arroyo los Berros":
            formLink.href = "https://forms.gle/o8JdpKRCYYqWacT38";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1gvS45FKwBe-aMvGNhSSy7GgFsDmLWG3ioVlXFRA_FhQ/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1W6t6Pr5qXlAWlI9e9Y67ESq72Qvu3nY&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Latinoamericana Ltda.";
            resumeEntity = "Latinoamericana";
            municipality = "San Miguel";
            work = "Saneamiento, limpieza y mantenimiento de los Canales Pascuala Cueto, Luis Viale y afluente del Arroyo los Berros"
            resumeWork = "Canal Pascuala Cueto y otros";
        break;
        case "San Miguel (Cooperativa de Trabajo Latinoamericana Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Los Berros":
            formLink.href = "https://forms.gle/o8JdpKRCYYqWacT38";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1gvS45FKwBe-aMvGNhSSy7GgFsDmLWG3ioVlXFRA_FhQ/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=14qM7xPLml1apEIuqjVby_qNaE-zoiYk&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Latinoamericana Ltda.";
            resumeEntity = "Latinoamericana";
            municipality = "San Miguel";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Los Berros"
            resumeWork = "Arroyo Los Berros";
        break;
        case "San Nicolás (Cooperativa de Trabajo Liderazgo Ltda.) - Saneamiento, limpieza y mantenimiento de los afluentes del Arroyo Ramallo":
            formLink.href = "https://forms.gle/NQJxKhdf4yuPWUyh7";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1n9Skg-MNm27Npo2QGy5u6g52qM-yQnBCq3VovyWgp4o/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1z1Mo-83ogO-SfYoBDRKeIBSvkt_pNvU&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Liderazgo Ltda.";
            resumeEntity = "Liderazgo";
            municipality = "San Nicolás";
            work = "Saneamiento, limpieza y mantenimiento de los afluentes del Arroyo Ramallo"
            resumeWork = "Afluentes del Arroyo Ramallo";
        break;
        case "San Nicolás (Cooperativa de Trabajo Liderazgo Ltda.) - Saneamiento, limpieza y mantenimiento de los canales Paraguay, Alberdi y de zona este":
            formLink.href = "https://forms.gle/NQJxKhdf4yuPWUyh7";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1n9Skg-MNm27Npo2QGy5u6g52qM-yQnBCq3VovyWgp4o/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=136CMfukHJuTH-JNsrDZQO-kzhuKms_k&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Liderazgo Ltda.";
            resumeEntity = "Liderazgo";
            municipality = "San Nicolás";
            work = "Saneamiento, limpieza y mantenimiento de los canales Paraguay, Alberdi y de zona este"
            resumeWork = "Canal Paraguay y otros";
        break;
        case "General Rodríguez (Cooperativa de Trabajo Los Horneros Ltda.) - Saneamiento, limpieza y mantenimiento de la Cañada Álvarez":
            formLink.href = "https://forms.gle/FVRdeZ9jogPmCHXd9";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1hunIW2lcbU_W8sXtXNDRm_LIOFD6EwLj1M7s6uHfFTE/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1LyKd2uRkFObORWnNp8Xubhgfi3t_8Nw&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Los Horneros Ltda.";
            resumeEntity = "Los Horneros";
            municipality = "General Rodríguez";
            work = "Saneamiento, limpieza y mantenimiento de la Cañada Álvarez"
            resumeWork = "Cañada Álvarez";
        break;
        case "General Rodríguez (Cooperativa de Trabajo Los Horneros Ltda.) - Saneamiento, limpieza y mantenimiento de los afluentes del Arroyo Las Chozas":
            formLink.href = "https://forms.gle/FVRdeZ9jogPmCHXd9";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1hunIW2lcbU_W8sXtXNDRm_LIOFD6EwLj1M7s6uHfFTE/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1MavETonXty3-qunf2egJ_k4sBlyKfZM&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Los Horneros Ltda.";
            resumeEntity = "Los Horneros";
            municipality = "General Rodríguez";
            work = "Saneamiento, limpieza y mantenimiento de los afluentes del Arroyo Las Chozas"
            resumeWork = "Afluentes del Arroyo Las Chozas";
        break;
        case "La Plata (Cooperativa de Trabajo Los Kokitos Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Don Carlos y Rodríguez":
            formLink.href = "https://forms.gle/ovP4YE7a3MXYffJUA";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1Aeqrz012ajWaAop9zwuBeEbYKdU_JkH663N53YFO9Qc/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1SMkQIHlbTMWx0x9-C7k8PEyBgTrsmI8&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Los Kokitos Ltda.";
            resumeEntity = "Los Kokitos";
            municipality = "La Plata";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos Don Carlos y Rodríguez"
            resumeWork = "Arroyos Don Carlos y Rodríguez";
        break;
        case "La Plata (Cooperativa de Trabajo Los Kokitos Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Maldonado y su Afluente en Barrio Monasterio":
            formLink.href = "https://forms.gle/ovP4YE7a3MXYffJUA";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1Aeqrz012ajWaAop9zwuBeEbYKdU_JkH663N53YFO9Qc/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1GWLll204LrN0mLlg8RpbXqcC18mQIX4&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Los Kokitos Ltda.";
            resumeEntity = "Los Kokitos";
            municipality = "La Plata";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Maldonado y su Afluente en Barrio Monasterio"
            resumeWork = "Arroyo Maldonado";
        break;
        case "Pilar (Cooperativa de Trabajo Lu.tra Ltda.) - Saneamiento, limpieza y mantenimiento de los Afluentes del Río Luján en Pilar":
            formLink.href = "https://forms.gle/qysKkRvfU7seqyxNA";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1si0cW24l4HmPzjAJrXEnk0pA41xeValjxYdWgZHVmWs/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1TBZctvsHZYelk0Yy393JIvIohs9oGTw&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Lu.tra Ltda.";
            resumeEntity = "Lutra";
            municipality = "Pilar";
            work = "Saneamiento, limpieza y mantenimiento de los Afluentes del Río Luján en Pilar"
            resumeWork = "Afluentes del Río Luján en Pilar";
        break;
        case "Tigre (Cooperativa de Trabajo Lu.tra Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Claro":
            formLink.href = "https://forms.gle/qysKkRvfU7seqyxNA";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1si0cW24l4HmPzjAJrXEnk0pA41xeValjxYdWgZHVmWs/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1wdO51u76A26baGnhgSxOP50Zu1oxJkg&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Lu.tra Ltda.";
            resumeEntity = "Lutra";
            municipality = "Tigre";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Claro"
            resumeWork = "Arroyo Claro";
        break;
        case "San Miguel (Cooperativa de Trabajo Luchar es Crecer Ltda.) - Saneamiento, limpieza y mantenimiento del margen noroeste del Río Reconquista":
            formLink.href = "https://forms.gle/cVBi6nRznsj2j3s58";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1HbU3rMQ6SBNCCHmpsuA0hAKPmzeI_7dPj_VJZ72u3J0/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1AIF6bDpMERMQDunukOlY2oIVHG3nAgA&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Luchar es Crecer Ltda.";
            resumeEntity = "Luchar es Crecer";
            municipality = "San Miguel";
            work = "Saneamiento, limpieza y mantenimiento del margen noroeste del Río Reconquista"
            resumeWork = "Río Reconquista";
        break;
        case "Merlo (Cooperativa de Trabajo Mi Cielo Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Saladero, Granadero, y El Trébol":
            formLink.href = "https://forms.gle/crSFB4DDjHhAS4Ft6";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1RAZk8CQixYu5JoZNS1OzA8h9ddClQW3CF3dgsl27aoE/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1f_eSjrPtyEJ_vIFxxK6PNyVoUQnjC3Y&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Mi Cielo Ltda.";
            resumeEntity = "Mi Cielo";
            municipality = "Merlo";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos Saladero, Granadero, y El Trébol"
            resumeWork = "Arroyo Saladero y otros";
        break;
        case "Merlo (Cooperativa de Trabajo Mi Cielo Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Torres y afluentes":
            formLink.href = "https://forms.gle/crSFB4DDjHhAS4Ft6";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1RAZk8CQixYu5JoZNS1OzA8h9ddClQW3CF3dgsl27aoE/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1nIrTv62UAexj3AS3ajEMpM8EC7zArSg&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Mi Cielo Ltda.";
            resumeEntity = "Mi Cielo";
            municipality = "Merlo";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Torres y afluentes"
            resumeWork = "Arroyo Torres";
        break;
        case "Almirante Brown (Cooperativa de Trabajo Néstor Kirchner Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo del Rey y afluente":
            formLink.href = "https://forms.gle/4qsdoaQND5oysw6z7";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1yUDEt5Tg7079Bk8O1sPJ-52-pIhTcUVDkxqxUepSHS8/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1e0_x7ldOks-QjAjbqw6Mzm_BrnqcCfA&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Néstor Kirchner Ltda.";
            resumeEntity = "Néstor Kirchner";
            municipality = "Almirante Brown";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo del Rey y afluente"
            resumeWork = "Arroyo del Rey";
        break;
        case "La Plata (Cooperativa de Trabajo Néstor Vive en Nosotros Ltda.) - Saneamiento, limpieza y mantenimiento del Tramo superior del Arroyo El Gato y Afluentes 2 y 3":
            formLink.href = "https://forms.gle/aphdWFfdstNqysbT9";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1MssPsofu7hbwaeXiT-JFQA9gbr4bo_al0hQsM0RhWW8/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1X-KEL4F4ob2L5xXtzUPhE3iFBpk9SIM&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Néstor Vive en Nosotros Ltda.";
            resumeEntity = "Néstor Vive en Nosotros";
            municipality = "La Plata";
            work = "Saneamiento, limpieza y mantenimiento del Tramo superior del Arroyo El Gato y Afluentes 2 y 3"
            resumeWork = "Arroyo El Gato";
        break;
        case "Campana (Cooperativa de Trabajo Nuevo Cambio Ltda.) - Saneamiento, limpieza y mantenimiento de los canales en Ingeniero Otamendi, prolongación de Av. Ameghino y afluentes del Arroyo Santa Cruz":
            formLink.href = "https://forms.gle/G6kbstnhV19YyX558";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1sJcKqPYne8l9HQwIk0T06HxSeZZ0AZJH8FzmIT1mAh0/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1YxlWr075Bym5cWZJq3SUekgHDGn6CAw&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Nuevo Cambio Ltda.";
            resumeEntity = "Nuevo Cambio";
            municipality = "Campana";
            work = "Saneamiento, limpieza y mantenimiento de los canales en Ingeniero Otamendi, prolongación de Av. Ameghino y afluentes del Arroyo Santa Cruz"
            resumeWork = "Otamendi y otros";
        break;
        case "Escobar (Cooperativa de Trabajo Nuevo Cambio Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Garín":
            formLink.href = "https://forms.gle/G6kbstnhV19YyX558";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1sJcKqPYne8l9HQwIk0T06HxSeZZ0AZJH8FzmIT1mAh0/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1G3mXdXkR0gxYN98Y_4Op4kDn4P4Pu9w&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Nuevo Cambio Ltda.";
            resumeEntity = "Nuevo Cambio";
            municipality = "Escobar";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Garín"
            resumeWork = "Arroyo Garín";
        break;
        case "La Plata (Cooperativa de Trabajo Nuevo Cambio Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Carnaval y Afluente":
            formLink.href = "https://forms.gle/G6kbstnhV19YyX558";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1sJcKqPYne8l9HQwIk0T06HxSeZZ0AZJH8FzmIT1mAh0/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1lGP2A--ZAVAH5qan3NQ9PxFl7fceL7M&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Nuevo Cambio Ltda.";
            resumeEntity = "Nuevo Cambio";
            municipality = "La Plata";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Carnaval y Afluente"
            resumeWork = "Arroyo Carnaval";
        break;
        case "Almirante Brown (Cooperativa de Trabajo Nuevos Horizontes Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales Garibaldi, Espora, La Tijereta y Charcas":
            formLink.href = "https://forms.gle/o7Eup7ewMJAS8BWW6";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1TwR09u8PDmUfTiiVTFrsK3RvWvE3oWjFsHDuFFfCk8g/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1pmiu2FX_ktL5QUk-Ia-nTXo2Z7rcLp8&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Nuevos Horizontes Ltda.";
            resumeEntity = "Nuevos Horizontes";
            municipality = "Almirante Brown";
            work = "Saneamiento, limpieza y mantenimiento de los Canales Garibaldi, Espora, La Tijereta y Charcas"
            resumeWork = "Canal Garibaldi y otros";
        break;
        case "Almirante Brown (Cooperativa de Trabajo Nuevos Horizontes Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales pluviales del barrio Rayo de sol":
            formLink.href = "https://forms.gle/o7Eup7ewMJAS8BWW6";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1TwR09u8PDmUfTiiVTFrsK3RvWvE3oWjFsHDuFFfCk8g/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1d0vMqj-FYT-3f4d1MmlIaIe1ySk-_kE&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Nuevos Horizontes Ltda.";
            resumeEntity = "Nuevos Horizontes";
            municipality = "Almirante Brown";
            work = "Saneamiento, limpieza y mantenimiento de los Canales pluviales del barrio Rayo de sol"
            resumeWork = "Barrio Rayo del Sol";
        break;
        case "Chascomús (Cooperativa de Trabajo Nuevos Horizontes Ltda.) - Saneamiento, limpieza y mantenimiento del Afluente del Arroyo Valdez en zona norte":
            formLink.href = "https://forms.gle/o7Eup7ewMJAS8BWW6";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1TwR09u8PDmUfTiiVTFrsK3RvWvE3oWjFsHDuFFfCk8g/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=11jIoOEKkPoxkGxkfu1O1iGYhtHerKec&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Nuevos Horizontes Ltda.";
            resumeEntity = "Nuevos Horizontes";
            municipality = "Chascomús";
            work = "Saneamiento, limpieza y mantenimiento del Afluente del Arroyo Valdez en zona norte"
            resumeWork = "Afluente del Arroyo Valdez";
        break;
        case "Chascomús (Cooperativa de Trabajo Nuevos Horizontes Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Los Toldos y afluente":
            formLink.href = "https://forms.gle/o7Eup7ewMJAS8BWW6";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1TwR09u8PDmUfTiiVTFrsK3RvWvE3oWjFsHDuFFfCk8g/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1qPUNiLpH6C6X0KVYW83UyuduuIfwSLA&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Nuevos Horizontes Ltda.";
            resumeEntity = "Nuevos Horizontes";
            municipality = "Chascomús";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Los Toldos y afluente"
            resumeWork = "Arroyo los Toldos";
        break;
        case "Chascomús (Cooperativa de Trabajo Nuevos Horizontes Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Felipe y costa de laguna":
            formLink.href = "https://forms.gle/o7Eup7ewMJAS8BWW6";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1TwR09u8PDmUfTiiVTFrsK3RvWvE3oWjFsHDuFFfCk8g/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1KPoTnVSklbHCH6S_MQJBWGAo3BtGHyc&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Nuevos Horizontes Ltda.";
            resumeEntity = "Nuevos Horizontes";
            municipality = "Chascomús";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo San Felipe y costa de laguna"
            resumeWork = "Arroyo San Felipe";
        break;
        case "General Pueyrredón (Cooperativa de Trabajo Nuevos Horizontes Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos La Tapera y El Cardalito y el Canal de desagüe pluvial del barrio Nuevo Golf":
            formLink.href = "https://forms.gle/o7Eup7ewMJAS8BWW6";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1TwR09u8PDmUfTiiVTFrsK3RvWvE3oWjFsHDuFFfCk8g/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1pNlLqdkc5lvL16KPnAmGYlIdIqkRSdQ&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Nuevos Horizontes Ltda.";
            resumeEntity = "Nuevos Horizontes";
            municipality = "General Pueyrredón";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos La Tapera y El Cardalito y el Canal de desagüe pluvial del barrio Nuevo Golf"
            resumeWork = "Arroyo La Tapera y otros";
        break;
        case "General Pueyrredón (Cooperativa de Trabajo Nuevos Horizontes Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Corrientes y Afluentes":
            formLink.href = "https://forms.gle/o7Eup7ewMJAS8BWW6";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1TwR09u8PDmUfTiiVTFrsK3RvWvE3oWjFsHDuFFfCk8g/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1tdk8RNC6VSCKspA9hW6N8SARGRFyAfQ&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Nuevos Horizontes Ltda.";
            resumeEntity = "Nuevos Horizontes";
            municipality = "General Pueyrredón";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Corrientes y Afluentes"
            resumeWork = "Arroyo Corrientes";
        break;
        case "Berazategui (Cooperativa de Trabajo Pacha Limpia Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Pereyra y su afluente":
            formLink.href = "https://forms.gle/Thd2hm8LYqyShxLG7";
            reportLink.href = "https://docs.google.com/spreadsheets/d/12-YXrI3aG7K8tgq_l25NSuuw9je_9vuFihCwBCdvJik/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1t7RqMd5GP3Hlu4VjSCzrn5WtiX40C7I&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Pacha Limpia Ltda.";
            resumeEntity = "Pacha Limpia";
            municipality = "Berazategui";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Pereyra y su afluente"
            resumeWork = "Arroyo Pereyra";
        break;
        case "Berazategui (Cooperativa de Trabajo Pacha Limpia Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Juan y desagües de zona norte":
            formLink.href = "https://forms.gle/Thd2hm8LYqyShxLG7";
            reportLink.href = "https://docs.google.com/spreadsheets/d/12-YXrI3aG7K8tgq_l25NSuuw9je_9vuFihCwBCdvJik/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1hTXIufwxjce_AKlNAlPawe34Dvpsl_A&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Pacha Limpia Ltda.";
            resumeEntity = "Pacha Limpia";
            municipality = "Berazategui";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo San Juan y desagües de zona norte"
            resumeWork = "Arroyo San Juan";
        break;
        case "Presidente Perón (Cooperativa de Trabajo Presidente Perón Ltda.) - Saneamiento, limpieza y mantenimiento del Canal 1, afluente Don Eduardo y zanjones del Barrio Panamérica":
            formLink.href = "https://forms.gle/KQbroNsDCdM8kY1a8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1hWaWFFk0VClhjZOnUDelQddMCG6U1yoa2c5Ii9RcDkk/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1ZkDRGSyt-KDPG2W4jMw6KG6jU8XqKdk&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Presidente Perón Ltda.";
            resumeEntity = "Presidente Perón";
            municipality = "Presidente Perón";
            work = "Saneamiento, limpieza y mantenimiento del Canal 1, afluente Don Eduardo y zanjones del Barrio Panamérica"
            resumeWork = "Canal 1 y otros";
        break;
        case "Brandsen (Cooperativa de Trabajo Primero Brandsen Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Gonzalez y Afluentes en la localidad de Jeppener":
            formLink.href = "https://forms.gle/UE4xpj33pK8rygsz6";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1pmKK9vyO5bKHtLFTviLkgYAtoXqxvXB7CeFjNdQbJD8/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1osLaVEBNnWNyUqCdo3arernes10m7nI&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Primero Brandsen Ltda.";
            resumeEntity = "Primero Brandsen";
            municipality = "Brandsen";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Gonzalez y Afluentes en la localidad de Jeppener"
            resumeWork = "Arroyo Gonzalez";
        break;
        case "José C. Paz (Cooperativa de Trabajo Proyectando Juntos Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Pinazo":
            formLink.href = "https://forms.gle/Hr35UasU7tUvoWzQ6";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1SbJKUMc0pB9cpVv7doceQWWH5ZFciStbpZB87h3twUA/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1JWY5qFDqxr4ybgRIB1BbHrpe6FIScco&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Proyectando Juntos Ltda.";
            resumeEntity = "Proyectando Juntos";
            municipality = "José C. Paz";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Pinazo"
            resumeWork = "Arroyo Pinazo";
        break;
        case "Tigre (Cooperativa de Trabajo Proyectando Juntos Ltda.) - Saneamiento, limpieza y mantenimiento del Canal Almirante Brown y Río Reconquista":
            formLink.href = "https://forms.gle/Hr35UasU7tUvoWzQ6";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1SbJKUMc0pB9cpVv7doceQWWH5ZFciStbpZB87h3twUA/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1F6OZDLcSzFPLQl_MVRE8NCu7JoM6PJ0&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Proyectando Juntos Ltda.";
            resumeEntity = "Proyectando Juntos";
            municipality = "Tigre";
            work = "Saneamiento, limpieza y mantenimiento del Canal Almirante Brown y Río Reconquista"
            resumeWork = "Canal Almirante Brown y Río Reconquista";
        break;
        case "Pilar (Cooperativa de Trabajo Rocío Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos De Vicenzo y Pinazo":
            formLink.href = "https://forms.gle/iCpSEeyHRGhyKvED7";
            reportLink.href = "https://docs.google.com/spreadsheets/d/10jfn_2AsXKgS8o8em72YpLCwWYSWwnm8sVvye1KYSIY/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1nsHUdAdfjs2A7a1aTmp74ZRD3LSWaP8&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Rocío Ltda.";
            resumeEntity = "Rocío";
            municipality = "Pilar";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos De Vicenzo y Pinazo"
            resumeWork = "Arroyos De Vicenzo y Pinazo";
        break;
        case "Pilar (Cooperativa de Trabajo Rocío Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos La Verde y Miriñay y su Afluente":
            formLink.href = "https://forms.gle/iCpSEeyHRGhyKvED7";
            reportLink.href = "https://docs.google.com/spreadsheets/d/10jfn_2AsXKgS8o8em72YpLCwWYSWwnm8sVvye1KYSIY/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=14LL2Xfh4gDxTpzWZw3o6s9EBlB9r2q8&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Rocío Ltda.";
            resumeEntity = "Rocío";
            municipality = "Pilar";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos La Verde y Miriñay y su Afluente"
            resumeWork = "Arroyos La Verde y Miriñay";
        break;
        case "Pilar (Cooperativa de Trabajo Rocío Ltda.) - Saneamiento, limpieza y mantenimiento de los canales Monterrey y Doña Iris":
            formLink.href = "https://forms.gle/iCpSEeyHRGhyKvED7";
            reportLink.href = "https://docs.google.com/spreadsheets/d/10jfn_2AsXKgS8o8em72YpLCwWYSWwnm8sVvye1KYSIY/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1Q6wiJ_z_YtubGhzo6Pq1iOuNoXjkvjA&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Rocío Ltda.";
            resumeEntity = "Rocío";
            municipality = "Pilar";
            work = "Saneamiento, limpieza y mantenimiento de los canales Monterrey y Doña Iris"
            resumeWork = "Canales Monterrey y Doña Iris";
        break;
        case "San Fernando (Cooperativa de Trabajo Rocío Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales paralelos a Ruta Nacional N°197 y Ramal Tigre":
            formLink.href = "https://forms.gle/iCpSEeyHRGhyKvED7";
            reportLink.href = "https://docs.google.com/spreadsheets/d/10jfn_2AsXKgS8o8em72YpLCwWYSWwnm8sVvye1KYSIY/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1tmM1IAfQh0H-9nP7VZVVsuZHrMyCL1c&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Rocío Ltda.";
            resumeEntity = "Rocío";
            municipality = "San Fernando";
            work = "Saneamiento, limpieza y mantenimiento de los Canales paralelos a Ruta Nacional N°197 y Ramal Tigre"
            resumeWork = "Canal 197";
        break;
        case "San Isidro (Cooperativa de Trabajo Rocío Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales en San Isidro":
            formLink.href = "https://forms.gle/iCpSEeyHRGhyKvED7";
            reportLink.href = "https://docs.google.com/spreadsheets/d/10jfn_2AsXKgS8o8em72YpLCwWYSWwnm8sVvye1KYSIY/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=19KeNyCqe1lGwQHCXkWX3eQr4okKyZTc&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Rocío Ltda.";
            resumeEntity = "Rocío";
            municipality = "San Isidro";
            work = "Saneamiento, limpieza y mantenimiento de los Canales en San Isidro"
            resumeWork = "San Isidro";
        break;
        case "Brandsen (Cooperativa de Trabajo Somos Brandseños Ltda.) - Saneamiento, limpieza y mantenimiento del Canal Aleluya y Zanjón Alfonsina Storni":
            formLink.href = "https://forms.gle/2CBSAnnNwdaSFRi97";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1GcYNM9_0LF_kWbeOaQ2bdh4zOssN3cFqWdHplkd3n-E/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=13kZC_JC0vThSKGZOOBWN2jMwxhrOjjM&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Somos Brandseños Ltda.";
            resumeEntity = "Somos Brandseños";
            municipality = "Brandsen";
            work = "Saneamiento, limpieza y mantenimiento del Canal Aleluya y Zanjón Alfonsina Storni"
            resumeWork = "Canal Aleluya";
        break;
        case "Brandsen (Cooperativa de Trabajo Somos Brandseños Ltda.) - Saneamiento, limpieza y mantenimiento del Canal Belgrano y del Zanjón Córdoba":
            formLink.href = "https://forms.gle/2CBSAnnNwdaSFRi97";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1GcYNM9_0LF_kWbeOaQ2bdh4zOssN3cFqWdHplkd3n-E/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1L0dgqfP1OOYDBMhMXYoLVSaZWrhOgC4&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Somos Brandseños Ltda.";
            resumeEntity = "Somos Brandseños";
            municipality = "Brandsen";
            work = "Saneamiento, limpieza y mantenimiento del Canal Belgrano y del Zanjón Córdoba"
            resumeWork = "Canal Belgrano";
        break;
        case "Malvinas Argentinas (Cooperativa de Trabajo Somos Nosotros Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Cuzco, Claro y Albuera":
            formLink.href = "https://forms.gle/2oy4ZbrB5ViHYj1n8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1E3c4zU7dQrz4w0FGIxdxPIP7Wj6wEjLkWB6TF940soM/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1dIuJ_BM8uzGr-Shs72tHQM8T8OuOL30&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Somos Nosotros Ltda.";
            resumeEntity = "Somos Nosotros";
            municipality = "Malvinas Argentinas";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos Cuzco, Claro y Albuera"
            resumeWork = "Arroyo Cuzco y otros";
        break;
        case "José C. Paz (Cooperativa de Trabajo Sueños Paceños Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Zinny aguas abajo y canal Beláustegui":
            formLink.href = "https://forms.gle/q4JDRQLqATiWMBr26";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1RTysPoFEpQ4O5QDo9nVaUZb3XfOr1UMb_NL8yL3L5E4/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1wYWDNIHfCZKopu426KgaccQS7kiCbmY&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Sueños Paceños Ltda.";
            resumeEntity = "Sueños Paceños";
            municipality = "José C. Paz";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Zinny aguas abajo y canal Beláustegui"
            resumeWork = "Arroyos Zinny y Beláustegui";
        break;
        case "José C. Paz (Cooperativa de Trabajo Sueños Paceños Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Zinny aguas arriba y canal de Panamá":
            formLink.href = "https://forms.gle/q4JDRQLqATiWMBr26";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1RTysPoFEpQ4O5QDo9nVaUZb3XfOr1UMb_NL8yL3L5E4/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1F1sMMx7Qyt4vO7QRKfGmrvNNJjH2_-E&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Sueños Paceños Ltda.";
            resumeEntity = "Sueños Paceños";
            municipality = "José C. Paz";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Zinny aguas arriba y canal de Panamá"
            resumeWork = "Arroyos Zinny y Panamá";
        break;
        case "Pilar (Cooperativa de Trabajo Tratado del Pilar 2 Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Toro":
            formLink.href = "https://forms.gle/hAVTjBmsjjeAXg299";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1d9vLEHGG_ZXc2hHdpKM6HLCClW27R7yIMefpCCQjiJY/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1IU8myHYsrW1o0mRmocmlQbYuotSPu-A&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Tratado del Pilar 2 Ltda.";
            resumeEntity = "Tratado del Pilar 2";
            municipality = "Pilar";
            work = "Saneamiento, limpieza y mantenimiento del Arroyo Toro"
            resumeWork = "Arroyo Toro";
        break;
        case "Ezeiza (Cooperativa de Trabajo Virgen del Luján Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos del Gato y Aguirre y su afluente":
            formLink.href = "https://forms.gle/MaHg51mYf87yxuUe6";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1_GES0zqyBxxGupBK_9Ipq2v0VjTBw_BA-Wu6fi3UJVY/edit?usp=sharing";
            mapIframe.src = "https://www.google.com/maps/d/u/0/embed?mid=1aDkWD4FjQpr6aZNve0JBiXvMDViZfCQ&ehbc=2E312F&noprof=1";
            entity = "Cooperativa de Trabajo Virgen del Luján Ltda.";
            resumeEntity = "Virgen del Luján";
            municipality = "Ezeiza";
            work = "Saneamiento, limpieza y mantenimiento de los Arroyos del Gato y Aguirre y su afluente"
            resumeWork = "Arroyo del Gato y otros";
        break;
            
            default:
            console.error('Opción seleccionada no válida.');
    }

    referenceParagraph.innerHTML = `PARTE MENSUAL - ${month.toUpperCase()} 2025 - ${resumeEntity.toUpperCase()} - ${resumeWork.toUpperCase()}`;
    contentParagraph.innerHTML = `Se deja constancia que se han realizado los registros de los reportes diarios suministrados por la ${entity}, perteneciente a la obra con denominación: ${work}, en el municipio de ${municipality}, correspondiente al mes de ${month} de 2025.<br>Se encuentran embebidos los partes semanales.`;

    copyIcon.forEach(function(icon) { icon.style.display = 'block'; });
}

function actualizarActiveWork() {
    var agent = document.getElementById("agent").value;
    var activeWork = document.getElementById("active-work");
    activeWork.innerHTML = "";

    if (agent === "Camilo Smittenaar") {
        var opciones = [
            "Seleccione una obra",
            "La Plata (Cooperativa de Trabajo 3 de Diciembre Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Garibaldi y afluentes, canales de desagüe del Barrio Garibaldi y paseo del Arroyo El Pescado",
            "La Plata (Cooperativa de Trabajo 3 de Diciembre Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Rodríguez desde 28 hasta 141, Arroyo Don Carlos desde 185 hasta 189 y zanjón paralelo a calle 486",
            "La Plata (Cooperativa de Trabajo 3 de Diciembre Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Juan y afluentes del Arroyo Carnaval",
            "La Plata (Cooperativa de Trabajo Almagro Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo El Gato y afluentes en las localidades de Gonnet y Ringuelet",
            "La Plata (Cooperativa de Trabajo Almagro Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo El Gato y afluentes en Melchor Romero y Lisandro Olmos",
            "La Plata (Cooperativa de Trabajo Almagro Ltda.) - Saneamiento, limpieza y mantenimiento del Tramo inferior del Arroyo El Gato",
            "La Plata (Cooperativa de Trabajo Amasando Sueños Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Regimiento y su afluente",
            "La Plata (Cooperativa de Trabajo Argentina Resiste Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Martín y Carnaval",
            "La Plata (Cooperativa de Trabajo Argentina Resiste Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Pérez y afluentes",
            "La Plata (Cooperativa de Trabajo Los Kokitos Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Don Carlos y Rodríguez",
            "La Plata (Cooperativa de Trabajo Los Kokitos Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Maldonado y su Afluente en Barrio Monasterio",
            "La Plata (Cooperativa de Trabajo Néstor Vive en Nosotros Ltda.) - Saneamiento, limpieza y mantenimiento del Tramo superior del Arroyo El Gato y Afluentes 2 y 3",
            "La Plata (Cooperativa de Trabajo Nuevo Cambio Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Carnaval y Afluente"];
    } else if (agent === "Gustavo Gómez") {
        var opciones = [
            "Seleccione una obra",
            "Berisso (Cooperativa de Trabajo El Hornero Comunitario Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Saladero y su afluente",
            "Brandsen (Cooperativa de Trabajo Primero Brandsen Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Gonzalez y Afluentes en la localidad de Jeppener",
            "Brandsen (Cooperativa de Trabajo Somos Brandseños Ltda.) - Saneamiento, limpieza y mantenimiento del Canal Aleluya y Zanjón Alfonsina Storni",
            "Brandsen (Cooperativa de Trabajo Somos Brandseños Ltda.) - Saneamiento, limpieza y mantenimiento del Canal Belgrano y del Zanjón Córdoba",
            "Ensenada (Cooperativa de Trabajo La Morita Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Doña Flora y su afluente y los canales Barragán y de Zona Franca",
            "Ezeiza (Cooperativa de Trabajo Las Colinas Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Aguirre y Rossi",
            "Ezeiza (Cooperativa de Trabajo Las Colinas Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales Cortez y Vista Alegre",
            "Ezeiza (Cooperativa de Trabajo Virgen del Luján Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos del Gato y Aguirre y su afluente"];
    } else if (agent === "Iván Orellana") {
        var opciones = [
            "Seleccione una obra",
            "José C. Paz (Cooperativa de Trabajo Proyectando Juntos Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Pinazo",
            "José C. Paz (Cooperativa de Trabajo Sueños Paceños Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Zinny aguas abajo y canal Beláustegui",
            "José C. Paz (Cooperativa de Trabajo Sueños Paceños Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Zinny aguas arriba y canal de Panamá",
            "San Miguel (Cooperativa de Trabajo Cielos Abiertos Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales Manuel Fraga y Bragado y sus afluentes",
            "San Miguel (Cooperativa de Trabajo Latinoamericana Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales Pascuala Cueto, Luis Viale y afluente del Arroyo los Berros",
            "San Miguel (Cooperativa de Trabajo Latinoamericana Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Los Berros",
            "San Miguel (Cooperativa de Trabajo Luchar es Crecer Ltda.) - Saneamiento, limpieza y mantenimiento del margen noroeste del Río Reconquista"];
    } else if (agent === "Valeria Figueroa") {
        var opciones = [
            "Seleccione una obra",
            "Esteban Echeverría (Cooperativa de Trabajo La Morita Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Medrano, El Triángulo, Ortega y Santa Catalina",
            "General Rodríguez (Cooperativa de Trabajo Evita Compañera Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos El Carpincho, Parque Granadero y los canales de Planta Urbana y Horacio Quiroga",
            "Malvinas Argentinas (Cooperativa de Trabajo Las Colinas Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Horquetas",
            "Malvinas Argentinas (Cooperativa de Trabajo Las Colinas Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Tunas",
            "Malvinas Argentinas (Cooperativa de Trabajo Somos Nosotros Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Cuzco, Claro y Albuera"];
    } else if (agent === "Juan Barroca") {
        var opciones = [
            "Seleccione una obra",
            "General San Martín (Cooperativa de Trabajo 9 de Julio Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales José León Suárez Norte, Esmeralda y afluentes de calle San Martín y paralelo a Au. Camino del Buen Ayre",
            "General San Martín (Cooperativa de Trabajo Che Guevara Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales de calle 135, José Ingenieros y Eva Perón",
            "Pilar (Cooperativa de Trabajo Construyendo Patria Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Burgueño y afluentes",
            "Pilar (Cooperativa de Trabajo Lu.tra Ltda.) - Saneamiento, limpieza y mantenimiento de los Afluentes del Río Luján en Pilar",
            "Pilar (Cooperativa de Trabajo Rocío Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos De Vicenzo y Pinazo",
            "Pilar (Cooperativa de Trabajo Rocío Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos La Verde y Miriñay y su Afluente",
            "Pilar (Cooperativa de Trabajo Rocío Ltda.) - Saneamiento, limpieza y mantenimiento de los canales Monterrey y Doña Iris",
            "Pilar (Cooperativa de Trabajo Tratado del Pilar 2 Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Toro",
            "San Fernando (Cooperativa de Trabajo Rocío Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales paralelos a Ruta Nacional N°197 y Ramal Tigre",
            "San Isidro (Cooperativa de Trabajo Rocío Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales en San Isidro"];
    } else if (agent === "Julia Palacio") {
        var opciones = [
            "Seleccione una obra",
            "Lomas de Zamora (Cooperativa de Trabajo 9 de Julio Ltda.) - Saneamiento, limpieza y mantenimiento del Cauce Viejo del Arroyo del Rey",
            "Lomas de Zamora (Cooperativa de Trabajo Cada día un Sueño Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo del Rey",
            "Merlo (Cooperativa de Trabajo Cada día un Sueño Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Gregorio de Laferrere y Afluente Bustillo",
            "Presidente Perón (Cooperativa de Trabajo Presidente Perón Ltda.) - Saneamiento, limpieza y mantenimiento del Canal 1, afluente Don Eduardo y zanjones del Barrio Panamérica"];
    } else if (agent === "Leonardo Ruiz") {
        var opciones = [
            "Seleccione una obra",
            "General Rodríguez (Cooperativa de Trabajo Fuerzas del Alma Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Catonas",
            "General Rodríguez (Cooperativa de Trabajo La Gaviota Ltda.) - Saneamiento, limpieza y mantenimiento de la Cañada San Antonio Brazo Corto y Canal Ricardo Balbin",
            "General Rodríguez (Cooperativa de Trabajo La Gaviota Ltda.) - Saneamiento, limpieza y mantenimiento de la Cañada San Antonio Brazo Largo",
            "General Rodríguez (Cooperativa de Trabajo Los Horneros Ltda.) - Saneamiento, limpieza y mantenimiento de la Cañada Álvarez",
            "General Rodríguez (Cooperativa de Trabajo Los Horneros Ltda.) - Saneamiento, limpieza y mantenimiento de los afluentes del Arroyo Las Chozas"];
    } else if (agent === "Mario Miño") {
        var opciones = [
            "Seleccione una obra",
            "Almirante Brown (Asociación Civil La Fábrica) - Saneamiento, limpieza y mantenimiento del Arroyo San Francisco aguas abajo",
            "Almirante Brown (Asociación Civil La Fábrica) - Saneamiento, limpieza y mantenimiento del Arroyo San Francisco aguas arriba",
            "Almirante Brown (Cooperativa de Trabajo Néstor Kirchner Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo del Rey y afluente",
            "Almirante Brown (Cooperativa de Trabajo Nuevos Horizontes Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales Garibaldi, Espora, La Tijereta y Charcas",
            "Almirante Brown (Cooperativa de Trabajo Nuevos Horizontes Ltda.) - Saneamiento, limpieza y mantenimiento de los Canales pluviales del barrio Rayo de sol",
            "Florencio Varela (Cooperativa de Trabajo Evita 4 Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Conchitas",
            "Florencio Varela (Cooperativa de Trabajo Evita 4 Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Juan"];
    } else if (agent === "Mayra Guevara") {
        var opciones = [
            "Seleccione una obra",
            "Chascomús (Cooperativa de Trabajo Nuevos Horizontes Ltda.) - Saneamiento, limpieza y mantenimiento del Afluente del Arroyo Valdez en zona norte",
            "Chascomús (Cooperativa de Trabajo Nuevos Horizontes Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Los Toldos y afluente",
            "Chascomús (Cooperativa de Trabajo Nuevos Horizontes Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Felipe y costa de laguna",
            "General Pueyrredón (Cooperativa de Trabajo Nuevos Horizontes Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos La Tapera y El Cardalito y el Canal de desagüe pluvial del barrio Nuevo Golf",
            "General Pueyrredón (Cooperativa de Trabajo Nuevos Horizontes Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Corrientes y Afluentes",
            "Hurlingham (Cooperativa de Trabajo El Hornero Comunitario Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Soto",
            "Merlo (Cooperativa de Trabajo Mi Cielo Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Saladero, Granadero, y El Trébol",
            "Merlo (Cooperativa de Trabajo Mi Cielo Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Torres y afluentes",
            "Moreno (Cooperativa de Trabajo Ayelén Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Villanueva y Los Perros y los Canales 25 de Mayo, Acoyte y Gálvez González",
            "Tandil (Cooperativa de Trabajo El Laurel Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Langueyú, La Cascada y San Gabriel, Ramal H y áreas de regulación"];
    } else if (agent === "Silvia Guitián") {
        var opciones = [
            "Seleccione una obra",
            "Berazategui (Cooperativa de Trabajo Fuerzas del Alma Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Conchitas y su Afluente",
            "Berazategui (Cooperativa de Trabajo Pacha Limpia Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Pereyra y su afluente",
            "Berazategui (Cooperativa de Trabajo Pacha Limpia Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Juan y desagües de zona norte",
            "Quilmes (Cooperativa de Trabajo El Ombú Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Giménez y su aliviador y los canales IMPA y Monteagudo",
            "Quilmes (Cooperativa de Trabajo Evita Compañera Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Piedras desde Comandante Franco hasta Rodolfo López",
            "Quilmes (Cooperativa de Trabajo Evita Compañera Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Las Piedras desde Rodolfo López hasta C.816",
            "Quilmes (Cooperativa de Trabajo Evita Compañera Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Francisco desde su confluencia con el Arroyo Santo Domingo hasta Av. Zapiola",
            "Quilmes (Cooperativa de Trabajo Fuerzas del Alma Ltda.) - Saneamiento, limpieza y mantenimiento de la Cava y Canal de desagüe en Barrio Itati",
            "Quilmes (Cooperativa de Trabajo Fuerzas del Alma Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Santo Domingo y Las Piedras aguas abajo",
            "Quilmes (Cooperativa de Trabajo Fuerzas del Alma Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Francisco entre 888 y Tte. Gral. Donato Álvarez",
            "Quilmes (Cooperativa de Trabajo La Gaviota Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo San Francisco, desde Av. Zapiola hasta calle 888"];
    } else if (agent === "Teresa Colman") {
        var opciones = [
            "Seleccione una obra",
            "La Matanza (Cooperativa de Trabajo Cada día un Sueño Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Morales y Las Víboras y los canales de desagüe del Barrio Nicole",
            "La Matanza (Cooperativa de Trabajo Cada día un Sueño Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Morales y afluentes y el canal Apipé",
            "La Matanza (Cooperativa de Trabajo Fuerzas del Alma Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Dupi",
            "La Matanza (Cooperativa de Trabajo La Gaviota Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Susana y Don Mario y sus afluentes",
            "La Matanza (Cooperativa de Trabajo La Gaviota Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Susana y Dupi y los zanjones García Merou y de la Fuente",
            "La Matanza (Cooperativa de Trabajo La Gaviota Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Dupi y afluente Iguazú"];
    } else if (agent === "Victor Banegas") {
        var opciones = [
            "Seleccione una obra",
            "Campana (Cooperativa de Trabajo Nuevo Cambio Ltda.) - Saneamiento, limpieza y mantenimiento de los canales en Ingeniero Otamendi, prolongación de Av. Ameghino y afluentes del Arroyo Santa Cruz",
            "Escobar (Cooperativa de Trabajo Che Guevara Ltda.) - Saneamiento, limpieza y mantenimiento de los Arroyos Bedoya, Saboya y Los Pinos y el afluente del Arroyo Garín",
            "Escobar (Cooperativa de Trabajo La Plebeya Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Loma Verde",
            "Escobar (Cooperativa de Trabajo Nuevo Cambio Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Garín",
            "San Nicolás (Cooperativa de Trabajo Liderazgo Ltda.) - Saneamiento, limpieza y mantenimiento de los afluentes del Arroyo Ramallo",
            "San Nicolás (Cooperativa de Trabajo Liderazgo Ltda.) - Saneamiento, limpieza y mantenimiento de los canales Paraguay, Alberdi y de zona este",
            "Tigre (Cooperativa de Trabajo La Plebeya Ltda.) - Saneamiento, limpieza y mantenimiento del Canal El Dorado, Arroyo Lola y zanjas del Barrio Las Mascotas",
            "Tigre (Cooperativa de Trabajo Lu.tra Ltda.) - Saneamiento, limpieza y mantenimiento del Arroyo Claro",
            "Tigre (Cooperativa de Trabajo Proyectando Juntos Ltda.) - Saneamiento, limpieza y mantenimiento del Canal Almirante Brown y Río Reconquista",
            "Zárate (Cooperativa de Trabajo La Plebeya Ltda.) - Saneamiento, limpieza y mantenimiento de los Zanjones en la localidad de Zárate"];
    } 

    for (var i = 0; i < opciones.length; i++) {
        var option = document.createElement("option");
        option.value = opciones[i];
        option.text = opciones[i];
        activeWork.add(option);
    }
}

var formContainer = document.getElementsByClassName('form-container')[0];
var griContainer = document.getElementsByClassName('grid-container')[0];
var monthlyPartContainer = document.getElementsByClassName('monthly-part')[0];
var mapContainer = document.getElementsByClassName('map')[0];

document.getElementById('monthly-report').addEventListener('click', showMonthlySection);
document.getElementById('work-viewer').addEventListener('click', showMapSection);
document.getElementById('close-monthly-part').addEventListener('click',showFormNGrid);
document.getElementById('close-map').addEventListener('click',showFormNGrid);

function showMonthlySection(){
    formContainer.style.display = "none";
    griContainer.style.display = "none";
    monthlyPartContainer.style.display = "block";
    mapContainer.style.display = "none";
}

function showFormNGrid(){
    formContainer.style.display = "flex";
    griContainer.style.display = "flex";
    monthlyPartContainer.style.display = "none";
    mapContainer.style.display = "none";
}

function showMapSection(){
    formContainer.style.display = "none";
    griContainer.style.display = "none";
    monthlyPartContainer.style.display = "none";
    mapContainer.style.display = "block";
}

function showCopyCompleteReference(){
    var reference = document.getElementById('reference-paragraph').innerText;
    navigator.clipboard.writeText(reference).then(function() {
        const notification = document.getElementById("notificationR");
        notification.innerHTML = "Referencia copiada";
        notification.style.height = "36px";
        notification.style.opacity = ".8";
        setTimeout(function() {
            notification.style.height = "0px";
            notification.style.opacity = "0";
        }, 1500);
    }).catch(function(error) {
        console.error("Error al copiar el texto: ", error);
    });
};

function showCopyCompleteContent(){
    var content = document.getElementById('content-paragraph').innerText;
    navigator.clipboard.writeText(content).then(function() {
        const notification = document.getElementById("notificationC");
        notification.innerHTML = "Contenido copiado";
        notification.style.height = "36px";
        notification.style.opacity = ".8";
        setTimeout(function() {
            notification.style.height = "0px";
            notification.style.opacity = "0";
        }, 1500);
    }).catch(function(error) {
        console.error("Error al copiar el texto: ", error);
    });
};
