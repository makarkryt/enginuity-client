import { Button } from '@mui/material';
import './lending.css'
import { useContext, useEffect } from 'react';
import Imgs from './imgs';
import { Link } from 'react-router-dom';
import useSound from 'use-sound';
import switchOn from '../../sounds/switch-on.mp3'
import { SoundContext } from '../../Provider';
const Lending  = ()=>{
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
    const [isSound, setIsSound] = useContext(SoundContext);
    const [play, {stop}] = useSound(switchOn, {soundEnabled: isSound});
    return(
    <div className="App">
        <header className="App-header header">
        </header>
        <main className = "App-main main lending">
            <div className="container about">
                <section className="section">
                    <h1>🚀 Enginuity - персонализированное обучение иностранным языкам с AI! 🌍✨</h1>
                    <p>
                    Наша платформа предлагает уникальный подход к изучению языков через интерактивные диалоги, созданные с помощью нейросети. 🤖💬  
                    </p>
                    <p>
                    Enginuity генерирует реалистичные разговоры, исправляет ошибки и имитирует общение с носителями языка, создавая эффект полного погружения! 🎧🗣️  
                    </p>
                    <p>
                    Учитесь в удобное время, в любом месте, используя современные технологии и персонализированные программы обучения. 📱💡  
                    </p>
                    <div style={{textAlign: 'center', marginTop: '30px'}}>
                    <Link to={'/learning'}><Button onMouseEnter={()=> play()} onMouseLeave={()=> stop()} variant='outlined'>Начать бесплатно 🎯</Button></Link>
                    </div>
                </section>

                <section className="section">
                    <h2>🔥 Преимущества Enginuity</h2>
                    <ul>
                    <li>🎯 Персонализация обучения с учётом вашего уровня, целей и интересов.</li>
                    <li>🤖 Использование нейросети для создания живых диалогов и мгновенной коррекции ошибок!</li>
                    <li>🗣️ Имитация общения с носителями языка для развития разговорных навыков. </li>
                    <li>📱 Доступ к обучению 24/7 с любого устройства - дома, в дороге или на работе. </li>
                    <li>💡 Разнообразные форматы обучения: диалоги, тесты, игровые задания и видео! </li>
                    <li>👥 Сообщество и поддержка - общайтесь с другими учащимися и получайте помощь от экспертов. </li>
                    <li>📊 Отслеживание прогресса и персональные отчёты для эффективного планирования обучения.</li>
                    </ul>
                    <div className='lending-img'>
                        <img src={Imgs.Interface} width={700} alt='Interface'></img>
                    </div>
                    
                </section>

                <section className="section">
                    <h2>⚡ Как работает платформа?</h2>
                    <ol>
                    <li><b>📝 Регистрация и тестирование:</b> создайте профиль и пройдите тест для определения уровня.</li>
                    <li><b>🧠 Персональная программа:</b> нейросеть формирует курс, адаптированный под ваши потребности!</li>
                    <li><b>💬 Обучение через интерактивные диалоги:</b> практикуйтесь с виртуальными собеседниками и получайте мгновенную обратную связь. </li>
                    <li><b>👥 Поддержка и сообщество:</b> участвуйте в обсуждениях, групповых занятиях и получайте советы от экспертов. </li>
                    <li><b>📈 Отслеживание прогресса:</b> анализируйте результаты и корректируйте цели обучения. </li>
                    </ol>
                </section>

                <section className="section">
                    <h2>🧩 Методики и технологии</h2>
                    <p>
                    Enginuity сочетает лучшие практики онлайн-обучения: структурированное планирование, микроуроки, интерактивные задания и смешанное обучение с элементами живого общения. 🎓💡  
                    </p>
                    <p>
                    Мы используем адаптивные алгоритмы, которые подстраиваются под ваш стиль обучения, помогая сосредоточиться на сложных темах и поддерживая мотивацию! 🚀🧠  
                    </p>
                </section>

                <section className="section">
                    <h2>🌟 Отзывы пользователей</h2>
                    <div className="review">
                    <p>"С Enginuity я наконец-то начала говорить на английском! Диалоги с нейросетью очень похожи на реальное общение! 😍"</p>
                    <div className="review-author">- Ольга, преподаватель 👩‍🏫</div>
                    </div>
                    <div className="review">
                    <p>"Удобно учиться в любое время, а поддержка и сообщество всегда на связи. Рекомендую! 👍"</p>
                    <div className="review-author">- Алексей, студент 🎓</div>
                    </div>
                </section> 

                <section className="section">
                    <h2>🎯 Для кого подходит Enginuity?</h2>
                    <ul>
                        <li>🎓 Студенты, желающие быстро и эффективно освоить иностранный язык для учёбы, работы или путешествий. ✈️📚</li>
                        <li>💼 Специалисты, которым важно поддерживать и развивать языковые навыки для профессионального роста. 📈🌐</li>
                        <li>👨‍👩‍👧‍👦 Родители, ищущие современные решения для обучения детей. 🧒📱</li>
                        <li>🌟 Все, кто хочет практиковать язык в реальных ситуациях без страха ошибок и стеснения. 💬😊</li>
                    </ul>
                    <p>Enginuity адаптируется под любой уровень - от начинающих 🐣 до продвинутых 🚀, предлагая персонализированные сценарии и темы, которые действительно интересны вам. 🎯✨</p>
                </section>

                <section className="section">
                    <h2>🎥 Примеры интерактивных диалогов 💬✨</h2>
                    <div className="dialog-examples" style={{background: '#f9f9f9', padding: '15px', borderRadius: '8px'}}>
                        <div className="dialog" style={{marginBottom: '15px'}}>
                            <p><b>Ситуация:</b> Заказ в кафе ☕🥐</p>
                            <p><i>AI:</i> Hello! What would you like to order today? 😊</p>
                            <p><i>Вы:</i> I’d like a cappuccino and a croissant, please. 🙋‍♂️</p>
                            <p><i>AI:</i> Great choice! Would you like anything else? 🍰</p>
                        </div>
                        <div className="dialog">
                            <p><b>Ситуация:</b> Собеседование на работу 💼📋</p>
                            <p><i>AI:</i> Tell me about your previous work experience. 👔</p>
                            <p><i>Вы:</i> I have worked as a project manager for three years... 📅</p>
                            <p><i>AI:</i> That’s impressive! What was the biggest challenge you faced? 🚀</p>
                        </div>
                    </div>
                    <p>
                    Каждый диалог адаптируется под ваш уровень и цели, а нейросеть мгновенно исправляет ошибки и даёт рекомендации по улучшению речи. 💡📢 Вы можете выбрать разные сценарии, чтобы подготовиться к реальным ситуациям - от повседневного общения до деловых встреч и путешествий. 🌍✈️  
                    </p>
                </section>

                <section className="section">
                    <h2>📢 Часто задаваемые вопросы</h2>
                    <ul>
                        <li>
                            <b>Можно ли заниматься с мобильного?</b> 📱<br />
                            Да, платформа полностью адаптирована для смартфонов и планшетов. Учитесь в удобное время - дома, в дороге или на работе! 🚀✨
                        </li>
                        <li>
                            <b>Как быстро я увижу результат?</b> ⏳<br />
                            Уже после первых занятий вы заметите рост уверенности в разговорной речи. Прогресс зависит от регулярности занятий и выбранной программы. 📈💬
                        </li>
                        <li>
                            <b>Есть ли бесплатный пробный период?</b> 🎁<br />
                            Да, вы можете начать обучение бесплатно и оценить все возможности платформы. 🆓👍
                        </li>
                        <li>
                            <b>Подходит ли платформа для детей?</b> 👧🧒<br />
                            Да, есть специальные программы для школьников с игровыми элементами и адаптированными заданиями. 🎮📚
                        </li>
                    </ul>
                </section>

                <section className="section">
                    <h2>🚀 Начните учиться уже сегодня!</h2>
                    <p>
                    Присоединяйтесь к тысячам пользователей, которые улучшили свои языковые навыки с помощью Enginuity - инновационной платформы с нейросетевой поддержкой и интерактивными диалогами! 🌟📚  
                    </p>
                    <div style={{textAlign: 'center', marginTop: '20px'}}>
                        <Link to={'/Login'}><Button variant='outlined'>Зарегистрироваться бесплатно 🎉</Button></Link>
                    </div>
                </section>
                </div>

        </main>
        <footer className='App-footer footer'>
            &copy; 2025 Enginuity. Все права защищены.
        </footer>
    </div>
    )
}
export default Lending ;