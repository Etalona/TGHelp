var app = new Vue({
  el: '.container--main',
  data: {
    channels: [{
      "id": 177298,
      "name": "NEXTA Live",
      "username": "nexta_live",
      "subscribers_count": 1357460,
      "realImg": "http://89.108.64.223/avatars/601010f66c0c1_5d9930607e69fadb023ff6c9731bc243.jpg.jpg",
      "his24": null,
      "his7": 0,
      "view24": 0,
      "viewAll": 0,
      "er": 0
    }, {
      "id": 105160,
      "name": "ТОПОР   Горячие новости   Навальный   Протесты",
      "username": null,
      "subscribers_count": 954871,
      "realImg": "http://89.108.64.223/avatars/5e813745a7e01_d419e36f1be800c4f94a60e7c6e68eae.jpg.jpg",
      "his24": null,
      "his7": 0,
      "view24": 0,
      "viewAll": 0,
      "er": 0
    }, {
      "id": 60709,
      "name": "Mash",
      "username": "breakingmash",
      "subscribers_count": 893510,
      "realImg": "http://89.108.64.223/avatars/5e6f84c3733f6_60500cc9ed330f80536961991c1d7d0f.jpg.jpg",
      "his24": null,
      "his7": 0,
      "view24": 0,
      "viewAll": 0,
      "er": "358"
    }, {
      "id": 8263,
      "name": "  Easy APK",
      "username": "EasyAPK",
      "subscribers_count": 796049,
      "realImg": "http://89.108.64.223/avatars/EasyAPK.jpg",
      "his24": null,
      "his7": 0,
      "view24": 0,
      "viewAll": 0,
      "er": "1417"
    }, {
      "id": 69840,
      "name": "App Store  ",
      "username": "AppStorePlus",
      "subscribers_count": 790362,
      "realImg": "http://89.108.64.223/avatars/5e712f4b1a412_058be779142098546ca7dee139419179.jpg.jpg",
      "his24": null,
      "his7": 0,
      "view24": 0,
      "viewAll": 0,
      "er": "-55"
    }, {
      "id": 97568,
      "name": "ОТВЕТЫ",
      "username": "otveti",
      "subscribers_count": 688361,
      "realImg": "http://89.108.64.223/avatars/5e7f530952b43_bf3bd18ba296bbf5588cf042e494e891.jpg.jpg",
      "his24": null,
      "his7": 0,
      "view24": 0,
      "viewAll": 0,
      "er": 0
    }, {
      "id": 159598,
      "name": "Че, История",
      "username": "che_history1",
      "subscribers_count": 686664,
      "realImg": "http://89.108.64.223/avatars/5fe7248013827_1f117a9c35e4dffd58242af8ce088c0f.jpg.jpg",
      "his24": null,
      "his7": 0,
      "view24": 0,
      "viewAll": 0,
      "er": "61"
    }, {
      "id": 37420,
      "name": "Популярная Музыка   Новинки VK",
      "username": "music_muzyka",
      "subscribers_count": 666484,
      "realImg": "http://89.108.64.223/avatars/5e6b2fec063bf_3af0808d4a013e7d529b841d1a656842.jpg.jpg",
      "his24": null,
      "his7": 0,
      "view24": 0,
      "viewAll": 0,
      "er": "21"
    }, {
      "id": 111470,
      "name": "Фильмы   Сериалы",
      "username": "movies_filmy",
      "subscribers_count": 655615,
      "realImg": "http://89.108.64.223/avatars/5e8612baa1152_6a2fa85b7a9835afd8725dca14346788.jpg.jpg",
      "his24": null,
      "his7": 0,
      "view24": 0,
      "viewAll": 0,
      "er": 0
    }, {
      "id": 174454,
      "name": "NEXTA",
      "username": "nexta_tv",
      "subscribers_count": 652872,
      "realImg": "http://89.108.64.223/avatars/5fee2968151fd_c9cf79e0f5b7db1728514a9c49c05d91.jpg.jpg",
      "his24": null,
      "his7": 0,
      "view24": 0,
      "viewAll": 0,
      "er": "10"
    }]
  },
  methods: {
    getData: function () {
      fetch('http://89.108.64.223/api/v1/list?page=1').then((response) => response.json())
        .then((channels) => {
          this.channels = channels;
        });
    }
  },
  created: function () {
    // this.getData();
  }
});
