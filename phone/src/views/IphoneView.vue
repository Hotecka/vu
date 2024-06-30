<template>
  <div class="container">
    <h1>Операционная система iOS</h1>

    <div class="iphone-info">
      <p>
        iOS — операционная система, разработанная компанией Apple, предназначенная
        для мобильных устройств, таких как iPhone и iPad. iOS известна своей
        простотой использования, безопасностью и интеграцией с другими устройствами
        Apple.
      </p>
      <p>
        iOS предлагает экосистему приложений через App Store, где пользователи
        могут найти разнообразные приложения — от игр и развлечений до бизнес-инструментов
        и креативных приложений для творчества.
      </p>
      <p>
        Операционная система iOS обновляется регулярно, чтобы улучшать производительность
        устройств и обеспечивать безопасность данных пользователей.
      </p>
    </div>

    <div class="iphone-features">
      <div class="feature">
        <img
          src="../components/icons/test3.jpg"
          alt="iPhone Features 1"
          width="300"
          height="200"
        />
        <h3>Простота использования</h3>
        <p>
          iOS предлагает интуитивно понятный интерфейс и простые в использовании
          функции для всех пользователей.
        </p>
      </div>
      <div class="feature">
        <img
          src="../components/icons/test4.jpg"
          alt="iPhone Features 2"
          width="300"
          height="200"
        />
        <h3>Интеграция с Apple</h3>
        <p>
          iPhone интегрируется безупречно с другими устройствами Apple, что
          позволяет вам работать и развлекаться с максимальным комфортом.
        </p>
      </div>
      <div class="feature">
        <img
          src="../components/icons/test5.jpg"
          alt="iPhone Features 3"
          width="300"
          height="200"
        />
        <h3>Безопасность данных</h3>
        <p>
          Apple обеспечивает высокий уровень защиты данных пользователей,
          делая iOS одной из самых безопасных операционных систем.
        </p>
      </div>
    </div>

    <h1>Каталог устройств iPhone</h1>

    <div class="row iphone-products">
      <div class="col-md-4 mb-4">
        <div class="card h-100 border-0 shadow-sm rounded-lg">
          <img
            src="../components/icons/iphone-product-1.jpg"
            class="card-img-top"
            alt="iPhone Product 1"
          />
          <div class="card-body">
            <h5 class="card-title text-primary">iPhone 12</h5>
            <p class="card-text">
              Мощный смартфон с камерой высокого разрешения и быстрым процессором.
            </p>
            <p class="card-text font-weight-bold">Цена: $799</p>
            <a href="#" class="btn btn-primary btn-sm">Купить</a>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="card h-100 border-0 shadow-sm rounded-lg">
          <img
            src="../components/icons/iphone-product-2.jpg"
            class="card-img-top"
            alt="iPhone Product 2"
          />
          <div class="card-body">
            <h5 class="card-title text-primary">iPhone 13 Pro</h5>
            <p class="card-text">
              Профессиональный смартфон с передовыми функциями и впечатляющим дизайном.
            </p>
            <p class="card-text font-weight-bold">Цена: $999</p>
            <a href="#" class="btn btn-primary btn-sm">Купить</a>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="card h-100 border-0 shadow-sm rounded-lg">
          <img
            src="../components/icons/iphone-product-3.jpg"
            class="card-img-top"
            alt="iPhone Product 3"
          />
          <div class="card-body">
            <h5 class="card-title text-primary">iPhone SE</h5>
            <p class="card-text">
              Компактный смартфон, который предлагает мощные функции по доступной цене.
            </p>
            <p class="card-text font-weight-bold">Цена: $399</p>
            <a href="#" class="btn btn-primary btn-sm">Купить</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IphoneView',
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

.iphone-info {
  text-align: left;
  margin-bottom: 40px;
}

.iphone-info p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 20px;
}

.iphone-features {
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

.iphone-products .card {
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.iphone-products .card:hover {
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
