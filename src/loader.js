const loader = document.getElementById('progressStatus')

const loaderInterval = setInterval(() => {
    loader.value += 2
}, 50)

setTimeout(() => clearInterval(loaderInterval), 5000)