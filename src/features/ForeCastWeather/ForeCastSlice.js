import { createSlice } from '@reduxjs/toolkit';
import getForeCastWeather from './ForeCastAPI';

// Slice reducer
const ForeCastWeatherSlice = createSlice({
    name: 'ForeCastWeatherSlice',
    initialState: {
        value:
        {
            "cod": "200",
            "message": 0,
            "cnt": 40,
            "list": [
                {
                    "dt": 1699282800,
                    "main": {
                        "temp": 10.07,
                        "feels_like": 8.62,
                        "temp_min": 8.94,
                        "temp_max": 10.07,
                        "pressure": 1014,
                        "sea_level": 1014,
                        "grnd_level": 1009,
                        "humidity": 57,
                        "temp_kf": 1.13
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "구름조금",
                            "icon": "03n"
                        }
                    ],
                    "clouds": {
                        "all": 49
                    },
                    "wind": {
                        "speed": 7.24,
                        "deg": 268,
                        "gust": 15.61
                    },
                    "visibility": 10000,
                    "pop": 0.06,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-11-06 15:00:00"
                },
                {
                    "dt": 1699293600,
                    "main": {
                        "temp": 9.15,
                        "feels_like": 5.66,
                        "temp_min": 8.41,
                        "temp_max": 9.15,
                        "pressure": 1016,
                        "sea_level": 1016,
                        "grnd_level": 1010,
                        "humidity": 72,
                        "temp_kf": 0.74
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "실 비",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 58
                    },
                    "wind": {
                        "speed": 7.66,
                        "deg": 282,
                        "gust": 14.82
                    },
                    "visibility": 10000,
                    "pop": 0.4,
                    "rain": {
                        "3h": 0.47
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-11-06 18:00:00"
                },
                {
                    "dt": 1699304400,
                    "main": {
                        "temp": 7.21,
                        "feels_like": 3.69,
                        "temp_min": 7.21,
                        "temp_max": 7.21,
                        "pressure": 1019,
                        "sea_level": 1019,
                        "grnd_level": 1013,
                        "humidity": 69,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "실 비",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 80
                    },
                    "wind": {
                        "speed": 6.02,
                        "deg": 293,
                        "gust": 12.8
                    },
                    "visibility": 10000,
                    "pop": 0.29,
                    "rain": {
                        "3h": 0.22
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-11-06 21:00:00"
                },
                {
                    "dt": 1699315200,
                    "main": {
                        "temp": 7.41,
                        "feels_like": 4.04,
                        "temp_min": 7.41,
                        "temp_max": 7.41,
                        "pressure": 1022,
                        "sea_level": 1022,
                        "grnd_level": 1016,
                        "humidity": 64,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "튼구름",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 57
                    },
                    "wind": {
                        "speed": 5.76,
                        "deg": 288,
                        "gust": 10.74
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-11-07 00:00:00"
                },
                {
                    "dt": 1699326000,
                    "main": {
                        "temp": 10.34,
                        "feels_like": 8.79,
                        "temp_min": 10.34,
                        "temp_max": 10.34,
                        "pressure": 1022,
                        "sea_level": 1022,
                        "grnd_level": 1016,
                        "humidity": 52,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "맑음",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 8
                    },
                    "wind": {
                        "speed": 5.23,
                        "deg": 295,
                        "gust": 7.72
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-11-07 03:00:00"
                },
                {
                    "dt": 1699336800,
                    "main": {
                        "temp": 10.71,
                        "feels_like": 9.12,
                        "temp_min": 10.71,
                        "temp_max": 10.71,
                        "pressure": 1022,
                        "sea_level": 1022,
                        "grnd_level": 1016,
                        "humidity": 49,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "맑음",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 6
                    },
                    "wind": {
                        "speed": 4.39,
                        "deg": 303,
                        "gust": 6.13
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-11-07 06:00:00"
                },
                {
                    "dt": 1699347600,
                    "main": {
                        "temp": 6.81,
                        "feels_like": 5.69,
                        "temp_min": 6.81,
                        "temp_max": 6.81,
                        "pressure": 1024,
                        "sea_level": 1024,
                        "grnd_level": 1017,
                        "humidity": 68,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "맑음",
                            "icon": "01n"
                        }
                    ],
                    "clouds": {
                        "all": 1
                    },
                    "wind": {
                        "speed": 1.79,
                        "deg": 301,
                        "gust": 2.6
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-11-07 09:00:00"
                },
                {
                    "dt": 1699358400,
                    "main": {
                        "temp": 5.66,
                        "feels_like": 5.66,
                        "temp_min": 5.66,
                        "temp_max": 5.66,
                        "pressure": 1024,
                        "sea_level": 1024,
                        "grnd_level": 1018,
                        "humidity": 72,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "맑음",
                            "icon": "01n"
                        }
                    ],
                    "clouds": {
                        "all": 1
                    },
                    "wind": {
                        "speed": 0.4,
                        "deg": 281,
                        "gust": 0.64
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-11-07 12:00:00"
                },
                {
                    "dt": 1699369200,
                    "main": {
                        "temp": 4.86,
                        "feels_like": 4.86,
                        "temp_min": 4.86,
                        "temp_max": 4.86,
                        "pressure": 1024,
                        "sea_level": 1024,
                        "grnd_level": 1018,
                        "humidity": 75,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "맑음",
                            "icon": "01n"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 0.19,
                        "deg": 324,
                        "gust": 0.33
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-11-07 15:00:00"
                },
                {
                    "dt": 1699380000,
                    "main": {
                        "temp": 4.09,
                        "feels_like": 4.09,
                        "temp_min": 4.09,
                        "temp_max": 4.09,
                        "pressure": 1024,
                        "sea_level": 1024,
                        "grnd_level": 1018,
                        "humidity": 78,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "맑음",
                            "icon": "01n"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 0.99,
                        "deg": 50,
                        "gust": 0.96
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-11-07 18:00:00"
                },
                {
                    "dt": 1699390800,
                    "main": {
                        "temp": 3.5,
                        "feels_like": 3.5,
                        "temp_min": 3.5,
                        "temp_max": 3.5,
                        "pressure": 1024,
                        "sea_level": 1024,
                        "grnd_level": 1018,
                        "humidity": 77,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "맑음",
                            "icon": "01n"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 0.88,
                        "deg": 71,
                        "gust": 0.86
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-11-07 21:00:00"
                },
                {
                    "dt": 1699401600,
                    "main": {
                        "temp": 7.45,
                        "feels_like": 7.45,
                        "temp_min": 7.45,
                        "temp_max": 7.45,
                        "pressure": 1024,
                        "sea_level": 1024,
                        "grnd_level": 1018,
                        "humidity": 57,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "맑음",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 1.33,
                        "deg": 80,
                        "gust": 1.91
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-11-08 00:00:00"
                },
                {
                    "dt": 1699412400,
                    "main": {
                        "temp": 14.16,
                        "feels_like": 12.6,
                        "temp_min": 14.16,
                        "temp_max": 14.16,
                        "pressure": 1023,
                        "sea_level": 1023,
                        "grnd_level": 1016,
                        "humidity": 37,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "맑음",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 2
                    },
                    "wind": {
                        "speed": 1.08,
                        "deg": 71,
                        "gust": 1.46
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-11-08 03:00:00"
                },
                {
                    "dt": 1699423200,
                    "main": {
                        "temp": 16.11,
                        "feels_like": 14.69,
                        "temp_min": 16.11,
                        "temp_max": 16.11,
                        "pressure": 1022,
                        "sea_level": 1022,
                        "grnd_level": 1015,
                        "humidity": 35,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "구름조금",
                            "icon": "03d"
                        }
                    ],
                    "clouds": {
                        "all": 33
                    },
                    "wind": {
                        "speed": 0.54,
                        "deg": 42,
                        "gust": 0.76
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-11-08 06:00:00"
                },
                {
                    "dt": 1699434000,
                    "main": {
                        "temp": 10.86,
                        "feels_like": 9.41,
                        "temp_min": 10.86,
                        "temp_max": 10.86,
                        "pressure": 1022,
                        "sea_level": 1022,
                        "grnd_level": 1016,
                        "humidity": 54,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "튼구름",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 54
                    },
                    "wind": {
                        "speed": 0.56,
                        "deg": 30,
                        "gust": 0.66
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-11-08 09:00:00"
                },
                {
                    "dt": 1699444800,
                    "main": {
                        "temp": 9.42,
                        "feels_like": 9.14,
                        "temp_min": 9.42,
                        "temp_max": 9.42,
                        "pressure": 1023,
                        "sea_level": 1023,
                        "grnd_level": 1016,
                        "humidity": 61,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "튼구름",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 58
                    },
                    "wind": {
                        "speed": 1.36,
                        "deg": 109,
                        "gust": 1.29
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-11-08 12:00:00"
                },
                {
                    "dt": 1699455600,
                    "main": {
                        "temp": 8.68,
                        "feels_like": 8.68,
                        "temp_min": 8.68,
                        "temp_max": 8.68,
                        "pressure": 1022,
                        "sea_level": 1022,
                        "grnd_level": 1015,
                        "humidity": 67,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "온흐림",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 99
                    },
                    "wind": {
                        "speed": 0.66,
                        "deg": 104,
                        "gust": 0.78
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-11-08 15:00:00"
                },
                {
                    "dt": 1699466400,
                    "main": {
                        "temp": 8.19,
                        "feels_like": 8.19,
                        "temp_min": 8.19,
                        "temp_max": 8.19,
                        "pressure": 1022,
                        "sea_level": 1022,
                        "grnd_level": 1016,
                        "humidity": 70,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "온흐림",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 0.91,
                        "deg": 119,
                        "gust": 0.89
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-11-08 18:00:00"
                },
                {
                    "dt": 1699477200,
                    "main": {
                        "temp": 7.65,
                        "feels_like": 7.65,
                        "temp_min": 7.65,
                        "temp_max": 7.65,
                        "pressure": 1022,
                        "sea_level": 1022,
                        "grnd_level": 1015,
                        "humidity": 71,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "온흐림",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 1.13,
                        "deg": 122,
                        "gust": 1.06
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-11-08 21:00:00"
                },
                {
                    "dt": 1699488000,
                    "main": {
                        "temp": 11.14,
                        "feels_like": 9.88,
                        "temp_min": 11.14,
                        "temp_max": 11.14,
                        "pressure": 1021,
                        "sea_level": 1021,
                        "grnd_level": 1015,
                        "humidity": 60,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "온흐림",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 96
                    },
                    "wind": {
                        "speed": 1.36,
                        "deg": 113,
                        "gust": 1.88
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-11-09 00:00:00"
                },
                {
                    "dt": 1699498800,
                    "main": {
                        "temp": 14.51,
                        "feels_like": 13.45,
                        "temp_min": 14.51,
                        "temp_max": 14.51,
                        "pressure": 1019,
                        "sea_level": 1019,
                        "grnd_level": 1012,
                        "humidity": 55,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "온흐림",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 0.99,
                        "deg": 90,
                        "gust": 1.68
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-11-09 03:00:00"
                },
                {
                    "dt": 1699509600,
                    "main": {
                        "temp": 13.97,
                        "feels_like": 13.2,
                        "temp_min": 13.97,
                        "temp_max": 13.97,
                        "pressure": 1018,
                        "sea_level": 1018,
                        "grnd_level": 1011,
                        "humidity": 68,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "온흐림",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 0.64,
                        "deg": 101,
                        "gust": 0.98
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-11-09 06:00:00"
                },
                {
                    "dt": 1699520400,
                    "main": {
                        "temp": 12.87,
                        "feels_like": 12.28,
                        "temp_min": 12.87,
                        "temp_max": 12.87,
                        "pressure": 1017,
                        "sea_level": 1017,
                        "grnd_level": 1011,
                        "humidity": 79,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "온흐림",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 0.98,
                        "deg": 30,
                        "gust": 1.08
                    },
                    "visibility": 10000,
                    "pop": 0.19,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-11-09 09:00:00"
                },
                {
                    "dt": 1699531200,
                    "main": {
                        "temp": 12.21,
                        "feels_like": 11.6,
                        "temp_min": 12.21,
                        "temp_max": 12.21,
                        "pressure": 1018,
                        "sea_level": 1018,
                        "grnd_level": 1011,
                        "humidity": 81,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "온흐림",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 0.48,
                        "deg": 74,
                        "gust": 0.69
                    },
                    "visibility": 10000,
                    "pop": 0.28,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-11-09 12:00:00"
                },
                {
                    "dt": 1699542000,
                    "main": {
                        "temp": 12.14,
                        "feels_like": 11.79,
                        "temp_min": 12.14,
                        "temp_max": 12.14,
                        "pressure": 1018,
                        "sea_level": 1018,
                        "grnd_level": 1012,
                        "humidity": 91,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "실 비",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 2.6,
                        "deg": 303,
                        "gust": 5.15
                    },
                    "visibility": 10000,
                    "pop": 0.53,
                    "rain": {
                        "3h": 0.32
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-11-09 15:00:00"
                },
                {
                    "dt": 1699552800,
                    "main": {
                        "temp": 8.1,
                        "feels_like": 5.54,
                        "temp_min": 8.1,
                        "temp_max": 8.1,
                        "pressure": 1021,
                        "sea_level": 1021,
                        "grnd_level": 1015,
                        "humidity": 71,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "실 비",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 4.27,
                        "deg": 311,
                        "gust": 8.69
                    },
                    "visibility": 10000,
                    "pop": 0.57,
                    "rain": {
                        "3h": 0.37
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-11-09 18:00:00"
                },
                {
                    "dt": 1699563600,
                    "main": {
                        "temp": 4.76,
                        "feels_like": 1.44,
                        "temp_min": 4.76,
                        "temp_max": 4.76,
                        "pressure": 1024,
                        "sea_level": 1024,
                        "grnd_level": 1017,
                        "humidity": 66,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "온흐림",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 4.21,
                        "deg": 311,
                        "gust": 9.4
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-11-09 21:00:00"
                },
                {
                    "dt": 1699574400,
                    "main": {
                        "temp": 4.9,
                        "feels_like": 1.43,
                        "temp_min": 4.9,
                        "temp_max": 4.9,
                        "pressure": 1026,
                        "sea_level": 1026,
                        "grnd_level": 1019,
                        "humidity": 46,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "튼구름",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 83
                    },
                    "wind": {
                        "speed": 4.57,
                        "deg": 321,
                        "gust": 9.17
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-11-10 00:00:00"
                },
                {
                    "dt": 1699585200,
                    "main": {
                        "temp": 8.21,
                        "feels_like": 5.52,
                        "temp_min": 8.21,
                        "temp_max": 8.21,
                        "pressure": 1025,
                        "sea_level": 1025,
                        "grnd_level": 1019,
                        "humidity": 29,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "구름조금",
                            "icon": "03d"
                        }
                    ],
                    "clouds": {
                        "all": 49
                    },
                    "wind": {
                        "speed": 4.61,
                        "deg": 324,
                        "gust": 7.03
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-11-10 03:00:00"
                },
                {
                    "dt": 1699596000,
                    "main": {
                        "temp": 8.5,
                        "feels_like": 6.13,
                        "temp_min": 8.5,
                        "temp_max": 8.5,
                        "pressure": 1025,
                        "sea_level": 1025,
                        "grnd_level": 1018,
                        "humidity": 31,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "튼구름",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 58
                    },
                    "wind": {
                        "speed": 4.05,
                        "deg": 331,
                        "gust": 5.81
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-11-10 06:00:00"
                },
                {
                    "dt": 1699606800,
                    "main": {
                        "temp": 4.57,
                        "feels_like": 2.76,
                        "temp_min": 4.57,
                        "temp_max": 4.57,
                        "pressure": 1027,
                        "sea_level": 1027,
                        "grnd_level": 1020,
                        "humidity": 48,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "맑음",
                            "icon": "01n"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 2.1,
                        "deg": 299,
                        "gust": 3.49
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-11-10 09:00:00"
                },
                {
                    "dt": 1699617600,
                    "main": {
                        "temp": 3.15,
                        "feels_like": 3.15,
                        "temp_min": 3.15,
                        "temp_max": 3.15,
                        "pressure": 1028,
                        "sea_level": 1028,
                        "grnd_level": 1021,
                        "humidity": 53,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "맑음",
                            "icon": "01n"
                        }
                    ],
                    "clouds": {
                        "all": 6
                    },
                    "wind": {
                        "speed": 1.25,
                        "deg": 328,
                        "gust": 1.82
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-11-10 12:00:00"
                },
                {
                    "dt": 1699628400,
                    "main": {
                        "temp": 2.26,
                        "feels_like": 2.26,
                        "temp_min": 2.26,
                        "temp_max": 2.26,
                        "pressure": 1028,
                        "sea_level": 1028,
                        "grnd_level": 1021,
                        "humidity": 56,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "튼구름",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 55
                    },
                    "wind": {
                        "speed": 0.83,
                        "deg": 313,
                        "gust": 1.15
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-11-10 15:00:00"
                },
                {
                    "dt": 1699639200,
                    "main": {
                        "temp": 1.45,
                        "feels_like": 1.45,
                        "temp_min": 1.45,
                        "temp_max": 1.45,
                        "pressure": 1028,
                        "sea_level": 1028,
                        "grnd_level": 1021,
                        "humidity": 56,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "구름조금",
                            "icon": "03n"
                        }
                    ],
                    "clouds": {
                        "all": 28
                    },
                    "wind": {
                        "speed": 0.86,
                        "deg": 341,
                        "gust": 0.99
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-11-10 18:00:00"
                },
                {
                    "dt": 1699650000,
                    "main": {
                        "temp": 0.92,
                        "feels_like": 0.92,
                        "temp_min": 0.92,
                        "temp_max": 0.92,
                        "pressure": 1028,
                        "sea_level": 1028,
                        "grnd_level": 1022,
                        "humidity": 54,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 801,
                            "main": "Clouds",
                            "description": "약간의 구름이 낀 하늘",
                            "icon": "02n"
                        }
                    ],
                    "clouds": {
                        "all": 11
                    },
                    "wind": {
                        "speed": 0.39,
                        "deg": 328,
                        "gust": 0.52
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-11-10 21:00:00"
                },
                {
                    "dt": 1699660800,
                    "main": {
                        "temp": 4.57,
                        "feels_like": 4.57,
                        "temp_min": 4.57,
                        "temp_max": 4.57,
                        "pressure": 1029,
                        "sea_level": 1029,
                        "grnd_level": 1022,
                        "humidity": 43,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "구름조금",
                            "icon": "03d"
                        }
                    ],
                    "clouds": {
                        "all": 27
                    },
                    "wind": {
                        "speed": 0.91,
                        "deg": 324,
                        "gust": 1.82
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-11-11 00:00:00"
                },
                {
                    "dt": 1699671600,
                    "main": {
                        "temp": 8.29,
                        "feels_like": 7.17,
                        "temp_min": 8.29,
                        "temp_max": 8.29,
                        "pressure": 1028,
                        "sea_level": 1028,
                        "grnd_level": 1021,
                        "humidity": 35,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "구름조금",
                            "icon": "03d"
                        }
                    ],
                    "clouds": {
                        "all": 37
                    },
                    "wind": {
                        "speed": 2.03,
                        "deg": 317,
                        "gust": 2.49
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-11-11 03:00:00"
                },
                {
                    "dt": 1699682400,
                    "main": {
                        "temp": 9.58,
                        "feels_like": 8.07,
                        "temp_min": 9.58,
                        "temp_max": 9.58,
                        "pressure": 1026,
                        "sea_level": 1026,
                        "grnd_level": 1020,
                        "humidity": 35,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "튼구름",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 62
                    },
                    "wind": {
                        "speed": 2.89,
                        "deg": 313,
                        "gust": 3.39
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-11-11 06:00:00"
                },
                {
                    "dt": 1699693200,
                    "main": {
                        "temp": 5.15,
                        "feels_like": 3.66,
                        "temp_min": 5.15,
                        "temp_max": 5.15,
                        "pressure": 1027,
                        "sea_level": 1027,
                        "grnd_level": 1020,
                        "humidity": 52,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 801,
                            "main": "Clouds",
                            "description": "약간의 구름이 낀 하늘",
                            "icon": "02n"
                        }
                    ],
                    "clouds": {
                        "all": 21
                    },
                    "wind": {
                        "speed": 1.89,
                        "deg": 312,
                        "gust": 2.66
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-11-11 09:00:00"
                },
                {
                    "dt": 1699704000,
                    "main": {
                        "temp": 4.03,
                        "feels_like": 3.01,
                        "temp_min": 4.03,
                        "temp_max": 4.03,
                        "pressure": 1028,
                        "sea_level": 1028,
                        "grnd_level": 1021,
                        "humidity": 57,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "구름조금",
                            "icon": "03n"
                        }
                    ],
                    "clouds": {
                        "all": 42
                    },
                    "wind": {
                        "speed": 1.38,
                        "deg": 288,
                        "gust": 1.59
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-11-11 12:00:00"
                }
            ],
            "city": {
                "id": 1835224,
                "name": "Daejeon",
                "coord": {
                    "lat": 36.3333,
                    "lon": 127.4197
                },
                "country": "KR",
                "population": 1475221,
                "timezone": 32400,
                "sunrise": 1699221451,
                "sunset": 1699259418
            }

        },
        status: 'Init'
    },
    extraReducers: (builder) => {
        builder.addCase(getForeCastWeather.pending, (state, action) => {
            state.status = 'Loading';
        })
        builder.addCase(getForeCastWeather.fulfilled, (state, action) => {
            state.value = action.payload;
            state.status = 'Complete';
        })
        builder.addCase(getForeCastWeather.rejected, (state, action) => {
            state.status = 'Fail';
        })
    }
});

export default ForeCastWeatherSlice;