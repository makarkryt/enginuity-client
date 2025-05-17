import { TextareaAutosize, Button, Container, Typography } from "@mui/material"
import imgs from "./study-imgs"
import "./study.css"
import { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import useSound from 'use-sound';
import bite from '../../sounds/bite.mp3'
import block from '../../sounds/block-metal.mp3'
import { SoundContext } from "../../Provider"
const PersonItem = ({ person, onPersonClick, onBlockPerson }) => {
  const { id, price, img, name } = person;
  const [isShaking, setIsShaking] = useState(false);

  const handleBlock = () => {
    onBlockPerson(person);
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  return (
    <div key={id} className="study-person">
      <Button onClick={() => price === 'free' ? onPersonClick(person) : handleBlock()} variant="text">
        <div className={price === 'free' ? "study-pay none" : "study-pay"}>
          <img 
            src={imgs.Lock} 
            alt="Lock" 
            className={isShaking ? "shake" : ""} 
          />
        </div>
        <img width={48} src={img} alt={name || "Person"} />
      </Button>
    </div>
  );
};
const Study = ()=>{
    const [isSound, setIsSound] = useContext(SoundContext);
    const [persons, setPersons] = useState([
  {
    id: 0,
    img: imgs.Amelia,
    price: "free",
    text: `You are Amelia, a creative and enthusiastic English teacher from New York. 
    You are patient and encouraging, always ready to inspire learners with fun stories and cultural facts. 
    You engage users with lively conversations and help them build confidence in speaking.`,
  },
  {
    id: 1,
    img: imgs.Ava,
    price: "free",
    text: `You are Ava, a calm and thoughtful English tutor from Sydney. 
    You focus on clear explanations and practical usage, helping users understand grammar and vocabulary deeply. 
    You listen carefully and provide gentle corrections with kindness.`,
  },
  {
    id: 2,
    img: imgs.Charles,
    price: "free",
    text: `You are Charles, a friendly and humorous English instructor from Toronto. 
    You use jokes and light-hearted examples to make learning enjoyable. 
    You encourage users to speak freely and help them overcome language anxiety with positivity.`,
  },
  {
    id: 3,
    img: imgs.Charlotte,
    price: "free",
    text: `You are Charlotte, a dedicated and patient English coach from Dublin. 
    You enjoy discussing literature, music, and everyday life, helping users expand their vocabulary through meaningful conversations. 
    You correct mistakes gently and motivate learners to keep improving.`,
  },
  {
    id: 4,
    img: imgs.Daniel,
    price: "free",
    text: `You are Daniel, an energetic and supportive English teacher from Chicago. 
    You focus on conversational skills and real-life situations, making lessons practical and engaging. 
    You always encourage users to ask questions and express themselves confidently.`,
  },
  {
    id: 5,
    img: imgs.David,
    price: "free",
    text: `You are David, a young and friendly English teacher from London. 
    Optimistic, patient, and attentive to details. 
    In communication, you show genuine interest in your conversation partner, ask questions, and keep the conversation going. 
    You gently correct mistakes, explaining the reasons and rules, and use humor and a positive attitude.
     Your style is lively, supportive, and inspiring. You are open to discussing various topics-travel, music, movies, daily life, hobbies-and always strive to make the dialogue interesting and comfortable for the user.`,
  },
  {
    id: 6,
    img: imgs.Emma,
    price: "free",
    text: `You are Emma, a warm and encouraging English tutor from Boston. 
    You focus on building vocabulary and pronunciation skills through storytelling and interactive exercises. 
    You create a friendly atmosphere where users feel comfortable practicing regularly.`,
  },
  {
    id: 7,
    img: imgs.Evelyn,
    price: "free",
    text: `You are Evelyn, a patient and detail-oriented English teacher from Manchester. 
    You emphasize grammar accuracy and help users understand complex rules with simple explanations. 
    You are attentive and always ready to support learners with constructive feedback.`,
  },
  {
    id: 8,
    img: imgs.Harper,
    price: "free",
    text: `You are Harper, an enthusiastic and creative English instructor from Los Angeles. 
    You love incorporating music, movies, and pop culture into lessons to keep users engaged. 
    Your cheerful personality motivates learners to enjoy every step of their language journey.`,
  },
  {
    id: 9,
    img: imgs.James,
    price: "free",
    text: `You are James, a calm and encouraging English teacher from Edinburgh. 
    You focus on conversational fluency and practical expressions, helping users communicate effectively in everyday situations. 
    You provide supportive corrections and foster a relaxed learning environment.`,
  },
  {
    id: 10,
    img: imgs.John,
    price: "free",
    text: `You are John, a knowledgeable and patient English tutor from Vancouver. 
    You enjoy explaining language nuances and cultural contexts, helping users deepen their understanding. 
    You encourage curiosity and make learning both fun and meaningful.`,
  },
  {
    id: 11,
    img: imgs.Mia,
    price: "free",
    text: `You are Mia, a friendly and motivating English teacher from Seattle. 
    You focus on speaking confidence and practical vocabulary, using real-life examples and role-plays. 
    Your positive attitude helps users overcome fears and speak naturally.`,
  },
  {
    id: 12,
    img: imgs.Sophia,
    price: "free",
    text: `You are Sophia, a patient and empathetic English tutor from Melbourne. 
    You tailor lessons to individual needs and learning styles, providing clear explanations and gentle corrections.
     You create a supportive space for learners to grow at their own pace.`,
  },
  {
    id: 13,
    img: imgs.Thomas,
    price: "free",
    text: `You are Thomas, an energetic and friendly English instructor from Boston.
     You love engaging users with interactive activities and discussions on diverse topics. 
     Your enthusiasm inspires learners to practice regularly and enjoy the process.`,
  },
  {
    id: 14,
    img: imgs.William,
    price: "premium",
    text: `You are William, an experienced and professional English teacher from New York.
     You specialize in advanced grammar and business English, helping users refine their skills for academic and professional success.
      You provide detailed feedback and personalized guidance.`,
  },
  {
    id: 15,
    img: imgs.Unknown,
    price: "premium",
    text: `You are a mysterious and versatile English tutor with a wealth of knowledge in various fields. 
    You adapt your teaching style to the user's needs, offering both casual conversation practice and in-depth language lessons. 
    Your intriguing personality keeps users curious and engaged.`,
  },
]);
    // Временная мера
    const beginPrompt = `You are a virtual persona on an educational platform for learning foreign languages. 
    Your task is to be an engaging conversational partner, maintain the dialogue, help the user learn, and motivate them. 
    Here are your main characteristics and behavioral guidelines: Character: friendly, patient, supportive, and open. 
    Show genuine interest in the user, ask questions, and encourage them to speak more. Do not criticize; gently correct mistakes and explain the proper usage. 
    Role: you are not only a conversational partner but also a mentor who helps the user learn the language through live communication. 
    Use the language the user is learning, adapting the difficulty level to their knowledge. 
    Introduce new words, expressions, and grammatical structures into the dialogue, explaining them as needed. 
    Context: behave like a real person with an interesting profession, hobbies, and unique life experiences (for example, a teacher, traveler, writer, etc.). 
    Share stories about yourself, suggest discussing various topics such as hobbies, culture, travel, work, daily life, and so on. 
    Keep the conversation going even if the user is silent or gives short answers.
    Communication: encourage the user to ask questions and express their thoughts. 
    Use humor, empathy, and a positive attitude. When necessary, provide brief explanations in the user's native language, but try to use the target language as much as possible. 
    Feedback: gently correct mistakes, explain rules, and offer recommendations to improve speech. Praise successes and progress.`
    // Временная мера
    const [activePerson, setActivePerson] = useState(null);
    const [userText, setUserText] = useState("")
    const [personMusic] = useSound(bite, {soundEnabled: isSound});
    const [blockMusic] = useSound(block, {soundEnabled: isSound});
    const [chatMessages, setChatMessages] = useState([]);
    const blockPerson = (e)=>{
        blockMusic()
        console.log(e)
        const buttonIcon = document.querySelector('.study-pay').querySelector('IMG')
        //Исправить
        buttonIcon.classList.add("shake")
        setTimeout(()=> buttonIcon.classList.remove("shake"), 500)
    }
    const personClick = (e)=>{
        handleSubmit(beginPrompt+e.text)
        setChatMessages(chatMessages.slice(1, ))
        personMusic();
        setActivePerson(e);
    }
    const editMessage = (e)=>{
        setUserText(e.target.value)
    }

    const sendMessage = ()=>{
        if(!userText){
            return;
        }
        document.querySelector('.loader').classList.remove("hidden")
        handleSubmit(userText)
        setUserText("");
    }
    useEffect(()=>{
      const container = document.querySelector('.study-messages') || document.documentElement;
      container.scrollTo({
        top: container.scrollHeight + 202,
        behavior: 'smooth'
      });
    }, [chatMessages])
    const handleSubmit = async (e) => {
        if (e && e.preventDefault) e.preventDefault();
        setChatMessages(prev => [...prev, { role: 'user', content: e }]);
        try {
        const response = await fetch('http://localhost:5000/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: e })
        });
        const data = await response.json();
        document.querySelector('.loader').classList.add("hidden")
        setChatMessages(prev => [...prev, { role: 'ai', content: data.reply }]);
        } catch (err) {
        setChatMessages(prev => [...prev, { role: 'system', content: 'Ошибка: ' + err.message }]);
        }
    };
    const [isMobile, setIsMobile] = useState( window.innerWidth <= 760)
    return(
        isMobile ? (
          <Container
          maxWidth={false} 
          className="main-study study-mobile" 
          sx={{ width: '100%', maxWidth: '900px', margin: '0 auto', boxSizing: 'border-box' }}
        >
          {activePerson ? 
            <section className="study-messages">
              <div className="study-tell">
                {chatMessages.map((message, i) => (
                  message.role === "ai" ?
                  <Typography 
                    key={i}  
                    sx={{alignSelf: 'flex-start', borderRadius: "8px 8px 8px 0"}} 
                    variant="body1"
                  >
                    {message.content}
                  </Typography>
                  :
                  <Typography 
                    key={i} 
                    sx={{alignSelf: 'flex-end', borderRadius: "8px 8px 0px 8px"}} 
                    variant="body1"
                  >
                    {message.content}
                  </Typography>
                ))}
                <div className="loader"></div>
              </div>
            </section>
            :
            <section className="study-characters">
              <div className="study-persons">
                {persons.map(person => (
                  <PersonItem
                    key={person.id}
                    person={person}
                    onPersonClick={personClick}
                    onBlockPerson={blockPerson}
                  />
                ))}
              </div>
            </section>
          }
          <section className="study-input" style={{ overflowX: 'auto' }}>
            <div className="study-grid">
              <div className="study-textArea">
                <TextareaAutosize
                  onChange={editMessage}
                  onKeyDown={e => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                  value={userText}
                  minRows={3}
                  maxRows={6}
                  placeholder="Напишите что нибудь..."
                />
              </div>
              <div className="study-buttons">
                <div>
                  <Button variant="text"><img width={24} src={imgs.Clip} alt="Clip" /></Button>
                </div>
                <div>
                  <Button variant="text" onClick={() => sendMessage()}><img width={24} src={imgs.Send} alt="Send" /></Button>
                </div>
              </div>
            </div>
          </section>
          <section className="study-links">
            <ul>
              <li><Link to='/tutorial'><Typography variant="body2">Гайды</Typography></Link></li>
              <li><Link to='/about'><Typography variant="body2">О нас</Typography></Link></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://vk.com/enginuity?from=groups">
              <Typography variant="body2">Наши соц. сети</Typography></a></li>
              <li><Link to='/update'><Typography variant="body2">Обновления</Typography></Link></li>
              <li><Link to='/donate'><Typography variant="body2">Пожертвовать</Typography></Link></li>
            </ul>
          </section>
        </Container>
        ) : (
          <Container md={6} xs= {12}
          maxWidth={false} 
          className="main-study study" 
          sx={{ width: '100%', maxWidth: '900px', margin: '0 auto', boxSizing: 'border-box' }}
        >
          {activePerson ? 
            <section className="study-messages">
              <div className="study-tell">
                {chatMessages.map((message, i) => (
                  message.role === "ai" ?
                  <Typography 
                    key={i}  
                    sx={{alignSelf: 'flex-start', borderRadius: "8px 8px 8px 0"}} 
                    variant="body1"
                  >
                    {message.content}
                  </Typography>
                  :
                  <Typography 
                    key={i} 
                    sx={{alignSelf: 'flex-end', borderRadius: "8px 8px 0px 8px"}} 
                    variant="body1"
                  >
                    {message.content}
                  </Typography>
                ))}
                <div className="loader"></div>
              </div>
            </section>
            :
            <section className="study-characters">
              <div className="study-persons">
                {persons.map(person => (
                  <PersonItem
                    key={person.id}
                    person={person}
                    onPersonClick={personClick}
                    onBlockPerson={blockPerson}
                  />
                ))}
              </div>
            </section>
          }
          <section className="study-input" style={{ overflowX: 'auto' }}>
            <div className="study-grid">
              <div className="study-textArea">
                <TextareaAutosize
                  onChange={editMessage}
                  onKeyDown={e => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                  value={userText}
                  minRows={3}
                  maxRows={6}
                  placeholder="Напишите что нибудь..."
                />
              </div>
              <div className="study-buttons">
                <div>
                  <Button variant="text"><img width={24} src={imgs.Clip} alt="Clip" /></Button>
                </div>
                <div>
                  <Button variant="text" onClick={() => sendMessage()}><img width={24} src={imgs.Send} alt="Send" /></Button>
                </div>
              </div>
            </div>
          </section>
          <section className="study-links">
            <ul>
              <li><Link to='/tutorial'><p>Гайды</p></Link></li>
              <li><Link to='/about'><p>О нас</p></Link></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://vk.com/enginuity?from=groups"><p>Наши соц. сети</p></a></li>
              <li><Link to='/update'><p>Обновления</p></Link></li>
              <li><Link to='/donate'><p>Пожертвовать</p></Link></li>
            </ul>
          </section>
        </Container>
        )
    )
}
export default Study
/*
<Container md={6} xs= {12}
          maxWidth={false} 
          className="main-study study" 
          sx={{ width: '100%', maxWidth: '900px', margin: '0 auto', boxSizing: 'border-box' }}
        >
          {activePerson ? 
            <section className="study-messages">
              <div className="study-tell">
                {chatMessages.map((message, i) => (
                  message.role === "ai" ?
                  <Typography 
                    key={i}  
                    sx={{alignSelf: 'flex-start', borderRadius: "8px 8px 8px 0"}} 
                    variant="body1"
                  >
                    {message.content}
                  </Typography>
                  :
                  <Typography 
                    key={i} 
                    sx={{alignSelf: 'flex-end', borderRadius: "8px 8px 0px 8px"}} 
                    variant="body1"
                  >
                    {message.content}
                  </Typography>
                ))}
                <div className="loader"></div>
              </div>
            </section>
            :
            <section className="study-characters">
              <div className="study-persons">
                {persons.map(person => (
                  <PersonItem
                    key={person.id}
                    person={person}
                    onPersonClick={personClick}
                    onBlockPerson={blockPerson}
                  />
                ))}
              </div>
            </section>
          }
          <section className="study-input" style={{ overflowX: 'auto' }}>
            <div className="study-grid">
              <div className="study-textArea">
                <TextareaAutosize
                  onChange={editMessage}
                  onKeyDown={e => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                  value={userText}
                  minRows={3}
                  maxRows={6}
                  placeholder="Напишите что нибудь..."
                />
              </div>
              <div className="study-buttons">
                <div>
                  <Button variant="text"><img width={24} src={imgs.Clip} alt="Clip" /></Button>
                </div>
                <div>
                  <Button variant="text" onClick={() => sendMessage()}><img width={24} src={imgs.Send} alt="Send" /></Button>
                </div>
              </div>
            </div>
          </section>
          <section className="study-links">
            <ul>
              <li><Link to='/tutorial'><p>Гайды</p></Link></li>
              <li><Link to='/about'><p>О нас</p></Link></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://vk.com/enginuity?from=groups"><p>Наши соц. сети</p></a></li>
              <li><Link to='/update'><p>Обновления</p></Link></li>
              <li><Link to='/donate'><p>Пожертвовать</p></Link></li>
            </ul>
          </section>
        </Container>
*/