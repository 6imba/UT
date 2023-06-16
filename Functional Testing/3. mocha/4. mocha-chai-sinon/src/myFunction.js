function getFutureDate({
    years = 0, months = 0, days = 0, minutes = 0,
}, date = new Date()) {
    date.setFullYear(date.getFullYear() + years);
    date.setMonth(date.getMonth() + months);
    date.setDate(date.getDate() + days);
    date.setMinutes(date.getMinutes() + minutes);
    return date;
}

function getLanguage() {
    const slashSplit = window.location.pathname.split('/');
    const lang = slashSplit[1];
    return lang;
}

function getCurrentLocale(windowObj = window) {
    const urlPathPartial = windowObj.location.pathname;
    const urlPathArray = urlPathPartial.split('/');
    let currentLocale = urlPathArray[1];
    if (urlPathPartial.indexOf('/help') >= 0 || urlPathPartial.indexOf('/resources') >= 0) {
        currentLocale = 'en';
    }
    return currentLocale || 'en';
}


function setCookie(name, value, days) {
    let expires = '';
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value || ''}${expires}; path=/`;
}

function changeLocale(locale, windowObj = window) {
    const urlHashPartial = windowObj.location.hash || '';
    const urlSearchPartial = windowObj.location.search || '';
    const urlPathPartial = windowObj.location.pathname;
    const urlPathArray = urlPathPartial.split('/');
    const finalUrlPathPartial = urlPathArray.slice(2, urlPathArray.length).join('/');

    setCookie('MonotypeCurrentUICulture', locale, 365); // setCookie:mock
    const redirectUrl = `/${locale}/${finalUrlPathPartial}\${urlSearchPartial}${urlHashPartial}`;
    windowObj.location.assign(redirectUrl);// windowObj-stub and  assign:mock
}

module.exports = {
    getFutureDate,
    getLanguage,
    getCurrentLocale,
    changeLocale
};
