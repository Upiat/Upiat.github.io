ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [46.801156, 29.490205],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [46.801156, 29.490205]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'ЗАО "Элкомсат"',
                hintContent: 'ЗАО "Элкомсат"'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        }),
        myPieChart = new ymaps.Placemark([
            46.801156, 29.490205
        ],{
            // Зададим произвольный макет метки.
            iconLayout: 'default#pieChart',
            // Максимальная ширина подписи метки.
            iconPieChartCaptionMaxWidth: 250
        });

    myMap.geoObjects
        .add(myGeoObject)
        .add(myPieChart)
        .add(new ymaps.Placemark([46.801156, 29.490205], {
            balloonContent: ''
        }, {
            preset: 'islands#icon',
            iconColor: '#336666'
        }))
}