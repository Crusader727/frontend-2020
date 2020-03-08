# frontend-2020

**Ссылка на просмотр баллов по лабораторным:** https://docs.google.com/spreadsheets/d/1ejWHxA-ZC-F3-VMgpQog1_faTB_uwUb5vXjx2m-CM9M/edit#gid=0 

# Flow 

## Инструкция:
#### 1. Склонировать репозиторий.
-  Необходимо склонить данный репозиторий к себе на рабочий компьютер.
  Для этого выполните в **Terminal** команду:  
  `git clone <url который отобразиться при нажатии на зеленую кнопку clone or download>`
- Открыть папку которая у вас появилась в разделе в который вы клонировали репозиторий в любом из редакторов кода или IDE, например в VisualStudio Code
- Отвести ветку:
  Для этого выполните в **Terminal** команду:  
  `git checkout -b номер вашей группы/ваша фамилия`

#### 2. Выполнение лабораторной работы
- Для начала выполнения лабораторных работ вам необходимо установить зависимости:  
  `npm install`
- В папке lab№номер текущей лабораторной работы, вы найдете файлы, необходимо решить задачи во всех файлах в данной папке условие задачи описано комментариями в каждом файле
- Запуск тестов для проверки ваших лабораторных:  
  `npm run test`
- Необходимо добиться того, чтобы все тесты проходили и горели зеленым, как только добъетесь этого можно переходить к этапу отправки лабораторной на проверку.

#### 3. Отправка лабораторной работы на проверку
- Сначала вам необходимо закомитеть и отправить файлы измененные вами в ходе решения лабораторной работы, для этого выполните команды:
  `git add .`  
  `git commit -m 'Выполнил задание по 1 лабораторной работе <Фамилия>'`  
  `git push`  
- После выполнение данных команд у вас появится ссылка в консоле на которую необходимо перейти и создать Pull Request.
- Далее тесты запустятся на вашем PR и как только они пройдут, мы возьмем ваши лабораторные на проверку.
- Если ваш PR будет **ОТКЛОНЕН**, то мы приняли вашу лабораторную на максиум!
- Если на вашем PR появятся какие либо комментарии от нас, то вам нужно будет что либо переделать, взависимости от того что мы написали вам в вашем PR, и повторить еще раз все действия описанные в пункте 3 только уже создавать PR не надо, ваши изменения подтянуть в уже существующий, после под каждым нашим комментарием написть done, если вы поправили, если нет то напишите почему или зайдайте вопросы.

## Инструкция по выполнению воторой лаб работы:
#### 1. Github Pages.
Github Pages это сервис, для отдачи статических фалов.
Для его использования нужно просто создать репозиторий с названием `<username>.github.io`.
И вот магия - все работает!
- необходимо залить файлик в корень репозитория `index.html`, и он станет доступен по урлу `https://<username>.github.io.`
[Подробная инструкция](https://pages.github.com/).
#### 2. Задание на 2 лабораторную.
- необходимо сверстать статью из Медиума. [Вот ссылка](https://medium.mybridge.co/learn-javascript-from-top-50-articles-for-the-past-year-v-2019-57a26f277f47).
- начиная от начала статьи и до `Tutorials are divided into 17 relevant groups (see below).`
![image](http://imgbox.com/BmbobCZG)
- шапка должна быть закреплена, если получится сделать красивую анимацию при скролле, будет супер!
- для отправки на проверку нужно будет заполнить в [табличку](https://docs.google.com/spreadsheets/d/17eyaUMGS_Sl31opHd77E1FHko6_u_FvFGolfbuM8FME/edit#gid=0) ссылку на репозиторй и на развернутый проект.
  





