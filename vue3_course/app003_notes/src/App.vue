<template>
  <main>
    <div class="overlay">

    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button>+</button>
      </header>
      <div class="cards-container">
        <div class="card">
          <p class="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          <p class="date">04/27/2666</p>
        </div>
        <div class="card">
          <p class="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          <p class="date">04/27/2666</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100hv;
  width: 100vw;
}

.container {
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 75px;
}

button {
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: rgb(21, 20, 20);
  border-radius: 100%;
  color: white;
  font-size: 20px;
}

.card {
  width: 225px;
  height: 225px;
  background-color: rgb(237, 182, 44);
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
}

.date {
  font-size: 12.5px;
  font-weight: bold;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
}

.overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
