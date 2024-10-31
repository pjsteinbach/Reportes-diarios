document.getElementById('entity').addEventListener('click', actualizarObra);
document.getElementById('agent').addEventListener('click', actualizarEntidad);

function actualizarObra() {
    var entity = document.getElementById("entity").value;
    var formLink = document.getElementById("form_update__link");
    var reportLink = document.getElementById("form_report__link");

    switch (entity) {
        case "Asociación Civil La Fábrica Emprendimiento Productivo y Cultural":
            formLink.href = "https://forms.gle/aTcvy13Ci5vTVP127";
            reportLink.href = "https://docs.google.com/spreadsheets/d/18b6QPSs3puitRkqEvS0AfXvq8n8snxadeTrUDZwKCWg/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo 3 de Diciembre Ltda.":
            formLink.href = "https://forms.gle/jYJ3EZ7jtccBWqJr8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1XSi6yA8Guj4Lqq5BtjjcLIHWPgRNS_Z6z1O2vTZXZi4/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo 9 de Julio Ltda. (Gral. San Martín)":
            formLink.href = "https://forms.gle/vkJEQQxhp8pJr1oG8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1D0vucFDE78s90JexjozsD5sf6EgvOOOkBEDArXZS6t0/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo 9 de Julio Ltda. (Lomas de Zamora)":
            formLink.href = "https://forms.gle/yZEhxUzYLwbZXRwKA";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1pZpwuMfyEmqJjYhmGAwQI4_EstRdHHugBBG2PNW-_ow/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Almagro Ltda.":
            formLink.href = "https://forms.gle/EchN3u9UmVT8DSQX9";
            reportLink.href = "https://docs.google.com/spreadsheets/d/12MYmHwQMfIpyWRevzmfuH2gGwdwPq-0qP4Uhj0X32Kg/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Amasando Sueños Ltda.":
            formLink.href = "https://forms.gle/NrXix6pX65XGtZaSA";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1TIa5CMJF9njF6J5eS9YqNY6k76kVWS4PMFawLCGe0Fk/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Argentina Resiste Ltda.":
            formLink.href = "https://forms.gle/GLVbc5ji4nLpgAHF8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1ocD2Zb-edS6NjmHCOml8Cn3OjPN6jDjUp6VuknlOTGw/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Ayelén Ltda.":
            formLink.href = "https://forms.gle/ZUbcY1nuwZszbVph8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/12kPMqaYSEPzkaFv1C_PRfYDeqSiCzOXWo-gnWZL47mo/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Cada día un Sueño Ltda.":
            formLink.href = "https://forms.gle/7kgDoL3DYPEFShH6A";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1cqTG9NeTi9r44yoII5jCstflSHprWpGu7fGuKetsyMw/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Che Guevara Ltda.":
            formLink.href = "https://forms.gle/UH2fVE9J7JRFyC8F9";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1514MYFLr8zU047lAqJcq1IM8wbh-XGLRusROjJ4eIj4/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Cielos Abiertos Ltda.":
            formLink.href = "https://forms.gle/LmV29sQ4sn6mYAJd7";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1-WFe0YRYY3eqy1DzI12Y_H1FW5REKkBSc3EgFQx5VD4/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Construyendo Patria Ltda.":
            formLink.href = "https://forms.gle/n4ToWB2g6CjUWGLG8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1IPlQKSuhiVkxbfM0PWWJwuEKi3hAY6EpoOxD737j-o4/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo El Hornero Comunitario Ltda.":
            formLink.href = "https://forms.gle/RhcSF3t6EkxRYVt89";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1AJ9D1F8eXSUqMFYCMnJ7XLdUJhO9pfzz3JCQY4QLIdA/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo El Laurel Ltda.":
            formLink.href = "https://forms.gle/4GsmNzaapMh2gUay8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1i7bZpnnvBDWU_wMr7CmsgVbgYKxDxwtNen_ggSNQRqQ/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo El Ombú Ltda.":
            formLink.href = "https://forms.gle/uU8Dr7hHYKWHuk1B7";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1wG-n3mo5273-YlqTILSZ-DnKuoltMszaP-Lr-18rpWY/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Evita 4 Ltda.":
            formLink.href = "https://forms.gle/RuGDzASz6EaPGMdF7";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1ZQmUsUw9NY3VJScYySPM7plkGxImh88-5XheqYQ5oVI/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Evita Compañera Ltda.":
            formLink.href = "https://forms.gle/AHynUcJDk38jTzuM7";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1fJdxIsIqE3fB1GApyCJWFWHesZv79SdyCZp8lrPgYmU/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Fuerzas del Alma Ltda.":
            formLink.href = "https://forms.gle/CX8KuAXux6hx3fdb8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1ADldQ3poqRimI7RYuqG5nNXlq0gQq5KWt26O9DIW3kY/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo La Gaviota Ltda.":
            formLink.href = "https://forms.gle/PvkjJj6iEt8wuhcSA";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1YUP9OhQVS5dhGMzlvbn_SdVb7ZiJfrZCAuQIOZMIVzY/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo La Morita Ltda.":
            formLink.href = "https://forms.gle/ud3dx1BaN8ViFJCN8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1n1LPRGw5YQ-nFwOAJvrohbK8hBgqu0mzWtoRPdhEUb4/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo La Plebeya Ltda.":
            formLink.href = "https://forms.gle/c4hR4jrs3QvxWZTT9";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1MEhbwHVMAyukQxtaToIShxk7X7_0EB7K5AYgHCM5qdM/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Las Colinas Ltda.":
            formLink.href = "https://forms.gle/Tyy1q2JUViRn8yEX8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1z_GtzOvi_BCv2ktJjO6u4yUxFekA0GL3bS9S1admUiI/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Latinoamericana Ltda.":
            formLink.href = "https://forms.gle/o8JdpKRCYYqWacT38";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1gvS45FKwBe-aMvGNhSSy7GgFsDmLWG3ioVlXFRA_FhQ/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Liderazgo Ltda.":
            formLink.href = "https://forms.gle/NQJxKhdf4yuPWUyh7";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1n9Skg-MNm27Npo2QGy5u6g52qM-yQnBCq3VovyWgp4o/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Los Horneros Ltda.":
            formLink.href = "https://forms.gle/FVRdeZ9jogPmCHXd9";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1hunIW2lcbU_W8sXtXNDRm_LIOFD6EwLj1M7s6uHfFTE/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Los Kokitos Ltda.":
            formLink.href = "https://forms.gle/ovP4YE7a3MXYffJUA";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1Aeqrz012ajWaAop9zwuBeEbYKdU_JkH663N53YFO9Qc/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Lu.tra Ltda.":
            formLink.href = "https://forms.gle/qysKkRvfU7seqyxNA";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1si0cW24l4HmPzjAJrXEnk0pA41xeValjxYdWgZHVmWs/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Luchar es Crecer Ltda.":
            formLink.href = "https://forms.gle/cVBi6nRznsj2j3s58";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1HbU3rMQ6SBNCCHmpsuA0hAKPmzeI_7dPj_VJZ72u3J0/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Mi Cielo Ltda.":
            formLink.href = "https://forms.gle/crSFB4DDjHhAS4Ft6";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1RAZk8CQixYu5JoZNS1OzA8h9ddClQW3CF3dgsl27aoE/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Néstor Kirchner Ltda.":
            formLink.href = "https://forms.gle/4qsdoaQND5oysw6z7";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1yUDEt5Tg7079Bk8O1sPJ-52-pIhTcUVDkxqxUepSHS8/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Néstor Vive en Nosotros Ltda.":
            formLink.href = "https://forms.gle/aphdWFfdstNqysbT9";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1MssPsofu7hbwaeXiT-JFQA9gbr4bo_al0hQsM0RhWW8/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Nuevo Cambio Ltda.":
            formLink.href = "https://forms.gle/G6kbstnhV19YyX558";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1sJcKqPYne8l9HQwIk0T06HxSeZZ0AZJH8FzmIT1mAh0/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Nuevos Horizontes Ltda.":
            formLink.href = "https://forms.gle/o7Eup7ewMJAS8BWW6";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1TwR09u8PDmUfTiiVTFrsK3RvWvE3oWjFsHDuFFfCk8g/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Pacha Limpia Ltda.":
            formLink.href = "https://forms.gle/Thd2hm8LYqyShxLG7";
            reportLink.href = "https://docs.google.com/spreadsheets/d/12-YXrI3aG7K8tgq_l25NSuuw9je_9vuFihCwBCdvJik/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Presidente Perón Ltda.":
            formLink.href = "https://forms.gle/KQbroNsDCdM8kY1a8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1hWaWFFk0VClhjZOnUDelQddMCG6U1yoa2c5Ii9RcDkk/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Primero Brandsen Ltda.":
            formLink.href = "https://forms.gle/UE4xpj33pK8rygsz6";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1pmKK9vyO5bKHtLFTviLkgYAtoXqxvXB7CeFjNdQbJD8/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Proyectando Juntos Ltda.":
            formLink.href = "https://forms.gle/Hr35UasU7tUvoWzQ6";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1SbJKUMc0pB9cpVv7doceQWWH5ZFciStbpZB87h3twUA/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Rocío Ltda.":
            formLink.href = "https://forms.gle/iCpSEeyHRGhyKvED7";
            reportLink.href = "https://docs.google.com/spreadsheets/d/10jfn_2AsXKgS8o8em72YpLCwWYSWwnm8sVvye1KYSIY/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Somos Brandseños Ltda.":
            formLink.href = "https://forms.gle/2CBSAnnNwdaSFRi97";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1GcYNM9_0LF_kWbeOaQ2bdh4zOssN3cFqWdHplkd3n-E/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Somos Nosotros Ltda.":
            formLink.href = "https://forms.gle/2oy4ZbrB5ViHYj1n8";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1E3c4zU7dQrz4w0FGIxdxPIP7Wj6wEjLkWB6TF940soM/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Sueños Paceños Ltda.":
            formLink.href = "https://forms.gle/q4JDRQLqATiWMBr26";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1RTysPoFEpQ4O5QDo9nVaUZb3XfOr1UMb_NL8yL3L5E4/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Tratado del Pilar 2 Ltda.":
            formLink.href = "https://forms.gle/hAVTjBmsjjeAXg299";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1d9vLEHGG_ZXc2hHdpKM6HLCClW27R7yIMefpCCQjiJY/edit?usp=sharing";
            break;
        case "Cooperativa de Trabajo Virgen del Luján Ltda.":
            formLink.href = "https://forms.gle/MaHg51mYf87yxuUe6";
            reportLink.href = "https://docs.google.com/spreadsheets/d/1_GES0zqyBxxGupBK_9Ipq2v0VjTBw_BA-Wu6fi3UJVY/edit?usp=sharing";
            break;

            default:
            console.error('Opción seleccionada no válida.');
    }    

}

function actualizarEntidad() {
    var agent = document.getElementById("agent").value;
    var entity = document.getElementById("entity");
    entity.innerHTML = ""; // Clear previous options

    if (agent === "Camilo Smittenaar") {
        var opciones = [
            "Cooperativa de Trabajo 3 de Diciembre Ltda.",
            "Cooperativa de Trabajo Almagro Ltda.",
            "Cooperativa de Trabajo Amasando Sueños Ltda.",
            "Cooperativa de Trabajo Argentina Resiste Ltda.",
            "Cooperativa de Trabajo Los Kokitos Ltda.",
            "Cooperativa de Trabajo Néstor Vive en Nosotros Ltda.",
            "Cooperativa de Trabajo Nuevo Cambio Ltda."];
    } else if (agent === "Gustavo Gómez") {
        var opciones = [
            "Cooperativa de Trabajo El Hornero Comunitario Ltda.",
            "Cooperativa de Trabajo La Morita Ltda.",
            "Cooperativa de Trabajo Las Colinas Ltda.",
            "Cooperativa de Trabajo Primero Brandsen Ltda.",
            "Cooperativa de Trabajo Somos Brandseños Ltda.",
            "Cooperativa de Trabajo Virgen del Luján Ltda."];
    } else if (agent === "Iván Orellana") {
        var opciones = [
            "Cooperativa de Trabajo Cielos Abiertos Ltda.",
            "Cooperativa de Trabajo Latinoamericana Ltda.",
            "Cooperativa de Trabajo Luchar es Crecer Ltda.",
            "Cooperativa de Trabajo Proyectando Juntos Ltda.",
            "Cooperativa de Trabajo Sueños Paceños Ltda."];
    } else if (agent === "Javier Chioccariello") {
        var opciones = [
            "Cooperativa de Trabajo Evita Compañera Ltda.",
            "Cooperativa de Trabajo La Morita Ltda.",
            "Cooperativa de Trabajo Las Colinas Ltda.",
            "Cooperativa de Trabajo Somos Nosotros Ltda."];
    } else if (agent === "Juan Barroca") {
        var opciones = [
            "Cooperativa de Trabajo 9 de Julio Ltda. (GSM)",
            "Cooperativa de Trabajo Che Guevara Ltda.",
            "Cooperativa de Trabajo Construyendo Patria Ltda.",
            "Cooperativa de Trabajo Lu.tra Ltda.",
            "Cooperativa de Trabajo Rocío Ltda.",
            "Cooperativa de Trabajo Tratado del Pilar 2 Ltda."];
    } else if (agent === "Julia Palacio") {
        var opciones = [
            "Cooperativa de Trabajo 9 de Julio Ltda. (LDZ)",
            "Cooperativa de Trabajo Cada día un Sueño Ltda.",
            "Cooperativa de Trabajo Presidente Perón Ltda."];
    } else if (agent === "Leonardo Ruiz") {
        var opciones = [
            "Cooperativa de Trabajo Fuerzas del Alma Ltda.",
            "Cooperativa de Trabajo La Gaviota Ltda.",
            "Cooperativa de Trabajo Los Horneros Ltda."];
    } else if (agent === "Mario Miño") {
        var opciones = [
            "Asociación Civil La Fábrica Emprendimiento Productivo y Cultural",
            "Cooperativa de Trabajo Evita 4 Ltda.",
            "Cooperativa de Trabajo Néstor Kirchner Ltda.",
            "Cooperativa de Trabajo Nuevos Horizontes Ltda."];
    } else if (agent === "Mayra Guevara") {
        var opciones = [
            "Cooperativa de Trabajo Ayelén Ltda.",
            "Cooperativa de Trabajo El Hornero Comunitario Ltda.",
            "Cooperativa de Trabajo Mi Cielo Ltda."];
    } else if (agent === "Pablo Steinbach") {
        var opciones = [
            "Cooperativa de Trabajo El Laurel Ltda.",
            "Cooperativa de Trabajo Nuevos Horizontes Ltda."];
    } else if (agent === "Silvia Guitián") {
        var opciones = [
            "Cooperativa de Trabajo El Ombú Ltda.",
            "Cooperativa de Trabajo Evita Compañera Ltda.",
            "Cooperativa de Trabajo Fuerzas del Alma Ltda.",
            "Cooperativa de Trabajo La Gaviota Ltda.",
            "Cooperativa de Trabajo Pacha Limpia Ltda."];
    } else if (agent === "Teresa Colman") {
        var opciones = [
            "Cooperativa de Trabajo Cada día un Sueño Ltda.",
            "Cooperativa de Trabajo Fuerzas del Alma Ltda.",
            "Cooperativa de Trabajo La Gaviota Ltda."];
    } else if (agent === "Victor Banegas") {
        var opciones = [
            "Cooperativa de Trabajo Che Guevara Ltda.",
            "Cooperativa de Trabajo La Plebeya Ltda.",
            "Cooperativa de Trabajo Liderazgo Ltda.",
            "Cooperativa de Trabajo Lu.tra Ltda..",
            "Cooperativa de Trabajo Nuevo Cambio Ltda.",
            "Cooperativa de Trabajo Proyectando Juntos Ltda."];
    } 

    for (var i = 0; i < opciones.length; i++) {
        var option = document.createElement("option");
        option.value = opciones[i];
        option.text = opciones[i];
        entity.add(option);
    }
}