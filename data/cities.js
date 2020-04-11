var cities_visited = {
    // Caribbean
    Oranjestad: {Lat: 12.5268736, Lon: -70.0356845, link: "https://www.instagram.com/p/B6ZpnoWgenB/", name: "Oranjestad"},
    Willemstad: {Lat: 12.1091242, Lon: -68.9316546, link: "", name: "Willemstad"},
    // North America
    NYC: {Lat: 40.7130126953125, Lon: -74.00712585449219, link: "https://simonreisinger.com/new-york-city/", name: "New York City"},
    Chicago: {Lat: 41.878114, Lon: -87.629798, link: "https://simonreisinger.com/usa/", name: "Chicago"},
    Miami: {Lat: 25.761680, Lon: -80.191790, link: "https://simonreisinger.com/usa/", name: "Miami"},
    KeyWest: {Lat: 24.555059, Lon: -81.779987, link: "https://simonreisinger.com/usa/", name: "Key West"},
    LasVegas: {Lat: 36.169941, Lon: -115.139830, link: "https://simonreisinger.com/usa/", name: "Las Vegas"},
    LosAngeles: {Lat: 34.052234, Lon: -118.243685, link: "https://simonreisinger.com/usa/", name: "Los Angeles"},
    SanFrancisco: {Lat: 37.774929, Lon: -122.419416, link: "https://simonreisinger.com/usa/", name: "San Francisco"},
    Toronto: {Lat: 43.653226, Lon: -79.383184, link: "https://simonreisinger.com/usa/", name: "Toronto"},
    Detroit: {Lat: 42.331427, Lon: -83.045754, link: "https://simonreisinger.com/usa/", name: "Detroit"},

    // Asia, Israel
    Jerusalem: {Lat: 31.768319, Lon: 35.213710, link: "", name: "Jerusalem"},
    TelAviv: {Lat:32.087229, Lon: 34.771042, link: "", name: "Tel Aviv"},

    // Europe
    Lissabon: {Lat: 38.722252, Lon: -9.139337, link: "https://simonreisinger.com/lisbon/", name: "Lissabon"},

    // Spain
    Barcelona: {Lat: 41.385064, Lon: 2.173404, link: "https://simonreisinger.com/spain/", name: "Barcelona"},
    SantiagodeCompostela: {Lat: 42.878213, Lon: -8.544844, link: "https://simonreisinger.com/spain/", name: "Santiago de Compostela"},
    Palma: {Lat: 39.606111, Lon: 2.791184, link: "", name: "Palma"},
    Avila: {Lat: 40.658836, Lon: -4.704552, link: "https://simonreisinger.com/spain/", name: "Avila"},
    Segovia: {Lat: 40.942903, Lon: -4.108807, link: "https://simonreisinger.com/spain/", name: "Segovia"},
    Sevilla: {Lat: 37.3890926, Lon: -5.984459, link: "", name: "Sevilla"},
    Fuerteventura: {Lat: 28.358744, Lon: -14.053676, link: "https://simonreisinger.com/canary-islands/", name: "Fuerteventura"},
    Lanzarote: {Lat: 28.685769, Lon: -14.754639, link: "https://simonreisinger.com/canary-islands/", name: "Lanzarote"},

    Paris: {Lat: 48.856614, Lon: 2.352222, link: "", name: "Paris"},

    // England
    London: {Lat: 51.507351, Lon: -0.127758, link: "", name: "London"},
    Worthing: {Lat: 50.817870, Lon: -0.372882, link: "", name: "Worthing"},
    //Brighton: {Lat: 50.822530, Lon: -0.137163, link: "", name: ""},
    Portsmouth: {Lat: 50.816667, Lon: -1.083333, link: "", name: "Portsmouth"},
    //Arundel: {Lat: 0, Lon: 0},
    Brighton: {Lat: 50.822530, Lon: -0.137163, link: "", name: "Brighton"},
    Gibraltar: {Lat: 36.140751, Lon: -5.353585, link: "", name: "Gibraltar"},
    Guernsey: {Lat: 49.465691, Lon: -2.585278, link: "", name: "Guernsey"},

    Zurich: {Lat: 47.368650, Lon: 8.539183, link: "", name: "Zurich"},
    Munich: {Lat: 48.135125, Lon: 11.581981, link: "", name: "Munich"},
    Graz: {Lat: 47.070714, Lon: 15.439504, link: "", name: "Graz"},
    Salzburg: {Lat: 47.809490, Lon: 13.055010, link: "", name: "Salzburg"},

    // Italy
    Lignano: {Lat: 45.668555, Lon: 13.104086, link: "https://simonreisinger.com/italy/", name: "Lignano"},
    Trieste: {Lat: 45.649526, Lon: 13.776818, link: "https://simonreisinger.com/italy/", name: "Trieste"},
    Bozen: {Lat: 46.498295, Lon: 11.354758, link: "https://simonreisinger.com/italy/", name: "Bozen"},
    Verona: {Lat: 45.438384, Lon: 10.991622, link: "https://simonreisinger.com/italy/", name: "Verona"},
    Venice: {Lat: 45.440847, Lon: 12.315515, link: "https://simonreisinger.com/italy/", name: "Venice"},
    Rome: {Lat: 41.902783, Lon: 12.496365, link: "https://simonreisinger.com/italy/", name: "Rome"},
    Napoli: {Lat: 40.851775, Lon: 14.268124, link: "https://simonreisinger.com/italy/", name: "Napoli"},
    Florence: {Lat: 43.769560, Lon: 11.255814, link: "https://simonreisinger.com/italy/", name: "Florence"},
    Pisa: {Lat: 43.716141, Lon: 10.382981, link: "https://simonreisinger.com/italy/", name: "Pisa"},
    Vernazza: {Lat: 44.134921, Lon: 9.684994, link: "https://simonreisinger.com/italy/", name: "Vernazza"},
    Manarola: {Lat: 44.111559, Lon: 9.733894, link: "https://simonreisinger.com/italy/", name: "Manarola"},
    Mailand: {Lat: 45.465422, Lon: 9.185924, link: "https://simonreisinger.com/italy/", name: "Mailand"},

    // Easten Europe
    Budapest: {Lat: 47.497912, Lon: 19.040235, link: "", name: "Budapest"},
    Krakow: {Lat: 50.064650, Lon: 19.944980, link: "", name: "Krakow"},
    Lublin: {Lat: 51.246910, Lon: 22.573620, link: "https://simonreisinger.com/urban-highline-festival/", name: "Lublin"},

    // Greece
    Samos: {Lat: 37.754787, Lon: 26.977770, link: "", name: "Samos"},
    Chios: {Lat: 38.368183, Lon: 26.131006, link: "", name: "Chios"},
    Crete: {Lat: 35.240116, Lon: 24.809269, link: "", name: "Crete"}

};
