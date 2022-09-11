/**
 * @param ticker FinEx ticker
 * @return the latest price of FinEx ETF by ticker
 */
function FINEX_TICKER_PRICE(ticker) {
    if (ticker == null) {
        return null;
    }

    var response = UrlFetchApp.fetch("https://api.finex-etf.ru/v1/fonds/nav");
    var json = JSON.parse(response.getContentText());
    var tickerInfo = eval("json." + ticker);
    if (tickerInfo === undefined) {
        return "Unknown ticker";
    }
    return tickerInfo.value;
}

/**
 * @param ticker FinEx ticker
 * @return ticker currency
 */
function FINEX_TICKER_CURRENCY(ticker) {
    if (ticker == null) {
        return null;
    }

    var response = UrlFetchApp.fetch("https://api.finex-etf.ru/v1/fonds/nav");
    var json = JSON.parse(response.getContentText());
    var tickerInfo = eval("json." + ticker);
    if (tickerInfo === undefined) {
        return "Unknown ticker";
    }
    return tickerInfo.currency;
}