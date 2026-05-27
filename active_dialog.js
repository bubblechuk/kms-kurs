var dialogOn = false; 
var endings = [
    ["состоит", "состоит"],
    ["работает", "работает"],
    ["используется", "используется"],
    ["является", "является"],
    ["создан", "создан"],
    ["разработан", "разработан"],
    ["обеспечивает", "обеспечивает"],
    ["возникает", "возникает"],
    ["включает", "включает"],
    ["ет", "ет"],
    ["ют", "ют"],
    ["ит", "ит"],
    ["ят", "ят"]
];

function getAssetPath(assetPath) {
  var cleanPath = String(assetPath).replace(/^\/+/, '')

  if (typeof window === 'undefined' || !window.location) {
    return cleanPath
  }

  var pathname = window.location.pathname
  var basePath = '/'
  var pagesIndex = pathname.indexOf('/pages/')

  if (pagesIndex >= 0) {
    basePath = pathname.substring(0, pagesIndex + 1)
  } else {
    basePath = pathname.substring(0, pathname.lastIndexOf('/') + 1)
  }

  return window.location.origin + basePath + cleanPath
}

var knowledge = [
    ['Гидравлитический дровокол «Горыныч»', 'является', 'механизированной установкой для точной, быстрой и повторяемой раскалывания древесины различных пород.'],
    ['Промышленный дровокол', 'раскалывает', 'материалы по древесным волокнам.'],
    ['Промышленный дровокол', 'используется', 'в лесозаготовительном производстве.'],
    ['Промышленный дровокол', 'влияет', 'на скорость заготовки твердого топлива.'],
    ['Эффективность заготовки топлива', 'определяется', 'производительностью и непрерывным режимом работы дровокола.'],
    ['Гидравлика', 'работает', 'как единое целое с бензиновым или электрическим приводом.'],
    ['Привод установки', 'работает', 'как единое целое с насосной станцией.'],
    ['Насосная станция', 'работает', 'как единое целое с измерительной и распределительной системой.'],
    ['Измерительная система', 'работает', 'как единое целое с элементами безопасности оператора.'],
    ['Главная задача дровокола', 'состоит', 'в автоматизации ручного труда и снижении физической нагрузки.'],

    ['Конструкция дровокола', 'состоит', 'из прочной металлической рамы.'],
    ['Конструкция дровокола', 'состоит', 'из гидравлического пресса.'],
    ['Конструкция дровокола', 'состоит', 'из устойчивого рабочего стола.'],
    ['Конструкция дровокола', 'состоит', 'из заклиненного колун-ножа.'],
    ['Конструкция дровокола', 'состоит', 'из мобильной колесной базы.'],
    ['Металлическая рама', 'удерживает', 'основные узлы гидросистемы.'],
    ['Металлическая рама', 'обеспечивает', 'жесткость и устойчивость конструкции под нагрузкой.'],
    ['Металлическая рама', 'сопротивляется', 'деформации при раскалывании твёрдых пород.'],
    ['Металлический корпус', 'защищает', 'внутренние механизмы и двигатель от повреждений.'],
    ['Колун-нож', 'изготавливается', 'из высокопрочной закаленной стали.'],
    ['Закалка стали', 'повышает', 'износостойкость и твердость режущей кромки.'],
    ['Колун-нож', 'выдерживает', 'критические ударные нагрузки.'],
    ['Колун-нож', 'разделяет', 'полено на несколько частей за один рабочий ход.'],
    ['Рабочий стол', 'фиксирует', 'деревянную заготовку перед расколом.'],
    ['Рабочий стол', 'служит', 'надежной опорой для тяжелых брёвен большого диаметра.'],
    ['Рабочий стол', 'обеспечивает', 'правильное и безопасное размещение полена.'],

    ['Гидравлическая система', 'работает', 'под высоким рабочим давлением.'],
    ['Гидравлическая система', 'обеспечивает', 'плавное и контролируемое движение поршня.'],
    ['Гидравлическая система', 'передает', 'механическое усилие в несколько тонн на шток.'],
    ['Гидроцилиндр', 'создает', 'линейное поступательное движение.'],
    ['Гидроцилиндр', 'перемещает', 'массивный шток вперед.'],
    ['Гидроцилиндр', 'выдвигает', 'поршень под давлением рабочей жидкости.'],
    ['Гидроцилиндр', 'возвращает', 'механизм в исходное положение после завершения цикла.'],
    ['Шток гидроцилиндра', 'прижимает', 'полено к металлическому колуну.'],
    ['Шток гидроцилиндра', 'прикладывает', 'разрушающее усилие к структуре древесины.'],
    ['Гидравлический насос', 'нагнетает', 'специальное масло в контур.'],
    ['Гидравлический насос', 'поддерживает', 'требуемое давление в системе.'],
    ['Гидравлический насос', 'питается', 'от бензинового или электрического двигателя.'],
    ['Рабочая жидкость', 'циркулирует', 'по замкнутому герметичному контуру.'],
    ['Рабочая жидкость', 'смазывает', 'внутренние подвижные каналы деталей.'],
    ['Рабочая жидкость', 'отводит', 'избыточное тепло от нагруженных элементов.'],
    ['Гидравлические шланги', 'соединяют', 'элементы гидросистемы между собой.'],
    ['Гидравлический бак', 'хранит', 'необходимый запас рабочей жидкости.'],
    ['Распределительный клапан', 'управляет', 'направлением потоков масла.'],
    ['Распределительный клапан', 'переключает', 'режимы прямого и обратного хода цилиндра.'],

    ['Двигатель установки', 'обеспечивает', 'энергию для вращения вала гидронасоса.'],
    ['Бензиновый двигатель', 'используется', 'в мобильных автономных модификациях.'],
    ['Электрический двигатель', 'используется', 'в стационарных цеховых модификациях.'],
    ['Топливный бак', 'содержит', 'запас бензина для длительной автономной работы.'],
    ['Топливо', 'поступает', 'из бака в камеру сгорания двигателя.'],
    ['Система охлаждения', 'предотвращает', 'опасный перегрев силового агрегата.'],
    ['Система охлаждения', 'поддерживает', 'стабильную оптимальную температуру.'],
    ['Воздушное охлаждение', 'используется', 'для эффективного отвода тепла.'],
    ['Лопастной вентилятор', 'обдувает', 'горячие ребра радиатора двигателя.'],

    ['Рабочий цикл', 'начинается', 'сразу после запуска приводного двигателя.'],
    ['Оператор', 'укладывает', 'сырое или сухое полено на платформу.'],
    ['Оператор', 'контролирует', 'линейный процесс раскалывания.'],
    ['Рычаг управления', 'задает', 'скорость и вектор движения гидроцилиндра.'],
    ['Полено', 'упирается', 'в неподвижный металлический колун.'],
    ['Полено', 'раскалывается', 'прямо по направлению древесных волокон.'],
    ['Сухое полено', 'разрушается', 'значительно быстрее влажного.'],
    ['Сырая древесина', 'требует', 'максимального гидравлического усилия.'],

    ['Заклинивание полена', 'возникает', 'из-за чрезмерной сучковатости древесины.'],
    ['Заклинивание полена', 'возникает', 'из-за недостаточного давления в гидросистеме.'],
    ['Критический перегрев', 'возникает', 'из-за сильного загрязнения воздушного фильтра.'],
    ['Критический перегрев', 'возникает', 'из-за падения уровня смазочного масла.'],
    ['Падение усилия раскола', 'возникает', 'из-за завоздушивания гидравлического контура.'],
    ['Падение усилия раскола', 'возникает', 'из-за критического износа уплотнительных колец.'],
    ['Медленный ход штока', 'возникает', 'из-за поломки распределительного клапана.'],
    ['Техническое обслуживание', 'включает', 'регулярную заточку колун-ножа.'],
    ['Техническое обслуживание', 'включает', 'контроль уровня и замену гидравлического масла.'],
    ['Техническое обслуживание', 'включает', 'проверку герметичности шлангов высокого давления.'],
    ['Техническое обслуживание', 'включает', 'очистку поверхностей рабочего стола.'],

    ['Система безопасность', 'останавливает', 'работу пресса при возникновении аварии.'],
    ['Кнопка отключения', 'блокирует', 'любое движение исполнительных механизмов.'],
    ['Аварийная кнопка', 'прекращает', 'текущий рабочий цикл дровокола.'],
    ['Техника безопасности', 'является', 'первостепенным условием допуска к станку.'],

    ['Симулятор', 'используется', 'для безопасного обучения работе с дровоколом.'],
    ['Симулятор', 'используется', 'для наглядной демонстрации устройства станка.'],
    ['Симулятор', 'используется', 'для изучения полного цикла заготовки дров.'],
    ['Симулятор', 'используется', 'для отработки правильной последовательности действий.'],
    ['Виртуальная модель', 'отображает', 'физическое движение всех механических узлов.'],
    ['Интерфейс программы', 'показывает', 'текущее состояние датчиков системы.'],
    ['Интерактивная анимация', 'демонстрирует', 'динамический процесс раскалывания бревна.'],
    ['Звуковое сопровождение', 'повышает', 'реалистичность симуляции работы двигателя.'],
    ['Панель управления', 'позволяет', 'дистанционно запускать и останавливать установку.'],
    ['3D-Тренажер', 'формирует', 'устойчивые практические навыки у оператора.'],

    ['Автором симулятора', 'является', 'Maksym Kovalchuk'],
    ['Разработчиком симулятора', 'является', 'Maksym Kovalchuk'],
    ['Симулятор', 'разразработан', 'Maksym Kovalchuk'],
    ['Проект', 'создан', 'Maksym Kovalchuk'],
    ['Дровокол', 'выглядит', getAssetPath('drovokol.jpg')],
    ['Дровокол', 'работает', getAssetPath('project.mp4')]
];


function dialog_window() {
    if (document.getElementById('dialog')) {
        return;
    }

    document.body.insertAdjacentHTML('beforeend', 
        "<div id='dialog' class='dialog'>"
        + "<div class='label' onclick='openDialog()'>Нажми, чтобы спросить!</div>"
        + "<div class='header'>История диалога с БЗ:</div>"
        + "<div class='history' id='history'></div>"
        + "<div class='question'><input id='Qdialog' placeholder='Введите ваш вопрос...' autocomplete='off' /> <br>"
        + "<button onclick='ask(\"Qdialog\")'>Спросить</button></div>"
        + "</div>"
    );

    var input = document.getElementById('Qdialog');
    if (input) {
        input.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                ask('Qdialog');
            }
        });
    }

    if (window.ya && window.ya.speechkit) {
        if (!window.ya.speechkit.settings) {
            window.ya.speechkit.settings = {};
        }
        
        window.ya.speechkit.settings.apikey = '5c6d6536-b453-4589-9bc7-f16c7a795106';
        
        try {
            var textline = new ya.speechkit.Textline('Qdialog', { 
                onInputFinished: function(text) {
                    document.getElementById('Qdialog').value = text; 
                    input.focus();
                }
            });
        } catch(e) {
            console.warn("Не удалось инициализировать Textline:", e);
        }
    }
}

function openDialog() {
    console.log("Состояние окна до клика (dialogOn):", dialogOn);
    
    if (dialogOn) {  
        $("#dialog").animate({"right": "-450px"}, 600, function() {
            console.log("Окно успешно закрылось");
        });
        dialogOn = false;
    } else {         
        $("#dialog").animate({"right": "0px"}, 600, function() {
            console.log("Окно успешно открылось");
        });
        dialogOn = true;
    }
}

function ask(questionInput) {
    var input = document.getElementById(questionInput);
    if (!input) return;
    var question = input.value.trim();
    if (!question) return; 

    var history = document.getElementById("history");
    if (!history) return;

    var newDiv = document.createElement("div");
    newDiv.className = 'question';
    newDiv.textContent = question; 
    history.appendChild(newDiv);

    var answerDiv = document.createElement("div");
    answerDiv.className = 'answer';
    answerDiv.innerHTML = getDialogAnswer(question); 
    history.appendChild(answerDiv);

    history.scrollTop = history.scrollHeight;
    input.value = "";
    input.focus();
}

function getDialogAnswer(question) {
    if (typeof getAnswer !== 'function') {
        return 'Функция getAnswer() не подключена.';
    }
    return getAnswer(question);
}


function getEnding(word) {
    if (typeof endings === 'undefined' || !endings) return -1;
    for (var j = 0; j < endings.length; j++) {
        if (word.substring(word.length - endings[j][0].length) === endings[j][0]) {
            return j;
        }
    }
    return -1;
}

function small(str) {
    if (!str) return '';
    return str.substring(0, 1).toLowerCase() + str.substring(1);
}

function big(str) { 
    if (!str) return '';
    return str.substring(0, 1).toUpperCase() + str.substring(1); 
}

function getAnswerText(triad) {
    var subject = triad[0];
    var predicate = triad[1];
    var object = triad[2];
    var mediaHtml = "";

    var lowerObject = object.toLowerCase();
    if (lowerObject.includes(".jpg") || lowerObject.includes(".png") || lowerObject.includes(".jpeg")) {
        mediaHtml = "<br/><img src='" + object + "' style='max-width:100%; max-height:300px; border-radius:5px; margin-top:5px;'/>";
    } else if (lowerObject.includes(".mp4") || lowerObject.includes(".avi")) {
        mediaHtml = "<br/><video src='" + object + "' controls style='max-width:100%; max-height:300px; border-radius:5px; margin-top:5px;'></video>";
    }

    return '<li>' + big(subject + ' ' + predicate + ' ' + (mediaHtml ? mediaHtml : object)) + '</li>';
}

function getKnowledgeBase() {
    var base = [];
    if (typeof knowledge !== 'undefined' && Array.isArray(knowledge)) {
        base = base.concat(knowledge);
    }
    if (typeof knowledgePhoto !== 'undefined' && Array.isArray(knowledgePhoto)) {
        base = base.concat(knowledgePhoto);
    }
    return base;
}

function clearQuestion(question) {
    return question
        .toLowerCase()
        .replace(/[?!.;,]+/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

function getMeaningfulWords(value) {
    var stopWords = [
        'что', 'чем', 'где', 'как', 'когда', 'куда', 'кто', 'каким', 
        'какая', 'какой', 'какие', 'для', 'при', 'под', 'над', 
        'перед', 'после', 'через'
    ];

    return clearQuestion(String(value).replace(/<[^>]+>/g, ' '))
        .split(' ')
        .filter(function (word) {
            return word.length > 2 && stopWords.indexOf(word) === -1;
        });
}

function questionContainsSubject(question, subject) {
    var subjectWords = getMeaningWords = getMeaningfulWords(subject);

    if (subjectWords.length === 0) {
        return false;
    }

    return subjectWords.every(function (word) {
        return question.indexOf(word) !== -1;
    });
}

function questionContainsPredicate(question, predicate) {
    var predicateWords = getMeaningfulWords(predicate);

    return predicateWords.some(function (word) {
        return question.indexOf(word) !== -1;
    });
}

function getAnswer(question) {
    var result = false;
    var answers = [];
    var knowledgeBase = getKnowledgeBase();

    question = clearQuestion(question);

    if (!question) {
        return 'Введите вопрос.';
    }

    var words = question.split(' ');

    for (var i = 0; i < words.length; i++) {
        var ending = getEnding(words[i]);

        if (ending >= 0) {
            words[i] =
                words[i].substring(0, words[i].length - endings[ending][0].length) +
                endings[ending][1];

            var predicate = new RegExp(words[i], 'i');
            var subjectString = words.slice(i + 1).join('.*');

            if (subjectString.length > 2) {
                var subject = new RegExp('.*' + subjectString + '.*', 'i');

                for (var j = 0; j < knowledgeBase.length; j++) {
                    if (
                        predicate.test(knowledgeBase[j][1]) &&
                        (subject.test(knowledgeBase[j][0]) ||
                            subject.test(knowledgeBase[j][2]))
                    ) {
                        answers.push(getAnswerText(knowledgeBase[j]));
                        result = true;
                    }
                }

                if (result === false) {
                    for (var k = 0; k < knowledgeBase.length; k++) {
                        if (
                            subject.test(knowledgeBase[k][0]) ||
                            subject.test(knowledgeBase[k][2])
                        ) {
                            answers.push(getAnswerText(knowledgeBase[k]));
                            result = true;
                        }
                    }
                }
            }
        }
    }

    if (!result) {
        for (var m = 0; m < knowledgeBase.length; m++) {
            if (
                questionContainsSubject(question, knowledgeBase[m][0]) &&
                questionContainsPredicate(question, knowledgeBase[m][1])
            ) {
                answers.push(getAnswerText(knowledgeBase[m]));
                result = true;
            }
        }
    }

    if (!result) {
        return 'Ответ не найден.';
    }

    answers = answers.filter(function(item, pos) {
        return answers.indexOf(item) == pos;
    });

    return '<ul class="answer-list" style="margin: 0; padding-left: 20px; list-style-type: square;">' + answers.join('') + '</ul>';
}