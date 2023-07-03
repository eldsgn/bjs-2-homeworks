class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if(arguments.length != 2 || time === null) {
            throw new Error('Отсутствуют обязательные аргументы');
            // Проверка на наличие обязательных аргументов
        }
        else if(this.alarmCollection.find(item => item.time === time) === true) {
            console.warn('Уже присутствует звонок на это же время');
            // Проверка на дублирование звонка в одно время
        }
        const newAlarm = {
            time: time,
            callback: callback,
            canCall: true,
        }
        this.alarmCollection.push(newAlarm);
        // Добавление нового объекта в массив звонков
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
        // Удаление из массива звонков, у которых time совпадает со значением аргумента
    }

    getCurrentFormattedTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        return `${hours}:${minutes}`;
        // Возвращает текущее время в строковом формате ЧЧ:ММ
    }

    start() { 
        if (this.intervalId !== null) {
            // Проверяем наличие значения в свойстве intervalId, если есть, то завершаем
            return;
        }

        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();
      
            this.alarmCollection.forEach(alarm => {
              if(alarm.time === currentTime && alarm.canCall) {
                alarm.canCall = false;
                alarm.callback();
              }
            });
          }, 1000);
          // Создаем новый интервал
        }

    stop() { 
        clearInterval(this.intervalId);
        this.intervalId = null;
        // Останавливаем выполнение интервала будильника, сбрасываем intervalId
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
        // Присваиваем canCall значение true
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
        // Останавливаем интервал и удаляем все звонки
    }
}