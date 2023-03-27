
const regexLink = /https?:\/\/[\w\-а-яё\.\_~:/?#\[\]!$&'\(\)\*\+,;=  ]+\.\w{2,5}\/?[\w\-а-яё\.\_~:/?#\[\]@!$&'\(\)\*\+,;=  ]*/i;
const regexLatin =/[a-zA-Z0-9&\-\s]{2,50}/i;
const regexRus=/[а-яёА-ЯЁ)-9&\-\s]{2,50}/i;
const regContinentCode=/[A-Z]{2}/;
const regCountryCode=/[A-Z]{2,3}/;
const regCoverTitle = /[а-яёА-ЯЁ0-9&\-\s]{2,25}/;
const regCoverTitleEn = /[a-zA-Z0-9&\-\s]{2,25}/;
const regTripCode = /[A-Z]{2,3}[0-9]{2}/;
const regexDate=/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/;



module.exports = {
    regexLink,
    regexLatin, 
    regexRus, 
    regContinentCode,
    regCoverTitle,
    regCoverTitleEn,
    regCountryCode,
    regTripCode,
    regexDate
};
