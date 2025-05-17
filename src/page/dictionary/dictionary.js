import { Container, TextField, Card, CardMedia, CardContent, CardActions, Typography, Grid, Button } from '@mui/material';
import './dictionary.css'
import { useContext, useState } from 'react';
import imgs from './imgs';
import useSound from 'use-sound';
import { SoundContext } from '../../Provider';
import switchOn from '../../sounds/switch-on.mp3'
const Dictionary  = ()=>{
    const [cards, setCards] = useState([
        {
            title: 'Погода и природа',
            text: 'Слова и выражения о погоде, природных явлениях и окружающем мире.',
            img: imgs.Park,
            show: true,
        },
        {
            title: 'Спорт',
            text: 'Лексика о здоровье, спорте, тренировках и активном образе жизни.',
            img: imgs.Boxing,
            show: true,
        },
        {
            title: 'Путешествия',
            text: 'Слова и выражения для поездок, транспорта и ориентирования в пути.',
            img: imgs.Tent,
            show: true,
        },
        {
            title: 'Семья',
            text: 'Лексика о родственниках, друзьях и семейных отношениях.',
            img: imgs.Family2,
            show: true,
        },
        {
            title: 'Хобби и увлечения',
            text: 'Слова о хобби, развлечениях, музыке и досуге.',
            img: imgs.Hobby,
            show: true,
        },
        {
            title: 'Работа',
            text: 'Термины, связанные с профессиями, офисом и рабочими ситуациями.',
            img: imgs.Work,
            show: true,
        },
        {
            title: 'Еда и напитки',
            text: 'Лексика о продуктах, блюдах, напитках и ресторанах.',
            img: imgs.Food,
            show: true,
        },
        {
            title: 'Школа и обучение',
            text: 'Слова о школе, учебных предметах и образовательных процессах.',
            img: imgs.School,
            show: true,
        },
        {
            title: 'Город',
            text: 'Термины о зданиях, улицах, магазинах и городской жизни.',
            img: imgs.Town,
            show: true,
        },
        {
            title: 'Транспорт',
            text: 'Слова о видах транспорта, билетах и перемещениях.',
            img: imgs.Car,
            show: true,
        },
        {
            title: 'Технологии',
            text: 'Лексика о современных устройствах, интернете и технологиях.',
            img: imgs.Tech,
            show: true,
        },
        {
            title: 'Одежда и мода',
            text: 'Слова о одежде, стилях, аксессуарах и покупках.',
            img: imgs.Jacket,
            show: true,
        },
        {
            title: 'Животные',
            text: 'Лексика о домашних и диких животных и их среде обитания.',
            img: imgs.Lion,
            show: true,
        },
        {
            title: 'Одежда и мода',
            text: 'Слова о одежде, стилях, аксессуарах и покупках.',
            img: imgs.Park,
            show: true,
        },
        {
            title: 'Животные',
            text: 'Лексика о домашних и диких животных и их среде обитания.',
            img: imgs.Park,
            show: true,
        },
    ])
    const [search, setSearch] = useState('')
    const [isSound, setIsSound] = useContext(SoundContext);
    const [play,{stop}] = useSound(switchOn, {soundEnabled: isSound});
    const onSearch = (e)=>{
        setSearch(e.value)
        setCards((list)=> list.map((card)=>{
            let titles = card.title.toLowerCase().split(' ');
            let value = e.value.toLowerCase();
            for(let i in titles){
                if(titles[i].slice(0, value.length) == value){
                    card.show = true;
                    break;
                }
                else{
                    card.show = false;
                }
            }
            return card
        }))
    }
    return(
    <div className="App">
        <header className="App-header header">

        </header>
        <main className = "App-main main">
            <Container maxWidth = 'md' className='main-dictionary dictionary'>
                <TextField onChange={(e)=> onSearch(e.target)} value={search} type='search' label = "Поиск слов"></TextField>
                <div className='dictionary-list'>
                    <Grid container spacing={2} justifyContent="center" alignItems="stretch" sx={{ minHeight: '50%' }}>
                        {cards.map((element) =>
                            element.show && (
                            <Grid
                                item
                                key={element.id}
                                xs={12}
                                sm={6}
                                md={4}
                                sx={{ display: 'flex' }}
                                className="dictionary-item"
                                onMouseEnter={() => play()}
                                onMouseLeave={() => stop()}
                            >
                                <Card sx={{ maxWidth: 250, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <CardMedia sx={{ height: 180 }} image={element.img} />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h5">{element.title}</Typography>
                                    <Typography variant="body2">{element.text}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Повторить</Button>
                                    <Button size="small">Узнать больше</Button>
                                </CardActions>
                                </Card>
                            </Grid>
                            )
                        )}
                    </Grid>
                </div>
            </Container>
        </main>
    </div>
    )
}
export default Dictionary;