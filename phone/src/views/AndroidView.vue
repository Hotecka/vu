<template>
  <div class="container">
    <h1>Операционная система Android</h1>

    <div class="android-info">
      <p>
        Android — это мощная операционная система, разработанная компанией
        Google, специально для мобильных устройств. За последние несколько лет
        Android значительно изменил мир мобильных технологий, предоставляя
        пользователям и разработчикам богатый набор функций и возможностей.
      </p>
      <p>
        Android представляет собой открытую платформу, что позволяет разработчикам
        создавать инновационные приложения, а пользователям наслаждаться
        многообразием приложений и сервисов, от игр до профессиональных инструментов.
      </p>
      <p>
        Сегодня Android является самой популярной операционной системой для
        мобильных устройств в мире, обеспечивая удобство использования,
        высокую производительность и безопасность.
      </p>
    </div>

    <div class="android-features">
      <div class="feature">
        <img
          src="../components/icons/test2.webp"
          alt="Android Features 1"
          width="300"
          height="200"
        />
        <h3>Богатый функционал</h3>
        <p>
          Android предлагает широкий спектр функций, включая мультимедиа,
          многозадачность, персонализацию интерфейса и многое другое.
        </p>
      </div>
      <div class="feature">
        <img
          src="../components/icons/test1.webp"
          alt="Android Features 2"
          width="300"
          height="200"
        />
        <h3>Широкий выбор приложений</h3>
        <p>
          Google Play Store предлагает миллионы приложений для Android,
          от игр и развлечений до профессиональных инструментов и утилит.
        </p>
      </div>
      <div class="feature">
        <img
          src="../components/icons/test2.jpg"
          alt="Android Features 3"
          width="300"
          height="200"
        />
        <h3>Безопасность и обновления</h3>
        <p>
          Google активно работает над безопасностью Android, предоставляя
          регулярные обновления и защищая пользователей от угроз.
        </p>
      </div>
    </div>

    <h1 >Каталог устройств Android</h1>

    <div class="row android-products">
      <div class="col-md-4 mb-4">
        <div class="card h-100 border-0 shadow-sm rounded-lg">
          <img
            src="../components/icons/test2.webp"
            class="card-img-top"
            alt="Android Product 1"
          />
          <div class="card-body">
            <h5 class="card-title text-primary">Android Телефон 1</h5>
            <p class="card-text">
              Описание телефона Android, его характеристики и возможности.
            </p>
            <p class="card-text font-weight-bold">Цена: $599</p>
            <a href="#" class="btn btn-primary btn-sm">Купить</a>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="card h-100 border-0 shadow-sm rounded-lg">
          <img
            src="../components/icons/test1.webp"
            class="card-img-top"
            alt="Android Product 2"
          />
          <div class="card-body">
            <h5 class="card-title text-primary">Android Телефон 2</h5>
            <p class="card-text">
              Описание второго телефона Android, его характеристики и возможности.
            </p>
            <p class="card-text font-weight-bold">Цена: $799</p>
            <a href="#" class="btn btn-primary btn-sm">Купить</a>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="card h-100 border-0 shadow-sm rounded-lg">
          <img
            src="../components/icons/test2.jpg"
            class="card-img-top"
            alt="Android Product 3"
          />
          <div class="card-body">
            <h5 class="card-title text-primary">Android Телефон 3</h5>
            <p class="card-text">
              Описание третьего телефона Android, его характеристики и возможности.
            </p>
            <p class="card-text font-weight-bold">Цена: $899</p>
            <a href="#" class="btn btn-primary btn-sm">Купить</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AndroidView',
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 40px auto;
  text-align: center;
}

h1 {
  color: #333;
  font-size: 2.5rem;
  border-bottom: 3px solid #1e88e5;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

.android-info {
  text-align: left;
  margin-bottom: 40px;
}

.android-info p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 20px;
}

.android-features {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.feature {
  width: 300px;
  margin-bottom: 40px;
  text-align: center;
}

.feature img {
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.feature img:hover {
  transform: scale(1.1);
}

.feature h3 {
  color: #1e88e5;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 1.8rem;
}

.feature p {
  color: #333;
  font-size: 1.2rem;
  line-height: 1.6;
}

.android-products .card {
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.android-products .card:hover {
  transform: translateY(-10px);
}

.card-img-top {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.card-body {
  padding: 20px;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.card-text {
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.btn-primary {
  background-color: #1e88e5;
  border-color: #1e88e5;
}

.btn-primary:hover {
  background-color: #155fa0;
  border-color: #155fa0;
}
</style>
