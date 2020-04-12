let cities_visited = {
    // Caribbean
    Oranjestad: {Lat: 12.5268736, Lon: -70.0356845, url: "https://www.instagram.com/p/B6ZpnoWgenB/", name: "Oranjestad"},
    Willemstad: {Lat: 12.1091242, Lon: -68.9316546, url: "", name: "Willemstad"},
    // North America
    NYC: {Lat: 40.7130126953125, Lon: -74.00712585449219, url: "https://simonreisinger.com/new-york-city/", name: "New York City"},
    Chicago: {Lat: 41.878114, Lon: -87.629798, url: "https://simonreisinger.com/usa/", name: "Chicago"},
    StLouis: {Lat: 38.653433, Lon: -90.243472, url: "https://simonreisinger.com/usa/", name: "St. Louis"},
    Miami: {Lat: 25.761680, Lon: -80.191790, url: "https://simonreisinger.com/usa/", name: "Miami"},
    KeyWest: {Lat: 24.555059, Lon: -81.779987, url: "https://simonreisinger.com/usa/", name: "Key West"},
    LasVegas: {Lat: 36.169941, Lon: -115.139830, url: "https://simonreisinger.com/usa/", name: "Las Vegas"},
    LosAngeles: {Lat: 34.052234, Lon: -118.243685, url: "https://simonreisinger.com/usa/", name: "Los Angeles"},
    SanFrancisco: {Lat: 37.774929, Lon: -122.419416, url: "https://simonreisinger.com/usa/", name: "San Francisco"},
    Toronto: {Lat: 43.653226, Lon: -79.383184, url: "https://simonreisinger.com/usa/", name: "Toronto"},
    Detroit: {Lat: 42.331427, Lon: -83.045754, url: "https://simonreisinger.com/usa/", name: "Detroit"},

    // Asia, Israel
    Jerusalem: {Lat: 31.768319, Lon: 35.213710, url: "", name: "Jerusalem"},
    TelAviv: {Lat:32.087229, Lon: 34.771042, url: "", name: "Tel Aviv"},

    // Europe
    Lissabon: {Lat: 38.722252, Lon: -9.139337, url: "https://simonreisinger.com/lisbon/", name: "Lissabon"},
    Lagos: {Lat: 37.102836, Lon: -8.672161, url: "", name: "Lagos"},

    // Spain
    Barcelona: {Lat: 41.385064, Lon: 2.173404, url: "https://simonreisinger.com/spain/", name: "Barcelona"},
    SantiagodeCompostela: {Lat: 42.878213, Lon: -8.544844, url: "https://simonreisinger.com/spain/", name: "Santiago de Compostela"},
    Palma: {Lat: 39.606111, Lon: 2.791184, url: "", name: "Palma"},
    Avila: {Lat: 40.658836, Lon: -4.704552, url: "https://simonreisinger.com/spain/", name: "Avila"},
    Segovia: {Lat: 40.942903, Lon: -4.108807, url: "https://simonreisinger.com/spain/", name: "Segovia"},
    Sevilla: {Lat: 37.3890926, Lon: -5.984459, url: "", name: "Sevilla"},
    Cadiz: {Lat: 36.529739, Lon: -6.292650, url: "", name: "Cádiz"},
    Nerja: {Lat: 36.785915, Lon: -3.804483, url: "", name: "Nerja"},

    Fuerteventura: {Lat: 28.358744, Lon: -14.053676, url: "https://simonreisinger.com/canary-islands/", name: "Fuerteventura"},
    Lanzarote: {Lat: 28.685769, Lon: -14.754639, url: "https://simonreisinger.com/canary-islands/", name: "Lanzarote"},

    Paris: {Lat: 48.856614, Lon: 2.352222, url: "", name: "Paris"},

    // England
    London: {Lat: 51.507351, Lon: -0.127758, url: "", name: "London"},
    Worthing: {Lat: 50.817870, Lon: -0.372882, url: "", name: "Worthing"},
    //Brighton: {Lat: 50.822530, Lon: -0.137163, url: "", name: ""},
    Portsmouth: {Lat: 50.816667, Lon: -1.083333, url: "", name: "Portsmouth"},
    //Arundel: {Lat: 0, Lon: 0},
    Brighton: {Lat: 50.822530, Lon: -0.137163, url: "", name: "Brighton"},
    Gibraltar: {Lat: 36.140751, Lon: -5.353585, url: "", name: "Gibraltar"},
    Guernsey: {Lat: 49.465691, Lon: -2.585278, url: "", name: "Guernsey"},

    Zurich: {Lat: 47.368650, Lon: 8.539183, url: "", name: "Zürich"},
    Luzern: {Lat: 47.048838, Lon: 8.302231, url: "", name: "Luzern"},
    Wengen: {Lat: 46.605441, Lon: 7.921724, url: "", name: "Wengen"},
    Munich: {Lat: 48.135125, Lon: 11.581981, url: "", name: "Munich"},
    Graz: {Lat: 47.070714, Lon: 15.439504, url: "", name: "Graz"},
    Salzburg: {Lat: 47.809490, Lon: 13.055010, url: "", name: "Salzburg"},
    Villach: {Lat: 46.613457, Lon: 13.836462, url: "", name: "Villach"},

    // Italy
    Lignano: {Lat: 45.668555, Lon: 13.104086, url: "https://simonreisinger.com/italy/", name: "Lignano"},
    Trieste: {Lat: 45.649526, Lon: 13.776818, url: "https://simonreisinger.com/italy/", name: "Trieste"},
    Bozen: {Lat: 46.498295, Lon: 11.354758, url: "https://simonreisinger.com/italy/", name: "Bozen"},
    Verona: {Lat: 45.438384, Lon: 10.991622, url: "https://simonreisinger.com/italy/", name: "Verona"},
    Venice: {Lat: 45.440847, Lon: 12.315515, url: "https://simonreisinger.com/italy/", name: "Venice"},
    Rome: {Lat: 41.902783, Lon: 12.496365, url: "https://simonreisinger.com/italy/", name: "Rome"},
    Napoli: {Lat: 40.851775, Lon: 14.268124, url: "https://simonreisinger.com/italy/", name: "Napoli"},
    Florence: {Lat: 43.769560, Lon: 11.255814, url: "https://simonreisinger.com/italy/", name: "Florence"},
    Pisa: {Lat: 43.716141, Lon: 10.382981, url: "https://simonreisinger.com/italy/", name: "Pisa"},
    Vernazza: {Lat: 44.134921, Lon: 9.684994, url: "https://simonreisinger.com/italy/", name: "Vernazza"},
    Manarola: {Lat: 44.111559, Lon: 9.733894, url: "https://simonreisinger.com/italy/", name: "Manarola"},
    Mailand: {Lat: 45.465422, Lon: 9.185924, url: "https://simonreisinger.com/italy/", name: "Mailand"},

    // Easten Europe
    Budapest: {Lat: 47.497912, Lon: 19.040235, url: "", name: "Budapest"},
    Krakow: {Lat: 50.064650, Lon: 19.944980, url: "", name: "Krakow"},
    Lublin: {Lat: 51.246910, Lon: 22.573620, url: "https://simonreisinger.com/urban-highline-festival/", name: "Lublin"},

    // Greece
    Samos: {Lat: 37.754787, Lon: 26.977770, url: "", name: "Samos"},
    Chios: {Lat: 38.368183, Lon: 26.131006, url: "", name: "Chios"},
    Crete: {Lat: 35.240116, Lon: 24.809269, url: "", name: "Crete"}
};
