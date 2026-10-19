//Recuperer le timestamp actuel au format ISO
function timestamp() {
    return new Date().toLocaleString("sv-SE").replace(" ", "T");
}

//Formater la date ISO en francais ((YYYY,MM,DD) => (DD/MM/YYYY))
function formatDate(date) {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
}

module.exports = { timestamp, formatDate}