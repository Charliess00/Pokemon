var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pikachu', function(req, res, next) {
  res.render('pokemon', {
    title: "Пикачу",
    picture: "https://pokemongolife.ru/p/Pikachu.png",
    desc: "Пикачу хранит заряд электричества в аккумулирующих мешочках в своих щеках. Когда Покемон спит, они заряжаются. Иногда существо может разрядить небольшое количество заряда при пробуждении."
  });
});

router.get('/bulbasaur', function(req, res, next) {
  res.render('pokemon', {
    title: "Бульбазавр",
    picture: "https://pokemongolife.ru/p/Bulbasaur.png",
    desc: "Бульбазавра можно увидеть дремлющим при ярком солнечном свете. На его спине есть семя. На солнце семя растет и становится больше."
  });
});

router.get('/charmander', function(req, res, next) {
  res.render('pokemon', {
    title: "Чармандер",
    picture: "https://pokemongolife.ru/p/Charmander.png",
    desc: "Пламя, горящее на кончике хвоста, является показателем его эмоций. Пламя колышется, когда Чармандер доволен. Если Покемон приходит в ярость, пламя горит интенсивнее."
  });
});

router.get('/squirtle', function(req, res, next) {
  res.render('pokemon', {
    title: "Сквиртл",
    picture: "https://pokemongolife.ru/p/Squirtle.png",
    desc: "Сквиртл использует свой панцирь не только для защиты. Такая оболочка округлой формы и канавки на ее поверхности помогают свести к минимуму сопротивление в воде, что позволяет этому Покемону плавать на высоких скоростях."
  });
});

router.get('/eevee', function(req, res, next) {
  res.render('pokemon', {
    title: "Иви",
    picture: "https://pokemongolife.ru/p/Eevee.png",
    desc: "Иви имеет нестабильный генетический состав, который часто мутирует из-за окружающей среды, в которой существо живет. Излучение от различных камней позволяет этому Покемону развиваться."
  });
});

module.exports = router;
