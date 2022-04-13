function stopWatch() {
    let startTime = Date.now();
    function getDelay() {
        let elapsedTime = Date.now() - startTime;
        alert(elapsedTime)
    };
    return getDelay;
};

// Процесс сохранения переменных функцией для внутренней функции