import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './HelloWorld'
import BookCard from './BookCard'
function App() {

return(  <div className="app">
  <BookCard
    title="Абай жолы"
    author="Мұхтар Әуезов"
    year="1942"
    cover="https://avatars.mds.yandex.net/i?id=4bc41ff8da980648695b5070d1542ca88d864898-10875714-images-thumbs&n=13"
  />
  <BookCard
    title="1984"
    author="George Orwell"
    year="1949"
    cover="https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg"
  />
  <BookCard
    title="Жүз жылдық жалғыздық"
    author="Габриэль Гарсиа Маркес"
    year="1967"
    cover="https://avatars.mds.yandex.net/i?id=00bc8532128899734d6158cc31859754-7051380-images-thumbs&n=13"
  />
</div>
)

}

export default App;
