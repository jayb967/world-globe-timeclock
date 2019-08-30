
var data = () => {


    const timeCalc = (zone) => moment()
    .tz(zone)
    .format('hh:mm:A')

const timezones = [
    'America/New_York',
    'America/Vancouver',
    'Europe/London', //Spain or Etc/GMT+1
    'US/Eastern', // Miami
    'America/Los_Angeles',
    'America/Sao_Paulo',
    'America/Lima',
    'Pacific/Honolulu',
    'Australia/Perth',
    'Australia/Sydney',
    'Etc/GMT+12', // New Zealand
    'Asia/Hong_Kong',
    'Etc/GMT+5', // Mumbai
    'Africa/Cairo',
    'Africa/Johannesburg', // Cape Town
    'Europe/Berlin',
    'Etc/GMT+1', // Edinburgh
    'Europe/Moscow'
]

const tick = (zone) => {
    // setInterval(() => {
        return timeCalc(zone)
    // }, 16)

}

return [
    { lat: 40.7128, lng: -74.0060, label: `New York ${tick(timezones[0])}` }, // For New York
    { lat: 49.2827, lng: -123.1207, label: `Vancouver ${tick(timezones[1])}` }, // For Vancouver
    { lat: 40.4637, lng: -3.7492, label: ` Spain ${tick(timezones[2])}` }, // For Spain
    { lat: 25.77427, lng: -80.19366, label: `Miami ${tick(timezones[3])}` },
    { lat: 34.0522, lng: -118.2437, label: ""}, //For Los Angeles
    { lat: -23.5475, lng: -46.63611, label: `Sao Paulo ${tick(timezones[5])}` },
    { lat: -12.04318, lng: -77.02824, label: `Lima ${tick(timezones[6])}` },
    { lat: 21.30694, lng: -157.85833, label: `Honolulu ${tick(timezones[7])}` },
    { lat: -31.95224, lng: 115.8614, label: `Perth ${tick(timezones[8])}` },
    { lat: -33.86785, lng: 151.20732, label: `Sydney ${tick(timezones[9])}` },
    { lat: -42, lng: 174, label: `New Zealand ${tick(timezones[10])}` },
    { lat: 22.28552, lng: 114.15769, label: `Hong Kong ${tick(timezones[11])}` },
    { lat: 19.07283, lng: 72.88261, label: `Mumbai ${tick(timezones[12])}` },
    { lat: 30.06263, lng: 31.24967, label: `Cairo ${tick(timezones[13])}` },
    { lat: -33.92584, lng: 18.42322, label: `Cape Town ${tick(timezones[14])}` },
    { lat: 52.52437, lng: 13.41053, label: `Berlin ${tick(timezones[15])}` },
    { lat: 55.95206, lng: -3.19648, label: `Edinburgh ${tick(timezones[16])}` },
    { lat: 55.75222, lng: 37.61556, label: `Moscow ${tick(timezones[17])}` },
]

    

}




