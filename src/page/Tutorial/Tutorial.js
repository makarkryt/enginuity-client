import { useEffect } from "react";
import "./tutorial.css"
const Tutorial  = ()=>{
    const onScroll = ()=> {
        const sections = document.querySelectorAll('section');
        const triggerBottom = window.innerHeight * 0.85;
        sections.forEach(section => {
          const top = section.getBoundingClientRect().top;
          if (top < triggerBottom) {
            section.classList.add('visible');
          }
        });
    }
    window.addEventListener('scroll', onScroll);
    useEffect(onScroll, [])
    return(
    <div className="App tutorial">
        <header className="App-header header">

        </header>
        <main className = "App-main main">
        <div class="container">
            <h1>Пошаговое руководство по использованию платформы</h1>

            <section>
            <h2>1. Начало работы</h2>
            <p>Зарегистрируйтесь или войдите в свой аккаунт. После входа перейдите в раздел обучения, где вы увидите иконку персонажа в правом нижнем углу экрана.</p>
            <div class="image-placeholder">Место для изображения: Вход на платформу и выбор обучения</div>
            </section>

            <section>
            <h2>2. Запуск диалога с персонажем</h2>
            <p>Кликните по иконке персонажа, чтобы открыть чат с виртуальным собеседником. Выберите уровень владения языком (A2, B1, C2) для персонализации беседы.</p>
            <div class="image-placeholder">Место для изображения: Иконка персонажа и окно диалога</div>
            </section>

            <section>
            <h2>3. Ведение беседы</h2>
            <p>Общайтесь с персонажем на английском языке, получая помощь в исправлении ошибок и подсказки по улучшению речи. Модель адаптируется под ваш уровень и стиль общения.</p>
            <div class="image-placeholder">Место для изображения: Пример диалога с подсказками и исправлениями</div>
            </section>

            <section>
            <h2>4. Накопление баллов и достижений</h2>
            <p>За активное участие в диалогах и выполнение заданий вы получаете баллы, которые можно использовать для открытия новых тем, упражнений и бонусов.</p>
            <div class="image-placeholder">Место для изображения: Личный кабинет с прогрессом и баллами</div>
            </section>

            <section>
            <h2>5. Использование дополнительных функций</h2>
            <p>Меняйте стиль общения (формальный, дружелюбный, разговорный), уровень сложности и просматривайте историю диалогов для анализа своих ошибок и прогресса.</p>
            <div class="image-placeholder">Место для изображения: Настройки стиля общения и уровень сложности</div>
            </section>
        </div>
        </main>
        <footer className='App-footer footer'>
          &copy; 2025 Enginuity. Все права защищены.
        </footer>
    </div>
    )
}
export default Tutorial ;