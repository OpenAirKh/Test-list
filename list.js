const contentJs = document.getElementById("content");

const questionMassJs = [
  {
    question: "Объясните делегирование событий.",
    status: true,
  },
  {
    question: "Объясните, как это работает в JavaScript.",
    status: false,
  },
  {
    question:
      "Можете ли вы привести пример того, как thisизменилась работа с ES6?",
    status: false,
  },
  {
    question: "Объясните, как работает прототипическое наследование.",
    status: false,
  },
  {
    question:
      "В чем разница между переменной, которая объявлена null, undefinedи необъявленной?",
    status: false,
  },
  {
    question: "Как бы вы проверили наличие любого из этих состояний?",
    status: false,
  },
  {
    question: "Что такое замыкание и как/зачем его использовать?",
    status: false,
  },
  {
    question:
      "Какие языковые конструкции вы используете для перебора свойств объектов и элементов массива?",
    status: false,
  },
  {
    question:
      "Можете ли вы описать основное различие между Array.forEach()циклом и Array.map()методами и почему вы выбрали один, а не другой?",
    status: true,
  },
  {
    question:
      "Можете ли вы описать другие популярные методы итерации по массивам?",
    status: false,
  },
  {
    question: "Каков типичный вариант использования анонимных функций?",
    status: false,
  },
  {
    question: "В чем разница между хост-объектами и собственными объектами?",
    status: true,
  },
  {
    question:
      "Объясните разницу между: function Person(){}, var person = Person(), и var person = new Person()?",
    status: true,
  },
  {
    question:
      "Объясните различия в использовании fooмежду function foo() {}иvar foo = function() {}",
    status: false,
  },
  {
    question:
      "Можете ли вы объяснить, что такое « Function.callи Function.applyчто делать»? В чём существенная разница между ними?",
    status: true,
  },
  {
    question: "Объяснять Function.prototype.bind.",
    status: false,
  },
  {
    question:
      "В чем разница между обнаружением признаков, выводом признаков и использованием строки UA?",
    status: true,
  },
  {
    question: "Объясните понятие «подъем».",
    status: false,
  },
  {
    question:
      "Что такое приведение типов? Какие распространённые ошибки возникают при использовании приведения типов в коде JavaScript?",
    status: true,
  },
  {
    question: "Опишите всплытие событий.",
    status: true,
  },
  {
    question: "Опишите фиксацию событий.",
    status: false,
  },
  { question: "В чем разница между «атрибутом» и «свойством»?", status: false },
  {
    question:
      "Каковы плюсы и минусы расширения встроенных объектов JavaScript?",
    status: false,
  },
  {
    question: "В чем разница между ==и ===?",
    status: false,
  },
  {
    question: "Объясните политику единого источника в отношении JavaScript.",
    status: true,
  },
  {
    question:
      "Почему оператор называется тернарным, что означает слово «тернарный»?",
    status: false,
  },
  {
    question:
      "Что такое строгий режим? Каковы преимущества и недостатки его использования?",
    status: true,
  },
  {
    question:
      "Каковы некоторые преимущества/недостатки написания кода JavaScript на языке, который компилируется в JavaScript?",
    status: false,
  },
  {
    question:
      "Какие инструменты и методы вы используете для отладки кода JavaScript?",
    status: true,
  },
  {
    question: "Объясните разницу между изменяемыми и неизменяемыми объектами.",
    status: false,
  },
  {
    question: "Какой пример неизменяемого объекта можно привести в JavaScript?",
    status: false,
    status: true,
  },
  {
    question: "Каковы плюсы и минусы неизменности?",
    status: true,
  },
  {
    question: "Как можно добиться неизменности собственного кода?",
    status: false,
  },
  {
    question: "Объясните разницу между синхронными и асинхронными функциями.",
    status: true,
  },
  {
    question: "Что такое цикл событий?",
    status: false,
  },
  {
    question: "В чем разница между стеком вызовов и очередью задач?",
    status: true,
  },
  {
    question:
      "В чем разница между переменными, созданными с помощью let, varили const?",
    status: false,
  },
  {
    question:
      "Можно ли изменить свойство объекта, определённого через const? Как можно изменить это поведение?",
    status: true,
  },
  {
    question: "В чем различия между конструкторами классов ES6 и функций ES5?",
    status: true,
  },
  {
    question:
      "Можете ли вы предложить пример использования нового =>синтаксиса стрелочных функций? Чем этот новый синтаксис отличается от других функций?",
    status: false,
  },
  {
    question:
      "Какие преимущества дает использование стрелочного синтаксиса для метода в конструкторе?",
    status: true,
  },
  {
    question: "Каково определение функции высшего порядка?",
    status: true,
  },
  {
    question:
      "Можете ли вы привести пример деструктуризации объекта или массива?",
    status: false,
  },
  {
    question:
      "Можете ли вы привести пример генерации строки с использованием шаблонных литералов ES6?",
    status: true,
  },
  {
    question:
      "Можете ли вы привести пример функции карри и объяснить, почему этот синтаксис даёт преимущество?",
    status: true,
  },
  {
    question:
      "Каковы преимущества использования spread syntaxи чем оно отличается от rest syntax?",
    status: false,
  },
  {
    question: "Как можно обмениваться кодом между файлами?",
    status: true,
  },
  {
    question:
      "Зачем вам может понадобиться создавать статические члены класса?",
    status: false,
  },
  {
    question:
      "В чем разница между циклами whileи do-whileциклами в JavaScript?",
    status: true,
  },
  {
    question: "Что такое обещание? Где и как его использовать?",
    status: true,
  },
  {
    question:
      "Обсудите, как можно использовать принципы объектно-ориентированного программирования при кодировании на JavaScript.",
    status: false,
  },
  {
    question: "В чем разница между event.targetи event.currentTarget?",
    status: true,
  },
  {
    question:
      "В чем разница между event.preventDefault()и event.stopPropagation()?",
    status: true,
  },
];
// console.log(questionMassJs);
