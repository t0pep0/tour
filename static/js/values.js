/* Copyright 2012 The Go Authors.   All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
'use strict';

angular.module('tour.values', []).

// List of modules with description and lessons in it.
value('tableOfContents', [{
    'id': 'mechanics',
    'title': 'Использование тура'//'Using the tour',
    'description': '<p>Добро пожаловать на тур по <a href="http://golang.org">язвку програмированния Go</a>. Здесь Вы узнаете о основных возможнастях языка, главным образом:</p>',
    'lessons': ['welcome']
}, {
    'id': 'basics',
    'title': 'Основы',
    'description': '<p>Начало, изучение основ языка .</p><p>Объвление переменных, вызов функций, и все, что вам понадобится для следующих уроков.</p>',
    'lessons': ['basics', 'flowcontrol', 'moretypes']
}, {
    'id': 'methods',
    'title': 'Методы и интерфейсы',
    'description': '<p>Изучите как  определять методы к типам, объявлять интерфейсы и как связать все это вместе.</p>',
    'lessons': ['methods']
}, {
    'id': 'concurrency' ,
    'title': 'Конкурентность',
    'description': '<p>Go предоставляет конкурентность как базовую часть языка.</p><p>Эта секция посвещенна горутинам и каналам, а так же их использованию для реализации различных паттернов конкурентности.</p>',
    'lessons': ['concurrency']
}]).

// translation
value('translation', {
    'off': 'выкл.',
    'on': 'вкл.',
    'syntax': 'Подсветка синтаксиса',
    'lineno': 'Номера строк',
    'reset': '  Сброс слайда',
    'format': 'Форматирование исходного кода',
    'kill': 'Остановить программу',
    'run': 'Запустить',
    'compile': 'Скомпилировать и запустить',
    'more': 'Опции',
    'toc': 'Таблица контента',
    'prev': 'Назад',
    'next': 'Вперед',
    'waiting': 'Ожидание ответа удаленного сервера...',
    'errcomm': 'Ошибка связи с удаленным сервером.',
    'submit-feedback': 'Отправьте отзыв о этой странице',

    // GitHub issue template: update repo and messaging when translating.
    'github-repo': 'https://github.com/go-tour-ru/tour',
    'issue-title': 'tour: [короткое описание отзыва]',
    'issue-message': 'Напишите сюда свой отзыв, добавьте код, если необходимо ',
    'context': 'Контекст',
}).

// Config for codemirror plugin
value('ui.config', {
    codemirror: {
        mode: 'text/x-go',
        matchBrackets: true,
        lineNumbers: true,
        autofocus: true,
        indentWithTabs: true,
        indentUnit: 4,
        tabSize: 4,
        lineWrapping: true,
        extraKeys: {
            'Shift-Enter': function() {
                $('#run').click();
            },
            'Ctrl-Enter': function() {
                $('#format').click();
            },
            'PageDown': function() {
                return false;
            },
            'PageUp': function() {
                return false;
            },
        },
        // TODO: is there a better way to do this?
        // AngularJS values can't depend on factories.
        onChange: function() {
            if (window.codeChanged !== null) window.codeChanged();
        }
    }
});
